import React, { useState } from 'react';
import { useApp } from '../../store/AppContext';
import { Role } from '../../types';
import {
  Shield,
  Bell,
  PlayCircle,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Info,
  Menu,
  X,
  ExternalLink,
  Lock,
  Layers,
  FileCode,
  Building
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    role,
    setRole,
    activeTab,
    setActiveTab,
    notifications,
    markNotificationRead,
    clearAllNotifications,
    startSihDemo,
    resetToDefaultData
  } = useApp();

  const [showNotifications, setShowNotifications] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleRoleChange = (newRole: Role) => {
    setRole(newRole);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('landing')}
              className="flex items-center gap-2.5 text-left group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-slate-900 border border-blue-500/40 flex items-center justify-center shadow-md shadow-blue-950/50 group-hover:border-blue-400 transition-colors">
                <Shield className="w-5 h-5 text-blue-300" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-lg tracking-wider text-white font-mono">
                    FORCEWELL <span className="text-blue-400">AI</span>
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-900/60 text-blue-300 font-semibold border border-blue-700/50 uppercase">
                    SIH26186
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 tracking-tight font-medium hidden sm:block">
                  Predict Early. Protect Privacy. Empower People.
                </p>
              </div>
            </button>
          </div>

          {/* Center: System Architecture & Info Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-900/80 p-1 rounded-lg border border-slate-800 text-xs">
            <button
              onClick={() => setActiveTab('landing')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                activeTab === 'landing' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors flex items-center gap-1.5 ${
                activeTab === 'architecture' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              Architecture
            </button>
            <button
              onClick={() => setActiveTab('technology')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors flex items-center gap-1.5 ${
                activeTab === 'technology' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              Tech Stack
            </button>
            <button
              onClick={() => setActiveTab('privacy-center')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors flex items-center gap-1.5 ${
                activeTab === 'privacy-center' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              Privacy Center
            </button>
          </nav>

          {/* Right Actions: Role Switcher & SIH Demo */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* SIH Demo 3-Minute Tour Button */}
            <button
              onClick={startSihDemo}
              className="relative inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 hover:from-amber-400 hover:to-orange-500 shadow-md shadow-amber-950/40 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              title="Run interactive 3-minute guided demonstration of SIH26186 requirements"
            >
              <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping absolute -top-1 -right-1" />
              <PlayCircle className="w-4 h-4 fill-slate-950 text-amber-500" />
              <span className="hidden sm:inline">Start SIH Demo</span>
              <span className="sm:hidden">SIH Demo</span>
            </button>

            {/* Role Switcher Pills */}
            <div className="hidden md:flex items-center bg-slate-900 border border-slate-800 rounded-lg p-1 text-xs">
              <button
                onClick={() => handleRoleChange('personnel')}
                className={`px-2.5 py-1 rounded font-medium transition-colors ${
                  role === 'personnel'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Personnel
              </button>
              <button
                onClick={() => handleRoleChange('officer')}
                className={`px-2.5 py-1 rounded font-medium transition-colors ${
                  role === 'officer'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Welfare Officer
              </button>
              <button
                onClick={() => handleRoleChange('commander')}
                className={`px-2.5 py-1 rounded font-medium transition-colors ${
                  role === 'commander'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Commander
              </button>
            </div>

            {/* Notifications Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 relative transition-colors"
                title="Notifications"
              >
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center font-mono animate-pulse">
                    {unreadCount}
                  </span>
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl z-50 overflow-hidden">
                  <div className="p-3 border-b border-slate-800 flex items-center justify-between bg-slate-950">
                    <div className="flex items-center gap-2">
                      <Bell className="w-4 h-4 text-blue-400" />
                      <span className="text-xs font-bold uppercase tracking-wider text-white">Notifications</span>
                      {unreadCount > 0 && (
                        <span className="text-[10px] bg-blue-900/60 text-blue-300 px-1.5 py-0.5 rounded font-mono">
                          {unreadCount} new
                        </span>
                      )}
                    </div>
                    {unreadCount > 0 && (
                      <button
                        onClick={clearAllNotifications}
                        className="text-[11px] text-blue-400 hover:text-blue-300 font-medium"
                      >
                        Mark all read
                      </button>
                    )}
                  </div>

                  <div className="max-h-80 overflow-y-auto divide-y divide-slate-800/60">
                    {notifications.length === 0 ? (
                      <div className="p-6 text-center text-xs text-slate-400">No notifications</div>
                    ) : (
                      notifications.map(item => (
                        <div
                          key={item.id}
                          onClick={() => markNotificationRead(item.id)}
                          className={`p-3 text-xs hover:bg-slate-850 cursor-pointer transition-colors ${
                            !item.read ? 'bg-blue-950/20' : ''
                          }`}
                        >
                          <div className="flex items-start gap-2.5">
                            {item.severity === 'alert' && <AlertTriangle className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />}
                            {item.severity === 'warning' && <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />}
                            {item.severity === 'info' && <Info className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />}
                            {item.severity === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />}
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <span className="font-semibold text-white">{item.title}</span>
                                <span className="text-[10px] text-slate-400 font-mono">{item.timestamp}</span>
                              </div>
                              <p className="text-slate-300 mt-1 leading-relaxed text-[11px]">{item.message}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Reset State */}
            <button
              onClick={resetToDefaultData}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Reset synthetic demo data to default baseline"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950 border-b border-slate-800 px-4 py-3 space-y-3">
          <div className="space-y-1 text-xs">
            <p className="text-slate-400 uppercase tracking-wider font-semibold px-2 py-1">Role Selector</p>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => handleRoleChange('personnel')}
                className={`py-2 rounded font-medium text-center ${role === 'personnel' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-300'}`}
              >
                Personnel
              </button>
              <button
                onClick={() => handleRoleChange('officer')}
                className={`py-2 rounded font-medium text-center ${role === 'officer' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-300'}`}
              >
                Officer
              </button>
              <button
                onClick={() => handleRoleChange('commander')}
                className={`py-2 rounded font-medium text-center ${role === 'commander' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-300'}`}
              >
                Commander
              </button>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800 space-y-1 text-xs">
            <button
              onClick={() => { setActiveTab('landing'); setMobileMenuOpen(false); }}
              className="w-full text-left px-3 py-2 rounded text-slate-300 hover:bg-slate-900"
            >
              Landing Page
            </button>
            <button
              onClick={() => { setActiveTab('architecture'); setMobileMenuOpen(false); }}
              className="w-full text-left px-3 py-2 rounded text-slate-300 hover:bg-slate-900"
            >
              System Architecture
            </button>
            <button
              onClick={() => { setActiveTab('technology'); setMobileMenuOpen(false); }}
              className="w-full text-left px-3 py-2 rounded text-slate-300 hover:bg-slate-900"
            >
              Technology & AI Stack
            </button>
            <button
              onClick={() => { setActiveTab('privacy-center'); setMobileMenuOpen(false); }}
              className="w-full text-left px-3 py-2 rounded text-slate-300 hover:bg-slate-900"
            >
              Privacy & Trust Center
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
