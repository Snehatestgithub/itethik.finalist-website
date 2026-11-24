import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import FaqSection from '../components/FaqSection';
import CctvMaintenanceRadar from '../components/CctvMaintenanceRadar';
import securityCameraPair from '../assets/images/security-surveillance-camera-pair.png';
import securityCeilingCamera from '../assets/images/security-surveillance-ceiling-camera.png';

export default function CctvMaintenance() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] pb-12 pt-0 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-48 top-40 h-[28rem] w-[28rem] rounded-full bg-red-950/20 blur-[120px]" />
        <div className="absolute -right-56 top-[45rem] h-[32rem] w-[32rem] rounded-full bg-rose-950/15 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Full-bleed hero begins at the top of the page; the fixed navbar overlays it. */}
        <section className="relative left-1/2 isolate min-h-[500px] w-screen -translate-x-1/2 overflow-hidden bg-[linear-gradient(112deg,#31070c_0%,#64101c_49%,#8f1729_100%)] sm:min-h-[520px]">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-[center_44%] opacity-90 [mask-image:linear-gradient(90deg,#000_0%,#000_28%,transparent_73%)] [-webkit-mask-image:linear-gradient(90deg,#000_0%,#000_28%,transparent_73%)]"
              style={{ backgroundImage: `url("${securityCeilingCamera}")` }}
            />
            <div
              className="absolute inset-0 bg-cover bg-[center_44%] opacity-90 [mask-image:linear-gradient(90deg,transparent_27%,#000_72%,#000_100%)] [-webkit-mask-image:linear-gradient(90deg,transparent_27%,#000_72%,#000_100%)]"
              style={{ backgroundImage: `url("${securityCameraPair}")` }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(48,8,20,0.72)_0%,rgba(72,10,27,0.56)_43%,rgba(111,16,39,0.4)_100%),linear-gradient(0deg,rgba(48,7,18,0.3),rgba(75,10,25,0.12)),radial-gradient(ellipse_at_78%_40%,rgba(190,24,62,0.24),transparent_48%)]" />
          </div>

          <div className="relative mx-auto grid min-h-[500px] w-full max-w-7xl items-center px-4 py-16 sm:min-h-[520px] sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-10 lg:py-14">
            <Link
              to="/services/maintenance-services"
              className="absolute left-4 top-16 z-20 inline-flex items-center gap-1 rounded-md border border-rose-200/25 bg-[#31070c]/30 px-2.5 py-1.5 text-[11px] font-medium text-rose-50/90 backdrop-blur-sm transition hover:border-rose-200/50 hover:bg-[#31070c]/50 hover:text-white sm:left-6 sm:top-16 lg:left-10"
            >
              <ArrowLeft size={13} /> Back to Maintenance Services
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="relative z-10 mx-auto max-w-xl text-center lg:col-span-2 lg:max-w-[34rem]"
            >
              <h1 className="max-w-xl font-sans text-4xl font-semibold leading-[1.04] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                <span className="block">Is Your CCTV System</span>
                <span><span className="font-serif font-bold italic tracking-[-0.02em] text-rose-200">Working</span> Properly?</span>
              </h1>
              <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-rose-50/85 sm:text-lg">
                Take a moment to check your security.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="absolute bottom-8 left-4 z-10 flex flex-wrap items-center gap-x-7 gap-y-4 pr-4 sm:left-6 lg:left-[5.5rem]"
            >
              <Link
                to="/consultation?service=cctv-maintenance"
                className="inline-flex items-center gap-3 rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-950/30 transition hover:bg-rose-400"
              >
                Request Maintenance
                <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15"><ArrowRight size={15} /></span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-b border-rose-100/40 py-2 text-sm font-semibold text-rose-50 transition hover:border-rose-100 hover:text-white"
              >
                Contact Our Team <ArrowRight size={15} />
              </Link>
            </motion.div>

          </div>
        </section>

        <CctvMaintenanceRadar />

        {/* Section 6: service-specific FAQs */}
        <section aria-label="CCTV maintenance FAQs" className="border-t border-white/10 pt-6">
          <FaqSection category="cctv-maintenance" theme="rose" compact className="!px-0 !pb-0" />
        </section>

      </div>
    </main>
  );
}
