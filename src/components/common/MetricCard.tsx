import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: LucideIcon;
  trend?: {
    value: string;
    isPositive?: boolean;
    isNeutral?: boolean;
  };
  highlightColor?: 'blue' | 'amber' | 'emerald' | 'rose' | 'slate';
  onClick?: () => void;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  highlightColor = 'slate',
  onClick,
}) => {
  const getBorderColor = () => {
    switch (highlightColor) {
      case 'blue': return 'border-blue-500/30 hover:border-blue-500/50';
      case 'amber': return 'border-amber-500/30 hover:border-amber-500/50';
      case 'emerald': return 'border-emerald-500/30 hover:border-emerald-500/50';
      case 'rose': return 'border-rose-500/40 hover:border-rose-500/60';
      default: return 'border-slate-800 hover:border-slate-700';
    }
  };

  const getIconColor = () => {
    switch (highlightColor) {
      case 'blue': return 'text-blue-400 bg-blue-950/50';
      case 'amber': return 'text-amber-400 bg-amber-950/50';
      case 'emerald': return 'text-emerald-400 bg-emerald-950/50';
      case 'rose': return 'text-rose-400 bg-rose-950/50';
      default: return 'text-slate-400 bg-slate-800/80';
    }
  };

  return (
    <div
      onClick={onClick}
      className={`bg-slate-900/80 backdrop-blur border rounded-xl p-5 transition-all shadow-sm ${getBorderColor()} ${
        onClick ? 'cursor-pointer hover:bg-slate-850 transform hover:-translate-y-0.5' : ''
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-slate-400">{title}</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl lg:text-3xl font-bold tracking-tight text-white font-mono">{value}</span>
            {trend && (
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                  trend.isNeutral
                    ? 'bg-slate-800 text-slate-400'
                    : trend.isPositive
                    ? 'bg-emerald-950/70 text-emerald-300'
                    : 'bg-rose-950/70 text-rose-300'
                }`}
              >
                {trend.value}
              </span>
            )}
          </div>
        </div>
        {Icon && (
          <div className={`p-2.5 rounded-lg ${getIconColor()}`}>
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>
      {subtitle && (
        <p className="mt-3 text-xs text-slate-400 flex items-center gap-1.5 line-clamp-1">
          {subtitle}
        </p>
      )}
    </div>
  );
};
