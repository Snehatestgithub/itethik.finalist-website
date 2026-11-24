import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronRight,
  Code2,
  QrCode,
  TrendingUp,
  Search,
  Target,
  Zap,
  ShieldCheck,
  Headphones,
  Send,
  CreditCard,
  MessageCircle,
  Globe,
  Share2,
  Mail,
  Sparkles,
  CheckCircle2,
  Terminal,
  BarChart3,
  Layers,
  Cpu,
  ExternalLink,
  Lock,
} from 'lucide-react';
import ChatAssistant from '../components/ChatAssistant';
import FaqSection from '../components/FaqSection';
import CanvasParticleField from '../components/CanvasParticleField';
import CircuitBackground from '../components/CircuitBackground';
import RevealOnScroll from '../components/RevealOnScroll';

// Reusable Framer Motion Staggered Text Reveal Component
const StaggeredText = ({
  text,
  className = '',
  as = 'h2',
  delay = 0,
  stagger = 0.08,
  gradientWord = '',
  gradientClass = 'bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 text-transparent bg-clip-text',
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
    hidden: { opacity: 0, y: 16, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] },
    },
  };

  const Component = motion[as] || motion.h2;

  return (
    <Component
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      className={`inline-flex flex-wrap items-center gap-x-[0.25em] gap-y-1 ${className}`}
    >
      {words.map((word, index) => {
        const isGradient =
          gradientWord && word.toLowerCase().includes(gradientWord.toLowerCase());
        return (
          <motion.span
            key={index}
            variants={wordVariants}
            className={`inline-block ${isGradient ? gradientClass : ''}`}
          >
            {word}
          </motion.span>
        );
      })}
    </Component>
  );
};

const DigitalSolutions = () => {
  const [previewTab, setPreviewTab] = useState('web');

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-[#02050e] text-white pt-2 sm:pt-4 pb-16 px-4 sm:px-8 relative overflow-hidden font-sans selection:bg-purple-500 selection:text-white"
    >
      {/* Subtle Atmospheric Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <CircuitBackground glowColor="cyan" intensity="subtle" />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-12 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-purple-900/20 via-indigo-900/20 to-cyan-900/20 rounded-full blur-[160px]"
        />
        <div className="absolute top-1/2 -left-48 w-[450px] h-[450px] bg-blue-900/10 rounded-full blur-[150px]" />
        <div className="absolute top-2/3 -right-48 w-[450px] h-[450px] bg-purple-900/10 rounded-full blur-[150px]" />
        <CanvasParticleField variant="purple" mode="mixed" density={40} speed={0.35} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- Breadcrumb Navigation --- */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400 mb-8"
        >
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={14} className="text-slate-600" />
          <Link to="/services" className="hover:text-white transition-colors">Services</Link>
          <ChevronRight size={14} className="text-slate-600" />
          <span className="text-purple-400 font-semibold">Digital Solutions</span>
        </motion.div>

        {/* ==================================================
            1. EXECUTIVE HERO SECTION (Split Double Column Layout)
            ================================================== */}
        <section className="py-8 sm:py-14 mb-16 lg:mb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md"
            >
              <Sparkles size={14} className="text-purple-400" />
              <span>ENTERPRISE DIGITAL ENGINEERING</span>
            </motion.div>

            <StaggeredText
              text="Scale Your Brand With Next-Gen Digital Solutions."
              as="h1"
              gradientWord="Next-Gen"
              stagger={0.07}
              delay={0.1}
              className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] justify-center"
            />

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl"
            >
              ITETHIK builds high-performance web applications, interactive NFC digital networking cards, and data-driven SEO growth engines engineered for measurable business outcomes.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(168,85,247,0.35)] flex items-center gap-2.5 hover:scale-105 transition-all duration-300"
              >
                <span>Start Your Project</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href="#services-list"
                className="px-7 py-3.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-sm border border-slate-800 hover:border-purple-400/40 transition-all flex items-center gap-2"
              >
                <span>Explore Solutions</span>
                <ChevronRight size={16} className="text-purple-400" />
              </a>
            </motion.div>

            {/* Trust Badges Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg"
            >
              <div>
                <p className="text-xl font-bold text-white flex items-center gap-1">
                  <Zap size={16} className="text-cyan-400" /> 100%
                </p>
                <p className="text-xs text-slate-400 mt-0.5">Custom Built</p>
              </div>
              <div>
                <p className="text-xl font-bold text-white flex items-center gap-1">
                  <ShieldCheck size={16} className="text-purple-400" /> 99.9%
                </p>
                <p className="text-xs text-slate-400 mt-0.5">Uptime SLA</p>
              </div>
              <div>
                <p className="text-xl font-bold text-white flex items-center gap-1">
                  <TrendingUp size={16} className="text-indigo-400" /> 3.5x
                </p>
                <p className="text-xs text-slate-400 mt-0.5">Avg ROI Boost</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Solution Preview Deck */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 rounded-3xl bg-[#070c1d]/90 border border-slate-800/80 p-6 shadow-[0_0_50px_rgba(0,0,0,0.6)] backdrop-blur-xl relative overflow-hidden"
          >
            {/* Top Interactive Selector Tabs */}
            <div className="flex items-center gap-2 p-1 rounded-2xl bg-slate-950 border border-slate-800 mb-6">
              <button
                onClick={() => setPreviewTab('web')}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  previewTab === 'web'
                    ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Code2 size={14} /> Web Apps
              </button>
              <button
                onClick={() => setPreviewTab('cards')}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  previewTab === 'cards'
                    ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <CreditCard size={14} /> NFC Cards
              </button>
              <button
                onClick={() => setPreviewTab('seo')}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  previewTab === 'seo'
                    ? 'bg-cyan-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Search size={14} /> SEO Engine
              </button>
            </div>

            {/* Dynamic Card Display */}
            <AnimatePresence mode="wait">
              {previewTab === 'web' && (
                <motion.div
                  key="preview-web"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="rounded-2xl bg-[#030612] border border-slate-800 p-4 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1.5 text-purple-300">
                        <Terminal size={12} /> Web Platform Stack
                      </span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 size={12} /> Live Deployed
                      </span>
                    </div>

                    <div className="space-y-2 text-xs font-mono text-slate-300">
                      <p className="text-purple-400 font-bold">&gt; framework: &quot;React 18 + Vite&quot;</p>
                      <p className="text-cyan-300">&gt; backend: &quot;Express API Proxy&quot;</p>
                      <p className="text-pink-300">&gt; UI: &quot;Tailwind CSS + Framer Motion&quot;</p>
                      <p className="text-indigo-300">&gt; lighthouse_score: 99/100</p>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/60">
                      <span>Responsive Mobile &amp; Desktop</span>
                      <span className="text-purple-400 font-semibold">Sub-second Speed</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2 text-left">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <Cpu size={16} className="text-purple-400" /> Full-Stack Custom Architecture
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      We engineer robust, custom full-stack solutions with seamless navigation, optimized database queries, and rich user interface controls.
                    </p>
                    <Link
                      to="/services/web-development"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-400 hover:text-purple-300 transition-colors pt-1"
                    >
                      <span>Explore Web Development Details</span>
                      <ExternalLink size={12} />
                    </Link>
                  </div>
                </motion.div>
              )}

              {previewTab === 'cards' && (
                <motion.div
                  key="preview-cards"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="rounded-2xl bg-gradient-to-br from-[#040814] via-[#091026] to-[#040814] border border-indigo-500/30 p-5 flex items-center justify-between shadow-inner">
                    <div className="space-y-2 text-left">
                      <span className="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 text-[10px] font-mono border border-indigo-500/30">
                        NFC &amp; QR V-CARD
                      </span>
                      <h4 className="text-base font-bold text-white">ITETHIK Executive Card</h4>
                      <div className="flex items-center gap-3 text-slate-300 pt-1">
                        <MessageCircle size={14} className="text-emerald-400" />
                        <Globe size={14} className="text-cyan-400" />
                        <Share2 size={14} className="text-purple-400" />
                        <Mail size={14} className="text-indigo-400" />
                      </div>
                    </div>

                    <div className="w-16 h-16 p-1 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-lg border-2 border-indigo-400/50">
                      <QrCode size={48} className="text-slate-950" />
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2 text-left">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <Layers size={16} className="text-indigo-400" /> Tap-to-Share Contact Engine
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Equip your team with NFC-enabled digital business cards that save directly to mobile phone contact lists with zero app download required.
                    </p>
                    <Link
                      to="/services/digital-cards"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors pt-1"
                    >
                      <span>Explore Digital Card Features</span>
                      <ExternalLink size={12} />
                    </Link>
                  </div>
                </motion.div>
              )}

              {previewTab === 'seo' && (
                <motion.div
                  key="preview-seo"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="rounded-2xl bg-[#040814] border border-cyan-500/30 p-5 space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-cyan-300 flex items-center gap-1.5">
                        <BarChart3 size={14} /> Local &amp; Organic Rank
                      </span>
                      <span className="text-emerald-400 font-mono text-[11px] bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                        +285% Organic Growth
                      </span>
                    </div>

                    {/* Simulating Progress Chart */}
                    <div className="h-16 flex items-end justify-between gap-2 pt-2">
                      <div className="w-full bg-cyan-950/80 rounded h-[30%]" />
                      <div className="w-full bg-cyan-900/60 rounded h-[45%]" />
                      <div className="w-full bg-cyan-700/80 rounded h-[65%]" />
                      <div className="w-full bg-gradient-to-t from-cyan-600 to-cyan-400 rounded h-[100%] shadow-[0_0_15px_rgba(6,182,212,0.6)]" />
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                      <span>Google My Business (GMB)</span>
                      <span className="text-cyan-400 font-mono">Rank #1 Google Search</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2 text-left">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <TrendingUp size={16} className="text-cyan-400" /> Targeted Search Dominance
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Technical audit, keyword strategy, and local search optimization to turn Google search queries into qualified inbound leads.
                    </p>
                    <Link
                      to="/services/seo"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors pt-1"
                    >
                      <span>Explore SEO &amp; Growth Services</span>
                      <ExternalLink size={12} />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </section>

        {/* ==================================================
            2. SECTION HEADER (Professional Executive Title)
            ================================================== */}
        <section id="services-list" className="py-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center gap-3 mb-12 text-center"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-cyan-400" />
              <span className="font-mono text-xs tracking-[0.25em] text-purple-300 uppercase font-bold">
                ENTERPRISE DIGITAL CAPABILITIES
              </span>
              <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent via-cyan-500 to-purple-400" />
            </div>

            <StaggeredText
              text="Our Core Digital Offerings"
              as="h2"
              className="text-3xl sm:text-5xl font-black tracking-tight text-white justify-center text-center"
            />
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Engineered solutions designed to transform your online authority, customer interaction, and search visibility.
            </p>
          </motion.div>

          {/* ==================================================
              3. CLEAN & EXECUTIVE DIGITAL SOLUTION CARDS
              ================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* --- CARD 01: Web Development --- */}
            <RevealOnScroll
              delay={0}
              className="group relative rounded-3xl bg-gradient-to-b from-[#0b1228]/90 via-[#070c1d]/85 to-[#040714]/90 border border-purple-500/20 hover:border-purple-500/60 p-8 flex flex-col justify-between shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(168,85,247,0.22)] transition-all duration-300 text-left overflow-hidden"
            >
              {/* Subtle Ambient Corner Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-600/15 rounded-full blur-3xl group-hover:bg-purple-600/30 transition-all pointer-events-none" />

              <div className="space-y-6 relative z-10">
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300 shadow-lg group-hover:scale-105 transition-transform">
                    <Code2 size={26} />
                  </div>
                  <span className="font-mono text-[11px] font-bold text-purple-300 bg-purple-950/60 border border-purple-500/30 px-3 py-1 rounded-full uppercase tracking-wider">
                    MODULE // 01
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <StaggeredText
                    text="Web Development"
                    as="h3"
                    className="text-2xl font-extrabold text-white group-hover:text-purple-300 transition-colors justify-start"
                  />
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Custom-coded, responsive web applications and portals engineered for ultra-fast performance, high reliability, and lead conversion.
                  </p>
                </div>

                {/* Clean Feature List */}
                <ul className="space-y-3 pt-4 border-t border-slate-800/80 text-xs text-slate-300">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                      <CheckCircle2 size={13} />
                    </div>
                    <span>Custom React &amp; Full-Stack Architecture</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                      <CheckCircle2 size={13} />
                    </div>
                    <span>Mobile-First &amp; Sub-Second Load Speed</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                      <CheckCircle2 size={13} />
                    </div>
                    <span>Secure API Proxying &amp; Database Integration</span>
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-slate-800/80 mt-8 relative z-10">
                <Link
                  to="/services/web-development"
                  className="w-full py-3.5 px-5 rounded-2xl bg-purple-950/40 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 border border-purple-500/30 hover:border-purple-400 text-purple-200 hover:text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-between group/btn shadow-md"
                >
                  <span>Explore Web Development</span>
                  <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </RevealOnScroll>

            {/* --- CARD 02: Digital Cards --- */}
            <RevealOnScroll
              delay={100}
              className="group relative rounded-3xl bg-gradient-to-b from-[#0b1228]/90 via-[#070c1d]/85 to-[#040714]/90 border border-indigo-500/20 hover:border-indigo-500/60 p-8 flex flex-col justify-between shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(99,102,241,0.22)] transition-all duration-300 text-left overflow-hidden"
            >
              {/* Subtle Ambient Corner Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-600/15 rounded-full blur-3xl group-hover:bg-indigo-600/30 transition-all pointer-events-none" />

              <div className="space-y-6 relative z-10">
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-indigo-300 shadow-lg group-hover:scale-105 transition-transform">
                    <CreditCard size={26} />
                  </div>
                  <span className="font-mono text-[11px] font-bold text-indigo-300 bg-indigo-950/60 border border-indigo-500/30 px-3 py-1 rounded-full uppercase tracking-wider">
                    MODULE // 02
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <StaggeredText
                    text="NFC Digital Cards"
                    as="h3"
                    className="text-2xl font-extrabold text-white group-hover:text-indigo-300 transition-colors justify-start"
                  />
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Interactive NFC and QR-enabled smart business cards that instantly share contact profiles, social links, and company collateral.
                  </p>
                </div>

                {/* Clean Feature List */}
                <ul className="space-y-3 pt-4 border-t border-slate-800/80 text-xs text-slate-300">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                      <CheckCircle2 size={13} />
                    </div>
                    <span>One-Tap Direct Phone Contact Saving</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                      <CheckCircle2 size={13} />
                    </div>
                    <span>NFC Tap &amp; Dynamic QR Integration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                      <CheckCircle2 size={13} />
                    </div>
                    <span>Eco-Friendly with Real-Time Profile Updates</span>
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-slate-800/80 mt-8 relative z-10">
                <Link
                  to="/services/digital-cards"
                  className="w-full py-3.5 px-5 rounded-2xl bg-indigo-950/40 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 border border-indigo-500/30 hover:border-indigo-400 text-indigo-200 hover:text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-between group/btn shadow-md"
                >
                  <span>Explore Digital Cards</span>
                  <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </RevealOnScroll>

            {/* --- CARD 03: SEO Services --- */}
            <RevealOnScroll
              delay={200}
              className="group relative rounded-3xl bg-gradient-to-b from-[#0b1228]/90 via-[#070c1d]/85 to-[#040714]/90 border border-cyan-500/20 hover:border-cyan-500/60 p-8 flex flex-col justify-between shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(6,182,212,0.22)] transition-all duration-300 text-left overflow-hidden"
            >
              {/* Subtle Ambient Corner Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-600/15 rounded-full blur-3xl group-hover:bg-cyan-600/30 transition-all pointer-events-none" />

              <div className="space-y-6 relative z-10">
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shadow-lg group-hover:scale-105 transition-transform">
                    <Search size={26} />
                  </div>
                  <span className="font-mono text-[11px] font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full uppercase tracking-wider">
                    MODULE // 03
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <StaggeredText
                    text="SEO Services"
                    as="h3"
                    className="text-2xl font-extrabold text-white group-hover:text-cyan-300 transition-colors justify-start"
                  />
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Data-driven search engine optimization, Google My Business strategy, and high-intent keyword positioning for organic growth.
                  </p>
                </div>

                {/* Clean Feature List */}
                <ul className="space-y-3 pt-4 border-t border-slate-800/80 text-xs text-slate-300">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                      <CheckCircle2 size={13} />
                    </div>
                    <span>On-Page Optimization &amp; Technical Audits</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                      <CheckCircle2 size={13} />
                    </div>
                    <span>Google My Business &amp; Local Map Ranking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                      <CheckCircle2 size={13} />
                    </div>
                    <span>High-Intent Lead Keyword Strategy</span>
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-slate-800/80 mt-8 relative z-10">
                <Link
                  to="/services/seo"
                  className="w-full py-3.5 px-5 rounded-2xl bg-cyan-950/40 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-indigo-600 border border-cyan-500/30 hover:border-cyan-400 text-cyan-200 hover:text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-between group/btn shadow-md"
                >
                  <span>Explore SEO Services</span>
                  <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </RevealOnScroll>

          </div>
        </section>

        {/* ==================================================
            4. EXECUTIVE BRAND PROCESS ("Our 4-Step Engineering Pathway")
            ================================================== */}
        <section className="py-12 my-8">
          <RevealOnScroll className="text-center mb-10">
            <StaggeredText
              text="Our Digital Pathway"
              as="h3"
              gradientWord="Our"
              gradientClass="bg-gradient-to-r from-purple-300 via-white to-cyan-300 text-transparent bg-clip-text"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight justify-center text-center"
            />
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-lg mx-auto">
              A streamlined, transparent execution process from kickoff to launch.
            </p>
          </RevealOnScroll>

          <RevealOnScroll
            className="w-full rounded-3xl bg-[#060b18]/90 border border-slate-800/80 p-6 sm:p-10 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.6)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-800"
          >
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center space-y-3 pt-4 sm:pt-0 text-left">
              <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-400">
                <Target size={22} />
              </div>
              <h4 className="text-base font-bold text-white">1. Discovery &amp; Strategy</h4>
              <p className="text-xs text-slate-400 max-w-[200px]">Goal alignment, market research, and technical scope.</p>
              <div className="w-8 h-[2px] bg-purple-500 rounded-full" />
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center space-y-3 pt-4 sm:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-indigo-950/80 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                <Zap size={22} />
              </div>
              <h4 className="text-base font-bold text-white">2. Agile Engineering</h4>
              <p className="text-xs text-slate-400 max-w-[200px]">Clean code build, responsive design &amp; API integration.</p>
              <div className="w-8 h-[2px] bg-indigo-500 rounded-full" />
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center space-y-3 pt-4 sm:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Lock size={22} />
              </div>
              <h4 className="text-base font-bold text-white">3. Security &amp; QA</h4>
              <p className="text-xs text-slate-400 max-w-[200px]">Strict code review, vulnerability checks, and speed testing.</p>
              <div className="w-8 h-[2px] bg-cyan-500 rounded-full" />
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center space-y-3 pt-4 sm:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-400">
                <Headphones size={22} />
              </div>
              <h4 className="text-base font-bold text-white">4. Launch &amp; Growth SLA</h4>
              <p className="text-xs text-slate-400 max-w-[200px]">Seamless deployment, search indexation &amp; ongoing maintenance.</p>
              <div className="w-8 h-[2px] bg-purple-500 rounded-full" />
            </div>
          </RevealOnScroll>
        </section>

        {/* ==================================================
            5. CTA BANNER ("Ready to build your digital presence?")
            ================================================== */}
        <section className="py-6 my-4">
          <RevealOnScroll
            className="w-full rounded-3xl bg-gradient-to-r from-[#0b081e] via-[#090b22] to-[#071124] border border-purple-500/30 p-6 sm:p-10 shadow-[0_0_50px_rgba(168,85,247,0.15)] backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-left"
          >
            <div className="flex items-center gap-5 text-center sm:text-left">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-500 p-0.5 shadow-[0_0_25px_rgba(168,85,247,0.4)] shrink-0 hidden sm:flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#090b22] flex items-center justify-center">
                  <Send size={24} className="text-purple-300 -translate-y-0.5 translate-x-0.5" />
                </div>
              </div>

              <div className="space-y-1">
                <StaggeredText
                  text="Ready to build your digital presence?"
                  as="h3"
                  className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight justify-center sm:justify-start"
                />
                <p className="text-sm sm:text-base text-slate-400">
                  Let's collaborate to engineer a custom digital solution for your business.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="shrink-0 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(168,85,247,0.4)] flex items-center gap-2 hover:scale-105 transition-all duration-300"
            >
              <span>Start Your Project</span>
              <ArrowRight size={16} />
            </Link>
          </RevealOnScroll>
        </section>

        {/* FAQ Section (Main Digital Solutions Category Level) & Chat Assistant */}
        <FaqSection category="digital-solutions" />
        <ChatAssistant />
      </div>
    </motion.div>
  );
};

export default DigitalSolutions;
