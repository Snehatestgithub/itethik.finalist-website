import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Home as HomeIcon,
  KeyRound,
  Lock,
  Unlock,
  Activity,
  Radio,
  Sliders,
  Bell,
  AlertTriangle,
  Fingerprint,
  Zap,
  Radar,
} from 'lucide-react';
import CanvasParticleField from '../components/CanvasParticleField';
import CircuitBackground from '../components/CircuitBackground';
import FaqSection from '../components/FaqSection';
import ChatAssistant from '../components/ChatAssistant';
import homeSecurity3dImg from '../assets/images/home_security_3d_1786698522354.jpg';

export default function HomeOfficeSecurity() {
  // Security Mode Switcher State
  const [securityMode, setSecurityMode] = useState('away'); // 'away' | 'home' | 'lockdown' | 'disarmed'
  const [activeZone, setActiveZone] = useState('entrance');
  const [breachSimulation, setBreachSimulation] = useState(false);
  const [simulationStep, setSimulationStep] = useState(0);

  const startBreachSimulation = () => {
    setBreachSimulation(true);
    setSimulationStep(1);
  };

  // Breach simulation sequence timer
  useEffect(() => {
    if (!breachSimulation) return;

    const timer1 = setTimeout(() => setSimulationStep(2), 700);
    const timer2 = setTimeout(() => setSimulationStep(3), 1500);
    const timer3 = setTimeout(() => setSimulationStep(4), 2300);
    const timer4 = setTimeout(() => setSimulationStep(5), 3200);
    const timer5 = setTimeout(() => {
      setBreachSimulation(false);
      setSimulationStep(0);
    }, 7000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [breachSimulation]);

  const zones = {
    entrance: {
      name: 'Main Entry & Foyer',
      tag: 'Zone 01 • Perimeter Gate',
      hardware: 'Smart Biometric Lock + Video Door Station + Magnetic Sensor',
      status: securityMode === 'disarmed' ? 'Disarmed (Normal Hours)' : 'Armed & Shielded',
      battery: '100% (Hardwired PoE + Battery Backup)',
      sensorType: 'Optical Fingerprint / RF-ID / Micro-Switch',
      eventLog: 'Access Granted: Card #4829 at 08:42 AM',
      icon: KeyRound,
      color: 'text-emerald-400',
    },
    perimeter: {
      name: 'Perimeter Windows & Balcony',
      tag: 'Zone 02 • Shell Defense',
      hardware: 'Dual-Tech Vibration Shock + Acoustic Glass Break Sensors',
      status: securityMode === 'disarmed' ? 'Disarmed' : 'Active 24/7 Grid',
      battery: '98% (2-Year Long Life Lithium)',
      sensorType: 'Piezoelectric Glass-Break & Reed Switch',
      eventLog: 'Perimeter Status: 0 Vibrations Detected',
      icon: Radar,
      color: 'text-cyan-400',
    },
    server: {
      name: 'Server Room / Executive Suite',
      tag: 'Zone 03 • Critical Asset Vault',
      hardware: 'Dual-Factor Face Recognition + AI Thermal PIR Motion Detection',
      status: 'Restricted Access (24/7 Armed)',
      battery: '100% (UPS Line Filtered)',
      sensorType: 'Quad-Element Passive Infrared & Microwave',
      eventLog: 'Temperature: 21°C • Motion: Clear',
      icon: Lock,
      color: 'text-purple-400',
    },
    yard: {
      name: 'Outer Perimeter & Parking',
      tag: 'Zone 04 • Boundary Defense',
      hardware: '120° Outdoor Microwave Radar + 110dB Solar Strobe Siren',
      status: securityMode === 'away' || securityMode === 'lockdown' ? 'Active Beam Fence' : 'Motion Standby',
      battery: '100% (Solar Harvest + Grid Backup)',
      sensorType: 'Active Infrared Photobeam & Strobe Flash',
      eventLog: 'Boundary Sweep: 100% Clear',
      icon: Radio,
      color: 'text-blue-400',
    },
  };

  const corePillars = [
    {
      title: 'Sub-Second AI Threat Detection',
      subtitle: 'Zero False Alarms (Pet Immune)',
      desc: 'Smart algorithmic filters ignore pets, swaying trees, and wind, triggering only for genuine human breach threats.',
      icon: ShieldAlert,
      badge: '0.1s Response',
      color: 'from-emerald-500/20 to-cyan-500/5',
      borderColor: 'group-hover:border-emerald-500/40',
      iconColor: 'text-emerald-400',
    },
    {
      title: 'Biometric Access Control',
      subtitle: 'Fingerprint, RFID & Mobile NFC',
      desc: 'Replace physical keys with military-grade encrypted biometric terminals, time-stamped logs, and magnetic locks.',
      icon: Fingerprint,
      badge: 'Dual-Factor Auth',
      color: 'from-cyan-500/20 to-blue-500/5',
      borderColor: 'group-hover:border-cyan-500/40',
      iconColor: 'text-cyan-400',
    },
    {
      title: 'Dual-Layer Anti-Tamper Redundancy',
      subtitle: '4G LTE Cellular + Wi-Fi Failover',
      desc: 'If an intruder cuts the power or internet wire, the system switches instantly to cellular data and backup battery.',
      icon: Zap,
      badge: '24hr Power Vault',
      color: 'from-purple-500/20 to-emerald-500/5',
      borderColor: 'group-hover:border-purple-500/40',
      iconColor: 'text-purple-400',
    },
    {
      title: 'Instant 110dB Siren & Cloud Alert',
      subtitle: 'High-Decibel Strobe & Mobile Push',
      desc: 'Disorient intruders with piercing sound and intense LED flashing while sending verified video clips directly to your phone.',
      icon: Bell,
      badge: 'Immediate Push',
      color: 'from-blue-500/20 to-emerald-500/5',
      borderColor: 'group-hover:border-blue-500/40',
      iconColor: 'text-blue-400',
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white pt-2 sm:pt-4 pb-20 px-4 sm:px-6 md:px-10 relative overflow-hidden">
      {/* Ambient Cybernetic Armor Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#020617]" />
        <CircuitBackground glowColor="cyan" intensity="subtle" />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-5%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-emerald-600/15 blur-[150px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[35%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-cyan-600/15 blur-[140px]"
        />
        <CanvasParticleField variant="emerald" mode="mixed" density={32} speed={0.3} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Back Link */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mb-6">
          <Link
            to="/services/security-services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-emerald-300 transition-colors font-medium px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md"
          >
            <ArrowLeft size={15} /> Back to Security Services
          </Link>
        </motion.div>

        {/* HERO SECTION: Tactile Security Command HUD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-24">
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-bold text-emerald-300 tracking-wide uppercase mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <ShieldAlert size={13} className="text-emerald-400" />
              Integrated Home &amp; Corporate Defense Systems
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-5 text-white">
              Home &amp; Office <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text">
                Smart Security
              </span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base max-w-lg mb-8 leading-relaxed">
              Total perimeter protection with AI anti-intrusion alarms, smart biometric locks, glass-break sensors, and 24/7 mobile telemetry control.
            </p>

            {/* Quick Live Telemetry Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">Alarm Speed</span>
                  <Zap size={12} className="text-emerald-400" />
                </div>
                <div className="text-lg font-black text-emerald-300">0.1s</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">Perimeter SLA</span>
                  <ShieldCheck size={12} className="text-cyan-400" />
                </div>
                <div className="text-lg font-black text-cyan-300">100% Armed</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">Battery Vault</span>
                  <Activity size={12} className="text-blue-400" />
                </div>
                <div className="text-lg font-black text-blue-300">24h Backup</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">Failover</span>
                  <Radio size={12} className="text-purple-400" />
                </div>
                <div className="text-lg font-black text-purple-300">4G LTE</div>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/consultation?service=home-office-security"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 hover:from-emerald-300 hover:via-cyan-300 text-slate-950 font-extrabold text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02]"
              >
                Book Security Audit &amp; Assessment <ArrowRight size={16} />
              </Link>
              <a
                href="#security-command"
                className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm transition-all flex items-center gap-2"
              >
                <Sliders size={16} className="text-emerald-400" /> Test Security Command HUD
              </a>
            </div>
          </motion.div>

          {/* Right Interactive Central Security Command Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl border border-emerald-500/40 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 p-4 sm:p-5 backdrop-blur-xl shadow-2xl shadow-emerald-500/15 overflow-hidden">
              {/* Top Security Mode Arm/Disarm Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      securityMode === 'disarmed'
                        ? 'bg-amber-400'
                        : securityMode === 'lockdown'
                        ? 'bg-red-500 animate-ping'
                        : 'bg-emerald-400 animate-pulse'
                    }`}
                  />
                  <span className="text-xs font-black text-white uppercase tracking-wider">
                    {securityMode === 'away' && 'MODE: ARMED (AWAY) • ALL SENSORS ACTIVE'}
                    {securityMode === 'home' && 'MODE: ARMED (HOME) • PERIMETER SHIELD'}
                    {securityMode === 'lockdown' && 'MODE: EMERGENCY LOCKDOWN ACTIVE'}
                    {securityMode === 'disarmed' && 'MODE: DISARMED (OPEN ACCESS)'}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-300 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  AES-256 ENCRYPTED
                </span>
              </div>

              {/* Central Visual Camera & Sensor Radar Screen */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-emerald-500/30 bg-black group mb-4">
                <img
                  src={homeSecurity3dImg}
                  alt="Security Gateway Visual"
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    securityMode === 'lockdown' || breachSimulation
                      ? 'filter contrast-125 saturate-150'
                      : ''
                  }`}
                />
                
                {/* HUD Overlay Lines */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40 pointer-events-none" />

                {/* Radar Sweep Effect */}
                {securityMode !== 'disarmed' && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                      className="w-[200%] h-[200%] -top-[50%] -left-[50%] absolute origin-center bg-gradient-to-tr from-emerald-500/20 via-transparent to-transparent"
                    />
                  </div>
                )}

                {/* Active Zone Label */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-black/70 border border-emerald-500/30 text-[10px] font-mono text-emerald-300 flex items-center gap-1.5">
                    <Radar size={12} className="text-emerald-400 animate-spin" />
                    <span>{zones[activeZone].name}</span>
                  </span>
                </div>

                {/* Simulated Breach Alert Banner */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {breachSimulation && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="p-5 rounded-2xl bg-red-950/90 border border-red-500 shadow-2xl backdrop-blur-md flex flex-col items-center gap-2 text-center pointer-events-auto max-w-sm"
                    >
                      <AlertTriangle size={32} className="text-red-400 animate-bounce" />
                      <div className="text-sm font-black text-red-300 uppercase tracking-wide">
                        PERIMETER BREACH DETECTED
                      </div>
                      <div className="text-xs text-gray-200">
                        {simulationStep === 1 && 'Step 1: AI PIR Sensor triggered in Zone 02...'}
                        {simulationStep === 2 && 'Step 2: 110dB Siren & Strobe Flash activated!'}
                        {simulationStep === 3 && 'Step 3: Instant 1080p Video Snapshot sent to Mobile App'}
                        {simulationStep === 4 && 'Step 4: Automatic Electronic Door Locks engaged'}
                        {simulationStep === 5 && 'Step 5: Security Dispatch Notified (System Secure)'}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Bottom Sensor Telemetry Strip */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-2 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-xs">
                  <div className="flex items-center gap-2 text-emerald-300 font-mono text-[11px]">
                    <Activity size={13} className="text-emerald-400 animate-pulse" />
                    <span className="truncate">{zones[activeZone].status}</span>
                  </div>
                  <span className="text-[10px] text-gray-400 font-mono">
                    {zones[activeZone].battery}
                  </span>
                </div>
              </div>

              {/* Mode Selectors */}
              <div className="grid grid-cols-4 gap-2 mb-4">
                {[
                  { id: 'away', label: 'Arm Away', icon: Lock },
                  { id: 'home', label: 'Arm Home', icon: HomeIcon },
                  { id: 'lockdown', label: 'Lockdown', icon: ShieldAlert },
                  { id: 'disarmed', label: 'Disarm', icon: Unlock },
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      setSecurityMode(m.id);
                      setBreachSimulation(false);
                    }}
                    className={`p-2 rounded-xl text-center border transition-all ${
                      securityMode === m.id
                        ? m.id === 'lockdown'
                          ? 'bg-red-500/20 border-red-500 text-red-300 font-bold'
                          : m.id === 'disarmed'
                          ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                          : 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                    }`}
                  >
                    <m.icon size={16} className="mx-auto mb-1" />
                    <div className="text-[10px] font-bold uppercase">{m.label}</div>
                  </button>
                ))}
              </div>

              {/* Zone Quick Selection */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                {Object.keys(zones).map((key) => {
                  const z = zones[key];
                  const active = activeZone === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveZone(key)}
                      className={`p-2 rounded-xl text-left border transition-all ${
                        active
                          ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-md'
                          : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                      }`}
                    >
                      <div className="text-[9px] uppercase font-bold text-gray-400 truncate">{z.tag.split('•')[0]}</div>
                      <div className="text-xs font-semibold text-white truncate">{z.name.split('&')[0]}</div>
                    </button>
                  );
                })}
              </div>

              {/* Interactive Breach Test Button */}
              <button
                onClick={startBreachSimulation}
                disabled={breachSimulation}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-red-600/30 to-amber-600/30 hover:from-red-600/40 hover:to-amber-600/40 border border-red-500/40 text-red-300 font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-98"
              >
                <AlertTriangle size={15} className="text-red-400" />
                {breachSimulation ? 'Simulating Breach Defense Cascade...' : '🚨 Simulate Incident & Breach Response Test'}
              </button>
            </div>
          </motion.div>
        </div>

        {/* 4 CORE DEFENSE PILLARS */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Smart Defense Highlights</h2>
            <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto">
              Multi-tiered security architecture protecting against intrusions, tampering, and outages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {corePillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className={`relative p-6 rounded-2xl bg-gradient-to-b ${p.color} border border-white/10 ${p.borderColor} transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:bg-slate-900/80 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${p.iconColor} group-hover:scale-110 transition-transform`}>
                        <Icon size={22} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-gray-300 border border-white/5">
                        {p.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-1">{p.title}</h3>
                    <div className={`text-xs font-semibold ${p.iconColor} mb-2`}>{p.subtitle}</div>
                    <p className="text-gray-400 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* INTERACTIVE ZONE TELEMETRY & HARDWARE MATRIX */}
        <div id="security-command" className="mb-20 p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-emerald-500/20 backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                <Radar size={14} /> Multi-Zone Perimeter Shield
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">Zone Telemetry &amp; Hardware Inspection</h3>
            </div>

            {/* Zone Selector Buttons */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-black/40 border border-white/10">
              {Object.keys(zones).map((key) => {
                const z = zones[key];
                const active = activeZone === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveZone(key)}
                    className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                      active
                        ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <z.icon size={14} />
                    <span>{z.name.split('&')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Zone Detail Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeZone}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
              {/* Left Zone Overview */}
              <div className="lg:col-span-6 space-y-4">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                        {zones[activeZone].tag}
                      </span>
                      <h4 className="text-lg font-bold text-white">{zones[activeZone].name}</h4>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                      {zones[activeZone].status}
                    </span>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-white/10 text-xs">
                    <div>
                      <span className="text-gray-400 block mb-0.5 font-semibold">Installed Hardware Suite:</span>
                      <span className="text-white font-medium">{zones[activeZone].hardware}</span>
                    </div>

                    <div>
                      <span className="text-gray-400 block mb-0.5 font-semibold">Sensor Detection Principle:</span>
                      <span className="text-cyan-300 font-mono">{zones[activeZone].sensorType}</span>
                    </div>

                    <div>
                      <span className="text-gray-400 block mb-0.5 font-semibold">Live Event Audit Log:</span>
                      <span className="text-purple-300 font-mono">{zones[activeZone].eventLog}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Zone Defense Protocols */}
              <div className="lg:col-span-6 flex flex-col justify-between gap-3">
                <div className="p-5 rounded-2xl bg-black/50 border border-emerald-500/20 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <ShieldCheck size={15} /> Active Defense Protocols for this Zone
                  </div>

                  <div className="space-y-2 text-xs text-gray-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                      <span>Tamper-Proof Micro-Switch: Triggers alarm if sensor housing is opened</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                      <span>Encrypted Wireless Frequency (868MHz / Rolling Code)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                      <span>Instant Mobile Push Notification with GPS timestamp</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">Need multi-zone security blueprint?</div>
                    <div className="text-[11px] text-gray-300">Certified security engineers evaluate your doors &amp; windows.</div>
                  </div>
                  <Link
                    to={`/consultation?service=home-office-security&zone=${activeZone}`}
                    className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shrink-0 transition-colors"
                  >
                    Request Audit
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA BANNER */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl mb-20">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
              <Sparkles size={14} /> Free Site Security Audit
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Is Your Property Truly Protected Against Intrusion?
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm max-w-xl">
              Get an on-site vulnerability analysis, perimeter mapping, and smart security proposal from certified engineers.
            </p>
          </div>
          <Link
            to="/consultation?service=home-office-security"
            className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm flex items-center gap-2 transition-all shadow-lg shadow-emerald-500/25 shrink-0 hover:scale-105"
          >
            Claim Free Security Audit <ArrowRight size={16} />
          </Link>
        </div>

        {/* FAQ SECTION */}
        <div className="relative py-10 mb-10 overflow-hidden rounded-3xl">
          <FaqSection category="home-office-security" theme="emerald" className="bg-transparent" />
        </div>

        <ChatAssistant />
      </div>
    </div>
  );
}
