import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Cpu,
  RotateCcw,
  ArrowRight,
  Sparkles,
  Check,
  Layers,
  ShieldCheck,
  Zap,
  Clock,
  Lock,
  Monitor,
  Home,
  ChevronRight,
} from 'lucide-react';
import ChatAssistant from '../components/ChatAssistant';
import FaqSection from '../components/FaqSection';
import DesktopTechParticles from '../components/DesktopTechParticles';
import CircuitBackground from '../components/CircuitBackground';
import RevealOnScroll from '../components/RevealOnScroll';
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
const Futuristic3DDesktopRig = () => (
  <motion.div
    initial={{ opacity: 0, y: 18, scale: 0.985 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -4, rotateX: -1, rotateY: -1.5 }}
    style={{ transformPerspective: 1400 }}
    className="relative w-full max-w-2xl mx-auto"
  >
    <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-3xl" />
    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-slate-950 shadow-[0_28px_90px_rgba(0,0,0,0.55)]">
      <img
        src={pc3dRigImg}
        alt="Custom desktop PC in a premium performance build"
        className="block aspect-[16/9] w-full object-cover object-center"
        loading="eager"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/20 via-transparent to-cyan-200/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/45 to-transparent" />
      <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/55 px-3 py-1.5 text-[10px] font-mono font-semibold uppercase tracking-[0.18em] text-slate-100 backdrop-blur-md sm:left-6 sm:top-6">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.9)]" />
        ItEthik · Desktop systems
      </div>
    </div>
    <div className="pointer-events-none absolute -bottom-3 left-[12%] right-[12%] h-5 rounded-[50%] bg-cyan-400/20 blur-xl" />
  </motion.div>
);
const NewPCBuildGraphic = () => (
  <div className="relative w-full h-48 rounded-2xl bg-slate-950/90 border border-purple-500/30 overflow-hidden flex items-center justify-center p-4 group/graphic">
    {/* Background glow */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15),transparent_70%)]" />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:1rem_1rem]" />

    {/* Elliptical Purple Pedestal Floor */}
    <div className="absolute bottom-3 w-44 h-8 rounded-[100%] border-2 border-purple-400/60 bg-purple-950/50 shadow-[0_0_25px_rgba(168,85,247,0.6)] flex items-center justify-center">
      <div className="w-32 h-5 rounded-[100%] border border-purple-300/80 bg-purple-500/20 shadow-inner" />
    </div>

    {/* Floating Setup (Monitor + PC Tower) */}
    <motion.div
      animate={{ y: [-3, 3, -3] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      className="relative z-10 flex items-end gap-2"
    >
      {/* Desktop Monitor */}
      <div className="flex flex-col items-center">
        <div className="w-28 h-20 rounded-lg bg-slate-900 border-2 border-purple-400/80 p-1 shadow-[0_0_20px_rgba(168,85,247,0.4)] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-500 opacity-80" />
          <div className="relative z-10 text-center">
            <Monitor size={20} className="text-white drop-shadow-md mx-auto" />
            <span className="text-[7px] font-mono font-bold text-white uppercase block mt-0.5">OEM SEALED</span>
          </div>
        </div>
        <div className="w-4 h-2 bg-slate-800 border-x border-purple-400/60" />
        <div className="w-10 h-1 bg-purple-400/80 rounded-full" />
      </div>

      {/* OEM Tower Chassis */}
      <div className="w-14 h-24 rounded-lg bg-slate-900 border-2 border-purple-400/80 p-1.5 shadow-[0_0_20px_rgba(168,85,247,0.4)] flex flex-col justify-between">
        <div className="w-2 h-2 rounded-full bg-purple-400 animate-ping mb-1" />
        <div className="space-y-1">
          <div className="h-1 rounded bg-purple-500/40" />
          <div className="h-1 rounded bg-purple-500/40" />
        </div>
        <div className="text-[6px] font-mono text-purple-300 font-bold text-center">3YR WTY</div>
      </div>
    </motion.div>
  </div>
);

const RefurbishedPCBuildGraphic = () => (
  <div className="relative w-full h-48 rounded-2xl bg-slate-950/90 border border-emerald-500/30 overflow-hidden flex items-center justify-center p-4 group/graphic">
    {/* Background glow */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.15),transparent_70%)]" />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:1rem_1rem]" />

    {/* Elliptical Green Pedestal Floor */}
    <div className="absolute bottom-3 w-44 h-8 rounded-[100%] border-2 border-emerald-400/60 bg-emerald-950/50 shadow-[0_0_25px_rgba(52,211,153,0.6)] flex items-center justify-center">
      <div className="w-32 h-5 rounded-[100%] border border-emerald-300/80 bg-emerald-500/20 shadow-inner" />
    </div>

    {/* Floating Refurbished PC Rig Setup */}
    <motion.div
      animate={{ y: [-3, 3, -3] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      className="relative z-10 flex items-end gap-2"
    >
      {/* Refurbished Monitor with Recycle emblem */}
      <div className="flex flex-col items-center">
        <div className="w-28 h-20 rounded-lg bg-slate-900 border-2 border-emerald-400/80 p-1 shadow-[0_0_20px_rgba(52,211,153,0.4)] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 opacity-90" />
          <div className="relative z-10 text-center flex flex-col items-center">
            <RotateCcw size={22} className="text-emerald-400 animate-spin" style={{ animationDuration: '8s' }} />
            <span className="text-[7px] font-mono font-bold text-emerald-300 uppercase mt-0.5">50-PT CERTIFIED</span>
          </div>
        </div>
        <div className="w-4 h-2 bg-slate-800 border-x border-emerald-400/60" />
        <div className="w-10 h-1 bg-emerald-400/80 rounded-full" />
      </div>

      {/* Upgraded Tower */}
      <div className="w-14 h-24 rounded-lg bg-slate-900 border-2 border-emerald-400/80 p-1.5 shadow-[0_0_20px_rgba(52,211,153,0.4)] flex flex-col justify-between">
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <div className="p-1 rounded bg-emerald-950 border border-emerald-500/40 text-center">
          <span className="text-[6px] font-mono text-emerald-300 font-bold uppercase block">NVMe SSD</span>
        </div>
        <div className="text-[6px] font-mono text-emerald-300 font-bold text-center">SAVE 60%</div>
      </div>
    </motion.div>
  </div>
);

// ============================================================================
// MAIN PAGE COMPONENT: ComputerServices
// ============================================================================
const ComputerServices = () => {
  // Exact 3 Sub-Services Cards
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

  // Benefits / Trust items
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
    <div className="w-full max-w-none min-h-screen bg-[#020617] text-white pt-4 sm:pt-6 pb-12 relative overflow-x-hidden font-sans">
      {/* ====================================================================
          1. CONTINUOUS EDGE-TO-EDGE FUTURISTIC BACKGROUND ENVIRONMENT
          ==================================================================== */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Deep Cyber Navy Base */}
        <div className="absolute inset-0 bg-[#020617]" />

        {/* Subtle Animated Circuit Pattern Background */}
        <CircuitBackground glowColor="cyan" intensity="subtle" />

        {/* Digital Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />

        {/* Floating Glowing Radial Ambient Orbs */}
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
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 left-[20%] w-[50vw] h-[50vw] rounded-full bg-blue-600/15 blur-[160px]"
        />

        {/* Live Desktop Hardware Circuit Nodes & Particle Pulses */}
        <DesktopTechParticles variant="rgb" density={45} showBadges={true} />
      </div>

      <div className="relative z-10 w-full max-w-none">
        {/* ====================================================================
            2. HERO SECTION
            ==================================================================== */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 lg:mb-16">
          {/* Breadcrumb Navigation Bar */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-4 sm:mb-6 text-left"
          >
            <nav aria-label="Breadcrumb" className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-900/90 border border-cyan-500/30 backdrop-blur-md text-xs sm:text-sm font-medium shadow-[0_0_25px_rgba(6,182,212,0.18)]">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-cyan-300 transition-colors px-2 py-0.5 rounded-md hover:bg-white/5"
              >
                <Home size={14} className="text-cyan-400" />
                <span>Home</span>
              </Link>
              <ChevronRight size={13} className="text-slate-600" />
              <Link
                to="/services"
                className="text-slate-300 hover:text-cyan-300 transition-colors px-2 py-0.5 rounded-md hover:bg-white/5"
              >
                Services
              </Link>
              <ChevronRight size={13} className="text-slate-600" />
              <span className="text-cyan-300 font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/40">
                PC &amp; Computer Services
              </span>
            </nav>
          </motion.div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 text-left lg:col-span-5"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/[0.07] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-200">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />
                Computer services
              </div>

              <h1 className="max-w-xl text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Desktop computing,
                <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
                  done right.
                </span>
              </h1>

              <p className="max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
                Custom PCs, dependable desktops, and expert repairs—built around how you work.
              </p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-1">
                <a
                  href="#computer-subservices"
                  className="group inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_8px_28px_rgba(34,211,238,0.2)] transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Explore services
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
                <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500 sm:text-[11px]">
                  Custom builds · New PCs · Refurbished
                </span>
              </div>
            </motion.div>

            <div className="lg:col-span-7">
              <Futuristic3DDesktopRig />
            </div>
          </div>
        </section>

        {/* ====================================================================
            3. SUB-SERVICES SECTION (EXACT 3 CARDS)
            ==================================================================== */}
        <section id="computer-subservices" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 sm:mb-16">
          <div className="text-center mb-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 text-xs font-mono font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <Layers size={13} /> DESKTOP &amp; RIG CATEGORIES
            </div>

            <StaggeredText
              text="Our Computer Sub-Services"
              as="h2"
              highlightWord="Sub-Services"
              className="text-3xl sm:text-5xl font-black text-white justify-center text-center"
            />

            {/* Decorative Neon Lines */}
            <div className="flex items-center justify-center gap-3 pt-1">
              <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-cyan-400" />
              <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#06b6d4]" />
              <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-cyan-400" />
            </div>
          </div>

          {/* THREE SERVICE MODULES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subServices.map((service, idx) => {
              const IconComp = service.icon;
              const isCyan = service.color === 'cyan';
              const isPurple = service.color === 'purple';

              return (
                <RevealOnScroll
                  key={service.id}
                  delay={idx * 100}
                  className={`group relative rounded-3xl bg-slate-950/80 border backdrop-blur-xl p-7 flex flex-col justify-between shadow-2xl transition-all duration-300 overflow-hidden text-left ${
                    isCyan
                      ? 'border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.25)]'
                      : isPurple
                      ? 'border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]'
                      : 'border-emerald-500/30 hover:border-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.25)]'
                  }`}
                >
                  {/* Subtle Corner Glow Accent */}
                  <div
                    className={`absolute -top-20 -right-20 w-44 h-44 rounded-full blur-3xl pointer-events-none transition-all ${
                      isCyan
                        ? 'bg-cyan-500/15 group-hover:bg-cyan-500/30'
                        : isPurple
                        ? 'bg-purple-500/15 group-hover:bg-purple-500/30'
                        : 'bg-emerald-500/15 group-hover:bg-emerald-500/30'
                    }`}
                  />

                  {/* Top Header inside Card */}
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

                    {/* Integrated Custom Desktop Graphic Stage */}
                    {service.id === 'custom-pc-building' && <NewPCBuildGraphic />}
                    {service.id === 'new-pc-building' && <NewPCBuildGraphic />}
                    {service.id === 'refurbished-pc-building' && <RefurbishedPCBuildGraphic />}

                    {/* Feature Highlights List */}
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

                  {/* Card Bottom Clickable Button */}
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
                </RevealOnScroll>
              );
            })}
          </div>
        </section>

        {/* ====================================================================
            4. TRUST / BENEFITS HORIZONTAL STRIP
            ==================================================================== */}
        <RevealOnScroll as="section" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 sm:mb-16">
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
        </RevealOnScroll>

        {/* Existing FAQ Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <FaqSection />
        </div>

        {/* ====================================================================
            5. BOTTOM CONTAINED CTA CARD WITH NEON WAVES
            ==================================================================== */}
        <RevealOnScroll as="section" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
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
                  <linearGradient id="card-neon-grad-1" x1="0" y1="0" x2="1" y2="0">
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
                  fill="url(#card-neon-grad-1)"
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
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 hover:from-purple-500 hover:to-cyan-300 text-white font-extrabold text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all hover:scale-105 border border-white/20"
                >
                  <span>Let&apos;s Build Yours</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* FAQ Section (Computer Category Level) */}
        <FaqSection category="computer-services" />

        <ChatAssistant />
      </div>
    </div>
  );
};

export default ComputerServices;
