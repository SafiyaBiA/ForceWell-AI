// Feature Engineering Layer for FORCEWELL AI
// Converts raw operational and voluntary indicators into normalized risk factors

export interface RawFeatures {
  deploymentDays: number;
  leaveGapDays: number;
  leaveUtilization: number;
  dutyHours: number;
  workloadScore: number;
  transferFrequency: number;
  trainingLoad: number;
  sleepQuality: 'Poor' | 'Fair' | 'Good' | number;
  fatigueScore: number;
  recoveryScore: number;
  wellnessScore: number;
}

export interface EngineeredFeatures {
  normalizedDeployment: number;       // 0 - 100
  leaveDeprivationFactor: number;     // 0 - 100
  dutyFatigueRatio: number;           // 0 - 100
  workloadPressure: number;           // 0 - 100
  recoveryDeficit: number;            // 0 - 100
  sleepDisruptionIndex: number;       // 0 - 100
  operationalVolatility: number;      // 0 - 100
  compositeOrganicStrain: number;     // 0 - 100
}

export function engineerFeatures(raw: RawFeatures): EngineeredFeatures {
  // 1. Normalized Deployment Duration (CRPF operational rotation standard is ~30-45 days)
  const normalizedDeployment = Math.min(100, Math.max(0, (raw.deploymentDays / 60) * 100));

  // 2. Leave Deprivation Factor (High gap + low annual utilization = high deprivation)
  const leaveGapNormalized = Math.min(100, (raw.leaveGapDays / 120) * 100);
  const utilizationDeficit = Math.max(0, 100 - raw.leaveUtilization);
  const leaveDeprivationFactor = Math.min(100, leaveGapNormalized * 0.6 + utilizationDeficit * 0.4);

  // 3. Duty Fatigue Ratio (Standard duty is 8-10 hrs; 14+ hrs creates acute strain)
  const dutyPenalty = Math.max(0, (raw.dutyHours - 8) / 8) * 100;
  const dutyFatigueRatio = Math.min(100, dutyPenalty * 0.5 + raw.fatigueScore * 0.5);

  // 4. Workload Pressure (Blend of raw workload score and training load)
  const workloadPressure = Math.min(100, raw.workloadScore * 0.7 + raw.trainingLoad * 0.3);

  // 5. Recovery Deficit (Inversion of recovery score)
  const recoveryDeficit = Math.max(0, 100 - raw.recoveryScore);

  // 6. Sleep Disruption Index
  let sleepPenalty = 20;
  if (raw.sleepQuality === 'Poor' || raw.sleepQuality === 1) sleepPenalty = 85;
  else if (raw.sleepQuality === 'Fair' || raw.sleepQuality === 2 || raw.sleepQuality === 3) sleepPenalty = 50;
  else sleepPenalty = 15;
  const sleepDisruptionIndex = Math.min(100, sleepPenalty * 0.65 + raw.fatigueScore * 0.35);

  // 7. Operational Volatility (Frequent transfers create social/family disruption)
  const operationalVolatility = Math.min(100, raw.transferFrequency * 30);

  // 8. Composite Organic Strain
  const compositeOrganicStrain = Math.min(100, (workloadPressure + recoveryDeficit + sleepDisruptionIndex) / 3);

  return {
    normalizedDeployment,
    leaveDeprivationFactor,
    dutyFatigueRatio,
    workloadPressure,
    recoveryDeficit,
    sleepDisruptionIndex,
    operationalVolatility,
    compositeOrganicStrain,
  };
}
