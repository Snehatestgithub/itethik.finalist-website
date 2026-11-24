import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  PhoneCall,
  Headphones,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Home as HomeIcon,
  Building2,
  Building,
  Users,
  Volume2,
  Cpu,
  Mic,
  Radio,
  Lock,
  Unlock,
  Bell,
  Wifi,
  Sliders,
  Video,
  Smartphone,
  Layers,
  Zap,
} from 'lucide-react';
import CanvasParticleField from '../components/CanvasParticleField';
import CircuitBackground from '../components/CircuitBackground';
import FaqSection from '../components/FaqSection';
import ChatAssistant from '../components/ChatAssistant';
import intercom3dImg from '../assets/images/smart_intercom_3d_1786698507889.jpg';

export default function IntercomSetup() {
  // Live Simulator States
  const [selectedStation, setSelectedStation] = useState('villa');
  const [callState, setCallState] = useState('idle'); // 'idle' | 'calling' | 'connected'
  const [isDoorUnlocked, setIsDoorUnlocked] = useState(false);
  const [isMicActive, setIsMicActive] = useState(false);
  const [nightVision, setNightVision] = useState(false);

  // Architecture Visualizer State
  const [activeArch, setActiveArch] = useState('villa');

  // Door unlock timer
  useEffect(() => {
    if (isDoorUnlocked) {
      const timer = setTimeout(() => {
        setIsDoorUnlocked(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isDoorUnlocked]);

  // Calling auto-answer helper
  const triggerCallSimulation = () => {
    setCallState('calling');
    setIsMicActive(false);
  };

  const answerCall = () => {
    setCallState('connected');
    setIsMicActive(true);
  };

  const endCall = () => {
    setCallState('idle');
    setIsMicActive(false);
  };

  const stations = {
    villa: {
      name: 'Main Villa Gate',
      ip: '192.168.1.104',
      status: 'Online • 1Gbps PoE',
      tag: 'Front Gate Station',
      visitor: 'Courier Delivery / Visitor',
    },
    lobby: {
      name: 'Tower Lobby Entrance',
      ip: '192.168.1.108',
      status: 'Online • Fiber Link',
      tag: 'Multi-Tenant IP Station',
      visitor: 'Society Resident Guest',
    },
    reception: {
      name: 'Executive Reception',
      ip: '192.168.1.112',
      status: 'Online • PoE Cat6',
      tag: 'Office Desk Buzzer',
      visitor: 'Client Meeting Arrival',
    },
    cabin: {
      name: 'Security Guard Cabin',
      ip: '192.168.1.120',
      status: 'Online • 2-Way Master',
      tag: 'Guardhouse Console',
      visitor: 'Vehicle Entry Verification',
    },
  };

  const architecturePresets = {
    villa: {
      title: 'Luxury Villa / Private Residence',
      badge: 'Single Family & Duplex',
      wiring: 'Direct CAT6 PoE & Wi-Fi Extender',
      maxIndoorUnits: 'Up to 6 Indoor Touchscreens',
      doorStations: 'Main Gate + Kitchen Sub-Station',
      lockControl: 'Magnetic Strike / Motorized Deadbolt',
      highlights: [
        'Room-to-room instant call & broadcasting',
        'Smart doorbell with phone video push',
        'Auto snapshot memory when bell is pressed',
        'One-touch electric gate trigger',
      ],
      diagram: [
        { node: 'Weatherproof Door Station', type: 'Outdoor IP65', icon: Video, color: 'text-cyan-400' },
        { node: 'PoE Network Switch', type: 'Central Core', icon: Cpu, color: 'text-blue-400' },
        { node: '7" HD Touch Display', type: 'Living Room Master', icon: Layers, color: 'text-purple-400' },
        { node: 'Smartphone App', type: 'Remote Push', icon: Smartphone, color: 'text-emerald-400' },
      ],
    },
    society: {
      title: 'Apartment Towers & Gated Societies',
      badge: 'Multi-Tenant High Rise',
      wiring: 'Gigabit Fiber Backbone + PoE Risers',
      maxIndoorUnits: 'Up to 500+ Flats & Penthouses',
      doorStations: 'Guard Gatehouse + Tower Lobby Panels',
      lockControl: 'Access Card + QR Code + Intercom Relay',
      highlights: [
        'Direct flat-to-guard private voice line',
        'Visitor pre-authorization from smartphone',
        'Digital phonebook with backlit capacitive keypad',
        'Elevator integration for floor access clearance',
      ],
      diagram: [
        { node: 'Multi-Tenant Keypad Station', type: 'Lobby Face Recognition', icon: Users, color: 'text-cyan-400' },
        { node: 'Society Management Server', type: 'SIP Protocol PBX', icon: Cpu, color: 'text-blue-400' },
        { node: 'Flat Intercom Console', type: 'In-Wall Screen', icon: Building, color: 'text-purple-400' },
        { node: 'Guardhouse Master Desk', type: 'Concierge Station', icon: Headphones, color: 'text-emerald-400' },
      ],
    },
    office: {
      title: 'Corporate Office & Commercial Suites',
      badge: 'Workplace & Executive Cabins',
      wiring: 'Internal LAN / VoIP SIP PBX Integration',
      maxIndoorUnits: 'Unlimited Desktop & Wall Stations',
      doorStations: 'Reception Door + Server Room + Boardroom',
      lockControl: 'Fail-Safe EM Lock + Exit Switch Link',
      highlights: [
        'Receptionist one-click glass door release',
        'Boss-to-secretary priority direct intercom',
        'Integration with existing PBX / EPABX phone network',
        'Time-stamped entry logs and snapshot archive',
      ],
      diagram: [
        { node: 'Reception Video Station', type: 'Door Buzzer Unit', icon: Building2, color: 'text-cyan-400' },
        { node: 'Corporate SIP EPABX', type: 'VoIP Server', icon: Radio, color: 'text-blue-400' },
        { node: 'Executive Desk Phone', type: 'HD Color Display', icon: PhoneCall, color: 'text-purple-400' },
        { node: 'EM Lock Strike Relay', type: 'Glass Door Controller', icon: Lock, color: 'text-emerald-400' },
      ],
    },
  };

  const corePillars = [
    {
      title: 'Acoustic DSP Noise Cancel',
      subtitle: 'Zero Echo & Wind Suppression',
      desc: 'Hardware DSP filters out traffic noise, elevator hums, and feedback whistling for pristine human voice clarity.',
      icon: Volume2,
      badge: '< 15ms Latency',
      color: 'from-cyan-500/20 to-blue-500/5',
      borderColor: 'group-hover:border-cyan-500/40',
      iconColor: 'text-cyan-400',
    },
    {
      title: '1-Touch Door Release Relay',
      subtitle: 'Dry Contact & Voltage Strike',
      desc: 'Seamless integration with magnetic locks, boom barriers, motorized sliding gates, and smart deadbolts.',
      icon: Unlock,
      badge: 'Dual Relay Output',
      color: 'from-blue-500/20 to-indigo-500/5',
      borderColor: 'group-hover:border-blue-500/40',
      iconColor: 'text-blue-400',
    },
    {
      title: 'Wide-Angle 4K Optical Feed',
      subtitle: '130° FOV & True Night Vision',
      desc: 'Ultra-wide fish-eye optics with smart IR illumination ensure you see visitors clearly head-to-toe even in pitch black.',
      icon: Video,
      badge: 'Color at Night',
      color: 'from-purple-500/20 to-cyan-500/5',
      borderColor: 'group-hover:border-purple-500/40',
      iconColor: 'text-purple-400',
    },
    {
      title: 'Mobile Smartphone Link',
      subtitle: 'Live Video Answer from Anywhere',
      desc: 'Receive doorbell calls and unlock the gate from your iPhone or Android phone whether at work or travelling overseas.',
      icon: Smartphone,
      badge: 'iOS & Android Sync',
      color: 'from-emerald-500/20 to-cyan-500/5',
      borderColor: 'group-hover:border-emerald-500/40',
      iconColor: 'text-emerald-400',
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white pt-2 sm:pt-4 pb-20 px-4 sm:px-6 md:px-10 relative overflow-hidden">
      {/* Ambient Visual Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#020617]" />
        <CircuitBackground glowColor="cyan" intensity="subtle" />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-5%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-cyan-600/15 blur-[140px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[35%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-blue-600/15 blur-[140px]"
        />
        <CanvasParticleField variant="cyan" mode="mixed" density={32} speed={0.3} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Back Link */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mb-6">
          <Link
            to="/services/security-services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-cyan-300 transition-colors font-medium px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md"
          >
            <ArrowLeft size={15} /> Back to Security Services
          </Link>
        </motion.div>

        {/* HERO SECTION: Fluid High-Impact Split Layout with LIVE VDP SIMULATOR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-24">
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-xs font-bold text-cyan-300 tracking-wide uppercase mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <PhoneCall size={13} className="text-cyan-400" />
              Next-Gen IP &amp; Video Intercom Engineering
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-5 text-white">
              Smart Intercom &amp; <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-transparent bg-clip-text">
                Video Door Systems
              </span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base max-w-lg mb-8 leading-relaxed">
              Experience seamless 2-way crystal communication, 1-touch electronic door releases, and multi-station concierge linking for luxury villas, apartments, and corporate offices.
            </p>

            {/* Quick Live Telemetry Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">Audio Latency</span>
                  <Volume2 size={12} className="text-cyan-400" />
                </div>
                <div className="text-lg font-black text-cyan-300">&lt; 15ms</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">Video Feed</span>
                  <Video size={12} className="text-blue-400" />
                </div>
                <div className="text-lg font-black text-blue-300">1080p HD</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">Lock Relay</span>
                  <Unlock size={12} className="text-emerald-400" />
                </div>
                <div className="text-lg font-black text-emerald-300">1-Touch</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">Phone Link</span>
                  <Smartphone size={12} className="text-purple-400" />
                </div>
                <div className="text-lg font-black text-purple-300">Cloud Sync</div>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/consultation?service=intercom-setup"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-extrabold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02]"
              >
                Schedule Intercom Site Survey <ArrowRight size={16} />
              </Link>
              <a
                href="#interactive-simulator"
                className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm transition-all flex items-center gap-2"
              >
                <Sliders size={16} className="text-cyan-400" /> Test Live Intercom Console
              </a>
            </div>
          </motion.div>

          {/* Right Interactive Tactile Station Console Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl border border-cyan-500/40 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 p-4 sm:p-5 backdrop-blur-xl shadow-2xl shadow-cyan-500/15 overflow-hidden">
              {/* Station Top Status Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    {stations[selectedStation].name}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-gray-400 font-mono">
                  <span className="flex items-center gap-1 text-cyan-300">
                    <Wifi size={12} /> {stations[selectedStation].ip}
                  </span>
                  <span className="hidden sm:inline px-2 py-0.5 rounded bg-white/5 text-gray-300">
                    {stations[selectedStation].status}
                  </span>
                </div>
              </div>

              {/* Station Video Display Screen */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-cyan-500/30 bg-black group mb-4">
                <img
                  src={intercom3dImg}
                  alt="Intercom Live Feed Preview"
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    nightVision ? 'filter grayscale contrast-150 brightness-110' : ''
                  }`}
                />
                
                {/* HUD Overlay Lines */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40 pointer-events-none" />

                {/* Top Corner Camera Metadata */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-black/60 border border-white/15 text-[10px] font-mono text-cyan-300">
                    LIVE CAM 01 • 1080P/60FPS
                  </span>
                  <button
                    onClick={() => setNightVision(!nightVision)}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold border transition-colors ${
                      nightVision
                        ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-black'
                        : 'bg-black/60 border-white/20 text-gray-300 hover:text-white'
                    }`}
                  >
                    {nightVision ? 'IR Night Active' : 'IR Auto'}
                  </button>
                </div>

                {/* Incoming Call / Active State Center Badge */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {callState === 'calling' && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: [1, 1.05, 1], opacity: 1 }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="p-4 rounded-2xl bg-cyan-950/90 border border-cyan-400 shadow-2xl backdrop-blur-md flex flex-col items-center gap-2 text-center pointer-events-auto"
                    >
                      <Bell size={28} className="text-cyan-400 animate-bounce" />
                      <div className="text-sm font-black text-white">INCOMING DOORBELL RING</div>
                      <div className="text-xs text-cyan-300">{stations[selectedStation].visitor}</div>
                      <div className="flex gap-2 mt-2">
                        <button
                          onClick={answerCall}
                          className="px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-md"
                        >
                          Answer Call
                        </button>
                        <button
                          onClick={endCall}
                          className="px-3 py-1.5 rounded-lg bg-red-500/80 hover:bg-red-500 text-white font-bold text-xs"
                        >
                          Decline
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {callState === 'connected' && (
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-cyan-500/40 backdrop-blur-md flex items-center gap-3 text-left">
                      <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                      <div>
                        <div className="text-xs font-bold text-emerald-300">2-Way Audio Stream Active</div>
                        <div className="text-[10px] text-gray-400">DSP Echo Cancellation Engaged</div>
                      </div>
                    </div>
                  )}

                  {isDoorUnlocked && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="p-4 rounded-2xl bg-emerald-950/90 border border-emerald-400 shadow-2xl backdrop-blur-md flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                        <Unlock size={22} />
                      </div>
                      <div>
                        <div className="text-sm font-black text-emerald-300">DOOR RELAY UNLOCKED</div>
                        <div className="text-[11px] text-gray-300">Physical magnetic contact triggered (5s)</div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Bottom Audio Waveform Equalizer */}
                {callState === 'connected' && (
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-xs">
                    <div className="flex items-center gap-2 text-cyan-300 font-mono text-[11px]">
                      <Mic size={13} className={`text-cyan-400 ${isMicActive ? 'animate-pulse' : ''}`} />
                      <span>{isMicActive ? 'Mic Live: -12dB' : 'Mic Standby'}</span>
                    </div>
                    {/* Simulated Equalizer Bars */}
                    <div className="flex items-end gap-1 h-4">
                      {[60, 90, 40, 100, 70, 85, 45, 95, 80, 50, 90, 65].map((val, i) => (
                        <motion.span
                          key={i}
                          animate={{ height: ['20%', `${val}%`, '30%'] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.05 }}
                          className="w-1 bg-cyan-400 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Station Selection Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                {Object.keys(stations).map((key) => {
                  const s = stations[key];
                  const active = selectedStation === key;
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedStation(key);
                        setCallState('idle');
                      }}
                      className={`p-2 rounded-xl text-left border transition-all ${
                        active
                          ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-md'
                          : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <div className="text-[10px] font-bold uppercase truncate">{s.tag}</div>
                      <div className="text-xs font-semibold text-white truncate">{s.name}</div>
                    </button>
                  );
                })}
              </div>

              {/* Station Action Button Strip */}
              <div className="grid grid-cols-3 gap-2.5">
                <button
                  onClick={triggerCallSimulation}
                  className="py-2.5 px-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95"
                >
                  <Bell size={14} className="text-cyan-400" /> Ring Doorbell
                </button>

                <button
                  onClick={() => setIsDoorUnlocked(true)}
                  className={`py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95 ${
                    isDoorUnlocked
                      ? 'bg-emerald-500 text-slate-950 shadow-emerald-500/30'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                  }`}
                >
                  {isDoorUnlocked ? <Unlock size={14} /> : <Lock size={14} />}
                  {isDoorUnlocked ? 'Unlocked!' : 'Unlock Gate'}
                </button>

                {callState === 'connected' ? (
                  <button
                    onClick={endCall}
                    className="py-2.5 px-3 rounded-xl bg-red-500/20 hover:bg-red-500/30 border border-red-500/40 text-red-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95"
                  >
                    <PhoneCall size={14} className="text-red-400 rotate-[135deg]" /> Hang Up
                  </button>
                ) : (
                  <button
                    onClick={answerCall}
                    className="py-2.5 px-3 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/40 text-blue-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95"
                  >
                    <PhoneCall size={14} className="text-blue-400" /> 2-Way Speak
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 CORE ENGINEERING PILLARS */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Intercom Engineering Highlights</h2>
            <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto">
              Engineered for seamless voice intelligibility, instant response, and long-term durability.
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

        {/* INTERACTIVE SYSTEM ARCHITECTURE VISUALIZER */}
        <div id="interactive-simulator" className="mb-20 p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-cyan-500/20 backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
                <Cpu size={14} /> Network Topology &amp; Architecture
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">System Topology Blueprint</h3>
            </div>

            {/* Architecture Selector Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-black/40 border border-white/10">
              <button
                onClick={() => setActiveArch('villa')}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  activeArch === 'villa'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <HomeIcon size={14} /> Villa &amp; Duplex
              </button>
              <button
                onClick={() => setActiveArch('society')}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  activeArch === 'society'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Building size={14} /> Society &amp; Tower
              </button>
              <button
                onClick={() => setActiveArch('office')}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  activeArch === 'office'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Building2 size={14} /> Corporate Office
              </button>
            </div>
          </div>

          {/* Architecture Content Container */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeArch}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
              {/* Left Details & Specs */}
              <div className="lg:col-span-6 space-y-4">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold text-white">{architecturePresets[activeArch].title}</h4>
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                      {architecturePresets[activeArch].badge}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 my-4">
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                      <div className="text-[10px] text-gray-400 uppercase font-bold">Wiring Standard</div>
                      <div className="text-xs font-semibold text-cyan-300">{architecturePresets[activeArch].wiring}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                      <div className="text-[10px] text-gray-400 uppercase font-bold">Max Capacity</div>
                      <div className="text-xs font-semibold text-blue-300">{architecturePresets[activeArch].maxIndoorUnits}</div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">Architectural Highlights:</div>
                    {architecturePresets[activeArch].highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Visual Flow Diagram Nodes */}
              <div className="lg:col-span-6 flex flex-col justify-between gap-3">
                <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1 flex items-center gap-1.5">
                  <Zap size={14} /> Signal Routing Flow (PoE &amp; Dry Contact Relay)
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {architecturePresets[activeArch].diagram.map((d, i) => {
                    const NodeIcon = d.icon;
                    return (
                      <div key={i} className="p-4 rounded-2xl bg-black/50 border border-cyan-500/20 flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${d.color} shrink-0`}>
                          <NodeIcon size={20} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">{d.node}</div>
                          <div className="text-[11px] text-gray-400">{d.type}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">Need a custom floor-plan design?</div>
                    <div className="text-[11px] text-gray-300">Our engineers provide free CAD wiring diagrams &amp; quotes.</div>
                  </div>
                  <Link
                    to={`/consultation?service=intercom-setup&topology=${activeArch}`}
                    className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shrink-0 transition-colors"
                  >
                    Request Blueprint
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA BANNER */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl mb-20">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
              <Sparkles size={14} /> On-Site Engineering Survey
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Upgrade Your Entry Communications Today
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm max-w-xl">
              Schedule a comprehensive on-site cabling and acoustic evaluation with our certified intercom specialists.
            </p>
          </div>
          <Link
            to="/consultation?service=intercom-setup"
            className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-sm flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/25 shrink-0 hover:scale-105"
          >
            Book Free Site Audit <ArrowRight size={16} />
          </Link>
        </div>

        {/* FAQ SECTION */}
        <div className="relative py-10 mb-10 overflow-hidden rounded-3xl">
          <FaqSection category="intercom-setup" theme="cyan" className="bg-transparent" />
        </div>

        <ChatAssistant />
      </div>
    </div>
  );
}
