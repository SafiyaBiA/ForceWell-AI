import React, { useState } from 'react';
import { useApp } from '../../store/AppContext';
import { RiskBadge } from '../../components/common/RiskBadge';
import { Search, Filter, ArrowUpDown, ChevronRight, ShieldAlert, Heart } from 'lucide-react';
import { RiskCategory } from '../../types';

interface PersonnelListProps {
  onSelectPersonnel: (id: string) => void;
}

export const PersonnelList: React.FC<PersonnelListProps> = ({ onSelectPersonnel }) => {
  const { personnelList, setSelectedPersonnel, setActiveTab } = useApp();

  const [search, setSearch] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'riskScore' | 'deploymentDays' | 'dutyHours'>('riskScore');
  const [sortAsc, setSortAsc] = useState(false);

  const filtered = personnelList.filter(p => {
    const matchesSearch =
      p.id.toLowerCase().includes(search.toLowerCase()) ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.unit.toLowerCase().includes(search.toLowerCase());
    const matchesUnit = selectedUnit === 'All' || p.unitCode === selectedUnit;
    const matchesCategory = selectedCategory === 'All' || p.riskCategory === selectedCategory;
    return matchesSearch && matchesUnit && matchesCategory;
  });

  const sorted = [...filtered].sort((a, b) => {
    let diff = 0;
    if (sortBy === 'riskScore') diff = b.riskScore - a.riskScore;
    if (sortBy === 'deploymentDays') diff = b.deploymentDays - a.deploymentDays;
    if (sortBy === 'dutyHours') diff = b.dutyHours - a.dutyHours;
    return sortAsc ? -diff : diff;
  });

  const handleReview = (p: typeof personnelList[0]) => {
    setSelectedPersonnel(p);
    setActiveTab('personnel-profile');
  };

  return (
    <div className="space-y-5">
      {/* Top Header & Search/Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-xl font-bold text-white tracking-tight">Personnel Welfare Registry</h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Active monitoring roster across all CRPF operational formations ({filtered.length} of {personnelList.length} records)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by ID, name, unit..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="bg-slate-900 border border-slate-700 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 w-52 sm:w-60"
            />
          </div>

          {/* Unit Filter */}
          <select
            value={selectedUnit}
            onChange={e => setSelectedUnit(e.target.value)}
            className="bg-slate-900 border border-slate-700 text-slate-300 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-blue-500"
          >
            <option value="All">All Units</option>
            <option value="Alpha">Unit Alpha (RAF)</option>
            <option value="Bravo">Unit Bravo (CoBRA)</option>
            <option value="Charlie">Unit Charlie (Valley)</option>
            <option value="Delta">Unit Delta (Security)</option>
            <option value="Echo">Unit Echo (Logistics)</option>
          </select>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className="bg-slate-900 border border-slate-700 text-slate-300 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-blue-500"
          >
            <option value="All">All Risk Levels</option>
            <option value="CRITICAL REVIEW">Critical Review (70-100)</option>
            <option value="ELEVATED">Elevated (50-69)</option>
            <option value="WATCH">Watch (30-49)</option>
            <option value="STABLE">Stable (0-29)</option>
          </select>
        </div>
      </div>

      {/* Main Personnel Risk Table */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-950 border-b border-slate-800 text-slate-400 text-[11px] uppercase tracking-wider font-mono">
                <th className="py-3 px-4">Personnel ID</th>
                <th className="py-3 px-4">Unit</th>
                <th
                  className="py-3 px-4 cursor-pointer hover:text-white"
                  onClick={() => { setSortBy('deploymentDays'); setSortAsc(!sortAsc); }}
                >
                  <div className="flex items-center gap-1">
                    <span>Deployment</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="py-3 px-4">Risk Level</th>
                <th
                  className="py-3 px-4 cursor-pointer hover:text-white"
                  onClick={() => { setSortBy('riskScore'); setSortAsc(!sortAsc); }}
                >
                  <div className="flex items-center gap-1">
                    <span>Score</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="py-3 px-4">Trend</th>
                <th className="py-3 px-4">Primary Indicators</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-sans">
              {sorted.map(p => (
                <tr
                  key={p.id}
                  className="hover:bg-slate-850/80 transition-colors group cursor-pointer"
                  onClick={() => handleReview(p)}
                >
                  <td className="py-3 px-4 font-mono font-bold text-white flex items-center gap-2">
                    <span>{p.id}</span>
                    {p.supportRequested && (
                      <span className="w-2 h-2 rounded-full bg-blue-400" title="Voluntary support requested" />
                    )}
                  </td>
                  <td className="py-3 px-4 text-slate-300 font-medium">
                    <div>
                      <span>{p.unit}</span>
                      <span className="text-[10px] text-slate-400 block font-mono">{p.rank}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 font-mono text-slate-200">
                    <span>{p.deploymentDays} days</span>
                    <span className="text-[10px] text-slate-400 block">{p.deploymentStatus}</span>
                  </td>
                  <td className="py-3 px-4">
                    <RiskBadge category={p.riskCategory} size="sm" showDot={true} />
                  </td>
                  <td className="py-3 px-4 font-mono font-bold text-sm text-white">
                    {p.riskScore}
                  </td>
                  <td className="py-3 px-4 font-mono text-xs">
                    <span
                      className={`inline-flex items-center gap-1 ${
                        p.riskTrend === 'Increasing' || p.riskTrend === 'Rapid Spike'
                          ? 'text-rose-400'
                          : p.riskTrend === 'Decreasing'
                          ? 'text-emerald-400'
                          : 'text-slate-400'
                      }`}
                    >
                      {p.riskTrend}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-300 text-[11px] max-w-[220px]">
                    <div className="truncate" title={p.primaryIndicators.join(' + ')}>
                      {p.primaryIndicators.join(' + ')}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right" onClick={e => e.stopPropagation()}>
                    <button
                      onClick={() => handleReview(p)}
                      className="px-3 py-1 rounded bg-blue-600/30 hover:bg-blue-600 text-blue-300 hover:text-white font-semibold text-xs border border-blue-500/40 transition-colors"
                    >
                      Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <span>
            Displaying {sorted.length} uniformed personnel records.
          </span>
          <span className="font-mono text-slate-400">
            * Data minimization active: Private personal narratives concealed.
          </span>
        </div>
      </div>
    </div>
  );
};
