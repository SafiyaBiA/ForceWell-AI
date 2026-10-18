import React, { useState } from 'react';
import { useApp } from '../../store/AppContext';
import { MetricCard } from '../../components/common/MetricCard';
import {
  Building2,
  Scale,
  Clock,
  HeartHandshake,
  Shield,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Users,
  Layers,
  Lock
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Cell
} from 'recharts';

export const CommanderDashboard: React.FC = () => {
  const { personnelList, unitStats, interventions, setActiveTab } = useApp();

  const totalStrength = personnelList.length;
  const activeDeployments = personnelList.filter(p => p.deploymentStatus === 'Active Field' || p.deploymentStatus === 'High Altitude / Border').length;
  const criticalCount = personnelList.filter(p => p.riskCategory === 'CRITICAL REVIEW').length;
  const elevatedCount = personnelList.filter(p => p.riskCategory === 'ELEVATED').length;
  const completedInterventions = interventions.filter(i => i.status === 'Completed').length;
  const totalInterventions = interventions.length;

  const unitWorkloadChartData = unitStats.map(u => ({
    name: u.unitName,
    workload: u.workloadConcentration,
    deployment: u.avgDeploymentDays,
    leave: u.avgLeaveUtilization,
    critical: u.criticalCount
  }));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-white tracking-tight">Strategic Organizational Command Portal</h1>
            <span className="text-[11px] bg-blue-950 text-blue-300 border border-blue-800 px-2 py-0.5 rounded font-mono">
              COMMAND CLEARANCE
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Macro-level operational readiness, battalion fatigue heatmaps, and staffing equilibrium
          </p>
        </div>

        {/* Data Minimization Assurance Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
          <Lock className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[11px]">Strict Data Minimization Active: Aggregated Formations Only</span>
        </div>
      </div>

      {/* Top Organizational KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        <MetricCard
          title="Monitored Force"
          value={totalStrength}
          subtitle="All active battalions"
          icon={Users}
          highlightColor="slate"
        />
        <MetricCard
          title="Field Deployments"
          value={activeDeployments}
          subtitle="Tactical operational strength"
          icon={Clock}
          highlightColor="blue"
        />
        <MetricCard
          title="Elevated Units"
          value="1 / 5"
          subtitle="Unit Alpha above ceiling"
          trend={{ value: 'Alpha: 84%', isPositive: false }}
          highlightColor="amber"
        />
        <MetricCard
          title="Force Leave Gap"
          value="48.2 d"
          subtitle="Average across all cadres"
          trend={{ value: 'Target < 45d', isNeutral: true }}
          highlightColor="slate"
        />
        <MetricCard
          title="Action Resolution"
          value={`${completedInterventions}/${totalInterventions}`}
          subtitle="Welfare interventions executed"
          trend={{ value: '100% On Time', isPositive: true }}
          icon={HeartHandshake}
          highlightColor="emerald"
        />
        <MetricCard
          title="Readiness Status"
          value="OPTIMAL"
          subtitle="Operational capability intact"
          trend={{ value: '94.2%', isPositive: true }}
          icon={Shield}
          highlightColor="emerald"
        />
      </div>

      {/* Main Grid: Workload Imbalance Concentration & Deployment Duration Curve */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Workload Concentration across Units */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Scale className="w-4 h-4 text-blue-400" />
              <span>Battalion Workload Distribution vs Operational Ceiling</span>
            </h3>
            <span className="text-[10px] text-slate-400 font-mono">Target &lt; 70%</span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={unitWorkloadChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="name" stroke="#64748b" tick={{ fontSize: 11 }} />
                <YAxis domain={[0, 100]} stroke="#64748b" tick={{ fontSize: 11 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b', borderRadius: '8px', fontSize: '11px' }}
                />
                <Bar dataKey="workload" name="Workload %" radius={[4, 4, 0, 0]}>
                  {unitWorkloadChartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.workload >= 75 ? '#ef4444' : entry.workload >= 60 ? '#f59e0b' : '#10b981'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-[11px] text-slate-300">
            <strong>Command Guidance:</strong> "Unit Alpha (84%) currently exhibits high continuous duty concentration. Transfer of secondary static security obligations to Unit Delta (43%) recommended."
          </div>
        </div>

        {/* Average Deployment Duration & Leave Utilization */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Deployment Tour Length & Leave Utilization</span>
            </h3>
            <span className="text-[10px] text-slate-400 font-mono">Rotation Policy: 45d Tour</span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={unitWorkloadChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="name" stroke="#64748b" tick={{ fontSize: 11 }} />
                <YAxis domain={[0, 80]} stroke="#64748b" tick={{ fontSize: 11 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b', borderRadius: '8px', fontSize: '11px' }}
                />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
                <Bar dataKey="deployment" fill="#f59e0b" name="Avg Tour Days" radius={[4, 4, 0, 0]} />
                <Bar dataKey="leave" fill="#10b981" name="Leave Taken %" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-[11px] text-slate-300">
            <strong>Staffing Policy Impact:</strong> Units maintaining leave utilization above 50% demonstrate 62% fewer critical welfare alerts.
          </div>
        </div>
      </div>

      {/* Unit Command Table */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-white">
            Formation Operational Welfare Summary
          </h3>
          <span className="text-[11px] text-slate-400 font-mono">Updated Today 08:00 IST</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-950 border-b border-slate-800 text-slate-400 text-[11px] uppercase tracking-wider font-mono">
                <th className="py-3 px-4">Formation</th>
                <th className="py-3 px-4">Role / Sector</th>
                <th className="py-3 px-4">Strength</th>
                <th className="py-3 px-4">Workload Load</th>
                <th className="py-3 px-4">Avg Tour Length</th>
                <th className="py-3 px-4">Critical Review</th>
                <th className="py-3 px-4">Operational Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-sans">
              {unitStats.map(u => (
                <tr key={u.unitCode} className="hover:bg-slate-850/60 transition-colors">
                  <td className="py-3 px-4 font-bold text-white">{u.fullTitle}</td>
                  <td className="py-3 px-4 text-slate-300">{u.unitName}</td>
                  <td className="py-3 px-4 font-mono text-slate-200">{u.personnelCount}</td>
                  <td className="py-3 px-4 font-mono font-bold">
                    <span className={u.workloadConcentration >= 75 ? 'text-rose-400' : 'text-slate-200'}>
                      {u.workloadConcentration}%
                    </span>
                  </td>
                  <td className="py-3 px-4 font-mono text-slate-300">{u.avgDeploymentDays} days</td>
                  <td className="py-3 px-4 font-mono font-bold">
                    <span className={u.criticalCount > 0 ? 'text-rose-400' : 'text-emerald-400'}>
                      {u.criticalCount}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full font-mono uppercase ${
                        u.status === 'High Concentration'
                          ? 'bg-rose-950 text-rose-300 border border-rose-800'
                          : u.status === 'Balanced'
                          ? 'bg-blue-950 text-blue-300 border border-blue-800'
                          : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                      }`}
                    >
                      {u.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
