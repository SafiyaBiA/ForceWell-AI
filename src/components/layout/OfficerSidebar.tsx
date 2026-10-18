import React from 'react';
import { useApp } from '../../store/AppContext';
import {
  LayoutDashboard,
  Users,
  TrendingUp,
  HeartHandshake,
  Scale,
  Sparkles,
  FileSpreadsheet,
  ShieldAlert,
  Settings,
  Upload,
  UserCheck
} from 'lucide-react';

interface OfficerSidebarProps {
  onOpenCsvModal: () => void;
}

export const OfficerSidebar: React.FC<OfficerSidebarProps> = ({ onOpenCsvModal }) => {
  const { activeTab, setActiveTab, personnelList, interventions } = useApp();

  const criticalCount = personnelList.filter(p => p.riskCategory === 'CRITICAL REVIEW').length;
  const pendingInterventions = interventions.filter(i => i.status === 'Scheduled').length;

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'personnel', label: 'Personnel', icon: Users, badge: personnelList.length },
    { id: 'analytics', label: 'Risk Analytics', icon: TrendingUp },
    { id: 'interventions', label: 'Interventions', icon: HeartHandshake, badge: pendingInterventions > 0 ? pendingInterventions : undefined, badgeColor: 'bg-amber-500/20 text-amber-300' },
    { id: 'workload', label: 'Workload Intelligence', icon: Scale },
    { id: 'wellness-trends', label: 'Wellness Trends', icon: Sparkles },
    { id: 'reports', label: 'Reports', icon: FileSpreadsheet },
    { id: 'audit', label: 'Privacy & Audit', icon: ShieldAlert },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-slate-950/80 backdrop-blur border-r border-slate-800 flex flex-col shrink-0 min-h-[calc(100vh-4rem)]">
      {/* Officer Profile Badge */}
      <div className="p-4 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-900/60 border border-blue-500/40 flex items-center justify-center text-blue-300 font-bold font-mono">
            WO
          </div>
          <div className="overflow-hidden">
            <h3 className="text-xs font-bold text-white truncate">Insp. R. K. Sharma</h3>
            <p className="text-[11px] text-slate-400 truncate">Unit Welfare Officer (HQ)</p>
            <span className="inline-block text-[9px] bg-blue-950 text-blue-300 border border-blue-800/50 px-1.5 py-0.2 rounded font-mono mt-0.5">
              CLEARANCE: POLICE-II
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="p-3 space-y-1 flex-1">
        {navItems.map(item => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-950 font-semibold'
                  : 'text-slate-300 hover:bg-slate-900 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </div>
              {item.badge !== undefined && (
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                    item.badgeColor || (isActive ? 'bg-blue-800 text-blue-100' : 'bg-slate-850 text-slate-400')
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Quick Action: CSV Upload & Status */}
      <div className="p-3 border-t border-slate-800/80 space-y-2">
        <button
          onClick={onOpenCsvModal}
          className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-850 text-slate-200 text-xs font-medium border border-slate-700/60 transition-colors"
        >
          <Upload className="w-3.5 h-3.5 text-blue-400" />
          <span>Import CSV Data</span>
        </button>

        <div className="bg-slate-900/60 rounded-lg p-2.5 border border-slate-800 text-[11px] text-slate-400">
          <div className="flex items-center justify-between font-mono">
            <span>Critical Review:</span>
            <span className="text-rose-400 font-bold">{criticalCount}</span>
          </div>
          <div className="flex items-center justify-between font-mono mt-1">
            <span>Decision Support:</span>
            <span className="text-emerald-400">ACTIVE</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
