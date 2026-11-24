import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Laptop,
  Cpu,
  Monitor,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Zap,
  Headphones,
  CheckCircle2,
  Wrench,
} from 'lucide-react';
import ChatAssistant from '../components/ChatAssistant';
import FaqSection from '../components/FaqSection';
import CanvasParticleField from '../components/CanvasParticleField';
import CircuitBackground from '../components/CircuitBackground';
import RevealOnScroll from '../components/RevealOnScroll';

const RepairingServices = () => {
  const repairServices = [
    {
      id: 'laptop-repair',
      title: 'Laptop Repair',
      subtitle: 'Hardware & OS Repairs',
      desc: 'Expert diagnostic and repair services for laptops of all major brands. Screen replacement, battery fixes, keyboard repair, and liquid damage recovery.',
      path: '/services/laptop-repair',
      isHtml: false,
      icon: Laptop,
      badge: 'Hardware & OS',
      colorTheme: 'cyan',
      features: [
        'Display & touchscreen replacement',
        'Battery & charging port repair',
        'Keyboard & trackpad fix',
        'Liquid spill cleanup & recovery',
      ],
    },
    {
      id: 'chip-level-repair',
      title: 'Chip Level Repair',
      subtitle: 'Micro-Soldering & IC Rework',
      desc: 'Advanced component-level motherboard repair, micro-soldering, short circuit diagnostics, and IC replacement by experienced hardware engineers.',
      path: '/services/chip-level-repair',
      isHtml: false,
      icon: Cpu,
      badge: 'Micro-Soldering',
      colorTheme: 'purple',
      features: [
        'Motherboard micro-soldering & tracing',
        'Power IC & charging controller fix',
        'BIOS reprogramming & EEPROM recovery',
        'Short circuit thermal inspection',
      ],
    },
    {
      id: 'computer-repair',
      title: 'Computer Repair',
      subtitle: 'Desktop & Workstation Support',
      desc: 'Comprehensive desktop computer repair, custom PC hardware upgrades, thermal tuning, virus removal, and business workstation maintenance.',
      path: '/services/computer-repair',
      isHtml: false,
      icon: Monitor,
      badge: 'Workstation & PC',
      colorTheme: 'blue',
      features: [
        'Complete hardware diagnostics',
        'RAM, SSD & GPU upgrades',
        'Deep virus & malware eradication',
        'Custom PC assembly & thermal tuning',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] pt-2 sm:pt-4 pb-20 px-6 md:px-10 relative overflow-hidden">
      {/* Abstract Background Design */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#020617]" />
        <CircuitBackground glowColor="cyan" intensity="subtle" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Animated Flowing Glowing Orbs */}
        <motion.div
          animate={{ x: [0, 70, 0], y: [0, -40, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-10%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-purple-600/20 blur-[140px]"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 50, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[25%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-cyan-600/20 blur-[130px]"
        />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 60, 0] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[-15%] left-[25%] w-[50vw] h-[50vw] rounded-full bg-blue-600/15 blur-[160px]"
        />

        {/* Dynamic Canvas Circuit & Light Node Field */}
        <CanvasParticleField variant="purple" mode="mixed" density={40} speed={0.35} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors font-medium px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <ArrowLeft size={16} /> Back to All Services
          </Link>
        </motion.div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 relative"
        >
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md text-xs font-bold tracking-wider text-purple-300 uppercase shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <Wrench size={14} className="text-cyan-400" />
              Hardware Excellence
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Repairing <span className="bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 text-transparent bg-clip-text">Services</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Professional computer, laptop, and chip-level repairing solutions. From minor software tune-ups to high-precision micro-soldering, we restore your devices with speed and accuracy.
          </p>

          {/* Badges Row */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-2xl">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <ShieldCheck size={18} />
              </div>
              <span className="text-white font-medium text-sm">Certified Engineers</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-2xl">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Zap size={18} />
              </div>
              <span className="text-white font-medium text-sm">Quick Turnaround</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-2xl">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Headphones size={18} />
              </div>
              <span className="text-white font-medium text-sm">Repair Warranty</span>
            </div>
          </div>
        </motion.div>

        {/* 3 Repair Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {repairServices.map((service, idx) => {
            const IconComp = service.icon;
            const isPurple = service.colorTheme === 'purple';
            const isBlue = service.colorTheme === 'blue';

            return (
              <RevealOnScroll
                key={service.id}
                delay={idx * 100}
                className={`group bg-[#0a1122] border border-white/10 p-8 rounded-3xl transition-all duration-300 shadow-xl shadow-black/50 flex flex-col h-full relative overflow-hidden ${
                  isPurple
                    ? 'hover:border-purple-500/40 hover:shadow-purple-500/15'
                    : isBlue
                    ? 'hover:border-blue-500/40 hover:shadow-blue-500/15'
                    : 'hover:border-cyan-500/40 hover:shadow-cyan-500/15'
                }`}
              >
                {/* Background Glow */}
                <div
                  className={`absolute top-0 right-0 w-36 h-36 rounded-full blur-3xl transition-all ${
                    isPurple
                      ? 'bg-purple-500/10 group-hover:bg-purple-500/25'
                      : isBlue
                      ? 'bg-blue-500/10 group-hover:bg-blue-500/25'
                      : 'bg-cyan-500/10 group-hover:bg-cyan-500/25'
                  }`}
                />

                {/* Badge */}
                <div className="flex justify-between items-start mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner ${
                      isPurple
                        ? 'bg-gradient-to-br from-purple-500/20 to-transparent border border-purple-500/30 text-purple-400'
                        : isBlue
                        ? 'bg-gradient-to-br from-blue-500/20 to-transparent border border-blue-500/30 text-blue-400'
                        : 'bg-gradient-to-br from-cyan-500/20 to-transparent border border-cyan-500/30 text-cyan-400'
                    }`}
                  >
                    <IconComp size={28} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                    {service.badge}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h2>
                <p className="text-xs font-semibold text-cyan-400/90 mb-4">{service.subtitle}</p>

                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                  {service.desc}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 mb-8 pt-4 border-t border-white/5">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs text-gray-300">
                      <CheckCircle2
                        size={14}
                        className={
                          isPurple ? 'text-purple-400' : isBlue ? 'text-blue-400' : 'text-cyan-400'
                        }
                      />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Explore Button */}
                {service.isHtml ? (
                  <a
                    href={service.path}
                    className={`mt-auto w-full py-3.5 px-5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 group/btn shadow-lg ${
                      isPurple
                        ? 'bg-purple-600/20 hover:bg-purple-500 text-purple-200 hover:text-white border border-purple-500/30'
                        : isBlue
                        ? 'bg-blue-600/20 hover:bg-blue-500 text-blue-200 hover:text-white border border-blue-500/30'
                        : 'bg-cyan-600/20 hover:bg-cyan-500 text-cyan-200 hover:text-slate-950 border border-cyan-500/30'
                    }`}
                  >
                    <span>Explore {service.title}</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1.5 transition-transform" />
                  </a>
                ) : (
                  <Link
                    to={service.path}
                    className={`mt-auto w-full py-3.5 px-5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 group/btn shadow-lg ${
                      isPurple
                        ? 'bg-purple-600/20 hover:bg-purple-500 text-purple-200 hover:text-white border border-purple-500/30'
                        : isBlue
                        ? 'bg-blue-600/20 hover:bg-blue-500 text-blue-200 hover:text-white border border-blue-500/30'
                        : 'bg-cyan-600/20 hover:bg-cyan-500 text-cyan-200 hover:text-slate-950 border border-cyan-500/30'
                    }`}
                  >
                    <span>Explore {service.title}</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1.5 transition-transform" />
                  </Link>
                )}
              </RevealOnScroll>
            );
          })}
        </div>

        {/* CTA Banner */}
        <RevealOnScroll className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-r from-purple-950/70 via-slate-900/90 to-cyan-950/70 border border-white/10 shadow-2xl mb-20 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative z-10 max-w-2xl text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              Need Hardware Diagnostic or Emergency Support?
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Contact our expert technicians today for immediate assistance, hardware troubleshooting, or on-site computer support.
            </p>
          </div>
          <Link
            to="/contact"
            className="relative z-10 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-purple-500/25 flex items-center gap-2 hover:shadow-cyan-500/30 transition-all duration-200 shrink-0"
          >
            Get Free Inspection <ArrowRight size={18} />
          </Link>
        </RevealOnScroll>

        {/* FAQ Section (Main Repair Category Level) & Chat Assistant */}
        <FaqSection category="repairing-services" />
        <ChatAssistant />
      </div>
    </div>
  );
};

export default RepairingServices;
