import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Role,
  Personnel,
  Intervention,
  AuditLog,
  NotificationItem,
  UnitWorkloadStats,
  WellnessCheckinData
} from '../types';
import { SYNTHETIC_PERSONNEL } from '../data/syntheticPersonnel';
import { CRPF_UNITS } from '../data/crpfUnits';
import { calculateHybridRisk } from '../engine/hybridRiskEngine';

interface AppContextType {
  role: Role;
  setRole: (role: Role) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  currentPersonnelId: string;
  setCurrentPersonnelId: (id: string) => void;
  personnelList: Personnel[];
  selectedPersonnel: Personnel | null;
  setSelectedPersonnel: (p: Personnel | null) => void;
  interventions: Intervention[];
  auditLogs: AuditLog[];
  notifications: NotificationItem[];
  unitStats: UnitWorkloadStats[];
  submitCheckIn: (personnelId: string, data: WellnessCheckinData) => void;
  recordIntervention: (data: Omit<Intervention, 'id'>) => void;
  updateInterventionStatus: (id: string, status: Intervention['status'], outcome?: string) => void;
  importCsvPersonnel: (newPersonnel: Personnel[]) => { success: boolean; count: number; message: string };
  logAudit: (action: string, resource: string, status?: 'SUCCESS' | 'FLAGGED' | 'DENIED') => void;
  markNotificationRead: (id: string) => void;
  clearAllNotifications: () => void;
  isSihDemoOpen: boolean;
  sihDemoStep: number;
  startSihDemo: () => void;
  closeSihDemo: () => void;
  setSihDemoStep: (step: number) => void;
  resetToDefaultData: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const INITIAL_INTERVENTIONS: Intervention[] = [
  {
    id: 'INT-2026-001',
    personnelId: 'P-1055',
    personnelName: 'Ct. Vikram Rawat',
    unit: 'Unit Alpha',
    officerName: 'Insp. R. K. Sharma (Welfare Officer)',
    officerRole: 'Unit Welfare Officer',
    date: '2026-08-28',
    type: 'Workload review',
    status: 'Completed',
    followUpDate: '2026-09-08',
    notes: 'Rotated from continuous field cordon duties to base transit logistics. 10-day restorative rest granted.',
    outcome: 'Welfare-risk score improved from 68 to 34. Positive sleep restoration observed.'
  },
  {
    id: 'INT-2026-002',
    personnelId: 'P-1024',
    personnelName: 'Ct. Rajesh Kumar',
    unit: 'Unit Alpha',
    officerName: 'Insp. R. K. Sharma (Welfare Officer)',
    officerRole: 'Unit Welfare Officer',
    date: '2026-09-10',
    type: 'Confidential welfare check-in',
    status: 'Scheduled',
    followUpDate: '2026-09-13',
    notes: 'Voluntary check-in indicated elevated workload strain and sleep disruption after 42 days field deployment. Urgent rotation review scheduled.',
    outcome: 'Pending initial consultation.'
  }
];

const INITIAL_AUDIT_LOGS: AuditLog[] = [
  {
    id: 'AUD-8891',
    timestamp: '2026-09-10 09:16:04',
    userRole: 'Welfare Officer (Insp. R. K. Sharma)',
    officerId: 'OFF-402',
    action: 'VIEW_PERSONNEL_WELFARE_PROFILE',
    resource: 'Personnel Record P-1024',
    status: 'SUCCESS'
  },
  {
    id: 'AUD-8890',
    timestamp: '2026-09-10 08:30:12',
    userRole: 'Personnel (Ct. Rajesh Kumar)',
    officerId: 'P-1024',
    action: 'VOLUNTARY_CHECKIN_SUBMISSION',
    resource: 'Daily Wellness Checkin Module',
    status: 'SUCCESS'
  },
  {
    id: 'AUD-8889',
    timestamp: '2026-09-09 16:45:20',
    userRole: 'Commander (DIG Ops)',
    officerId: 'CMD-101',
    action: 'VIEW_AGGREGATE_UNIT_WORKLOAD',
    resource: 'Unit Alpha Workload Heatmap',
    status: 'SUCCESS'
  },
  {
    id: 'AUD-8888',
    timestamp: '2026-09-09 14:20:11',
    userRole: 'Welfare Officer',
    officerId: 'OFF-402',
    action: 'RECORD_INTERVENTION',
    resource: 'Intervention INT-2026-002 (P-1024)',
    status: 'SUCCESS'
  }
];

const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'NOTIF-01',
    timestamp: '10 mins ago',
    title: 'Elevated Welfare-Risk Pattern Detected',
    message: 'Personnel P-1024 (Ct. Rajesh Kumar) reached risk index 72. Primary drivers: Continuous deployment (42 days) & recovery deficit. Human review recommended.',
    severity: 'alert',
    targetRole: 'officer',
    personnelId: 'P-1024',
    read: false
  },
  {
    id: 'NOTIF-02',
    timestamp: '1 hour ago',
    title: 'Workload Imbalance Alert',
    message: 'Unit Alpha operational concentration stands at 84% (exceeds recommended 70% threshold). Rebalancing review recommended.',
    severity: 'warning',
    targetRole: 'commander',
    read: false
  },
  {
    id: 'NOTIF-03',
    timestamp: 'Today 08:00',
    title: 'Daily Wellness Check-In Ready',
    message: 'Take 45 seconds to record today\'s optional voluntary wellness check-in.',
    severity: 'info',
    targetRole: 'personnel',
    personnelId: 'P-1024',
    read: false
  }
];

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRoleState] = useState<Role>('officer');
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [currentPersonnelId, setCurrentPersonnelId] = useState<string>('P-1024');
  const [personnelList, setPersonnelList] = useState<Personnel[]>(() => {
    const saved = localStorage.getItem('forcewell_personnel');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return SYNTHETIC_PERSONNEL;
  });

  const [selectedPersonnel, setSelectedPersonnel] = useState<Personnel | null>(() => {
    return SYNTHETIC_PERSONNEL.find(p => p.id === 'P-1024') || SYNTHETIC_PERSONNEL[0];
  });

  const [interventions, setInterventions] = useState<Intervention[]>(() => {
    const saved = localStorage.getItem('forcewell_interventions');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return INITIAL_INTERVENTIONS;
  });

  const [auditLogs, setAuditLogs] = useState<AuditLog[]>(() => {
    const saved = localStorage.getItem('forcewell_audit_logs');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return INITIAL_AUDIT_LOGS;
  });

  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);
  const [unitStats] = useState<UnitWorkloadStats[]>(CRPF_UNITS);

  // SIH Guided Demo Tour State
  const [isSihDemoOpen, setIsSihDemoOpen] = useState<boolean>(false);
  const [sihDemoStep, setSihDemoStep] = useState<number>(0);

  // Save to localStorage when updated
  useEffect(() => {
    localStorage.setItem('forcewell_personnel', JSON.stringify(personnelList));
  }, [personnelList]);

  useEffect(() => {
    localStorage.setItem('forcewell_interventions', JSON.stringify(interventions));
  }, [interventions]);

  useEffect(() => {
    localStorage.setItem('forcewell_audit_logs', JSON.stringify(auditLogs));
  }, [auditLogs]);

  // Sync selected personnel when currentPersonnelId changes
  useEffect(() => {
    const p = personnelList.find(item => item.id === currentPersonnelId);
    if (p) setSelectedPersonnel(p);
  }, [currentPersonnelId, personnelList]);

  const setRole = (newRole: Role) => {
    setRoleState(newRole);
    logAudit(`ROLE_SWITCH`, `Switched active role to ${newRole.toUpperCase()}`);
    if (newRole === 'personnel') {
      setActiveTab('home');
    } else if (newRole === 'officer') {
      setActiveTab('dashboard');
    } else {
      setActiveTab('commander-overview');
    }
  };

  const logAudit = (action: string, resource: string, status: 'SUCCESS' | 'FLAGGED' | 'DENIED' = 'SUCCESS') => {
    const newLog: AuditLog = {
      id: `AUD-${Math.floor(1000 + Math.random() * 9000)}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
      userRole: role === 'personnel' ? `Personnel (${currentPersonnelId})` : role === 'officer' ? 'Welfare Officer (Insp. R. K. Sharma)' : 'Commander (DIG Ops)',
      officerId: role === 'personnel' ? currentPersonnelId : role === 'officer' ? 'OFF-402' : 'CMD-101',
      action,
      resource,
      status
    };
    setAuditLogs(prev => [newLog, ...prev]);
  };

  const submitCheckIn = (personnelId: string, data: WellnessCheckinData) => {
    setPersonnelList(prevList => {
      return prevList.map(p => {
        if (p.id !== personnelId) return p;

        // Map voluntary responses to numerical approximations
        let mappedFatigue = p.fatigueScore;
        if (data.fatigue === 'Low') mappedFatigue = 25;
        if (data.fatigue === 'Moderate') mappedFatigue = 55;
        if (data.fatigue === 'High') mappedFatigue = 80;

        let mappedRecovery = p.recoveryScore;
        if (data.recovery === 'Good') mappedRecovery = 85;
        if (data.recovery === 'Fair') mappedRecovery = 50;
        if (data.recovery === 'Poor') mappedRecovery = 25;

        let mappedWorkload = p.workloadScore;
        if (data.workload === 'Normal') mappedWorkload = 40;
        if (data.workload === 'Heavy') mappedWorkload = 70;
        if (data.workload === 'Very Heavy') mappedWorkload = 90;

        // Re-run Hybrid Risk Engine
        const prediction = calculateHybridRisk({
          deploymentDays: p.deploymentDays,
          leaveGapDays: p.leaveGapDays,
          leaveUtilization: p.leaveUtilization,
          dutyHours: p.dutyHours,
          workloadScore: mappedWorkload,
          transferFrequency: p.transferFrequency,
          trainingLoad: p.trainingLoad,
          sleepQuality: data.sleepQuality,
          fatigueScore: mappedFatigue,
          recoveryScore: mappedRecovery,
          wellnessScore: Math.round((mappedRecovery * 0.6) + (data.sleepQuality === 'Good' ? 35 : data.sleepQuality === 'Fair' ? 20 : 5))
        });

        const updatedHistory = [
          ...p.history.slice(1),
          {
            week: 'Current',
            riskScore: prediction.riskScore,
            workload: mappedWorkload,
            recovery: mappedRecovery,
            sleep: data.sleepQuality === 'Good' ? 80 : data.sleepQuality === 'Fair' ? 55 : 30,
            fatigue: mappedFatigue,
            notes: `Check-in: ${data.feeling}`
          }
        ];

        const supportRequested = data.confidentialSupport === 'Yes, request support';

        return {
          ...p,
          sleepQuality: data.sleepQuality,
          fatigueScore: mappedFatigue,
          recoveryScore: mappedRecovery,
          workloadScore: mappedWorkload,
          riskScore: prediction.riskScore,
          riskCategory: prediction.riskCategory,
          riskTrend: prediction.riskScore > p.riskScore + 3 ? 'Increasing' : prediction.riskScore < p.riskScore - 3 ? 'Decreasing' : 'Stable',
          primaryIndicators: prediction.primaryIndicators,
          history: updatedHistory,
          lastCheckInDate: new Date().toISOString().split('T')[0],
          supportRequested,
          confidentialWellnessResponses: data,
          supportRequestDetails: supportRequested ? {
            preference: 'Confidential check-in requested during voluntary wellness submission',
            urgent: prediction.riskCategory === 'CRITICAL REVIEW',
            timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16),
            status: 'Pending'
          } : p.supportRequestDetails
        };
      });
    });

    logAudit('SUBMIT_WELLNESS_CHECKIN', `Personnel ${personnelId} submitted voluntary wellness check-in`);

    // Generate welfare officer alert if critical
    if (data.confidentialSupport === 'Yes, request support') {
      const notif: NotificationItem = {
        id: `NOTIF-${Date.now()}`,
        timestamp: 'Just now',
        title: `Confidential Support Requested by ${personnelId}`,
        message: `Personnel ${personnelId} requested confidential welfare officer support via daily check-in.`,
        severity: 'alert',
        targetRole: 'officer',
        personnelId,
        read: false
      };
      setNotifications(prev => [notif, ...prev]);
    }
  };

  const recordIntervention = (data: Omit<Intervention, 'id'>) => {
    const newId = `INT-2026-${String(interventions.length + 1).padStart(3, '0')}`;
    const newIntervention: Intervention = {
      ...data,
      id: newId
    };

    setInterventions(prev => [newIntervention, ...prev]);
    logAudit('RECORD_WELFARE_INTERVENTION', `Recorded ${data.type} for ${data.personnelId} (${data.personnelName})`);

    // If intervention is recorded, update personnel's pending status
    setPersonnelList(prev => prev.map(p => {
      if (p.id === data.personnelId) {
        return {
          ...p,
          supportRequested: false,
          supportRequestDetails: p.supportRequestDetails ? {
            ...p.supportRequestDetails,
            status: 'Actioned'
          } : undefined
        };
      }
      return p;
    }));

    // Notification
    const notif: NotificationItem = {
      id: `NOTIF-${Date.now()}`,
      timestamp: 'Just now',
      title: `Welfare Intervention Logged`,
      message: `${data.type} scheduled for ${data.personnelName} (${data.personnelId}). Follow-up: ${data.followUpDate}`,
      severity: 'success',
      targetRole: 'officer',
      personnelId: data.personnelId,
      read: false
    };
    setNotifications(prev => [notif, ...prev]);
  };

  const updateInterventionStatus = (id: string, status: Intervention['status'], outcome?: string) => {
    setInterventions(prev => prev.map(i => {
      if (i.id === id) {
        return { ...i, status, outcome: outcome || i.outcome };
      }
      return i;
    }));
    logAudit('UPDATE_INTERVENTION_STATUS', `Updated intervention ${id} to ${status}`);
  };

  const importCsvPersonnel = (newRecords: Personnel[]): { success: boolean; count: number; message: string } => {
    if (!newRecords || newRecords.length === 0) {
      return { success: false, count: 0, message: 'No valid personnel records found in uploaded file.' };
    }

    setPersonnelList(prev => {
      const existingIds = new Set(prev.map(p => p.id));
      const filtered = newRecords.filter(r => !existingIds.has(r.id));
      return [...filtered, ...prev];
    });

    logAudit('CSV_DATA_IMPORT', `Ingested ${newRecords.length} records via CSV upload interface`);
    return { success: true, count: newRecords.length, message: `Successfully parsed and integrated ${newRecords.length} records into current session.` };
  };

  const markNotificationRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const clearAllNotifications = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const startSihDemo = () => {
    setIsSihDemoOpen(true);
    setSihDemoStep(0);
    logAudit('SIH_DEMO_LAUNCH', 'Initiated 3-Minute SIH Presentation Tour');
  };

  const closeSihDemo = () => {
    setIsSihDemoOpen(false);
  };

  const resetToDefaultData = () => {
    localStorage.removeItem('forcewell_personnel');
    localStorage.removeItem('forcewell_interventions');
    localStorage.removeItem('forcewell_audit_logs');
    setPersonnelList(SYNTHETIC_PERSONNEL);
    setInterventions(INITIAL_INTERVENTIONS);
    setAuditLogs(INITIAL_AUDIT_LOGS);
    setNotifications(INITIAL_NOTIFICATIONS);
    setCurrentPersonnelId('P-1024');
    setSelectedPersonnel(SYNTHETIC_PERSONNEL[0]);
    logAudit('SYSTEM_RESET', 'Restored synthetic demonstration baseline state');
  };

  return (
    <AppContext.Provider
      value={{
        role,
        setRole,
        activeTab,
        setActiveTab,
        currentPersonnelId,
        setCurrentPersonnelId,
        personnelList,
        selectedPersonnel,
        setSelectedPersonnel,
        interventions,
        auditLogs,
        notifications,
        unitStats,
        submitCheckIn,
        recordIntervention,
        updateInterventionStatus,
        importCsvPersonnel,
        logAudit,
        markNotificationRead,
        clearAllNotifications,
        isSihDemoOpen,
        sihDemoStep,
        startSihDemo,
        closeSihDemo,
        setSihDemoStep,
        resetToDefaultData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
