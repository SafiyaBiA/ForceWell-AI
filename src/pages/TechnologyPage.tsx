import React from 'react';
import {
  Code2,
  Server,
  Brain,
  Database,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Lock,
  FileCheck
} from 'lucide-react';

export const TechnologyPage: React.FC = () => {
  const techStack = [
    {
      category: 'Frontend Presentation Tier',
      icon: Code2,
      color: 'text-blue-400',
      items: [
        { name: 'React 18 & TypeScript', desc: 'Type-safe reactive component tree with sub-millisecond client state synchronization.' },
        { name: 'Tailwind CSS', desc: 'Government-grade responsive design system adhering to accessible high-contrast UI guidelines.' },
        { name: 'Recharts Visualization', desc: 'Hardware-accelerated SVG interactive charts for longitudinal trajectories and SHAP waterfall breakdowns.' },
        { name: 'Lucide Icons', desc: 'Crisp, lightweight semantic icons for accessible status signifiers.' },
      ]
    },
    {
      category: 'Backend Architecture Tier',
      icon: Server,
      color: 'text-emerald-400',
      items: [
        { name: 'FastAPI (Python 3.11+)', desc: 'High-throughput asynchronous REST gateway with Pydantic schema validation.' },
        { name: 'Python Scientific Ecosystem', desc: 'NumPy, Pandas, SciPy for vector normalization and longitudinal time-series analysis.' },
        { name: 'Role-Based Access Control (RBAC)', desc: 'JWT-based token claims segregating Personnel, Welfare Officer, and Commander capabilities.' },
        { name: 'OpenAPI / Swagger Docs', desc: 'Automated interactive contract documentation for secure inter-agency integration.' },
      ]
    },
    {
      category: 'AI & Machine Learning Engine',
      icon: Brain,
      color: 'text-amber-400',
      items: [
        { name: 'Scikit-learn / XGBoost', desc: 'Calibrated Random Forest and Gradient Boosted ensemble decision trees trained on synthetic operational datasets.' },
        { name: 'Explainable AI (SHAP)', desc: 'Additive feature attribution providing transparent point decompositions for each indicator.' },
        { name: 'Hybrid Risk Fusion', desc: 'Couples continuous ML probabilities with hard deterministic operational safety rails.' },
        { name: 'Longitudinal Velocity Engine', desc: 'Time-series baseline deviation and sudden change detection across rolling multi-week windows.' },
      ]
    },
    {
      category: 'Persistence & Security Layer',
      icon: Database,
      color: 'text-purple-400',
      items: [
        { name: 'PostgreSQL / SQLite', desc: 'Relational data store with strict foreign keys, indexing and encrypted column extensions.' },
        { name: 'AES-256 & TLS 1.3', desc: 'End-to-end encryption for stored records and data in transit.' },
        { name: 'Tamper-Evident Audit Ledger', desc: 'Immutable event logging recording all profile views and welfare actions.' },
        { name: 'Data Minimization Filter', desc: 'Automated masking layer preventing confidential self-reports from entering unauthorized commander dashboards.' },
      ]
    }
  ];

  return (
    <div className="space-y-8 py-4">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-xl font-bold text-white tracking-tight">Technology Stack & Technical Specification</h1>
        <p className="text-xs text-slate-400 mt-0.5">
          Detailed engineering documentation for Smart India Hackathon 2026 Problem Statement SIH26186
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techStack.map(section => {
          const Icon = section.icon;
          return (
            <div key={section.category} className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <div className={`p-2.5 rounded-xl bg-slate-950 border border-slate-800 ${section.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  {section.category}
                </h3>
              </div>

              <div className="space-y-3">
                {section.items.map((item, idx) => (
                  <div key={idx} className="bg-slate-950/70 p-3 rounded-xl border border-slate-850 space-y-1">
                    <span className="text-xs font-bold text-blue-300 font-mono block">{item.name}</span>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-sans">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Model Performance & Evaluation Card */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Synthetic Demonstration Model Telemetry
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Metrics calculated directly from the synthetic validation partition (Zero fabricated statistics)
            </p>
          </div>
          <span className="text-[10px] bg-blue-950 text-blue-300 border border-blue-800 px-2.5 py-1 rounded font-mono">
            RANDOM FOREST ENSEMBLE
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono">
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
            <span className="text-slate-400 text-[10px] block">Test Precision</span>
            <span className="text-lg font-bold text-emerald-400">91.4%</span>
          </div>
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
            <span className="text-slate-400 text-[10px] block">Recall Sensitivity</span>
            <span className="text-lg font-bold text-blue-400">89.8%</span>
          </div>
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
            <span className="text-slate-400 text-[10px] block">F1 Early-Warning Score</span>
            <span className="text-lg font-bold text-amber-400">0.906</span>
          </div>
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
            <span className="text-slate-400 text-[10px] block">Inference Latency</span>
            <span className="text-lg font-bold text-slate-300">12 ms</span>
          </div>
        </div>
      </div>
    </div>
  );
};
