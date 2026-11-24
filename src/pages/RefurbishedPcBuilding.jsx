import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Home,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Zap,
  BadgePercent,
  CheckCircle2,
  Wrench,
  Search,
} from 'lucide-react';
import ChatAssistant from '../components/ChatAssistant';
import FaqSection from '../components/FaqSection';
import GlowingLinePattern from '../components/GlowingLinePattern';
import DesktopTechParticles from '../components/DesktopTechParticles';
import CircuitBackground from '../components/CircuitBackground';

// Image Assets
import refurbishedPcImg from '../assets/images/refurbished_pc_3d_1786440934420_1786442256847.jpg';
import studentImg from '../assets/images/refurbished_pc_student_card_1786445913521.jpg';
import wfhImg from '../assets/images/refurbished_pc_wfh_card_1786445925435.jpg';
import officeImg from '../assets/images/refurbished_pc_office_card_1786445939612.jpg';
import everydayImg from '../assets/images/refurbished_pc_everyday_card_1786445957915.jpg';

const RefurbishedPcBuilding = () => {
  const [selectedTarget, setSelectedTarget] = useState(null);
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  const whyRefurbishedFeatures = [
    {
      icon: Search,
      title: '50+ Point Inspection',
      desc: 'Complete hardware diagnostic & testing.',
    },
    {
      icon: Zap,
      title: 'Upgraded for Better Performance',
      desc: 'NVMe SSD, RAM & more upgrades.',
    },
    {
      icon: Wrench,
      title: 'Deep Cleaning',
      desc: 'Chemical cleaning & thermal repaste.',
    },
    {
      icon: ShieldCheck,
      title: 'Certified Warranty',
      desc: 'ITHETHIK certified warranty & SLA support.',
    },
    {
      icon: BadgePercent,
      title: 'Budget Friendly',
      desc: 'High performance without the high cost.',
    },
  ];

  const bestForCategories = [
    {
      id: 'student',
      title: 'Students',
      subtitle: 'Study, Learn, Grow.',
      image: studentImg,
      specs: 'Intel Core i5 • 16GB RAM • 512GB High Speed NVMe SSD',
      desc: 'Affordable, fast, and durable desktop solutions for coding, assignments, and online learning.',
    },
    {
      id: 'wfh',
      title: 'Work From Home',
      subtitle: 'Reliable & Efficient.',
      image: wfhImg,
      specs: 'Intel Core i5 10th Gen • 16GB RAM • Dual Display Ready',
      desc: 'Seamless Zoom meetings, heavy spreadsheet workflows, and reliable daily multitasking.',
    },
    {
      id: 'office',
      title: 'Office & Business',
      subtitle: 'Productive & Stable.',
      image: officeImg,
      specs: 'Dell / HP / Lenovo Pro Workstation • Win 11 Pro Licensed',
      desc: 'Bulk commercial deployment with low power consumption and high uptime SLA.',
    },
    {
      id: 'everyday',
      title: 'Everyday Computing',
      subtitle: 'Smooth & Dependable.',
      image: everydayImg,
      specs: 'Intel Core i3 / i5 • 8GB/16GB RAM • 256GB SSD',
      desc: 'Web browsing, HD video streaming, home productivity, and family desktop utility.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans relative overflow-x-hidden selection:bg-emerald-500 selection:text-slate-950">
      {/* FUTURISTIC EMERALD GREEN / CYAN BACKGROUND EFFECT WITH DESKTOP TECH PARTICLES & MOTHERBOARD TRACES */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Base dark navy */}
        <div className="absolute inset-0 bg-[#020617]" />

        {/* Subtle Animated Circuit Pattern Background */}
        <CircuitBackground glowColor="cyan" intensity="subtle" />

        {/* Subtle Emerald Green & Cyan Radial Glows */}
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-emerald-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-teal-600/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-10 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px]" />

        {/* Digital Grid & Tech Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#020617_90%)]" />

        {/* Desktop Hardware & Motherboard Particle Circuit System */}
        <DesktopTechParticles variant="emerald" density={40} showBadges={true} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-12 space-y-6 sm:space-y-8">
        {/* BREADCRUMB BUTTON NAVIGATION */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center"
        >
          <nav aria-label="Breadcrumb" className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-900/90 border border-emerald-500/30 backdrop-blur-md text-xs sm:text-sm font-medium shadow-[0_0_25px_rgba(16,185,129,0.18)]">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-300 transition-colors px-2 py-0.5 rounded-md hover:bg-white/5"
            >
              <Home size={14} className="text-emerald-400" />
              <span>Home</span>
            </Link>
            <ChevronRight size={13} className="text-slate-600" />
            <Link
              to="/services"
              className="text-slate-300 hover:text-emerald-300 transition-colors px-2 py-0.5 rounded-md hover:bg-white/5"
            >
              Services
            </Link>
            <ChevronRight size={13} className="text-slate-600" />
            <Link
              to="/services/computer-services"
              className="text-slate-300 hover:text-emerald-300 transition-colors px-2 py-0.5 rounded-md hover:bg-white/5 hidden xs:inline-block"
            >
              PC Services
            </Link>
            <ChevronRight size={13} className="text-slate-600 hidden xs:inline-block" />
            <span className="text-emerald-300 font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40">
              Refurbished PC Builds
            </span>
          </nav>
        </motion.div>

        {/* FULL HERO SECTION WITH PC AS CINEMATIC BACKGROUND - UNBOXED & SEAMLESS */}
        <div className="relative w-full overflow-hidden flex items-center py-2 sm:py-4">
          {/* PC IMAGE FULL BACKGROUND LAYER */}
          <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
            {/* Ambient Radial & Floor Lighting behind PC */}
            <div className="absolute right-[0%] lg:right-[10%] top-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] lg:w-[650px] h-[350px] sm:h-[500px] lg:h-[650px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.32)_0%,rgba(6,182,212,0.15)_45%,transparent_70%)] blur-[80px] rounded-full" />
            <div className="absolute -bottom-6 right-[5%] w-[320px] sm:w-[450px] h-20 bg-emerald-500/25 blur-3xl rounded-full" />

            {/* Edge-to-Edge Background PC Rig Visual */}
            <img
              src={refurbishedPcImg}
              alt=""
              aria-hidden="true"
              className="absolute right-[-12%] sm:right-[-4%] lg:right-[2%] xl:right-[5%] top-1/2 -translate-y-1/2 w-[90%] sm:w-[72%] md:w-[62%] lg:w-[52%] xl:w-[46%] max-w-none h-auto object-contain object-right opacity-45 sm:opacity-65 lg:opacity-85 mix-blend-screen contrast-110 brightness-105 transform scale-105 sm:scale-100 transition-all duration-700"
              style={{
                maskImage: 'radial-gradient(ellipse 90% 88% at 65% 50%, black 45%, rgba(0,0,0,0.7) 70%, transparent 98%)',
                WebkitMaskImage: 'radial-gradient(ellipse 90% 88% at 65% 50%, black 45%, rgba(0,0,0,0.7) 70%, transparent 98%)',
              }}
            />

            {/* Cinematic Gradient Overlays for Supreme Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 sm:via-slate-950/75 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/70" />
          </div>

          {/* TEXT & CONTROLS LAYER - SITS DIRECTLY ON TOP OF PC BACKGROUND */}
          <div className="relative z-10 w-full max-w-3xl py-4 sm:py-6 space-y-5 sm:space-y-6">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(16,185,129,0.25)] backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              SMART CHOICE. MAX VALUE.
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none animate-glitch-text"
            >
              <span className="text-white block drop-shadow-md">Refurbished</span>
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent block mt-1 drop-shadow-md">
                PC Builds
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed drop-shadow"
            >
              Certified. Thoroughly tested. Upgraded with modern components. Premium performance you can rely on without the new price tag.
            </motion.p>

            {/* Feature Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-2 sm:gap-4 pt-2 max-w-lg"
            >
              <div className="flex flex-col items-start p-2.5 sm:p-3.5 rounded-2xl bg-slate-900/70 border border-emerald-500/25 backdrop-blur-md shadow-sm">
                <div className="flex items-center gap-1.5 text-emerald-400 mb-1">
                  <CheckCircle2 size={16} />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-200">CERTIFIED</span>
                </div>
                <span className="text-[11px] sm:text-xs text-slate-400 font-mono">50+ Point Check</span>
              </div>

              <div className="flex flex-col items-start p-2.5 sm:p-3.5 rounded-2xl bg-slate-900/70 border border-emerald-500/25 backdrop-blur-md shadow-sm">
                <div className="flex items-center gap-1.5 text-teal-400 mb-1">
                  <Zap size={16} />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-200">UPGRADED</span>
                </div>
                <span className="text-[11px] sm:text-xs text-slate-400 font-mono">Max Output</span>
              </div>

              <div className="flex flex-col items-start p-2.5 sm:p-3.5 rounded-2xl bg-slate-900/70 border border-emerald-500/25 backdrop-blur-md shadow-sm">
                <div className="flex items-center gap-1.5 text-cyan-400 mb-1">
                  <ShieldCheck size={16} />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-200">WARRANTY</span>
                </div>
                <span className="text-[11px] sm:text-xs text-slate-400 font-mono">Peace of Mind</span>
              </div>
            </motion.div>

            {/* Hero Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2"
            >
              <button
                onClick={() => setShowQuoteModal(true)}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-extrabold text-sm sm:text-base shadow-[0_0_35px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 group"
              >
                <span>View Refurbished PCs</span>
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform text-slate-950" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* WHY REFURBISHED? */}
        <div className="relative overflow-hidden rounded-3xl p-6 sm:p-8 border border-emerald-500/20 bg-slate-900/40 backdrop-blur-xl space-y-6 sm:space-y-8 shadow-[0_0_50px_rgba(16,185,129,0.12)]">
          <GlowingLinePattern color="emerald" />

          <div className="relative z-10 text-center space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
              WHY REFURBISHED?
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Quality You Can <span className="text-emerald-400">Trust</span>. Price You'll <span className="text-teal-300">Love</span>.
            </h2>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {whyRefurbishedFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-2xl bg-slate-950/70 border border-emerald-500/20 hover:border-emerald-400/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.25)] backdrop-blur-xl flex flex-col items-center text-center space-y-3 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-400/30 flex items-center justify-center text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    <IconComp size={22} />
                  </div>
                  <h3 className="text-sm font-bold text-white">{feat.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{feat.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* BEST FOR */}
        <div className="space-y-6 sm:space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
              BEST FOR
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Perfect for <span className="text-emerald-400">Smart Users</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestForCategories.map((cat) => (
              <motion.div
                key={cat.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl bg-slate-900/70 border border-emerald-500/20 hover:border-emerald-400/60 hover:shadow-[0_0_35px_rgba(16,185,129,0.3)] overflow-hidden backdrop-blur-xl transition-all duration-300 flex flex-col"
              >
                {/* Visual Image Container */}
                <div 
                  className="relative h-48 w-full overflow-hidden bg-slate-950"
                  style={{
                    maskImage: 'radial-gradient(ellipse 95% 95% at 50% 50%, black 60%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 95% 95% at 50% 50%, black 60%, transparent 100%)',
                  }}
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#020617_90%)] pointer-events-none" />

                  {/* Glowing Edge Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-emerald-300/80 font-medium">{cat.subtitle}</p>
                    <p className="text-xs text-slate-400 line-clamp-2">{cat.desc}</p>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-500">1-Yr Warranty</span>
                    <button
                      onClick={() => setSelectedTarget(cat)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 group-hover:translate-x-1 transition-all"
                    >
                      <span>Explore</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA SECTION */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-slate-900/90 via-emerald-950/50 to-slate-900/90 border border-emerald-500/40 shadow-[0_0_50px_rgba(16,185,129,0.25)] backdrop-blur-2xl overflow-hidden text-center space-y-6"
        >
          {/* Subtle Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Need Help Finding the Right System?
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Our experts will help you choose the best certified refurbished PC.
            </p>
          </div>

          <div className="relative z-10 pt-2">
            <button
              onClick={() => setShowQuoteModal(true)}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 font-extrabold text-sm sm:text-base shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center gap-2"
            >
              <span>Get Expert Advice</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>

        {/* FAQ SECTION (Sub-Service Level) */}
        <FaqSection category="refurbished-pc-building" />
      </div>

      {/* CHAT ASSISTANT FLOATING BUTTON */}
      <ChatAssistant />

      {/* CONSULTATION MODAL */}
      {(showQuoteModal || selectedTarget) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-lg rounded-3xl bg-slate-900 border border-emerald-500/40 p-6 sm:p-8 space-y-6 shadow-[0_0_50px_rgba(16,185,129,0.4)] relative"
          >
            <button
              onClick={() => {
                setShowQuoteModal(false);
                setSelectedTarget(null);
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg font-bold w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center"
            >
              ✕
            </button>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase">ITHETHIK CERTIFIED REFURBISHED</span>
              <h3 className="text-2xl font-bold text-white">
                {selectedTarget ? selectedTarget.title : 'Inquire Refurbished PCs'}
              </h3>
              <p className="text-xs text-slate-300">
                {selectedTarget ? selectedTarget.desc : 'Get instant availability and pricing for Dell, HP, Lenovo & Custom restored workstations.'}
              </p>
            </div>

            {selectedTarget && (
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-xs space-y-1 font-mono">
                <span className="text-emerald-300 font-bold block">Spec Benchmark:</span>
                <p className="text-slate-300">{selectedTarget.specs}</p>
              </div>
            )}

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Inquiry received! Our team will contact you with available stock.'); setShowQuoteModal(false); setSelectedTarget(null); }}>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Your Full Name</label>
                <input required type="text" placeholder="Alex Morgan" className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-emerald-400 focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Phone Number / WhatsApp</label>
                <input required type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-emerald-400 focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Quantity Required</label>
                <select className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-emerald-400 focus:outline-none">
                  <option>1 Unit (Personal / WFH)</option>
                  <option>2 - 5 Units (Small Office / Lab)</option>
                  <option>5 - 20 Units (Corporate / Call Center)</option>
                  <option>20+ Bulk Procurement</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-sm shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all"
              >
                Request Available Stock
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default RefurbishedPcBuilding;
