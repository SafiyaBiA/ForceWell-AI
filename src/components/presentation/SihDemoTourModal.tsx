import React, { useState } from 'react';
import { useApp } from '../../store/AppContext';
import { RiskBadge } from '../common/RiskBadge';
import {
  Play,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  X,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Activity,
  HeartHandshake,
  AlertTriangle,
  Check
} from 'lucide-react';

export const SihDemoTourModal: React.FC = () => {
  const {
    isSihDemoOpen,
    closeSihDemo,
    personnelList,
    recordIntervention,
    setSelectedPersonnel,
    setActiveTab,
    setRole
  } = useApp();

  const [currentStep, setCurrentStep] = useState(0);
  const [interventionRecorded, setInterventionRecorded] = useState(false);

  const targetPersonnel = personnelList.find(p => p.id === 'P-1024') || personnelList[0];

  const steps = [
    {
      title: 'Step 1: Personnel Spotlight (P-1024)',
      subtitle: 'Identify Personnel in Operational Field Rotation',
      content: (
        <div className="space-y-4 text-xs">
          <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-white text-sm">{targetPersonnel.name} ({targetPersonnel.id})</h4>
              <p className="text-slate-400">{targetPersonnel.rank} ? {targetPersonnel.unit} (102 BN RAF)</p>
            </div>
            <RiskBadge category={targetPersonnel.riskCategory} score={targetPersonnel.riskScore} />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
              <span className="text-slate-400">Deployment</span>
              <p className="text-base font-bold text-amber-400 font-mono mt-0.5">{targetPersonnel.deploymentDays} Days</p>
            </div>
            <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
              <span className="text-slate-400">Duty Schedule</span>
              <p className="text-base font-bold text-white font-mono mt-0.5">{targetPersonnel.dutyHours} hrs/day</p>
            </div>
            <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
              <span className="text-slate-400">Leave Gap</span>
              <p className="text-base font-bold text-rose-400 font-mono mt-0.5">{targetPersonnel.leaveGapDays} Days</p>
            </div>
            <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
              <span className="text-slate-400">Baseline Risk</span>
              <p className="text-base font-bold text-slate-300 font-mono mt-0.5">{targetPersonnel.baselineRisk}</p>
            </div>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Ct. Rajesh Kumar has been on active field rotation without home leave for 42 consecutive days. The baseline welfare index was previously established at <strong>32</strong>.
          </p>
        </div>
      ),
    },
    {
      title: 'Step 2: Longitudinal Observation (Weeks 1 to 5)',
      subtitle: 'Tracking Welfare-Risk Index Trajectory',
      content: (
        <div className="space-y-4 text-xs">
          <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
            <p className="text-slate-400 font-mono text-[11px] mb-2 uppercase tracking-wider">Historical Welfare-Risk Progression:</p>
            <div className="grid grid-cols-5 gap-2 text-center font-mono">
              <div className="p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">Week 1</span>
                <span className="text-emerald-400 font-bold text-sm">32</span>
                <span className="text-[9px] text-slate-400 block mt-0.5">Stable</span>
              </div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">Week 2</span>
                <span className="text-amber-400 font-bold text-sm">39</span>
                <span className="text-[9px] text-slate-400 block mt-0.5">Watch</span>
              </div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">Week 3</span>
                <span className="text-amber-400 font-bold text-sm">47</span>
                <span className="text-[9px] text-slate-400 block mt-0.5">Watch</span>
              </div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">Week 4</span>
                <span className="text-orange-400 font-bold text-sm">61</span>
                <span className="text-[9px] text-slate-400 block mt-0.5">Elevated</span>
              </div>
              <div className="p-2 rounded bg-rose-950/60 border border-rose-800/80">
                <span className="text-[10px] text-rose-300 block">Week 5</span>
                <span className="text-rose-400 font-bold text-sm">72</span>
                <span className="text-[9px] text-rose-300 block mt-0.5">Critical</span>
              </div>
            </div>
          </div>
          <div className="p-3 bg-rose-950/30 border border-rose-900/60 rounded-lg text-rose-200">
            <span className="font-bold flex items-center gap-1.5 text-xs mb-1">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              Longitudinal Warning Engine Triggered:
            </span>
            <p className="text-[11px]">
              "Rapidly increasing welfare-risk trend detected (+25 points in 2 weeks, current 72 vs personal baseline 32). Persistent elevation requires human review."
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Step 3: Feature Engineering & Organic Strain',
      subtitle: 'Correlating Duty Hours, Recovery and Voluntary Signals',
      content: (
        <div className="space-y-3 text-xs">
          <p className="text-slate-300">
            FORCEWELL AI fuses administrative duty logs with voluntarily reported daily check-in responses:
          </p>
          <div className="grid grid-cols-2 gap-2 font-mono">
            <div className="p-2.5 bg-slate-900 rounded border border-slate-800">
              <span className="text-slate-400 text-[10px] uppercase">Duty Workload</span>
              <p className="text-sm font-bold text-white mt-1">13.5 hrs/day (Score: 88)</p>
              <span className="text-[10px] text-amber-400">High operational surge</span>
            </div>
            <div className="p-2.5 bg-slate-900 rounded border border-slate-800">
              <span className="text-slate-400 text-[10px] uppercase">Recovery Index</span>
              <p className="text-sm font-bold text-rose-400 mt-1">28 / 100 (Deficit: 72%)</p>
              <span className="text-[10px] text-rose-300">Restricted rest window</span>
            </div>
            <div className="p-2.5 bg-slate-900 rounded border border-slate-800">
              <span className="text-slate-400 text-[10px] uppercase">Sleep Quality (Voluntary)</span>
              <p className="text-sm font-bold text-amber-400 mt-1">Rating: Poor</p>
              <span className="text-[10px] text-slate-400">Disrupted circadian cycle</span>
            </div>
            <div className="p-2.5 bg-slate-900 rounded border border-slate-800">
              <span className="text-slate-400 text-[10px] uppercase">Support Request</span>
              <p className="text-sm font-bold text-blue-400 mt-1">Yes, Requested</p>
              <span className="text-[10px] text-blue-300">Confidential check-in opt-in</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Step 4: Explainable AI - SHAP Waterfall Breakdown',
      subtitle: 'Transparent Attribution of Risk Drivers',
      content: (
        <div className="space-y-3 text-xs">
          <p className="text-slate-300">
            The hybrid AI ensemble computes the exact point contribution of each indicator:
          </p>
          <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-2">
            <div className="flex justify-between items-center text-[11px] border-b border-slate-800 pb-1">
              <span className="text-slate-400">Baseline Foundation</span>
              <span className="font-mono text-slate-300 font-bold">24 pts</span>
            </div>
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-white">Deployment Duration (42 days continuous)</span>
              <span className="font-mono text-amber-400 font-bold">+18 pts</span>
            </div>
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-white">Workload & Duty Hours (13.5h/day)</span>
              <span className="font-mono text-amber-400 font-bold">+16 pts</span>
            </div>
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-white">Leave Pattern (82 days gap, low use)</span>
              <span className="font-mono text-amber-400 font-bold">+12 pts</span>
            </div>
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-white">Fatigue Accumulation</span>
              <span className="font-mono text-amber-400 font-bold">+10 pts</span>
            </div>
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-white">Recovery Deficit</span>
              <span className="font-mono text-amber-400 font-bold">+8 pts</span>
            </div>
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-white">Sleep Disruption</span>
              <span className="font-mono text-amber-400 font-bold">+8 pts</span>
            </div>
            <div className="flex justify-between items-center text-xs pt-1.5 border-t border-slate-800 font-bold">
              <span className="text-white uppercase">Calculated Welfare Risk Index:</span>
              <span className="font-mono text-rose-400 text-sm">72 / 100</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Step 5: Decision-Support Welfare Recommendations',
      subtitle: 'AI Recommends, Human Decides',
      content: (
        <div className="space-y-3 text-xs">
          <div className="p-3 bg-blue-950/30 border border-blue-900/60 rounded-lg text-slate-200">
            <span className="font-bold text-blue-300 text-xs block mb-1">AI Explanation:</span>
            <p className="text-[11px] leading-relaxed">
              "Elevated welfare-risk indicators are primarily associated with prolonged deployment, increased workload and reduced recovery."
            </p>
          </div>
          <div className="space-y-1.5">
            <span className="text-slate-400 uppercase tracking-wider text-[10px] font-mono">Recommended Preventive Interventions:</span>
            <div className="p-2 rounded bg-slate-900 border border-slate-800 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Confidential Welfare Check-in with Unit Welfare Officer</span>
            </div>
            <div className="p-2 rounded bg-slate-900 border border-slate-800 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Operational Rest & Rotation (R&R) schedule adjustment</span>
            </div>
            <div className="p-2 rounded bg-slate-900 border border-slate-800 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Follow-up welfare review within 72 hours</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Step 6: Human-in-the-Loop Welfare Intervention',
      subtitle: 'Welfare Officer Action',
      content: (
        <div className="space-y-3 text-xs">
          <p className="text-slate-300">
            The Welfare Officer reviews the explanation and records a targeted non-punitive intervention:
          </p>
          <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-2">
            <div className="flex justify-between">
              <span className="text-slate-400">Intervention Type:</span>
              <span className="font-semibold text-white">Confidential welfare check-in & R&R rotation</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Assigned Officer:</span>
              <span className="font-semibold text-white">Insp. R. K. Sharma (Welfare Officer)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Action Plan:</span>
              <span className="text-slate-300">Rotate to base transit camp; 7 days rest allocation</span>
            </div>
          </div>

          <button
            onClick={() => {
              recordIntervention({
                personnelId: 'P-1024',
                personnelName: 'Ct. Rajesh Kumar',
                unit: 'Unit Alpha',
                officerName: 'Insp. R. K. Sharma',
                officerRole: 'Unit Welfare Officer',
                date: new Date().toISOString().split('T')[0],
                type: 'Confidential welfare check-in',
                status: 'Completed',
                followUpDate: '2026-09-17',
                notes: 'Conducted confidential check-in. Approved 7-day R&R rotation. Workload shared with Unit Delta.',
                outcome: 'Personnel responded positively to rest rotation.'
              });
              setInterventionRecorded(true);
            }}
            disabled={interventionRecorded}
            className={`w-full py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
              interventionRecorded
                ? 'bg-emerald-800 text-emerald-100 cursor-default'
                : 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-900/50'
            }`}
          >
            {interventionRecorded ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Intervention Successfully Logged</span>
              </>
            ) : (
              <>
                <HeartHandshake className="w-4 h-4" />
                <span>Record Welfare Intervention</span>
              </>
            )}
          </button>
        </div>
      ),
    },
    {
      title: 'Step 7: Post-Intervention Recovery Trajectory',
      subtitle: 'Demonstrating Long-term Preventive Success',
      content: (
        <div className="space-y-4 text-xs">
          <p className="text-slate-300">
            Following rest rotation and workload rebalancing, the personnel welfare index returns to normal operational equilibrium:
          </p>
          <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-white">Post-Intervention Recovery Model:</span>
              <span className="text-emerald-400 font-mono font-bold">-38 Points Recovered</span>
            </div>
            <div className="h-4 w-full bg-slate-950 rounded-full overflow-hidden flex border border-slate-800">
              <div className="bg-rose-500 h-full w-[72%]" title="Pre-intervention: 72" />
              <div className="bg-emerald-500 h-full w-[34%]" title="Post-intervention: 34" />
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1.5">
              <span>Peak Risk Index: 72 (Critical)</span>
              <span>Post-Rotation: 34 (Watch / Stable)</span>
            </div>
          </div>
          <div className="p-3 bg-emerald-950/30 border border-emerald-900/60 rounded-lg text-emerald-200">
            <p className="text-[11px]">
              "Timely human intervention resolved operational fatigue before acute crisis. Zero disciplinary actions; 100% welfare-oriented support."
            </p>
          </div>
        </div>
      ),
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      closeSihDemo();
      setSelectedPersonnel(targetPersonnel);
      setRole('officer');
      setActiveTab('personnel');
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (!isSihDemoOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-slate-950 border border-blue-900/80 rounded-2xl max-w-xl w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500 text-slate-950 font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                  SIH26186 Guided Demonstration
                </span>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">
                  Step {currentStep + 1} of {steps.length}
                </span>
              </div>
              <h3 className="text-base font-bold text-white tracking-tight">{steps[currentStep].title}</h3>
            </div>
          </div>
          <button
            onClick={closeSihDemo}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="w-full bg-slate-900 h-1.5 flex">
          {steps.map((_, idx) => (
            <div
              key={idx}
              className={`h-full flex-1 transition-all ${
                idx <= currentStep ? 'bg-amber-500' : 'bg-slate-800'
              }`}
            />
          ))}
        </div>

        <div className="p-6 space-y-4">
          <p className="text-xs text-slate-400 font-medium">{steps[currentStep].subtitle}</p>
          {steps[currentStep].content}
        </div>

        <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 ${
              currentStep === 0
                ? 'opacity-40 text-slate-500 cursor-not-allowed'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                closeSihDemo();
                setSelectedPersonnel(targetPersonnel);
                setRole('officer');
                setActiveTab('personnel');
              }}
              className="px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-slate-200"
            >
              Skip to Profile
            </button>

            <button
              onClick={handleNext}
              className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center gap-1.5 shadow-md shadow-amber-950 transition-colors"
            >
              <span>{currentStep === steps.length - 1 ? 'Finish Demo' : 'Next Step'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
