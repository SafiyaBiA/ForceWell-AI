import React from 'react';
import { RiskCategory } from '../../types';

interface RiskBadgeProps {
  category: RiskCategory;
  score?: number;
  size?: 'sm' | 'md' | 'lg';
  showDot?: boolean;
}

export const RiskBadge: React.FC<RiskBadgeProps> = ({
  category,
  score,
  size = 'md',
  showDot = true,
}) => {
  const getStyle = () => {
    switch (category) {
      case 'STABLE':
        return {
          bg: 'bg-emerald-950/70 border-emerald-600/50 text-emerald-300',
          dot: 'bg-emerald-400',
          label: 'Stable',
        };
      case 'WATCH':
        return {
          bg: 'bg-amber-950/70 border-amber-600/50 text-amber-300',
          dot: 'bg-amber-400',
          label: 'Watch',
        };
      case 'ELEVATED':
        return {
          bg: 'bg-orange-950/70 border-orange-600/50 text-orange-300',
          dot: 'bg-orange-400',
          label: 'Elevated',
        };
      case 'CRITICAL REVIEW':
        return {
          bg: 'bg-rose-950/80 border-rose-600/60 text-rose-300 shadow-sm shadow-rose-950/50',
          dot: 'bg-rose-400 animate-pulse',
          label: 'Critical Review',
        };
      default:
        return {
          bg: 'bg-slate-800 border-slate-700 text-slate-300',
          dot: 'bg-slate-400',
          label: category,
        };
    }
  };

  const style = getStyle();

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 gap-1.5 font-medium',
    md: 'text-xs px-2.5 py-1 gap-2 font-semibold',
    lg: 'text-sm px-3.5 py-1.5 gap-2.5 font-bold',
  };

  return (
    <span
      className={`inline-flex items-center border rounded-full uppercase tracking-wider font-mono transition-colors ${style.bg} ${sizeClasses[size]}`}
    >
      {showDot && <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />}
      <span>{style.label}</span>
      {typeof score === 'number' && (
        <span className="opacity-80 font-mono">({score})</span>
      )}
    </span>
  );
};
