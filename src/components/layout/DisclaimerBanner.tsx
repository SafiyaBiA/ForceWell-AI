import React, { useState } from 'react';
import { AlertTriangle, ShieldCheck, X } from 'lucide-react';

export const DisclaimerBanner: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  if (collapsed) {
    return (
      <button
        onClick={() => setCollapsed(false)}
        className="w-full bg-blue-950/90 hover:bg-blue-900 border-b border-blue-800/60 py-1 px-4 text-center text-xs text-blue-300 transition-colors flex items-center justify-center gap-2"
      >
        <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
        <span>DEMONSTRATION MODE - SYNTHETIC DATA (Click to expand notice)</span>
      </button>
    );
  }

  return (
    <aside aria-label="Demonstration mode notice" className="bg-gradient-to-r from-slate-950 via-blue-950/90 to-slate-950 border-b border-blue-900/60 text-xs px-4 py-2 text-slate-300 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className="p-1 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <AlertTriangle className="w-3.5 h-3.5" />
          </div>
          <div className="leading-tight">
            <span className="font-bold text-white uppercase tracking-wider font-mono mr-2">
              DEMONSTRATION MODE - SYNTHETIC DATA
            </span>
            <span className="text-slate-300 hidden md:inline">
              Built for Smart India Hackathon 2026 (SIH26186) - MHA / CRPF Police-II Division
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 font-mono text-[11px] text-slate-400">
          <span className="text-blue-300 font-semibold bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/60">
            CORE PRINCIPLE: SUPPORT, NOT SURVEILLANCE
          </span>
          <span className="hidden lg:inline text-slate-500">-</span>
          <span className="hidden lg:inline text-slate-400">Decision-Support Only - Not Clinical Diagnosis</span>
          <button
            onClick={() => setCollapsed(true)}
            className="text-slate-400 hover:text-white p-0.5 rounded hover:bg-slate-800 transition-colors"
            title="Minimize banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
