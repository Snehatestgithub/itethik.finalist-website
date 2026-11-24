import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Cpu,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Check,
  Layers,
  ShieldCheck,
  Zap,
  Clock,
  Lock,
  Monitor,
  Flame,
  HardDrive,
  Gauge,
  Fan,
  ShieldAlert,
  Terminal,
} from 'lucide-react';
import ChatAssistant from '../components/ChatAssistant';
import FaqSection from '../components/FaqSection';
import CanvasParticleField from '../components/CanvasParticleField';
import pc3dRigImg from '../assets/images/custom_pc_3d_rig_1786440451449.jpg';

// ============================================================================
// STAGGERED REUSABLE TYPOGRAPHY COMPONENT
// ============================================================================
const StaggeredText = ({
  text,
  className = '',
  as = 'h2',
  delay = 0,
  stagger = 0.04,
  highlightWord = '',
  highlightClass = 'bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text',
}) => {
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 14, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const Component = motion[as] || motion.h2;

  return (
    <Component
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-20px' }}
      className={`inline-flex flex-wrap items-center gap-x-[0.24em] gap-y-1 ${className}`}
    >
      {words.map((word, index) => {
        const isHighlight =
          highlightWord && word.toLowerCase().includes(highlightWord.toLowerCase());
        return (
          <motion.span
            key={index}
            variants={wordVariants}
            className={`inline-block ${isHighlight ? highlightClass : ''}`}
          >
            {word}
          </motion.span>
        );
      })}
    </Component>
  );
};

// ============================================================================
// FUTURISTIC HIGH-END 3D DESKTOP RIG SHOWCASE (INTERACTIVE 3D TILT & LIGHTING)
// ============================================================================
const Futuristic3DDesktopRig = ({ rgbMode, setRgbMode }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [fanProfile, setFanProfile] = useState('turbo'); // 'quiet' | 'balanced' | 'turbo'

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 16;
    const rotY = ((x - centerX) / centerX) * 16;
    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const fanSpeedDuration = fanProfile === 'quiet' ? 3.5 : fanProfile === 'balanced' ? 2 : 0.8;

  const getThemeStyles = () => {
    if (rgbMode === 'purple') {
      return {
        accentBorder: 'border-purple-400/60',
        glowShadow: 'shadow-[0_0_60px_rgba(168,85,247,0.5)]',
        overlayFilter: 'mix-blend-screen bg-purple-600/20',
        glowGradient: 'from-purple-500 via-fuchsia-500 to-pink-500',
      };
    }
    if (rgbMode === 'emerald') {
      return {
        accentBorder: 'border-emerald-400/60',
        glowShadow: 'shadow-[0_0_60px_rgba(52,211,153,0.5)]',
        overlayFilter: 'mix-blend-screen bg-emerald-500/20',
        glowGradient: 'from-emerald-400 via-teal-500 to-cyan-500',
      };
    }
    if (rgbMode === 'rainbow') {
      return {
        accentBorder: 'border-cyan-400/80',
        glowShadow: 'shadow-[0_0_70px_rgba(168,85,247,0.6)]',
        overlayFilter: 'mix-blend-color-dodge bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-pink-500/20',
        glowGradient: 'from-cyan-400 via-purple-500 to-pink-500',
      };
    }
    return {
      accentBorder: 'border-cyan-400/60',
      glowShadow: 'shadow-[0_0_60px_rgba(6,182,212,0.5)]',
      overlayFilter: 'mix-blend-screen bg-cyan-500/20',
      glowGradient: 'from-cyan-400 via-blue-500 to-indigo-600',
    };
  };

  const theme = getThemeStyles();

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-xl mx-auto flex flex-col items-center justify-center py-4 cursor-grab active:cursor-grabbing select-none"
      style={{ perspective: '1200px' }}
    >
      {/* 3D Orbit Backlight Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          className="w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] rounded-full border border-dashed border-cyan-500/25 shadow-[0_0_80px_rgba(6,182,212,0.2)]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
          className="w-[290px] h-[290px] sm:w-[380px] sm:h-[380px] rounded-full border border-dotted border-purple-500/30"
        />
        <div className={`w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-tr ${theme.glowGradient} opacity-25 blur-[120px] transition-all duration-700 animate-pulse`} />
      </div>

      {/* Floating Hologram Pedestal Floor Glow */}
      <motion.div
        animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-6 w-[88%] h-12 bg-gradient-to-r from-cyan-500/30 via-purple-500/40 to-cyan-500/30 blur-2xl rounded-[100%] z-0 pointer-events-none"
      />

      {/* 3D TILT CONTAINER */}
      <div
        className="relative z-10 w-full transition-transform duration-300 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
      >
        {/* Floating 3D Telemetry Badges (Extruded on Z-axis) */}
        <motion.div
          animate={{ y: [-8, 6, -8] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transform: 'translateZ(65px)' }}
          className="absolute -top-5 -left-2 sm:-left-6 z-30 px-3.5 py-1.5 rounded-xl bg-slate-950/90 border border-cyan-400/60 text-cyan-300 text-[10px] font-mono font-bold shadow-[0_0_25px_rgba(6,182,212,0.5)] backdrop-blur-md flex items-center gap-1.5 pointer-events-none"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          ⚡ 5.8 GHz TURBO BOOST
        </motion.div>

        <motion.div
          animate={{ y: [6, -8, 6] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          style={{ transform: 'translateZ(75px)' }}
          className="absolute -top-5 -right-2 sm:-right-6 z-30 px-3.5 py-1.5 rounded-xl bg-slate-950/90 border border-purple-400/60 text-purple-300 text-[10px] font-mono font-bold shadow-[0_0_25px_rgba(168,85,247,0.5)] backdrop-blur-md flex items-center gap-1.5 pointer-events-none"
        >
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          🎮 240+ FPS ULTRA 4K
        </motion.div>

        <motion.div
          animate={{ y: [-6, 8, -6] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          style={{ transform: 'translateZ(60px)' }}
          className="absolute -bottom-3 -left-2 sm:-left-4 z-30 px-3 py-1.5 rounded-xl bg-slate-950/90 border border-emerald-400/60 text-emerald-300 text-[10px] font-mono font-bold shadow-[0_0_25px_rgba(52,211,153,0.4)] backdrop-blur-md flex items-center gap-1.5 pointer-events-none"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          ❄️ 28°C AIO LIQUID
        </motion.div>

        <motion.div
          animate={{ y: [8, -6, 8] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          style={{ transform: 'translateZ(70px)' }}
          className="absolute -bottom-3 -right-2 sm:-right-4 z-30 px-3 py-1.5 rounded-xl bg-slate-950/90 border border-amber-400/60 text-amber-300 text-[10px] font-mono font-bold shadow-[0_0_25px_rgba(251,191,36,0.4)] backdrop-blur-md flex items-center gap-1.5 pointer-events-none"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          🛡️ 72-HR BURN-IN PASSED
        </motion.div>

        {/* Main 3D Glass Chassis Container */}
        <div className={`relative w-full bg-slate-950/95 border-2 ${theme.accentBorder} rounded-3xl p-4 sm:p-5 ${theme.glowShadow} backdrop-blur-2xl overflow-hidden transition-all duration-500 group`}>
          {/* Top Rig Control Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-3 relative z-20">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-[11px] font-mono font-bold text-cyan-300 tracking-wider uppercase">
                3D RIG CONTROL // LIVE
              </span>
            </div>

            {/* RGB Mode Selector Buttons */}
            <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-white/10 shadow-md">
              <button
                type="button"
                onClick={() => setRgbMode('cyan')}
                className={`w-6 h-6 rounded-lg text-[10px] font-mono font-bold transition-all ${
                  rgbMode === 'cyan' ? 'scale-110 ring-2 ring-cyan-400 bg-cyan-400 text-slate-950 shadow-[0_0_12px_#06b6d4]' : 'bg-cyan-950 text-cyan-300 opacity-60 hover:opacity-100'
                }`}
                title="Cyan Neon"
              >
                C
              </button>
              <button
                type="button"
                onClick={() => setRgbMode('purple')}
                className={`w-6 h-6 rounded-lg text-[10px] font-mono font-bold transition-all ${
                  rgbMode === 'purple' ? 'scale-110 ring-2 ring-purple-400 bg-purple-500 text-slate-950 shadow-[0_0_12px_#c084fc]' : 'bg-purple-950 text-purple-300 opacity-60 hover:opacity-100'
                }`}
                title="Cyber Purple"
              >
                P
              </button>
              <button
                type="button"
                onClick={() => setRgbMode('emerald')}
                className={`w-6 h-6 rounded-lg text-[10px] font-mono font-bold transition-all ${
                  rgbMode === 'emerald' ? 'scale-110 ring-2 ring-emerald-400 bg-emerald-400 text-slate-950 shadow-[0_0_12px_#34d399]' : 'bg-emerald-950 text-emerald-300 opacity-60 hover:opacity-100'
                }`}
                title="Matrix Emerald"
              >
                E
              </button>
              <button
                type="button"
                onClick={() => setRgbMode('rainbow')}
                className={`w-6 h-6 rounded-lg text-[10px] font-mono font-bold transition-all ${
                  rgbMode === 'rainbow' ? 'scale-110 ring-2 ring-pink-400 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-slate-950 shadow-[0_0_12px_#f472b6]' : 'bg-slate-800 text-slate-300 opacity-60 hover:opacity-100'
                }`}
                title="Hyper RGB"
              >
                R
              </button>
            </div>
          </div>

          {/* 3D PC Image & Holographic Screen Frame */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 group/image" style={{ transformStyle: 'preserve-3d' }}>
            {/* The High-Res 3D PC Picture */}
            <img
              src={pc3dRigImg}
              alt="ITHETHIK High Performance 3D Custom Desktop Gaming PC Rig"
              className="w-full h-[280px] sm:h-[340px] object-cover object-center transform scale-100 group-hover/image:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Dynamic Color Tint Overlay based on RGB Mode */}
            <div className={`absolute inset-0 pointer-events-none transition-all duration-500 ${theme.overlayFilter}`} />

            {/* Glass Glare Sheen Line across chassis */}
            <div
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"
              style={{ transform: 'translateZ(30px)' }}
            />

            {/* Scanning Laser HUD Line */}
            <motion.div
              animate={{ y: ['-100%', '400%', '-100%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_20px_#38bdf8] z-20 pointer-events-none"
            />

            {/* Floating Live Telemetry Cards on top of image */}
            <div className="absolute bottom-3 left-3 right-3 z-20 grid grid-cols-2 gap-2" style={{ transform: 'translateZ(45px)' }}>
              <div className="p-2 rounded-xl bg-slate-950/85 border border-cyan-500/40 backdrop-blur-md flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Cpu size={14} className="text-cyan-400 animate-pulse" />
                  <span className="text-[10px] font-mono font-bold text-white uppercase">
                    Core i9-14900KS
                  </span>
                </div>
                <span className="text-[9px] font-mono font-bold text-cyan-300">5.8 GHz</span>
              </div>

              <div className="p-2 rounded-xl bg-slate-950/85 border border-purple-500/40 backdrop-blur-md flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Zap size={14} className="text-purple-400" />
                  <span className="text-[10px] font-mono font-bold text-white uppercase">
                    RTX 4090 24G
                  </span>
                </div>
                <span className="text-[9px] font-mono font-bold text-purple-300">2750 MHz</span>
              </div>
            </div>
          </div>

          {/* Interactive Fan Speed & System Telemetry Control Footer */}
          <div className="mt-3 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
            {/* Interactive Fan Profile Selector */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-slate-300 font-semibold">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: fanSpeedDuration, repeat: Infinity, ease: 'linear' }}
                >
                  <Fan size={14} className="text-cyan-400" />
                </motion.div>
                <span>FANS:</span>
              </div>
              <div className="flex items-center gap-1 bg-slate-900 px-2 py-1 rounded-lg border border-white/10">
                <button
                  type="button"
                  onClick={() => setFanProfile('quiet')}
                  className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase transition-all ${
                    fanProfile === 'quiet' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  0dB
                </button>
                <button
                  type="button"
                  onClick={() => setFanProfile('balanced')}
                  className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase transition-all ${
                    fanProfile === 'balanced' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  AUTO
                </button>
                <button
                  type="button"
                  onClick={() => setFanProfile('turbo')}
                  className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase transition-all ${
                    fanProfile === 'turbo' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  MAX
                </button>
              </div>
            </div>

            {/* Storage & Stability Indicators */}
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-slate-300 font-medium">
                <HardDrive size={12} className="text-purple-400" />
                <span className="text-purple-300 font-bold">7,400 MB/s</span>
              </span>
              <span className="flex items-center gap-1 text-emerald-400 font-bold">
                <Gauge size={12} />
                <span>100% STABLE</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// MAIN PAGE COMPONENT: ComputerRepair
// ============================================================================
const ComputerRepair = () => {
  const [rgbMode, setRgbMode] = useState('cyan');
  const [selectedIssue, setSelectedIssue] = useState('display');

  const subServices = [
    {
      id: 'custom-pc-building',
      title: 'Custom PC Builds',
      badge: 'GAMING, AI & WORKSTATIONS',
      subtitle: 'High FPS & Heavy Computing Rigs',
      path: '/services/custom-pc-building',
      color: 'cyan',
      icon: Cpu,
      highlights: [
        'Bottleneck-free GPU & CPU pairing',
        'Custom liquid cooling & airflow tuning',
        '72-hour burn-in stress & thermal testing',
        'RAM EXPO / XMP speed optimization',
      ],
      ctaText: 'Explore Custom Builds',
      visualBadge: 'Extreme 4K / AI Performance',
      fpsText: '240+ FPS Ultra Gaming',
    },
    {
      id: 'new-pc-building',
      title: 'New PC Builds',
      badge: '100% GENUINE SEALED PCS',
      subtitle: 'Home, Office & Enterprise Desktops',
      path: '/services/new-pc-building',
      color: 'purple',
      icon: Monitor,
      highlights: [
        '100% factory-sealed OEM parts with tax invoice',
        'Pre-installed genuine Windows & Office tools',
        'Quiet, energy-efficient high-efficiency PSUs',
        '3 to 5-year direct manufacturer warranty',
      ],
      ctaText: 'Explore New PCs',
      visualBadge: 'Enterprise Reliability',
      fpsText: 'Silent 0dB Operation',
    },
    {
      id: 'refurbished-pc-building',
      title: 'Refurbished PC Builds',
      badge: 'SAVE UP TO 60%',
      subtitle: 'Certified & Upgraded Budget PCs',
      path: '/services/refurbished-pc-building',
      color: 'emerald',
      icon: RotateCcw,
      highlights: [
        '50+ point hardware diagnostic & thermal audit',
        'Brand-new high-speed NVMe SSD pre-installed',
        'Deep chemical cleaning & fresh thermal repaste',
        'ITHETHIK certified warranty & SLA support',
      ],
      ctaText: 'Explore Refurbished PCs',
      visualBadge: 'Maximum Value Rigs',
      fpsText: '1080p High FPS Certified',
    },
  ];

  const issues = {
    display: {
      label: 'No Display / GPU Crash',
      icon: ShieldAlert,
      cause: 'PCIe Voltage Drop or Corrupted VRAM / Driver Fault',
      solution: 'Micro-voltage test, thermal pad replacement, and BIOS reflash.',
      sla: 'Same Day Diagnostic (2-4 hrs)',
    },
    power: {
      label: 'Motherboard No Power',
      icon: Zap,
      cause: 'Shorted Mosfet or blown capacitor on 12V CPU power rail',
      solution: 'Precision chip-level micro-soldering and capacitor swap.',
      sla: '24-48 Hours Repair',
    },
    thermal: {
      label: 'Overheating & Shutting Down',
      icon: Flame,
      cause: 'Dried thermal paste, pump failure, or clogged heatsink fins',
      solution: 'High-density ceramic repaste, liquid cooler bleed, dust purge.',
      sla: 'Express 3 Hour Turnaround',
    },
    boot: {
      label: 'BSOD & Storage Errors',
      icon: HardDrive,
      cause: 'Degraded S.M.A.R.T sector on SSD or corrupted Windows registry',
      solution: 'NVMe sector clone, data rescue, clean Windows OS build.',
      sla: 'Same Day Turnaround',
    },
  };

  const activeIssue = issues[selectedIssue];

  const trustBenefits = [
    {
      icon: ShieldCheck,
      title: 'QUALITY ASSURED',
      subtitle: 'Only the best components',
      color: 'text-cyan-400',
    },
    {
      icon: Zap,
      title: 'MAX PERFORMANCE',
      subtitle: 'Optimized for speed',
      color: 'text-blue-400',
    },
    {
      icon: Lock,
      title: 'SECURE & RELIABLE',
      subtitle: 'Tested & certified',
      color: 'text-purple-400',
    },
    {
      icon: Clock,
      title: 'SUPPORT 24/7',
      subtitle: "We're always here",
      color: 'text-emerald-400',
    },
  ];

  return (
    <div className="w-full max-w-none min-h-screen bg-[#020617] text-white pt-2 sm:pt-4 pb-6 relative overflow-x-hidden font-sans">
      {/* Background Environment */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#020617]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />

        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -left-32 w-[55vw] h-[55vw] rounded-full bg-cyan-600/15 blur-[160px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[35%] -right-40 w-[60vw] h-[60vw] rounded-full bg-purple-600/15 blur-[170px]"
        />

        {/* Dynamic Canvas Circuit & Light Node Field */}
        <CanvasParticleField variant="rgb" mode="mixed" density={42} speed={0.4} />
      </div>

      <div className="relative z-10 w-full max-w-none">
        {/* HERO SECTION */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8 text-left"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors px-3.5 py-2 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md"
            >
              <ArrowLeft size={14} /> Back to All Services
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* HERO LEFT SIDE */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12, delayChildren: 0.1 },
                },
              }}
              className="lg:col-span-6 space-y-6 text-left"
            >
              {/* Glowing Badge */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } },
                }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-950/80 backdrop-blur-md text-[11px] font-mono font-bold tracking-wider text-cyan-300 uppercase shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:scale-105 transition-transform"
              >
                <Sparkles size={14} className="text-cyan-400 animate-pulse" />
                HIGH PERFORMANCE COMPUTING SOLUTIONS
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white"
              >
                Computer <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 via-purple-400 to-cyan-400 bg-[length:200%_auto] animate-gradient-flow bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.3)]">
                  Building &amp;
                </span>{' '}
                <br />
                PC Services
              </motion.h1>

              {/* Short Tagline */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="text-lg sm:text-xl font-bold text-slate-300 tracking-wide"
              >
                Powerful. Reliable. Built for Performance.
              </motion.p>

              {/* Three Small Feature Highlights */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80"
              >
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-3.5 rounded-2xl bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md flex items-center gap-3 shadow-md hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                    <Zap size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-extrabold text-white uppercase block">
                      HIGH PERFORMANCE
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">Maximum Speed</span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-3.5 rounded-2xl bg-slate-900/80 border border-purple-500/30 backdrop-blur-md flex items-center gap-3 shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-purple-950 border border-purple-500/40 flex items-center justify-center text-purple-400 shrink-0">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-extrabold text-white uppercase block">
                      TRUSTED QUALITY
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">Genuine Parts</span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-3.5 rounded-2xl bg-slate-900/80 border border-blue-500/30 backdrop-blur-md flex items-center gap-3 shadow-md hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-950 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-extrabold text-white uppercase block">
                      EXPERT SUPPORT
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">Always Here</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 flex justify-center"
            >
              <Futuristic3DDesktopRig rgbMode={rgbMode} setRgbMode={setRgbMode} />
            </motion.div>
          </div>
        </section>

        {/* SUB-SERVICES SECTION */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 text-xs font-mono font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <Layers size={13} /> DESKTOP &amp; RIG CATEGORIES
            </div>

            <StaggeredText
              text="Our Computer Sub-Services"
              as="h2"
              highlightWord="Sub-Services"
              className="text-3xl sm:text-5xl font-black text-white justify-center text-center"
            />

            <div className="flex items-center justify-center gap-3 pt-1">
              <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-cyan-400" />
              <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#06b6d4]" />
              <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-cyan-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subServices.map((service, idx) => {
              const IconComp = service.icon;
              const isCyan = service.color === 'cyan';
              const isPurple = service.color === 'purple';

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.12, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className={`group relative rounded-3xl bg-slate-950/80 border backdrop-blur-xl p-7 flex flex-col justify-between shadow-2xl transition-all duration-300 overflow-hidden text-left ${
                    isCyan
                      ? 'border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.25)]'
                      : isPurple
                      ? 'border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]'
                      : 'border-emerald-500/30 hover:border-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.25)]'
                  }`}
                >
                  <div className="space-y-5 relative z-10">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ${
                          isCyan
                            ? 'bg-cyan-950/90 border-cyan-500/40 text-cyan-300'
                            : isPurple
                            ? 'bg-purple-950/90 border-purple-500/40 text-purple-300'
                            : 'bg-emerald-950/90 border-emerald-500/40 text-emerald-300'
                        }`}
                      >
                        <IconComp size={24} />
                      </div>
                      <span
                        className={`font-mono text-[10px] font-bold px-3 py-1 rounded-full uppercase border ${
                          isCyan
                            ? 'bg-cyan-950/90 border-cyan-500/30 text-cyan-300'
                            : isPurple
                            ? 'bg-purple-950/90 border-purple-500/30 text-purple-300'
                            : 'bg-emerald-950/90 border-emerald-500/30 text-emerald-300'
                        }`}
                      >
                        {service.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-black text-white group-hover:text-cyan-200 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-400 mt-1">
                        {service.subtitle}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 relative overflow-hidden group/graphic">
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-2">
                        <span>{service.visualBadge}</span>
                        <span className="text-cyan-400 font-bold">{service.fpsText}</span>
                      </div>
                      <div className="h-16 rounded-xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 flex items-center justify-around px-3">
                        <Cpu size={28} className="text-cyan-400 animate-pulse" />
                        <div className="h-8 w-0.5 bg-slate-800" />
                        <Fan size={28} className="text-purple-400 animate-spin" />
                        <div className="h-8 w-0.5 bg-slate-800" />
                        <Gauge size={28} className="text-emerald-400" />
                      </div>
                    </div>

                    <ul className="space-y-2.5 pt-2 text-xs text-slate-300">
                      {service.highlights.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5">
                          <div
                            className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
                              isCyan
                                ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
                                : isPurple
                                ? 'bg-purple-500/20 border-purple-500/40 text-purple-300'
                                : 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                            }`}
                          >
                            <Check size={10} />
                          </div>
                          <span className="leading-tight">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-slate-800/80 mt-6 relative z-10">
                    <Link
                      to={service.path}
                      className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-between group/btn shadow-md border ${
                        isCyan
                          ? 'bg-cyan-950/60 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 border-cyan-500/40 hover:border-cyan-300 text-cyan-200 hover:text-slate-950'
                          : isPurple
                          ? 'bg-purple-950/60 hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-600 border-purple-500/40 hover:border-purple-300 text-purple-200 hover:text-white'
                          : 'bg-emerald-950/60 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-600 border-emerald-500/40 hover:border-emerald-300 text-emerald-200 hover:text-slate-950'
                      }`}
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight size={15} className="group-hover/btn:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* HARDWARE DIAGNOSTIC TROUBLESHOOTING SIMULATOR */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-slate-800/90 backdrop-blur-xl text-left">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
              <div>
                <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/40 uppercase">
                  HARDWARE DIAGNOSTIC CONSOLE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                  Select Your PC Symptom for Immediate Technical Diagnosis
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <Terminal size={14} className="text-cyan-400" /> Instant Repair Diagnostic
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-5 space-y-2.5">
                {Object.entries(issues).map(([key, val]) => {
                  const Icon = val.icon;
                  const isSelected = selectedIssue === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedIssue(key)}
                      className={`w-full p-3.5 rounded-2xl border text-left transition-all duration-200 flex items-center gap-3 ${
                        isSelected
                          ? 'bg-gradient-to-r from-cyan-950/80 to-slate-900 border-cyan-500/60 text-white shadow-lg shadow-cyan-500/10'
                          : 'bg-slate-900/50 border-slate-800/80 text-slate-400 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                            : 'bg-slate-800/80 text-slate-400'
                        }`}
                      >
                        <Icon size={18} />
                      </div>
                      <span className="text-xs font-bold font-sans">{val.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="lg:col-span-7 p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-cyan-950/30 to-slate-950 border border-cyan-500/30 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                  <span>DIAGNOSTIC REPORT // {selectedIssue.toUpperCase()}</span>
                  <span className="bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-500/30 text-[10px]">
                    SLA: {activeIssue.sla}
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase block">
                      Probable Hardware Root Cause:
                    </span>
                    <p className="text-sm font-semibold text-rose-300 mt-0.5">{activeIssue.cause}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-800">
                    <span className="text-[11px] font-mono text-slate-400 uppercase block">
                      ITHETHIK Precision Repair Plan:
                    </span>
                    <p className="text-sm font-bold text-emerald-300 mt-0.5">{activeIssue.solution}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Need immediate repair dispatch?</span>
                  <Link
                    to="/contact"
                    className="px-4 py-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                  >
                    Book Repair Now <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.6)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
              {trustBenefits.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center shrink-0 shadow-inner">
                      <Icon size={24} className={item.color} />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono font-extrabold text-white uppercase tracking-wider">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">{item.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Existing FAQ Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <FaqSection />
        </div>

        {/* ====================================================================
            5. BOTTOM CONTAINED CTA CARD WITH NEON WAVES
            ==================================================================== */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="relative rounded-3xl p-8 sm:p-10 border border-cyan-500/40 bg-slate-950/90 overflow-hidden shadow-[0_0_60px_rgba(6,182,212,0.2)] backdrop-blur-2xl">
            {/* Flowing Ethereal Neon Waves SVG Background */}
            <div className="absolute inset-0 pointer-events-none opacity-60 z-0 mix-blend-screen">
              <svg
                className="w-full h-full min-w-[800px]"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="card-neon-grad-2" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#818cf8" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#c084fc" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                <motion.path
                  animate={{
                    d: [
                      'M0,180 C320,300 440,40 720,180 C1000,320 1140,60 1440,180 L1440,320 L0,320 Z',
                      'M0,140 C380,40 480,290 720,140 C960,-10 1180,240 1440,140 L1440,320 L0,320 Z',
                      'M0,180 C320,300 440,40 720,180 C1000,320 1140,60 1440,180 L1440,320 L0,320 Z',
                    ],
                  }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                  fill="url(#card-neon-grad-2)"
                />
              </svg>
            </div>

            {/* Glowing Radial Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-cyan-900/20 to-blue-900/20 blur-xl pointer-events-none z-0" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
              <div className="flex items-center gap-5">
                {/* Glowing Icon Badge */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 border border-purple-500/50 flex items-center justify-center shrink-0 shadow-[0_0_25px_rgba(168,85,247,0.4)]">
                  <Cpu size={32} className="text-cyan-300 animate-pulse" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    Need a Powerful Computer?
                  </h3>
                  <p className="text-slate-300 text-sm font-medium">
                    Let&apos;s build the perfect setup for you.
                  </p>
                </div>
              </div>

              <div className="shrink-0 w-full md:w-auto text-center md:text-right">
                <Link
                  to="/consultation?service=computer-repair"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 hover:from-purple-500 hover:to-cyan-300 text-white font-extrabold text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all hover:scale-105 border border-white/20"
                >
                  <span>Request Free Consultation</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section (Sub-Service Level) */}
        <FaqSection category="computer-repair" />

        <ChatAssistant />
      </div>
    </div>
  );
};

export default ComputerRepair;
