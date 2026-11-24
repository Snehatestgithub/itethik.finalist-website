import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Zap,
  Cloud,
  Activity,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Layers,
  Sparkles,
  Headphones,
  Terminal,
  Cpu,
  RefreshCw,
} from 'lucide-react';
import ChatAssistant from '../components/ChatAssistant';
import FaqSection from '../components/FaqSection';
import CanvasParticleField from '../components/CanvasParticleField';
import webDev3dImg from '../assets/images/web_dev_maintenance_3d_1787041411708.jpg';
import webDevFaqBg from '../assets/images/web_dev_faq_bg_1787042036217.jpg';

export default function WebDevMaintenance() {
  const [activeTab, setActiveTab] = useState('speed');

  const liveChecks = {
    speed: {
      title: 'Speed & Core Web Vitals',
      icon: Zap,
      color: 'text-amber-400',
      badgeBg: 'bg-amber-500/10 border-amber-500/30 text-amber-300',
      stats: [
        { label: 'PageSpeed Score', val: '99/100', status: 'Optimal' },
        { label: 'Time to First Byte (TTFB)', val: '0.28s', status: 'Fast' },
        { label: 'Image Compression', val: 'WebP / AVIF', status: 'Active' },
        { label: 'CDN Edge Caching', val: 'Cloudflare', status: 'Synced' },
      ],
      progress: 99,
    },
    security: {
      title: 'Cybersecurity & SSL Guard',
      icon: ShieldCheck,
      color: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
      stats: [
        { label: 'SSL / TLS Certificate', val: 'TLS 1.3 Active', status: 'Secure' },
        { label: 'Vulnerability Scans', val: '0 Threats', status: 'Clean' },
        { label: 'Zero-Day Patching', val: 'Automated', status: 'Enabled' },
        { label: 'Web Application Firewall', val: 'Layer 7 Guard', status: 'Online' },
      ],
      progress: 100,
    },
    backups: {
      title: 'Automated Cloud Backups',
      icon: Cloud,
      color: 'text-cyan-400',
      badgeBg: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300',
      stats: [
        { label: 'Snapshot Frequency', val: 'Daily Automated', status: 'Synced' },
        { label: 'Storage Encryption', val: 'AES-256 Cloud', status: 'Encrypted' },
        { label: 'Disaster Recovery', val: '1-Click Restore', status: 'Tested' },
        { label: 'Database Health', val: 'Optimized', status: 'Clean' },
      ],
      progress: 100,
    },
    support: {
      title: 'Developer On-Demand',
      icon: Headphones,
      color: 'text-purple-400',
      badgeBg: 'bg-purple-500/10 border-purple-500/30 text-purple-300',
      stats: [
        { label: 'Emergency Response', val: '< 1 Hour SLA', status: 'Priority' },
        { label: 'Content Updates', val: 'Included', status: 'Ready' },
        { label: 'Codebase Patches', val: 'Weekly Checks', status: 'Active' },
        { label: 'Direct WhatsApp Desk', val: 'Senior Devs', status: 'Connected' },
      ],
      progress: 98,
    },
  };

  const corePillars = [
    {
      icon: Zap,
      title: 'Speed & Vitals',
      subtitle: '90+ Google PageSpeed',
      desc: 'Asset minification, WebP image caching, and CDN acceleration for lightning-fast loads.',
      badge: '0.4s Load',
      color: 'from-amber-500/20 to-orange-500/5',
      borderColor: 'group-hover:border-amber-500/40',
      iconColor: 'text-amber-400',
    },
    {
      icon: ShieldCheck,
      title: 'Security & SSL',
      subtitle: 'Zero-Day Protection',
      desc: 'Automated firewall defense, plugin hardening, and malware prevention 24/7.',
      badge: '100% Safe',
      color: 'from-emerald-500/20 to-teal-500/5',
      borderColor: 'group-hover:border-emerald-500/40',
      iconColor: 'text-emerald-400',
    },
    {
      icon: Cloud,
      title: 'Daily Backups',
      subtitle: '1-Click Recovery',
      desc: 'Encrypted cloud backups of code and database ensuring complete zero-loss recovery.',
      badge: 'Daily Sync',
      color: 'from-cyan-500/20 to-blue-500/5',
      borderColor: 'group-hover:border-cyan-500/40',
      iconColor: 'text-cyan-400',
    },
    {
      icon: Headphones,
      title: 'On-Demand Dev',
      subtitle: 'Fast Turnaround',
      desc: 'Direct developer support for content updates, bug fixes, and new feature tweaks.',
      badge: '< 1hr Response',
      color: 'from-purple-500/20 to-indigo-500/5',
      borderColor: 'group-hover:border-purple-500/40',
      iconColor: 'text-purple-400',
    },
  ];

  const comparisonData = [
    { feature: 'Page Load Speed', unmanaged: '3.5s - 6.0s (High Bounce)', itethik: '0.4s - 0.8s (Instant)' },
    { feature: 'Security & Malware', unmanaged: 'Unchecked Vulnerabilities', itethik: '24/7 Layer 7 Firewall' },
    { feature: 'Cloud Backups', unmanaged: 'None / Manual Risk', itethik: 'Daily Automated Cloud Sync' },
    { feature: 'Outage Recovery', unmanaged: 'Days of Downtime', itethik: '1-Click Instant Restore' },
    { feature: 'Developer Support', unmanaged: 'Hourly Freelancer Cost', itethik: 'Dedicated Retainer Desk' },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white pt-2 sm:pt-4 pb-20 px-4 sm:px-6 md:px-10 relative overflow-hidden">
      {/* Clean Ambient Background (No Grid Box Pattern) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#020617]" />
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-10%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-blue-600/15 blur-[150px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-600/10 blur-[140px]"
        />
        <CanvasParticleField variant="blue" mode="mixed" density={30} speed={0.25} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Back Link */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
          <Link
            to="/services/maintenance-services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-cyan-400 transition-colors font-medium px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <ArrowLeft size={16} /> Back to Maintenance Services
          </Link>
        </motion.div>

        {/* OPEN HERO SECTION: Fluid, High-Impact & Unboxed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-24">
          {/* Left Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-xs font-bold text-cyan-300 tracking-wide uppercase mb-6 backdrop-blur-sm">
              <Terminal size={13} className="text-cyan-400" />
              Web Care Retainers & Speed Optimization
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-5">
              Web Development <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 text-transparent bg-clip-text">
                Maintenance
              </span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base max-w-lg mb-8 leading-relaxed">
              24/7 security patching, sub-second speed tuning, daily encrypted cloud backups, and dedicated developer support.
            </p>

            {/* Live Metric Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">Uptime</span>
                  <Activity size={12} className="text-cyan-400" />
                </div>
                <div className="text-lg font-black text-cyan-300">99.9%</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">Speed</span>
                  <Zap size={12} className="text-amber-400" />
                </div>
                <div className="text-lg font-black text-amber-300">&lt; 0.6s</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">Backup</span>
                  <Cloud size={12} className="text-purple-400" />
                </div>
                <div className="text-lg font-black text-purple-300">Daily</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">SSL Guard</span>
                  <ShieldCheck size={12} className="text-emerald-400" />
                </div>
                <div className="text-lg font-black text-emerald-300">Zero-Day</div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/consultation?service=web-development-maintenance"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02]"
              >
                Request Website Audit <ArrowRight size={16} />
              </Link>
              <a
                href="#how-it-works"
                className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm transition-all flex items-center gap-2"
              >
                <Layers size={16} className="text-cyan-400" /> How It Works
              </a>
            </div>
          </motion.div>

          {/* Right 3D Visual Frame with Live Status Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-950 shadow-2xl shadow-cyan-500/10 group">
              <img
                src={webDev3dImg}
                alt="Web Development Maintenance"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-85" />

              {/* Floating Badge 1: PageSpeed Grade */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-4 left-4 p-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-cyan-500/30 flex items-center gap-2.5 shadow-xl"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Google PageSpeed</div>
                  <div className="text-[10px] text-emerald-400 font-semibold">Score: 99 / 100 (Grade A)</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Cloud Sync Active */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-purple-500/30 flex items-center gap-2.5 shadow-xl"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <RefreshCw size={16} className="animate-spin" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Encrypted Cloud Sync</div>
                  <div className="text-[10px] text-purple-300 font-semibold">Daily Automated Snapshot</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* 4 CORE PILLARS (Visual & Punchy) */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Core Care Highlights</h2>
            <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto">
              Everything your website needs to stay fast, secure, and reliable.
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

        {/* INTERACTIVE LIVE SYSTEM MONITOR (Visual Health Simulator) */}
        <div className="mb-20 p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-cyan-500/20 backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
                <Cpu size={14} /> Interactive Health Simulator
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">Live System Inspection</h3>
            </div>

            {/* Tab Switches */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-black/40 border border-white/10">
              {Object.keys(liveChecks).map((key) => {
                const item = liveChecks[key];
                const Icon = item.icon;
                const active = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                      active
                        ? 'bg-cyan-500 text-slate-950 shadow-md font-bold'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon size={14} />
                    <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              {/* Left Gauge Box */}
              <div className="md:col-span-4 p-6 rounded-2xl bg-black/50 border border-white/10 text-center">
                <div className="relative w-28 h-28 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-white/10"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-cyan-400"
                      strokeDasharray={`${liveChecks[activeTab].progress}, 100`}
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-black text-white">{liveChecks[activeTab].progress}%</span>
                    <span className="text-[9px] uppercase tracking-wider text-emerald-400 font-bold">Passed</span>
                  </div>
                </div>
                <div className="text-sm font-bold text-white mb-1">{liveChecks[activeTab].title}</div>
                <div className="text-[11px] text-gray-400">Automated 24/7 Verification</div>
              </div>

              {/* Right Metrics Grid */}
              <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {liveChecks[activeTab].stats.map((s, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs text-gray-400 mb-0.5">{s.label}</div>
                      <div className="text-sm font-bold text-white">{s.val}</div>
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      {s.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* COMPARISON MATRIX (Visual Side-by-Side) */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">The Difference</h2>
            <p className="text-gray-400 text-xs sm:text-sm">Why proactive maintenance saves your business time and money.</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md">
            <div className="grid grid-cols-12 bg-white/5 p-4 border-b border-white/10 text-xs font-bold uppercase tracking-wider text-gray-300">
              <div className="col-span-4 sm:col-span-4">Metric</div>
              <div className="col-span-4 sm:col-span-4 text-red-400">Unmanaged Website</div>
              <div className="col-span-4 sm:col-span-4 text-cyan-400 font-black">With ITETHIK Care</div>
            </div>
            <div className="divide-y divide-white/5">
              {comparisonData.map((row, i) => (
                <div key={i} className="grid grid-cols-12 p-3.5 sm:p-4 text-xs sm:text-sm items-center hover:bg-white/5 transition-colors">
                  <div className="col-span-4 sm:col-span-4 font-semibold text-white">{row.feature}</div>
                  <div className="col-span-4 sm:col-span-4 text-gray-400 flex items-center gap-1.5 text-xs">
                    <XCircle size={14} className="text-red-400 shrink-0" />
                    <span>{row.unmanaged}</span>
                  </div>
                  <div className="col-span-4 sm:col-span-4 text-cyan-300 font-semibold flex items-center gap-1.5 text-xs">
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                    <span>{row.itethik}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3-STEP PROCESS TIMELINE */}
        <div id="how-it-works" className="mb-20 scroll-mt-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">How It Works</h2>
            <p className="text-gray-400 text-xs sm:text-sm">Simple 3-step setup with zero downtime.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 relative text-center">
              <div className="w-10 h-10 mx-auto rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-black text-sm mb-3">
                01
              </div>
              <h3 className="text-base font-bold text-white mb-1">Audit & Sandbox Test</h3>
              <p className="text-gray-400 text-xs">Full scan for outdated dependencies and security bottlenecks in a safe staging sandbox.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 relative text-center">
              <div className="w-10 h-10 mx-auto rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-black text-sm mb-3">
                02
              </div>
              <h3 className="text-base font-bold text-white mb-1">Patch & Backup Setup</h3>
              <p className="text-gray-400 text-xs">Deploying speed optimizations, firewall rules, and automated encrypted cloud backup snapshots.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 relative text-center">
              <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-sm mb-3">
                03
              </div>
              <h3 className="text-base font-bold text-white mb-1">24/7 Peace of Mind</h3>
              <p className="text-gray-400 text-xs">Continuous uptime alerts, monthly performance reports, and priority WhatsApp developer desk.</p>
            </div>
          </div>
        </div>

        {/* CTA BANNER */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl mb-20">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
              <Sparkles size={14} /> Free Initial Diagnostic
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Is Your Website Running at Peak Performance?
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm max-w-xl">
              Get an instant, no-obligation speed and security audit from our senior web engineers.
            </p>
          </div>
          <Link
            to="/consultation?service=web-development-maintenance"
            className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-sm flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/25 shrink-0 hover:scale-105"
          >
            Claim Free Audit <ArrowRight size={16} />
          </Link>
        </div>

        {/* FAQ SECTION WITH SEAMLESS WEB DEV ATMOSPHERIC BACKDROP (No Outer Box Border) */}
        <div className="relative py-12 mb-10 overflow-hidden rounded-3xl">
          {/* Seamless Integrated Backdrop */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <img
              src={webDevFaqBg}
              alt="Web Development Backdrop"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-25 filter brightness-90 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/70 to-[#020617]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-[#020617]" />
          </div>

          <div className="relative z-10">
            <FaqSection
              category="web-maintenance"
              theme="cyan"
              className="bg-transparent"
            />
          </div>
        </div>

        <ChatAssistant />
      </div>
    </div>
  );
}
