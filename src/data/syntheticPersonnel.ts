// Realistic Synthetic Demonstration Data for FORCEWELL AI
// Total: 102 Personnel records across 5 CRPF Battalions
// NOTE: ALL DATA IS SYNTHETIC FOR DEMONSTRATION OF SIH26186 REQUIREMENTS

import { Personnel } from '../types';

export const SYNTHETIC_PERSONNEL: Personnel[] = [
  {
    "id": "P-1024",
    "name": "Ct. Rajesh Kumar",
    "rank": "Constable",
    "unit": "Unit Alpha",
    "unitCode": "Alpha",
    "deploymentDays": 42,
    "deploymentStatus": "Active Field",
    "dutyHours": 13.5,
    "leaveGapDays": 82,
    "leaveUtilization": 28,
    "transferFrequency": 2,
    "trainingLoad": 75,
    "workloadScore": 88,
    "sleepQuality": "Poor",
    "fatigueScore": 78,
    "recoveryScore": 28,
    "wellnessScore": 35,
    "riskScore": 72,
    "riskCategory": "CRITICAL REVIEW",
    "riskTrend": "Increasing",
    "primaryIndicators": [
      "Workload Pressure",
      "Deployment Duration",
      "Recovery Deficit"
    ],
    "baselineRisk": 32,
    "history": [
      {
        "week": "W-1",
        "riskScore": 32,
        "workload": 45,
        "recovery": 70,
        "sleep": 75,
        "fatigue": 30,
        "notes": "Baseline tour commencement"
      },
      {
        "week": "W-2",
        "riskScore": 39,
        "workload": 55,
        "recovery": 62,
        "sleep": 65,
        "fatigue": 42,
        "notes": "Deployment extension"
      },
      {
        "week": "W-3",
        "riskScore": 47,
        "workload": 70,
        "recovery": 50,
        "sleep": 52,
        "fatigue": 58,
        "notes": "Shift extension to 12h"
      },
      {
        "week": "W-4",
        "riskScore": 61,
        "workload": 82,
        "recovery": 38,
        "sleep": 40,
        "fatigue": 68,
        "notes": "Operational surge"
      },
      {
        "week": "W-5",
        "riskScore": 72,
        "workload": 88,
        "recovery": 28,
        "sleep": 30,
        "fatigue": 78,
        "notes": "Current week - Elevated indicators"
      }
    ],
    "lastCheckInDate": "2026-09-10",
    "supportRequested": true,
    "supportRequestDetails": {
      "preference": "Confidential welfare officer consultation regarding leave rotation",
      "urgent": true,
      "timestamp": "2026-09-10 09:15",
      "status": "Pending"
    },
    "confidentialWellnessResponses": {
      "feeling": "Low",
      "sleepQuality": "Poor",
      "fatigue": "High",
      "workload": "Very Heavy",
      "recovery": "Poor",
      "confidentialSupport": "Yes, request support",
      "notes": "Extended night vigil duties over past 3 weeks with reduced rest intervals.",
      "timestamp": "2026-09-10 08:30"
    }
  },
  {
    "id": "P-1088",
    "name": "HC Amit Sharma",
    "rank": "Head Constable",
    "unit": "Unit Charlie",
    "unitCode": "Charlie",
    "deploymentDays": 38,
    "deploymentStatus": "High Altitude / Border",
    "dutyHours": 11,
    "leaveGapDays": 64,
    "leaveUtilization": 45,
    "transferFrequency": 1,
    "trainingLoad": 60,
    "workloadScore": 68,
    "sleepQuality": "Fair",
    "fatigueScore": 56,
    "recoveryScore": 48,
    "wellnessScore": 54,
    "riskScore": 44,
    "riskCategory": "WATCH",
    "riskTrend": "Increasing",
    "primaryIndicators": [
      "Deployment Duration",
      "Cold Climate Fatigue",
      "Leave Gap"
    ],
    "baselineRisk": 28,
    "history": [
      {
        "week": "W-1",
        "riskScore": 26,
        "workload": 40,
        "recovery": 75,
        "sleep": 70,
        "fatigue": 28
      },
      {
        "week": "W-2",
        "riskScore": 28,
        "workload": 45,
        "recovery": 70,
        "sleep": 68,
        "fatigue": 32
      },
      {
        "week": "W-3",
        "riskScore": 32,
        "workload": 52,
        "recovery": 62,
        "sleep": 60,
        "fatigue": 40
      },
      {
        "week": "W-4",
        "riskScore": 38,
        "workload": 62,
        "recovery": 54,
        "sleep": 55,
        "fatigue": 48
      },
      {
        "week": "W-5",
        "riskScore": 44,
        "workload": 68,
        "recovery": 48,
        "sleep": 50,
        "fatigue": 56
      }
    ],
    "lastCheckInDate": "2026-09-09",
    "supportRequested": false
  },
  {
    "id": "P-1102",
    "name": "SI Priya Singh",
    "rank": "Sub-Inspector",
    "unit": "Unit Delta",
    "unitCode": "Delta",
    "deploymentDays": 18,
    "deploymentStatus": "Internal Security",
    "dutyHours": 8.5,
    "leaveGapDays": 24,
    "leaveUtilization": 72,
    "transferFrequency": 1,
    "trainingLoad": 40,
    "workloadScore": 42,
    "sleepQuality": "Good",
    "fatigueScore": 25,
    "recoveryScore": 82,
    "wellnessScore": 85,
    "riskScore": 22,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Optimal Rest Cycle",
      "Regular Leave Utilization",
      "High Recovery"
    ],
    "baselineRisk": 20,
    "history": [
      {
        "week": "W-1",
        "riskScore": 20,
        "workload": 40,
        "recovery": 85,
        "sleep": 80,
        "fatigue": 24
      },
      {
        "week": "W-2",
        "riskScore": 22,
        "workload": 42,
        "recovery": 82,
        "sleep": 82,
        "fatigue": 26
      },
      {
        "week": "W-3",
        "riskScore": 21,
        "workload": 40,
        "recovery": 84,
        "sleep": 80,
        "fatigue": 25
      },
      {
        "week": "W-4",
        "riskScore": 23,
        "workload": 44,
        "recovery": 80,
        "sleep": 78,
        "fatigue": 28
      },
      {
        "week": "W-5",
        "riskScore": 22,
        "workload": 42,
        "recovery": 82,
        "sleep": 80,
        "fatigue": 25
      }
    ],
    "lastCheckInDate": "2026-09-10",
    "supportRequested": false
  },
  {
    "id": "P-1055",
    "name": "Ct. Vikram Rawat",
    "rank": "Constable",
    "unit": "Unit Alpha",
    "unitCode": "Alpha",
    "deploymentDays": 12,
    "deploymentStatus": "Transit / R&R",
    "dutyHours": 7,
    "leaveGapDays": 14,
    "leaveUtilization": 60,
    "transferFrequency": 1,
    "trainingLoad": 30,
    "workloadScore": 35,
    "sleepQuality": "Good",
    "fatigueScore": 32,
    "recoveryScore": 78,
    "wellnessScore": 75,
    "riskScore": 34,
    "riskCategory": "WATCH",
    "riskTrend": "Decreasing",
    "primaryIndicators": [
      "Post-Intervention Recovery",
      "Recent Rest Period",
      "Restored Sleep"
    ],
    "baselineRisk": 30,
    "history": [
      {
        "week": "W-1",
        "riskScore": 48,
        "workload": 68,
        "recovery": 50,
        "sleep": 55,
        "fatigue": 52
      },
      {
        "week": "W-2",
        "riskScore": 58,
        "workload": 76,
        "recovery": 42,
        "sleep": 45,
        "fatigue": 62
      },
      {
        "week": "W-3",
        "riskScore": 68,
        "workload": 84,
        "recovery": 32,
        "sleep": 38,
        "fatigue": 72,
        "notes": "Intervention initiated"
      },
      {
        "week": "W-4",
        "riskScore": 46,
        "workload": 50,
        "recovery": 62,
        "sleep": 65,
        "fatigue": 45,
        "notes": "Rotated to R&R wing"
      },
      {
        "week": "W-5",
        "riskScore": 34,
        "workload": 35,
        "recovery": 78,
        "sleep": 80,
        "fatigue": 32,
        "notes": "Substantial welfare stabilization"
      }
    ],
    "lastCheckInDate": "2026-09-08",
    "supportRequested": false
  },
  {
    "id": "P-1005",
    "name": "ASI Manoj Tiwari",
    "rank": "ASI",
    "unit": "Unit Alpha",
    "unitCode": "Alpha",
    "deploymentDays": 46,
    "deploymentStatus": "Active Field",
    "dutyHours": 10.5,
    "leaveGapDays": 65,
    "leaveUtilization": 45,
    "transferFrequency": 2,
    "trainingLoad": 35,
    "workloadScore": 70,
    "sleepQuality": "Fair",
    "fatigueScore": 60,
    "recoveryScore": 50,
    "wellnessScore": 50,
    "riskScore": 57,
    "riskCategory": "ELEVATED",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Physiological Balance"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 45,
        "workload": 55,
        "recovery": 62,
        "sleep": 75,
        "fatigue": 45
      },
      {
        "week": "W-2",
        "riskScore": 48,
        "workload": 60,
        "recovery": 58,
        "sleep": 70,
        "fatigue": 50
      },
      {
        "week": "W-3",
        "riskScore": 52,
        "workload": 64,
        "recovery": 54,
        "sleep": 68,
        "fatigue": 54
      },
      {
        "week": "W-4",
        "riskScore": 55,
        "workload": 68,
        "recovery": 52,
        "sleep": 65,
        "fatigue": 58
      },
      {
        "week": "W-5",
        "riskScore": 57,
        "workload": 70,
        "recovery": 50,
        "sleep": 60,
        "fatigue": 60
      }
    ],
    "lastCheckInDate": "2026-09-10",
    "supportRequested": false
  },
  {
    "id": "P-1006",
    "name": "SI Deepak Kaur",
    "rank": "Sub-Inspector",
    "unit": "Unit Bravo",
    "unitCode": "Bravo",
    "deploymentDays": 12,
    "deploymentStatus": "High Altitude / Border",
    "dutyHours": 10,
    "leaveGapDays": 17,
    "leaveUtilization": 57,
    "transferFrequency": 3,
    "trainingLoad": 32,
    "workloadScore": 37,
    "sleepQuality": "Good",
    "fatigueScore": 22,
    "recoveryScore": 72,
    "wellnessScore": 78,
    "riskScore": 20,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 22,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 25,
        "recovery": 84,
        "sleep": 75,
        "fatigue": 15
      },
      {
        "week": "W-2",
        "riskScore": 16,
        "workload": 28,
        "recovery": 80,
        "sleep": 70,
        "fatigue": 20
      },
      {
        "week": "W-3",
        "riskScore": 18,
        "workload": 31,
        "recovery": 76,
        "sleep": 68,
        "fatigue": 22
      },
      {
        "week": "W-4",
        "riskScore": 18,
        "workload": 35,
        "recovery": 74,
        "sleep": 65,
        "fatigue": 24
      },
      {
        "week": "W-5",
        "riskScore": 20,
        "workload": 37,
        "recovery": 72,
        "sleep": 80,
        "fatigue": 22
      }
    ],
    "lastCheckInDate": "2026-09-09",
    "supportRequested": false
  },
  {
    "id": "P-1007",
    "name": "Insp. Anil Rathore",
    "rank": "Inspector",
    "unit": "Unit Charlie",
    "unitCode": "Charlie",
    "deploymentDays": 29,
    "deploymentStatus": "Static HQ",
    "dutyHours": 9,
    "leaveGapDays": 34,
    "leaveUtilization": 74,
    "transferFrequency": 2,
    "trainingLoad": 49,
    "workloadScore": 54,
    "sleepQuality": "Good",
    "fatigueScore": 39,
    "recoveryScore": 89,
    "wellnessScore": 88,
    "riskScore": 25,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 24,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 39,
        "recovery": 95,
        "sleep": 75,
        "fatigue": 24
      },
      {
        "week": "W-2",
        "riskScore": 16,
        "workload": 44,
        "recovery": 92,
        "sleep": 70,
        "fatigue": 29
      },
      {
        "week": "W-3",
        "riskScore": 20,
        "workload": 48,
        "recovery": 90,
        "sleep": 68,
        "fatigue": 33
      },
      {
        "week": "W-4",
        "riskScore": 23,
        "workload": 52,
        "recovery": 88,
        "sleep": 65,
        "fatigue": 37
      },
      {
        "week": "W-5",
        "riskScore": 25,
        "workload": 54,
        "recovery": 89,
        "sleep": 80,
        "fatigue": 39
      }
    ],
    "lastCheckInDate": "2026-09-08",
    "supportRequested": false
  },
  {
    "id": "P-1008",
    "name": "Ct. Sunil Das",
    "rank": "Constable",
    "unit": "Unit Delta",
    "unitCode": "Delta",
    "deploymentDays": 21,
    "deploymentStatus": "Transit / R&R",
    "dutyHours": 8,
    "leaveGapDays": 51,
    "leaveUtilization": 56,
    "transferFrequency": 1,
    "trainingLoad": 66,
    "workloadScore": 46,
    "sleepQuality": "Good",
    "fatigueScore": 31,
    "recoveryScore": 81,
    "wellnessScore": 84,
    "riskScore": 18,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 15,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 31,
        "recovery": 93,
        "sleep": 75,
        "fatigue": 16
      },
      {
        "week": "W-2",
        "riskScore": 16,
        "workload": 36,
        "recovery": 89,
        "sleep": 70,
        "fatigue": 21
      },
      {
        "week": "W-3",
        "riskScore": 18,
        "workload": 40,
        "recovery": 85,
        "sleep": 68,
        "fatigue": 25
      },
      {
        "week": "W-4",
        "riskScore": 18,
        "workload": 44,
        "recovery": 83,
        "sleep": 65,
        "fatigue": 29
      },
      {
        "week": "W-5",
        "riskScore": 18,
        "workload": 46,
        "recovery": 81,
        "sleep": 80,
        "fatigue": 31
      }
    ],
    "lastCheckInDate": "2026-09-07",
    "supportRequested": false
  },
  {
    "id": "P-1009",
    "name": "Ct. Ramesh Koli",
    "rank": "Constable",
    "unit": "Unit Echo",
    "unitCode": "Echo",
    "deploymentDays": 33,
    "deploymentStatus": "Internal Security",
    "dutyHours": 10.5,
    "leaveGapDays": 43,
    "leaveUtilization": 61,
    "transferFrequency": 3,
    "trainingLoad": 43,
    "workloadScore": 67,
    "sleepQuality": "Fair",
    "fatigueScore": 59,
    "recoveryScore": 75,
    "wellnessScore": 65,
    "riskScore": 37,
    "riskCategory": "WATCH",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Workload Pressure",
      "Physiological Balance"
    ],
    "baselineRisk": 30,
    "history": [
      {
        "week": "W-1",
        "riskScore": 25,
        "workload": 52,
        "recovery": 87,
        "sleep": 75,
        "fatigue": 44
      },
      {
        "week": "W-2",
        "riskScore": 28,
        "workload": 57,
        "recovery": 83,
        "sleep": 70,
        "fatigue": 49
      },
      {
        "week": "W-3",
        "riskScore": 32,
        "workload": 61,
        "recovery": 79,
        "sleep": 68,
        "fatigue": 53
      },
      {
        "week": "W-4",
        "riskScore": 35,
        "workload": 65,
        "recovery": 77,
        "sleep": 65,
        "fatigue": 57
      },
      {
        "week": "W-5",
        "riskScore": 37,
        "workload": 67,
        "recovery": 75,
        "sleep": 60,
        "fatigue": 59
      }
    ],
    "lastCheckInDate": "2026-09-06",
    "supportRequested": false
  },
  {
    "id": "P-1010",
    "name": "Ct. Kavita Kumar",
    "rank": "Constable",
    "unit": "Unit Alpha",
    "unitCode": "Alpha",
    "deploymentDays": 46,
    "deploymentStatus": "Active Field",
    "dutyHours": 10.5,
    "leaveGapDays": 75,
    "leaveUtilization": 55,
    "transferFrequency": 2,
    "trainingLoad": 60,
    "workloadScore": 75,
    "sleepQuality": "Fair",
    "fatigueScore": 65,
    "recoveryScore": 55,
    "wellnessScore": 53,
    "riskScore": 58,
    "riskCategory": "ELEVATED",
    "riskTrend": "Increasing",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Physiological Balance"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 46,
        "workload": 60,
        "recovery": 67,
        "sleep": 75,
        "fatigue": 50
      },
      {
        "week": "W-2",
        "riskScore": 49,
        "workload": 65,
        "recovery": 63,
        "sleep": 70,
        "fatigue": 55
      },
      {
        "week": "W-3",
        "riskScore": 53,
        "workload": 69,
        "recovery": 59,
        "sleep": 68,
        "fatigue": 59
      },
      {
        "week": "W-4",
        "riskScore": 56,
        "workload": 73,
        "recovery": 57,
        "sleep": 65,
        "fatigue": 63
      },
      {
        "week": "W-5",
        "riskScore": 58,
        "workload": 75,
        "recovery": 55,
        "sleep": 60,
        "fatigue": 65
      }
    ],
    "lastCheckInDate": "2026-09-10",
    "supportRequested": false
  },
  {
    "id": "P-1011",
    "name": "HC Neeraj Rawat",
    "rank": "Head Constable",
    "unit": "Unit Bravo",
    "unitCode": "Bravo",
    "deploymentDays": 57,
    "deploymentStatus": "High Altitude / Border",
    "dutyHours": 15,
    "leaveGapDays": 102,
    "leaveUtilization": 27,
    "transferFrequency": 1,
    "trainingLoad": 37,
    "workloadScore": 92,
    "sleepQuality": "Poor",
    "fatigueScore": 87,
    "recoveryScore": 40,
    "wellnessScore": 29,
    "riskScore": 85,
    "riskCategory": "CRITICAL REVIEW",
    "riskTrend": "Increasing",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Recovery Deficit"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 73,
        "workload": 77,
        "recovery": 52,
        "sleep": 75,
        "fatigue": 72
      },
      {
        "week": "W-2",
        "riskScore": 76,
        "workload": 82,
        "recovery": 48,
        "sleep": 70,
        "fatigue": 77
      },
      {
        "week": "W-3",
        "riskScore": 80,
        "workload": 86,
        "recovery": 44,
        "sleep": 68,
        "fatigue": 81
      },
      {
        "week": "W-4",
        "riskScore": 83,
        "workload": 90,
        "recovery": 42,
        "sleep": 65,
        "fatigue": 85
      },
      {
        "week": "W-5",
        "riskScore": 85,
        "workload": 92,
        "recovery": 40,
        "sleep": 35,
        "fatigue": 87
      }
    ],
    "lastCheckInDate": "2026-09-09",
    "supportRequested": false
  },
  {
    "id": "P-1012",
    "name": "HC Pooja Meena",
    "rank": "Head Constable",
    "unit": "Unit Charlie",
    "unitCode": "Charlie",
    "deploymentDays": 14,
    "deploymentStatus": "Static HQ",
    "dutyHours": 9,
    "leaveGapDays": 19,
    "leaveUtilization": 59,
    "transferFrequency": 2,
    "trainingLoad": 34,
    "workloadScore": 39,
    "sleepQuality": "Good",
    "fatigueScore": 24,
    "recoveryScore": 74,
    "wellnessScore": 79,
    "riskScore": 22,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 22,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 25,
        "recovery": 86,
        "sleep": 75,
        "fatigue": 15
      },
      {
        "week": "W-2",
        "riskScore": 16,
        "workload": 29,
        "recovery": 82,
        "sleep": 70,
        "fatigue": 20
      },
      {
        "week": "W-3",
        "riskScore": 18,
        "workload": 33,
        "recovery": 78,
        "sleep": 68,
        "fatigue": 22
      },
      {
        "week": "W-4",
        "riskScore": 20,
        "workload": 37,
        "recovery": 76,
        "sleep": 65,
        "fatigue": 24
      },
      {
        "week": "W-5",
        "riskScore": 22,
        "workload": 39,
        "recovery": 74,
        "sleep": 80,
        "fatigue": 24
      }
    ],
    "lastCheckInDate": "2026-09-08",
    "supportRequested": false
  },
  {
    "id": "P-1013",
    "name": "ASI Sandeep Chauhan",
    "rank": "ASI",
    "unit": "Unit Delta",
    "unitCode": "Delta",
    "deploymentDays": 31,
    "deploymentStatus": "Transit / R&R",
    "dutyHours": 8,
    "leaveGapDays": 36,
    "leaveUtilization": 76,
    "transferFrequency": 1,
    "trainingLoad": 51,
    "workloadScore": 56,
    "sleepQuality": "Good",
    "fatigueScore": 41,
    "recoveryScore": 91,
    "wellnessScore": 90,
    "riskScore": 27,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 24,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 41,
        "recovery": 95,
        "sleep": 75,
        "fatigue": 26
      },
      {
        "week": "W-2",
        "riskScore": 18,
        "workload": 46,
        "recovery": 92,
        "sleep": 70,
        "fatigue": 31
      },
      {
        "week": "W-3",
        "riskScore": 22,
        "workload": 50,
        "recovery": 90,
        "sleep": 68,
        "fatigue": 35
      },
      {
        "week": "W-4",
        "riskScore": 25,
        "workload": 54,
        "recovery": 88,
        "sleep": 65,
        "fatigue": 39
      },
      {
        "week": "W-5",
        "riskScore": 27,
        "workload": 56,
        "recovery": 91,
        "sleep": 80,
        "fatigue": 41
      }
    ],
    "lastCheckInDate": "2026-09-07",
    "supportRequested": false
  },
  {
    "id": "P-1014",
    "name": "SI Rakesh Pandey",
    "rank": "Sub-Inspector",
    "unit": "Unit Echo",
    "unitCode": "Echo",
    "deploymentDays": 23,
    "deploymentStatus": "Internal Security",
    "dutyHours": 10,
    "leaveGapDays": 53,
    "leaveUtilization": 58,
    "transferFrequency": 3,
    "trainingLoad": 68,
    "workloadScore": 48,
    "sleepQuality": "Good",
    "fatigueScore": 33,
    "recoveryScore": 83,
    "wellnessScore": 85,
    "riskScore": 20,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 15,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 33,
        "recovery": 95,
        "sleep": 75,
        "fatigue": 18
      },
      {
        "week": "W-2",
        "riskScore": 16,
        "workload": 38,
        "recovery": 91,
        "sleep": 70,
        "fatigue": 23
      },
      {
        "week": "W-3",
        "riskScore": 18,
        "workload": 42,
        "recovery": 87,
        "sleep": 68,
        "fatigue": 27
      },
      {
        "week": "W-4",
        "riskScore": 18,
        "workload": 46,
        "recovery": 85,
        "sleep": 65,
        "fatigue": 31
      },
      {
        "week": "W-5",
        "riskScore": 20,
        "workload": 48,
        "recovery": 83,
        "sleep": 80,
        "fatigue": 33
      }
    ],
    "lastCheckInDate": "2026-09-06",
    "supportRequested": false
  },
  {
    "id": "P-1015",
    "name": "Insp. Rohit Tiwari",
    "rank": "Inspector",
    "unit": "Unit Alpha",
    "unitCode": "Alpha",
    "deploymentDays": 35,
    "deploymentStatus": "Active Field",
    "dutyHours": 10.5,
    "leaveGapDays": 45,
    "leaveUtilization": 63,
    "transferFrequency": 2,
    "trainingLoad": 45,
    "workloadScore": 51,
    "sleepQuality": "Fair",
    "fatigueScore": 43,
    "recoveryScore": 59,
    "wellnessScore": 55,
    "riskScore": 39,
    "riskCategory": "WATCH",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 30,
    "history": [
      {
        "week": "W-1",
        "riskScore": 27,
        "workload": 36,
        "recovery": 71,
        "sleep": 75,
        "fatigue": 28
      },
      {
        "week": "W-2",
        "riskScore": 30,
        "workload": 41,
        "recovery": 67,
        "sleep": 70,
        "fatigue": 33
      },
      {
        "week": "W-3",
        "riskScore": 34,
        "workload": 45,
        "recovery": 63,
        "sleep": 68,
        "fatigue": 37
      },
      {
        "week": "W-4",
        "riskScore": 37,
        "workload": 49,
        "recovery": 61,
        "sleep": 65,
        "fatigue": 41
      },
      {
        "week": "W-5",
        "riskScore": 39,
        "workload": 51,
        "recovery": 59,
        "sleep": 60,
        "fatigue": 43
      }
    ],
    "lastCheckInDate": "2026-09-10",
    "supportRequested": false
  },
  {
    "id": "P-1016",
    "name": "Ct. Dinesh Kaur",
    "rank": "Constable",
    "unit": "Unit Bravo",
    "unitCode": "Bravo",
    "deploymentDays": 48,
    "deploymentStatus": "High Altitude / Border",
    "dutyHours": 12.5,
    "leaveGapDays": 77,
    "leaveUtilization": 57,
    "transferFrequency": 1,
    "trainingLoad": 62,
    "workloadScore": 77,
    "sleepQuality": "Fair",
    "fatigueScore": 67,
    "recoveryScore": 57,
    "wellnessScore": 54,
    "riskScore": 60,
    "riskCategory": "ELEVATED",
    "riskTrend": "Increasing",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Physiological Balance"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 48,
        "workload": 62,
        "recovery": 69,
        "sleep": 75,
        "fatigue": 52
      },
      {
        "week": "W-2",
        "riskScore": 51,
        "workload": 67,
        "recovery": 65,
        "sleep": 70,
        "fatigue": 57
      },
      {
        "week": "W-3",
        "riskScore": 55,
        "workload": 71,
        "recovery": 61,
        "sleep": 68,
        "fatigue": 61
      },
      {
        "week": "W-4",
        "riskScore": 58,
        "workload": 75,
        "recovery": 59,
        "sleep": 65,
        "fatigue": 65
      },
      {
        "week": "W-5",
        "riskScore": 60,
        "workload": 77,
        "recovery": 57,
        "sleep": 60,
        "fatigue": 67
      }
    ],
    "lastCheckInDate": "2026-09-09",
    "supportRequested": false
  },
  {
    "id": "P-1017",
    "name": "Ct. Ajay Rathore",
    "rank": "Constable",
    "unit": "Unit Charlie",
    "unitCode": "Charlie",
    "deploymentDays": 59,
    "deploymentStatus": "Static HQ",
    "dutyHours": 13.5,
    "leaveGapDays": 104,
    "leaveUtilization": 29,
    "transferFrequency": 3,
    "trainingLoad": 39,
    "workloadScore": 94,
    "sleepQuality": "Poor",
    "fatigueScore": 89,
    "recoveryScore": 42,
    "wellnessScore": 30,
    "riskScore": 87,
    "riskCategory": "CRITICAL REVIEW",
    "riskTrend": "Increasing",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Recovery Deficit"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 75,
        "workload": 79,
        "recovery": 54,
        "sleep": 75,
        "fatigue": 74
      },
      {
        "week": "W-2",
        "riskScore": 78,
        "workload": 84,
        "recovery": 50,
        "sleep": 70,
        "fatigue": 79
      },
      {
        "week": "W-3",
        "riskScore": 82,
        "workload": 88,
        "recovery": 46,
        "sleep": 68,
        "fatigue": 83
      },
      {
        "week": "W-4",
        "riskScore": 85,
        "workload": 92,
        "recovery": 44,
        "sleep": 65,
        "fatigue": 87
      },
      {
        "week": "W-5",
        "riskScore": 87,
        "workload": 94,
        "recovery": 42,
        "sleep": 35,
        "fatigue": 89
      }
    ],
    "lastCheckInDate": "2026-09-08",
    "supportRequested": false
  },
  {
    "id": "P-1018",
    "name": "Ct. Vijay Das",
    "rank": "Constable",
    "unit": "Unit Delta",
    "unitCode": "Delta",
    "deploymentDays": 16,
    "deploymentStatus": "Transit / R&R",
    "dutyHours": 8,
    "leaveGapDays": 21,
    "leaveUtilization": 61,
    "transferFrequency": 1,
    "trainingLoad": 36,
    "workloadScore": 41,
    "sleepQuality": "Good",
    "fatigueScore": 26,
    "recoveryScore": 76,
    "wellnessScore": 81,
    "riskScore": 24,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 22,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 26,
        "recovery": 88,
        "sleep": 75,
        "fatigue": 15
      },
      {
        "week": "W-2",
        "riskScore": 16,
        "workload": 31,
        "recovery": 84,
        "sleep": 70,
        "fatigue": 20
      },
      {
        "week": "W-3",
        "riskScore": 19,
        "workload": 35,
        "recovery": 80,
        "sleep": 68,
        "fatigue": 22
      },
      {
        "week": "W-4",
        "riskScore": 22,
        "workload": 39,
        "recovery": 78,
        "sleep": 65,
        "fatigue": 24
      },
      {
        "week": "W-5",
        "riskScore": 24,
        "workload": 41,
        "recovery": 76,
        "sleep": 80,
        "fatigue": 26
      }
    ],
    "lastCheckInDate": "2026-09-07",
    "supportRequested": false
  },
  {
    "id": "P-1019",
    "name": "HC Arun Koli",
    "rank": "Head Constable",
    "unit": "Unit Echo",
    "unitCode": "Echo",
    "deploymentDays": 33,
    "deploymentStatus": "Internal Security",
    "dutyHours": 10,
    "leaveGapDays": 38,
    "leaveUtilization": 78,
    "transferFrequency": 3,
    "trainingLoad": 53,
    "workloadScore": 58,
    "sleepQuality": "Good",
    "fatigueScore": 43,
    "recoveryScore": 93,
    "wellnessScore": 91,
    "riskScore": 29,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 24,
    "history": [
      {
        "week": "W-1",
        "riskScore": 17,
        "workload": 43,
        "recovery": 95,
        "sleep": 75,
        "fatigue": 28
      },
      {
        "week": "W-2",
        "riskScore": 20,
        "workload": 48,
        "recovery": 92,
        "sleep": 70,
        "fatigue": 33
      },
      {
        "week": "W-3",
        "riskScore": 24,
        "workload": 52,
        "recovery": 90,
        "sleep": 68,
        "fatigue": 37
      },
      {
        "week": "W-4",
        "riskScore": 27,
        "workload": 56,
        "recovery": 88,
        "sleep": 65,
        "fatigue": 41
      },
      {
        "week": "W-5",
        "riskScore": 29,
        "workload": 58,
        "recovery": 93,
        "sleep": 80,
        "fatigue": 43
      }
    ],
    "lastCheckInDate": "2026-09-06",
    "supportRequested": false
  },
  {
    "id": "P-1020",
    "name": "HC Gopal Kumar",
    "rank": "Head Constable",
    "unit": "Unit Alpha",
    "unitCode": "Alpha",
    "deploymentDays": 25,
    "deploymentStatus": "Active Field",
    "dutyHours": 9,
    "leaveGapDays": 15,
    "leaveUtilization": 60,
    "transferFrequency": 2,
    "trainingLoad": 30,
    "workloadScore": 50,
    "sleepQuality": "Good",
    "fatigueScore": 35,
    "recoveryScore": 85,
    "wellnessScore": 86,
    "riskScore": 22,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 15,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 35,
        "recovery": 95,
        "sleep": 75,
        "fatigue": 20
      },
      {
        "week": "W-2",
        "riskScore": 16,
        "workload": 40,
        "recovery": 92,
        "sleep": 70,
        "fatigue": 25
      },
      {
        "week": "W-3",
        "riskScore": 18,
        "workload": 44,
        "recovery": 89,
        "sleep": 68,
        "fatigue": 29
      },
      {
        "week": "W-4",
        "riskScore": 20,
        "workload": 48,
        "recovery": 87,
        "sleep": 65,
        "fatigue": 33
      },
      {
        "week": "W-5",
        "riskScore": 22,
        "workload": 50,
        "recovery": 85,
        "sleep": 80,
        "fatigue": 35
      }
    ],
    "lastCheckInDate": "2026-09-10",
    "supportRequested": false
  },
  {
    "id": "P-1021",
    "name": "ASI Santosh Rawat",
    "rank": "ASI",
    "unit": "Unit Bravo",
    "unitCode": "Bravo",
    "deploymentDays": 37,
    "deploymentStatus": "High Altitude / Border",
    "dutyHours": 10.5,
    "leaveGapDays": 47,
    "leaveUtilization": 65,
    "transferFrequency": 1,
    "trainingLoad": 47,
    "workloadScore": 53,
    "sleepQuality": "Fair",
    "fatigueScore": 45,
    "recoveryScore": 61,
    "wellnessScore": 57,
    "riskScore": 41,
    "riskCategory": "WATCH",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Deployment Duration",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 44,
    "history": [
      {
        "week": "W-1",
        "riskScore": 29,
        "workload": 38,
        "recovery": 73,
        "sleep": 75,
        "fatigue": 30
      },
      {
        "week": "W-2",
        "riskScore": 32,
        "workload": 43,
        "recovery": 69,
        "sleep": 70,
        "fatigue": 35
      },
      {
        "week": "W-3",
        "riskScore": 36,
        "workload": 47,
        "recovery": 65,
        "sleep": 68,
        "fatigue": 39
      },
      {
        "week": "W-4",
        "riskScore": 39,
        "workload": 51,
        "recovery": 63,
        "sleep": 65,
        "fatigue": 43
      },
      {
        "week": "W-5",
        "riskScore": 41,
        "workload": 53,
        "recovery": 61,
        "sleep": 60,
        "fatigue": 45
      }
    ],
    "lastCheckInDate": "2026-09-09",
    "supportRequested": false
  },
  {
    "id": "P-1022",
    "name": "SI Mahesh Meena",
    "rank": "Sub-Inspector",
    "unit": "Unit Charlie",
    "unitCode": "Charlie",
    "deploymentDays": 50,
    "deploymentStatus": "Static HQ",
    "dutyHours": 12,
    "leaveGapDays": 79,
    "leaveUtilization": 59,
    "transferFrequency": 3,
    "trainingLoad": 64,
    "workloadScore": 79,
    "sleepQuality": "Fair",
    "fatigueScore": 69,
    "recoveryScore": 59,
    "wellnessScore": 55,
    "riskScore": 62,
    "riskCategory": "ELEVATED",
    "riskTrend": "Increasing",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Physiological Balance"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 50,
        "workload": 64,
        "recovery": 71,
        "sleep": 75,
        "fatigue": 54
      },
      {
        "week": "W-2",
        "riskScore": 53,
        "workload": 69,
        "recovery": 67,
        "sleep": 70,
        "fatigue": 59
      },
      {
        "week": "W-3",
        "riskScore": 57,
        "workload": 73,
        "recovery": 63,
        "sleep": 68,
        "fatigue": 63
      },
      {
        "week": "W-4",
        "riskScore": 60,
        "workload": 77,
        "recovery": 61,
        "sleep": 65,
        "fatigue": 67
      },
      {
        "week": "W-5",
        "riskScore": 62,
        "workload": 79,
        "recovery": 59,
        "sleep": 60,
        "fatigue": 69
      }
    ],
    "lastCheckInDate": "2026-09-08",
    "supportRequested": false
  },
  {
    "id": "P-1023",
    "name": "Insp. Ashok Chauhan",
    "rank": "Inspector",
    "unit": "Unit Delta",
    "unitCode": "Delta",
    "deploymentDays": 46,
    "deploymentStatus": "Transit / R&R",
    "dutyHours": 12,
    "leaveGapDays": 76,
    "leaveUtilization": 31,
    "transferFrequency": 2,
    "trainingLoad": 41,
    "workloadScore": 81,
    "sleepQuality": "Poor",
    "fatigueScore": 73,
    "recoveryScore": 26,
    "wellnessScore": 21,
    "riskScore": 71,
    "riskCategory": "CRITICAL REVIEW",
    "riskTrend": "Increasing",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Recovery Deficit"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 59,
        "workload": 66,
        "recovery": 38,
        "sleep": 75,
        "fatigue": 58
      },
      {
        "week": "W-2",
        "riskScore": 62,
        "workload": 71,
        "recovery": 34,
        "sleep": 70,
        "fatigue": 63
      },
      {
        "week": "W-3",
        "riskScore": 66,
        "workload": 75,
        "recovery": 30,
        "sleep": 68,
        "fatigue": 67
      },
      {
        "week": "W-4",
        "riskScore": 69,
        "workload": 79,
        "recovery": 28,
        "sleep": 65,
        "fatigue": 71
      },
      {
        "week": "W-5",
        "riskScore": 71,
        "workload": 81,
        "recovery": 26,
        "sleep": 35,
        "fatigue": 73
      }
    ],
    "lastCheckInDate": "2026-09-07",
    "supportRequested": false
  },
  {
    "id": "P-1024",
    "name": "Ct. Dharmendra Pandey",
    "rank": "Constable",
    "unit": "Unit Echo",
    "unitCode": "Echo",
    "deploymentDays": 18,
    "deploymentStatus": "Internal Security",
    "dutyHours": 10,
    "leaveGapDays": 23,
    "leaveUtilization": 63,
    "transferFrequency": 3,
    "trainingLoad": 38,
    "workloadScore": 43,
    "sleepQuality": "Good",
    "fatigueScore": 28,
    "recoveryScore": 78,
    "wellnessScore": 82,
    "riskScore": 26,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 22,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 28,
        "recovery": 90,
        "sleep": 75,
        "fatigue": 15
      },
      {
        "week": "W-2",
        "riskScore": 17,
        "workload": 33,
        "recovery": 86,
        "sleep": 70,
        "fatigue": 20
      },
      {
        "week": "W-3",
        "riskScore": 21,
        "workload": 37,
        "recovery": 82,
        "sleep": 68,
        "fatigue": 22
      },
      {
        "week": "W-4",
        "riskScore": 24,
        "workload": 41,
        "recovery": 80,
        "sleep": 65,
        "fatigue": 26
      },
      {
        "week": "W-5",
        "riskScore": 26,
        "workload": 43,
        "recovery": 78,
        "sleep": 80,
        "fatigue": 28
      }
    ],
    "lastCheckInDate": "2026-09-06",
    "supportRequested": false
  },
  {
    "id": "P-1025",
    "name": "Ct. Praveen Tiwari",
    "rank": "Constable",
    "unit": "Unit Alpha",
    "unitCode": "Alpha",
    "deploymentDays": 10,
    "deploymentStatus": "Active Field",
    "dutyHours": 9,
    "leaveGapDays": 40,
    "leaveUtilization": 80,
    "transferFrequency": 2,
    "trainingLoad": 55,
    "workloadScore": 35,
    "sleepQuality": "Good",
    "fatigueScore": 20,
    "recoveryScore": 70,
    "wellnessScore": 77,
    "riskScore": 19,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 15,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 25,
        "recovery": 82,
        "sleep": 75,
        "fatigue": 15
      },
      {
        "week": "W-2",
        "riskScore": 16,
        "workload": 28,
        "recovery": 78,
        "sleep": 70,
        "fatigue": 20
      },
      {
        "week": "W-3",
        "riskScore": 18,
        "workload": 30,
        "recovery": 74,
        "sleep": 68,
        "fatigue": 22
      },
      {
        "week": "W-4",
        "riskScore": 18,
        "workload": 33,
        "recovery": 72,
        "sleep": 65,
        "fatigue": 24
      },
      {
        "week": "W-5",
        "riskScore": 19,
        "workload": 35,
        "recovery": 70,
        "sleep": 80,
        "fatigue": 20
      }
    ],
    "lastCheckInDate": "2026-09-10",
    "supportRequested": false
  },
  {
    "id": "P-1026",
    "name": "Ct. Sachin Kaur",
    "rank": "Constable",
    "unit": "Unit Bravo",
    "unitCode": "Bravo",
    "deploymentDays": 37,
    "deploymentStatus": "High Altitude / Border",
    "dutyHours": 9.5,
    "leaveGapDays": 57,
    "leaveUtilization": 50,
    "transferFrequency": 1,
    "trainingLoad": 32,
    "workloadScore": 56,
    "sleepQuality": "Fair",
    "fatigueScore": 48,
    "recoveryScore": 64,
    "wellnessScore": 58,
    "riskScore": 42,
    "riskCategory": "WATCH",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Deployment Duration",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 30,
        "workload": 41,
        "recovery": 76,
        "sleep": 75,
        "fatigue": 33
      },
      {
        "week": "W-2",
        "riskScore": 33,
        "workload": 46,
        "recovery": 72,
        "sleep": 70,
        "fatigue": 38
      },
      {
        "week": "W-3",
        "riskScore": 37,
        "workload": 50,
        "recovery": 68,
        "sleep": 68,
        "fatigue": 42
      },
      {
        "week": "W-4",
        "riskScore": 40,
        "workload": 54,
        "recovery": 66,
        "sleep": 65,
        "fatigue": 46
      },
      {
        "week": "W-5",
        "riskScore": 42,
        "workload": 56,
        "recovery": 64,
        "sleep": 60,
        "fatigue": 48
      }
    ],
    "lastCheckInDate": "2026-09-09",
    "supportRequested": false
  },
  {
    "id": "P-1027",
    "name": "HC Naveen Rathore",
    "rank": "Head Constable",
    "unit": "Unit Charlie",
    "unitCode": "Charlie",
    "deploymentDays": 39,
    "deploymentStatus": "Static HQ",
    "dutyHours": 10.5,
    "leaveGapDays": 49,
    "leaveUtilization": 67,
    "transferFrequency": 3,
    "trainingLoad": 49,
    "workloadScore": 55,
    "sleepQuality": "Fair",
    "fatigueScore": 47,
    "recoveryScore": 63,
    "wellnessScore": 58,
    "riskScore": 43,
    "riskCategory": "WATCH",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Deployment Duration",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 44,
    "history": [
      {
        "week": "W-1",
        "riskScore": 31,
        "workload": 40,
        "recovery": 75,
        "sleep": 75,
        "fatigue": 32
      },
      {
        "week": "W-2",
        "riskScore": 34,
        "workload": 45,
        "recovery": 71,
        "sleep": 70,
        "fatigue": 37
      },
      {
        "week": "W-3",
        "riskScore": 38,
        "workload": 49,
        "recovery": 67,
        "sleep": 68,
        "fatigue": 41
      },
      {
        "week": "W-4",
        "riskScore": 41,
        "workload": 53,
        "recovery": 65,
        "sleep": 65,
        "fatigue": 45
      },
      {
        "week": "W-5",
        "riskScore": 43,
        "workload": 55,
        "recovery": 63,
        "sleep": 60,
        "fatigue": 47
      }
    ],
    "lastCheckInDate": "2026-09-08",
    "supportRequested": false
  },
  {
    "id": "P-1028",
    "name": "HC Mukesh Das",
    "rank": "Head Constable",
    "unit": "Unit Delta",
    "unitCode": "Delta",
    "deploymentDays": 37,
    "deploymentStatus": "Transit / R&R",
    "dutyHours": 11.5,
    "leaveGapDays": 56,
    "leaveUtilization": 36,
    "transferFrequency": 2,
    "trainingLoad": 66,
    "workloadScore": 81,
    "sleepQuality": "Fair",
    "fatigueScore": 71,
    "recoveryScore": 61,
    "wellnessScore": 57,
    "riskScore": 64,
    "riskCategory": "ELEVATED",
    "riskTrend": "Increasing",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Physiological Balance"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 52,
        "workload": 66,
        "recovery": 73,
        "sleep": 75,
        "fatigue": 56
      },
      {
        "week": "W-2",
        "riskScore": 55,
        "workload": 71,
        "recovery": 69,
        "sleep": 70,
        "fatigue": 61
      },
      {
        "week": "W-3",
        "riskScore": 59,
        "workload": 75,
        "recovery": 65,
        "sleep": 68,
        "fatigue": 65
      },
      {
        "week": "W-4",
        "riskScore": 62,
        "workload": 79,
        "recovery": 63,
        "sleep": 65,
        "fatigue": 69
      },
      {
        "week": "W-5",
        "riskScore": 64,
        "workload": 81,
        "recovery": 61,
        "sleep": 60,
        "fatigue": 71
      }
    ],
    "lastCheckInDate": "2026-09-07",
    "supportRequested": false
  },
  {
    "id": "P-1029",
    "name": "ASI Harish Koli",
    "rank": "ASI",
    "unit": "Unit Echo",
    "unitCode": "Echo",
    "deploymentDays": 48,
    "deploymentStatus": "Internal Security",
    "dutyHours": 14,
    "leaveGapDays": 78,
    "leaveUtilization": 33,
    "transferFrequency": 1,
    "trainingLoad": 43,
    "workloadScore": 83,
    "sleepQuality": "Poor",
    "fatigueScore": 75,
    "recoveryScore": 28,
    "wellnessScore": 22,
    "riskScore": 73,
    "riskCategory": "CRITICAL REVIEW",
    "riskTrend": "Increasing",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Recovery Deficit"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 61,
        "workload": 68,
        "recovery": 40,
        "sleep": 75,
        "fatigue": 60
      },
      {
        "week": "W-2",
        "riskScore": 64,
        "workload": 73,
        "recovery": 36,
        "sleep": 70,
        "fatigue": 65
      },
      {
        "week": "W-3",
        "riskScore": 68,
        "workload": 77,
        "recovery": 32,
        "sleep": 68,
        "fatigue": 69
      },
      {
        "week": "W-4",
        "riskScore": 71,
        "workload": 81,
        "recovery": 30,
        "sleep": 65,
        "fatigue": 73
      },
      {
        "week": "W-5",
        "riskScore": 73,
        "workload": 83,
        "recovery": 28,
        "sleep": 35,
        "fatigue": 75
      }
    ],
    "lastCheckInDate": "2026-09-06",
    "supportRequested": true
  },
  {
    "id": "P-1030",
    "name": "SI Balwan Kumar",
    "rank": "Sub-Inspector",
    "unit": "Unit Alpha",
    "unitCode": "Alpha",
    "deploymentDays": 20,
    "deploymentStatus": "Active Field",
    "dutyHours": 9,
    "leaveGapDays": 25,
    "leaveUtilization": 65,
    "transferFrequency": 2,
    "trainingLoad": 40,
    "workloadScore": 45,
    "sleepQuality": "Good",
    "fatigueScore": 30,
    "recoveryScore": 80,
    "wellnessScore": 83,
    "riskScore": 28,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 22,
    "history": [
      {
        "week": "W-1",
        "riskScore": 16,
        "workload": 30,
        "recovery": 92,
        "sleep": 75,
        "fatigue": 15
      },
      {
        "week": "W-2",
        "riskScore": 19,
        "workload": 35,
        "recovery": 88,
        "sleep": 70,
        "fatigue": 20
      },
      {
        "week": "W-3",
        "riskScore": 23,
        "workload": 39,
        "recovery": 84,
        "sleep": 68,
        "fatigue": 24
      },
      {
        "week": "W-4",
        "riskScore": 26,
        "workload": 43,
        "recovery": 82,
        "sleep": 65,
        "fatigue": 28
      },
      {
        "week": "W-5",
        "riskScore": 28,
        "workload": 45,
        "recovery": 80,
        "sleep": 80,
        "fatigue": 30
      }
    ],
    "lastCheckInDate": "2026-09-10",
    "supportRequested": false
  },
  {
    "id": "P-1031",
    "name": "Insp. Kuldeep Rawat",
    "rank": "Inspector",
    "unit": "Unit Bravo",
    "unitCode": "Bravo",
    "deploymentDays": 12,
    "deploymentStatus": "High Altitude / Border",
    "dutyHours": 8,
    "leaveGapDays": 42,
    "leaveUtilization": 82,
    "transferFrequency": 1,
    "trainingLoad": 57,
    "workloadScore": 37,
    "sleepQuality": "Good",
    "fatigueScore": 22,
    "recoveryScore": 72,
    "wellnessScore": 78,
    "riskScore": 21,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 15,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 25,
        "recovery": 84,
        "sleep": 75,
        "fatigue": 15
      },
      {
        "week": "W-2",
        "riskScore": 16,
        "workload": 28,
        "recovery": 80,
        "sleep": 70,
        "fatigue": 20
      },
      {
        "week": "W-3",
        "riskScore": 18,
        "workload": 31,
        "recovery": 76,
        "sleep": 68,
        "fatigue": 22
      },
      {
        "week": "W-4",
        "riskScore": 19,
        "workload": 35,
        "recovery": 74,
        "sleep": 65,
        "fatigue": 24
      },
      {
        "week": "W-5",
        "riskScore": 21,
        "workload": 37,
        "recovery": 72,
        "sleep": 80,
        "fatigue": 22
      }
    ],
    "lastCheckInDate": "2026-09-09",
    "supportRequested": false
  },
  {
    "id": "P-1032",
    "name": "Ct. Gurpreet Meena",
    "rank": "Constable",
    "unit": "Unit Charlie",
    "unitCode": "Charlie",
    "deploymentDays": 39,
    "deploymentStatus": "Static HQ",
    "dutyHours": 9.5,
    "leaveGapDays": 59,
    "leaveUtilization": 52,
    "transferFrequency": 3,
    "trainingLoad": 34,
    "workloadScore": 58,
    "sleepQuality": "Fair",
    "fatigueScore": 50,
    "recoveryScore": 66,
    "wellnessScore": 60,
    "riskScore": 44,
    "riskCategory": "WATCH",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Deployment Duration",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 32,
        "workload": 43,
        "recovery": 78,
        "sleep": 75,
        "fatigue": 35
      },
      {
        "week": "W-2",
        "riskScore": 35,
        "workload": 48,
        "recovery": 74,
        "sleep": 70,
        "fatigue": 40
      },
      {
        "week": "W-3",
        "riskScore": 39,
        "workload": 52,
        "recovery": 70,
        "sleep": 68,
        "fatigue": 44
      },
      {
        "week": "W-4",
        "riskScore": 42,
        "workload": 56,
        "recovery": 68,
        "sleep": 65,
        "fatigue": 48
      },
      {
        "week": "W-5",
        "riskScore": 44,
        "workload": 58,
        "recovery": 66,
        "sleep": 60,
        "fatigue": 50
      }
    ],
    "lastCheckInDate": "2026-09-08",
    "supportRequested": false
  },
  {
    "id": "P-1033",
    "name": "Ct. Jaswant Chauhan",
    "rank": "Constable",
    "unit": "Unit Delta",
    "unitCode": "Delta",
    "deploymentDays": 26,
    "deploymentStatus": "Transit / R&R",
    "dutyHours": 10.5,
    "leaveGapDays": 51,
    "leaveUtilization": 49,
    "transferFrequency": 2,
    "trainingLoad": 51,
    "workloadScore": 57,
    "sleepQuality": "Fair",
    "fatigueScore": 49,
    "recoveryScore": 65,
    "wellnessScore": 59,
    "riskScore": 45,
    "riskCategory": "WATCH",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 44,
    "history": [
      {
        "week": "W-1",
        "riskScore": 33,
        "workload": 42,
        "recovery": 77,
        "sleep": 75,
        "fatigue": 34
      },
      {
        "week": "W-2",
        "riskScore": 36,
        "workload": 47,
        "recovery": 73,
        "sleep": 70,
        "fatigue": 39
      },
      {
        "week": "W-3",
        "riskScore": 40,
        "workload": 51,
        "recovery": 69,
        "sleep": 68,
        "fatigue": 43
      },
      {
        "week": "W-4",
        "riskScore": 43,
        "workload": 55,
        "recovery": 67,
        "sleep": 65,
        "fatigue": 47
      },
      {
        "week": "W-5",
        "riskScore": 45,
        "workload": 57,
        "recovery": 65,
        "sleep": 60,
        "fatigue": 49
      }
    ],
    "lastCheckInDate": "2026-09-07",
    "supportRequested": false
  },
  {
    "id": "P-1034",
    "name": "Ct. Manpreet Pandey",
    "rank": "Constable",
    "unit": "Unit Echo",
    "unitCode": "Echo",
    "deploymentDays": 39,
    "deploymentStatus": "Internal Security",
    "dutyHours": 11,
    "leaveGapDays": 58,
    "leaveUtilization": 38,
    "transferFrequency": 1,
    "trainingLoad": 68,
    "workloadScore": 83,
    "sleepQuality": "Fair",
    "fatigueScore": 73,
    "recoveryScore": 63,
    "wellnessScore": 58,
    "riskScore": 66,
    "riskCategory": "ELEVATED",
    "riskTrend": "Increasing",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Physiological Balance"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 54,
        "workload": 68,
        "recovery": 75,
        "sleep": 75,
        "fatigue": 58
      },
      {
        "week": "W-2",
        "riskScore": 57,
        "workload": 73,
        "recovery": 71,
        "sleep": 70,
        "fatigue": 63
      },
      {
        "week": "W-3",
        "riskScore": 61,
        "workload": 77,
        "recovery": 67,
        "sleep": 68,
        "fatigue": 67
      },
      {
        "week": "W-4",
        "riskScore": 64,
        "workload": 81,
        "recovery": 65,
        "sleep": 65,
        "fatigue": 71
      },
      {
        "week": "W-5",
        "riskScore": 66,
        "workload": 83,
        "recovery": 63,
        "sleep": 60,
        "fatigue": 73
      }
    ],
    "lastCheckInDate": "2026-09-06",
    "supportRequested": false
  },
  {
    "id": "P-1035",
    "name": "HC Surinder Tiwari",
    "rank": "Head Constable",
    "unit": "Unit Alpha",
    "unitCode": "Alpha",
    "deploymentDays": 50,
    "deploymentStatus": "Active Field",
    "dutyHours": 12.5,
    "leaveGapDays": 80,
    "leaveUtilization": 35,
    "transferFrequency": 3,
    "trainingLoad": 45,
    "workloadScore": 85,
    "sleepQuality": "Poor",
    "fatigueScore": 77,
    "recoveryScore": 30,
    "wellnessScore": 23,
    "riskScore": 75,
    "riskCategory": "CRITICAL REVIEW",
    "riskTrend": "Increasing",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Recovery Deficit"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 63,
        "workload": 70,
        "recovery": 42,
        "sleep": 75,
        "fatigue": 62
      },
      {
        "week": "W-2",
        "riskScore": 66,
        "workload": 75,
        "recovery": 38,
        "sleep": 70,
        "fatigue": 67
      },
      {
        "week": "W-3",
        "riskScore": 70,
        "workload": 79,
        "recovery": 34,
        "sleep": 68,
        "fatigue": 71
      },
      {
        "week": "W-4",
        "riskScore": 73,
        "workload": 83,
        "recovery": 32,
        "sleep": 65,
        "fatigue": 75
      },
      {
        "week": "W-5",
        "riskScore": 75,
        "workload": 85,
        "recovery": 30,
        "sleep": 35,
        "fatigue": 77
      }
    ],
    "lastCheckInDate": "2026-09-10",
    "supportRequested": true
  },
  {
    "id": "P-1036",
    "name": "HC Joginder Kaur",
    "rank": "Head Constable",
    "unit": "Unit Bravo",
    "unitCode": "Bravo",
    "deploymentDays": 22,
    "deploymentStatus": "High Altitude / Border",
    "dutyHours": 8,
    "leaveGapDays": 27,
    "leaveUtilization": 67,
    "transferFrequency": 1,
    "trainingLoad": 42,
    "workloadScore": 47,
    "sleepQuality": "Good",
    "fatigueScore": 32,
    "recoveryScore": 82,
    "wellnessScore": 84,
    "riskScore": 18,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 15,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 32,
        "recovery": 94,
        "sleep": 75,
        "fatigue": 17
      },
      {
        "week": "W-2",
        "riskScore": 16,
        "workload": 37,
        "recovery": 90,
        "sleep": 70,
        "fatigue": 22
      },
      {
        "week": "W-3",
        "riskScore": 18,
        "workload": 41,
        "recovery": 86,
        "sleep": 68,
        "fatigue": 26
      },
      {
        "week": "W-4",
        "riskScore": 18,
        "workload": 45,
        "recovery": 84,
        "sleep": 65,
        "fatigue": 30
      },
      {
        "week": "W-5",
        "riskScore": 18,
        "workload": 47,
        "recovery": 82,
        "sleep": 80,
        "fatigue": 32
      }
    ],
    "lastCheckInDate": "2026-09-09",
    "supportRequested": false
  },
  {
    "id": "P-1037",
    "name": "ASI Devendra Rathore",
    "rank": "ASI",
    "unit": "Unit Charlie",
    "unitCode": "Charlie",
    "deploymentDays": 14,
    "deploymentStatus": "Static HQ",
    "dutyHours": 10,
    "leaveGapDays": 44,
    "leaveUtilization": 84,
    "transferFrequency": 3,
    "trainingLoad": 59,
    "workloadScore": 39,
    "sleepQuality": "Good",
    "fatigueScore": 24,
    "recoveryScore": 74,
    "wellnessScore": 79,
    "riskScore": 23,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 26,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 25,
        "recovery": 86,
        "sleep": 75,
        "fatigue": 15
      },
      {
        "week": "W-2",
        "riskScore": 16,
        "workload": 29,
        "recovery": 82,
        "sleep": 70,
        "fatigue": 20
      },
      {
        "week": "W-3",
        "riskScore": 18,
        "workload": 33,
        "recovery": 78,
        "sleep": 68,
        "fatigue": 22
      },
      {
        "week": "W-4",
        "riskScore": 21,
        "workload": 37,
        "recovery": 76,
        "sleep": 65,
        "fatigue": 24
      },
      {
        "week": "W-5",
        "riskScore": 23,
        "workload": 39,
        "recovery": 74,
        "sleep": 80,
        "fatigue": 24
      }
    ],
    "lastCheckInDate": "2026-09-08",
    "supportRequested": false
  },
  {
    "id": "P-1038",
    "name": "SI Kamal Das",
    "rank": "Sub-Inspector",
    "unit": "Unit Delta",
    "unitCode": "Delta",
    "deploymentDays": 26,
    "deploymentStatus": "Transit / R&R",
    "dutyHours": 9.5,
    "leaveGapDays": 61,
    "leaveUtilization": 54,
    "transferFrequency": 2,
    "trainingLoad": 36,
    "workloadScore": 60,
    "sleepQuality": "Fair",
    "fatigueScore": 52,
    "recoveryScore": 68,
    "wellnessScore": 61,
    "riskScore": 46,
    "riskCategory": "WATCH",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 34,
        "workload": 45,
        "recovery": 80,
        "sleep": 75,
        "fatigue": 37
      },
      {
        "week": "W-2",
        "riskScore": 37,
        "workload": 50,
        "recovery": 76,
        "sleep": 70,
        "fatigue": 42
      },
      {
        "week": "W-3",
        "riskScore": 41,
        "workload": 54,
        "recovery": 72,
        "sleep": 68,
        "fatigue": 46
      },
      {
        "week": "W-4",
        "riskScore": 44,
        "workload": 58,
        "recovery": 70,
        "sleep": 65,
        "fatigue": 50
      },
      {
        "week": "W-5",
        "riskScore": 46,
        "workload": 60,
        "recovery": 68,
        "sleep": 60,
        "fatigue": 52
      }
    ],
    "lastCheckInDate": "2026-09-07",
    "supportRequested": false
  },
  {
    "id": "P-1039",
    "name": "Insp. Brijesh Koli",
    "rank": "Inspector",
    "unit": "Unit Echo",
    "unitCode": "Echo",
    "deploymentDays": 28,
    "deploymentStatus": "Internal Security",
    "dutyHours": 10.5,
    "leaveGapDays": 53,
    "leaveUtilization": 51,
    "transferFrequency": 1,
    "trainingLoad": 53,
    "workloadScore": 59,
    "sleepQuality": "Fair",
    "fatigueScore": 51,
    "recoveryScore": 67,
    "wellnessScore": 60,
    "riskScore": 47,
    "riskCategory": "WATCH",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 44,
    "history": [
      {
        "week": "W-1",
        "riskScore": 35,
        "workload": 44,
        "recovery": 79,
        "sleep": 75,
        "fatigue": 36
      },
      {
        "week": "W-2",
        "riskScore": 38,
        "workload": 49,
        "recovery": 75,
        "sleep": 70,
        "fatigue": 41
      },
      {
        "week": "W-3",
        "riskScore": 42,
        "workload": 53,
        "recovery": 71,
        "sleep": 68,
        "fatigue": 45
      },
      {
        "week": "W-4",
        "riskScore": 45,
        "workload": 57,
        "recovery": 69,
        "sleep": 65,
        "fatigue": 49
      },
      {
        "week": "W-5",
        "riskScore": 47,
        "workload": 59,
        "recovery": 67,
        "sleep": 60,
        "fatigue": 51
      }
    ],
    "lastCheckInDate": "2026-09-06",
    "supportRequested": false
  },
  {
    "id": "P-1040",
    "name": "Ct. Rajesh Kumar",
    "rank": "Constable",
    "unit": "Unit Alpha",
    "unitCode": "Alpha",
    "deploymentDays": 41,
    "deploymentStatus": "Active Field",
    "dutyHours": 10.5,
    "leaveGapDays": 60,
    "leaveUtilization": 40,
    "transferFrequency": 3,
    "trainingLoad": 30,
    "workloadScore": 65,
    "sleepQuality": "Fair",
    "fatigueScore": 55,
    "recoveryScore": 45,
    "wellnessScore": 47,
    "riskScore": 52,
    "riskCategory": "ELEVATED",
    "riskTrend": "Increasing",
    "primaryIndicators": [
      "Deployment Duration",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 40,
        "workload": 50,
        "recovery": 57,
        "sleep": 75,
        "fatigue": 40
      },
      {
        "week": "W-2",
        "riskScore": 43,
        "workload": 55,
        "recovery": 53,
        "sleep": 70,
        "fatigue": 45
      },
      {
        "week": "W-3",
        "riskScore": 47,
        "workload": 59,
        "recovery": 49,
        "sleep": 68,
        "fatigue": 49
      },
      {
        "week": "W-4",
        "riskScore": 50,
        "workload": 63,
        "recovery": 47,
        "sleep": 65,
        "fatigue": 53
      },
      {
        "week": "W-5",
        "riskScore": 52,
        "workload": 65,
        "recovery": 45,
        "sleep": 60,
        "fatigue": 55
      }
    ],
    "lastCheckInDate": "2026-09-10",
    "supportRequested": false
  },
  {
    "id": "P-1041",
    "name": "Ct. Amit Rawat",
    "rank": "Constable",
    "unit": "Unit Bravo",
    "unitCode": "Bravo",
    "deploymentDays": 52,
    "deploymentStatus": "High Altitude / Border",
    "dutyHours": 14.5,
    "leaveGapDays": 82,
    "leaveUtilization": 37,
    "transferFrequency": 2,
    "trainingLoad": 47,
    "workloadScore": 87,
    "sleepQuality": "Poor",
    "fatigueScore": 79,
    "recoveryScore": 32,
    "wellnessScore": 24,
    "riskScore": 77,
    "riskCategory": "CRITICAL REVIEW",
    "riskTrend": "Increasing",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Recovery Deficit"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 65,
        "workload": 72,
        "recovery": 44,
        "sleep": 75,
        "fatigue": 64
      },
      {
        "week": "W-2",
        "riskScore": 68,
        "workload": 77,
        "recovery": 40,
        "sleep": 70,
        "fatigue": 69
      },
      {
        "week": "W-3",
        "riskScore": 72,
        "workload": 81,
        "recovery": 36,
        "sleep": 68,
        "fatigue": 73
      },
      {
        "week": "W-4",
        "riskScore": 75,
        "workload": 85,
        "recovery": 34,
        "sleep": 65,
        "fatigue": 77
      },
      {
        "week": "W-5",
        "riskScore": 77,
        "workload": 87,
        "recovery": 32,
        "sleep": 35,
        "fatigue": 79
      }
    ],
    "lastCheckInDate": "2026-09-09",
    "supportRequested": true
  },
  {
    "id": "P-1042",
    "name": "Ct. Priya Meena",
    "rank": "Constable",
    "unit": "Unit Charlie",
    "unitCode": "Charlie",
    "deploymentDays": 24,
    "deploymentStatus": "Static HQ",
    "dutyHours": 10,
    "leaveGapDays": 29,
    "leaveUtilization": 69,
    "transferFrequency": 3,
    "trainingLoad": 44,
    "workloadScore": 49,
    "sleepQuality": "Good",
    "fatigueScore": 34,
    "recoveryScore": 84,
    "wellnessScore": 85,
    "riskScore": 20,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 24,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 34,
        "recovery": 95,
        "sleep": 75,
        "fatigue": 19
      },
      {
        "week": "W-2",
        "riskScore": 16,
        "workload": 39,
        "recovery": 92,
        "sleep": 70,
        "fatigue": 24
      },
      {
        "week": "W-3",
        "riskScore": 18,
        "workload": 43,
        "recovery": 88,
        "sleep": 68,
        "fatigue": 28
      },
      {
        "week": "W-4",
        "riskScore": 18,
        "workload": 47,
        "recovery": 86,
        "sleep": 65,
        "fatigue": 32
      },
      {
        "week": "W-5",
        "riskScore": 20,
        "workload": 49,
        "recovery": 84,
        "sleep": 80,
        "fatigue": 34
      }
    ],
    "lastCheckInDate": "2026-09-08",
    "supportRequested": false
  },
  {
    "id": "P-1043",
    "name": "HC Vikram Chauhan",
    "rank": "Head Constable",
    "unit": "Unit Delta",
    "unitCode": "Delta",
    "deploymentDays": 16,
    "deploymentStatus": "Transit / R&R",
    "dutyHours": 9,
    "leaveGapDays": 46,
    "leaveUtilization": 86,
    "transferFrequency": 2,
    "trainingLoad": 61,
    "workloadScore": 41,
    "sleepQuality": "Good",
    "fatigueScore": 26,
    "recoveryScore": 76,
    "wellnessScore": 81,
    "riskScore": 25,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 26,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 26,
        "recovery": 88,
        "sleep": 75,
        "fatigue": 15
      },
      {
        "week": "W-2",
        "riskScore": 16,
        "workload": 31,
        "recovery": 84,
        "sleep": 70,
        "fatigue": 20
      },
      {
        "week": "W-3",
        "riskScore": 20,
        "workload": 35,
        "recovery": 80,
        "sleep": 68,
        "fatigue": 22
      },
      {
        "week": "W-4",
        "riskScore": 23,
        "workload": 39,
        "recovery": 78,
        "sleep": 65,
        "fatigue": 24
      },
      {
        "week": "W-5",
        "riskScore": 25,
        "workload": 41,
        "recovery": 76,
        "sleep": 80,
        "fatigue": 26
      }
    ],
    "lastCheckInDate": "2026-09-07",
    "supportRequested": false
  },
  {
    "id": "P-1044",
    "name": "HC Suresh Pandey",
    "rank": "Head Constable",
    "unit": "Unit Echo",
    "unitCode": "Echo",
    "deploymentDays": 28,
    "deploymentStatus": "Internal Security",
    "dutyHours": 9.5,
    "leaveGapDays": 63,
    "leaveUtilization": 56,
    "transferFrequency": 1,
    "trainingLoad": 38,
    "workloadScore": 62,
    "sleepQuality": "Fair",
    "fatigueScore": 54,
    "recoveryScore": 70,
    "wellnessScore": 62,
    "riskScore": 32,
    "riskCategory": "WATCH",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 30,
    "history": [
      {
        "week": "W-1",
        "riskScore": 20,
        "workload": 47,
        "recovery": 82,
        "sleep": 75,
        "fatigue": 39
      },
      {
        "week": "W-2",
        "riskScore": 23,
        "workload": 52,
        "recovery": 78,
        "sleep": 70,
        "fatigue": 44
      },
      {
        "week": "W-3",
        "riskScore": 27,
        "workload": 56,
        "recovery": 74,
        "sleep": 68,
        "fatigue": 48
      },
      {
        "week": "W-4",
        "riskScore": 30,
        "workload": 60,
        "recovery": 72,
        "sleep": 65,
        "fatigue": 52
      },
      {
        "week": "W-5",
        "riskScore": 32,
        "workload": 62,
        "recovery": 70,
        "sleep": 60,
        "fatigue": 54
      }
    ],
    "lastCheckInDate": "2026-09-06",
    "supportRequested": false
  },
  {
    "id": "P-1045",
    "name": "ASI Manoj Tiwari",
    "rank": "ASI",
    "unit": "Unit Alpha",
    "unitCode": "Alpha",
    "deploymentDays": 30,
    "deploymentStatus": "Active Field",
    "dutyHours": 10.5,
    "leaveGapDays": 55,
    "leaveUtilization": 53,
    "transferFrequency": 3,
    "trainingLoad": 55,
    "workloadScore": 61,
    "sleepQuality": "Fair",
    "fatigueScore": 53,
    "recoveryScore": 69,
    "wellnessScore": 61,
    "riskScore": 33,
    "riskCategory": "WATCH",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 28,
    "history": [
      {
        "week": "W-1",
        "riskScore": 21,
        "workload": 46,
        "recovery": 81,
        "sleep": 75,
        "fatigue": 38
      },
      {
        "week": "W-2",
        "riskScore": 24,
        "workload": 51,
        "recovery": 77,
        "sleep": 70,
        "fatigue": 43
      },
      {
        "week": "W-3",
        "riskScore": 28,
        "workload": 55,
        "recovery": 73,
        "sleep": 68,
        "fatigue": 47
      },
      {
        "week": "W-4",
        "riskScore": 31,
        "workload": 59,
        "recovery": 71,
        "sleep": 65,
        "fatigue": 51
      },
      {
        "week": "W-5",
        "riskScore": 33,
        "workload": 61,
        "recovery": 69,
        "sleep": 60,
        "fatigue": 53
      }
    ],
    "lastCheckInDate": "2026-09-10",
    "supportRequested": false
  },
  {
    "id": "P-1046",
    "name": "SI Deepak Kaur",
    "rank": "Sub-Inspector",
    "unit": "Unit Bravo",
    "unitCode": "Bravo",
    "deploymentDays": 43,
    "deploymentStatus": "High Altitude / Border",
    "dutyHours": 12.5,
    "leaveGapDays": 62,
    "leaveUtilization": 42,
    "transferFrequency": 2,
    "trainingLoad": 32,
    "workloadScore": 67,
    "sleepQuality": "Fair",
    "fatigueScore": 57,
    "recoveryScore": 47,
    "wellnessScore": 48,
    "riskScore": 54,
    "riskCategory": "ELEVATED",
    "riskTrend": "Increasing",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Physiological Balance"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 42,
        "workload": 52,
        "recovery": 59,
        "sleep": 75,
        "fatigue": 42
      },
      {
        "week": "W-2",
        "riskScore": 45,
        "workload": 57,
        "recovery": 55,
        "sleep": 70,
        "fatigue": 47
      },
      {
        "week": "W-3",
        "riskScore": 49,
        "workload": 61,
        "recovery": 51,
        "sleep": 68,
        "fatigue": 51
      },
      {
        "week": "W-4",
        "riskScore": 52,
        "workload": 65,
        "recovery": 49,
        "sleep": 65,
        "fatigue": 55
      },
      {
        "week": "W-5",
        "riskScore": 54,
        "workload": 67,
        "recovery": 47,
        "sleep": 60,
        "fatigue": 57
      }
    ],
    "lastCheckInDate": "2026-09-09",
    "supportRequested": false
  },
  {
    "id": "P-1047",
    "name": "Insp. Anil Rathore",
    "rank": "Inspector",
    "unit": "Unit Charlie",
    "unitCode": "Charlie",
    "deploymentDays": 54,
    "deploymentStatus": "Static HQ",
    "dutyHours": 13,
    "leaveGapDays": 84,
    "leaveUtilization": 39,
    "transferFrequency": 1,
    "trainingLoad": 49,
    "workloadScore": 89,
    "sleepQuality": "Poor",
    "fatigueScore": 81,
    "recoveryScore": 34,
    "wellnessScore": 25,
    "riskScore": 79,
    "riskCategory": "CRITICAL REVIEW",
    "riskTrend": "Increasing",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Recovery Deficit"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 67,
        "workload": 74,
        "recovery": 46,
        "sleep": 75,
        "fatigue": 66
      },
      {
        "week": "W-2",
        "riskScore": 70,
        "workload": 79,
        "recovery": 42,
        "sleep": 70,
        "fatigue": 71
      },
      {
        "week": "W-3",
        "riskScore": 74,
        "workload": 83,
        "recovery": 38,
        "sleep": 68,
        "fatigue": 75
      },
      {
        "week": "W-4",
        "riskScore": 77,
        "workload": 87,
        "recovery": 36,
        "sleep": 65,
        "fatigue": 79
      },
      {
        "week": "W-5",
        "riskScore": 79,
        "workload": 89,
        "recovery": 34,
        "sleep": 35,
        "fatigue": 81
      }
    ],
    "lastCheckInDate": "2026-09-08",
    "supportRequested": true
  },
  {
    "id": "P-1048",
    "name": "Ct. Sunil Das",
    "rank": "Constable",
    "unit": "Unit Delta",
    "unitCode": "Delta",
    "deploymentDays": 26,
    "deploymentStatus": "Transit / R&R",
    "dutyHours": 9,
    "leaveGapDays": 31,
    "leaveUtilization": 71,
    "transferFrequency": 2,
    "trainingLoad": 46,
    "workloadScore": 51,
    "sleepQuality": "Good",
    "fatigueScore": 36,
    "recoveryScore": 86,
    "wellnessScore": 87,
    "riskScore": 22,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 24,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 36,
        "recovery": 95,
        "sleep": 75,
        "fatigue": 21
      },
      {
        "week": "W-2",
        "riskScore": 16,
        "workload": 41,
        "recovery": 92,
        "sleep": 70,
        "fatigue": 26
      },
      {
        "week": "W-3",
        "riskScore": 18,
        "workload": 45,
        "recovery": 90,
        "sleep": 68,
        "fatigue": 30
      },
      {
        "week": "W-4",
        "riskScore": 20,
        "workload": 49,
        "recovery": 88,
        "sleep": 65,
        "fatigue": 34
      },
      {
        "week": "W-5",
        "riskScore": 22,
        "workload": 51,
        "recovery": 86,
        "sleep": 80,
        "fatigue": 36
      }
    ],
    "lastCheckInDate": "2026-09-07",
    "supportRequested": false
  },
  {
    "id": "P-1049",
    "name": "Ct. Ramesh Koli",
    "rank": "Constable",
    "unit": "Unit Echo",
    "unitCode": "Echo",
    "deploymentDays": 18,
    "deploymentStatus": "Internal Security",
    "dutyHours": 8,
    "leaveGapDays": 48,
    "leaveUtilization": 88,
    "transferFrequency": 1,
    "trainingLoad": 63,
    "workloadScore": 43,
    "sleepQuality": "Good",
    "fatigueScore": 28,
    "recoveryScore": 78,
    "wellnessScore": 82,
    "riskScore": 27,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 26,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 28,
        "recovery": 90,
        "sleep": 75,
        "fatigue": 15
      },
      {
        "week": "W-2",
        "riskScore": 18,
        "workload": 33,
        "recovery": 86,
        "sleep": 70,
        "fatigue": 20
      },
      {
        "week": "W-3",
        "riskScore": 22,
        "workload": 37,
        "recovery": 82,
        "sleep": 68,
        "fatigue": 22
      },
      {
        "week": "W-4",
        "riskScore": 25,
        "workload": 41,
        "recovery": 80,
        "sleep": 65,
        "fatigue": 26
      },
      {
        "week": "W-5",
        "riskScore": 27,
        "workload": 43,
        "recovery": 78,
        "sleep": 80,
        "fatigue": 28
      }
    ],
    "lastCheckInDate": "2026-09-06",
    "supportRequested": false
  },
  {
    "id": "P-1050",
    "name": "Ct. Kavita Kumar",
    "rank": "Constable",
    "unit": "Unit Alpha",
    "unitCode": "Alpha",
    "deploymentDays": 30,
    "deploymentStatus": "Active Field",
    "dutyHours": 9.5,
    "leaveGapDays": 40,
    "leaveUtilization": 58,
    "transferFrequency": 3,
    "trainingLoad": 40,
    "workloadScore": 64,
    "sleepQuality": "Fair",
    "fatigueScore": 56,
    "recoveryScore": 72,
    "wellnessScore": 63,
    "riskScore": 34,
    "riskCategory": "WATCH",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 30,
    "history": [
      {
        "week": "W-1",
        "riskScore": 22,
        "workload": 49,
        "recovery": 84,
        "sleep": 75,
        "fatigue": 41
      },
      {
        "week": "W-2",
        "riskScore": 25,
        "workload": 54,
        "recovery": 80,
        "sleep": 70,
        "fatigue": 46
      },
      {
        "week": "W-3",
        "riskScore": 29,
        "workload": 58,
        "recovery": 76,
        "sleep": 68,
        "fatigue": 50
      },
      {
        "week": "W-4",
        "riskScore": 32,
        "workload": 62,
        "recovery": 74,
        "sleep": 65,
        "fatigue": 54
      },
      {
        "week": "W-5",
        "riskScore": 34,
        "workload": 64,
        "recovery": 72,
        "sleep": 60,
        "fatigue": 56
      }
    ],
    "lastCheckInDate": "2026-09-10",
    "supportRequested": false
  },
  {
    "id": "P-1051",
    "name": "HC Neeraj Rawat",
    "rank": "Head Constable",
    "unit": "Unit Bravo",
    "unitCode": "Bravo",
    "deploymentDays": 43,
    "deploymentStatus": "High Altitude / Border",
    "dutyHours": 12.5,
    "leaveGapDays": 72,
    "leaveUtilization": 52,
    "transferFrequency": 2,
    "trainingLoad": 57,
    "workloadScore": 72,
    "sleepQuality": "Fair",
    "fatigueScore": 62,
    "recoveryScore": 52,
    "wellnessScore": 51,
    "riskScore": 55,
    "riskCategory": "ELEVATED",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Physiological Balance"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 43,
        "workload": 57,
        "recovery": 64,
        "sleep": 75,
        "fatigue": 47
      },
      {
        "week": "W-2",
        "riskScore": 46,
        "workload": 62,
        "recovery": 60,
        "sleep": 70,
        "fatigue": 52
      },
      {
        "week": "W-3",
        "riskScore": 50,
        "workload": 66,
        "recovery": 56,
        "sleep": 68,
        "fatigue": 56
      },
      {
        "week": "W-4",
        "riskScore": 53,
        "workload": 70,
        "recovery": 54,
        "sleep": 65,
        "fatigue": 60
      },
      {
        "week": "W-5",
        "riskScore": 55,
        "workload": 72,
        "recovery": 52,
        "sleep": 60,
        "fatigue": 62
      }
    ],
    "lastCheckInDate": "2026-09-09",
    "supportRequested": false
  },
  {
    "id": "P-1052",
    "name": "HC Pooja Meena",
    "rank": "Head Constable",
    "unit": "Unit Charlie",
    "unitCode": "Charlie",
    "deploymentDays": 45,
    "deploymentStatus": "Static HQ",
    "dutyHours": 12,
    "leaveGapDays": 64,
    "leaveUtilization": 44,
    "transferFrequency": 1,
    "trainingLoad": 34,
    "workloadScore": 69,
    "sleepQuality": "Fair",
    "fatigueScore": 59,
    "recoveryScore": 49,
    "wellnessScore": 49,
    "riskScore": 56,
    "riskCategory": "ELEVATED",
    "riskTrend": "Increasing",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Physiological Balance"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 44,
        "workload": 54,
        "recovery": 61,
        "sleep": 75,
        "fatigue": 44
      },
      {
        "week": "W-2",
        "riskScore": 47,
        "workload": 59,
        "recovery": 57,
        "sleep": 70,
        "fatigue": 49
      },
      {
        "week": "W-3",
        "riskScore": 51,
        "workload": 63,
        "recovery": 53,
        "sleep": 68,
        "fatigue": 53
      },
      {
        "week": "W-4",
        "riskScore": 54,
        "workload": 67,
        "recovery": 51,
        "sleep": 65,
        "fatigue": 57
      },
      {
        "week": "W-5",
        "riskScore": 56,
        "workload": 69,
        "recovery": 49,
        "sleep": 60,
        "fatigue": 59
      }
    ],
    "lastCheckInDate": "2026-09-08",
    "supportRequested": false
  },
  {
    "id": "P-1053",
    "name": "ASI Sandeep Chauhan",
    "rank": "ASI",
    "unit": "Unit Delta",
    "unitCode": "Delta",
    "deploymentDays": 11,
    "deploymentStatus": "Transit / R&R",
    "dutyHours": 9,
    "leaveGapDays": 16,
    "leaveUtilization": 56,
    "transferFrequency": 2,
    "trainingLoad": 31,
    "workloadScore": 36,
    "sleepQuality": "Good",
    "fatigueScore": 21,
    "recoveryScore": 71,
    "wellnessScore": 78,
    "riskScore": 19,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 22,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 25,
        "recovery": 83,
        "sleep": 75,
        "fatigue": 15
      },
      {
        "week": "W-2",
        "riskScore": 16,
        "workload": 28,
        "recovery": 79,
        "sleep": 70,
        "fatigue": 20
      },
      {
        "week": "W-3",
        "riskScore": 18,
        "workload": 30,
        "recovery": 75,
        "sleep": 68,
        "fatigue": 22
      },
      {
        "week": "W-4",
        "riskScore": 18,
        "workload": 34,
        "recovery": 73,
        "sleep": 65,
        "fatigue": 24
      },
      {
        "week": "W-5",
        "riskScore": 19,
        "workload": 36,
        "recovery": 71,
        "sleep": 80,
        "fatigue": 21
      }
    ],
    "lastCheckInDate": "2026-09-07",
    "supportRequested": false
  },
  {
    "id": "P-1054",
    "name": "SI Rakesh Pandey",
    "rank": "Sub-Inspector",
    "unit": "Unit Echo",
    "unitCode": "Echo",
    "deploymentDays": 28,
    "deploymentStatus": "Internal Security",
    "dutyHours": 8,
    "leaveGapDays": 33,
    "leaveUtilization": 73,
    "transferFrequency": 1,
    "trainingLoad": 48,
    "workloadScore": 53,
    "sleepQuality": "Good",
    "fatigueScore": 38,
    "recoveryScore": 88,
    "wellnessScore": 88,
    "riskScore": 24,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 24,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 38,
        "recovery": 95,
        "sleep": 75,
        "fatigue": 23
      },
      {
        "week": "W-2",
        "riskScore": 16,
        "workload": 43,
        "recovery": 92,
        "sleep": 70,
        "fatigue": 28
      },
      {
        "week": "W-3",
        "riskScore": 19,
        "workload": 47,
        "recovery": 90,
        "sleep": 68,
        "fatigue": 32
      },
      {
        "week": "W-4",
        "riskScore": 22,
        "workload": 51,
        "recovery": 88,
        "sleep": 65,
        "fatigue": 36
      },
      {
        "week": "W-5",
        "riskScore": 24,
        "workload": 53,
        "recovery": 88,
        "sleep": 80,
        "fatigue": 38
      }
    ],
    "lastCheckInDate": "2026-09-06",
    "supportRequested": false
  },
  {
    "id": "P-1055",
    "name": "Insp. Rohit Tiwari",
    "rank": "Inspector",
    "unit": "Unit Alpha",
    "unitCode": "Alpha",
    "deploymentDays": 20,
    "deploymentStatus": "Active Field",
    "dutyHours": 10,
    "leaveGapDays": 50,
    "leaveUtilization": 55,
    "transferFrequency": 3,
    "trainingLoad": 65,
    "workloadScore": 45,
    "sleepQuality": "Good",
    "fatigueScore": 30,
    "recoveryScore": 80,
    "wellnessScore": 83,
    "riskScore": 29,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 26,
    "history": [
      {
        "week": "W-1",
        "riskScore": 17,
        "workload": 30,
        "recovery": 92,
        "sleep": 75,
        "fatigue": 15
      },
      {
        "week": "W-2",
        "riskScore": 20,
        "workload": 35,
        "recovery": 88,
        "sleep": 70,
        "fatigue": 20
      },
      {
        "week": "W-3",
        "riskScore": 24,
        "workload": 39,
        "recovery": 84,
        "sleep": 68,
        "fatigue": 24
      },
      {
        "week": "W-4",
        "riskScore": 27,
        "workload": 43,
        "recovery": 82,
        "sleep": 65,
        "fatigue": 28
      },
      {
        "week": "W-5",
        "riskScore": 29,
        "workload": 45,
        "recovery": 80,
        "sleep": 80,
        "fatigue": 30
      }
    ],
    "lastCheckInDate": "2026-09-10",
    "supportRequested": false
  },
  {
    "id": "P-1056",
    "name": "Ct. Dinesh Kaur",
    "rank": "Constable",
    "unit": "Unit Bravo",
    "unitCode": "Bravo",
    "deploymentDays": 32,
    "deploymentStatus": "High Altitude / Border",
    "dutyHours": 9.5,
    "leaveGapDays": 42,
    "leaveUtilization": 60,
    "transferFrequency": 2,
    "trainingLoad": 42,
    "workloadScore": 66,
    "sleepQuality": "Fair",
    "fatigueScore": 58,
    "recoveryScore": 74,
    "wellnessScore": 64,
    "riskScore": 36,
    "riskCategory": "WATCH",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Workload Pressure",
      "Physiological Balance"
    ],
    "baselineRisk": 30,
    "history": [
      {
        "week": "W-1",
        "riskScore": 24,
        "workload": 51,
        "recovery": 86,
        "sleep": 75,
        "fatigue": 43
      },
      {
        "week": "W-2",
        "riskScore": 27,
        "workload": 56,
        "recovery": 82,
        "sleep": 70,
        "fatigue": 48
      },
      {
        "week": "W-3",
        "riskScore": 31,
        "workload": 60,
        "recovery": 78,
        "sleep": 68,
        "fatigue": 52
      },
      {
        "week": "W-4",
        "riskScore": 34,
        "workload": 64,
        "recovery": 76,
        "sleep": 65,
        "fatigue": 56
      },
      {
        "week": "W-5",
        "riskScore": 36,
        "workload": 66,
        "recovery": 74,
        "sleep": 60,
        "fatigue": 58
      }
    ],
    "lastCheckInDate": "2026-09-09",
    "supportRequested": false
  },
  {
    "id": "P-1057",
    "name": "Ct. Ajay Rathore",
    "rank": "Constable",
    "unit": "Unit Charlie",
    "unitCode": "Charlie",
    "deploymentDays": 45,
    "deploymentStatus": "Static HQ",
    "dutyHours": 12,
    "leaveGapDays": 74,
    "leaveUtilization": 54,
    "transferFrequency": 1,
    "trainingLoad": 59,
    "workloadScore": 74,
    "sleepQuality": "Fair",
    "fatigueScore": 64,
    "recoveryScore": 54,
    "wellnessScore": 52,
    "riskScore": 57,
    "riskCategory": "ELEVATED",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Physiological Balance"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 45,
        "workload": 59,
        "recovery": 66,
        "sleep": 75,
        "fatigue": 49
      },
      {
        "week": "W-2",
        "riskScore": 48,
        "workload": 64,
        "recovery": 62,
        "sleep": 70,
        "fatigue": 54
      },
      {
        "week": "W-3",
        "riskScore": 52,
        "workload": 68,
        "recovery": 58,
        "sleep": 68,
        "fatigue": 58
      },
      {
        "week": "W-4",
        "riskScore": 55,
        "workload": 72,
        "recovery": 56,
        "sleep": 65,
        "fatigue": 62
      },
      {
        "week": "W-5",
        "riskScore": 57,
        "workload": 74,
        "recovery": 54,
        "sleep": 60,
        "fatigue": 64
      }
    ],
    "lastCheckInDate": "2026-09-08",
    "supportRequested": false
  },
  {
    "id": "P-1058",
    "name": "Ct. Vijay Das",
    "rank": "Constable",
    "unit": "Unit Delta",
    "unitCode": "Delta",
    "deploymentDays": 56,
    "deploymentStatus": "Transit / R&R",
    "dutyHours": 14,
    "leaveGapDays": 101,
    "leaveUtilization": 26,
    "transferFrequency": 3,
    "trainingLoad": 36,
    "workloadScore": 91,
    "sleepQuality": "Poor",
    "fatigueScore": 86,
    "recoveryScore": 39,
    "wellnessScore": 28,
    "riskScore": 84,
    "riskCategory": "CRITICAL REVIEW",
    "riskTrend": "Increasing",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Recovery Deficit"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 72,
        "workload": 76,
        "recovery": 51,
        "sleep": 75,
        "fatigue": 71
      },
      {
        "week": "W-2",
        "riskScore": 75,
        "workload": 81,
        "recovery": 47,
        "sleep": 70,
        "fatigue": 76
      },
      {
        "week": "W-3",
        "riskScore": 79,
        "workload": 85,
        "recovery": 43,
        "sleep": 68,
        "fatigue": 80
      },
      {
        "week": "W-4",
        "riskScore": 82,
        "workload": 89,
        "recovery": 41,
        "sleep": 65,
        "fatigue": 84
      },
      {
        "week": "W-5",
        "riskScore": 84,
        "workload": 91,
        "recovery": 39,
        "sleep": 35,
        "fatigue": 86
      }
    ],
    "lastCheckInDate": "2026-09-07",
    "supportRequested": false
  },
  {
    "id": "P-1059",
    "name": "HC Arun Koli",
    "rank": "Head Constable",
    "unit": "Unit Echo",
    "unitCode": "Echo",
    "deploymentDays": 13,
    "deploymentStatus": "Internal Security",
    "dutyHours": 8,
    "leaveGapDays": 18,
    "leaveUtilization": 58,
    "transferFrequency": 1,
    "trainingLoad": 33,
    "workloadScore": 38,
    "sleepQuality": "Good",
    "fatigueScore": 23,
    "recoveryScore": 73,
    "wellnessScore": 79,
    "riskScore": 21,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 22,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 25,
        "recovery": 85,
        "sleep": 75,
        "fatigue": 15
      },
      {
        "week": "W-2",
        "riskScore": 16,
        "workload": 28,
        "recovery": 81,
        "sleep": 70,
        "fatigue": 20
      },
      {
        "week": "W-3",
        "riskScore": 18,
        "workload": 32,
        "recovery": 77,
        "sleep": 68,
        "fatigue": 22
      },
      {
        "week": "W-4",
        "riskScore": 19,
        "workload": 36,
        "recovery": 75,
        "sleep": 65,
        "fatigue": 24
      },
      {
        "week": "W-5",
        "riskScore": 21,
        "workload": 38,
        "recovery": 73,
        "sleep": 80,
        "fatigue": 23
      }
    ],
    "lastCheckInDate": "2026-09-06",
    "supportRequested": false
  },
  {
    "id": "P-1060",
    "name": "HC Gopal Kumar",
    "rank": "Head Constable",
    "unit": "Unit Alpha",
    "unitCode": "Alpha",
    "deploymentDays": 30,
    "deploymentStatus": "Active Field",
    "dutyHours": 10,
    "leaveGapDays": 35,
    "leaveUtilization": 75,
    "transferFrequency": 3,
    "trainingLoad": 50,
    "workloadScore": 55,
    "sleepQuality": "Good",
    "fatigueScore": 40,
    "recoveryScore": 90,
    "wellnessScore": 89,
    "riskScore": 26,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 24,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 40,
        "recovery": 95,
        "sleep": 75,
        "fatigue": 25
      },
      {
        "week": "W-2",
        "riskScore": 17,
        "workload": 45,
        "recovery": 92,
        "sleep": 70,
        "fatigue": 30
      },
      {
        "week": "W-3",
        "riskScore": 21,
        "workload": 49,
        "recovery": 90,
        "sleep": 68,
        "fatigue": 34
      },
      {
        "week": "W-4",
        "riskScore": 24,
        "workload": 53,
        "recovery": 88,
        "sleep": 65,
        "fatigue": 38
      },
      {
        "week": "W-5",
        "riskScore": 26,
        "workload": 55,
        "recovery": 90,
        "sleep": 80,
        "fatigue": 40
      }
    ],
    "lastCheckInDate": "2026-09-10",
    "supportRequested": false
  },
  {
    "id": "P-1061",
    "name": "ASI Santosh Rawat",
    "rank": "ASI",
    "unit": "Unit Bravo",
    "unitCode": "Bravo",
    "deploymentDays": 22,
    "deploymentStatus": "High Altitude / Border",
    "dutyHours": 9,
    "leaveGapDays": 52,
    "leaveUtilization": 57,
    "transferFrequency": 2,
    "trainingLoad": 67,
    "workloadScore": 47,
    "sleepQuality": "Good",
    "fatigueScore": 32,
    "recoveryScore": 82,
    "wellnessScore": 84,
    "riskScore": 19,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 15,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 32,
        "recovery": 94,
        "sleep": 75,
        "fatigue": 17
      },
      {
        "week": "W-2",
        "riskScore": 16,
        "workload": 37,
        "recovery": 90,
        "sleep": 70,
        "fatigue": 22
      },
      {
        "week": "W-3",
        "riskScore": 18,
        "workload": 41,
        "recovery": 86,
        "sleep": 68,
        "fatigue": 26
      },
      {
        "week": "W-4",
        "riskScore": 18,
        "workload": 45,
        "recovery": 84,
        "sleep": 65,
        "fatigue": 30
      },
      {
        "week": "W-5",
        "riskScore": 19,
        "workload": 47,
        "recovery": 82,
        "sleep": 80,
        "fatigue": 32
      }
    ],
    "lastCheckInDate": "2026-09-09",
    "supportRequested": false
  },
  {
    "id": "P-1062",
    "name": "SI Mahesh Meena",
    "rank": "Sub-Inspector",
    "unit": "Unit Charlie",
    "unitCode": "Charlie",
    "deploymentDays": 34,
    "deploymentStatus": "Static HQ",
    "dutyHours": 9.5,
    "leaveGapDays": 44,
    "leaveUtilization": 62,
    "transferFrequency": 1,
    "trainingLoad": 44,
    "workloadScore": 50,
    "sleepQuality": "Fair",
    "fatigueScore": 42,
    "recoveryScore": 58,
    "wellnessScore": 55,
    "riskScore": 38,
    "riskCategory": "WATCH",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 30,
    "history": [
      {
        "week": "W-1",
        "riskScore": 26,
        "workload": 35,
        "recovery": 70,
        "sleep": 75,
        "fatigue": 27
      },
      {
        "week": "W-2",
        "riskScore": 29,
        "workload": 40,
        "recovery": 66,
        "sleep": 70,
        "fatigue": 32
      },
      {
        "week": "W-3",
        "riskScore": 33,
        "workload": 44,
        "recovery": 62,
        "sleep": 68,
        "fatigue": 36
      },
      {
        "week": "W-4",
        "riskScore": 36,
        "workload": 48,
        "recovery": 60,
        "sleep": 65,
        "fatigue": 40
      },
      {
        "week": "W-5",
        "riskScore": 38,
        "workload": 50,
        "recovery": 58,
        "sleep": 60,
        "fatigue": 42
      }
    ],
    "lastCheckInDate": "2026-09-08",
    "supportRequested": false
  },
  {
    "id": "P-1063",
    "name": "Insp. Ashok Chauhan",
    "rank": "Inspector",
    "unit": "Unit Delta",
    "unitCode": "Delta",
    "deploymentDays": 47,
    "deploymentStatus": "Transit / R&R",
    "dutyHours": 11.5,
    "leaveGapDays": 76,
    "leaveUtilization": 56,
    "transferFrequency": 3,
    "trainingLoad": 61,
    "workloadScore": 76,
    "sleepQuality": "Fair",
    "fatigueScore": 66,
    "recoveryScore": 56,
    "wellnessScore": 54,
    "riskScore": 59,
    "riskCategory": "ELEVATED",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Physiological Balance"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 47,
        "workload": 61,
        "recovery": 68,
        "sleep": 75,
        "fatigue": 51
      },
      {
        "week": "W-2",
        "riskScore": 50,
        "workload": 66,
        "recovery": 64,
        "sleep": 70,
        "fatigue": 56
      },
      {
        "week": "W-3",
        "riskScore": 54,
        "workload": 70,
        "recovery": 60,
        "sleep": 68,
        "fatigue": 60
      },
      {
        "week": "W-4",
        "riskScore": 57,
        "workload": 74,
        "recovery": 58,
        "sleep": 65,
        "fatigue": 64
      },
      {
        "week": "W-5",
        "riskScore": 59,
        "workload": 76,
        "recovery": 56,
        "sleep": 60,
        "fatigue": 66
      }
    ],
    "lastCheckInDate": "2026-09-07",
    "supportRequested": false
  },
  {
    "id": "P-1064",
    "name": "Ct. Dharmendra Pandey",
    "rank": "Constable",
    "unit": "Unit Echo",
    "unitCode": "Echo",
    "deploymentDays": 58,
    "deploymentStatus": "Internal Security",
    "dutyHours": 12.5,
    "leaveGapDays": 103,
    "leaveUtilization": 28,
    "transferFrequency": 2,
    "trainingLoad": 38,
    "workloadScore": 93,
    "sleepQuality": "Poor",
    "fatigueScore": 88,
    "recoveryScore": 41,
    "wellnessScore": 30,
    "riskScore": 86,
    "riskCategory": "CRITICAL REVIEW",
    "riskTrend": "Increasing",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Recovery Deficit"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 74,
        "workload": 78,
        "recovery": 53,
        "sleep": 75,
        "fatigue": 73
      },
      {
        "week": "W-2",
        "riskScore": 77,
        "workload": 83,
        "recovery": 49,
        "sleep": 70,
        "fatigue": 78
      },
      {
        "week": "W-3",
        "riskScore": 81,
        "workload": 87,
        "recovery": 45,
        "sleep": 68,
        "fatigue": 82
      },
      {
        "week": "W-4",
        "riskScore": 84,
        "workload": 91,
        "recovery": 43,
        "sleep": 65,
        "fatigue": 86
      },
      {
        "week": "W-5",
        "riskScore": 86,
        "workload": 93,
        "recovery": 41,
        "sleep": 35,
        "fatigue": 88
      }
    ],
    "lastCheckInDate": "2026-09-06",
    "supportRequested": false
  },
  {
    "id": "P-1065",
    "name": "Ct. Praveen Tiwari",
    "rank": "Constable",
    "unit": "Unit Alpha",
    "unitCode": "Alpha",
    "deploymentDays": 15,
    "deploymentStatus": "Active Field",
    "dutyHours": 10,
    "leaveGapDays": 20,
    "leaveUtilization": 60,
    "transferFrequency": 3,
    "trainingLoad": 35,
    "workloadScore": 40,
    "sleepQuality": "Good",
    "fatigueScore": 25,
    "recoveryScore": 75,
    "wellnessScore": 80,
    "riskScore": 23,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 22,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 25,
        "recovery": 87,
        "sleep": 75,
        "fatigue": 15
      },
      {
        "week": "W-2",
        "riskScore": 16,
        "workload": 30,
        "recovery": 83,
        "sleep": 70,
        "fatigue": 20
      },
      {
        "week": "W-3",
        "riskScore": 18,
        "workload": 34,
        "recovery": 79,
        "sleep": 68,
        "fatigue": 22
      },
      {
        "week": "W-4",
        "riskScore": 21,
        "workload": 38,
        "recovery": 77,
        "sleep": 65,
        "fatigue": 24
      },
      {
        "week": "W-5",
        "riskScore": 23,
        "workload": 40,
        "recovery": 75,
        "sleep": 80,
        "fatigue": 25
      }
    ],
    "lastCheckInDate": "2026-09-10",
    "supportRequested": false
  },
  {
    "id": "P-1066",
    "name": "Ct. Sachin Kaur",
    "rank": "Constable",
    "unit": "Unit Bravo",
    "unitCode": "Bravo",
    "deploymentDays": 32,
    "deploymentStatus": "High Altitude / Border",
    "dutyHours": 9,
    "leaveGapDays": 37,
    "leaveUtilization": 77,
    "transferFrequency": 2,
    "trainingLoad": 52,
    "workloadScore": 57,
    "sleepQuality": "Good",
    "fatigueScore": 42,
    "recoveryScore": 92,
    "wellnessScore": 90,
    "riskScore": 28,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 24,
    "history": [
      {
        "week": "W-1",
        "riskScore": 16,
        "workload": 42,
        "recovery": 95,
        "sleep": 75,
        "fatigue": 27
      },
      {
        "week": "W-2",
        "riskScore": 19,
        "workload": 47,
        "recovery": 92,
        "sleep": 70,
        "fatigue": 32
      },
      {
        "week": "W-3",
        "riskScore": 23,
        "workload": 51,
        "recovery": 90,
        "sleep": 68,
        "fatigue": 36
      },
      {
        "week": "W-4",
        "riskScore": 26,
        "workload": 55,
        "recovery": 88,
        "sleep": 65,
        "fatigue": 40
      },
      {
        "week": "W-5",
        "riskScore": 28,
        "workload": 57,
        "recovery": 92,
        "sleep": 80,
        "fatigue": 42
      }
    ],
    "lastCheckInDate": "2026-09-09",
    "supportRequested": false
  },
  {
    "id": "P-1067",
    "name": "HC Naveen Rathore",
    "rank": "Head Constable",
    "unit": "Unit Charlie",
    "unitCode": "Charlie",
    "deploymentDays": 24,
    "deploymentStatus": "Static HQ",
    "dutyHours": 8,
    "leaveGapDays": 54,
    "leaveUtilization": 59,
    "transferFrequency": 1,
    "trainingLoad": 69,
    "workloadScore": 49,
    "sleepQuality": "Good",
    "fatigueScore": 34,
    "recoveryScore": 84,
    "wellnessScore": 85,
    "riskScore": 21,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 15,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 34,
        "recovery": 95,
        "sleep": 75,
        "fatigue": 19
      },
      {
        "week": "W-2",
        "riskScore": 16,
        "workload": 39,
        "recovery": 92,
        "sleep": 70,
        "fatigue": 24
      },
      {
        "week": "W-3",
        "riskScore": 18,
        "workload": 43,
        "recovery": 88,
        "sleep": 68,
        "fatigue": 28
      },
      {
        "week": "W-4",
        "riskScore": 19,
        "workload": 47,
        "recovery": 86,
        "sleep": 65,
        "fatigue": 32
      },
      {
        "week": "W-5",
        "riskScore": 21,
        "workload": 49,
        "recovery": 84,
        "sleep": 80,
        "fatigue": 34
      }
    ],
    "lastCheckInDate": "2026-09-08",
    "supportRequested": false
  },
  {
    "id": "P-1068",
    "name": "HC Mukesh Das",
    "rank": "Head Constable",
    "unit": "Unit Delta",
    "unitCode": "Delta",
    "deploymentDays": 36,
    "deploymentStatus": "Transit / R&R",
    "dutyHours": 9.5,
    "leaveGapDays": 46,
    "leaveUtilization": 64,
    "transferFrequency": 3,
    "trainingLoad": 46,
    "workloadScore": 52,
    "sleepQuality": "Fair",
    "fatigueScore": 44,
    "recoveryScore": 60,
    "wellnessScore": 56,
    "riskScore": 40,
    "riskCategory": "WATCH",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Deployment Duration",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 44,
    "history": [
      {
        "week": "W-1",
        "riskScore": 28,
        "workload": 37,
        "recovery": 72,
        "sleep": 75,
        "fatigue": 29
      },
      {
        "week": "W-2",
        "riskScore": 31,
        "workload": 42,
        "recovery": 68,
        "sleep": 70,
        "fatigue": 34
      },
      {
        "week": "W-3",
        "riskScore": 35,
        "workload": 46,
        "recovery": 64,
        "sleep": 68,
        "fatigue": 38
      },
      {
        "week": "W-4",
        "riskScore": 38,
        "workload": 50,
        "recovery": 62,
        "sleep": 65,
        "fatigue": 42
      },
      {
        "week": "W-5",
        "riskScore": 40,
        "workload": 52,
        "recovery": 60,
        "sleep": 60,
        "fatigue": 44
      }
    ],
    "lastCheckInDate": "2026-09-07",
    "supportRequested": false
  },
  {
    "id": "P-1069",
    "name": "ASI Harish Koli",
    "rank": "ASI",
    "unit": "Unit Echo",
    "unitCode": "Echo",
    "deploymentDays": 49,
    "deploymentStatus": "Internal Security",
    "dutyHours": 11,
    "leaveGapDays": 78,
    "leaveUtilization": 58,
    "transferFrequency": 2,
    "trainingLoad": 63,
    "workloadScore": 78,
    "sleepQuality": "Fair",
    "fatigueScore": 68,
    "recoveryScore": 58,
    "wellnessScore": 55,
    "riskScore": 61,
    "riskCategory": "ELEVATED",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Physiological Balance"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 49,
        "workload": 63,
        "recovery": 70,
        "sleep": 75,
        "fatigue": 53
      },
      {
        "week": "W-2",
        "riskScore": 52,
        "workload": 68,
        "recovery": 66,
        "sleep": 70,
        "fatigue": 58
      },
      {
        "week": "W-3",
        "riskScore": 56,
        "workload": 72,
        "recovery": 62,
        "sleep": 68,
        "fatigue": 62
      },
      {
        "week": "W-4",
        "riskScore": 59,
        "workload": 76,
        "recovery": 60,
        "sleep": 65,
        "fatigue": 66
      },
      {
        "week": "W-5",
        "riskScore": 61,
        "workload": 78,
        "recovery": 58,
        "sleep": 60,
        "fatigue": 68
      }
    ],
    "lastCheckInDate": "2026-09-06",
    "supportRequested": false
  },
  {
    "id": "P-1070",
    "name": "SI Balwan Kumar",
    "rank": "Sub-Inspector",
    "unit": "Unit Alpha",
    "unitCode": "Alpha",
    "deploymentDays": 45,
    "deploymentStatus": "Active Field",
    "dutyHours": 14.5,
    "leaveGapDays": 75,
    "leaveUtilization": 30,
    "transferFrequency": 1,
    "trainingLoad": 40,
    "workloadScore": 80,
    "sleepQuality": "Poor",
    "fatigueScore": 72,
    "recoveryScore": 25,
    "wellnessScore": 20,
    "riskScore": 70,
    "riskCategory": "CRITICAL REVIEW",
    "riskTrend": "Increasing",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Recovery Deficit"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 58,
        "workload": 65,
        "recovery": 37,
        "sleep": 75,
        "fatigue": 57
      },
      {
        "week": "W-2",
        "riskScore": 61,
        "workload": 70,
        "recovery": 33,
        "sleep": 70,
        "fatigue": 62
      },
      {
        "week": "W-3",
        "riskScore": 65,
        "workload": 74,
        "recovery": 29,
        "sleep": 68,
        "fatigue": 66
      },
      {
        "week": "W-4",
        "riskScore": 68,
        "workload": 78,
        "recovery": 27,
        "sleep": 65,
        "fatigue": 70
      },
      {
        "week": "W-5",
        "riskScore": 70,
        "workload": 80,
        "recovery": 25,
        "sleep": 35,
        "fatigue": 72
      }
    ],
    "lastCheckInDate": "2026-09-10",
    "supportRequested": false
  },
  {
    "id": "P-1071",
    "name": "Insp. Kuldeep Rawat",
    "rank": "Inspector",
    "unit": "Unit Bravo",
    "unitCode": "Bravo",
    "deploymentDays": 17,
    "deploymentStatus": "High Altitude / Border",
    "dutyHours": 9,
    "leaveGapDays": 22,
    "leaveUtilization": 62,
    "transferFrequency": 2,
    "trainingLoad": 37,
    "workloadScore": 42,
    "sleepQuality": "Good",
    "fatigueScore": 27,
    "recoveryScore": 77,
    "wellnessScore": 81,
    "riskScore": 25,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 22,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 27,
        "recovery": 89,
        "sleep": 75,
        "fatigue": 15
      },
      {
        "week": "W-2",
        "riskScore": 16,
        "workload": 32,
        "recovery": 85,
        "sleep": 70,
        "fatigue": 20
      },
      {
        "week": "W-3",
        "riskScore": 20,
        "workload": 36,
        "recovery": 81,
        "sleep": 68,
        "fatigue": 22
      },
      {
        "week": "W-4",
        "riskScore": 23,
        "workload": 40,
        "recovery": 79,
        "sleep": 65,
        "fatigue": 25
      },
      {
        "week": "W-5",
        "riskScore": 25,
        "workload": 42,
        "recovery": 77,
        "sleep": 80,
        "fatigue": 27
      }
    ],
    "lastCheckInDate": "2026-09-09",
    "supportRequested": false
  },
  {
    "id": "P-1072",
    "name": "Ct. Gurpreet Meena",
    "rank": "Constable",
    "unit": "Unit Charlie",
    "unitCode": "Charlie",
    "deploymentDays": 34,
    "deploymentStatus": "Static HQ",
    "dutyHours": 8,
    "leaveGapDays": 39,
    "leaveUtilization": 79,
    "transferFrequency": 1,
    "trainingLoad": 54,
    "workloadScore": 59,
    "sleepQuality": "Good",
    "fatigueScore": 44,
    "recoveryScore": 94,
    "wellnessScore": 91,
    "riskScore": 18,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 15,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 44,
        "recovery": 95,
        "sleep": 75,
        "fatigue": 29
      },
      {
        "week": "W-2",
        "riskScore": 16,
        "workload": 49,
        "recovery": 92,
        "sleep": 70,
        "fatigue": 34
      },
      {
        "week": "W-3",
        "riskScore": 18,
        "workload": 53,
        "recovery": 90,
        "sleep": 68,
        "fatigue": 38
      },
      {
        "week": "W-4",
        "riskScore": 18,
        "workload": 57,
        "recovery": 88,
        "sleep": 65,
        "fatigue": 42
      },
      {
        "week": "W-5",
        "riskScore": 18,
        "workload": 59,
        "recovery": 94,
        "sleep": 80,
        "fatigue": 44
      }
    ],
    "lastCheckInDate": "2026-09-08",
    "supportRequested": false
  },
  {
    "id": "P-1073",
    "name": "Ct. Jaswant Chauhan",
    "rank": "Constable",
    "unit": "Unit Delta",
    "unitCode": "Delta",
    "deploymentDays": 36,
    "deploymentStatus": "Transit / R&R",
    "dutyHours": 10.5,
    "leaveGapDays": 56,
    "leaveUtilization": 49,
    "transferFrequency": 3,
    "trainingLoad": 31,
    "workloadScore": 55,
    "sleepQuality": "Fair",
    "fatigueScore": 47,
    "recoveryScore": 63,
    "wellnessScore": 58,
    "riskScore": 41,
    "riskCategory": "WATCH",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Deployment Duration",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 32,
    "history": [
      {
        "week": "W-1",
        "riskScore": 29,
        "workload": 40,
        "recovery": 75,
        "sleep": 75,
        "fatigue": 32
      },
      {
        "week": "W-2",
        "riskScore": 32,
        "workload": 45,
        "recovery": 71,
        "sleep": 70,
        "fatigue": 37
      },
      {
        "week": "W-3",
        "riskScore": 36,
        "workload": 49,
        "recovery": 67,
        "sleep": 68,
        "fatigue": 41
      },
      {
        "week": "W-4",
        "riskScore": 39,
        "workload": 53,
        "recovery": 65,
        "sleep": 65,
        "fatigue": 45
      },
      {
        "week": "W-5",
        "riskScore": 41,
        "workload": 55,
        "recovery": 63,
        "sleep": 60,
        "fatigue": 47
      }
    ],
    "lastCheckInDate": "2026-09-07",
    "supportRequested": false
  },
  {
    "id": "P-1074",
    "name": "Ct. Manpreet Pandey",
    "rank": "Constable",
    "unit": "Unit Echo",
    "unitCode": "Echo",
    "deploymentDays": 38,
    "deploymentStatus": "Internal Security",
    "dutyHours": 9.5,
    "leaveGapDays": 48,
    "leaveUtilization": 66,
    "transferFrequency": 2,
    "trainingLoad": 48,
    "workloadScore": 54,
    "sleepQuality": "Fair",
    "fatigueScore": 46,
    "recoveryScore": 62,
    "wellnessScore": 57,
    "riskScore": 42,
    "riskCategory": "WATCH",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Deployment Duration",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 44,
    "history": [
      {
        "week": "W-1",
        "riskScore": 30,
        "workload": 39,
        "recovery": 74,
        "sleep": 75,
        "fatigue": 31
      },
      {
        "week": "W-2",
        "riskScore": 33,
        "workload": 44,
        "recovery": 70,
        "sleep": 70,
        "fatigue": 36
      },
      {
        "week": "W-3",
        "riskScore": 37,
        "workload": 48,
        "recovery": 66,
        "sleep": 68,
        "fatigue": 40
      },
      {
        "week": "W-4",
        "riskScore": 40,
        "workload": 52,
        "recovery": 64,
        "sleep": 65,
        "fatigue": 44
      },
      {
        "week": "W-5",
        "riskScore": 42,
        "workload": 54,
        "recovery": 62,
        "sleep": 60,
        "fatigue": 46
      }
    ],
    "lastCheckInDate": "2026-09-06",
    "supportRequested": false
  },
  {
    "id": "P-1075",
    "name": "HC Surinder Tiwari",
    "rank": "Head Constable",
    "unit": "Unit Alpha",
    "unitCode": "Alpha",
    "deploymentDays": 36,
    "deploymentStatus": "Active Field",
    "dutyHours": 10.5,
    "leaveGapDays": 55,
    "leaveUtilization": 35,
    "transferFrequency": 1,
    "trainingLoad": 65,
    "workloadScore": 80,
    "sleepQuality": "Fair",
    "fatigueScore": 70,
    "recoveryScore": 60,
    "wellnessScore": 56,
    "riskScore": 63,
    "riskCategory": "ELEVATED",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Physiological Balance"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 51,
        "workload": 65,
        "recovery": 72,
        "sleep": 75,
        "fatigue": 55
      },
      {
        "week": "W-2",
        "riskScore": 54,
        "workload": 70,
        "recovery": 68,
        "sleep": 70,
        "fatigue": 60
      },
      {
        "week": "W-3",
        "riskScore": 58,
        "workload": 74,
        "recovery": 64,
        "sleep": 68,
        "fatigue": 64
      },
      {
        "week": "W-4",
        "riskScore": 61,
        "workload": 78,
        "recovery": 62,
        "sleep": 65,
        "fatigue": 68
      },
      {
        "week": "W-5",
        "riskScore": 63,
        "workload": 80,
        "recovery": 60,
        "sleep": 60,
        "fatigue": 70
      }
    ],
    "lastCheckInDate": "2026-09-10",
    "supportRequested": false
  },
  {
    "id": "P-1076",
    "name": "HC Joginder Kaur",
    "rank": "Head Constable",
    "unit": "Unit Bravo",
    "unitCode": "Bravo",
    "deploymentDays": 47,
    "deploymentStatus": "High Altitude / Border",
    "dutyHours": 13,
    "leaveGapDays": 77,
    "leaveUtilization": 32,
    "transferFrequency": 3,
    "trainingLoad": 42,
    "workloadScore": 82,
    "sleepQuality": "Poor",
    "fatigueScore": 74,
    "recoveryScore": 27,
    "wellnessScore": 21,
    "riskScore": 72,
    "riskCategory": "CRITICAL REVIEW",
    "riskTrend": "Increasing",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Recovery Deficit"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 60,
        "workload": 67,
        "recovery": 39,
        "sleep": 75,
        "fatigue": 59
      },
      {
        "week": "W-2",
        "riskScore": 63,
        "workload": 72,
        "recovery": 35,
        "sleep": 70,
        "fatigue": 64
      },
      {
        "week": "W-3",
        "riskScore": 67,
        "workload": 76,
        "recovery": 31,
        "sleep": 68,
        "fatigue": 68
      },
      {
        "week": "W-4",
        "riskScore": 70,
        "workload": 80,
        "recovery": 29,
        "sleep": 65,
        "fatigue": 72
      },
      {
        "week": "W-5",
        "riskScore": 72,
        "workload": 82,
        "recovery": 27,
        "sleep": 35,
        "fatigue": 74
      }
    ],
    "lastCheckInDate": "2026-09-09",
    "supportRequested": false
  },
  {
    "id": "P-1077",
    "name": "ASI Devendra Rathore",
    "rank": "ASI",
    "unit": "Unit Charlie",
    "unitCode": "Charlie",
    "deploymentDays": 19,
    "deploymentStatus": "Static HQ",
    "dutyHours": 8,
    "leaveGapDays": 24,
    "leaveUtilization": 64,
    "transferFrequency": 1,
    "trainingLoad": 39,
    "workloadScore": 44,
    "sleepQuality": "Good",
    "fatigueScore": 29,
    "recoveryScore": 79,
    "wellnessScore": 82,
    "riskScore": 27,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 22,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 29,
        "recovery": 91,
        "sleep": 75,
        "fatigue": 15
      },
      {
        "week": "W-2",
        "riskScore": 18,
        "workload": 34,
        "recovery": 87,
        "sleep": 70,
        "fatigue": 20
      },
      {
        "week": "W-3",
        "riskScore": 22,
        "workload": 38,
        "recovery": 83,
        "sleep": 68,
        "fatigue": 23
      },
      {
        "week": "W-4",
        "riskScore": 25,
        "workload": 42,
        "recovery": 81,
        "sleep": 65,
        "fatigue": 27
      },
      {
        "week": "W-5",
        "riskScore": 27,
        "workload": 44,
        "recovery": 79,
        "sleep": 80,
        "fatigue": 29
      }
    ],
    "lastCheckInDate": "2026-09-08",
    "supportRequested": false
  },
  {
    "id": "P-1078",
    "name": "SI Kamal Das",
    "rank": "Sub-Inspector",
    "unit": "Unit Delta",
    "unitCode": "Delta",
    "deploymentDays": 11,
    "deploymentStatus": "Transit / R&R",
    "dutyHours": 10,
    "leaveGapDays": 41,
    "leaveUtilization": 81,
    "transferFrequency": 3,
    "trainingLoad": 56,
    "workloadScore": 36,
    "sleepQuality": "Good",
    "fatigueScore": 21,
    "recoveryScore": 71,
    "wellnessScore": 78,
    "riskScore": 20,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 15,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 25,
        "recovery": 83,
        "sleep": 75,
        "fatigue": 15
      },
      {
        "week": "W-2",
        "riskScore": 16,
        "workload": 28,
        "recovery": 79,
        "sleep": 70,
        "fatigue": 20
      },
      {
        "week": "W-3",
        "riskScore": 18,
        "workload": 30,
        "recovery": 75,
        "sleep": 68,
        "fatigue": 22
      },
      {
        "week": "W-4",
        "riskScore": 18,
        "workload": 34,
        "recovery": 73,
        "sleep": 65,
        "fatigue": 24
      },
      {
        "week": "W-5",
        "riskScore": 20,
        "workload": 36,
        "recovery": 71,
        "sleep": 80,
        "fatigue": 21
      }
    ],
    "lastCheckInDate": "2026-09-07",
    "supportRequested": false
  },
  {
    "id": "P-1079",
    "name": "Insp. Brijesh Koli",
    "rank": "Inspector",
    "unit": "Unit Echo",
    "unitCode": "Echo",
    "deploymentDays": 38,
    "deploymentStatus": "Internal Security",
    "dutyHours": 10.5,
    "leaveGapDays": 58,
    "leaveUtilization": 51,
    "transferFrequency": 2,
    "trainingLoad": 33,
    "workloadScore": 57,
    "sleepQuality": "Fair",
    "fatigueScore": 49,
    "recoveryScore": 65,
    "wellnessScore": 59,
    "riskScore": 43,
    "riskCategory": "WATCH",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Deployment Duration",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 31,
        "workload": 42,
        "recovery": 77,
        "sleep": 75,
        "fatigue": 34
      },
      {
        "week": "W-2",
        "riskScore": 34,
        "workload": 47,
        "recovery": 73,
        "sleep": 70,
        "fatigue": 39
      },
      {
        "week": "W-3",
        "riskScore": 38,
        "workload": 51,
        "recovery": 69,
        "sleep": 68,
        "fatigue": 43
      },
      {
        "week": "W-4",
        "riskScore": 41,
        "workload": 55,
        "recovery": 67,
        "sleep": 65,
        "fatigue": 47
      },
      {
        "week": "W-5",
        "riskScore": 43,
        "workload": 57,
        "recovery": 65,
        "sleep": 60,
        "fatigue": 49
      }
    ],
    "lastCheckInDate": "2026-09-06",
    "supportRequested": false
  },
  {
    "id": "P-1080",
    "name": "Ct. Rajesh Kumar",
    "rank": "Constable",
    "unit": "Unit Alpha",
    "unitCode": "Alpha",
    "deploymentDays": 25,
    "deploymentStatus": "Active Field",
    "dutyHours": 9.5,
    "leaveGapDays": 50,
    "leaveUtilization": 48,
    "transferFrequency": 1,
    "trainingLoad": 50,
    "workloadScore": 56,
    "sleepQuality": "Fair",
    "fatigueScore": 48,
    "recoveryScore": 64,
    "wellnessScore": 58,
    "riskScore": 44,
    "riskCategory": "WATCH",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 44,
    "history": [
      {
        "week": "W-1",
        "riskScore": 32,
        "workload": 41,
        "recovery": 76,
        "sleep": 75,
        "fatigue": 33
      },
      {
        "week": "W-2",
        "riskScore": 35,
        "workload": 46,
        "recovery": 72,
        "sleep": 70,
        "fatigue": 38
      },
      {
        "week": "W-3",
        "riskScore": 39,
        "workload": 50,
        "recovery": 68,
        "sleep": 68,
        "fatigue": 42
      },
      {
        "week": "W-4",
        "riskScore": 42,
        "workload": 54,
        "recovery": 66,
        "sleep": 65,
        "fatigue": 46
      },
      {
        "week": "W-5",
        "riskScore": 44,
        "workload": 56,
        "recovery": 64,
        "sleep": 60,
        "fatigue": 48
      }
    ],
    "lastCheckInDate": "2026-09-10",
    "supportRequested": false
  },
  {
    "id": "P-1081",
    "name": "Ct. Amit Rawat",
    "rank": "Constable",
    "unit": "Unit Bravo",
    "unitCode": "Bravo",
    "deploymentDays": 38,
    "deploymentStatus": "High Altitude / Border",
    "dutyHours": 12.5,
    "leaveGapDays": 57,
    "leaveUtilization": 37,
    "transferFrequency": 3,
    "trainingLoad": 67,
    "workloadScore": 82,
    "sleepQuality": "Fair",
    "fatigueScore": 72,
    "recoveryScore": 62,
    "wellnessScore": 57,
    "riskScore": 65,
    "riskCategory": "ELEVATED",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Physiological Balance"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 53,
        "workload": 67,
        "recovery": 74,
        "sleep": 75,
        "fatigue": 57
      },
      {
        "week": "W-2",
        "riskScore": 56,
        "workload": 72,
        "recovery": 70,
        "sleep": 70,
        "fatigue": 62
      },
      {
        "week": "W-3",
        "riskScore": 60,
        "workload": 76,
        "recovery": 66,
        "sleep": 68,
        "fatigue": 66
      },
      {
        "week": "W-4",
        "riskScore": 63,
        "workload": 80,
        "recovery": 64,
        "sleep": 65,
        "fatigue": 70
      },
      {
        "week": "W-5",
        "riskScore": 65,
        "workload": 82,
        "recovery": 62,
        "sleep": 60,
        "fatigue": 72
      }
    ],
    "lastCheckInDate": "2026-09-09",
    "supportRequested": false
  },
  {
    "id": "P-1082",
    "name": "Ct. Priya Meena",
    "rank": "Constable",
    "unit": "Unit Charlie",
    "unitCode": "Charlie",
    "deploymentDays": 49,
    "deploymentStatus": "Static HQ",
    "dutyHours": 15,
    "leaveGapDays": 79,
    "leaveUtilization": 34,
    "transferFrequency": 2,
    "trainingLoad": 44,
    "workloadScore": 84,
    "sleepQuality": "Poor",
    "fatigueScore": 76,
    "recoveryScore": 29,
    "wellnessScore": 22,
    "riskScore": 74,
    "riskCategory": "CRITICAL REVIEW",
    "riskTrend": "Increasing",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Recovery Deficit"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 62,
        "workload": 69,
        "recovery": 41,
        "sleep": 75,
        "fatigue": 61
      },
      {
        "week": "W-2",
        "riskScore": 65,
        "workload": 74,
        "recovery": 37,
        "sleep": 70,
        "fatigue": 66
      },
      {
        "week": "W-3",
        "riskScore": 69,
        "workload": 78,
        "recovery": 33,
        "sleep": 68,
        "fatigue": 70
      },
      {
        "week": "W-4",
        "riskScore": 72,
        "workload": 82,
        "recovery": 31,
        "sleep": 65,
        "fatigue": 74
      },
      {
        "week": "W-5",
        "riskScore": 74,
        "workload": 84,
        "recovery": 29,
        "sleep": 35,
        "fatigue": 76
      }
    ],
    "lastCheckInDate": "2026-09-08",
    "supportRequested": true
  },
  {
    "id": "P-1083",
    "name": "HC Vikram Chauhan",
    "rank": "Head Constable",
    "unit": "Unit Delta",
    "unitCode": "Delta",
    "deploymentDays": 21,
    "deploymentStatus": "Transit / R&R",
    "dutyHours": 10,
    "leaveGapDays": 26,
    "leaveUtilization": 66,
    "transferFrequency": 3,
    "trainingLoad": 41,
    "workloadScore": 46,
    "sleepQuality": "Good",
    "fatigueScore": 31,
    "recoveryScore": 81,
    "wellnessScore": 84,
    "riskScore": 29,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 22,
    "history": [
      {
        "week": "W-1",
        "riskScore": 17,
        "workload": 31,
        "recovery": 93,
        "sleep": 75,
        "fatigue": 16
      },
      {
        "week": "W-2",
        "riskScore": 20,
        "workload": 36,
        "recovery": 89,
        "sleep": 70,
        "fatigue": 21
      },
      {
        "week": "W-3",
        "riskScore": 24,
        "workload": 40,
        "recovery": 85,
        "sleep": 68,
        "fatigue": 25
      },
      {
        "week": "W-4",
        "riskScore": 27,
        "workload": 44,
        "recovery": 83,
        "sleep": 65,
        "fatigue": 29
      },
      {
        "week": "W-5",
        "riskScore": 29,
        "workload": 46,
        "recovery": 81,
        "sleep": 80,
        "fatigue": 31
      }
    ],
    "lastCheckInDate": "2026-09-07",
    "supportRequested": false
  },
  {
    "id": "P-1084",
    "name": "HC Suresh Pandey",
    "rank": "Head Constable",
    "unit": "Unit Echo",
    "unitCode": "Echo",
    "deploymentDays": 13,
    "deploymentStatus": "Internal Security",
    "dutyHours": 9,
    "leaveGapDays": 43,
    "leaveUtilization": 83,
    "transferFrequency": 2,
    "trainingLoad": 58,
    "workloadScore": 38,
    "sleepQuality": "Good",
    "fatigueScore": 23,
    "recoveryScore": 73,
    "wellnessScore": 79,
    "riskScore": 22,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 26,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 25,
        "recovery": 85,
        "sleep": 75,
        "fatigue": 15
      },
      {
        "week": "W-2",
        "riskScore": 16,
        "workload": 28,
        "recovery": 81,
        "sleep": 70,
        "fatigue": 20
      },
      {
        "week": "W-3",
        "riskScore": 18,
        "workload": 32,
        "recovery": 77,
        "sleep": 68,
        "fatigue": 22
      },
      {
        "week": "W-4",
        "riskScore": 20,
        "workload": 36,
        "recovery": 75,
        "sleep": 65,
        "fatigue": 24
      },
      {
        "week": "W-5",
        "riskScore": 22,
        "workload": 38,
        "recovery": 73,
        "sleep": 80,
        "fatigue": 23
      }
    ],
    "lastCheckInDate": "2026-09-06",
    "supportRequested": false
  },
  {
    "id": "P-1085",
    "name": "ASI Manoj Tiwari",
    "rank": "ASI",
    "unit": "Unit Alpha",
    "unitCode": "Alpha",
    "deploymentDays": 25,
    "deploymentStatus": "Active Field",
    "dutyHours": 10.5,
    "leaveGapDays": 60,
    "leaveUtilization": 53,
    "transferFrequency": 1,
    "trainingLoad": 35,
    "workloadScore": 59,
    "sleepQuality": "Fair",
    "fatigueScore": 51,
    "recoveryScore": 67,
    "wellnessScore": 60,
    "riskScore": 45,
    "riskCategory": "WATCH",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 33,
        "workload": 44,
        "recovery": 79,
        "sleep": 75,
        "fatigue": 36
      },
      {
        "week": "W-2",
        "riskScore": 36,
        "workload": 49,
        "recovery": 75,
        "sleep": 70,
        "fatigue": 41
      },
      {
        "week": "W-3",
        "riskScore": 40,
        "workload": 53,
        "recovery": 71,
        "sleep": 68,
        "fatigue": 45
      },
      {
        "week": "W-4",
        "riskScore": 43,
        "workload": 57,
        "recovery": 69,
        "sleep": 65,
        "fatigue": 49
      },
      {
        "week": "W-5",
        "riskScore": 45,
        "workload": 59,
        "recovery": 67,
        "sleep": 60,
        "fatigue": 51
      }
    ],
    "lastCheckInDate": "2026-09-10",
    "supportRequested": false
  },
  {
    "id": "P-1086",
    "name": "SI Deepak Kaur",
    "rank": "Sub-Inspector",
    "unit": "Unit Bravo",
    "unitCode": "Bravo",
    "deploymentDays": 27,
    "deploymentStatus": "High Altitude / Border",
    "dutyHours": 9.5,
    "leaveGapDays": 52,
    "leaveUtilization": 50,
    "transferFrequency": 3,
    "trainingLoad": 52,
    "workloadScore": 58,
    "sleepQuality": "Fair",
    "fatigueScore": 50,
    "recoveryScore": 66,
    "wellnessScore": 60,
    "riskScore": 46,
    "riskCategory": "WATCH",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 44,
    "history": [
      {
        "week": "W-1",
        "riskScore": 34,
        "workload": 43,
        "recovery": 78,
        "sleep": 75,
        "fatigue": 35
      },
      {
        "week": "W-2",
        "riskScore": 37,
        "workload": 48,
        "recovery": 74,
        "sleep": 70,
        "fatigue": 40
      },
      {
        "week": "W-3",
        "riskScore": 41,
        "workload": 52,
        "recovery": 70,
        "sleep": 68,
        "fatigue": 44
      },
      {
        "week": "W-4",
        "riskScore": 44,
        "workload": 56,
        "recovery": 68,
        "sleep": 65,
        "fatigue": 48
      },
      {
        "week": "W-5",
        "riskScore": 46,
        "workload": 58,
        "recovery": 66,
        "sleep": 60,
        "fatigue": 50
      }
    ],
    "lastCheckInDate": "2026-09-09",
    "supportRequested": false
  },
  {
    "id": "P-1087",
    "name": "Insp. Anil Rathore",
    "rank": "Inspector",
    "unit": "Unit Charlie",
    "unitCode": "Charlie",
    "deploymentDays": 40,
    "deploymentStatus": "Static HQ",
    "dutyHours": 12,
    "leaveGapDays": 59,
    "leaveUtilization": 39,
    "transferFrequency": 2,
    "trainingLoad": 69,
    "workloadScore": 84,
    "sleepQuality": "Fair",
    "fatigueScore": 74,
    "recoveryScore": 64,
    "wellnessScore": 58,
    "riskScore": 67,
    "riskCategory": "ELEVATED",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Physiological Balance"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 55,
        "workload": 69,
        "recovery": 76,
        "sleep": 75,
        "fatigue": 59
      },
      {
        "week": "W-2",
        "riskScore": 58,
        "workload": 74,
        "recovery": 72,
        "sleep": 70,
        "fatigue": 64
      },
      {
        "week": "W-3",
        "riskScore": 62,
        "workload": 78,
        "recovery": 68,
        "sleep": 68,
        "fatigue": 68
      },
      {
        "week": "W-4",
        "riskScore": 65,
        "workload": 82,
        "recovery": 66,
        "sleep": 65,
        "fatigue": 72
      },
      {
        "week": "W-5",
        "riskScore": 67,
        "workload": 84,
        "recovery": 64,
        "sleep": 60,
        "fatigue": 74
      }
    ],
    "lastCheckInDate": "2026-09-08",
    "supportRequested": false
  },
  {
    "id": "P-1088",
    "name": "Ct. Sunil Das",
    "rank": "Constable",
    "unit": "Unit Delta",
    "unitCode": "Delta",
    "deploymentDays": 51,
    "deploymentStatus": "Transit / R&R",
    "dutyHours": 13.5,
    "leaveGapDays": 81,
    "leaveUtilization": 36,
    "transferFrequency": 1,
    "trainingLoad": 46,
    "workloadScore": 86,
    "sleepQuality": "Poor",
    "fatigueScore": 78,
    "recoveryScore": 31,
    "wellnessScore": 24,
    "riskScore": 76,
    "riskCategory": "CRITICAL REVIEW",
    "riskTrend": "Increasing",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Recovery Deficit"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 64,
        "workload": 71,
        "recovery": 43,
        "sleep": 75,
        "fatigue": 63
      },
      {
        "week": "W-2",
        "riskScore": 67,
        "workload": 76,
        "recovery": 39,
        "sleep": 70,
        "fatigue": 68
      },
      {
        "week": "W-3",
        "riskScore": 71,
        "workload": 80,
        "recovery": 35,
        "sleep": 68,
        "fatigue": 72
      },
      {
        "week": "W-4",
        "riskScore": 74,
        "workload": 84,
        "recovery": 33,
        "sleep": 65,
        "fatigue": 76
      },
      {
        "week": "W-5",
        "riskScore": 76,
        "workload": 86,
        "recovery": 31,
        "sleep": 35,
        "fatigue": 78
      }
    ],
    "lastCheckInDate": "2026-09-07",
    "supportRequested": true
  },
  {
    "id": "P-1089",
    "name": "Ct. Ramesh Koli",
    "rank": "Constable",
    "unit": "Unit Echo",
    "unitCode": "Echo",
    "deploymentDays": 23,
    "deploymentStatus": "Internal Security",
    "dutyHours": 9,
    "leaveGapDays": 28,
    "leaveUtilization": 68,
    "transferFrequency": 2,
    "trainingLoad": 43,
    "workloadScore": 48,
    "sleepQuality": "Good",
    "fatigueScore": 33,
    "recoveryScore": 83,
    "wellnessScore": 85,
    "riskScore": 19,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 15,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 33,
        "recovery": 95,
        "sleep": 75,
        "fatigue": 18
      },
      {
        "week": "W-2",
        "riskScore": 16,
        "workload": 38,
        "recovery": 91,
        "sleep": 70,
        "fatigue": 23
      },
      {
        "week": "W-3",
        "riskScore": 18,
        "workload": 42,
        "recovery": 87,
        "sleep": 68,
        "fatigue": 27
      },
      {
        "week": "W-4",
        "riskScore": 18,
        "workload": 46,
        "recovery": 85,
        "sleep": 65,
        "fatigue": 31
      },
      {
        "week": "W-5",
        "riskScore": 19,
        "workload": 48,
        "recovery": 83,
        "sleep": 80,
        "fatigue": 33
      }
    ],
    "lastCheckInDate": "2026-09-06",
    "supportRequested": false
  },
  {
    "id": "P-1090",
    "name": "Ct. Kavita Kumar",
    "rank": "Constable",
    "unit": "Unit Alpha",
    "unitCode": "Alpha",
    "deploymentDays": 15,
    "deploymentStatus": "Active Field",
    "dutyHours": 8,
    "leaveGapDays": 45,
    "leaveUtilization": 85,
    "transferFrequency": 1,
    "trainingLoad": 60,
    "workloadScore": 40,
    "sleepQuality": "Good",
    "fatigueScore": 25,
    "recoveryScore": 75,
    "wellnessScore": 80,
    "riskScore": 24,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 26,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 25,
        "recovery": 87,
        "sleep": 75,
        "fatigue": 15
      },
      {
        "week": "W-2",
        "riskScore": 16,
        "workload": 30,
        "recovery": 83,
        "sleep": 70,
        "fatigue": 20
      },
      {
        "week": "W-3",
        "riskScore": 19,
        "workload": 34,
        "recovery": 79,
        "sleep": 68,
        "fatigue": 22
      },
      {
        "week": "W-4",
        "riskScore": 22,
        "workload": 38,
        "recovery": 77,
        "sleep": 65,
        "fatigue": 24
      },
      {
        "week": "W-5",
        "riskScore": 24,
        "workload": 40,
        "recovery": 75,
        "sleep": 80,
        "fatigue": 25
      }
    ],
    "lastCheckInDate": "2026-09-10",
    "supportRequested": false
  },
  {
    "id": "P-1091",
    "name": "HC Neeraj Rawat",
    "rank": "Head Constable",
    "unit": "Unit Bravo",
    "unitCode": "Bravo",
    "deploymentDays": 27,
    "deploymentStatus": "High Altitude / Border",
    "dutyHours": 10.5,
    "leaveGapDays": 62,
    "leaveUtilization": 55,
    "transferFrequency": 3,
    "trainingLoad": 37,
    "workloadScore": 61,
    "sleepQuality": "Fair",
    "fatigueScore": 53,
    "recoveryScore": 69,
    "wellnessScore": 61,
    "riskScore": 47,
    "riskCategory": "WATCH",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 35,
        "workload": 46,
        "recovery": 81,
        "sleep": 75,
        "fatigue": 38
      },
      {
        "week": "W-2",
        "riskScore": 38,
        "workload": 51,
        "recovery": 77,
        "sleep": 70,
        "fatigue": 43
      },
      {
        "week": "W-3",
        "riskScore": 42,
        "workload": 55,
        "recovery": 73,
        "sleep": 68,
        "fatigue": 47
      },
      {
        "week": "W-4",
        "riskScore": 45,
        "workload": 59,
        "recovery": 71,
        "sleep": 65,
        "fatigue": 51
      },
      {
        "week": "W-5",
        "riskScore": 47,
        "workload": 61,
        "recovery": 69,
        "sleep": 60,
        "fatigue": 53
      }
    ],
    "lastCheckInDate": "2026-09-09",
    "supportRequested": false
  },
  {
    "id": "P-1092",
    "name": "HC Pooja Meena",
    "rank": "Head Constable",
    "unit": "Unit Charlie",
    "unitCode": "Charlie",
    "deploymentDays": 29,
    "deploymentStatus": "Static HQ",
    "dutyHours": 9.5,
    "leaveGapDays": 54,
    "leaveUtilization": 52,
    "transferFrequency": 2,
    "trainingLoad": 54,
    "workloadScore": 60,
    "sleepQuality": "Fair",
    "fatigueScore": 52,
    "recoveryScore": 68,
    "wellnessScore": 61,
    "riskScore": 32,
    "riskCategory": "WATCH",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 28,
    "history": [
      {
        "week": "W-1",
        "riskScore": 20,
        "workload": 45,
        "recovery": 80,
        "sleep": 75,
        "fatigue": 37
      },
      {
        "week": "W-2",
        "riskScore": 23,
        "workload": 50,
        "recovery": 76,
        "sleep": 70,
        "fatigue": 42
      },
      {
        "week": "W-3",
        "riskScore": 27,
        "workload": 54,
        "recovery": 72,
        "sleep": 68,
        "fatigue": 46
      },
      {
        "week": "W-4",
        "riskScore": 30,
        "workload": 58,
        "recovery": 70,
        "sleep": 65,
        "fatigue": 50
      },
      {
        "week": "W-5",
        "riskScore": 32,
        "workload": 60,
        "recovery": 68,
        "sleep": 60,
        "fatigue": 52
      }
    ],
    "lastCheckInDate": "2026-09-08",
    "supportRequested": false
  },
  {
    "id": "P-1093",
    "name": "ASI Sandeep Chauhan",
    "rank": "ASI",
    "unit": "Unit Delta",
    "unitCode": "Delta",
    "deploymentDays": 42,
    "deploymentStatus": "Transit / R&R",
    "dutyHours": 11.5,
    "leaveGapDays": 61,
    "leaveUtilization": 41,
    "transferFrequency": 1,
    "trainingLoad": 31,
    "workloadScore": 66,
    "sleepQuality": "Fair",
    "fatigueScore": 56,
    "recoveryScore": 46,
    "wellnessScore": 48,
    "riskScore": 53,
    "riskCategory": "ELEVATED",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Physiological Balance"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 41,
        "workload": 51,
        "recovery": 58,
        "sleep": 75,
        "fatigue": 41
      },
      {
        "week": "W-2",
        "riskScore": 44,
        "workload": 56,
        "recovery": 54,
        "sleep": 70,
        "fatigue": 46
      },
      {
        "week": "W-3",
        "riskScore": 48,
        "workload": 60,
        "recovery": 50,
        "sleep": 68,
        "fatigue": 50
      },
      {
        "week": "W-4",
        "riskScore": 51,
        "workload": 64,
        "recovery": 48,
        "sleep": 65,
        "fatigue": 54
      },
      {
        "week": "W-5",
        "riskScore": 53,
        "workload": 66,
        "recovery": 46,
        "sleep": 60,
        "fatigue": 56
      }
    ],
    "lastCheckInDate": "2026-09-07",
    "supportRequested": false
  },
  {
    "id": "P-1094",
    "name": "SI Rakesh Pandey",
    "rank": "Sub-Inspector",
    "unit": "Unit Echo",
    "unitCode": "Echo",
    "deploymentDays": 53,
    "deploymentStatus": "Internal Security",
    "dutyHours": 12,
    "leaveGapDays": 83,
    "leaveUtilization": 38,
    "transferFrequency": 3,
    "trainingLoad": 48,
    "workloadScore": 88,
    "sleepQuality": "Poor",
    "fatigueScore": 80,
    "recoveryScore": 33,
    "wellnessScore": 25,
    "riskScore": 78,
    "riskCategory": "CRITICAL REVIEW",
    "riskTrend": "Increasing",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Recovery Deficit"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 66,
        "workload": 73,
        "recovery": 45,
        "sleep": 75,
        "fatigue": 65
      },
      {
        "week": "W-2",
        "riskScore": 69,
        "workload": 78,
        "recovery": 41,
        "sleep": 70,
        "fatigue": 70
      },
      {
        "week": "W-3",
        "riskScore": 73,
        "workload": 82,
        "recovery": 37,
        "sleep": 68,
        "fatigue": 74
      },
      {
        "week": "W-4",
        "riskScore": 76,
        "workload": 86,
        "recovery": 35,
        "sleep": 65,
        "fatigue": 78
      },
      {
        "week": "W-5",
        "riskScore": 78,
        "workload": 88,
        "recovery": 33,
        "sleep": 35,
        "fatigue": 80
      }
    ],
    "lastCheckInDate": "2026-09-06",
    "supportRequested": true
  },
  {
    "id": "P-1095",
    "name": "Insp. Rohit Tiwari",
    "rank": "Inspector",
    "unit": "Unit Alpha",
    "unitCode": "Alpha",
    "deploymentDays": 25,
    "deploymentStatus": "Active Field",
    "dutyHours": 8,
    "leaveGapDays": 30,
    "leaveUtilization": 70,
    "transferFrequency": 1,
    "trainingLoad": 45,
    "workloadScore": 50,
    "sleepQuality": "Good",
    "fatigueScore": 35,
    "recoveryScore": 85,
    "wellnessScore": 86,
    "riskScore": 21,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 24,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 35,
        "recovery": 95,
        "sleep": 75,
        "fatigue": 20
      },
      {
        "week": "W-2",
        "riskScore": 16,
        "workload": 40,
        "recovery": 92,
        "sleep": 70,
        "fatigue": 25
      },
      {
        "week": "W-3",
        "riskScore": 18,
        "workload": 44,
        "recovery": 89,
        "sleep": 68,
        "fatigue": 29
      },
      {
        "week": "W-4",
        "riskScore": 19,
        "workload": 48,
        "recovery": 87,
        "sleep": 65,
        "fatigue": 33
      },
      {
        "week": "W-5",
        "riskScore": 21,
        "workload": 50,
        "recovery": 85,
        "sleep": 80,
        "fatigue": 35
      }
    ],
    "lastCheckInDate": "2026-09-10",
    "supportRequested": false
  },
  {
    "id": "P-1096",
    "name": "Ct. Dinesh Kaur",
    "rank": "Constable",
    "unit": "Unit Bravo",
    "unitCode": "Bravo",
    "deploymentDays": 17,
    "deploymentStatus": "High Altitude / Border",
    "dutyHours": 10,
    "leaveGapDays": 47,
    "leaveUtilization": 87,
    "transferFrequency": 3,
    "trainingLoad": 62,
    "workloadScore": 42,
    "sleepQuality": "Good",
    "fatigueScore": 27,
    "recoveryScore": 77,
    "wellnessScore": 81,
    "riskScore": 26,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 26,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 27,
        "recovery": 89,
        "sleep": 75,
        "fatigue": 15
      },
      {
        "week": "W-2",
        "riskScore": 17,
        "workload": 32,
        "recovery": 85,
        "sleep": 70,
        "fatigue": 20
      },
      {
        "week": "W-3",
        "riskScore": 21,
        "workload": 36,
        "recovery": 81,
        "sleep": 68,
        "fatigue": 22
      },
      {
        "week": "W-4",
        "riskScore": 24,
        "workload": 40,
        "recovery": 79,
        "sleep": 65,
        "fatigue": 25
      },
      {
        "week": "W-5",
        "riskScore": 26,
        "workload": 42,
        "recovery": 77,
        "sleep": 80,
        "fatigue": 27
      }
    ],
    "lastCheckInDate": "2026-09-09",
    "supportRequested": false
  },
  {
    "id": "P-1097",
    "name": "Ct. Ajay Rathore",
    "rank": "Constable",
    "unit": "Unit Charlie",
    "unitCode": "Charlie",
    "deploymentDays": 29,
    "deploymentStatus": "Static HQ",
    "dutyHours": 10.5,
    "leaveGapDays": 64,
    "leaveUtilization": 57,
    "transferFrequency": 2,
    "trainingLoad": 39,
    "workloadScore": 63,
    "sleepQuality": "Fair",
    "fatigueScore": 55,
    "recoveryScore": 71,
    "wellnessScore": 63,
    "riskScore": 33,
    "riskCategory": "WATCH",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 30,
    "history": [
      {
        "week": "W-1",
        "riskScore": 21,
        "workload": 48,
        "recovery": 83,
        "sleep": 75,
        "fatigue": 40
      },
      {
        "week": "W-2",
        "riskScore": 24,
        "workload": 53,
        "recovery": 79,
        "sleep": 70,
        "fatigue": 45
      },
      {
        "week": "W-3",
        "riskScore": 28,
        "workload": 57,
        "recovery": 75,
        "sleep": 68,
        "fatigue": 49
      },
      {
        "week": "W-4",
        "riskScore": 31,
        "workload": 61,
        "recovery": 73,
        "sleep": 65,
        "fatigue": 53
      },
      {
        "week": "W-5",
        "riskScore": 33,
        "workload": 63,
        "recovery": 71,
        "sleep": 60,
        "fatigue": 55
      }
    ],
    "lastCheckInDate": "2026-09-08",
    "supportRequested": false
  },
  {
    "id": "P-1098",
    "name": "Ct. Vijay Das",
    "rank": "Constable",
    "unit": "Unit Delta",
    "unitCode": "Delta",
    "deploymentDays": 42,
    "deploymentStatus": "Transit / R&R",
    "dutyHours": 11.5,
    "leaveGapDays": 71,
    "leaveUtilization": 51,
    "transferFrequency": 1,
    "trainingLoad": 56,
    "workloadScore": 71,
    "sleepQuality": "Fair",
    "fatigueScore": 61,
    "recoveryScore": 51,
    "wellnessScore": 51,
    "riskScore": 54,
    "riskCategory": "ELEVATED",
    "riskTrend": "Increasing",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Physiological Balance"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 42,
        "workload": 56,
        "recovery": 63,
        "sleep": 75,
        "fatigue": 46
      },
      {
        "week": "W-2",
        "riskScore": 45,
        "workload": 61,
        "recovery": 59,
        "sleep": 70,
        "fatigue": 51
      },
      {
        "week": "W-3",
        "riskScore": 49,
        "workload": 65,
        "recovery": 55,
        "sleep": 68,
        "fatigue": 55
      },
      {
        "week": "W-4",
        "riskScore": 52,
        "workload": 69,
        "recovery": 53,
        "sleep": 65,
        "fatigue": 59
      },
      {
        "week": "W-5",
        "riskScore": 54,
        "workload": 71,
        "recovery": 51,
        "sleep": 60,
        "fatigue": 61
      }
    ],
    "lastCheckInDate": "2026-09-07",
    "supportRequested": false
  },
  {
    "id": "P-1099",
    "name": "HC Arun Koli",
    "rank": "Head Constable",
    "unit": "Unit Echo",
    "unitCode": "Echo",
    "deploymentDays": 44,
    "deploymentStatus": "Internal Security",
    "dutyHours": 11,
    "leaveGapDays": 63,
    "leaveUtilization": 43,
    "transferFrequency": 3,
    "trainingLoad": 33,
    "workloadScore": 68,
    "sleepQuality": "Fair",
    "fatigueScore": 58,
    "recoveryScore": 48,
    "wellnessScore": 49,
    "riskScore": 55,
    "riskCategory": "ELEVATED",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Deployment Duration",
      "Workload Pressure",
      "Physiological Balance"
    ],
    "baselineRisk": 45,
    "history": [
      {
        "week": "W-1",
        "riskScore": 43,
        "workload": 53,
        "recovery": 60,
        "sleep": 75,
        "fatigue": 43
      },
      {
        "week": "W-2",
        "riskScore": 46,
        "workload": 58,
        "recovery": 56,
        "sleep": 70,
        "fatigue": 48
      },
      {
        "week": "W-3",
        "riskScore": 50,
        "workload": 62,
        "recovery": 52,
        "sleep": 68,
        "fatigue": 52
      },
      {
        "week": "W-4",
        "riskScore": 53,
        "workload": 66,
        "recovery": 50,
        "sleep": 65,
        "fatigue": 56
      },
      {
        "week": "W-5",
        "riskScore": 55,
        "workload": 68,
        "recovery": 48,
        "sleep": 60,
        "fatigue": 58
      }
    ],
    "lastCheckInDate": "2026-09-06",
    "supportRequested": false
  },
  {
    "id": "P-1100",
    "name": "HC Gopal Kumar",
    "rank": "Head Constable",
    "unit": "Unit Alpha",
    "unitCode": "Alpha",
    "deploymentDays": 10,
    "deploymentStatus": "Active Field",
    "dutyHours": 8,
    "leaveGapDays": 15,
    "leaveUtilization": 55,
    "transferFrequency": 1,
    "trainingLoad": 30,
    "workloadScore": 35,
    "sleepQuality": "Good",
    "fatigueScore": 20,
    "recoveryScore": 70,
    "wellnessScore": 77,
    "riskScore": 18,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 22,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 25,
        "recovery": 82,
        "sleep": 75,
        "fatigue": 15
      },
      {
        "week": "W-2",
        "riskScore": 16,
        "workload": 28,
        "recovery": 78,
        "sleep": 70,
        "fatigue": 20
      },
      {
        "week": "W-3",
        "riskScore": 18,
        "workload": 30,
        "recovery": 74,
        "sleep": 68,
        "fatigue": 22
      },
      {
        "week": "W-4",
        "riskScore": 18,
        "workload": 33,
        "recovery": 72,
        "sleep": 65,
        "fatigue": 24
      },
      {
        "week": "W-5",
        "riskScore": 18,
        "workload": 35,
        "recovery": 70,
        "sleep": 80,
        "fatigue": 20
      }
    ],
    "lastCheckInDate": "2026-09-10",
    "supportRequested": false
  },
  {
    "id": "P-1101",
    "name": "ASI Santosh Rawat",
    "rank": "ASI",
    "unit": "Unit Bravo",
    "unitCode": "Bravo",
    "deploymentDays": 27,
    "deploymentStatus": "High Altitude / Border",
    "dutyHours": 10,
    "leaveGapDays": 32,
    "leaveUtilization": 72,
    "transferFrequency": 3,
    "trainingLoad": 47,
    "workloadScore": 52,
    "sleepQuality": "Good",
    "fatigueScore": 37,
    "recoveryScore": 87,
    "wellnessScore": 87,
    "riskScore": 23,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 24,
    "history": [
      {
        "week": "W-1",
        "riskScore": 15,
        "workload": 37,
        "recovery": 95,
        "sleep": 75,
        "fatigue": 22
      },
      {
        "week": "W-2",
        "riskScore": 16,
        "workload": 42,
        "recovery": 92,
        "sleep": 70,
        "fatigue": 27
      },
      {
        "week": "W-3",
        "riskScore": 18,
        "workload": 46,
        "recovery": 90,
        "sleep": 68,
        "fatigue": 31
      },
      {
        "week": "W-4",
        "riskScore": 21,
        "workload": 50,
        "recovery": 88,
        "sleep": 65,
        "fatigue": 35
      },
      {
        "week": "W-5",
        "riskScore": 23,
        "workload": 52,
        "recovery": 87,
        "sleep": 80,
        "fatigue": 37
      }
    ],
    "lastCheckInDate": "2026-09-09",
    "supportRequested": false
  },
  {
    "id": "P-1102",
    "name": "SI Mahesh Meena",
    "rank": "Sub-Inspector",
    "unit": "Unit Charlie",
    "unitCode": "Charlie",
    "deploymentDays": 19,
    "deploymentStatus": "Static HQ",
    "dutyHours": 9,
    "leaveGapDays": 49,
    "leaveUtilization": 89,
    "transferFrequency": 2,
    "trainingLoad": 64,
    "workloadScore": 44,
    "sleepQuality": "Good",
    "fatigueScore": 29,
    "recoveryScore": 79,
    "wellnessScore": 82,
    "riskScore": 28,
    "riskCategory": "STABLE",
    "riskTrend": "Stable",
    "primaryIndicators": [
      "Standard Rotation",
      "Leave Utilization",
      "Physiological Balance"
    ],
    "baselineRisk": 26,
    "history": [
      {
        "week": "W-1",
        "riskScore": 16,
        "workload": 29,
        "recovery": 91,
        "sleep": 75,
        "fatigue": 15
      },
      {
        "week": "W-2",
        "riskScore": 19,
        "workload": 34,
        "recovery": 87,
        "sleep": 70,
        "fatigue": 20
      },
      {
        "week": "W-3",
        "riskScore": 23,
        "workload": 38,
        "recovery": 83,
        "sleep": 68,
        "fatigue": 23
      },
      {
        "week": "W-4",
        "riskScore": 26,
        "workload": 42,
        "recovery": 81,
        "sleep": 65,
        "fatigue": 27
      },
      {
        "week": "W-5",
        "riskScore": 28,
        "workload": 44,
        "recovery": 79,
        "sleep": 80,
        "fatigue": 29
      }
    ],
    "lastCheckInDate": "2026-09-08",
    "supportRequested": false
  }
];
