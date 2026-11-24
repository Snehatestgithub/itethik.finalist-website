import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Headphones,
  Clock,
} from 'lucide-react';
import ChatAssistant from '../components/ChatAssistant';
import FaqSection from '../components/FaqSection';
import CanvasParticleField from '../components/CanvasParticleField';
import CircuitBackground from '../components/CircuitBackground';
import RevealOnScroll from '../components/RevealOnScroll';
import maintenanceHeroBg from '../assets/images/maintenance_hero_bg_1787035173189.jpg';
import securityCameraPair from '../assets/images/security-surveillance-camera-pair.png';
import engineeringHardwareComponents from '../assets/images/engineering-hardware-components.png';
import buildingDigitalExperiencesLaptop from '../assets/images/building-digital-experiences-laptop.png';

const MaintenanceServices = () => {
  const maintenanceServices = [
    {
      id: 'cctv-maintenance',
      title: 'CCTV Maintenance',
      subtitle: 'Reliable security, day and night.',
      image: securityCameraPair,
      path: '/services/cctv-maintenance',
      colorTheme: 'rose',
    },
    {
      id: 'computer-laptop-maintenance',
      title: 'Laptop & Computer Repair',
      subtitle: 'Expert care for the devices you rely on.',
      image: engineeringHardwareComponents,
      path: '/services/computer-laptop-maintenance',
      colorTheme: 'purple',
    },
    {
      id: 'web-development-maintenance',
      title: 'Website Maintenance',
      subtitle: 'Secure, fast, and running smoothly.',
      image: buildingDigitalExperiencesLaptop,
      path: '/services/web-development-maintenance',
      colorTheme: 'blue',
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] pt-0 pb-0 px-6 md:px-10 relative overflow-hidden">
      {/* Background Design */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#020617]" />
        
        {/* Full-Bleed Cinematic Collage Background */}
        <div className="absolute inset-0">
          <img
            src={maintenanceHeroBg}
            alt="Maintenance Services Background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top opacity-60 sm:opacity-70 scale-100 filter brightness-95 contrast-105"
          />
          {/* Gentle Luxury Vignette for Content Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-[#020617]/40 to-[#020617]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/75 via-transparent to-[#020617]/75" />
        </div>

        <CircuitBackground glowColor="cyan" intensity="subtle" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Glowing Orbs */}
        <motion.div
          animate={{ x: [0, 70, 0], y: [0, -40, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-10%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-purple-600/15 blur-[140px]"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 50, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[25%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-rose-600/15 blur-[130px]"
        />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 60, 0] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[-15%] left-[25%] w-[50vw] h-[50vw] rounded-full bg-indigo-600/10 blur-[160px]"
        />

        {/* Dynamic Canvas Circuit & Light Node Field */}
        <CanvasParticleField variant="purple" mode="mixed" density={30} speed={0.35} />
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
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors font-medium px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <ArrowLeft size={16} /> Back to All Services
          </Link>
        </motion.div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20 relative isolate"
        >
          <div className="pointer-events-none absolute -inset-x-8 -inset-y-8 -z-20 overflow-hidden rounded-[3rem]">
            <img
              src={maintenanceHeroBg}
              alt=""
              aria-hidden="true"
              className="h-full w-full scale-110 object-cover object-center opacity-[0.12] blur-[1px]"
              style={{ maskImage: 'linear-gradient(to bottom, transparent, black 24%, black 76%, transparent)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/55 via-[#020617]/70 to-[#020617]/95" />
          </div>
          <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-64 w-[min(80vw,52rem)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.12),rgba(34,211,238,0.045)_42%,transparent_72%)] blur-2xl" />
          <div className="pointer-events-none absolute top-10 left-[16%] -z-10 h-40 w-40 rounded-full bg-cyan-500/[0.045] blur-3xl" />
          <motion.div
            aria-hidden="true"
            animate={{ x: [0, 28, 0], y: [0, 12, 0], opacity: [0.28, 0.48, 0.28] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute -top-10 right-[12%] -z-10 h-48 w-48 rounded-full bg-blue-500/[0.08] blur-[70px]"
          />
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Maintenance <span className="bg-gradient-to-r from-purple-400 via-rose-400 to-blue-400 text-transparent bg-clip-text">Services</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Prevent costly downtime before it happens. Comprehensive annual maintenance contracts (AMC), hardware health audits, CCTV camera servicing, and continuous web application care.
          </p>

          {/* Badges Row */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-3 bg-slate-900/80 border border-white/10 px-5 py-2.5 rounded-2xl backdrop-blur-md shadow-lg">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <ShieldCheck size={18} />
              </div>
              <span className="text-white font-medium text-sm">Guaranteed Response SLA</span>
            </div>
            <div className="flex items-center gap-3 bg-slate-900/80 border border-white/10 px-5 py-2.5 rounded-2xl backdrop-blur-md shadow-lg">
              <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                <Clock size={18} />
              </div>
              <span className="text-white font-medium text-sm">Scheduled Preventive Audits</span>
            </div>
            <div className="flex items-center gap-3 bg-slate-900/80 border border-white/10 px-5 py-2.5 rounded-2xl backdrop-blur-md shadow-lg">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Headphones size={18} />
              </div>
              <span className="text-white font-medium text-sm">Priority Standby & Remote Aid</span>
            </div>
          </div>
        </motion.div>

        {/* 3 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {maintenanceServices.map((service, idx) => {
            const isRose = service.colorTheme === 'rose';
            const isBlue = service.colorTheme === 'blue';

            return (
              <RevealOnScroll
                key={service.id}
                delay={idx * 100}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-slate-950/10 p-7 transition-all duration-300 hover:bg-slate-900/20 sm:p-8 ${
                  isRose
                    ? 'hover:border-rose-400/25'
                    : isBlue
                    ? 'hover:border-cyan-400/25'
                    : 'hover:border-violet-400/25'
                }`}
              >
                <div className="pointer-events-none absolute -top-16 right-0 h-44 w-44 rounded-full bg-cyan-400/[0.06] blur-[70px] transition-opacity duration-500 group-hover:opacity-150" />

                {/* Existing service artwork blends into the transparent section. */}
                <div className="relative -mx-7 -mt-7 mb-6 h-60 overflow-hidden sm:-mx-8 sm:-mt-8 sm:h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    style={{
                      WebkitMaskImage: 'linear-gradient(to bottom, black 68%, transparent 100%), linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
                      WebkitMaskComposite: 'source-in',
                      maskImage: 'linear-gradient(to bottom, black 68%, transparent 100%), linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
                      maskComposite: 'intersect',
                    }}
                  />
                  {service.id === 'cctv-maintenance' && (
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_55%_48%,rgba(244,63,94,0.24),transparent_52%)] mix-blend-screen" />
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/70 via-transparent to-[#020617]/10" />
                </div>

                <div className="relative flex flex-1 flex-col">
                  <div className="mb-2 flex items-center gap-3">
                    <span className={`h-px w-8 ${isRose ? 'bg-rose-400/70' : isBlue ? 'bg-cyan-400/70' : 'bg-violet-400/70'}`} />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">0{idx + 1} / Maintenance</span>
                  </div>

                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-cyan-100">
                    {service.title}
                  </h2>
                  <p className="mb-6 text-sm leading-relaxed text-slate-300/90">{service.subtitle}</p>

                  <Link
                    to={service.path}
                    className="group/btn mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-2.5 text-sm font-semibold text-emerald-200 transition-all duration-200 hover:border-emerald-300/60 hover:bg-emerald-300 hover:text-slate-950"
                  >
                    <span>Explore</span>
                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* CTA Banner */}
        <RevealOnScroll className="relative mx-auto min-h-[150px] w-full max-w-7xl p-6 md:min-h-[170px] md:p-8 rounded-3xl bg-gradient-to-r from-purple-950/70 via-slate-900/90 to-rose-950/70 border border-white/10 shadow-2xl mb-20 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative z-10 max-w-2xl text-left">
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2.5">
              Need a Custom Annual Maintenance Contract (AMC)?
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Contact our service experts for site audits, tailored SLA packages, and corporate hardware and web maintenance proposals.
            </p>
          </div>
          <Link
            to="/contact"
            className="relative z-10 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-rose-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-purple-500/25 flex items-center gap-2 hover:shadow-rose-500/30 transition-all duration-200 shrink-0"
          >
            Get Custom AMC Quote <ArrowRight size={18} />
          </Link>
        </RevealOnScroll>

        {/* FAQ Section (Main Maintenance Category Level) & Chat Assistant */}
        <FaqSection
          category="maintenance"
          badge=""
          subtitle=""
          compact
          className="!pb-0"
          footerClassName="mt-14 p-4 sm:p-5"
        />
        <ChatAssistant />
      </div>
    </div>
  );
};

export default MaintenanceServices;
