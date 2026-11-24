import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Wrench,
  Sliders,
  MessageSquare,
  Truck,
  MonitorCheck,
} from 'lucide-react';
import ChatAssistant from '../components/ChatAssistant';
import FaqSection from '../components/FaqSection';
import GlowingLinePattern from '../components/GlowingLinePattern';
import DesktopTechParticles from '../components/DesktopTechParticles';
import CircuitBackground from '../components/CircuitBackground';

// Image Assets
import customPcHeroImg from '../assets/images/custom-pc-hero.jpeg';
import projectBuildImg from '../assets/images/project-notes-pc-build-1.png';

const CustomPcBuilding = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  const buildProcessSteps = [
    {
      num: '01',
      title: 'Consult',
      desc: 'Share your needs and budget.',
      icon: MessageSquare,
    },
    {
      num: '02',
      title: 'Customize',
      desc: 'We help you choose the perfect parts.',
      icon: Sliders,
    },
    {
      num: '03',
      title: 'Build',
      desc: 'Expert assembly with precision & care.',
      icon: Wrench,
    },
    {
      num: '04',
      title: 'Test',
      desc: 'Rigorous testing for stability & performance.',
      icon: MonitorCheck,
    },
    {
      num: '05',
      title: 'Deliver',
      desc: 'Safe delivery & post-install support.',
      icon: Truck,
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans relative overflow-x-hidden selection:bg-cyan-500 selection:text-slate-950">
      {/* FUTURISTIC CYAN/BLUE BACKGROUND EFFECT WITH DESKTOP TECH PARTICLES & MOTHERBOARD TRACES */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Base dark navy */}
        <div className="absolute inset-0 bg-[#020617]" />

        {/* Subtle Animated Circuit Pattern Background */}
        <CircuitBackground glowColor="cyan" intensity="subtle" />

        {/* Subtle Cyan & Blue Radial Glows */}
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-cyan-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-10 w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[150px]" />

        {/* Digital Grid & Tech Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#020617_90%)]" />

        {/* Desktop Hardware & Motherboard Particle Circuit System */}
        <DesktopTechParticles variant="cyan" density={42} showBadges={true} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-0 space-y-6 sm:space-y-8">
        {/* CUSTOM PC BUILD HERO */}
        <section
          className="relative isolate min-h-[420px] overflow-hidden bg-transparent py-8 sm:min-h-[460px] sm:py-10 lg:min-h-[430px] lg:py-12"
          style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)' }}
        >
          <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
            <img
              src={customPcHeroImg}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-transparent to-slate-950/20" />
          </div>
          <div className="relative z-10 flex min-h-[360px] items-center justify-center sm:min-h-[390px]">
            <div className="mx-auto max-w-2xl -translate-y-6 space-y-6 text-center sm:space-y-7">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="space-y-3"
              >
                <h1 className="text-4xl font-black leading-[0.98] tracking-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.7)] sm:text-5xl lg:text-6xl">
                  Custom PC
                  <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">Builds</span>
                </h1>
                <p className="mx-auto max-w-md text-sm leading-6 text-slate-200 drop-shadow-[0_1px_10px_rgba(0,0,0,0.8)] sm:text-base sm:leading-7">
                  Purpose-built performance for your work, play, and everything in between.
                </p>
              </motion.div>

              <button
                onClick={() => setShowQuoteModal(true)}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 px-6 py-3 text-sm font-extrabold text-slate-950 shadow-[0_8px_28px_rgba(34,211,238,0.2)] transition hover:-translate-y-0.5 hover:from-white hover:to-white"
              >
                Start your build
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </section>
        {/* BUILD PROCESS */}
        <div className="relative overflow-hidden rounded-3xl p-6 sm:p-8 border border-cyan-500/20 bg-slate-900/40 backdrop-blur-xl space-y-6 sm:space-y-8 shadow-[0_0_50px_rgba(6,182,212,0.12)]">
          <GlowingLinePattern color="cyan" />

          <div className="relative z-10 text-center space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
              OUR BUILD PROCESS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              From First Idea to <span className="text-cyan-400">Final Build</span>
            </h2>
          </div>

          <div className="relative pt-2 z-10">
            {/* Connecting Cyan Glowing Horizontal Line (Desktop) */}
            <div className="hidden lg:block absolute top-16 left-12 right-12 h-0.5 bg-gradient-to-r from-cyan-500/20 via-cyan-400 to-blue-500/20 shadow-[0_0_15px_#06b6d4] z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {buildProcessSteps.map((step, idx) => {
                const IconComp = step.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="p-6 rounded-3xl bg-slate-950/70 border border-cyan-500/20 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)] backdrop-blur-xl flex flex-col items-center text-center space-y-3 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-cyan-950/80 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] relative">
                      <IconComp size={24} />
                      <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-cyan-500 text-slate-950 text-[10px] font-mono font-black">
                        {step.num}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white uppercase tracking-wider">{step.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* REAL BUILD SPOTLIGHT */}
        <div className="pt-3 sm:pt-4">
        <section aria-labelledby="real-build-heading" className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-cyan-400/25 bg-gradient-to-br from-slate-900/90 via-slate-950 to-cyan-950/35 p-5 shadow-[0_22px_65px_rgba(0,0,0,0.35)] sm:p-7 lg:p-9">
          <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
              className="space-y-4 px-1 py-1 sm:space-y-5"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/[0.07] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-200">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />
                A real ItEthik build
              </div>

              <div className="space-y-3">
                <h2 id="real-build-heading" className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">Built for your next big idea.</span>
                </h2>
                <p className="max-w-lg text-xs leading-6 text-slate-300 sm:text-sm">
                  A real desktop from our project gallery, assembled with attention to every component, detail, and connection.
                </p>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs">
                {[
                  ['01', 'Careful assembly'],
                  ['02', 'Clean component fit'],
                  ['03', 'Tested before handoff'],
                ].map(([number, label]) => (
                  <div key={number} className="flex items-center gap-2 py-1">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400">{number}</span>
                    <span className="font-semibold text-slate-200">{label}</span>
                  </div>
                ))}
              </div>

            </motion.div>

            <motion.figure
              initial={{ opacity: 0, y: 18, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="relative mx-auto w-full max-w-[420px] justify-self-center overflow-hidden lg:justify-self-end"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={projectBuildImg}
                  alt="Real ItEthik desktop PC build with RGB fans and a GeForce RTX graphics card"
                  className="h-full w-full object-cover object-[center_56%] transition-transform duration-700 hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />
              </div>
            </motion.figure>
          </div>
        </section>
        </div>
        {/* FAQ SECTION (Sub-Service Level) */}
        <FaqSection
          category="custom-pc-building"
          badge=""
          subtitle=""
          footerTitle="Need any help with your build?"
          footerDescription="Our team can help you choose the right setup for your needs."
          footerClassName="mt-8 w-full p-6 sm:p-8"
          className="!pb-1"
          initiallyCollapsed
          compact
          wide
          hideFooterIcon
          footerTitleClassName="text-lg sm:text-xl font-black tracking-tight"
        />
      </div>

      {/* CHAT ASSISTANT FLOATING BUTTON */}
      <ChatAssistant />

      {/* CONSULTATION MODAL */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-lg rounded-3xl bg-slate-900 border border-cyan-500/40 p-6 sm:p-8 space-y-6 shadow-[0_0_50px_rgba(6,182,212,0.4)] relative"
          >
            <button
              onClick={() => {
                setShowQuoteModal(false);
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg font-bold w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center"
            >
              ✕
            </button>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase">ITHETHIK CUSTOM RIG ARCHITECT</span>
              <h3 className="text-2xl font-bold text-white">
                Start Custom PC Build
              </h3>
              <p className="text-xs text-slate-300">
                Describe your target workloads, preferred games, or custom aesthetic preferences.
              </p>
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Custom proposal submitted! An engineer will reach out on WhatsApp/Call.'); setShowQuoteModal(false); }}>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Your Full Name</label>
                <input required type="text" placeholder="Jane Doe" className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Phone Number / WhatsApp</label>
                <input required type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Target Application / Workload</label>
                <input type="text" placeholder="e.g., Cyberpunk 4K, 3D Blender, AI Llama-3 training" className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none" />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all"
              >
                Send Requirements
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CustomPcBuilding;
