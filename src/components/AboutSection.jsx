import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

/* =========================================================================
   7 GOOGLE FONTS FOR THE "itethik" WORD ANIMATION
   ========================================================================= */
const GOOGLE_FONTS = [
  {
    id: 'font-1',
    text: 'itethik',
    fontName: 'Outfit',
    styleLabel: 'Modern Tech Sans',
    fontFamily: "'Outfit', sans-serif",
    fontWeight: '800',
    letterSpacing: '-0.02em',
    duration: 350,
  },
  {
    id: 'font-2',
    text: 'itethik',
    fontName: 'JetBrains Mono',
    styleLabel: 'Cyber Monospace',
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: '800',
    letterSpacing: '-0.04em',
    duration: 350,
  },
  {
    id: 'font-3',
    text: 'itethik',
    fontName: 'Playfair Display',
    styleLabel: 'Editorial Luxury Serif',
    fontFamily: "'Playfair Display', serif",
    fontWeight: '800',
    fontStyle: 'italic',
    letterSpacing: '0.01em',
    duration: 350,
  },
  {
    id: 'font-4',
    text: 'itethik',
    fontName: 'Unbounded',
    styleLabel: 'Futuristic Wide Display',
    fontFamily: "'Unbounded', sans-serif",
    fontWeight: '800',
    letterSpacing: '-0.03em',
    duration: 350,
  },
  {
    id: 'font-5',
    text: 'ITETHIK',
    fontName: 'Cinzel',
    styleLabel: 'Cinematic Roman Imperial',
    fontFamily: "'Cinzel', serif",
    fontWeight: '900',
    letterSpacing: '0.08em',
    duration: 350,
  },
  {
    id: 'font-6',
    text: 'itethik',
    fontName: 'Syne',
    styleLabel: 'Avant-Garde High Fashion',
    fontFamily: "'Syne', sans-serif",
    fontWeight: '800',
    letterSpacing: '-0.02em',
    duration: 350,
  },
  {
    id: 'font-7',
    text: 'itethik',
    fontName: 'Righteous',
    styleLabel: 'Retro Synthwave Geometric',
    fontFamily: "'Righteous', cursive",
    fontWeight: '400',
    letterSpacing: '0.02em',
    duration: 350,
  },
];

export function AboutSection({
  titlePrefix = 'WHAT IS',
  description = 'More than a name — itethik represents our commitment to ethical innovation, precision engineering, and transparent IT solutions. Built on uncompromising quality, genuine OEM components, and complete customer trust.',
  buttonLink = '/services/computer-services',
  onButtonClick,
  className = '',
}) {
  const [fontIndex, setFontIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const timerRef = useRef(null);

  // 1. Intersection Observer logic: trigger cycling only when visible in viewport
  useEffect(() => {
    const targetElement = sectionRef.current;
    if (!targetElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(targetElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  // 2. Continuous font cycling timer triggered by viewport visibility
  useEffect(() => {
    if (!isInView) {
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }

    const currentFont = GOOGLE_FONTS[fontIndex];
    const duration = currentFont.duration || 350;

    timerRef.current = setTimeout(() => {
      setFontIndex((prevIndex) => (prevIndex + 1) % GOOGLE_FONTS.length);
    }, duration);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isInView, fontIndex]);

  const activeFont = GOOGLE_FONTS[fontIndex];

  return (
    <section
      id="about-itethik-section"
      ref={sectionRef}
      className={`my-10 sm:my-16 px-4 sm:px-6 max-w-4xl mx-auto relative z-10 ${className}`}
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[280px] bg-white/[0.04] rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Main White Box Container with Black Text (Compact Sleek Profile) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="w-full rounded-2xl sm:rounded-3xl bg-white text-black border border-slate-200 p-5 sm:p-7 md:p-9 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
      >
        <div className="w-full flex flex-col items-center text-center space-y-4 sm:space-y-5">
          {/* Subtle Tag */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-[11px] font-mono uppercase tracking-widest">
            <Sparkles size={12} className="text-black" />
            <span>Brand Identity & Philosophy</span>
          </div>

          {/* Hero Header: Fixed "WHAT IS" + Animated "itethik" in 7 Google Fonts + Fixed "?" */}
          <div className="w-full max-w-3xl mx-auto">
            <h2 className="tracking-tight text-black flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-3.5 leading-none">
              {/* Fixed "WHAT IS" */}
              <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black uppercase select-none tracking-tight font-sans">
                {titlePrefix}
              </span>

              {/* Animated "itethik" Word cycling through 7 Google Fonts */}
              <span className="inline-flex items-center min-w-[130px] sm:min-w-[200px] md:min-w-[260px] justify-start text-left relative overflow-visible py-0.5">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeFont.id}
                    initial={{
                      opacity: 0,
                      y: 3,
                      scale: 0.97,
                      filter: 'blur(3px)',
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      filter: 'blur(0px)',
                    }}
                    exit={{
                      opacity: 0,
                      y: -3,
                      scale: 1.02,
                      filter: 'blur(3px)',
                    }}
                    transition={{
                      duration: 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                      fontFamily: activeFont.fontFamily,
                      fontWeight: activeFont.fontWeight || '800',
                      fontStyle: activeFont.fontStyle || 'normal',
                      letterSpacing: activeFont.letterSpacing || 'normal',
                    }}
                    className="inline-block select-none text-lg sm:text-2xl md:text-3xl lg:text-4xl text-black leading-none"
                  >
                    {activeFont.text}
                  </motion.span>
                </AnimatePresence>

                {/* Fixed Question Mark "?" */}
                <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black ml-1 sm:ml-1.5 select-none leading-none font-sans">
                  ?
                </span>
              </span>
            </h2>
          </div>

          {/* Description Paragraph */}
          <div className="max-w-xl mx-auto pt-1">
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              {description}
            </p>
          </div>

          {/* Arrow-Only Button Anchored at Bottom Right */}
          <div className="w-full flex justify-end items-center pt-2 sm:pt-4">
            {buttonLink && !onButtonClick ? (
              <Link
                to={buttonLink}
                id="about-section-cta-btn"
                aria-label="Discover our services"
                className="group w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black text-white hover:bg-slate-800 flex items-center justify-center transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_22px_rgba(0,0,0,0.35)] hover:scale-105 cursor-pointer"
              >
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            ) : (
              <button
                onClick={onButtonClick}
                id="about-section-cta-btn"
                aria-label="Discover our services"
                className="group w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black text-white hover:bg-slate-800 flex items-center justify-center transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_22px_rgba(0,0,0,0.35)] hover:scale-105 cursor-pointer"
              >
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
