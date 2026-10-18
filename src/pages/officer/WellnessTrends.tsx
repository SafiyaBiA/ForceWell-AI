import React from 'react';
import { useApp } from '../../store/AppContext';
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
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Sparkles, Moon, Battery, Heart, ShieldCheck } from 'lucide-react';

export const WellnessTrends: React.FC = () => {
  const { personnelList } = useApp();

  const goodSleep = personnelList.filter(p => p.sleepQuality === 'Good').length;
  const fairSleep = personnelList.filter(p => p.sleepQuality === 'Fair').length;
  const poorSleep = personnelList.filter(p => p.sleepQuality === 'Poor').length;

  const sleepPieData = [
    { name: 'Good Sleep', value: goodSleep, color: '#10b981' },
    { name: 'Fair Sleep', value: fairSleep, color: '#f59e0b' },
    { name: 'Poor Sleep', value: poorSleep, color: '#ef4444' },
  ];

  const recoveryByUnit = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo'].map(code => {
    const list = personnelList.filter(p => p.unitCode === code);
    const avgRecovery = Math.round(list.reduce((acc, p) => acc + p.recoveryScore, 0) / (list.length || 1));
    const avgFatigue = Math.round(list.reduce((acc, p) => acc + p.fatigueScore, 0) / (list.length || 1));
    return {
      name: `Unit ${code}`,
      avgRecovery,
      avgFatigue
    };
  });

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-xl font-bold text-white tracking-tight">Aggregate Wellness & Physiological Trends</h1>
        <p className="text-xs text-slate-400 mt-0.5">
          Voluntary self-reported sleep quality, recovery indicators, and confidential support patterns
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Sleep Quality Donut */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Moon className="w-4 h-4 text-blue-400" />
              <span>Reported Sleep Quality Distribution</span>
            </h3>
            <span className="text-[10px] text-slate-400 font-mono">Voluntary Daily Inputs</span>
          </div>

          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sleepPieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={75}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {sleepPieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="#0f172a" strokeWidth={2} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b', borderRadius: '8px', fontSize: '11px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-around text-xs pt-2 border-t border-slate-800">
            {sleepPieData.map(item => (
              <div key={item.name} className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-slate-300">{item.name}:</span>
                <strong className="font-mono text-white">{item.value}</strong>
              </div>
            ))}
          </div>
        </div>

        {/* Recovery vs Fatigue by Unit */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Battery className="w-4 h-4 text-amber-400" />
              <span>Unit Recovery vs. Fatigue Indices</span>
            </h3>
            <span className="text-[10px] text-slate-400 font-mono">0 - 100 Index</span>
          </div>

          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={recoveryByUnit}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="name" stroke="#64748b" tick={{ fontSize: 11 }} />
                <YAxis domain={[0, 100]} stroke="#64748b" tick={{ fontSize: 11 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b', borderRadius: '8px', fontSize: '11px' }}
                />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '6px' }} />
                <Bar dataKey="avgRecovery" fill="#10b981" name="Recovery Index" radius={[4, 4, 0, 0]} />
                <Bar dataKey="avgFatigue" fill="#f59e0b" name="Fatigue Accumulation" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-[11px] text-slate-400 italic">
            * Higher recovery scores correlate with regular rotation and adequate rest intervals.
          </p>
        </div>
      </div>
    </div>
  );
};
