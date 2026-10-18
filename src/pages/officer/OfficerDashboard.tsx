import React, { useState } from 'react';
import { useApp } from '../../store/AppContext';
import { MetricCard } from '../../components/common/MetricCard';
import { RiskBadge } from '../../components/common/RiskBadge';
import {
  Users,
  ShieldAlert,
  Clock,
  HeartHandshake,
  AlertTriangle,
  ChevronRight,
  TrendingUp,
  Scale,
  ArrowUpRight,
  Sparkles,
  Search,
  Filter
} from 'lucide-react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';

interface OfficerDashboardProps {
  onSelectPersonnel: (id: string) => void;
  onOpenInterventionModal: (id: string) => void;
}

export const OfficerDashboard: React.FC<OfficerDashboardProps> = ({
  onSelectPersonnel,
  onOpenInterventionModal
}) => {
  const { personnelList, interventions, setActiveTab, setSelectedPersonnel } = useApp();
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');
  const [unitFilter, setUnitFilter] = useState('All');

  // KPI calculations
  const totalPersonnel = personnelList.length;
  const activeDeployments = personnelList.filter(p => p.deploymentStatus === 'Active Field' || p.deploymentStatus === 'High Altitude / Border').length;
  const stableCount = personnelList.filter(p => p.riskCategory === 'STABLE').length;
  const watchCount = personnelList.filter(p => p.riskCategory === 'WATCH').length;
  const elevatedCount = personnelList.filter(p => p.riskCategory === 'ELEVATED').length;
  const criticalCount = personnelList.filter(p => p.riskCategory === 'CRITICAL REVIEW').length;
  const openSupportRequests = personnelList.filter(p => p.supportRequested).length;

  // Donut Chart data
  const riskDonutData = [
    { name: 'Stable (0-29)', value: stableCount, color: '#10b981' },
    { name: 'Watch (30-49)', value: watchCount, color: '#f59e0b' },
    { name: 'Elevated (50-69)', value: elevatedCount, color: '#f97316' },
    { name: 'Critical Review (70-100)', value: criticalCount, color: '#ef4444' },
  ];

  // Critical Priority List
  const priorityList = personnelList
    .filter(p => (unitFilter === 'All' || p.unitCode === unitFilter))
    .filter(p => p.riskCategory === 'CRITICAL REVIEW' || p.riskCategory === 'ELEVATED' || p.supportRequested)
    .sort((a, b) => b.riskScore - a.riskScore)
    .slice(0, 6);

  const handleReviewClick = (p: typeof personnelList[0]) => {
    setSelectedPersonnel(p);
    setActiveTab('personnel-profile');
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-white tracking-tight">Welfare Command Center</h1>
            <span className="text-[11px] bg-blue-950 text-blue-300 border border-blue-800 px-2 py-0.5 rounded font-mono">
              POLICE-II HQ
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Operational stress monitoring, risk trend detection & human-led preventive interventions
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-400">Analysis Window:</span>
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-1 flex">
            {(['7d', '30d', '90d'] as const).map(range => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                  timeRange === range ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Top 6 KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        <MetricCard
          title="Total Personnel"
          value={totalPersonnel}
          subtitle="Monitored strength"
          icon={Users}
          highlightColor="slate"
        />
        <MetricCard
          title="Active Deployments"
          value={activeDeployments}
          subtitle="Field & border tours"
          icon={Clock}
          highlightColor="blue"
        />
        <MetricCard
          title="Watch"
          value={watchCount}
          subtitle="Index 30 - 49"
          trend={{ value: 'Mild Strain', isNeutral: true }}
          highlightColor="amber"
        />
        <MetricCard
          title="Elevated Risk"
          value={elevatedCount}
          subtitle="Index 50 - 69"
          trend={{ value: 'Attention', isPositive: false }}
          highlightColor="amber"
        />
        <MetricCard
          title="Critical Review"
          value={criticalCount}
          subtitle="Index 70 - 100"
          trend={{ value: 'Immediate Action', isPositive: false }}
          highlightColor="rose"
        />
        <MetricCard
          title="Open Requests"
          value={openSupportRequests}
          subtitle="Direct personnel requests"
          trend={{ value: `${openSupportRequests} pending`, isNeutral: false }}
          icon={HeartHandshake}
          highlightColor="blue"
        />
      </div>

      {/* Charts Section: Risk Distribution Donut & Longitudinal Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Risk Distribution Donut */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Welfare Risk Distribution
            </h3>
            <span className="text-[10px] text-slate-400 font-mono">{timeRange} Rolling Average</span>
          </div>

          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={riskDonutData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={80}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {riskDonutData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="#0f172a" strokeWidth={2} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b', borderRadius: '8px', fontSize: '11px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-800">
            {riskDonutData.map(item => (
              <div key={item.name} className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-slate-300 text-[11px]">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  {item.name.split(' ')[0]}
                </span>
                <span className="font-mono font-bold text-white">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Priority Attention Review Queue */}
        <div className="lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <span>Priority Welfare Review Queue</span>
                <span className="text-[10px] bg-rose-950 text-rose-300 px-2 py-0.5 rounded font-mono">
                  {priorityList.length} Flagged
                </span>
              </h3>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Personnel exhibiting elevated indicators or voluntary support requests
              </p>
            </div>

            <div className="flex items-center gap-2">
              <select
                value={unitFilter}
                onChange={e => setUnitFilter(e.target.value)}
                className="bg-slate-950 border border-slate-700 text-slate-300 text-xs rounded-lg px-2 py-1"
              >
                <option value="All">All Units</option>
                <option value="Alpha">Unit Alpha (RAF)</option>
                <option value="Bravo">Unit Bravo (CoBRA)</option>
                <option value="Charlie">Unit Charlie (Valley)</option>
                <option value="Delta">Unit Delta (Security)</option>
                <option value="Echo">Unit Echo (Logistics)</option>
              </select>
            </div>
          </div>

          {/* Quick Review Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 text-[11px] uppercase tracking-wider font-mono">
                  <th className="pb-2">Personnel ID</th>
                  <th className="pb-2">Unit</th>
                  <th className="pb-2">Deployment</th>
                  <th className="pb-2">Risk Level</th>
                  <th className="pb-2">Score</th>
                  <th className="pb-2">Primary Indicators</th>
                  <th className="pb-2 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {priorityList.map(p => (
                  <tr key={p.id} className="hover:bg-slate-850/60 transition-colors group">
                    <td className="py-2.5 font-bold text-white font-mono flex items-center gap-1.5">
                      <span>{p.id}</span>
                      {p.supportRequested && (
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" title="Confidential Support Requested" />
                      )}
                    </td>
                    <td className="py-2.5 text-slate-300">{p.unit}</td>
                    <td className="py-2.5 font-mono text-slate-300">{p.deploymentDays} days</td>
                    <td className="py-2.5">
                      <RiskBadge category={p.riskCategory} size="sm" showDot={false} />
                    </td>
                    <td className="py-2.5 font-mono font-bold text-white">{p.riskScore}</td>
                    <td className="py-2.5 text-[11px] text-slate-300 max-w-[200px] truncate">
                      {p.primaryIndicators.join(' + ')}
                    </td>
                    <td className="py-2.5 text-right">
                      <button
                        onClick={() => handleReviewClick(p)}
                        className="px-2.5 py-1 rounded bg-blue-600/30 hover:bg-blue-600 text-blue-300 hover:text-white font-semibold text-[11px] border border-blue-500/40 transition-colors"
                      >
                        Review
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <span>Showing top critical/elevated cases requiring human review.</span>
            <button
              onClick={() => setActiveTab('personnel')}
              className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
            >
              <span>View All {personnelList.length} Personnel</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
