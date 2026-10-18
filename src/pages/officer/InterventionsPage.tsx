import React, { useState } from 'react';
import { useApp } from '../../store/AppContext';
import { Intervention } from '../../types';
import {
  HeartHandshake,
  Calendar,
  CheckCircle2,
  Clock,
  ArrowRight,
  Filter,
  Plus,
  ShieldCheck,
  Check
} from 'lucide-react';

export const InterventionsPage: React.FC = () => {
  const { interventions, updateInterventionStatus, setActiveTab, setSelectedPersonnel, personnelList } = useApp();
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [outcomeNotes, setOutcomeNotes] = useState('');

  const filtered = interventions.filter(item => {
    return filterStatus === 'All' || item.status === filterStatus;
  });

  const handleComplete = (id: string) => {
    updateInterventionStatus(
      id,
      'Completed',
      outcomeNotes || 'Intervention successfully conducted. Rest rotation provided; welfare indicators showing stabilization.'
    );
    setEditingId(null);
    setOutcomeNotes('');
  };

  const workflowSteps = [
    { title: '1. Risk Signal', desc: 'Predictive indicator threshold exceeded (e.g. Risk > 50 or voluntary request)' },
    { title: '2. Human Review', desc: 'Authorized Welfare Officer inspects SHAP drivers & longitudinal curve' },
    { title: '3. Recommended Support', desc: 'AI suggests tailored non-punitive support actions' },
    { title: '4. Intervention', desc: 'Officer schedules consultation, rest rotation or counselling' },
    { title: '5. Follow-up', desc: 'Periodic check-in within 3 to 14 days' },
    { title: '6. Outcome', desc: 'Welfare restoration logged & evaluated in audit trail' },
  ];

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-xl font-bold text-white tracking-tight">Welfare Intervention Management</h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Human-in-the-loop action lifecycle: Signal &rarr; Review &rarr; Action &rarr; Follow-up &rarr; Outcome
          </p>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={filterStatus}
            onChange={e => setFilterStatus(e.target.value)}
            className="bg-slate-900 border border-slate-700 text-slate-300 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-blue-500"
          >
            <option value="All">All Statuses</option>
            <option value="Scheduled">Scheduled</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      {/* 6-Stage Workflow Banner */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-white">
          Standardized Preventive Intervention Workflow
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {workflowSteps.map((step, idx) => (
            <div key={idx} className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80 space-y-1">
              <span className="text-xs font-bold text-blue-400 font-mono block">{step.title}</span>
              <p className="text-[10px] text-slate-400 leading-tight">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interventions Registry Table */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-950 border-b border-slate-800 text-slate-400 text-[11px] uppercase tracking-wider font-mono">
                <th className="py-3 px-4">Case ID</th>
                <th className="py-3 px-4">Personnel</th>
                <th className="py-3 px-4">Unit</th>
                <th className="py-3 px-4">Intervention Type</th>
                <th className="py-3 px-4">Assigned Officer</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Follow-up Date</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-sans">
              {filtered.map(item => (
                <tr key={item.id} className="hover:bg-slate-850/60 transition-colors">
                  <td className="py-3 px-4 font-mono font-bold text-blue-400">{item.id}</td>
                  <td className="py-3 px-4 font-semibold text-white">
                    <div>
                      <span>{item.personnelName}</span>
                      <span className="text-[10px] text-slate-400 font-mono block">({item.personnelId})</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-slate-300">{item.unit}</td>
                  <td className="py-3 px-4 text-slate-200">
                    <span className="px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-900/60 text-[11px]">
                      {item.type}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-300">{item.officerName}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full font-mono uppercase ${
                        item.status === 'Completed'
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                          : item.status === 'In Progress'
                          ? 'bg-amber-950 text-amber-300 border border-amber-800'
                          : 'bg-blue-950 text-blue-300 border border-blue-800'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-mono text-slate-300">{item.followUpDate}</td>
                  <td className="py-3 px-4 text-right space-x-2">
                    {item.status !== 'Completed' ? (
                      <button
                        onClick={() => setEditingId(item.id)}
                        className="px-2.5 py-1 rounded bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white text-[11px] font-semibold border border-emerald-500/40 transition-colors"
                      >
                        Record Outcome
                      </button>
                    ) : (
                      <span className="text-[11px] text-slate-400 italic">Resolved</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal for recording outcome if editing */}
        {editingId && (
          <div className="p-4 bg-slate-950 border-t border-slate-800 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Record Follow-up Outcome for Case {editingId}
            </h4>
            <textarea
              value={outcomeNotes}
              onChange={e => setOutcomeNotes(e.target.value)}
              placeholder="Detail the welfare check-in discussion, rest adjustments granted, or medical referrals made..."
              rows={2}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditingId(null)}
                className="px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={() => handleComplete(editingId)}
                className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-md"
              >
                Mark Intervention Completed
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
