import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Cpu,
  Zap,
  Layers,
  Settings,
  ShieldCheck,
  AlertTriangle,
  Flame,
  ArrowRight,
  ArrowLeft,
  Headphones,
  CheckCircle2,
  Sliders,
  Check,
  Microscope,
} from 'lucide-react';
import ChatAssistant from '../components/ChatAssistant';
import FaqSection from '../components/FaqSection';
import CanvasParticleField from '../components/CanvasParticleField';
import CircuitBackground from '../components/CircuitBackground';
import chipRepairImg from '../assets/images/chip_level_repair_3d_1786440951071_1786442199787.jpg';

const ChipLevelRepair = () => {
  const [selectedIssue, setSelectedIssue] = useState('nopower');

  const diagnosticIssues = {
    nopower: {
      title: 'Dead Motherboard / Zero Power Input',
      rootCause: 'Blown MOSFETs, Charging IC failure, or Primary 19V rail short circuit.',
      solution: 'Thermal camera tracking to replace burned SMD capacitors and re-tune VRMs.',
      warranty: '90-Day Repair Guarantee',
    },
    nodisplay: {
      title: 'Fans Spin But No Display Output',
      rootCause: 'Corrupted SPI BIOS chip, GPU VRM failure, or RAM power IC line drop.',
      solution: 'EEPROM BIOS reprogramming, ME region clean, and BGA GPU reflow/reball.',
      warranty: '90-Day Repair Guarantee',
    },
    liquid: {
      title: 'Liquid Damage & Corrosion Repair',
      rootCause: 'Acid corrosion bridging PCB traces, shorting 3.3V/5V standby rails.',
      solution: 'Ultrasonic board bath chemical cleaning, trace jumper wire repair & IC replacement.',
      warranty: '60-Day Repair Guarantee',
    },
  };

  const activeIssue = diagnosticIssues[selectedIssue];

  const features = [
    {
      icon: Cpu,
      title: 'Motherboard Trace Repair',
      desc: 'Precision micro-soldering and copper circuit trace repair under HD microscopes.',
      tag: 'Micro-Soldering',
    },
    {
      icon: Layers,
      title: 'Power & Charging IC Swap',
      desc: 'Replacement of damaged Power IC, Charging IC, Type-C controllers, and MOSFETs.',
      tag: 'IC Replacement',
    },
    {
      icon: Zap,
      title: 'Thermal Camera Short Tracing',
      desc: 'Infrared thermal imaging to pinpoint micro short-circuits instantly.',
      tag: 'IR Thermal Imaging',
    },
    {
      icon: Settings,
      title: 'SPI BIOS & EEPROM Flashing',
      desc: 'EEPROM chip flashing, ME region cleaning, and password unlock services.',
      tag: 'BIOS Reprogram',
    },
    {
      icon: AlertTriangle,
      title: 'BGA Chip Reballing & Reflow',
      desc: 'Specialized GPU & Processor BGA chip reballing with precision stencils.',
      tag: 'BGA Reballing',
    },
    {
      icon: Flame,
      title: 'SMD Component Replacement',
      desc: 'Micro-soldering replacement of burned capacitors, resistors, and choke coils.',
      tag: 'SMD Repair',
    },
    {
      icon: ShieldCheck,
      title: 'No Display / Black Screen Fix',
      desc: 'Restoring output display on motherboards with dead display lines or backlight failures.',
      tag: 'Display Rail Fix',
    },
    {
      icon: Headphones,
      title: '90-Day Repair Warranty',
      desc: 'All chip-level repair jobs include a 90-day warranty with free follow-up diagnostic.',
      tag: '90-Day Warranty',
    },
  ];

  const processSteps = [
    { step: '01', title: 'Microscope & Thermal Audit', desc: 'Inspection under 45X stereo microscope & IR thermal imaging camera.' },
    { step: '02', title: 'Schematic Trace Analysis', desc: 'Oscilloscope and multimeter schematic tracing on multi-layer PCB boards.' },
    { step: '03', title: 'Precision BGA Soldering', desc: 'BGA rework, IC replacement, and trace repair in anti-static environment.' },
    { step: '04', title: '48-Hour Burn-In Test', desc: 'Extensive benchmark stress testing under maximum CPU/GPU load.' },
  ];

  return (
    <div className="min-h-screen bg-[#020617] pt-2 sm:pt-4 pb-20 px-6 md:px-10 relative overflow-hidden">
      {/* Full Page High-Tech Background Image with Ambient Dark Overlays */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <CircuitBackground glowColor="cyan" intensity="subtle" />
        <img
          src={chipRepairImg}
          alt="Chip Level Micro Soldering Background"
          className="w-full h-full object-cover object-center opacity-30 filter saturate-150 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/75 via-[#020617]/85 to-[#020617]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,#020617_85%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-10%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-violet-600/20 blur-[140px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[30%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-600/20 blur-[130px]"
        />

        {/* Dynamic Canvas Circuit & Light Node Field */}
        <CanvasParticleField variant="purple" mode="mixed" density={40} speed={0.35} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Navigation Bar Back Button */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mb-6">
          <Link
            to="/services/computer-services"
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-cyan-400 transition-colors px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <ArrowLeft size={14} /> Back to Computer Services
          </Link>
        </motion.div>

        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left Hero Content */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-md text-xs font-bold tracking-wider text-violet-300 uppercase">
              <Microscope size={14} className="text-violet-400 animate-pulse" />
              Micro-Soldering & Circuit Diagnostics
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
              Chip-Level <br />
              <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text">
                Motherboard Repair
              </span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Don&apos;t replace expensive motherboards when you can fix them at component level! Expert BGA reballing, power IC replacement, liquid damage recovery, and thermal short tracing.
            </p>

            {/* Quick Stats Pills */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/10 text-center">
                <span className="text-xl sm:text-2xl font-extrabold text-violet-400 block">45X</span>
                <span className="text-[10px] font-mono text-gray-400 uppercase">Microscope Audit</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/10 text-center">
                <span className="text-xl sm:text-2xl font-extrabold text-indigo-400 block">IR Thermal</span>
                <span className="text-[10px] font-mono text-gray-400 uppercase">Short Tracing</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/10 text-center">
                <span className="text-xl sm:text-2xl font-extrabold text-pink-400 block">90 Days</span>
                <span className="text-[10px] font-mono text-gray-400 uppercase">Repair Guarantee</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-extrabold text-sm flex items-center gap-2 shadow-lg shadow-violet-500/25 transition-all"
              >
                Book Chip Diagnosis <ArrowRight size={16} />
              </Link>
              <a
                href="#issue-diagnostics"
                className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-sm transition-all"
              >
                Diagnose Fault ↓
              </a>
            </div>
          </motion.div>

          {/* Right Hero High-Tech Diagnostic Telemetry Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <div className="relative w-full max-w-lg mx-auto bg-slate-900/80 border border-violet-500/40 rounded-3xl p-6 shadow-[0_0_50px_rgba(139,92,246,0.25)] backdrop-blur-xl space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-ping" />
                  <span className="text-xs font-mono font-bold text-violet-300 uppercase tracking-wider">MICRO-SOLDERING LAB TELEMETRY</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-400/30 text-[10px] font-mono font-bold uppercase">
                  ACTIVE BENCH
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/10 space-y-1">
                  <span className="text-[10px] font-mono text-gray-400 uppercase">Primary Rail (19V)</span>
                  <div className="text-sm font-extrabold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 size={14} /> Short Isolated
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/10 space-y-1">
                  <span className="text-[10px] font-mono text-gray-400 uppercase">Infrared Thermal</span>
                  <div className="text-sm font-extrabold text-violet-300 flex items-center gap-1">
                    <Zap size={14} /> Hotspot Located
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/10 space-y-1">
                  <span className="text-[10px] font-mono text-gray-400 uppercase">BGA Rework</span>
                  <div className="text-sm font-extrabold text-indigo-300 flex items-center gap-1">
                    <Cpu size={14} /> Reball Precision
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/10 space-y-1">
                  <span className="text-[10px] font-mono text-gray-400 uppercase">Microscope Audit</span>
                  <div className="text-sm font-extrabold text-pink-300 flex items-center gap-1">
                    <Microscope size={14} /> 45X HD Optical
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-violet-500/10 border border-violet-400/30 text-xs text-violet-200 flex items-center justify-between">
                <span>Diagnostic Accuracy Rate</span>
                <span className="font-mono font-extrabold text-violet-300">98.6% Success</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ISSUE DIAGNOSTICS FINDER */}
        <div id="issue-diagnostics" className="mb-20 bg-slate-900/60 border border-violet-500/30 p-6 sm:p-8 rounded-3xl backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-wider block mb-1">
                HARDWARE FAULT DIAGNOSTIC
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Select Your Motherboard Issue</h2>
            </div>

            {/* Diagnostic Selector Tabs */}
            <div className="flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-2xl border border-white/10">
              <button
                onClick={() => setSelectedIssue('nopower')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedIssue === 'nopower'
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-600/20'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Zero Power
              </button>
              <button
                onClick={() => setSelectedIssue('nodisplay')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedIssue === 'nodisplay'
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-600/20'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                No Display
              </button>
              <button
                onClick={() => setSelectedIssue('liquid')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedIssue === 'liquid'
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-600/20'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Liquid Damage
              </button>
            </div>
          </div>

          {/* Active Diagnostic Fault Breakdown */}
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 mb-6">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <span className="text-sm font-extrabold text-white font-mono uppercase flex items-center gap-2">
                <AlertTriangle size={16} className="text-violet-400" /> {activeIssue.title}
              </span>
              <span className="px-3 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 font-mono text-xs font-bold">
                {activeIssue.warranty}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-[10px] font-mono text-gray-400 uppercase block mb-1">Root Cause</span>
                <p className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <AlertTriangle size={14} /> {activeIssue.rootCause}
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-[10px] font-mono text-gray-400 uppercase block mb-1">ITHETHIK Micro-Repair Solution</span>
                <p className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                  <Check size={14} /> {activeIssue.solution}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-gray-400 flex items-center gap-1.5 font-mono">
              <Sliders size={14} className="text-violet-400" /> Free in-lab estimate provided before commencing any component soldering work!
            </span>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-extrabold flex items-center gap-1.5 transition-all shadow-md shrink-0"
            >
              Get Inspection Quote <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Visual Features Grid */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white mb-2">Chip-Level Repair Capabilities</h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              Our anti-static electronics laboratory is equipped with BGA stations, thermal imaging, and oscilloscopes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  viewport={{ once: true }}
                  className="bg-slate-900/50 border border-white/10 p-5 rounded-2xl hover:border-violet-500/50 transition-all hover:bg-slate-900/80 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
                        <Icon size={20} />
                      </div>
                      <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-violet-300">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-violet-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed mb-3">{item.desc}</p>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-violet-400">
                    <CheckCircle2 size={12} /> Expert Service
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Workflow Steps Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">Our Repair Process</h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              Systematic fault isolation and precision micro-soldering.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 relative">
            {processSteps.map((s, idx) => (
              <div key={idx} className="bg-slate-900/50 border border-white/10 p-5 rounded-2xl relative group hover:border-violet-500/40 transition-all">
                <span className="text-3xl font-extrabold text-violet-500/25 mb-2 block font-mono">{s.step}</span>
                <h4 className="text-sm font-bold text-white mb-1">{s.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-violet-950 to-slate-900 border border-violet-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl mb-20">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
              Have a Dead Motherboard or Laptop Board?
            </h3>
            <p className="text-gray-300 text-sm max-w-xl">
              Save thousands compared to full motherboard replacement. Get a free diagnosis from our micro-soldering team today.
            </p>
          </div>
          <Link
            to="/consultation?service=chip-level-repair"
            className="px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-extrabold text-sm flex items-center gap-2 transition-all shadow-lg shadow-violet-500/25 shrink-0"
          >
            Request Free Diagnosis <ArrowRight size={18} />
          </Link>
        </div>

        {/* FAQ Section (Sub-Service Level) */}
        <FaqSection category="chip-level-repair" />
        <ChatAssistant />
      </div>
    </div>
  );
};

export default ChipLevelRepair;
