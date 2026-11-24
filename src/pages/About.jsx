import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import companyData from '../shared/companyData';
import WhatIsIthethik from '../components/WhatIsIthethik';
import HowWeWork from '../components/HowWeWork';
import TechnologyEcosystem from '../components/TechnologyEcosystem';
import FaqSection from '../components/FaqSection';
import ChatAssistant from '../components/ChatAssistant';

const { contactInfo } = companyData;

const heroPhotos = [
  { src: '/images/about-hero/about-hero-service-1.png', width: 1376, height: 768, alt: 'Desktop service and IT solutions' },
  { src: '/images/about-hero/about-hero-web-development.png', width: 1376, height: 768, alt: 'Web development services and digital presence' },
  { src: '/images/about-hero/about-hero-service-3.png', width: 1375, height: 768, alt: 'CCTV installation and security' },
  { src: '/images/about-hero/about-hero-service-4.png', width: 1376, height: 768, alt: 'Laptop repair and services' },
];

export default function About() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const activePhoto = heroPhotos[activePhotoIndex];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActivePhotoIndex((currentIndex) => (currentIndex + 1) % heroPhotos.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#070e24] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-10 left-1/4 w-[700px] h-[700px] bg-cyan-600/8 rounded-full blur-[160px]" />
        <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-fuchsia-600/8 rounded-full blur-[160px]" />
      </div>

      <section className="relative isolate w-full overflow-hidden bg-[#071226]">
        <div
          className="relative w-full overflow-hidden bg-[#071226]"
          style={{ aspectRatio: `${activePhoto.width} / ${activePhoto.height}` }}
        >
          <motion.img
            key={activePhoto.src}
            src={activePhoto.src}
            alt={activePhoto.alt}
            width={activePhoto.width}
            height={activePhoto.height}
            fetchPriority={activePhotoIndex === 0 ? 'high' : 'auto'}
            draggable="false"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="absolute inset-0 block h-full w-full object-contain object-center"
          />
        </div>

        <div className="mx-auto flex max-w-7xl items-center px-6 py-6 sm:px-10 md:px-14">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-200 px-6 py-3.5 text-xs font-black uppercase tracking-wider text-[#071226] transition-colors hover:bg-white sm:text-sm"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={16} />
            </Link>
            <a
              href={contactInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10 sm:text-sm"
            >
              <span>Chat with our team</span>
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        {/* =========================================================================
            WHAT IS ITHETHIK INTERACTIVE SECTION (14 Fonts Morphing + 3-Service Showcase)
            Unified sleek box with arrow toggles
            ========================================================================= */}
        <WhatIsIthethik />

        <HowWeWork />

        <TechnologyEcosystem />

        {/* FAQ SECTION */}
        <FaqSection category="about" />

        {/* FLOATING CHAT ASSISTANT */}
        <ChatAssistant />
      </div>
    </div>
  );
}
