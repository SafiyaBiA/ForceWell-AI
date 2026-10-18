export type Role = 'personnel' | 'officer' | 'commander';

export type RiskCategory = 'STABLE' | 'WATCH' | 'ELEVATED' | 'CRITICAL REVIEW';

export interface LongitudinalPoint {
  week: string;
  riskScore: number;
  workload: number;
  recovery: number;
  sleep: number;
  fatigue: number;
  notes?: string;
}

export interface ShapContribution {
  factor: string;
  impact: number;
  category: 'Operational' | 'Duty Schedule' | 'Recovery & Sleep' | 'Self-Report';
  currentValue: string;
  description: string;
}

export interface WellnessCheckinData {
  feeling: 'Very Good' | 'Good' | 'Neutral' | 'Low' | 'Very Low';
  sleepQuality: 'Poor' | 'Fair' | 'Good';
  fatigue: 'Low' | 'Moderate' | 'High';
  workload: 'Normal' | 'Heavy' | 'Very Heavy';
  recovery: 'Poor' | 'Fair' | 'Good';
  confidentialSupport: 'No' | 'Maybe' | 'Yes, request support';
  notes?: string;
  timestamp: string;
}

export interface Personnel {
  id: string; // e.g. "P-1024"
  name: string;
  rank: string;
  unit: string;
  unitCode: 'Alpha' | 'Bravo' | 'Charlie' | 'Delta' | 'Echo';
  deploymentDays: number;
  deploymentStatus: 'Active Field' | 'High Altitude / Border' | 'Static HQ' | 'Transit / R&R' | 'Internal Security';
  dutyHours: number; // Daily average hours
  leaveGapDays: number; // Days since last leave
  leaveUtilization: number; // % of annual leave taken
  transferFrequency: number; // Transfers in past 3 years
  trainingLoad: number; // 0 - 100
  workloadScore: number; // 0 - 100
  sleepQuality: 'Poor' | 'Fair' | 'Good';
  fatigueScore: number; // 0 - 100
  recoveryScore: number; // 0 - 100
  wellnessScore: number; // 0 - 100
  riskScore: number; // 0 - 100
  riskCategory: RiskCategory;
  riskTrend: 'Increasing' | 'Stable' | 'Decreasing' | 'Rapid Spike';
  primaryIndicators: string[];
  baselineRisk: number;
  history: LongitudinalPoint[];
  lastCheckInDate: string;
  supportRequested: boolean;
  supportRequestDetails?: {
    preference: string;
    urgent: boolean;
    timestamp: string;
    status: 'Pending' | 'Acknowledged' | 'Actioned';
  };
  confidentialWellnessResponses?: WellnessCheckinData;
}

export interface Intervention {
  id: string;
  personnelId: string;
  personnelName: string;
  unit: string;
  officerName: string;
  officerRole: string;
  date: string;
  type: 'Confidential welfare check-in' | 'Counselling referral' | 'Leave/welfare review' | 'Workload review' | 'Follow-up assessment';
  status: 'Scheduled' | 'In Progress' | 'Completed' | 'Follow-up Required';
  followUpDate: string;
  notes: string;
  outcome?: string;
}

export interface AuditLog {
  id: string;
  timestamp: string;
  userRole: string;
  officerId: string;
  action: string;
  resource: string;
  status: 'SUCCESS' | 'FLAGGED' | 'DENIED';
  ipAddress?: string;
}

export interface NotificationItem {
  id: string;
  timestamp: string;
  title: string;
  message: string;
  severity: 'info' | 'warning' | 'alert' | 'success';
  targetRole: Role | 'all';
  personnelId?: string;
  read: boolean;
}

export interface UnitWorkloadStats {
  unitCode: 'Alpha' | 'Bravo' | 'Charlie' | 'Delta' | 'Echo';
  unitName: string;
  fullTitle: string;
  personnelCount: number;
  workloadConcentration: number; // Percentage, e.g. 84%
  avgDeploymentDays: number;
  avgLeaveUtilization: number;
  stableCount: number;
  watchCount: number;
  elevatedCount: number;
  criticalCount: number;
  status: 'Balanced' | 'High Concentration' | 'Overcapacity' | 'Optimal';
  recommendation?: string;
}
