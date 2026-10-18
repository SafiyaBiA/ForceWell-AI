import React, { useState } from 'react';
import { ReportPreviewModal } from '../../components/modals/ReportPreviewModal';
import { FileText, Download, Eye, Calendar, Shield, Sparkles, CheckCircle2 } from 'lucide-react';

export const ReportsPage: React.FC = () => {
  const [activeReport, setActiveReport] = useState<'welfare-summary' | 'risk-trend' | 'workload' | 'interventions' | 'data-quality' | null>(null);

  const reportCards = [
    {
      type: 'welfare-summary' as const,
      title: 'Unit Welfare Summary Report',
      description: 'Comprehensive distribution of personnel welfare-risk indices across operational CRPF battalions.',
      frequency: 'Weekly Automated Snapshot',
      classification: 'Confidential Welfare Record',
      icon: FileText
    },
    {
      type: 'risk-trend' as const,
      title: 'Longitudinal Risk Trend Analysis',
      description: '5-week longitudinal velocity tracking, personal baseline divergence metrics and warning alerts.',
      frequency: 'Bi-weekly Operational Cycle',
      classification: 'Decision Support Only',
      icon: FileText
    },
    {
      type: 'workload' as const,
      title: 'Workload Concentration & Imbalance Assessment',
      description: 'Battalion-level operational stress distribution, duty hours analysis and load rebalancing recommendations.',
      frequency: 'Monthly Sector Review',
      classification: 'Command Decision Support',
      icon: FileText
    },
    {
      type: 'interventions' as const,
      title: 'Welfare Intervention Registry & Outcomes',
      description: 'Full audit record of non-punitive welfare consultations, rest rotations, counselling referrals and follow-ups.',
      frequency: 'Continuous Ledger',
      classification: 'Restricted Welfare Officer',
      icon: FileText
    },
    {
      type: 'data-quality' as const,
      title: 'System Ingestion & Data Quality Audit',
      description: 'Data completeness, range validity, duplicate screening and synthetic benchmark telemetry.',
      frequency: 'System Generated Audit',
      classification: 'Technical Verification',
      icon: FileText
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-xl font-bold text-white tracking-tight">Official Welfare Intelligence Reports</h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Structured administrative reports for human welfare oversight, audit compliance, and command briefings
          </p>
        </div>
      </div>

      {/* Report Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reportCards.map(item => {
          const Icon = item.icon;
          return (
            <div
              key={item.type}
              className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors shadow-sm"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-blue-950 text-blue-400 border border-blue-800/60">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] bg-slate-950 text-slate-400 border border-slate-800 px-2 py-0.5 rounded font-mono">
                    {item.classification}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white leading-snug">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400 font-mono">{item.frequency}</span>
                <button
                  onClick={() => setActiveReport(item.type)}
                  className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-sm shadow-blue-950"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview & Export</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal preview */}
      {activeReport && (
        <ReportPreviewModal
          reportType={activeReport}
          onClose={() => setActiveReport(null)}
        />
      )}
    </div>
  );
};
