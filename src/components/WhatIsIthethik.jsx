import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const repairImg = '/images/about-hero/about-hero-service-4.png';
const cctvImg = '/images/about-hero/about-hero-service-3.png';
const hardwareImg = '/images/about-hero/about-hero-service-1.png';
const enterpriseSupportImg = '/images/about-hero/about-hero-web-development.png';

/* =========================================================================
   EDITABLE DATA & CONFIGURATION (14 ENGLISH FONTS + ORIGINAL LOGO)
   ========================================================================= */

const FONT_CYCLE = [
  { id: 'font-1', text: 'itethik', fontFamily: "'Monoton', cursive", fontWeight: '400', letterSpacing: '0.04em', duration: 140 },
  { id: 'font-2', text: 'itethik', fontFamily: "'Press Start 2P', monospace", fontWeight: '400', letterSpacing: '-0.06em', duration: 140 },
  { id: 'font-3', text: 'itethik', fontFamily: "'Playfair Display', serif", fontWeight: '900', fontStyle: 'italic', letterSpacing: '0.02em', duration: 140 },
  { id: 'font-4', text: 'itethik', fontFamily: "'Permanent Marker', cursive", fontWeight: '400', letterSpacing: '0.02em', duration: 140 },
  { id: 'font-5', text: 'itethik', fontFamily: "'MedievalSharp', cursive", fontWeight: '700', letterSpacing: '0.03em', duration: 140 },
  { id: 'font-6', text: 'ITETHIK', fontFamily: "'Bebas Neue', sans-serif", fontWeight: '400', letterSpacing: '0.06em', duration: 140 },
  { id: 'font-7', text: 'itethik', fontFamily: "'Great Vibes', cursive", fontWeight: '400', letterSpacing: '0.04em', duration: 150 },
  { id: 'font-8', text: 'ITETHIK', fontFamily: "'Cinzel Decorative', serif", fontWeight: '900', letterSpacing: '0.05em', duration: 140 },
  { id: 'font-9', text: 'itethik', fontFamily: "'Silkscreen', monospace", fontWeight: '700', letterSpacing: '-0.02em', duration: 140 },
  { id: 'font-10', text: 'itethik', fontFamily: "'Comfortaa', cursive", fontWeight: '700', letterSpacing: '-0.02em', duration: 140 },
  { id: 'font-11', text: 'ITETHIK', fontFamily: "'Bungee', cursive", fontWeight: '400', letterSpacing: '0.02em', duration: 140 },
  { id: 'font-12', text: 'itethik', fontFamily: "'Major Mono Display', monospace", fontWeight: '400', letterSpacing: '0.04em', duration: 140 },
  { id: 'font-13', text: 'itethik', fontFamily: "'Unbounded', sans-serif", fontWeight: '900', letterSpacing: '-0.03em', duration: 140 },
  { id: 'font-14', text: 'itethik', fontFamily: "'JetBrains Mono', monospace", fontWeight: '800', letterSpacing: '-0.04em', duration: 140 },
  { id: 'logo-final', isLogo: true, text: 'itethik', duration: 1200 },
];

// Content for State 1
const STATE_1_CONTENT = {
  fixedPrefix: 'WHAT IS',
  description:
    'More than a name — itethik represents our approach to ethical innovation, technology and meaningful solutions. Built on uncompromising precision, genuine hardware components, and complete operational transparency.',
  buttonLabel: 'Discover core services',
};

// Core services for State 2
const CORE_SERVICES = [
  {
    id: 'chip-level',
    num: '01',
    title: 'Chip-Level Engineering',
    description: 'We diagnose board-level faults with precision. Our technicians repair motherboards and restore damaged hardware. Each repair is handled carefully to help devices return to reliable operation.',
    image: repairImg,
    imageAlt: 'Laptop motherboard repair and services',
  },
  {
    id: 'security-surveillance',
    num: '02',
    title: 'Security & Surveillance',
    description: 'We install CCTV systems for homes and businesses. Integrated cameras and security components work together to protect your space. We help keep monitoring clear and dependable.',
    image: cctvImg,
    imageAlt: 'CCTV installation and security services',
  },
  {
    id: 'hardware',
    num: '03',
    title: 'Custom Computing',
    description: 'We build custom PCs around your needs. Hardware upgrades can improve speed, storage, or graphics performance. Each setup is tailored for work, gaming, or creative tasks.',
    image: hardwareImg,
    imageAlt: 'Desktop service and IT solutions',
  },
  {
    id: 'enterprise-it-support',
    num: '04',
    title: 'Enterprise IT Support',
    description: 'We help keep business IT systems running reliably. Our team handles maintenance, troubleshooting, and technical issues. Ongoing support helps reduce disruption and keep teams productive.',
    image: enterpriseSupportImg,
    imageAlt: 'Laptop displaying a digital service and trusted support',
  },
];

export default function WhatIsIthethik() {
  const [activeSlide, setActiveSlide] = useState(0); // 0 = "What is itethik?", 1 = "Core Services Animated Showcase"
  const [cycleIndex, setCycleIndex] = useState(0);

  // State 2 Active Service & Hover/Pause State
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef(null);
  const fontTimerRef = useRef(null);
  const serviceTimerRef = useRef(null);

  // State 1: Ultra-Fast Typography Morphing Timer Loop
  useEffect(() => {
    if (activeSlide !== 0) return;

    const currentItem = FONT_CYCLE[cycleIndex] || FONT_CYCLE[0];
    const duration = currentItem.duration || 160;

    fontTimerRef.current = setTimeout(() => {
      setCycleIndex((prev) => (prev + 1) % FONT_CYCLE.length);
    }, duration);

    return () => {
      if (fontTimerRef.current) clearTimeout(fontTimerRef.current);
    };
  }, [cycleIndex, activeSlide]);

  // State 2: Automatic sequential linewise animation through the 3 services (pauses on hover)
  useEffect(() => {
    if (activeSlide !== 1 || isHovered) return;

    serviceTimerRef.current = setInterval(() => {
      setActiveServiceIndex((prev) => (prev + 1) % CORE_SERVICES.length);
    }, 2800);

    return () => {
      if (serviceTimerRef.current) clearInterval(serviceTimerRef.current);
    };
  }, [activeSlide, isHovered]);

  const activeFontItem = FONT_CYCLE[cycleIndex] || FONT_CYCLE[0];
  const activeService = CORE_SERVICES[activeServiceIndex] || CORE_SERVICES[0];

  // Ultra-Smooth Slide Animation Variants (Hardware-Accelerated, zero blur overhead)
  const slideVariants = {
    initial: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 30 : -30,
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -30 : 30,
      transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="my-10 sm:my-16 px-4 sm:px-6 max-w-4xl mx-auto relative z-10"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[280px] bg-white/[0.04] rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* UNIFIED WHITE RECTANGULAR CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full rounded-2xl sm:rounded-3xl bg-white text-slate-900 border border-slate-200 p-5 sm:p-7 md:p-9 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
      >
        <AnimatePresence mode="wait" custom={activeSlide}>
          {activeSlide === 0 ? (
            /* =========================================================================
               STATE 1: "WHAT IS [itethik]?" (14 ENGLISH FONTS + ORIGINAL LOGO)
               ========================================================================= */
            <motion.div
              key="state-1"
              custom={1}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full flex flex-col items-center text-center space-y-4 sm:space-y-5"
            >
              {/* MAIN HERO HEADING: Fixed "WHAT IS" + Animated 14 Fonts / Logo */}
              <div className="w-full max-w-3xl mx-auto">
                <h2 className="tracking-tight text-slate-950 flex flex-wrap items-center justify-center gap-x-1.5 sm:gap-x-2 leading-none">
                  {/* FIXED "WHAT IS" */}
                  <span className="text-base sm:text-xl md:text-2xl lg:text-3xl font-black text-slate-950 uppercase select-none tracking-tight font-sans">
                    {STATE_1_CONTENT.fixedPrefix}
                  </span>

                  {/* DYNAMIC ANIMATED WORD IN 14 ENGLISH FONTS / PROMINENT ORIGINAL LOGO */}
                  <span className="inline-flex items-center min-w-[120px] sm:min-w-[160px] md:min-w-[195px] h-9 sm:h-12 md:h-14 justify-start text-left relative overflow-visible py-0.5">
                    <AnimatePresence>
                      {activeFontItem.isLogo ? (
                        <motion.span
                          key={activeFontItem.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.08, ease: 'easeOut' }}
                          className="absolute inset-y-0 left-0 flex items-center"
                        >
                          <img
                            src="/logo.png"
                            alt="itethik"
                            className="h-8 sm:h-11 md:h-12 lg:h-14 w-auto object-contain select-none pointer-events-none drop-shadow-md"
                          />
                        </motion.span>
                      ) : (
                        <motion.span
                          key={activeFontItem.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.06, ease: 'easeOut' }}
                          style={{
                            fontFamily: activeFontItem.fontFamily,
                            fontWeight: activeFontItem.fontWeight || '800',
                            fontStyle: activeFontItem.fontStyle || 'normal',
                            letterSpacing: activeFontItem.letterSpacing || 'normal',
                          }}
                          className="absolute inset-y-0 left-0 flex items-center select-none text-base sm:text-xl md:text-2xl lg:text-3xl text-slate-950 leading-none whitespace-nowrap"
                        >
                          {activeFontItem.text}
                        </motion.span>
                      )}
                    </AnimatePresence>

                    {/* INVISIBLE PLACEHOLDER FOR FLEX SPACING */}
                    <span className="text-base sm:text-xl md:text-2xl lg:text-3xl font-black text-slate-950 select-none leading-none font-sans invisible pointer-events-none">
                      itethik
                    </span>
                  </span>

                  {/* VISIBLE FIXED QUESTION MARK */}
                  <span className="text-base sm:text-xl md:text-2xl lg:text-3xl font-black text-slate-950 select-none leading-none font-sans ml-0.5">
                    ?
                  </span>
                </h2>
              </div>

              {/* DESCRIPTION DIRECTLY BELOW */}
              <div className="max-w-xl mx-auto pt-1">
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {STATE_1_CONTENT.description}
                </p>
              </div>

              {/* ARROW-ONLY BUTTON ANCHORED AT BOTTOM RIGHT */}
              <div className="w-full flex justify-end items-center pt-2 sm:pt-4">
                <button
                  onClick={() => setActiveSlide(1)}
                  aria-label="View core services"
                  className="group w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-950 text-white hover:bg-slate-800 flex items-center justify-center transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_22px_rgba(0,0,0,0.35)] hover:scale-105 cursor-pointer"
                >
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
              </div>
            </motion.div>
          ) : (
            /* =========================================================================
               STATE 2: ANIMATED CORE SERVICES
               Sequential linewise animation + Image synchronization + Hover-to-pause & inspect
               ========================================================================= */
            <motion.div
              key="state-2"
              custom={-1}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full text-left space-y-4 sm:space-y-5 text-slate-900"
            >
              {/* Title Header */}
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-950 tracking-tight leading-tight uppercase">
                  WHAT CORE SERVICES WE PROVIDE
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-0.5 font-normal">
                  Four focused services.
                </p>
              </div>

              {/* DYNAMIC SIDE-BY-SIDE INTERACTION: Sequenced Text Lines (Left) + Synced High-Res Image (Right) */}
              <div
                className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* LEFT: Core services in strict animated sequence (7 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-2.5">
                  {CORE_SERVICES.map((service, idx) => {
                    const isActive = activeServiceIndex === idx;
                    return (
                      <div
                        key={service.id}
                        onMouseEnter={() => {
                          setIsHovered(true);
                          setActiveServiceIndex(idx);
                        }}
                        onClick={() => setActiveServiceIndex(idx)}
                        className={`group relative rounded-xl p-3.5 sm:p-4 transition-all duration-300 cursor-pointer border ${
                          isActive
                            ? 'bg-slate-950 text-white border-slate-950 shadow-[0_8px_24px_rgba(0,0,0,0.18)] scale-[1.01]'
                            : 'bg-slate-50 text-slate-900 border-slate-200 hover:border-slate-400 hover:bg-slate-100/80'
                        }`}
                      >
                        {/* Auto-cycle timer progress indicator bar when active & not hovered */}
                        {isActive && (
                          <div className="absolute top-0 left-3 right-3 h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              key={`${service.id}-${isHovered ? 'paused' : 'running'}`}
                              initial={{ width: '0%' }}
                              animate={{ width: isHovered ? '100%' : '100%' }}
                              transition={{
                                duration: isHovered ? 0 : 2.8,
                                ease: 'linear',
                              }}
                              className="h-full bg-cyan-400 rounded-full"
                            />
                          </div>
                        )}

                        <div className="flex items-center gap-3 pt-0.5">
                          <span
                            className={`text-xs font-mono font-black ${
                              isActive ? 'text-cyan-400' : 'text-slate-400 group-hover:text-slate-800'
                            }`}
                          >
                            {service.num}
                          </span>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <h4
                                className={`text-base sm:text-lg font-black tracking-tight leading-snug ${
                                  isActive ? 'text-white' : 'text-slate-950'
                                }`}
                              >
                                {service.title}
                              </h4>
                            </div>

                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* RIGHT: Synchronized supplied image for the active service */}
                <div className="lg:col-span-7 flex flex-col">
                  <div className="w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-xl">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeService.id}
                        initial={{ opacity: 0, scale: 1.03 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        style={{ willChange: 'opacity, transform' }}
                        className="relative w-full overflow-hidden rounded-xl"
                      >
                        <img
                          src={activeService.image}
                          alt={activeService.imageAlt}
                          className="block h-auto w-full object-cover select-none"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <p className="pt-2 text-xs sm:text-sm leading-relaxed text-slate-700">
                    {activeService.description}
                  </p>
                </div>
              </div>

              {/* ARROW-ONLY BUTTON ANCHORED AT BOTTOM LEFT */}
              <div className="w-full flex justify-start items-center pt-2 sm:pt-3">
                <button
                  onClick={() => setActiveSlide(0)}
                  aria-label="Back to What is itethik"
                  className="group w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-950 text-white hover:bg-slate-800 flex items-center justify-center transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_22px_rgba(0,0,0,0.35)] hover:scale-105 cursor-pointer"
                >
                  <ArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
