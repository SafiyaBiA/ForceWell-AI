import React, { useState } from 'react';
import { useApp, AppProvider } from './store/AppContext';
import { DisclaimerBanner } from './components/layout/DisclaimerBanner';
import { Navbar } from './components/layout/Navbar';
import { OfficerSidebar } from './components/layout/OfficerSidebar';
import { SihDemoTourModal } from './components/presentation/SihDemoTourModal';
import { CsvUploadModal } from './components/modals/CsvUploadModal';

// Pages
import { LandingPage } from './pages/LandingPage';
import { ArchitecturePage } from './pages/ArchitecturePage';
import { TechnologyPage } from './pages/TechnologyPage';
import { PrivacyTrustPage } from './pages/PrivacyTrustPage';
import { PersonnelApp } from './pages/personnel/PersonnelApp';
import { CommanderDashboard } from './pages/commander/CommanderDashboard';

// Officer sub-pages
import { OfficerDashboard } from './pages/officer/OfficerDashboard';
import { PersonnelList } from './pages/officer/PersonnelList';
import { PersonnelProfile } from './pages/officer/PersonnelProfile';
import { RiskAnalytics } from './pages/officer/RiskAnalytics';
import { WorkloadIntel } from './pages/officer/WorkloadIntel';
import { InterventionsPage } from './pages/officer/InterventionsPage';
import { WellnessTrends } from './pages/officer/WellnessTrends';
import { ReportsPage } from './pages/officer/ReportsPage';
import { AuditLogsPage } from './pages/officer/AuditLogsPage';
import { SettingsPage } from './pages/officer/SettingsPage';

const AppContent: React.FC = () => {
  const {
    role,
    activeTab,
    setActiveTab,
    setSelectedPersonnel,
    personnelList,
    setCurrentPersonnelId
  } = useApp();

  const [isCsvModalOpen, setIsCsvModalOpen] = useState(false);

  // Helper for selecting personnel from anywhere
  const handleSelectPersonnel = (id: string) => {
    const p = personnelList.find(item => item.id === id);
    if (p) {
      setSelectedPersonnel(p);
      setCurrentPersonnelId(p.id);
      setActiveTab('personnel-profile');
    }
  };

  const handleOpenInterventionModal = (id: string) => {
    handleSelectPersonnel(id);
  };

  // Render Officer Content
  const renderOfficerContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <OfficerDashboard
            onSelectPersonnel={handleSelectPersonnel}
            onOpenInterventionModal={handleOpenInterventionModal}
          />
        );
      case 'personnel':
        return <PersonnelList onSelectPersonnel={handleSelectPersonnel} />;
      case 'personnel-profile':
        return <PersonnelProfile />;
      case 'analytics':
        return <RiskAnalytics />;
      case 'workload':
        return <WorkloadIntel />;
      case 'interventions':
        return <InterventionsPage />;
      case 'wellness-trends':
        return <WellnessTrends />;
      case 'reports':
        return <ReportsPage />;
      case 'audit':
        return <AuditLogsPage />;
      case 'settings':
        return <SettingsPage onOpenCsvModal={() => setIsCsvModalOpen(true)} />;
      default:
        return (
          <OfficerDashboard
            onSelectPersonnel={handleSelectPersonnel}
            onOpenInterventionModal={handleOpenInterventionModal}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Persistent Disclaimer */}
      <DisclaimerBanner />

      {/* Main Government-Grade Navbar */}
      <Navbar />

      {/* Main Body View */}
      <main className="flex-1 flex flex-col">
        {/* Public Informational Pages */}
        {activeTab === 'landing' ? (
          <LandingPage />
        ) : activeTab === 'architecture' ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <ArchitecturePage />
          </div>
        ) : activeTab === 'technology' ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <TechnologyPage />
          </div>
        ) : activeTab === 'privacy-center' ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <PrivacyTrustPage />
          </div>
        ) : role === 'personnel' ? (
          /* Role 1: Personnel Experience */
          <PersonnelApp />
        ) : role === 'commander' ? (
          /* Role 3: Commander Macro Experience */
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full">
            <CommanderDashboard />
          </div>
        ) : (
          /* Role 2: Welfare Officer Command Experience */
          <div className="flex-1 flex flex-col md:flex-row w-full max-w-7xl mx-auto">
            <OfficerSidebar onOpenCsvModal={() => setIsCsvModalOpen(true)} />
            <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto min-w-0">
              {renderOfficerContent()}
            </div>
          </div>
        )}
      </main>

      {/* Global Modals */}
      <SihDemoTourModal />
      {isCsvModalOpen && <CsvUploadModal onClose={() => setIsCsvModalOpen(false)} />}

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="space-y-1">
            <p className="text-slate-400 font-bold text-xs uppercase tracking-wider font-mono">
              FORCEWELL AI ? SMART INDIA HACKATHON 2026 (SIH26186)
            </p>
            <p className="text-slate-400 text-[11px]">
              Ministry of Home Affairs ? Central Reserve Police Force (CRPF), Police-II Division
            </p>
          </div>
          <div className="text-[11px] font-mono text-slate-400">
            <span className="text-blue-400 font-semibold">SUPPORT, NOT SURVEILLANCE</span>
            <span className="mx-2">?</span>
            <span>DEMONSTRATION PROTOTYPE</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
