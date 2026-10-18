import React, { useState } from 'react';
import {
  Smartphone,
  Server,
  CheckCircle2,
  Cpu,
  Brain,
  Layers,
  Sparkles,
  HeartHandshake,
  UserCheck,
  Calendar,
  ShieldCheck,
  ArrowDown,
  Info
} from 'lucide-react';

export const ArchitecturePage: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(5);

  const pipeline = [
    {
      id: 0,
      title: 'Personnel App',
      icon: Smartphone,
      category: 'Client Tier',
      summary: 'Voluntary daily wellness check-ins, sleep reports, fatigue ratings & confidential support requests.',
      details: 'Mobile-first PWA with client-side encryption and voluntary consent management. Operates even in low-bandwidth forward posts.'
    },
    {
      id: 1,
      title: 'Secure API Gateway',
      icon: Server,
      category: 'Ingress & Security',
      summary: 'FastAPI gateway with mTLS, rate limiting, RBAC token verification & data minimization filters.',
      details: 'Ensures strict role boundaries: Officer credentials cannot see commander summaries; Commander credentials cannot view personal check-ins.'
    },
    {
      id: 2,
      title: 'Data Validation Layer',
      icon: CheckCircle2,
      category: 'Data Engineering',
      summary: 'Boundary checks (duty hours 0-24, scores 0-100), duplicate suppression & schema compliance.',
      details: 'Rejects malformed telemetry and generates data quality telemetry before records enter the training or inference store.'
    },
    {
      id: 3,
      title: 'Data Processing',
      icon: Layers,
      category: 'Data Engineering',
      summary: 'Administrative data harmonization: merges deployment days, leave rosters, transfer records and voluntary logs.',
      details: 'Resolves disparate battalion duty registries into normalized operational observation intervals.'
    },
    {
      id: 4,
      title: 'Feature Engineering',
      icon: Cpu,
      category: 'Feature Store',
      summary: 'Derives duty-to-rest ratio, leave deprivation penalty, continuous field deployment stress & recovery deficit.',
      details: 'Calculates non-linear compound indices (e.g. sleep disruption * high workload) that reflect real operational strain.'
    },
    {
      id: 5,
      title: 'AI + Rule Engine Layer',
      icon: Brain,
      category: 'Intelligence Core',
      summary: 'Ensemble Random Forest & XGBoost classifiers combined with deterministic operational rule rails.',
      details: 'Trained on synthetic operational welfare datasets. Hard rule safety floor prevents model blind spots during acute surges.'
    },
    {
      id: 6,
      title: 'Risk Fusion Layer',
      icon: Sparkles,
      category: 'Decision Fusion',
      summary: 'Fuses ML continuous probability with rule triggers into a 0-100 Prototype Welfare-Risk Index.',
      details: 'Categorizes into Stable (0-29), Watch (30-49), Elevated (50-69), and Critical Review (70-100). Explicitly non-clinical.'
    },
    {
      id: 7,
      title: 'Explainability (SHAP)',
      icon: Info,
      category: 'Model Governance',
      summary: 'Decomposes risk score into additive point contributions (e.g. Deployment +18, Workload +16, Fatigue +10).',
      details: 'Provides transparent rationale so welfare officers understand WHY a score changed without black-box opacity.'
    },
    {
      id: 8,
      title: 'Welfare Recommendation',
      icon: HeartHandshake,
      category: 'Decision Support',
      summary: 'Generates non-punitive support proposals: confidential check-in, rest rotation review, or counselling referral.',
      details: 'AI recommends; authorized human welfare personnel review and decide. Zero automated disciplinary consequences.'
    },
    {
      id: 9,
      title: 'Human Review',
      icon: UserCheck,
      category: 'Human-in-the-Loop',
      summary: 'Unit Welfare Officer evaluates profile, context, and longitudinal baseline deviation before taking action.',
      details: 'Officer determines operational feasibility and initiates personal supportive dialogue.'
    },
    {
      id: 10,
      title: 'Intervention Execution',
      icon: ShieldCheck,
      category: 'Action Tier',
      summary: 'Welfare check-in conducted, R&R leave granted, or workload shared with reserve formation.',
      details: 'Action is recorded in the immutable audit trail with scheduled review milestone.'
    },
    {
      id: 11,
      title: 'Longitudinal Follow-up',
      icon: Calendar,
      category: 'Continuous Evaluation',
      summary: 'Tracks post-intervention recovery trajectory to verify welfare stabilization.',
      details: 'Monitors risk reduction (e.g. P-1055: 68 &rarr; 34) and records positive case outcomes.'
    },
  ];

  return (
    <div className="space-y-8 py-4">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-xl font-bold text-white tracking-tight">End-to-End System Architecture</h1>
        <p className="text-xs text-slate-400 mt-0.5">
          Complete data pipeline from voluntary personnel inputs to human welfare action and follow-up
        </p>
      </div>

      {/* Interactive Diagram Flow */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Interactive Vertical Node Pipeline */}
        <div className="lg:col-span-2 space-y-2">
          {pipeline.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === step.id;

            return (
              <div key={step.id}>
                <div
                  onClick={() => setActiveStep(step.id)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-blue-950/80 border-blue-500 shadow-md shadow-blue-950/50 scale-[1.01]'
                      : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        isSelected ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white font-mono">{idx + 1}. {step.title}</span>
                        <span className="text-[10px] bg-slate-950 text-slate-400 px-2 py-0.2 rounded font-mono">
                          {step.category}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 mt-0.5 line-clamp-1">{step.summary}</p>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-blue-400 font-semibold shrink-0">
                    {isSelected ? 'Inspecting' : 'View'}
                  </span>
                </div>

                {idx < pipeline.length - 1 && (
                  <div className="flex justify-center my-0.5">
                    <ArrowDown className="w-3 h-3 text-slate-700" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right: Selected Node Deep Dive */}
        <div className="space-y-4">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sticky top-20 space-y-4 shadow-xl">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                {React.createElement(pipeline[activeStep].icon, { className: 'w-6 h-6' })}
              </div>
              <div>
                <span className="text-[10px] text-blue-400 uppercase font-mono font-bold">
                  Stage {activeStep + 1} of 12 ? {pipeline[activeStep].category}
                </span>
                <h3 className="text-base font-bold text-white">{pipeline[activeStep].title}</h3>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-400 uppercase font-mono text-[10px] block mb-1">Functional Scope:</span>
                <p className="text-slate-200 leading-relaxed font-sans">{pipeline[activeStep].summary}</p>
              </div>

              <div>
                <span className="text-slate-400 uppercase font-mono text-[10px] block mb-1">Architectural Implementation:</span>
                <p className="text-slate-300 leading-relaxed font-sans bg-slate-950 p-3 rounded-lg border border-slate-800">
                  {pipeline[activeStep].details}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800 space-y-1.5 text-[11px]">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Data Classification:</span>
                  <span className="text-emerald-400 font-mono">Protected / Encrypted</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Audit Logging:</span>
                  <span className="text-blue-400 font-mono">Active (Tamper-Evident)</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Human Oversight:</span>
                  <span className="text-amber-400 font-mono">Enforced (Non-Autonomous)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
