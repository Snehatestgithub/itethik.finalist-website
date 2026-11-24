import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  HardDrive, 
  Video, 
  Cookie, 
  UserCheck, 
  FileCheck, 
  Globe, 
  Mail, 
  Printer, 
  ArrowRight,
  CheckCircle2,
  Search,
  Check,
  ChevronDown,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import companyData from '../shared/companyData';

const { contactInfo, locationInfo } = companyData;

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const sections = useMemo(() => [
    { id: 'overview', title: '1. Privacy Commitment & Scope', icon: Shield },
    { id: 'collection', title: '2. Information We Collect', icon: Eye },
    { id: 'hardware-data', title: '3. Customer Storage & Device Privacy', icon: HardDrive },
    { id: 'cctv-privacy', title: '4. CCTV Footage & Stream Privacy', icon: Video },
    { id: 'usage', title: '5. Purpose of Data Processing', icon: FileCheck },
    { id: 'disclosure', title: '6. Zero Sale & Third-Party Policy', icon: Lock },
    { id: 'security', title: '7. Technical Data Security', icon: Lock },
    { id: 'cookies', title: '8. Cookies & Web Tracking', icon: Cookie },
    { id: 'rights', title: '9. Your Rights Under DPDP Act', icon: UserCheck },
    { id: 'retention', title: '10. Data Retention & Deletion', icon: Globe },
    { id: 'contact', title: '11. Grievance Officer Contact', icon: Mail },
  ], []);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Privacy Policy | ITETHIK Technical Solutions';
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const privacyFaqs = [
    {
      q: "Do ITETHIK technicians look through my personal photos or documents during repair?",
      a: "No. ITETHIK strictly enforces an ethical Non-Browsing protocol. Diagnostics are performed using dedicated test drives or isolated diagnostic software without opening personal files."
    },
    {
      q: "Does ITETHIK have continuous access to my live CCTV camera streams after installation?",
      a: "No. All CCTV streams and recording storage remain strictly inside your on-premises NVR/DVR or personal client-owned accounts. Master administrative credentials are set directly by the customer."
    },
    {
      q: "Will my contact number or email be sold or spammed?",
      a: "Never. We hold a zero-sale policy. Your information is used strictly to communicate job quotes, repair updates, warranty claims, and official invoices."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-24 px-4 sm:px-6 md:px-10 relative z-20 bg-gradient-to-b from-[#1e3a8a] via-[#0b1b3a] to-[#020617] text-white selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Light-to-Dark Blue Ambient Glows */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-sky-400/20 via-blue-600/10 to-transparent pointer-events-none" />
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Breadcrumb Trail */}
        <div className="flex items-center gap-2 text-xs text-sky-200/80 mb-8 max-w-4xl mx-auto justify-center">
          <Link to="/" className="hover:text-cyan-300 transition">Home</Link>
          <ChevronRight size={12} />
          <span className="text-sky-300/60">Legal</span>
          <ChevronRight size={12} />
          <span className="text-cyan-300 font-semibold">Privacy Policy</span>
        </div>

        {/* Header Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-400/15 border border-sky-400/30 text-sky-200 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-md">
            <Shield size={14} className="text-cyan-300" />
            <span>Data Protection & Privacy Policy</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-teal-300 to-cyan-200">Policy</span>
          </h1>

          <p className="text-sky-100/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Your privacy and the security of your confidential technical data are our foremost priority. Read how ITETHIK safeguards your personal information and customer storage.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-sky-200 font-medium">
            <span className="bg-[#0b1e42]/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-sky-400/20 shadow-sm text-sky-100">
              DPDP Act, 2023 &amp; IT Act Compliant
            </span>
            <span className="bg-[#0b1e42]/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-sky-400/20 shadow-sm text-sky-100">
              Last Updated: August 2026
            </span>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 bg-[#0e2a5c]/80 hover:bg-[#133575] px-3.5 py-1.5 rounded-xl border border-sky-400/30 text-sky-100 hover:text-white transition shadow-sm cursor-pointer"
            >
              <Printer size={13} />
              <span>Print Policy</span>
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
              <Link
                to="/terms-of-service"
                className="px-5 py-2.5 rounded-xl text-sky-200 hover:text-white hover:bg-sky-500/10 font-semibold text-xs transition"
              >
                Terms of Service
              </Link>
              <span className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-sky-600 text-white font-bold text-xs shadow-md">
                Privacy Policy
              </span>
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
                  placeholder="Filter privacy topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 text-xs rounded-xl bg-[#061229]/80 border border-sky-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-sky-300/50"
                />
              </div>

              <h3 className="text-xs font-mono uppercase tracking-wider text-sky-300/80 px-2 pt-1 font-bold">
                Privacy Sections
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
                            ? 'bg-teal-500/25 text-cyan-200 border border-teal-400/50 shadow-sm' 
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
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-sky-950/70 to-teal-950/70 border border-sky-500/30 text-xs text-sky-100 space-y-1.5">
                  <p className="font-bold text-white flex items-center gap-1.5">
                    <Sparkles size={13} className="text-cyan-300" />
                    Ethical Tech Guarantee
                  </p>
                  <p className="text-[11px] leading-relaxed text-sky-200/80">
                    We guarantee zero unauthorized file inspection and strict non-disclosure for all customer hardware.
                  </p>
                  <a
                    href={contactInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200 pt-1 text-[11px] font-bold"
                  >
                    <span>Message Privacy Desk</span>
                    <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Content Body */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-8">
            
            {/* Section 1 */}
            <motion.section
              id="overview"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-[#091b3b]/85 border border-sky-500/20 shadow-xl backdrop-blur-xl scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-cyan-300 shrink-0 shadow-sm">
                  <Shield size={20} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">1. Privacy Commitment & Scope</h2>
                  <span className="text-xs text-cyan-300 font-medium">Compliance with Indian Privacy Laws</span>
                </div>
              </div>
              <div className="space-y-4 text-sky-100/90 text-sm leading-relaxed">
                <p>
                  This Privacy Policy describes how <strong className="text-white">ITETHIK</strong> ("we", "us", or "our"), operated from <span className="font-medium text-cyan-300">Shop No-3, Hari Om Shagun, Plot No 8, Sector 20, Ulwe, Navi Mumbai 410206, Maharashtra, India</span>, handles personal data across our chip-level repair lab, security camera installation operations, and digital engineering services.
                </p>
                <p>
                  We are committed to operating in full accordance with the <strong className="text-white">Digital Personal Data Protection (DPDP) Act, 2023</strong> and the <strong className="text-white">Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong> under the Indian Information Technology Act, 2000.
                </p>
              </div>
            </motion.section>

            {/* Section 2 */}
            <motion.section
              id="collection"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-[#091b3b]/85 border border-sky-500/20 shadow-xl backdrop-blur-xl scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-sky-300 shrink-0 shadow-sm">
                  <Eye size={20} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">2. Categories of Information We Collect</h2>
                  <span className="text-xs text-sky-300 font-medium">Service-Essential Details Only</span>
                </div>
              </div>
              <div className="space-y-4 text-sky-100/90 text-sm leading-relaxed">
                <p>We collect only the minimum information required to deliver high-quality technical assistance:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-2xl bg-sky-950/50 border border-sky-500/20 space-y-1">
                    <strong className="text-white">Contact & Billing Info:</strong>
                    <p className="text-sky-200/80">Name, phone number, email address, property/installation address, and GST billing credentials.</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-sky-950/50 border border-sky-500/20 space-y-1">
                    <strong className="text-white">Hardware Diagnostic Telemetry:</strong>
                    <p className="text-sky-200/80">Device make/model, serial numbers, BIOS versions, power rail measurements, and defect descriptions.</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-sky-950/50 border border-sky-500/20 space-y-1">
                    <strong className="text-white">CCTV Site Topologies:</strong>
                    <p className="text-sky-200/80">Camera mounting points, network router parameters, and IP address mappings for NVR/DVR setups.</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-sky-950/50 border border-sky-500/20 space-y-1">
                    <strong className="text-white">Digital Project Specifications:</strong>
                    <p className="text-sky-200/80">Branding assets, content copy, domain registrar accounts, and server deployment configurations.</p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Section 3 */}
            <motion.section
              id="hardware-data"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-[#091b3b]/85 border border-sky-500/20 shadow-xl backdrop-blur-xl scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shrink-0 shadow-sm">
                  <HardDrive size={20} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">3. Customer Storage & Device Privacy Protocol</h2>
                  <span className="text-xs text-emerald-300 font-medium">Ethical Non-Browsing Guarantee</span>
                </div>
              </div>
              <div className="space-y-4 text-sky-100/90 text-sm leading-relaxed">
                <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 text-xs text-emerald-100 space-y-1.5">
                  <p className="font-bold flex items-center gap-1.5 text-emerald-200">
                    <CheckCircle2 size={14} className="text-emerald-400" />
                    Zero-Access Privacy Standard:
                  </p>
                  <p>
                    During chip-level motherboard testing, power IC replacement, or thermal servicing, <strong className="text-white">our technicians strictly do not open, view, copy, or index client hard drives or user files</strong>.
                  </p>
                </div>
                <p className="text-xs text-sky-200/80">
                  Whenever possible, customers are encouraged to remove internal secondary storage drives or back up confidential data before service submission.
                </p>
              </div>
            </motion.section>

            {/* Section 4 */}
            <motion.section
              id="cctv-privacy"
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
                  <h2 className="text-xl sm:text-2xl font-bold text-white">4. CCTV Footage & Stream Privacy</h2>
                  <span className="text-xs text-cyan-300 font-medium">Customer-Controlled Infrastructure</span>
                </div>
              </div>
              <div className="space-y-4 text-sky-100/90 text-sm leading-relaxed">
                <ul className="list-disc pl-5 space-y-2 text-xs text-sky-100">
                  <li><strong>Local Storage Isolation:</strong> All recorded video streams reside exclusively on the customer's on-premises NVR/DVR hard drives or authorized cloud storage accounts.</li>
                  <li><strong>Master Credential Handover:</strong> Following commissioning, default administrative passwords are reset and handed over exclusively to the client. ITETHIK does not maintain backdoor access.</li>
                </ul>
              </div>
            </motion.section>

            {/* Section 5 */}
            <motion.section
              id="usage"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-[#091b3b]/85 border border-sky-500/20 shadow-xl backdrop-blur-xl scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-indigo-300 shrink-0 shadow-sm">
                  <FileCheck size={20} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">5. Lawful Purpose of Data Processing</h2>
                  <span className="text-xs text-indigo-300 font-medium">Service Delivery & Communications</span>
                </div>
              </div>
              <div className="space-y-4 text-sky-100/90 text-sm leading-relaxed">
                <p>Your information is processed strictly for:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-sky-100">
                  <li>Executing motherboard repairs, diagnostic checkups, and hardware installations.</li>
                  <li>Issuing itemized GST tax invoices, serial-number warranty receipts, and job trackers.</li>
                  <li>Communicating critical status updates via SMS, phone call, or official WhatsApp.</li>
                </ul>
              </div>
            </motion.section>

            {/* Section 6 */}
            <motion.section
              id="disclosure"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-[#091b3b]/85 border border-sky-500/20 shadow-xl backdrop-blur-xl scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-rose-500/20 border border-rose-400/40 flex items-center justify-center text-rose-300 shrink-0 shadow-sm">
                  <Lock size={20} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">6. Zero Sale & Third-Party Disclosure Policy</h2>
                  <span className="text-xs text-rose-300 font-medium">Absolute Non-Commercialization</span>
                </div>
              </div>
              <div className="space-y-4 text-sky-100/90 text-sm leading-relaxed">
                <p>
                  <strong className="text-white">We never sell, rent, lease, trade, or monetize client personal data to marketing brokers or third-party advertisers.</strong>
                </p>
                <p className="text-xs text-sky-200/80">
                  Data is only disclosed when mandated by applicable law, court orders, or law enforcement investigations under the Indian Information Technology Act, 2000.
                </p>
              </div>
            </motion.section>

            {/* Section 7 */}
            <motion.section
              id="security"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-[#091b3b]/85 border border-sky-500/20 shadow-xl backdrop-blur-xl scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-sky-300 shrink-0 shadow-sm">
                  <Lock size={20} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">7. Technical & Physical Data Security</h2>
                  <span className="text-xs text-sky-300 font-medium">Multi-Tier Safeguards</span>
                </div>
              </div>
              <div className="space-y-4 text-sky-100/90 text-sm leading-relaxed">
                <p>
                  We implement robust physical and electronic safeguards including SSL/TLS 256-bit web encryption, access-controlled workshop benches, and isolated diagnostic test benches.
                </p>
              </div>
            </motion.section>

            {/* Section 8 */}
            <motion.section
              id="cookies"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-[#091b3b]/85 border border-sky-500/20 shadow-xl backdrop-blur-xl scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0 shadow-sm">
                  <Cookie size={20} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">8. Cookies & Website Analytics</h2>
                  <span className="text-xs text-amber-300 font-medium">Minimal Tracking Policy</span>
                </div>
              </div>
              <div className="space-y-4 text-sky-100/90 text-sm leading-relaxed">
                <p>
                  Our website utilizes only essential technical session cookies and privacy-friendly performance telemetry to ensure fast page loads, responsive image delivery, and smooth contact form submissions.
                </p>
              </div>
            </motion.section>

            {/* Section 9 */}
            <motion.section
              id="rights"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-[#091b3b]/85 border border-sky-500/20 shadow-xl backdrop-blur-xl scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300 shrink-0 shadow-sm">
                  <UserCheck size={20} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">9. Your Privacy Rights Under the DPDP Act, 2023</h2>
                  <span className="text-xs text-teal-300 font-medium">Empowering Customer Control</span>
                </div>
              </div>
              <div className="space-y-4 text-sky-100/90 text-sm leading-relaxed">
                <p>As a data principal, you hold statutory rights to access, correct, update, or request erasure of your personal records from our system.</p>
              </div>
            </motion.section>

            {/* Section 10 */}
            <motion.section
              id="retention"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-[#091b3b]/85 border border-sky-500/20 shadow-xl backdrop-blur-xl scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-sky-300 shrink-0 shadow-sm">
                  <Globe size={20} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">10. Data Retention & Policy Amendments</h2>
                  <span className="text-xs text-sky-300 font-medium">Record Lifecycles</span>
                </div>
              </div>
              <div className="space-y-4 text-sky-100/90 text-sm leading-relaxed">
                <p>
                  Contact and invoice records are preserved as required to support warranty tracking, ongoing Annual Maintenance Contracts (AMCs), or statutory tax audits.
                </p>
                <p className="text-xs text-sky-200/80">
                  We may periodically update this Privacy Policy. Material modifications are reflected on this page with an updated timestamp.
                </p>
              </div>
            </motion.section>

            {/* Section 11 */}
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
                  <h2 className="text-xl sm:text-2xl font-bold text-white">11. Data Protection & Grievance Officer</h2>
                  <span className="text-xs text-cyan-300 font-medium">Direct Officer Communication</span>
                </div>
              </div>
              <div className="space-y-4 text-sky-100/90 text-sm leading-relaxed">
                <p>
                  For any privacy inquiries or to exercise your rights under the DPDP Act, 2023, please reach out to:
                </p>
                <div className="p-5 rounded-2xl bg-[#061229]/80 border border-sky-500/25 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs shadow-sm">
                  <div>
                    <span className="text-sky-300/80 block mb-1">Designation:</span>
                    <strong className="text-white text-sm">Grievance &amp; Privacy Officer</strong>
                  </div>
                  <div>
                    <span className="text-sky-300/80 block mb-1">Dedicated Email:</span>
                    <a href={contactInfo.emailHref} className="text-cyan-300 hover:text-cyan-200 font-bold text-sm underline">{contactInfo.email}</a>
                  </div>
                  <div>
                    <span className="text-sky-300/80 block mb-1">Phone / WhatsApp Support:</span>
                    <a href={contactInfo.phoneHref} className="text-white hover:text-cyan-300 font-bold">{contactInfo.phone}</a>
                  </div>
                  <div>
                    <span className="text-sky-300/80 block mb-1">Office Location:</span>
                    <span className="text-sky-100">{locationInfo.main.displayLine}</span>
                  </div>
                </div>
                <p className="text-[11px] text-sky-200/80 pt-1">
                  We acknowledge all formal privacy requests within 48 hours and resolve issues within 15 business days.
                </p>
              </div>
            </motion.section>

            {/* Interactive Quick FAQ */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#091b3b]/85 border border-sky-500/20 shadow-xl backdrop-blur-xl">
              <h3 className="text-lg font-bold text-white mb-4">Privacy Questions &amp; Answers</h3>
              <div className="space-y-3">
                {privacyFaqs.map((faq, idx) => (
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
