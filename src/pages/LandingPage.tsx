import React from 'react';
import { useApp } from '../store/AppContext';
import {
  Shield,
  Heart,
  Scale,
  Brain,
  Lock,
  PlayCircle,
  ArrowRight,
  CheckCircle2,
  Users,
  Activity,
  Layers,
  FileCode,
  ShieldAlert,
  Building
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { setRole, setActiveTab, startSihDemo } = useApp();

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto space-y-6 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-700/60 text-blue-300 text-xs font-mono font-semibold uppercase tracking-wider">
          <Building className="w-3.5 h-3.5" />
          <span>Smart India Hackathon 2026 ? Problem Statement SIH26186</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          FORCEWELL <span className="text-blue-400">AI</span>
        </h1>

        <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-200 via-white to-blue-300 bg-clip-text text-transparent font-sans">
          "Predict Early. Protect Privacy. Empower People."
        </p>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          An AI-powered predictive welfare intelligence platform designed for uniformed forces to identify <strong>early welfare-risk patterns</strong> and support timely human-led intervention.
        </p>

        {/* Core CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => {
              setRole('officer');
              setActiveTab('dashboard');
            }}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-950/60 transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            <span>Explore Command Platform</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={startSihDemo}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-950/40 transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            <PlayCircle className="w-4 h-4 fill-slate-950 text-amber-500" />
            <span>Run 3-Minute SIH Demo</span>
          </button>
        </div>

        {/* MHA / CRPF Mandate Badge */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
          <span>Organization: <strong>Ministry of Home Affairs</strong></span>
          <span>?</span>
          <span>Department: <strong>CRPF (Police-II Division)</strong></span>
          <span>?</span>
          <span className="text-emerald-400 font-semibold">Support, Not Surveillance</span>
        </div>
      </div>

      {/* 4 Core Pillars */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8 font-mono">
          Core Architectural Principles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-blue-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-800/60 flex items-center justify-center text-blue-400">
              <Brain className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Predictive Analytics</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Analyzes deployment duration, duty hours, leave gaps, and voluntary check-in signals to detect early welfare-risk patterns before acute burnout.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-emerald-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800/60 flex items-center justify-center text-emerald-400">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Privacy by Design</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Strict data minimization and role-based access. Voluntary check-ins remain confidential. Disciplinary systems have zero access to welfare data.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-amber-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-950 border border-amber-800/60 flex items-center justify-center text-amber-400">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Human-in-the-Loop</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              AI recommends; authorized human welfare officers review and decide. Absolutely no automated punitive or career-impacting triggers.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-purple-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-purple-950 border border-purple-800/60 flex items-center justify-center text-purple-400">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Workload Intelligence</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Detects battalion-level operational concentration and generates actionable duty redistribution recommendations across reserve formations.
            </p>
          </div>
        </div>
      </div>

      {/* 3 Role Experiences Preview */}
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        <h2 className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
          Three Dedicated Role-Based Experiences
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Role 1: Personnel */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-[10px] bg-blue-950 text-blue-300 px-2 py-0.5 rounded font-mono font-semibold border border-blue-800">
                ROLE 1 ? PERSONNEL
              </span>
              <h3 className="text-lg font-bold text-white">Mobile-First Wellness App</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Voluntary 45-second daily check-in, personal baseline tracking, recovery trends, and 1-click confidential support requests.
              </p>
              <ul className="text-xs text-slate-300 space-y-1.5 pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Voluntary 5-point wellness scale</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Personal baseline comparison</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Stigma-free support requests</li>
              </ul>
            </div>
            <button
              onClick={() => {
                setRole('personnel');
                setActiveTab('home');
              }}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-blue-300 font-semibold text-xs transition-colors"
            >
              Open Personnel App &rarr;
            </button>
          </div>

          {/* Role 2: Welfare Officer */}
          <div className="bg-slate-900/90 border border-blue-600/50 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-xl shadow-blue-950/30">
            <div className="space-y-3">
              <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded font-mono font-semibold">
                ROLE 2 ? WELFARE OFFICER (MAIN)
              </span>
              <h3 className="text-lg font-bold text-white">Welfare Command Dashboard</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Real-time risk distribution, SHAP-style explainable AI contributions, priority attention queues, and intervention lifecycle management.
              </p>
              <ul className="text-xs text-slate-300 space-y-1.5 pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Explainable AI & SHAP attribution</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> 5-week longitudinal velocity tracking</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Intervention tracking & follow-up</li>
              </ul>
            </div>
            <button
              onClick={() => {
                setRole('officer');
                setActiveTab('dashboard');
              }}
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors shadow-md shadow-blue-950"
            >
              Open Officer Portal &rarr;
            </button>
          </div>

          {/* Role 3: Commander */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-[10px] bg-amber-950 text-amber-300 px-2 py-0.5 rounded font-mono font-semibold border border-amber-800">
                ROLE 3 ? COMMANDER
              </span>
              <h3 className="text-lg font-bold text-white">Strategic Command Insights</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Macro organizational health, battalion workload balancing, deployment pressure curves, and leave backlog clearance.
              </p>
              <ul className="text-xs text-slate-300 space-y-1.5 pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Aggregated unit fatigue heatmaps</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Duty rebalancing recommendations</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Private responses strictly concealed</li>
              </ul>
            </div>
            <button
              onClick={() => {
                setRole('commander');
                setActiveTab('commander-overview');
              }}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-semibold text-xs transition-colors"
            >
              Open Commander Portal &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
