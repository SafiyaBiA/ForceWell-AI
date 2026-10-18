import { LongitudinalPoint } from '../types';

export interface LongitudinalInsight {
  trendDirection: 'Increasing' | 'Stable' | 'Decreasing' | 'Rapid Spike';
  baselineDeviation: number;
  isRapidIncrease: boolean;
  isPersistentElevation: boolean;
  isImproving: boolean;
  alertMessage: string | null;
  velocityPerWeek: number;
}

export function analyzeLongitudinalTrend(
  history: LongitudinalPoint[],
  currentRisk: number,
  baselineRisk: number
): LongitudinalInsight {
  if (!history || history.length === 0) {
    return {
      trendDirection: 'Stable',
      baselineDeviation: currentRisk - baselineRisk,
      isRapidIncrease: false,
      isPersistentElevation: false,
      isImproving: false,
      alertMessage: null,
      velocityPerWeek: 0,
    };
  }

  const baselineDeviation = currentRisk - baselineRisk;
  const lastWeekRisk = history[history.length - 1]?.riskScore ?? currentRisk;
  const twoWeeksAgoRisk = history[Math.max(0, history.length - 2)]?.riskScore ?? lastWeekRisk;
  const velocityPerWeek = Math.round(((currentRisk - twoWeeksAgoRisk) / 2) * 10) / 10;

  const isRapidIncrease = (currentRisk - twoWeeksAgoRisk >= 15) || (currentRisk - lastWeekRisk >= 10);
  const isImproving = (lastWeekRisk - currentRisk >= 10);

  // Check persistent elevation (last 3 entries >= 50)
  const recentElevatedCount = history.slice(-3).filter(h => h.riskScore >= 50).length;
  const isPersistentElevation = recentElevatedCount >= 2 && currentRisk >= 50;

  let trendDirection: 'Increasing' | 'Stable' | 'Decreasing' | 'Rapid Spike' = 'Stable';
  if (isRapidIncrease) {
    trendDirection = 'Rapid Spike';
  } else if (currentRisk > lastWeekRisk + 4) {
    trendDirection = 'Increasing';
  } else if (currentRisk < lastWeekRisk - 4) {
    trendDirection = 'Decreasing';
  } else {
    trendDirection = 'Stable';
  }

  let alertMessage: string | null = null;
  if (isRapidIncrease) {
    alertMessage = `Rapidly increasing welfare-risk trend detected (+${Math.round(currentRisk - twoWeeksAgoRisk)} pts over 2 weeks). Human welfare review recommended.`;
  } else if (isPersistentElevation) {
    alertMessage = `Persistent elevation above baseline detected (Current: ${currentRisk} vs Baseline: ${baselineRisk}). Sustained operational support advised.`;
  } else if (isImproving) {
    alertMessage = `Positive recovery trajectory observed (-${Math.round(lastWeekRisk - currentRisk)} pts). Welfare adjustments are showing favorable stability.`;
  } else if (baselineDeviation > 20) {
    alertMessage = `Your welfare-risk indicators have increased compared with your recent personal baseline (Baseline: ${baselineRisk} | Current: ${currentRisk}).`;
  }

  return {
    trendDirection,
    baselineDeviation,
    isRapidIncrease,
    isPersistentElevation,
    isImproving,
    alertMessage,
    velocityPerWeek,
  };
}
