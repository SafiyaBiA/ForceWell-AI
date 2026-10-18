import React from 'react';
import {
  Shield,
  ShieldCheck,
  Lock,
  Heart,
  UserCheck,
  EyeOff,
  History,
  Scale,
  CheckCircle2,
  AlertTriangle,
  FileText
} from 'lucide-react';

export const PrivacyTrustPage: React.FC = () => {
  const tenets = [
    {
      title: '1. DATA MINIMIZATION',
      icon: EyeOff,
      color: 'text-blue-400',
      summary: 'Only necessary welfare indicators are processed.',
      description: 'The platform ingests strictly operational administrative logs (duty hours, leave rosters, deployment duration) and voluntary check-in signals. No biometric cameras, surveillance keystroke logging, private messaging scans or GPS tracking are ever utilized.'
    },
    {
      title: '2. VOLUNTARY WELLNESS',
      icon: Heart,
      color: 'text-rose-400',
      summary: 'Self-reported wellness information is 100% voluntary.',
      description: 'Personnel have full autonomy to opt in or skip daily wellness check-ins. Refusal to submit voluntary questions carries zero punitive, disciplinary, or operational repercussions.'
    },
    {
      title: '3. ROLE-BASED ACCESS (RBAC)',
      icon: Lock,
      color: 'text-amber-400',
      summary: 'Different roles see only information appropriate to their function.',
      description: 'Strict cryptographic role partitioning ensures Commanders only see aggregated battalion readiness heatmaps. Individual voluntary check-in answers are restricted exclusively to designated Unit Welfare Officers.'
    },
    {
      title: '4. END-TO-END ENCRYPTION',
      icon: Shield,
      color: 'text-emerald-400',
      summary: 'Sensitive information is protected in transit and at rest.',
      description: 'All network communications enforce TLS 1.3 encryption. At-rest databases employ AES-256 with key management isolated from operational database administrators.'
    },
    {
      title: '5. AUDITABILITY & TRANSPARENCY',
      icon: History,
      color: 'text-purple-400',
      summary: 'Sensitive access is logged in a tamper-evident audit trail.',
      description: 'Every instance of an officer viewing a personal welfare profile or recording an intervention is immutably logged with timestamp, officer badge ID, and resource identifier to prevent unauthorized profiling.'
    },
    {
      title: '6. PURPOSE LIMITATION',
      icon: Scale,
      color: 'text-cyan-400',
      summary: 'Designed strictly for welfare support, not disciplinary profiling.',
      description: 'FORCEWELL AI is legally and architecturally bounded to support, not surveillance. Welfare-risk indicators cannot be queried or subpoenaed for Annual Confidential Reports (ACR), court-martial proceedings, or promotion vetoes.'
    },
    {
      title: '7. HUMAN OVERSIGHT',
      icon: UserCheck,
      color: 'text-indigo-400',
      summary: 'AI recommendations require authorized human review.',
      description: 'The system is a decision-support assistant. AI models NEVER execute autonomous personnel transfers, leaves, or sanctions. Authorized human welfare personnel review, contextualize, and decide every welfare intervention.'
    }
  ];

  return (
    <div className="space-y-8 py-4">
      {/* Header */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-white tracking-tight">Privacy & Trust Center</h1>
          <span className="text-[11px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded font-mono">
            CORE PRODUCT REQUIREMENT
          </span>
        </div>
        <p className="text-xs text-slate-400 mt-0.5">
          Constitutional, ethical and statutory privacy protections built into the FORCEWELL AI architecture
        </p>
      </div>

      {/* Core Principle Callout */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 border border-blue-800 rounded-2xl p-6 text-center space-y-2 shadow-xl">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400">
          THE FUNDAMENTAL OPERATIONAL PRINCIPLE
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          SUPPORT, NOT SURVEILLANCE.
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
          FORCEWELL AI protects the dignity, privacy and career security of every uniformed soldier. Early welfare detection enables caring human support before exhaustion manifests into personal crisis.
        </p>
      </div>

      {/* 7 Tenets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tenets.map(item => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3 hover:border-slate-700 transition-colors shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl bg-slate-950 border border-slate-800 ${item.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white font-mono">{item.title}</h3>
                  <span className="text-[11px] text-blue-300 font-medium block">{item.summary}</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-sans pt-1 border-t border-slate-800/80">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Statutory Disclaimers */}
      <div className="p-6 bg-slate-900/70 border border-slate-800 rounded-2xl space-y-3 text-xs text-slate-400">
        <h3 className="font-bold text-white uppercase font-mono tracking-wider flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Non-Diagnostic Ethical Boundary</span>
        </h3>
        <p className="leading-relaxed">
          FORCEWELL AI evaluates administrative fatigue and operational stress indicators to provide decision support. The platform NEVER diagnoses depression, anxiety, PTSD, suicidal intent or any clinical psychiatric condition. It operates strictly under the preventive welfare mandate of the Ministry of Home Affairs and CRPF Police-II Division for Smart India Hackathon 2026.
        </p>
      </div>
    </div>
  );
};
