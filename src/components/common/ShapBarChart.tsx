import React from 'react';
import { ShapContribution } from '../../types';

interface ShapBarChartProps {
  contributions: ShapContribution[];
  totalScore: number;
  baselineScore?: number;
}

export const ShapBarChart: React.FC<ShapBarChartProps> = ({
  contributions,
  totalScore,
  baselineScore = 24,
}) => {
  const maxImpact = Math.max(...contributions.map(c => c.impact), 22);

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-2">
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              SHAP-Style Feature Attribution
            </h4>
            <span className="text-xs px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-800/60 font-mono">
              Explainable AI
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Shows additive point contribution of each operational & voluntary indicator.
          </p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
          <span className="text-slate-400">Baseline: <strong className="text-slate-200">{baselineScore}</strong></span>
          <span className="text-slate-500">+</span>
          <span className="text-amber-400">Delta: <strong className="text-amber-300">+{totalScore - baselineScore}</strong></span>
          <span className="text-slate-500">=</span>
          <span className="text-white font-bold">Index: <span className="text-rose-400">{totalScore}</span></span>
        </div>
      </div>

      <div className="mt-4 space-y-3.5">
        {contributions.map((item, idx) => {
          const widthPercent = Math.min(100, Math.round((item.impact / maxImpact) * 100));
          return (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-slate-200">{item.factor}</span>
                  <span className="text-[11px] text-slate-400 font-mono">({item.currentValue})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-amber-300">+{item.impact} pts</span>
                </div>
              </div>

              {/* Bar track */}
              <div className="w-full bg-slate-950 rounded-full h-2.5 overflow-hidden border border-slate-800/80 flex">
                <div
                  className="bg-gradient-to-r from-blue-500 via-amber-500 to-rose-500 h-full rounded-full transition-all duration-700"
                  style={{ width: `${widthPercent}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>{item.description}</span>
                <span className="text-slate-400 uppercase tracking-wider text-[10px] bg-slate-850 px-1.5 py-0.5 rounded border border-slate-800">
                  {item.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <span className="italic">
          * Transparent decision-support decomposition for authorized human welfare review.
        </span>
        <span className="font-mono text-slate-400">Ensemble Confidence: 91.4%</span>
      </div>
    </div>
  );
};
