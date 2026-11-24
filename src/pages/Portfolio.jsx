import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import AetherFlowHero from '../components/ui/AetherFlowHero';
import PortfolioSections from '../components/PortfolioSections';
import FaqSection from '../components/FaqSection';
import ChatAssistant from '../components/ChatAssistant';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-transparent overflow-hidden text-slate-100 selection:bg-cyan-500/30">
            {/* ===== HERO SECTION (Preserved Exactly as Requested) ===== */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <AetherFlowHero>
          <div className="flex flex-col items-center justify-center min-h-[50vh] px-6 md:px-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 text-center max-w-4xl mx-auto py-12 md:py-16"
            >
              <div className="flex justify-center mb-6">
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.1)] text-xs font-bold tracking-wider text-cyan-300 uppercase">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></div>
                  Case Studies & Proof of Work
                </div>
              </div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter"
              >
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]">Portfolio</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                Explore our recent IT projects and solutions delivered for satisfied clients across multiple industries. From hardware restoration to cloud-scale web apps.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex gap-6 justify-center flex-wrap"
              >
                <a 
                  href="#story-odyssey" 
                  className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-10 py-4 rounded-2xl font-bold hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all transform hover:scale-105 active:scale-95 shadow-lg flex items-center gap-2"
                >
                  <BookOpen size={18} />
                  <span>Begin The Story</span>
                </a>
                <Link 
                  to="/contact" 
                  className="border border-white/10 px-10 py-4 rounded-2xl font-bold text-white hover:bg-white/5 transition-all backdrop-blur-sm"
                >
                  Start a Project
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </AetherFlowHero>
      </section>


      <PortfolioSections />
      <div className="bg-[#020617]">
        <FaqSection category="portfolio" />
      </div>
      <ChatAssistant />
    </div>
  );
}
