import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Cpu,
  Monitor,
  Battery,
  Flame,
  HardDrive,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Sliders,
  Zap,
  Clock,
  Lock,
  Wrench,
  AlertTriangle,
  Fan,
  Droplets,
} from 'lucide-react';
import ChatAssistant from '../components/ChatAssistant';
import FaqSection from '../components/FaqSection';
import CanvasParticleField from '../components/CanvasParticleField';
import CircuitBackground from '../components/CircuitBackground';
import laptopRepair3dImg from '../assets/images/laptop_repair_3d_1787050523327.jpg';

export default function LaptopRepair() {
  const [selectedIssue, setSelectedIssue] = useState('display');

  const diagnosticIssues = {
    display: {
      title: 'Broken / Flickering Display & Glass Replacement',
      icon: Monitor,
      badge: 'Screen & Panel',
      symptoms: ['Cracked LCD/OLED glass', 'Vertical/horizontal colored lines', 'Black screen with power LED ON', 'Flickering or low backlight'],
      resolution: 'Original OEM 1080p, 2K, 4K UHD, 120Hz/144Hz IPS & Retina panel replacement with true-tone calibration and zero dead-pixel guarantee.',
      turnaround: 'Same-Day (2-3 Hours)',
      warranty: '90 Days Warranty',
      costEstimate: 'Budget to Flagship Grade',
    },
    battery: {
      title: 'Battery Fast-Drain, Swelling & No Charging',
      icon: Battery,
      badge: 'Power & Charging',
      symptoms: ['Battery discharging within minutes', 'Laptop only works on AC power', 'Swollen touchpad or bottom casing', 'Type-C / DC jack loose connection'],
      resolution: 'High-cycle grade-A OEM battery installation, charging IC circuit rework, and DC power jack connector micro-soldering.',
      turnaround: 'Same-Day (1-2 Hours)',
      warranty: '180 Days Warranty',
      costEstimate: 'Affordable OEM Replacements',
    },
    liquid: {
      title: 'Water / Coffee Liquid Spill Damage Recovery',
      icon: Droplets,
      badge: 'Emergency Chemical Wash',
      symptoms: ['Liquid spilled into keyboard/vents', 'Laptop abruptly shut down & wont turn ON', 'Corroded motherboard contacts', 'Sticky keyboard keys'],
      resolution: 'Instant battery disconnect, ultrasonic PCB isopropyl chemical decontamination, corrosion removal, shorted resistor/capacitor replacement.',
      turnaround: '24 - 48 Hours',
      warranty: '60 Days Warranty',
      costEstimate: 'Component Rework Level',
    },
    thermal: {
      title: 'Overheating, Loud Fan Noise & Thermal Throttling',
      icon: Flame,
      badge: 'Thermal Servicing',
      symptoms: ['Laptop burning hot on lap/desk', 'Fan screeching at max RPM', 'Sudden power-off during gaming/work', 'Severe FPS drops & lag'],
      resolution: 'Complete dust purge, copper heat-pipe ultrasonic cleaning, premium Arctic MX-4 / Thermal Grizzly liquid metal repasting, and fan bearing lubrication.',
      turnaround: '90 Minutes Express',
      warranty: '100% Thermal Drop SLA',
      costEstimate: 'Maintenance Tier',
    },
    motherboard: {
      title: 'No Power / Dead Motherboard & Chip-Level Rework',
      icon: Cpu,
      badge: 'Micro-Soldering',
      symptoms: ['Completely dead with zero lights', 'Power LED blinks but no boot', 'Burn smell or electrical pop sound', 'Corrupted BIOS loop'],
      resolution: 'Thermal camera short-circuit tracing, power management IC replacement, mosfet rework, and hardware EEPROM BIOS flashing.',
      turnaround: '24 - 72 Hours',
      warranty: '90 Days Warranty',
      costEstimate: 'Up to 70% cheaper than new board',
    },
    storage: {
      title: 'Slow Performance, Crashing OS & Storage Upgrade',
      icon: HardDrive,
      badge: 'Speed & Data Recovery',
      symptoms: ['Takes 5+ minutes to boot', 'Frequent Blue Screen of Death (BSOD)', 'Clicking HDD drive sounds', '100% Disk Usage in Task Manager'],
      resolution: 'Blazing-fast NVMe M.2 Gen4 SSD upgrades, RAM expansion, complete data cloning without losing apps or files, and clean OS reinstallation.',
      turnaround: 'Same-Day (2 Hours)',
      warranty: '3-Year SSD OEM Warranty',
      costEstimate: 'Performance Boost',
    },
  };

  const brandPillars = [
    { name: 'Apple MacBook', models: 'MacBook Air & Pro (M1, M2, M3, Intel)', badge: 'Retina & Logic Board' },
    { name: 'Dell', models: 'XPS, Latitude, Inspiron, Alienware', badge: 'Display & DC Jack' },
    { name: 'Lenovo', models: 'ThinkPad, Legion, Yoga, IdeaPad', badge: 'Keyboard & Thermal' },
    { name: 'HP', models: 'Spectre, Pavilion, Envy, Omen, EliteBook', badge: 'Hinge & Battery' },
    { name: 'ASUS', models: 'ROG Strix, TUF Gaming, ZenBook, VivoBook', badge: 'GPU & Fans' },
    { name: 'Acer & MSI', models: 'Predator, Nitro, Swift, Stealth, Raider', badge: 'Cooling & Board' },
  ];

  const repairSteps = [
    {
      step: '01',
      title: 'Free In-Depth Diagnostic Check',
      desc: 'Our engineers run precision voltage and hardware stress tests to pinpoint the exact root fault with zero upfront fees.',
    },
    {
      step: '02',
      title: 'Transparent Written Estimate',
      desc: 'You receive a complete cost breakdown and timeline approval before any screwdriver touches your laptop.',
    },
    {
      step: '03',
      title: 'Clean-Room ESD Safe Repair',
      desc: 'Repairs performed on anti-static ESD-grounded workstations with genuine OEM parts and precision micro-tools.',
    },
    {
      step: '04',
      title: '24-Point Quality Test & Warranty',
      desc: 'Full diagnostic stress testing for thermals, battery cycles, display colors, and audio before doorstep handover.',
    },
  ];

  const currentDiagnostic = diagnosticIssues[selectedIssue];
  const CurrentIcon = currentDiagnostic.icon;

  return (
    <div className="min-h-screen bg-[#020617] text-white pt-2 sm:pt-4 pb-20 px-4 sm:px-6 md:px-10 relative overflow-hidden">
      {/* Cinematic Cyber Background with Glowing Accents */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#020617]" />
        <CircuitBackground glowColor="cyan" intensity="subtle" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Animated Glow Orbs */}
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -35, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-10%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-cyan-600/15 blur-[150px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 45, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[30%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-purple-600/15 blur-[140px]"
        />
        <CanvasParticleField variant="cyan" mode="mixed" density={30} speed={0.25} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Back Link */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
          <Link
            to="/services/repairing-services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-300 hover:text-cyan-400 transition-all font-medium px-4 py-2 rounded-xl bg-slate-900/60 border border-cyan-500/20 backdrop-blur-xl shadow-md shadow-cyan-950/20 hover:border-cyan-500/40"
          >
            <ArrowLeft size={16} /> Back to Repairing Services
          </Link>
        </motion.div>

        {/* HERO SECTION: Fluid High-Impact Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-24">
          {/* Left Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-xs font-bold text-cyan-300 tracking-wide uppercase mb-6 backdrop-blur-md shadow-sm shadow-cyan-950/30">
              <Wrench size={14} className="text-cyan-400" />
              Express Hardware & Logic Board Care
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-5 text-white">
              Laptop &amp; Notebook <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                Repair Services
              </span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base max-w-xl mb-8 leading-relaxed">
              Same-day professional diagnostics and repairs for all MacBook and Windows laptops. Screen replacements, battery fixes, water damage recovery, thermal tuning, and micro-soldering.
            </p>

            {/* Live Metric Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-cyan-500/20 backdrop-blur-xl shadow-lg shadow-cyan-950/20 hover:border-cyan-500/40 transition-all">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">Turnaround</span>
                  <Clock size={12} className="text-cyan-400" />
                </div>
                <div className="text-lg font-black text-cyan-300">Same-Day</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-cyan-500/20 backdrop-blur-xl shadow-lg shadow-cyan-950/20 hover:border-cyan-500/40 transition-all">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">Diagnostic</span>
                  <Zap size={12} className="text-purple-400" />
                </div>
                <div className="text-lg font-black text-purple-300">100% Free</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-cyan-500/20 backdrop-blur-xl shadow-lg shadow-cyan-950/20 hover:border-cyan-500/40 transition-all">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">Warranty</span>
                  <ShieldCheck size={12} className="text-emerald-400" />
                </div>
                <div className="text-lg font-black text-emerald-300">90 Days</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-cyan-500/20 backdrop-blur-xl shadow-lg shadow-cyan-950/20 hover:border-cyan-500/40 transition-all">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">Parts</span>
                  <Lock size={12} className="text-cyan-400" />
                </div>
                <div className="text-lg font-black text-cyan-300">Genuine OEM</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/consultation?service=laptop-repair"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-300 hover:to-purple-400 text-slate-950 font-extrabold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02]"
              >
                Book Free Laptop Diagnostic <ArrowRight size={16} />
              </Link>
              <a
                href="#fault-finder"
                className="px-6 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900/90 border border-cyan-500/25 backdrop-blur-xl text-white font-bold text-sm transition-all flex items-center gap-2 hover:border-cyan-500/40 shadow-lg shadow-cyan-950/20"
              >
                <Sliders size={16} className="text-cyan-400" /> Interactive Fault Finder
              </a>
            </div>
          </motion.div>

          {/* Right 3D Visual Frame with Floating Telemetry Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 bg-slate-950 shadow-2xl shadow-cyan-500/10 group">
              <img
                src={laptopRepair3dImg}
                alt="Precision Laptop Diagnostic & Repair"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-85" />

              {/* Floating Badge 1: Logic Board Precision */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-4 left-4 p-3 rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-cyan-500/30 flex items-center gap-3 shadow-2xl shadow-cyan-950/40"
              >
                <div className="w-9 h-9 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Cpu size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Logic Board Precision</div>
                  <div className="text-[10px] text-cyan-300 font-semibold">Micro-Soldering Lab Certified</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Thermal SLA */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-4 right-4 p-3 rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-purple-500/30 flex items-center gap-3 shadow-2xl shadow-purple-950/40"
              >
                <div className="w-9 h-9 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <Fan size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Thermal Overhaul</div>
                  <div className="text-[10px] text-purple-300 font-semibold">Arctic MX-4 / Liquid Metal</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* INTERACTIVE FAULT FINDER & DIAGNOSTIC SIMULATOR */}
        <div id="fault-finder" className="mb-20 scroll-mt-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
              <Sliders size={14} /> Interactive Diagnostic Console
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-2">
              What Problem Is Your Laptop Experiencing?
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm max-w-lg mx-auto">
              Select your laptop symptoms below to view our engineering diagnosis, turnaround speed, and warranty protocol.
            </p>
          </div>

          {/* Fault Category Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
            {Object.keys(diagnosticIssues).map((key) => {
              const item = diagnosticIssues[key];
              const Icon = item.icon;
              const active = selectedIssue === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedIssue(key)}
                  className={`p-3.5 rounded-2xl border text-center transition-all duration-300 flex flex-col items-center gap-2 ${
                    active
                      ? 'bg-gradient-to-b from-cyan-500/20 to-purple-500/10 border-cyan-400 text-white shadow-xl shadow-cyan-500/20'
                      : 'bg-slate-900/60 border-white/10 text-gray-400 hover:text-white hover:border-cyan-500/30 hover:bg-slate-900/80 backdrop-blur-xl'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${active ? 'bg-cyan-400 text-slate-950 font-bold' : 'bg-white/5 text-cyan-400'}`}>
                    <Icon size={20} />
                  </div>
                  <span className="text-xs font-bold leading-tight">{item.badge}</span>
                </button>
              );
            })}
          </div>

          {/* Active Diagnostic Details Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIssue}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-950/80 border border-cyan-500/25 backdrop-blur-xl shadow-2xl shadow-cyan-950/30"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Fault Analysis */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                      <CurrentIcon size={24} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300">{currentDiagnostic.badge}</span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white">{currentDiagnostic.title}</h3>
                    </div>
                  </div>

                  {/* Common Symptoms List */}
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Common Symptoms:</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {currentDiagnostic.symptoms.map((sym, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-300 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                          <AlertTriangle size={14} className="text-amber-400 shrink-0" />
                          <span>{sym}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommended Resolution */}
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                    <div className="text-xs font-bold text-cyan-400 uppercase mb-1">Our Engineering Resolution:</div>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{currentDiagnostic.resolution}</p>
                  </div>
                </div>

                {/* Right Service SLA Badges & Quick Action */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-5 rounded-2xl bg-slate-950/80 border border-cyan-500/30 backdrop-blur-md space-y-3">
                    <div className="flex items-center justify-between text-xs border-b border-white/10 pb-2.5">
                      <span className="text-gray-400">Turnaround SLA:</span>
                      <span className="font-extrabold text-cyan-300">{currentDiagnostic.turnaround}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs border-b border-white/10 pb-2.5">
                      <span className="text-gray-400">Warranty Coverage:</span>
                      <span className="font-extrabold text-emerald-300">{currentDiagnostic.warranty}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs border-b border-white/10 pb-2.5">
                      <span className="text-gray-400">Diagnostic Fee:</span>
                      <span className="font-extrabold text-purple-300">₹0 (Free Comprehensive Scan)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Parts Grade:</span>
                      <span className="font-extrabold text-white">Brand OEM Direct Replacement</span>
                    </div>
                  </div>

                  <Link
                    to={`/consultation?service=laptop-repair&issue=${selectedIssue}`}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-300 hover:to-purple-400 text-slate-950 font-black text-xs text-center flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02]"
                  >
                    Book Diagnostic For This Issue <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* SUPPORTED LAPTOP BRANDS GRID */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Brands &amp; Series We Service Daily</h2>
            <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto">
              Equipped with manufacturer diagnostic tools, schematic blueprints, and genuine components.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {brandPillars.map((b, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-950/70 border border-cyan-500/20 backdrop-blur-xl hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-950/30 transition-all duration-300 flex items-center justify-between group"
              >
                <div>
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">{b.name}</h3>
                  <p className="text-xs text-gray-400">{b.models}</p>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/25 shrink-0 ml-3">
                  {b.badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4-STEP REPAIR WORKFLOW */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Our Clean-Room Repair Standard</h2>
            <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto">
              Precision engineering workflow designed to keep your personal data 100% private and protected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {repairSteps.map((s, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-950/70 border border-cyan-500/20 backdrop-blur-xl hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-950/30 transition-all duration-300 relative text-center group"
              >
                <div className="w-11 h-11 mx-auto rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 backdrop-blur-md flex items-center justify-center font-black text-sm mb-3 group-hover:scale-110 group-hover:bg-cyan-500/25 transition-all">
                  {s.step}
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">{s.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA BANNER */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 border border-purple-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl mb-20">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">
              <Sparkles size={14} /> Free Diagnostic Assessment
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Need Express Laptop Repair Today?
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm max-w-xl">
              Get an instant fault diagnosis, transparent repair quote, and doorstep pickup or drop-in scheduling with our certified technicians.
            </p>
          </div>
          <Link
            to="/consultation?service=laptop-repair"
            className="px-6 py-3.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-slate-950 font-extrabold text-sm flex items-center gap-2 transition-all shadow-lg shadow-purple-500/25 shrink-0 hover:scale-105"
          >
            Claim Free Diagnosis <ArrowRight size={16} />
          </Link>
        </div>

        {/* FAQ SECTION */}
        <div className="py-8 mb-10">
          <FaqSection category="laptop-repair" theme="cyan" className="bg-transparent" />
        </div>

        <ChatAssistant />
      </div>
    </div>
  );
}
