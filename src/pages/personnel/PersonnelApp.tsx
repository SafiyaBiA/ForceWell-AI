import React, { useState } from 'react';
import { useApp } from '../../store/AppContext';
import { RiskBadge } from '../../components/common/RiskBadge';
import { WELFARE_RESOURCES } from '../../data/resources';
import { analyzeLongitudinalTrend } from '../../engine/longitudinalAnalysis';
import {
  Heart,
  Moon,
  Battery,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ChevronRight,
  Activity,
  Maximize2,
  Smartphone
} from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine
} from 'recharts';

export const PersonnelApp: React.FC = () => {
  const {
    personnelList,
    currentPersonnelId,
    setCurrentPersonnelId,
    submitCheckIn,
    recordIntervention
  } = useApp();

  const [activeSubTab, setActiveSubTab] = useState<'home' | 'checkin' | 'trends' | 'support' | 'resources'>('home');
  const [isPhoneFrame, setIsPhoneFrame] = useState(true);

  const currentPersonnel = personnelList.find(p => p.id === currentPersonnelId) || personnelList[0];

  const [feeling, setFeeling] = useState<'Very Good' | 'Good' | 'Neutral' | 'Low' | 'Very Low'>('Neutral');
  const [sleepQuality, setSleepQuality] = useState<'Poor' | 'Fair' | 'Good'>('Fair');
  const [fatigue, setFatigue] = useState<'Low' | 'Moderate' | 'High'>('Moderate');
  const [workload, setWorkload] = useState<'Normal' | 'Heavy' | 'Very Heavy'>('Heavy');
  const [recovery, setRecovery] = useState<'Poor' | 'Fair' | 'Good'>('Fair');
  const [confidentialSupport, setConfidentialSupport] = useState<'No' | 'Maybe' | 'Yes, request support'>('No');
  const [notes, setNotes] = useState('');
  const [checkinSubmitted, setCheckinSubmitted] = useState(false);

  const [supportPreference, setSupportPreference] = useState('Scheduled Welfare Officer Conversation');
  const [supportUrgency, setSupportUrgency] = useState(false);
  const [supportMessage, setSupportMessage] = useState('');
  const [supportSuccess, setSupportSuccess] = useState(false);

  const longitudinalInsight = analyzeLongitudinalTrend(
    currentPersonnel.history,
    currentPersonnel.riskScore,
    currentPersonnel.baselineRisk
  );

  const handleCheckinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitCheckIn(currentPersonnel.id, {
      feeling,
      sleepQuality,
      fatigue,
      workload,
      recovery,
      confidentialSupport,
      notes,
      timestamp: new Date().toISOString()
    });
    setCheckinSubmitted(true);
    setTimeout(() => {
      setCheckinSubmitted(false);
      setActiveSubTab('home');
    }, 1500);
  };

  const handleSupportRequest = (e: React.FormEvent) => {
    e.preventDefault();
    recordIntervention({
      personnelId: currentPersonnel.id,
      personnelName: currentPersonnel.name,
      unit: currentPersonnel.unit,
      officerName: 'Insp. R. K. Sharma',
      officerRole: 'Unit Welfare Officer',
      date: new Date().toISOString().split('T')[0],
      type: 'Confidential welfare check-in',
      status: 'Scheduled',
      followUpDate: new Date(Date.now() + 3 * 86400000).toISOString().split('T')[0],
      notes: `Requested by personnel: "${supportMessage}". Preference: ${supportPreference}. Urgency: ${supportUrgency ? 'High' : 'Normal'}`,
    });
    setSupportSuccess(true);
    setTimeout(() => {
      setSupportSuccess(false);
      setActiveSubTab('home');
    }, 1800);
  };

  return (
    <div className="py-6 px-4 max-w-7xl mx-auto">
      {/* Profile Bar */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900/90 border border-slate-800 rounded-xl p-3 sm:p-4 text-xs">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-blue-900/60 border border-blue-500/40 flex items-center justify-center font-bold text-blue-300">
            P1
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-sm">{currentPersonnel.name}</span>
              <span className="font-mono text-slate-400">({currentPersonnel.id})</span>
            </div>
            <p className="text-slate-400 text-[11px]">
              {currentPersonnel.rank} ? {currentPersonnel.unit} ? {currentPersonnel.deploymentStatus}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 hidden lg:inline">Switch Profile:</span>
            <select
              value={currentPersonnelId}
              onChange={e => setCurrentPersonnelId(e.target.value)}
              className="bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-blue-500"
            >
              <option value="P-1024">P-1024 (Ct. Rajesh Kumar - Elevated Risk)</option>
              <option value="P-1088">P-1088 (HC Amit Sharma - Watch)</option>
              <option value="P-1102">P-1102 (SI Priya Singh - Stable)</option>
              <option value="P-1055">P-1055 (Ct. Vikram Rawat - Post-Intervention)</option>
            </select>
          </div>

          <button
            onClick={() => setIsPhoneFrame(!isPhoneFrame)}
            className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg font-medium transition-colors"
          >
            {isPhoneFrame ? <Maximize2 className="w-3.5 h-3.5" /> : <Smartphone className="w-3.5 h-3.5" />}
            <span>{isPhoneFrame ? 'Desktop Mode' : 'Mobile Frame'}</span>
          </button>
        </div>
      </div>

      <div className={isPhoneFrame ? 'max-w-md mx-auto shadow-2xl rounded-3xl border-2 border-slate-700/80 bg-slate-950 overflow-hidden' : 'w-full'}>
        <div className="bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <Heart className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white tracking-wide">CRPF SWASTH-SEVA</h2>
              <p className="text-[10px] text-slate-400 font-mono">Personnel Welfare Portal</p>
            </div>
          </div>
          <RiskBadge category={currentPersonnel.riskCategory} score={currentPersonnel.riskScore} size="sm" />
        </div>

        <div className="grid grid-cols-5 bg-slate-950 border-b border-slate-800 text-[10px] text-center font-medium">
          <button
            onClick={() => setActiveSubTab('home')}
            className={`py-2.5 transition-colors border-b-2 ${
              activeSubTab === 'home' ? 'border-blue-500 text-blue-400 font-bold bg-slate-900/50' : 'border-transparent text-slate-400'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setActiveSubTab('checkin')}
            className={`py-2.5 transition-colors border-b-2 ${
              activeSubTab === 'checkin' ? 'border-blue-500 text-blue-400 font-bold bg-slate-900/50' : 'border-transparent text-slate-400'
            }`}
          >
            Check-In
          </button>
          <button
            onClick={() => setActiveSubTab('trends')}
            className={`py-2.5 transition-colors border-b-2 ${
              activeSubTab === 'trends' ? 'border-blue-500 text-blue-400 font-bold bg-slate-900/50' : 'border-transparent text-slate-400'
            }`}
          >
            Trends
          </button>
          <button
            onClick={() => setActiveSubTab('support')}
            className={`py-2.5 transition-colors border-b-2 ${
              activeSubTab === 'support' ? 'border-blue-500 text-blue-400 font-bold bg-slate-900/50' : 'border-transparent text-slate-400'
            }`}
          >
            Support
          </button>
          <button
            onClick={() => setActiveSubTab('resources')}
            className={`py-2.5 transition-colors border-b-2 ${
              activeSubTab === 'resources' ? 'border-blue-500 text-blue-400 font-bold bg-slate-900/50' : 'border-transparent text-slate-400'
            }`}
          >
            Help
          </button>
        </div>

        {activeSubTab === 'home' && (
          <div className="p-4 space-y-4 text-xs">
            <div className="bg-gradient-to-br from-blue-950/70 to-slate-900 border border-blue-800/40 rounded-2xl p-4 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-blue-300 uppercase tracking-wider font-semibold font-mono">
                  Welcome, {currentPersonnel.name}
                </span>
                <span className="text-[10px] text-slate-400">Last: {currentPersonnel.lastCheckInDate}</span>
              </div>
              <h3 className="text-base font-bold text-white">
                {currentPersonnel.riskScore >= 50
                  ? 'Your indicators show elevated operational strain.'
                  : 'Your operational equilibrium is currently stable.'}
              </h3>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {longitudinalInsight.alertMessage ||
                  'Your welfare-risk indicators align with your baseline. Keep up your recovery routines.'}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 space-y-1">
                <div className="flex items-center justify-between text-slate-400 text-[11px]">
                  <span>Sleep Quality</span>
                  <Moon className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <p className="text-sm font-bold text-white">{currentPersonnel.sleepQuality}</p>
                <span className="text-[10px] text-slate-400">Voluntary self-report</span>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 space-y-1">
                <div className="flex items-center justify-between text-slate-400 text-[11px]">
                  <span>Fatigue Index</span>
                  <Battery className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <p className="text-sm font-bold text-amber-300 font-mono">{currentPersonnel.fatigueScore} / 100</p>
                <span className="text-[10px] text-slate-400">Cumulative physical load</span>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 space-y-1">
                <div className="flex items-center justify-between text-slate-400 text-[11px]">
                  <span>Duty Workload</span>
                  <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <p className="text-sm font-bold text-white font-mono">{currentPersonnel.dutyHours} hrs/day</p>
                <span className="text-[10px] text-slate-400">{currentPersonnel.deploymentDays} days deployment</span>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 space-y-1">
                <div className="flex items-center justify-between text-slate-400 text-[11px]">
                  <span>Recovery Score</span>
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <p className="text-sm font-bold text-emerald-300 font-mono">{currentPersonnel.recoveryScore} / 100</p>
                <span className="text-[10px] text-slate-400">Rest ratio</span>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-white">Daily Wellness Check-in</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">Takes under 45 seconds</p>
              </div>
              <button
                onClick={() => setActiveSubTab('checkin')}
                className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-md shadow-blue-950"
              >
                <span>Record Today</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-200">Confidential Support</span>
                <Lock className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <p className="text-[11px] text-slate-400">
                Would you like confidential welfare support or rest rotation assistance?
              </p>
              <button
                onClick={() => setActiveSubTab('support')}
                className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-blue-300 text-xs font-semibold border border-blue-900/50 transition-colors"
              >
                Request Confidential Consultation
              </button>
            </div>

            <p className="text-[10px] text-center text-slate-400 italic">
              Wellness information is voluntary, private, and used exclusively for welfare support.
            </p>
          </div>
        )}

        {activeSubTab === 'checkin' && (
          <div className="p-4 space-y-4 text-xs">
            <div className="border-b border-slate-800 pb-2">
              <h3 className="text-sm font-bold text-white">Today's Voluntary Check-In</h3>
              <p className="text-[11px] text-slate-400">
                Your responses help detect fatigue patterns early and trigger rest opportunities.
              </p>
            </div>

            {checkinSubmitted ? (
              <div className="p-8 text-center space-y-3 bg-slate-900/80 rounded-2xl border border-slate-800">
                <div className="w-12 h-12 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-700/50 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">Thank you, Check-In Logged</h4>
                <p className="text-xs text-slate-300">
                  Your wellness inputs have updated your personal recovery baseline.
                </p>
              </div>
            ) : (
              <form onSubmit={handleCheckinSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-slate-200 font-semibold text-xs">
                    1. How are you feeling today?
                  </label>
                  <div className="grid grid-cols-5 gap-1 text-center text-[10px]">
                    {(['Very Good', 'Good', 'Neutral', 'Low', 'Very Low'] as const).map(opt => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFeeling(opt)}
                        className={`p-2 rounded-xl border transition-all ${
                          feeling === opt
                            ? 'bg-blue-600 border-blue-400 text-white font-bold shadow'
                            : 'bg-slate-900 border-slate-800 text-slate-400'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-slate-300 font-medium text-[11px]">
                    2. Sleep Quality
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Poor', 'Fair', 'Good'] as const).map(opt => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSleepQuality(opt)}
                        className={`py-2 rounded-lg border text-center font-medium transition-all ${
                          sleepQuality === opt
                            ? 'bg-blue-900/70 border-blue-500 text-blue-200'
                            : 'bg-slate-900 border-slate-800 text-slate-400'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-slate-300 font-medium text-[11px]">
                    3. Physical Fatigue
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Low', 'Moderate', 'High'] as const).map(opt => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFatigue(opt)}
                        className={`py-2 rounded-lg border text-center font-medium transition-all ${
                          fatigue === opt
                            ? 'bg-amber-900/60 border-amber-500 text-amber-200'
                            : 'bg-slate-900 border-slate-800 text-slate-400'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-slate-300 font-medium text-[11px]">
                    4. Operational Workload
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Normal', 'Heavy', 'Very Heavy'] as const).map(opt => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setWorkload(opt)}
                        className={`py-2 rounded-lg border text-center font-medium transition-all ${
                          workload === opt
                            ? 'bg-blue-900/60 border-blue-500 text-blue-200'
                            : 'bg-slate-900 border-slate-800 text-slate-400'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-slate-300 font-medium text-[11px]">
                    5. Physiological Recovery
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Poor', 'Fair', 'Good'] as const).map(opt => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setRecovery(opt)}
                        className={`py-2 rounded-lg border text-center font-medium transition-all ${
                          recovery === opt
                            ? 'bg-emerald-900/60 border-emerald-500 text-emerald-200'
                            : 'bg-slate-900 border-slate-800 text-slate-400'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-blue-950/40 border border-blue-900/60 rounded-xl space-y-2">
                  <label className="block text-blue-200 font-semibold text-[11px]">
                    Would you like confidential welfare support?
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-[11px]">
                    {(['No', 'Maybe', 'Yes, request support'] as const).map(opt => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setConfidentialSupport(opt)}
                        className={`py-1.5 px-2 rounded-lg border text-center font-medium transition-all ${
                          confidentialSupport === opt
                            ? 'bg-blue-600 border-blue-400 text-white font-bold'
                            : 'bg-slate-900 border-slate-800 text-slate-400'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-wider text-xs shadow-md shadow-blue-950 transition-colors"
                >
                  Submit Voluntary Check-In
                </button>
              </form>
            )}
          </div>
        )}

        {activeSubTab === 'trends' && (
          <div className="p-4 space-y-4 text-xs">
            <div className="border-b border-slate-800 pb-2">
              <h3 className="text-sm font-bold text-white">My Longitudinal Wellness & Risk Trend</h3>
              <p className="text-[11px] text-slate-400">
                Continuous baseline comparison over the past 5 operational cycles
              </p>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Personal Normal Baseline:</span>
                <strong className="font-mono text-emerald-400 text-sm">{currentPersonnel.baselineRisk}</strong>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Current Welfare-Risk Index:</span>
                <strong className="font-mono text-rose-400 text-sm">{currentPersonnel.riskScore}</strong>
              </div>
              <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800/80 text-[11px]">
                {currentPersonnel.riskScore > currentPersonnel.baselineRisk + 15 ? (
                  <p className="text-amber-300">
                    "Your welfare-risk indicators have increased compared with your recent personal baseline."
                  </p>
                ) : (
                  <p className="text-emerald-300">
                    "Your welfare-risk indicators are currently aligned with your personal baseline."
                  </p>
                )}
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 space-y-2">
              <span className="text-[11px] font-bold text-white uppercase tracking-wider block">
                5-Week Welfare Index vs Baseline
              </span>
              <div className="h-44 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={currentPersonnel.history}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="week" stroke="#64748b" tick={{ fontSize: 10 }} />
                    <YAxis domain={[0, 100]} stroke="#64748b" tick={{ fontSize: 10 }} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '11px' }}
                    />
                    <ReferenceLine y={currentPersonnel.baselineRisk} stroke="#10b981" strokeDasharray="4 4" />
                    <Line type="monotone" dataKey="riskScore" stroke="#f43f5e" strokeWidth={2.5} dot={{ r: 4 }} name="Risk Index" />
                    <Line type="monotone" dataKey="recovery" stroke="#38bdf8" strokeWidth={1.5} dot={{ r: 3 }} name="Recovery" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <p className="text-[10px] text-slate-400 italic text-center">
              * Decision-support metric only. Does not diagnose clinical conditions.
            </p>
          </div>
        )}

        {activeSubTab === 'support' && (
          <div className="p-4 space-y-4 text-xs">
            <div className="border-b border-slate-800 pb-2">
              <h3 className="text-sm font-bold text-white">Confidential Support Request</h3>
              <p className="text-[11px] text-slate-400">
                Direct confidential welfare consultation
              </p>
            </div>

            {supportSuccess ? (
              <div className="p-8 text-center space-y-3 bg-slate-900/80 rounded-2xl border border-slate-800">
                <div className="w-12 h-12 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-700/50 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">Request Submitted</h4>
                <p className="text-xs text-slate-300">
                  Routed privately to Unit Welfare Officer Insp. R. K. Sharma.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSupportRequest} className="space-y-4">
                <div className="p-3 bg-blue-950/40 border border-blue-900/50 rounded-xl flex items-start gap-2.5 text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <p className="text-[11px] leading-relaxed">
                    This request is strictly confidential and protected under CRPF welfare guidelines.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-slate-200 font-semibold text-[11px]">
                    Consultation Type
                  </label>
                  <select
                    value={supportPreference}
                    onChange={e => setSupportPreference(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-blue-500 text-xs"
                  >
                    <option value="Scheduled Welfare Officer Conversation">Private Welfare Officer Consultation</option>
                    <option value="Confidential Telephonic Consultation">Sampark Telephonic Helpline</option>
                    <option value="Leave & Rest Rotation Review">Leave & Rest Rotation Review</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-slate-200 font-semibold text-[11px]">
                    Notes / Situation
                  </label>
                  <textarea
                    value={supportMessage}
                    onChange={e => setSupportMessage(e.target.value)}
                    rows={3}
                    placeholder="Briefly describe what assistance you need..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-blue-500 text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-wider text-xs shadow-md shadow-blue-950 transition-colors"
                >
                  Send Confidential Request
                </button>
              </form>
            )}
          </div>
        )}

        {activeSubTab === 'resources' && (
          <div className="p-4 space-y-3 text-xs">
            <div className="border-b border-slate-800 pb-2">
              <h3 className="text-sm font-bold text-white">CRPF Support Network</h3>
              <p className="text-[11px] text-slate-400">
                Official round-the-clock contacts
              </p>
            </div>

            <div className="space-y-2.5">
              {WELFARE_RESOURCES.map(res => (
                <div key={res.id} className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-blue-400 font-mono uppercase bg-blue-950/80 px-2 py-0.5 rounded border border-blue-900/60">
                      {res.category}
                    </span>
                    <span className="text-[10px] text-slate-400">{res.availability}</span>
                  </div>
                  <h4 className="font-bold text-white text-xs">{res.title}</h4>
                  <p className="text-slate-300 text-[11px] leading-relaxed">{res.description}</p>
                  <p className="font-mono text-amber-300 font-bold text-[11px] pt-0.5">{res.contact}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
