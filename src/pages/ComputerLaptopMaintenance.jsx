import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Laptop,
  CheckCircle2,
  ShieldCheck,
  Zap,
  HardDrive,
  Activity,
  Wrench,
  RotateCcw,
  Clock,
  ArrowRight,
  ArrowLeft,
  Headphones,
  Settings,
} from 'lucide-react';
import ChatAssistant from '../components/ChatAssistant';
import FaqSection from '../components/FaqSection';
import CanvasParticleField from '../components/CanvasParticleField';

const ComputerLaptopMaintenance = () => {
  const features = [
    {
      icon: Clock,
      title: 'Annual Maintenance Contracts (AMC)',
      desc: 'Flexible quarterly and annual preventive care plans for corporate offices, educational institutions, and residential desktop/laptop fleets.',
    },
    {
      icon: Zap,
      title: 'Thermal Paste & Dust Cleaning',
      desc: 'Deep thermal heatsink dust extraction, fan lubrication, and premium thermal compound re-application to prevent CPU throttling.',
    },
    {
      icon: HardDrive,
      title: 'HDD & SSD Health Audits',
      desc: 'Comprehensive SMART disk diagnostics, bad-sector detection, TRIM optimization, and pre-failure data backup strategies.',
    },
    {
      icon: ShieldCheck,
      title: 'Virus, Malware & Ransomware Cleanup',
      desc: 'Deep system malware removal, security patch deployment, firewall configuration, and real-time endpoint protection setup.',
    },
    {
      icon: Activity,
      title: 'OS Optimization & Registry Cleanup',
      desc: 'Startup app trimming, registry de-cluttering, temp file purging, and driver updates for 2x faster system response time.',
    },
    {
      icon: Wrench,
      title: 'Component Upgrades & Expansion',
      desc: 'On-site RAM expansion, NVMe SSD speed upgrades, power supply upgrades, and laptop battery/display replacements.',
    },
    {
      icon: RotateCcw,
      title: 'Data Recovery & Scheduled Backups',
      desc: 'Automated local and cloud backup routines ensuring absolute zero data loss during unexpected system failures.',
    },
    {
      icon: Headphones,
      title: 'Rapid On-Site & Remote Desk Support',
      desc: 'Priority technician response within 2 hours in Navi Mumbai and Mumbai region alongside instant AnyDesk/TeamViewer remote aid.',
    },
  ];

  const processSteps = [
    { step: '01', title: 'System Health Diagnostics', desc: 'Running hardware stress tests, temperature audits, and malware scans.' },
    { step: '02', title: 'Preventive Cleaning & Servicing', desc: 'Deep dust extraction, thermal paste replacement, and port contact cleaning.' },
    { step: '03', title: 'Software & Security Tuning', desc: 'Updating OS, drivers, security patches, and purging unwanted background tasks.' },
    { step: '04', title: 'Performance Certification', desc: 'Final benchmark validation, backup verification, and AMC health report delivery.' },
  ];

  return (
    <div className="min-h-screen bg-[#020617] pt-2 sm:pt-4 pb-20 px-6 md:px-10 relative overflow-hidden">
      {/* Background Design */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#020617]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Glowing Orbs */}
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-10%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-purple-600/20 blur-[140px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[30%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-600/20 blur-[130px]"
        />
        <CanvasParticleField variant="purple" mode="mixed" density={40} speed={0.35} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/services/maintenance-services"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors font-medium px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <ArrowLeft size={16} /> Back to Maintenance Services
          </Link>
        </motion.div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md text-xs font-bold tracking-wider text-purple-300 uppercase">
              <Laptop size={14} className="text-purple-400" />
              Preventive Care & AMC Solutions
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Computer & Laptop <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 text-transparent bg-clip-text">Maintenance</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Maximize uptime, prevent hardware crashes, and boost system speed with structured AMC plans, deep thermal maintenance, malware protection, and automated backups.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 border border-white/10 p-6 rounded-2xl hover:border-purple-500/40 transition-all hover:bg-slate-900/80 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4">{item.desc}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-purple-400/80">
                  <CheckCircle2 size={12} /> Maintenance Included
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Why Choose Section */}
        <div className="mb-20 bg-slate-900/40 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-md">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Why Trust ITHETHIK Computer Maintenance?</h2>
            <p className="text-gray-400 text-sm">
              Unplanned downtime costs money. Our proactive maintenance services keep your workstations and laptops operating at peak efficiency 365 days a year.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center">
              <div className="w-12 h-12 mx-auto rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                <Clock size={24} />
              </div>
              <h4 className="text-white font-bold mb-2">Guaranteed Response SLA</h4>
              <p className="text-gray-400 text-xs leading-relaxed">Dedicated technical staff with 2-hour emergency on-site response for contract clients.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center">
              <div className="w-12 h-12 mx-auto rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400 mb-4">
                <ShieldCheck size={24} />
              </div>
              <h4 className="text-white font-bold mb-2">Complete Data Safety</h4>
              <p className="text-gray-400 text-xs leading-relaxed">Strict data confidentiality agreements and automated encrypted backup routines.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center">
              <div className="w-12 h-12 mx-auto rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                <Settings size={24} />
              </div>
              <h4 className="text-white font-bold mb-2">Cost-Effective AMC Plans</h4>
              <p className="text-gray-400 text-xs leading-relaxed">Tailored corporate and residential maintenance contracts that extend device life cycles.</p>
            </div>
          </div>
        </div>

        {/* Workflow Steps Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Our Preventive Maintenance Workflow</h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              Systematic maintenance protocols designed to catch hardware flaws before failures occur.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((s, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-white/10 p-6 rounded-2xl relative">
                <span className="text-4xl font-extrabold text-purple-500/20 mb-2 block">{s.step}</span>
                <h4 className="text-base font-bold text-white mb-2">{s.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 border border-purple-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl mb-20">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
              Need Reliable AMC Support for Your PCs or Laptops?
            </h3>
            <p className="text-gray-300 text-sm max-w-xl">
              Get in touch with our IT maintenance team for a free site assessment and custom AMC proposal for home or business.
            </p>
          </div>
          <Link
            to="/consultation?service=computer-laptop-maintenance"
            className="px-8 py-4 rounded-xl bg-purple-500 hover:bg-purple-400 text-slate-950 font-extrabold text-sm flex items-center gap-2 transition-all shadow-lg shadow-purple-500/25 shrink-0"
          >
            Request Free Consultation <ArrowRight size={18} />
          </Link>
        </div>

        {/* FAQ Section (Sub-Service Level) */}
        <FaqSection category="computer-laptop-maintenance" />
        <ChatAssistant />
      </div>
    </div>
  );
};

export default ComputerLaptopMaintenance;
