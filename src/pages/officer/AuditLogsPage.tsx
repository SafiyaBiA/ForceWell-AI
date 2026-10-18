import React, { useState } from 'react';
import { useApp } from '../../store/AppContext';
import { ShieldCheck, Lock, Search, Filter, CheckCircle2, AlertTriangle } from 'lucide-react';

export const AuditLogsPage: React.FC = () => {
  const { auditLogs } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filtered = auditLogs.filter(log => {
    const matchesSearch =
      log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.userRole.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.resource.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || log.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-white tracking-tight">Security & Access Audit Trail</h1>
            <span className="text-[11px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded font-mono">
              TAMPER-EVIDENT
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Immutable cryptographic activity ledger tracking authorized record accesses and interventions
          </p>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search action or role..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 w-48 sm:w-56"
          />
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            className="bg-slate-900 border border-slate-700 text-slate-300 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-blue-500"
          >
            <option value="All">All Statuses</option>
            <option value="SUCCESS">Success</option>
            <option value="FLAGGED">Flagged</option>
            <option value="DENIED">Denied</option>
          </select>
        </div>
      </div>

      {/* Security Principles Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-xl space-y-1">
          <span className="text-[10px] text-blue-400 uppercase font-mono font-bold block">1. Non-Repudiation</span>
          <p className="text-slate-300 text-[11px]">Every officer access to personal profile triggers automatic cryptographic audit logging.</p>
        </div>
        <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-xl space-y-1">
          <span className="text-[10px] text-emerald-400 uppercase font-mono font-bold block">2. Privacy Sanitization</span>
          <p className="text-slate-300 text-[11px]">Personal narrative text and confidential medical details are excluded from audit parameters.</p>
        </div>
        <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-xl space-y-1">
          <span className="text-[10px] text-amber-400 uppercase font-mono font-bold block">3. Purpose Limitation</span>
          <p className="text-slate-300 text-[11px]">Audited resources can only be inspected under active welfare mandate (Police-II Division).</p>
        </div>
      </div>

      {/* Audit Log Table */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-950 border-b border-slate-800 text-slate-400 text-[11px] uppercase tracking-wider font-mono">
                <th className="py-3 px-4">Event ID</th>
                <th className="py-3 px-4">Timestamp (IST)</th>
                <th className="py-3 px-4">User Role</th>
                <th className="py-3 px-4">Action</th>
                <th className="py-3 px-4">Resource Target</th>
                <th className="py-3 px-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-mono">
              {filtered.map(log => (
                <tr key={log.id} className="hover:bg-slate-850/60 transition-colors">
                  <td className="py-2.5 px-4 font-bold text-slate-300">{log.id}</td>
                  <td className="py-2.5 px-4 text-slate-400 text-[11px]">{log.timestamp}</td>
                  <td className="py-2.5 px-4 text-slate-200 font-sans font-medium">{log.userRole}</td>
                  <td className="py-2.5 px-4">
                    <span className="px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-900/60 text-[10px]">
                      {log.action}
                    </span>
                  </td>
                  <td className="py-2.5 px-4 text-slate-300 text-[11px]">{log.resource}</td>
                  <td className="py-2.5 px-4 text-right">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                        log.status === 'SUCCESS'
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                          : log.status === 'FLAGGED'
                          ? 'bg-amber-950 text-amber-300 border border-amber-800'
                          : 'bg-rose-950 text-rose-300 border border-rose-800'
                      }`}
                    >
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <span>Logged {filtered.length} compliance events in active session.</span>
          <span className="font-mono text-slate-400">Retention: 365 Days ? AES-256 Encrypted</span>
        </div>
      </div>
    </div>
  );
};
