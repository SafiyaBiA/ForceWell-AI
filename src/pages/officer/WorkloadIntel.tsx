import React, { useState } from 'react';
import { useApp } from '../../store/AppContext';
import {
  Scale,
  AlertTriangle,
  CheckCircle2,
  TrendingDown,
  TrendingUp,
  ArrowRight,
  Shield,
  RotateCcw,
  Sparkles
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell
} from 'recharts';

export const WorkloadIntel: React.FC = () => {
  const { unitStats, logAudit } = useApp();

  // State to simulate live workload rebalancing
  const [rebalanced, setRebalanced] = useState(false);

  // Dynamic unit load based on simulation
  const currentUnitData = unitStats.map(u => {
    if (rebalanced) {
      if (u.unitCode === 'Alpha') return { ...u, workloadConcentration: 69, status: 'Balanced' };
      if (u.unitCode === 'Delta') return { ...u, workloadConcentration: 58, status: 'Balanced' };
    }
    return u;
  });

  const handleSimulateRebalancing = () => {
    setRebalanced(!rebalanced);
    logAudit(
      'WORKLOAD_REBALANCING_SIMULATION',
      rebalanced
        ? 'Reverted workload simulation to operational baseline'
        : 'Executed non-critical duty redistribution: 15% load transfer from Unit Alpha to Unit Delta'
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-white tracking-tight">Workload Intelligence & Balancing</h1>
            <span className="text-[11px] bg-amber-950 text-amber-300 border border-amber-800 px-2 py-0.5 rounded font-mono">
              SIH MANDATE
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Real-time operational load concentration monitoring and dynamic fatigue redistribution
          </p>
        </div>

        <button
          onClick={handleSimulateRebalancing}
          className={`px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all ${
            rebalanced
              ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
              : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-blue-950'
          }`}
        >
          {rebalanced ? (
            <>
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Operational Baseline</span>
            </>
          ) : (
            <>
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Simulate AI Workload Rebalancing</span>
            </>
          )}
        </button>
      </div>

      {/* Imbalance Alert Box */}
      {!rebalanced ? (
        <div className="p-4 bg-amber-950/40 border border-amber-800/80 rounded-2xl flex items-start gap-3 text-xs">
          <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-amber-300 text-sm flex items-center gap-2">
              Workload Imbalance Alert Detected
              <span className="text-[10px] bg-amber-900 text-amber-200 px-2 py-0.2 rounded font-mono uppercase">
                Threshold Exceeded
              </span>
            </h3>
            <p className="text-slate-200 leading-relaxed">
              "Unit Alpha currently shows a higher workload concentration (84%) than the selected unit baseline."
            </p>
            <p className="text-amber-200 font-mono text-[11px] pt-1">
              <strong>Recommendation:</strong> "Review upcoming non-critical workload distribution where operationally feasible. Unit Delta (43%) maintains reserve rotation bandwidth."
            </p>
          </div>
        </div>
      ) : (
        <div className="p-4 bg-emerald-950/40 border border-emerald-800/80 rounded-2xl flex items-start gap-3 text-xs">
          <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-emerald-300 text-sm flex items-center gap-2">
              Simulated Load Redistribution Applied
              <span className="text-[10px] bg-emerald-900 text-emerald-200 px-2 py-0.2 rounded font-mono uppercase">
                Balanced State
              </span>
            </h3>
            <p className="text-slate-200 leading-relaxed">
              15% non-critical perimeter security duties shifted from <strong>Unit Alpha</strong> (84% &rarr; 69%) to <strong>Unit Delta</strong> (43% &rarr; 58%). Estimated 24% reduction in peak fatigue risk over 14 days.
            </p>
          </div>
        </div>
      )}

      {/* Unit Workload Grid Cards (Prompt specific: Alpha 84%, Bravo 61%, Charlie 69%, Delta 43%) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentUnitData.slice(0, 4).map(unit => {
          const isHigh = unit.workloadConcentration >= 75;
          const isModerate = unit.workloadConcentration >= 60;

          return (
            <div
              key={unit.unitCode}
              className={`bg-slate-900/90 border rounded-xl p-4 space-y-3 transition-all ${
                isHigh
                  ? 'border-rose-600/60 shadow-lg shadow-rose-950/30'
                  : isModerate
                  ? 'border-slate-800'
                  : 'border-emerald-800/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{unit.unitName}</h4>
                  <p className="text-[10px] text-slate-400 truncate max-w-[140px]">{unit.fullTitle}</p>
                </div>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded font-mono uppercase ${
                    isHigh
                      ? 'bg-rose-950 text-rose-300 border border-rose-800'
                      : isModerate
                      ? 'bg-blue-950 text-blue-300 border border-blue-800'
                      : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                  }`}
                >
                  {unit.status}
                </span>
              </div>

              <div className="flex items-baseline justify-between pt-1">
                <span className="text-3xl font-bold font-mono text-white">
                  {unit.workloadConcentration}%
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {unit.personnelCount} Personnel
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${
                    isHigh ? 'bg-rose-500' : isModerate ? 'bg-amber-500' : 'bg-emerald-500'
                  }`}
                  style={{ width: `${unit.workloadConcentration}%` }}
                />
              </div>

              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
                <div className="flex justify-between">
                  <span>Avg Deployment:</span>
                  <span className="font-mono text-slate-200">{unit.avgDeploymentDays} days</span>
                </div>
                <div className="flex justify-between">
                  <span>Critical Cases:</span>
                  <span className={`font-mono font-bold ${unit.criticalCount > 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
                    {unit.criticalCount}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Comparison Chart */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-white">
            Unit Operational Stress & Capacity Distribution
          </h3>
          <span className="text-[10px] text-slate-400 font-mono">Benchmark: Optimal Balance &lt; 70%</span>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={currentUnitData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="unitName" stroke="#64748b" tick={{ fontSize: 11 }} />
              <YAxis domain={[0, 100]} stroke="#64748b" tick={{ fontSize: 11 }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b', borderRadius: '8px', fontSize: '11px' }}
              />
              <Bar dataKey="workloadConcentration" name="Workload %" radius={[4, 4, 0, 0]}>
                {currentUnitData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.workloadConcentration >= 75 ? '#ef4444' : entry.workloadConcentration >= 60 ? '#f59e0b' : '#10b981'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
