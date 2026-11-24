import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Scale, 
  Wrench, 
  Video, 
  Code2, 
  CreditCard, 
  AlertTriangle, 
  Clock, 
  CheckCircle2, 
  Mail, 
  Printer, 
  ArrowRight,
  Search,
  Check,
  ChevronDown,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import companyData from '../shared/companyData';

const { contactInfo, locationInfo } = companyData;

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState('acceptance');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const sections = useMemo(() => [
    { id: 'acceptance', title: '1. Acceptance & Scope', icon: Scale },
    { id: 'services', title: '2. Technical Services & Scope', icon: Wrench },
    { id: 'repairs-data', title: '3. Repair Diagnostics & Data Safety', icon: AlertTriangle },
    { id: 'hardware-warranty', title: '4. Sourcing & Hardware Warranty', icon: ShieldCheck },
    { id: 'cctv-security', title: '5. CCTV & Security Installations', icon: Video },
    { id: 'web-digital', title: '6. Web Development & Intellectual Property', icon: Code2 },
    { id: 'pricing-payments', title: '7. Estimates, Invoicing & Billing', icon: CreditCard },
    { id: 'unclaimed-storage', title: '8. Unclaimed Devices & Storage Policy', icon: Clock },
    { id: 'liability', title: '9. Limitation of Liability & Disclaimers', icon: AlertTriangle },
    { id: 'cancellation', title: '10. Cancellation & Refund Terms', icon: CheckCircle2 },
    { id: 'jurisdiction', title: '11. Governing Law & Legal Jurisdiction', icon: Scale },
    { id: 'contact', title: '12. Grievance Redressal & Help Desk', icon: Mail },
  ], []);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Terms of Service | ITETHIK Technical Solutions';
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const faqs = [
    {
      q: "Do I need to take a backup before handing over my laptop or PC for repair?",
      a: "Yes. While our technicians exercise utmost care during chip-level motherboard testing and component replacement, clients must maintain backups of all personal files, operating systems, and critical data prior to submission."
    },
    {
      q: "What is the standard warranty period on chip-level repairs and new components?",
      a: "Chip-level solder jobs and replaced ICs carry a 30 to 90-day limited service warranty. All brand-new components (CPUs, SSDs, RAM, CCTV cameras) include their full 1 to 3-year official manufacturer warranty."
    },
    {
      q: "What happens if I cannot collect my repaired device within a month?",
      a: "Devices are stored safely for 30 days post repair-completion notice. Devices remaining unclaimed beyond 60 days without prior communication are subject to recycling or disposal to recover workshop staging costs."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-24 px-4 sm:px-6 md:px-10 relative z-20 bg-gradient-to-b from-[#1e3a8a] via-[#0b1b3a] to-[#020617] text-white selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Light-to-Dark Blue Ambient Glows */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-sky-400/20 via-blue-600/10 to-transparent pointer-events-none" />
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Breadcrumb Trail */}
        <div className="flex items-center gap-2 text-xs text-sky-200/80 mb-8 max-w-4xl mx-auto justify-center">
          <Link to="/" className="hover:text-cyan-300 transition">Home</Link>
          <ChevronRight size={12} />
          <span className="text-sky-300/60">Legal</span>
          <ChevronRight size={12} />
          <span className="text-cyan-300 font-semibold">Terms of Service</span>
        </div>

        {/* Header Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-400/15 border border-sky-400/30 text-sky-200 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-md">
            <Scale size={14} className="text-cyan-300" />
            <span>Official Service Agreement</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-cyan-300 to-indigo-200">Service</span>
          </h1>

          <p className="text-sky-100/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Transparent, professional guidelines governing technical repairs, CCTV security installations, custom computer builds, and software engineering services provided by ITETHIK.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-sky-200 font-medium">
            <span className="bg-[#0b1e42]/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-sky-400/20 shadow-sm text-sky-100">
              Effective: January 1, 2024
            </span>
            <span className="bg-[#0b1e42]/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-sky-400/20 shadow-sm text-sky-100">
              Last Revised: August 2026
            </span>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 bg-[#0e2a5c]/80 hover:bg-[#133575] px-3.5 py-1.5 rounded-xl border border-sky-400/30 text-sky-100 hover:text-white transition shadow-sm cursor-pointer"
            >
              <Printer size={13} />
              <span>Print Terms</span>
            </button>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 bg-[#0e2a5c]/80 hover:bg-[#133575] px-3.5 py-1.5 rounded-xl border border-sky-400/30 text-sky-100 hover:text-white transition shadow-sm cursor-pointer"
            >
              {copiedLink ? <Check size={13} className="text-emerald-400" /> : <ArrowRight size={13} />}
              <span>{copiedLink ? 'Link Copied' : 'Share Link'}</span>
            </button>
          </div>

          {/* Page switch tabs */}
          <div className="mt-8 flex justify-center">
            <div className="p-1 rounded-2xl bg-[#091b3b]/90 border border-sky-400/25 shadow-xl backdrop-blur-md inline-flex gap-1.5">
              <span className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-xs shadow-md">
                Terms of Service
              </span>
              <Link
                to="/privacy-policy"
                className="px-5 py-2.5 rounded-xl text-sky-200 hover:text-white hover:bg-sky-500/10 font-semibold text-xs transition"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Layout with Sidebar & Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Sticky Navigation Sidebar */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="sticky top-28 rounded-3xl bg-[#091b3b]/90 border border-sky-500/20 backdrop-blur-xl p-5 shadow-xl space-y-3">
              
              {/* Search within document */}
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-300/70" />
                <input
                  type="text"
                  placeholder="Filter terms topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 text-xs rounded-xl bg-[#061229]/80 border border-sky-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-sky-300/50"
                />
              </div>

              <h3 className="text-xs font-mono uppercase tracking-wider text-sky-300/80 px-2 pt-1 font-bold">
                Table of Contents
              </h3>

              <nav className="space-y-1 max-h-[calc(100vh-280px)] overflow-y-auto pr-1">
                {sections
                  .filter((sec) => sec.title.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((sec) => {
                    const Icon = sec.icon;
                    const isActive = activeSection === sec.id;
                    return (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        onClick={() => setActiveSection(sec.id)}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                          isActive 
                            ? 'bg-sky-500/25 text-cyan-200 border border-sky-400/50 shadow-sm' 
                            : 'text-sky-200/80 hover:text-white hover:bg-sky-500/10'
                        }`}
                      >
                        <Icon size={14} className={isActive ? 'text-cyan-300 shrink-0' : 'text-sky-400/70 shrink-0'} />
                        <span className="truncate">{sec.title}</span>
                      </a>
                    );
                  })}
              </nav>

              <div className="pt-3 border-t border-sky-500/20">
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-sky-950/70 to-blue-950/70 border border-sky-500/30 text-xs text-sky-100 space-y-1.5">
                  <p className="font-bold text-white flex items-center gap-1.5">
                    <Sparkles size={13} className="text-cyan-300" />
                    Need Service Clarification?
                  </p>
                  <p className="text-[11px] leading-relaxed text-sky-200/80">
                    Our technical support desk is available to answer any questions regarding terms or repair job statuses.
                  </p>
                  <a
                    href={contactInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200 pt-1 text-[11px] font-bold"
                  >
                    <span>Chat on WhatsApp</span>
                    <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Terms Content Body */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-8">
            
            {/* Section 1 */}
            <motion.section
              id="acceptance"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-[#091b3b]/85 border border-sky-500/20 shadow-xl backdrop-blur-xl scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-cyan-300 shrink-0 shadow-sm">
                  <Scale size={20} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">1. Acceptance of Terms & Scope of Agreement</h2>
                  <span className="text-xs text-cyan-300 font-medium">Legally Binding Operational Agreement</span>
                </div>
              </div>
              <div className="space-y-4 text-sky-100/90 text-sm leading-relaxed">
                <p>
                  Welcome to <strong className="text-white">ITETHIK</strong> ("we", "our", "us", or "Company"), located at <span className="font-medium text-cyan-300">Shop No-3, Hari Om Shagun, Plot No 8, Sector 20, Ulwe, Navi Mumbai 410206, Maharashtra, India</span>. By engaging our technical repair center, placing an on-site installation order, browsing our website, or accepting a diagnostic estimate, you ("Customer", "Client", or "User") agree to be bound legally by these Terms of Service.
                </p>
                <p>
                  If you are acting on behalf of a registered enterprise, commercial firm, educational institution, or residential society, you represent that you hold proper authorization to bind that entity to this agreement.
                </p>
              </div>
            </motion.section>

            {/* Section 2 */}
            <motion.section
              id="services"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-[#091b3b]/85 border border-sky-500/20 shadow-xl backdrop-blur-xl scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-sky-300 shrink-0 shadow-sm">
                  <Wrench size={20} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">2. Technical Services Portfolio & Engagements</h2>
                  <span className="text-xs text-sky-300 font-medium">Comprehensive IT Solutions</span>
                </div>
              </div>
              <div className="space-y-4 text-sky-100/90 text-sm leading-relaxed">
                <p>ITETHIK provides expert technology services including but not limited to:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-sky-100">
                  <li className="p-2.5 rounded-xl bg-sky-950/50 border border-sky-500/20 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-cyan-300 shrink-0" />
                    <span>Laptop, Desktop & Motherboard Chip-Level Repair</span>
                  </li>
                  <li className="p-2.5 rounded-xl bg-sky-950/50 border border-sky-500/20 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-cyan-300 shrink-0" />
                    <span>CCTV Security Camera & Video Intercom Setup</span>
                  </li>
                  <li className="p-2.5 rounded-xl bg-sky-950/50 border border-sky-500/20 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-cyan-300 shrink-0" />
                    <span>Custom High-Performance PC Building & Testing</span>
                  </li>
                  <li className="p-2.5 rounded-xl bg-sky-950/50 border border-sky-500/20 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-cyan-300 shrink-0" />
                    <span>Web Engineering, SEO & NFC Digital Cards</span>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Section 3 */}
            <motion.section
              id="repairs-data"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-[#091b3b]/85 border border-sky-500/20 shadow-xl backdrop-blur-xl scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0 shadow-sm">
                  <AlertTriangle size={20} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">3. Chip-Level Repairs, Diagnostics & Data Protection</h2>
                  <span className="text-xs text-amber-300 font-medium">Customer Data Safeguards</span>
                </div>
              </div>
              <div className="space-y-4 text-sky-100/90 text-sm leading-relaxed">
                <p>
                  Prior to handing over any desktop, laptop, storage drive, or server for repair diagnostics, <strong className="text-white">the customer is strictly responsible for backing up all confidential data and files</strong>.
                </p>
                <div className="p-4 rounded-2xl bg-amber-500/15 border border-amber-400/30 text-xs text-amber-100 space-y-1">
                  <p className="font-bold text-amber-200">Zero-Browsing Commitment:</p>
                  <p>Our engineers strictly honor client privacy. We never inspect, browse, copy, or distribute personal user files, photos, or documents during motherboard testing.</p>
                </div>
              </div>
            </motion.section>

            {/* Section 4 */}
            <motion.section
              id="hardware-warranty"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-[#091b3b]/85 border border-sky-500/20 shadow-xl backdrop-blur-xl scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shrink-0 shadow-sm">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">4. Genuine Hardware Sourcing & Warranty Terms</h2>
                  <span className="text-xs text-emerald-300 font-medium">100% Genuine Components</span>
                </div>
              </div>
              <div className="space-y-4 text-sky-100/90 text-sm leading-relaxed">
                <p>
                  All replacement components, brand-new CPUs, SSDs, RAM modules, GPUs, power supplies, and CCTV hardware are 100% genuine and sourced through authorized national distributor channels.
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-sky-100">
                  <li><strong>Service Warranty:</strong> Chip-level micro-soldering repairs carry a 30 to 90-day limited service warranty.</li>
                  <li><strong>OEM Component Warranty:</strong> Brand new parts carry full manufacturer warranties (1 to 3+ years) backed by GST serial invoices.</li>
                </ul>
              </div>
            </motion.section>

            {/* Section 5 */}
            <motion.section
              id="cctv-security"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-[#091b3b]/85 border border-sky-500/20 shadow-xl backdrop-blur-xl scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-cyan-300 shrink-0 shadow-sm">
                  <Video size={20} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">5. CCTV & Security System Installation Terms</h2>
                  <span className="text-xs text-cyan-300 font-medium">Site Surveys & Structured Cabling</span>
                </div>
              </div>
              <div className="space-y-4 text-sky-100/90 text-sm leading-relaxed">
                <p>
                  CCTV installations include precision angle mapping, structured CAT6/Coaxial concealment, NVR/DVR setup, and secure mobile streaming configuration.
                </p>
                <p className="text-xs text-sky-200/80">
                  Clients must ensure electrical power point availability and stable broadband access for remote smartphone live monitoring.
                </p>
              </div>
            </motion.section>

            {/* Section 6 */}
            <motion.section
              id="web-digital"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-[#091b3b]/85 border border-sky-500/20 shadow-xl backdrop-blur-xl scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 shrink-0 shadow-sm">
                  <Code2 size={20} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">6. Web Development & Intellectual Property</h2>
                  <span className="text-xs text-purple-300 font-medium">Digital Deliverables Ownership</span>
                </div>
              </div>
              <div className="space-y-4 text-sky-100/90 text-sm leading-relaxed">
                <p>
                  Upon final project sign-off and complete invoice settlement, full ownership rights of custom web application code, assets, and database designs transfer to the client.
                </p>
              </div>
            </motion.section>

            {/* Section 7 */}
            <motion.section
              id="pricing-payments"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-[#091b3b]/85 border border-sky-500/20 shadow-xl backdrop-blur-xl scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-indigo-300 shrink-0 shadow-sm">
                  <CreditCard size={20} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">7. Quotations, Invoicing & Payment Terms</h2>
                  <span className="text-xs text-indigo-300 font-medium">Transparent Pricing</span>
                </div>
              </div>
              <div className="space-y-4 text-sky-100/90 text-sm leading-relaxed">
                <p>
                  Written estimates are provided after thorough diagnostics. No repair work is executed without prior customer authorization of the quotation.
                </p>
                <p className="text-xs text-sky-200/80">
                  Payments are accepted via UPI, IMPS/NEFT Bank Transfer, Debit/Credit Cards, and official GST Invoices.
                </p>
              </div>
            </motion.section>

            {/* Section 8 */}
            <motion.section
              id="unclaimed-storage"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-[#091b3b]/85 border border-sky-500/20 shadow-xl backdrop-blur-xl scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-rose-500/20 border border-rose-400/40 flex items-center justify-center text-rose-300 shrink-0 shadow-sm">
                  <Clock size={20} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">8. Unclaimed Devices & Storage Policy</h2>
                  <span className="text-xs text-rose-300 font-medium">Workshop Storage Protocol</span>
                </div>
              </div>
              <div className="space-y-4 text-sky-100/90 text-sm leading-relaxed">
                <p>
                  Repaired or diagnosed devices are stored safely in our secure lab for up to 30 days after customer readiness notification. Devices unclaimed past 60 days without written notice may be recycled or disposed of to offset storage costs.
                </p>
              </div>
            </motion.section>

            {/* Section 9 */}
            <motion.section
              id="liability"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-[#091b3b]/85 border border-sky-500/20 shadow-xl backdrop-blur-xl scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-sky-700/50 border border-sky-400/40 flex items-center justify-center text-sky-200 shrink-0 shadow-sm">
                  <AlertTriangle size={20} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">9. Limitation of Liability</h2>
                  <span className="text-xs text-sky-300 font-medium">Standard Legal Disclaimers</span>
                </div>
              </div>
              <div className="space-y-4 text-sky-100/90 text-sm leading-relaxed">
                <p>
                  ITETHIK's total cumulative liability for any claim arising from our services is strictly limited to the actual service fee paid by the customer for that specific work order.
                </p>
              </div>
            </motion.section>

            {/* Section 10 */}
            <motion.section
              id="cancellation"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-[#091b3b]/85 border border-sky-500/20 shadow-xl backdrop-blur-xl scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300 shrink-0 shadow-sm">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">10. Cancellation & Refund Policy</h2>
                  <span className="text-xs text-teal-300 font-medium">Transparent Terms</span>
                </div>
              </div>
              <div className="space-y-4 text-sky-100/90 text-sm leading-relaxed">
                <ul className="list-disc pl-5 space-y-2 text-xs">
                  <li><strong>Repairs:</strong> If a customer cancels an approved job after specialized micro-ICs have already been ordered or desoldered, the direct component cost and bench labor incurred are non-refundable.</li>
                  <li><strong>Custom PCs & CCTV:</strong> Unboxed, custom-configured hardware cannot be returned except under official manufacturer Dead-on-Arrival (DOA) replacement terms.</li>
                  <li><strong>Software Services:</strong> Upfront discovery and completed design milestones are non-refundable.</li>
                </ul>
              </div>
            </motion.section>

            {/* Section 11 */}
            <motion.section
              id="jurisdiction"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-[#091b3b]/85 border border-sky-500/20 shadow-xl backdrop-blur-xl scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300 shrink-0 shadow-sm">
                  <Scale size={20} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">11. Governing Law & Jurisdiction</h2>
                  <span className="text-xs text-sky-300 font-medium">Applicable Indian Statutes</span>
                </div>
              </div>
              <div className="space-y-4 text-sky-100/90 text-sm leading-relaxed">
                <p>
                  These Terms of Service shall be governed by and construed in accordance with the substantive laws of the <strong className="text-white">Republic of India</strong> (Information Technology Act, 2000 &amp; Indian Contract Act, 1872).
                </p>
                <p>
                  Any legal dispute or proceeding arising out of our services shall fall exclusively within the jurisdiction of the competent courts in <strong className="text-cyan-300">Navi Mumbai / Thane / Mumbai, Maharashtra, India</strong>.
                </p>
              </div>
            </motion.section>

            {/* Section 12 */}
            <motion.section
              id="contact"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#091b3b] via-[#091b3b]/90 to-[#0c2b5e] border border-cyan-400/30 shadow-xl shadow-cyan-950/20 backdrop-blur-xl scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-cyan-400 text-slate-950 flex items-center justify-center shrink-0 shadow-md">
                  <Mail size={20} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">12. Grievance Redressal & Help Desk</h2>
                  <span className="text-xs text-cyan-300 font-medium">Direct Support & Legal Contact</span>
                </div>
              </div>
              <div className="space-y-4 text-sky-100/90 text-sm leading-relaxed">
                <p>
                  For any questions or clarification regarding these Terms of Service, please reach out to our dedicated desk:
                </p>
                <div className="p-5 rounded-2xl bg-[#061229]/80 border border-sky-500/25 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs shadow-sm">
                  <div>
                    <span className="text-sky-300/80 block mb-1">Company / Workshop:</span>
                    <strong className="text-white text-sm">ITETHIK (Smart IT Solutions)</strong>
                  </div>
                  <div>
                    <span className="text-sky-300/80 block mb-1">Official Email:</span>
                    <a href={contactInfo.emailHref} className="text-cyan-300 hover:text-cyan-200 font-bold text-sm underline">{contactInfo.email}</a>
                  </div>
                  <div>
                    <span className="text-sky-300/80 block mb-1">Phone / WhatsApp Support:</span>
                    <a href={contactInfo.phoneHref} className="text-white hover:text-cyan-300 font-bold">{contactInfo.phone}</a>
                  </div>
                  <div>
                    <span className="text-sky-300/80 block mb-1">Physical Service Lab:</span>
                    <span className="text-sky-100">{locationInfo.main.displayLine}</span>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Interactive Quick FAQ */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#091b3b]/85 border border-sky-500/20 shadow-xl backdrop-blur-xl">
              <h3 className="text-lg font-bold text-white mb-4">Frequently Asked Questions on Terms</h3>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-sky-500/20 rounded-2xl overflow-hidden bg-[#061229]/70">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-sky-100 hover:text-cyan-300 transition"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown size={16} className={`text-cyan-300 transition-transform ${expandedFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {expandedFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-4 pb-4 text-xs text-sky-200/80 leading-relaxed border-t border-sky-500/20 pt-3"
                        >
                          {faq.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
