import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  QrCode,
  Share2,
  Smartphone,
  ArrowRight,
  Sparkles,
  Zap,
  CreditCard,
  UserCheck,
} from 'lucide-react';
import ChatAssistant from '../components/ChatAssistant';
import FaqSection from '../components/FaqSection';
import CanvasParticleField from '../components/CanvasParticleField';

const DigitalCards = () => {
  const features = [
    {
      icon: QrCode,
      title: 'Dynamic QR Code & NFC Integration',
      desc: 'Instant contact sharing with a single tap or scan. Compatible with iPhone & Android without requiring any app download.',
    },
    {
      icon: UserCheck,
      title: 'One-Click "Add to Contacts"',
      desc: 'Allow clients to instantly save your phone number, email, address, and social links directly into their phone contacts.',
    },
    {
      icon: Share2,
      title: 'Unlimited Digital Sharing',
      desc: 'Share your card infinitely via WhatsApp, SMS, Email, NFC, or QR code. Never run out of physical business cards again.',
    },
    {
      icon: CreditCard,
      title: 'Custom Branded Design',
      desc: 'Personalized to match your company branding, logo, colors, and design aesthetic for a sleek professional impression.',
    },
    {
      icon: Smartphone,
      title: 'Interactive Buttons & Media',
      desc: 'Embed direct call buttons, WhatsApp link, Google Maps navigation, social profiles, and company product showcases.',
    },
    {
      icon: Zap,
      title: 'Instant Edits & Real-Time Updates',
      desc: 'Update your contact details or address anytime without reprinting physical cards — eco-friendly and cost-effective.',
    },
  ];

  const processSteps = [
    { step: '01', title: 'Submit Details & Logo', desc: 'Provide your profile photo, business details, social links, and brand colors.' },
    { step: '02', title: 'Custom Card Design', desc: 'Our team crafts a sleek, high-converting interactive digital business card.' },
    { step: '03', title: 'Review & NFC Setup', desc: 'Test live interactions, dynamic QR links, and optional custom physical NFC card.' },
    { step: '04', title: 'Go Live & Network', desc: 'Start tapping, scanning, and growing your business network effortlessly.' },
  ];

  return (
    <div className="min-h-screen bg-[#020617] pt-2 sm:pt-4 pb-20 px-6 md:px-10 relative overflow-hidden">
      {/* Abstract Glowing Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#020617]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-10%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-purple-600/15 blur-[140px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[30%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-pink-600/15 blur-[130px]"
        />
        <CanvasParticleField variant="purple" mode="mixed" density={40} speed={0.35} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md text-xs font-bold tracking-wider text-cyan-300 uppercase">
              <Sparkles size={14} className="text-cyan-400" />
              Digital Solutions
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Digital <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text">Business Cards</span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Elevate your networking experience with interactive, eco-friendly digital business cards. Share your contact info, social media, and portfolio instantly via NFC or QR code.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-2xl">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <QrCode size={18} />
              </div>
              <span className="text-white font-medium text-sm">Instant NFC & QR Sharing</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-2xl">
              <div className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
                <Share2 size={18} />
              </div>
              <span className="text-white font-medium text-sm">Eco-Friendly & Unlimited</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-2xl">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Zap size={18} />
              </div>
              <span className="text-white font-medium text-sm">Real-Time Contact Save</span>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Why Choose Our <span className="text-cyan-400">Digital Cards</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="bg-slate-900/60 border border-white/10 p-6 rounded-2xl backdrop-blur-xl shadow-xl flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300 mb-5 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-colors duration-300">
                      <IconComp size={22} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Our Process Section */}
        <div className="mb-20 p-8 rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
            How It <span className="text-cyan-400">Works</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col">
                <span className="text-3xl font-black text-cyan-400/40 mb-3">{step.step}</span>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-r from-purple-950/80 via-slate-900/90 to-pink-950/80 border border-purple-500/30 shadow-2xl mb-20 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3">
              Upgrade your networking with Digital Cards!
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Starting at just ₹2,000. Get your custom branded digital card setup with dynamic QR code and NFC integration today.
            </p>
          </div>
          <Link
            to="/consultation?service=digital-cards"
            className="relative z-10 px-8 py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 flex items-center gap-2 transition-all duration-200 shrink-0"
          >
            Request Free Consultation <ArrowRight size={18} />
          </Link>
        </div>

        {/* FAQ Section (Sub-Service Level) */}
        <FaqSection category="digital-cards" />
        <ChatAssistant />
      </div>
    </div>
  );
};

export default DigitalCards;
