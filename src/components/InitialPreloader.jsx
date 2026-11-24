import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * InitialPreloader
 * An ultra-sleek, atmospheric cyber loading screen for smooth initial website entrance.
 * Automatically completes and seamlessly dissolves to reveal the website.
 */
export default function InitialPreloader() {
  const [loading, setLoading] = useState(() => {
    if (typeof window === 'undefined') return true;
    return !sessionStorage.getItem('itethik_initial_loaded');
  });
  const [progress, setProgress] = useState(15);
  const [statusText, setStatusText] = useState('CALIBRATING NEURAL CORE');

  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const next = Math.min(100, prev + 15);
        
        if (next > 40 && next < 75) {
          setStatusText('SYNCING HIGH-SPEED SERVICES');
        } else if (next >= 75 && next < 99) {
          setStatusText('ESTABLISHING SECURE PROTOCOLS');
        } else if (next >= 100) {
          setStatusText('SYSTEM ONLINE');
        }
        return next;
      });
    }, 70);

    const timer = setTimeout(() => {
      setProgress(100);
      setStatusText('SYSTEM READY');
      sessionStorage.setItem('itethik_initial_loaded', 'true');
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }, 600);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="initial-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020617] text-white overflow-hidden pointer-events-auto select-none"
        >
          {/* Subtle Cyber Grid in Loader Backdrop */}
          <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />

          {/* Atmospheric Glow */}
          <div className="absolute w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute w-[350px] h-[350px] bg-purple-600/12 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-xs w-full px-6 text-center">
            
            {/* Glowing Logo Icon / Emblem */}
            <div className="relative mb-8 flex items-center justify-center">
              {/* Spinning outer cyber ring */}
              <div className="w-20 h-20 rounded-full border-2 border-cyan-500/20 border-t-cyan-400 animate-spin" />
              <div className="absolute inset-2 rounded-full border border-purple-500/20 border-b-purple-400 animate-[spin_3s_linear_infinite_reverse]" />
              
              {/* Center Logo / Monogram */}
              <div className="absolute w-12 h-12 rounded-full bg-[#0a1128] border border-cyan-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <span className="font-sans font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300 text-sm tracking-wider">
                  ite
                </span>
              </div>
            </div>

            {/* Brand Title */}
            <h2 className="text-xl font-black tracking-widest text-white uppercase mb-1">
              ITETHIK
            </h2>
            <div className="text-[10px] font-mono tracking-widest text-cyan-400/80 uppercase mb-6 flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>{statusText}</span>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full bg-slate-900/80 border border-white/10 rounded-full h-1.5 overflow-hidden p-[1px] relative mb-3">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-500 rounded-full shadow-[0_0_12px_rgba(6,182,212,0.8)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.15 }}
              />
            </div>

            {/* Percentage & Telemetry */}
            <div className="w-full flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>LOADING</span>
              <span className="text-cyan-300 font-semibold">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
