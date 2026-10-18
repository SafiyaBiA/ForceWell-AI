import React, { useState } from 'react';
import { useApp } from '../../store/AppContext';
import { Personnel } from '../../types';
import { calculateHybridRisk } from '../../engine/hybridRiskEngine';
import {
  Upload,
  CheckCircle2,
  AlertTriangle,
  FileSpreadsheet,
  X,
  FileCheck,
  RefreshCw,
  AlertCircle
} from 'lucide-react';

interface CsvUploadModalProps {
  onClose: () => void;
}

interface ValidationReport {
  totalRows: number;
  validRows: number;
  rejectedRows: number;
  duplicateCount: number;
  qualityScore: number;
  errors: string[];
  parsedPersonnel: Personnel[];
}

export const CsvUploadModal: React.FC<CsvUploadModalProps> = ({ onClose }) => {
  const { importCsvPersonnel, personnelList } = useApp();

  const [rawText, setRawText] = useState('');
  const [report, setReport] = useState<ValidationReport | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [importSuccess, setImportSuccess] = useState(false);

  const sampleCsv = `personnel_id,unit,deployment_days,leave_gap_days,leave_utilization,duty_hours,transfer_frequency,training_load,workload_score,sleep_quality,fatigue_score,recovery_score,wellness_score
P-2001,Unit Alpha,46,90,20,13.0,2,80,85,Poor,82,24,30
P-2002,Unit Bravo,15,20,75,8.0,1,30,40,Good,20,88,85
P-2003,Unit Charlie,34,50,45,11.0,1,60,65,Fair,58,45,50
P-2004,Unit Delta,28,40,60,9.5,2,45,50,Good,30,75,70
P-2005,Unit Echo,50,110,15,14.0,3,85,92,Poor,88,20,25`;

  const parseAndValidate = (csvContent: string) => {
    setIsProcessing(true);
    const lines = csvContent.trim().split(/\r?\n/).filter(line => line.trim().length > 0);

    if (lines.length < 2) {
      setReport({
        totalRows: 0,
        validRows: 0,
        rejectedRows: 0,
        duplicateCount: 0,
        qualityScore: 0,
        errors: ['File is empty or missing data rows.'],
        parsedPersonnel: []
      });
      setIsProcessing(false);
      return;
    }

    const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
    const existingIds = new Set(personnelList.map(p => p.id));
    const seenInFileIds = new Set<string>();

    const validItems: Personnel[] = [];
    const errors: string[] = [];
    let duplicateCount = 0;

    for (let i = 1; i < lines.length; i++) {
      const rowNum = i + 1;
      const cols = lines[i].split(',').map(c => c.trim());

      if (cols.length < headers.length) {
        errors.push(`Row ${rowNum}: Malformed record (expected ${headers.length} columns, found ${cols.length})`);
        continue;
      }

      const pId = cols[0];
      const unitStr = cols[1];
      const deploymentDays = Number(cols[2]);
      const leaveGapDays = Number(cols[3]);
      const leaveUtilization = Number(cols[4]);
      const dutyHours = Number(cols[5]);
      const transferFreq = Number(cols[6]);
      const trainingLoad = Number(cols[7]);
      const workloadScore = Number(cols[8]);
      const sleepQualityRaw = cols[9];
      const fatigueScore = Number(cols[10]);
      const recoveryScore = Number(cols[11]);
      const wellnessScore = Number(cols[12]);

      // Range validations
      if (!pId || pId.length < 3) {
        errors.push(`Row ${rowNum}: Invalid personnel_id format '${pId}'`);
        continue;
      }
      if (seenInFileIds.has(pId) || existingIds.has(pId)) {
        duplicateCount++;
        errors.push(`Row ${rowNum}: Duplicate personnel ID '${pId}' rejected`);
        continue;
      }
      seenInFileIds.add(pId);

      if (isNaN(deploymentDays) || deploymentDays < 0 || deploymentDays > 365) {
        errors.push(`Row ${rowNum}: deployment_days (${cols[2]}) out of valid range 0-365`);
        continue;
      }
      if (isNaN(dutyHours) || dutyHours < 0 || dutyHours > 24) {
        errors.push(`Row ${rowNum}: duty_hours (${cols[5]}) exceeds daily ceiling 0-24`);
        continue;
      }
      if (isNaN(workloadScore) || workloadScore < 0 || workloadScore > 100) {
        errors.push(`Row ${rowNum}: workload_score (${cols[8]}) must be between 0-100`);
        continue;
      }

      const sleepQuality: 'Poor' | 'Fair' | 'Good' =
        sleepQualityRaw.toLowerCase() === 'poor' ? 'Poor' :
        sleepQualityRaw.toLowerCase() === 'fair' ? 'Fair' : 'Good';

      // Re-run Hybrid Risk Engine on validated record
      const prediction = calculateHybridRisk({
        deploymentDays,
        leaveGapDays,
        leaveUtilization,
        dutyHours,
        workloadScore,
        transferFrequency: transferFreq || 1,
        trainingLoad: trainingLoad || 40,
        sleepQuality,
        fatigueScore: fatigueScore || 40,
        recoveryScore: recoveryScore || 60,
        wellnessScore: wellnessScore || 60
      });

      const unitCode = unitStr.toLowerCase().includes('bravo') ? 'Bravo' :
                       unitStr.toLowerCase().includes('charlie') ? 'Charlie' :
                       unitStr.toLowerCase().includes('delta') ? 'Delta' :
                       unitStr.toLowerCase().includes('echo') ? 'Echo' : 'Alpha';

      validItems.push({
        id: pId,
        name: `Ct. Synthetic ${pId.replace('P-', '')}`,
        rank: 'Constable',
        unit: unitStr || 'Unit Alpha',
        unitCode,
        deploymentDays,
        deploymentStatus: 'Active Field',
        dutyHours,
        leaveGapDays,
        leaveUtilization,
        transferFrequency: transferFreq || 1,
        trainingLoad: trainingLoad || 40,
        workloadScore,
        sleepQuality,
        fatigueScore,
        recoveryScore,
        wellnessScore,
        riskScore: prediction.riskScore,
        riskCategory: prediction.riskCategory,
        riskTrend: 'Stable',
        primaryIndicators: prediction.primaryIndicators,
        baselineRisk: Math.max(15, prediction.riskScore - 10),
        history: [
          { week: 'W-1', riskScore: Math.max(15, prediction.riskScore - 8), workload: workloadScore, recovery: recoveryScore, sleep: 70, fatigue: fatigueScore },
          { week: 'W-2', riskScore: Math.max(15, prediction.riskScore - 6), workload: workloadScore, recovery: recoveryScore, sleep: 65, fatigue: fatigueScore },
          { week: 'W-3', riskScore: Math.max(15, prediction.riskScore - 4), workload: workloadScore, recovery: recoveryScore, sleep: 60, fatigue: fatigueScore },
          { week: 'W-4', riskScore: Math.max(15, prediction.riskScore - 2), workload: workloadScore, recovery: recoveryScore, sleep: 55, fatigue: fatigueScore },
          { week: 'W-5', riskScore: prediction.riskScore, workload: workloadScore, recovery: recoveryScore, sleep: 50, fatigue: fatigueScore },
        ],
        lastCheckInDate: new Date().toISOString().split('T')[0],
        supportRequested: false
      });
    }

    const totalRows = lines.length - 1;
    const validRows = validItems.length;
    const rejectedRows = totalRows - validRows;
    const qualityScore = Math.round((validRows / (totalRows || 1)) * 100);

    setReport({
      totalRows,
      validRows,
      rejectedRows,
      duplicateCount,
      qualityScore,
      errors,
      parsedPersonnel: validItems
    });
    setIsProcessing(false);
  };

  const handleApplyImport = () => {
    if (report && report.parsedPersonnel.length > 0) {
      importCsvPersonnel(report.parsedPersonnel);
      setImportSuccess(true);
      setTimeout(() => {
        onClose();
      }, 1500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-slate-950 border border-slate-800 rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-slate-900/80 p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Personnel Dataset Ingestion (CSV)</h3>
              <p className="text-xs text-slate-400">
                Schema verification, outlier validation and duplicate detection
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-slate-300 font-semibold uppercase tracking-wider text-[11px]">
              CSV Content or Paste Buffer
            </span>
            <button
              onClick={() => {
                setRawText(sampleCsv);
                parseAndValidate(sampleCsv);
              }}
              className="text-blue-400 hover:text-blue-300 font-medium text-[11px] underline"
            >
              Load Sample Synthetic CSV
            </button>
          </div>

          <textarea
            value={rawText}
            onChange={e => {
              setRawText(e.target.value);
              if (e.target.value.trim()) parseAndValidate(e.target.value);
            }}
            placeholder="Paste CSV rows here or click 'Load Sample Synthetic CSV' above..."
            rows={6}
            className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-slate-200 font-mono text-[11px] focus:outline-none focus:border-blue-500"
          />

          {/* Validation Report */}
          {report && (
            <div className="space-y-3 bg-slate-900/90 border border-slate-800 rounded-xl p-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="font-bold text-white uppercase tracking-wider text-[11px]">
                  Data Quality & Validation Summary
                </span>
                <span
                  className={`font-mono font-bold px-2 py-0.5 rounded text-xs ${
                    report.qualityScore >= 80 ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-amber-950 text-amber-300'
                  }`}
                >
                  Quality: {report.qualityScore}%
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center font-mono">
                <div className="bg-slate-950 p-2 rounded border border-slate-800">
                  <span className="text-slate-400 text-[10px] block">Total Rows</span>
                  <span className="font-bold text-white text-sm">{report.totalRows}</span>
                </div>
                <div className="bg-slate-950 p-2 rounded border border-slate-800">
                  <span className="text-slate-400 text-[10px] block">Valid Rows</span>
                  <span className="font-bold text-emerald-400 text-sm">{report.validRows}</span>
                </div>
                <div className="bg-slate-950 p-2 rounded border border-slate-800">
                  <span className="text-slate-400 text-[10px] block">Rejected</span>
                  <span className="font-bold text-rose-400 text-sm">{report.rejectedRows}</span>
                </div>
                <div className="bg-slate-950 p-2 rounded border border-slate-800">
                  <span className="text-slate-400 text-[10px] block">Duplicates</span>
                  <span className="font-bold text-amber-400 text-sm">{report.duplicateCount}</span>
                </div>
              </div>

              {report.errors.length > 0 && (
                <div className="p-2.5 bg-rose-950/40 border border-rose-800/60 rounded-lg text-rose-300 text-[11px] space-y-1 max-h-24 overflow-y-auto">
                  {report.errors.map((err, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                      <span>{err}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {importSuccess && (
            <div className="p-3 bg-emerald-950/50 border border-emerald-700 rounded-lg text-emerald-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Dataset successfully ingested and added to active personnel store!</span>
            </div>
          )}

          <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-slate-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              onClick={handleApplyImport}
              disabled={!report || report.validRows === 0 || importSuccess}
              className={`px-5 py-2 rounded-lg font-bold uppercase tracking-wider text-[11px] flex items-center gap-2 ${
                !report || report.validRows === 0 || importSuccess
                  ? 'opacity-40 bg-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-950'
              }`}
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Ingest {report ? report.validRows : 0} Records</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
