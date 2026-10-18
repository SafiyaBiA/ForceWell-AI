import React, { useState } from 'react';
import { useApp } from '../../store/AppContext';
import { RiskBadge } from '../../components/common/RiskBadge';
import { ShapBarChart } from '../../components/common/ShapBarChart';
import { InterventionModal } from '../../components/modals/InterventionModal';
import { calculateHybridRisk } from '../../engine/hybridRiskEngine';
import { analyzeLongitudinalTrend } from '../../engine/longitudinalAnalysis';
import {
  ArrowLeft,
  HeartHandshake,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
  Activity,
  Moon,
  Battery,
  Briefcase,
  FileCheck,
  RotateCcw
} from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine
} from 'recharts';

export const PersonnelProfile: React.FC = () => {
  const { selectedPersonnel, setActiveTab, logAudit } = useApp();
  const [showInterventionModal, setShowInterventionModal] = useState(false);
  const [reviewStarted, setReviewStarted] = useState(false);

  if (!selectedPersonnel) {
    return (
      <div className="p-8 text-center text-slate-400">
        <p>No personnel selected.</p>
        <button
          onClick={() => setActiveTab('personnel')}
          className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg text-xs"
        >
          Back to Personnel Registry
        </button>
      </div>
    );
  }

  // Calculate hybrid prediction & SHAP breakdown
  const prediction = calculateHybridRisk({
    deploymentDays: selectedPersonnel.deploymentDays,
    leaveGapDays: selectedPersonnel.leaveGapDays,
    leaveUtilization: selectedPersonnel.leaveUtilization,
    dutyHours: selectedPersonnel.dutyHours,
    workloadScore: selectedPersonnel.workloadScore,
    transferFrequency: selectedPersonnel.transferFrequency,
    trainingLoad: selectedPersonnel.trainingLoad,
    sleepQuality: selectedPersonnel.sleepQuality,
    fatigueScore: selectedPersonnel.fatigueScore,
    recoveryScore: selectedPersonnel.recoveryScore,
    wellnessScore: selectedPersonnel.wellnessScore
  });

  const longitudinal = analyzeLongitudinalTrend(
    selectedPersonnel.history,
    selectedPersonnel.riskScore,
    selectedPersonnel.baselineRisk
  );

  const handleStartReview = () => {
    setReviewStarted(true);
    logAudit('START_WELFARE_REVIEW', `Welfare Officer initiated formal review for ${selectedPersonnel.id}`);
  };

  return (
    <div className="space-y-6">
      {/* Top Breadcrumb & Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab('personnel')}
            className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-white tracking-tight">{selectedPersonnel.name}</h1>
              <span className="font-mono text-sm text-slate-400">({selectedPersonnel.id})</span>
              <RiskBadge category={selectedPersonnel.riskCategory} score={selectedPersonnel.riskScore} />
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              {selectedPersonnel.rank} ? {selectedPersonnel.unit} ? {selectedPersonnel.deploymentStatus}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleStartReview}
            disabled={reviewStarted}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors flex items-center gap-1.5 ${
              reviewStarted
                ? 'bg-emerald-950 text-emerald-300 border-emerald-700'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700'
            }`}
          >
            {reviewStarted ? <CheckCircle2 className="w-3.5 h-3.5" /> : <FileCheck className="w-3.5 h-3.5" />}
            <span>{reviewStarted ? 'Review In Progress' : 'Start Welfare Review'}</span>
          </button>

          <button
            onClick={() => setShowInterventionModal(true)}
            className="px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-950 transition-colors flex items-center gap-1.5"
          >
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Record Intervention</span>
          </button>
        </div>
      </div>

      {/* Support Requested Alert Banner */}
      {selectedPersonnel.supportRequested && (
        <div className="p-4 bg-blue-950/60 border border-blue-800 rounded-xl flex items-center justify-between text-xs text-blue-200">
          <div className="flex items-center gap-2.5">
            <HeartHandshake className="w-5 h-5 text-blue-400 shrink-0" />
            <div>
              <span className="font-bold text-white">Voluntary Confidential Welfare Support Requested</span>
              <p className="text-blue-300 text-[11px] mt-0.5">
                Personnel opted in for confidential welfare consultation during daily check-in.
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowInterventionModal(true)}
            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-xs shrink-0"
          >
            Respond Now
          </button>
        </div>
      )}

      {/* Contributing Indicators Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-3">
          <span className="text-[10px] text-slate-400 uppercase font-mono block">Deployment</span>
          <p className="text-base font-bold text-white font-mono mt-1">{selectedPersonnel.deploymentDays} days</p>
          <span className="text-[10px] text-slate-400">{selectedPersonnel.deploymentStatus}</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-3">
          <span className="text-[10px] text-slate-400 uppercase font-mono block">Duty Schedule</span>
          <p className="text-base font-bold text-white font-mono mt-1">{selectedPersonnel.dutyHours} hrs/d</p>
          <span className="text-[10px] text-slate-400">Score: {selectedPersonnel.workloadScore}</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-3">
          <span className="text-[10px] text-slate-400 uppercase font-mono block">Leave Gap</span>
          <p className="text-base font-bold text-rose-400 font-mono mt-1">{selectedPersonnel.leaveGapDays} days</p>
          <span className="text-[10px] text-slate-400">{selectedPersonnel.leaveUtilization}% taken</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-3">
          <span className="text-[10px] text-slate-400 uppercase font-mono block">Recovery</span>
          <p className="text-base font-bold text-emerald-400 font-mono mt-1">{selectedPersonnel.recoveryScore}/100</p>
          <span className="text-[10px] text-slate-400">Physiological balance</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-3">
          <span className="text-[10px] text-slate-400 uppercase font-mono block">Fatigue</span>
          <p className="text-base font-bold text-amber-400 font-mono mt-1">{selectedPersonnel.fatigueScore}/100</p>
          <span className="text-[10px] text-slate-400">Physical load</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-3">
          <span className="text-[10px] text-slate-400 uppercase font-mono block">Sleep (Voluntary)</span>
          <p className="text-base font-bold text-blue-300 font-mono mt-1">{selectedPersonnel.sleepQuality}</p>
          <span className="text-[10px] text-slate-400">Rest quality</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-3">
          <span className="text-[10px] text-slate-400 uppercase font-mono block">Risk Trend</span>
          <p className="text-base font-bold text-rose-400 font-mono mt-1">{selectedPersonnel.riskTrend}</p>
          <span className="text-[10px] text-slate-400">Baseline: {selectedPersonnel.baselineRisk}</span>
        </div>
      </div>

      {/* AI Explanation & Recommendations Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-5">
          {/* AI Explanation Box */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-950/40 border border-blue-900/60 rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                Explainable AI Welfare Diagnostic Summary
              </h3>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-sans bg-slate-950/80 p-3.5 rounded-lg border border-slate-800">
              "{prediction.explanation}"
            </p>

            <div className="space-y-2 pt-1">
              <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">
                Recommended Non-Punitive Actions:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {prediction.recommendedActions.map((action, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{action}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Longitudinal Chart */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                  5-Week Longitudinal Welfare-Risk Trajectory
                </h3>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Personal baseline vs progressive operational load
                </p>
              </div>
              <span className="text-xs font-mono text-slate-400">
                Baseline: <strong className="text-emerald-400">{selectedPersonnel.baselineRisk}</strong>
              </span>
            </div>

            <div className="h-60 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={selectedPersonnel.history}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="week" stroke="#64748b" tick={{ fontSize: 11 }} />
                  <YAxis domain={[0, 100]} stroke="#64748b" tick={{ fontSize: 11 }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b', borderRadius: '8px', fontSize: '11px' }}
                  />
                  <ReferenceLine y={selectedPersonnel.baselineRisk} stroke="#10b981" strokeDasharray="4 4" label={{ value: 'Baseline', fill: '#10b981', fontSize: 10 }} />
                  <Line type="monotone" dataKey="riskScore" stroke="#f43f5e" strokeWidth={2.5} dot={{ r: 5 }} name="Welfare Risk" />
                  <Line type="monotone" dataKey="workload" stroke="#fbbf24" strokeWidth={1.5} dot={{ r: 3 }} name="Workload" />
                  <Line type="monotone" dataKey="recovery" stroke="#38bdf8" strokeWidth={1.5} dot={{ r: 3 }} name="Recovery" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800 pt-2 font-mono">
              <span className="text-rose-400 font-bold">{longitudinal.alertMessage || 'Stable baseline continuity.'}</span>
              <span>Velocity: {longitudinal.velocityPerWeek > 0 ? `+${longitudinal.velocityPerWeek}` : longitudinal.velocityPerWeek} pts/wk</span>
            </div>
          </div>
        </div>

        {/* Right Side: SHAP Additive Feature Contributions */}
        <div className="space-y-5">
          <ShapBarChart
            contributions={prediction.shapContributions}
            totalScore={selectedPersonnel.riskScore}
            baselineScore={selectedPersonnel.baselineRisk}
          />

          {/* Human-in-the-loop Guardrail Notice */}
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2 text-xs text-slate-400">
            <div className="flex items-center gap-2 text-slate-200 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Ethical Governance & Human Oversight</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              AI outputs are advisory decision-support recommendations. Disciplinary decisions, performance ratings or punitive measures cannot be automatically derived from welfare scores.
            </p>
          </div>
        </div>
      </div>

      {/* Intervention Recording Modal */}
      {showInterventionModal && (
        <InterventionModal
          personnel={selectedPersonnel}
          onClose={() => setShowInterventionModal(false)}
        />
      )}
    </div>
  );
};
