import React, { useState } from 'react';
import { useApp } from '../../store/AppContext';
import {
  FileText,
  Download,
  Printer,
  X,
  CheckCircle2,
  Shield,
  FileSpreadsheet
} from 'lucide-react';

interface ReportPreviewModalProps {
  reportType: 'welfare-summary' | 'risk-trend' | 'workload' | 'interventions' | 'data-quality';
  onClose: () => void;
}

export const ReportPreviewModal: React.FC<ReportPreviewModalProps> = ({ reportType, onClose }) => {
  const { personnelList, unitStats, interventions } = useApp();
  const [downloaded, setDownloaded] = useState(false);

  const getReportMeta = () => {
    switch (reportType) {
      case 'welfare-summary':
        return {
          title: 'CRPF Unit Welfare & Early-Risk Summary',
          docId: 'CRPF/POL-II/WLF/2026-Q3-089',
          description: 'Comprehensive distribution of personnel welfare-risk indices across operational units.',
        };
      case 'risk-trend':
        return {
          title: 'Longitudinal Risk Trend & Trajectory Report',
          docId: 'CRPF/POL-II/TRND/2026-09-01',
          description: '5-week longitudinal velocity tracking and personal baseline divergence metrics.',
        };
      case 'workload':
        return {
          title: 'Organizational Workload Concentration & Imbalance Assessment',
          docId: 'CRPF/POL-II/WKL/2026-09-02',
          description: 'Battalion-level operational stress distribution and duty hours analysis.',
        };
      case 'interventions':
        return {
          title: 'Welfare Support & Preventive Intervention Registry',
          docId: 'CRPF/POL-II/INT/2026-09-03',
          description: 'Audit record of non-punitive welfare consultations, rest rotations and follow-ups.',
        };
      case 'data-quality':
        return {
          title: 'System Ingestion & Data Quality Assessment',
          docId: 'CRPF/POL-II/DQ/2026-09-04',
          description: 'Completeness, range validity, and audit metrics for operational records.',
        };
    }
  };

  const meta = getReportMeta();

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-slate-950 border border-slate-800 rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-slate-900 p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-900/40 text-blue-300 border border-blue-700/40">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Report Document Preview
              </h3>
              <p className="text-xs text-slate-400">Ref: {meta.docId}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Print document"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 bg-slate-900/50 max-h-[65vh] overflow-y-auto space-y-5 text-slate-200 text-xs font-mono border-b border-slate-800">
          <div className="text-center border-b border-slate-800 pb-4">
            <p className="text-[10px] text-slate-400 uppercase tracking-widest">
              Government of India ? Ministry of Home Affairs
            </p>
            <h2 className="text-base font-bold text-white tracking-wider mt-0.5">
              CENTRAL RESERVE POLICE FORCE (POLICE-II DIVISION)
            </h2>
            <p className="text-xs text-blue-400 font-bold mt-1">FORCEWELL AI DECISION-SUPPORT REPORT</p>
            <div className="inline-block mt-2 px-2.5 py-0.5 rounded bg-slate-950 text-slate-400 text-[10px] border border-slate-800">
              CLASSIFICATION: CONFIDENTIAL WELFARE SUPPORT ? SYNTHETIC DEMO DATA
            </div>
          </div>

          <div className="flex justify-between text-[11px] text-slate-400">
            <div>
              <p><strong>SUBJECT:</strong> {meta.title}</p>
              <p><strong>REPORTING PERIOD:</strong> Current Deployment Cycle (Q3 2026)</p>
            </div>
            <div className="text-right">
              <p><strong>DATE:</strong> 10-SEP-2026</p>
              <p><strong>CLEARANCE:</strong> WELFARE-OFFICER-HQ</p>
            </div>
          </div>

          {reportType === 'welfare-summary' && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase border-b border-slate-800 pb-1">
                Battalion Welfare Risk Distribution
              </h4>
              <table className="w-full text-left border border-slate-800 text-[11px]">
                <thead className="bg-slate-950 text-slate-400">
                  <tr>
                    <th className="p-2 border-r border-slate-800">Unit Code</th>
                    <th className="p-2 border-r border-slate-800">Strength</th>
                    <th className="p-2 border-r border-slate-800">Stable</th>
                    <th className="p-2 border-r border-slate-800">Watch</th>
                    <th className="p-2 border-r border-slate-800">Elevated</th>
                    <th className="p-2">Critical</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {unitStats.map(u => (
                    <tr key={u.unitCode} className="hover:bg-slate-850">
                      <td className="p-2 border-r border-slate-800 font-bold text-white">{u.fullTitle}</td>
                      <td className="p-2 border-r border-slate-800">{u.personnelCount}</td>
                      <td className="p-2 border-r border-slate-800 text-emerald-400">{u.stableCount}</td>
                      <td className="p-2 border-r border-slate-800 text-amber-400">{u.watchCount}</td>
                      <td className="p-2 border-r border-slate-800 text-orange-400">{u.elevatedCount}</td>
                      <td className="p-2 text-rose-400 font-bold">{u.criticalCount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {reportType === 'workload' && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase border-b border-slate-800 pb-1">
                Unit Operational Load Concentration Analysis
              </h4>
              <table className="w-full text-left border border-slate-800 text-[11px]">
                <thead className="bg-slate-950 text-slate-400">
                  <tr>
                    <th className="p-2 border-r border-slate-800">Unit Name</th>
                    <th className="p-2 border-r border-slate-800">Workload Concentration</th>
                    <th className="p-2 border-r border-slate-800">Avg Deployment</th>
                    <th className="p-2 border-r border-slate-800">Leave Utilization</th>
                    <th className="p-2">Recommendation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {unitStats.map(u => (
                    <tr key={u.unitCode}>
                      <td className="p-2 border-r border-slate-800 font-bold text-white">{u.unitName}</td>
                      <td className="p-2 border-r border-slate-800 font-bold">{u.workloadConcentration}%</td>
                      <td className="p-2 border-r border-slate-800">{u.avgDeploymentDays} days</td>
                      <td className="p-2 border-r border-slate-800">{u.avgLeaveUtilization}%</td>
                      <td className="p-2 text-slate-300 text-[10px]">{u.recommendation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {reportType === 'interventions' && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase border-b border-slate-800 pb-1">
                Active Welfare Interventions Log
              </h4>
              <table className="w-full text-left border border-slate-800 text-[11px]">
                <thead className="bg-slate-950 text-slate-400">
                  <tr>
                    <th className="p-2 border-r border-slate-800">Case ID</th>
                    <th className="p-2 border-r border-slate-800">Personnel</th>
                    <th className="p-2 border-r border-slate-800">Intervention Type</th>
                    <th className="p-2 border-r border-slate-800">Officer</th>
                    <th className="p-2 border-r border-slate-800">Status</th>
                    <th className="p-2">Follow-up</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {interventions.map(i => (
                    <tr key={i.id}>
                      <td className="p-2 border-r border-slate-800 text-blue-400 font-bold">{i.id}</td>
                      <td className="p-2 border-r border-slate-800">{i.personnelName} ({i.personnelId})</td>
                      <td className="p-2 border-r border-slate-800">{i.type}</td>
                      <td className="p-2 border-r border-slate-800">{i.officerName}</td>
                      <td className="p-2 border-r border-slate-800">
                        <span className="text-emerald-400">{i.status}</span>
                      </td>
                      <td className="p-2">{i.followUpDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="bg-slate-950 p-3 rounded border border-slate-800 text-[11px] text-slate-300 space-y-1">
            <p className="font-bold text-white uppercase">Privacy & Purpose Limitation Clause:</p>
            <p className="text-slate-400">
              Information contained herein is generated purely for welfare decision support and preventive intervention under Smart India Hackathon Problem Statement SIH26186. It does not constitute a disciplinary record, mental health diagnosis, or fitness certificate.
            </p>
          </div>
        </div>

        <div className="p-4 bg-slate-900 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">
            Export formats: <strong>PDF, CSV, Encrypted JSON</strong>
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs text-slate-400 hover:text-white"
            >
              Close
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-2 shadow-md shadow-blue-950"
            >
              {downloaded ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>Report Downloaded</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Report (PDF)</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
