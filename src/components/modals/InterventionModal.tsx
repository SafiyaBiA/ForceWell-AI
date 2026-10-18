import React, { useState } from 'react';
import { useApp } from '../../store/AppContext';
import { Personnel, Intervention } from '../../types';
import { HeartHandshake, Calendar, User, FileText, CheckCircle2, X } from 'lucide-react';

interface InterventionModalProps {
  personnel: Personnel;
  onClose: () => void;
}

export const InterventionModal: React.FC<InterventionModalProps> = ({ personnel, onClose }) => {
  const { recordIntervention } = useApp();

  const [type, setType] = useState<Intervention['type']>('Confidential welfare check-in');
  const [officerName, setOfficerName] = useState('Insp. R. K. Sharma');
  const [followUpDays, setFollowUpDays] = useState(7);
  const [notes, setNotes] = useState(
    `Initiated preventive welfare review following elevated risk indicators (${personnel.riskScore}/100). Focus on deployment rotation and recovery rest.`
  );
  const [submitted, setSubmitted] = useState(false);

  const calculateFollowUpDate = (days: number) => {
    const d = new Date();
    d.setDate(d.getDate() + days);
    return d.toISOString().split('T')[0];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    recordIntervention({
      personnelId: personnel.id,
      personnelName: personnel.name,
      unit: personnel.unit,
      officerName,
      officerRole: 'Unit Welfare Officer',
      date: new Date().toISOString().split('T')[0],
      type,
      status: 'Scheduled',
      followUpDate: calculateFollowUpDate(followUpDays),
      notes,
    });
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-slate-950 border border-slate-800 rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-slate-900/80 p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Record Welfare Intervention</h3>
              <p className="text-xs text-slate-400">
                Action Plan for {personnel.name} ({personnel.id})
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-700/50 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white">Intervention Scheduled</h4>
            <p className="text-xs text-slate-300">
              The welfare intervention has been logged in the audit trail. Follow-up is set for {calculateFollowUpDate(followUpDays)}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1.5 uppercase tracking-wider text-[11px]">
                Intervention Category
              </label>
              <select
                value={type}
                onChange={e => setType(e.target.value as Intervention['type'])}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="Confidential welfare check-in">Confidential welfare check-in</option>
                <option value="Counselling referral">Counselling referral</option>
                <option value="Leave/welfare review">Leave/welfare review</option>
                <option value="Workload review">Workload review</option>
                <option value="Follow-up assessment">Follow-up assessment</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1.5 uppercase tracking-wider text-[11px]">
                  Assigned Welfare Officer
                </label>
                <input
                  type="text"
                  value={officerName}
                  onChange={e => setOfficerName(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500 font-mono"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1.5 uppercase tracking-wider text-[11px]">
                  Follow-up Window
                </label>
                <select
                  value={followUpDays}
                  onChange={e => setFollowUpDays(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                >
                  <option value={3}>3 Days (High Urgency)</option>
                  <option value={7}>7 Days (Standard)</option>
                  <option value={14}>14 Days (Post-R&R)</option>
                  <option value={30}>30 Days (Routine)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1.5 uppercase tracking-wider text-[11px]">
                Welfare Action Notes & Plan
              </label>
              <textarea
                value={notes}
                onChange={e => setNotes(e.target.value)}
                rows={3}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
                required
              />
              <p className="text-[10px] text-slate-400 mt-1">
                * Welfare observations are protected and only accessible to designated welfare personnel.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-lg font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-950 transition-colors uppercase tracking-wider text-[11px]"
              >
                Schedule Intervention
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
