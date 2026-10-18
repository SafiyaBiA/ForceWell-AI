import React, { useState } from 'react';
import { useApp } from '../../store/AppContext';
import { Upload, RotateCcw, Sliders, ShieldCheck, Database, CheckCircle2 } from 'lucide-react';

interface SettingsPageProps {
  onOpenCsvModal: () => void;
}

export const SettingsPage: React.FC<SettingsPageProps> = ({ onOpenCsvModal }) => {
  const { personnelList, resetToDefaultData, logAudit } = useApp();
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleReset = () => {
    resetToDefaultData();
    setResetSuccess(true);
    setTimeout(() => setResetSuccess(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-xl font-bold text-white tracking-tight">System Settings & Data Management</h1>
        <p className="text-xs text-slate-400 mt-0.5">
          Ingestion pipelines, decision-support threshold parameters, and synthetic state controls
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
        {/* Dataset Controls */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-4">
          <div className="flex items-center gap-2 text-white font-bold text-sm">
            <Database className="w-4 h-4 text-blue-400" />
            <span>Demonstration Dataset Controls</span>
          </div>
          <p className="text-slate-300 leading-relaxed text-[11px]">
            The current session contains <strong>{personnelList.length}</strong> personnel records across 5 CRPF formations. You can upload custom CSV batches or reset to default synthetic scenarios.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 pt-1">
            <button
              onClick={onOpenCsvModal}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold flex items-center justify-center gap-2 text-xs shadow-md shadow-blue-950 transition-colors"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Import Personnel CSV</span>
            </button>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-semibold flex items-center justify-center gap-2 text-xs border border-slate-700 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
              <span>Reset to Baseline Data</span>
            </button>
          </div>

          {resetSuccess && (
            <p className="text-emerald-400 font-medium flex items-center gap-1.5 pt-1 text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Synthetic demonstration data restored to initial state.</span>
            </p>
          )}
        </div>

        {/* Prototype Thresholds */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-white font-bold text-sm">
            <Sliders className="w-4 h-4 text-amber-400" />
            <span>Prototype Welfare-Risk Decision Thresholds</span>
          </div>
          <p className="text-[11px] text-slate-400">
            Calibrated non-clinical prototype thresholds for human welfare review:
          </p>

          <div className="space-y-2 font-mono text-[11px]">
            <div className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
              <span className="text-emerald-400 font-bold">STABLE (0 - 29)</span>
              <span className="text-slate-400">Normal operational baseline</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
              <span className="text-amber-400 font-bold">WATCH (30 - 49)</span>
              <span className="text-slate-400">Mild operational fatigue monitoring</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
              <span className="text-orange-400 font-bold">ELEVATED (50 - 69)</span>
              <span className="text-slate-400">Early intervention suggested</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
              <span className="text-rose-400 font-bold">CRITICAL REVIEW (70 - 100)</span>
              <span className="text-slate-400">Mandatory human welfare review</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
