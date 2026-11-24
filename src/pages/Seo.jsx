import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Search,
  MapPin,
  TrendingUp,
  BarChart2,
  ArrowRight,
  Sparkles,
  Target,
  Globe,
} from 'lucide-react';
import ChatAssistant from '../components/ChatAssistant';
import FaqSection from '../components/FaqSection';
import CanvasParticleField from '../components/CanvasParticleField';

const Seo = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Google My Business (GMB) Setup & Optimization',
      desc: 'Claim, verify, and fully optimize your local business listing on Google Maps to attract local customers nearby.',
    },
    {
      icon: Target,
      title: 'Local SEO Strategy',
      desc: 'Target geo-specific keywords and citations so your business ranks at the top of local search results.',
    },
    {
      icon: Search,
      title: 'In-Depth Keyword Research',
      desc: 'Identify high-converting search terms and buyer intent keywords relevant to your industry.',
    },
    {
      icon: TrendingUp,
      title: 'On-Page & Technical SEO',
      desc: 'Optimize meta titles, descriptions, headers, page speed, structured schema, and site architecture.',
    },
    {
      icon: BarChart2,
      title: 'Analytics & Monthly Performance Reports',
      desc: 'Transparent tracking of keyword rankings, website traffic, click-through rates, and customer conversions.',
    },
    {
      icon: Globe,
      title: 'Organic Search Growth',
      desc: 'Sustainable strategies to build high-quality backlinks, improve domain authority, and beat your competition.',
    },
  ];

  const processSteps = [
    { step: '01', title: 'SEO Audit & Competitor Analysis', desc: 'Evaluating your current digital footprint and analyzing top competitors.' },
    { step: '02', title: 'Keyword & Content Mapping', desc: 'Finding high-traffic search terms and planning target page optimizations.' },
    { step: '03', title: 'On-Page & GMB Optimization', desc: 'Enhancing Google My Business profile, site speed, tags, and local citations.' },
    { step: '04', title: 'Continuous Growth & Reporting', desc: 'Regular monitoring, link building, ranking updates, and transparent reporting.' },
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
          className="absolute top-[-10%] right-[-5%] w-[45vw] h-[45vw] rounded-full bg-cyan-600/15 blur-[140px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[30%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-orange-600/15 blur-[130px]"
        />
        <CanvasParticleField variant="cyan" mode="mixed" density={40} speed={0.35} />
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
            SEO & <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-cyan-400 text-transparent bg-clip-text">Google My Business</span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Boost your local and global online visibility. Rank #1 on Google Maps, generate high-quality organic leads, and convert searches into loyal customers.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-2xl">
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                <MapPin size={18} />
              </div>
              <span className="text-white font-medium text-sm">Top Google Maps Ranking</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-2xl">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <TrendingUp size={18} />
              </div>
              <span className="text-white font-medium text-sm">Targeted Traffic Growth</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-2xl">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <BarChart2 size={18} />
              </div>
              <span className="text-white font-medium text-sm">Monthly Analytics Reports</span>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Comprehensive <span className="text-cyan-400">SEO Services</span>
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
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-5 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-colors duration-300">
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
            Our Proven <span className="text-cyan-400">SEO Strategy</span>
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
        <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-r from-orange-950/70 via-slate-900/90 to-cyan-950/70 border border-orange-500/30 shadow-2xl mb-20 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3">
              Want to rank #1 on Google for your business?
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Get a free SEO audit and consultation today. Let our experts optimize your search visibility and drive real customer leads.
            </p>
          </div>
          <Link
            to="/consultation?service=seo"
            className="relative z-10 px-8 py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 flex items-center gap-2 transition-all duration-200 shrink-0"
          >
            Request Free Consultation <ArrowRight size={18} />
          </Link>
        </div>

        {/* FAQ Section (Sub-Service Level) */}
        <FaqSection category="seo" />
        <ChatAssistant />
      </div>
    </div>
  );
};

export default Seo;
