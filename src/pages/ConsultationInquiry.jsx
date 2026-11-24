import React from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PhoneCall,
  ShieldCheck,
  Camera,
  Lock,
  Cpu,
  Monitor,
  Laptop,
  Wrench,
  Code2,
  TrendingUp,
  CreditCard,
  Building,
  Home as HomeIcon,
  Store,
  Factory,
  Send,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  Sparkles,
  Zap,
  X,
  Phone,
  MapPin,
} from 'lucide-react';
import companyData from '../shared/companyData';
import RetroGrid from '../components/ui/retro-grid';
import CanvasParticleField from '../components/CanvasParticleField';
import FaqSection from '../components/FaqSection';
import ChatAssistant from '../components/ChatAssistant';

const { contactInfo } = companyData;

function generateConsultationTicketId() {
  return `ITE-${Math.floor(100000 + Math.random() * 900000)}`;
}

// All company services structured for the consultation selector
const SERVICE_OPTIONS = [
  // Security Solutions
  {
    id: 'intercom-setup',
    category: 'Security Solutions',
    name: 'Intercom Setup & Video Door Phones',
    shortName: 'Intercom Setup',
    icon: PhoneCall,
    color: 'cyan',
    badge: 'Popular',
    desc: 'Smart video door phones, wireless IP intercoms & electric door locks.',
    defaultPlaceholder: 'Looking for video door phone intercom installation with mobile app viewing & gate lock control...',
    backLink: '/services/intercom-setup',
  },
  {
    id: 'home-office-security',
    category: 'Security Solutions',
    name: 'Home & Office Security & Biometrics',
    shortName: 'Home & Office Security',
    icon: Lock,
    color: 'emerald',
    badge: 'High Security',
    desc: 'Smart intrusion alarms, biometric access control & motion sensors.',
    defaultPlaceholder: 'Need intrusion alarm sensors, biometric fingerprint access, and smart locks for my office/home...',
    backLink: '/services/home-office-security',
  },
  {
    id: 'cctv-installation',
    category: 'Security Solutions',
    name: 'CCTV Camera Installation',
    shortName: 'CCTV Installation',
    icon: Camera,
    color: 'blue',
    badge: '24/7 Monitoring',
    desc: 'HD & 4K IP cameras, night vision, DVR/NVR cloud storage & remote mobile live view.',
    defaultPlaceholder: 'Need HD CCTV surveillance camera installation for complete premise coverage and phone monitoring...',
    backLink: '/services/cctv-installation',
  },
  {
    id: 'cctv-maintenance',
    category: 'Security Solutions',
    name: 'CCTV AMC & Maintenance',
    shortName: 'CCTV Maintenance',
    icon: ShieldCheck,
    color: 'purple',
    badge: 'AMC Support',
    desc: 'Preventive camera health checks, lens cleaning, DVR hard disk audits & wiring fixes.',
    defaultPlaceholder: 'Looking for regular CCTV servicing and annual maintenance contract for existing cameras...',
    backLink: '/services/cctv-maintenance',
  },

  // Computer & Hardware Solutions
  {
    id: 'laptop-repair',
    category: 'Hardware & Repair',
    name: 'Laptop & Notebook Repair',
    shortName: 'Laptop Repair',
    icon: Laptop,
    color: 'cyan',
    badge: 'Express Same-Day',
    desc: 'Screen replacement, battery fixes, liquid damage decontamination, thermal tuning & logic board IC micro-soldering.',
    defaultPlaceholder: 'My laptop (MacBook / Windows) is having issues (screen cracked / battery drain / no power / liquid spill / overheating / slow boot) and needs diagnostic & repair estimate...',
    backLink: '/services/laptop-repair',
  },
  {
    id: 'computer-repair',
    category: 'Hardware & Repair',
    name: 'Desktop & Workstation Repair',
    shortName: 'Desktop PC Repair',
    icon: Wrench,
    color: 'blue',
    badge: 'Fast Turnaround',
    desc: 'Hardware diagnosis, power supply (PSU) fix, GPU repair, BSOD troubleshooting & SSD speed upgrades.',
    defaultPlaceholder: 'My desktop computer / workstation has hardware or boot errors (blue screen / no display / power failure / slow speed)...',
    backLink: '/services/computer-repair',
  },
  {
    id: 'chip-level-repair',
    category: 'Hardware & Repair',
    name: 'Chip-Level Motherboard Repair',
    shortName: 'Chip-Level Repair',
    icon: Cpu,
    color: 'purple',
    badge: 'Micro-Soldering',
    desc: 'IC replacement, power rail diagnostics, short circuit troubleshooting & BIOS re-flashing.',
    defaultPlaceholder: 'Laptop motherboard has no power / water damage / short circuit and requires chip-level micro-soldering...',
    backLink: '/services/chip-level-repair',
  },
  {
    id: 'custom-pc-building',
    category: 'Hardware & Repair',
    name: 'Custom Gaming & Workstation PC',
    shortName: 'Custom PC Build',
    icon: Monitor,
    color: 'rose',
    badge: 'Tailored Rig',
    desc: 'Liquid cooled custom rigs for 3D animation, gaming, AI workloads & video editing.',
    defaultPlaceholder: 'Want to build a custom desktop rig for gaming / video rendering / architecture within my budget...',
    backLink: '/services/custom-pc-building',
  },
  {
    id: 'new-pc-building',
    category: 'Hardware & Repair',
    name: 'Brand New Desktop Computer Setup',
    shortName: 'New PC Build',
    icon: Monitor,
    color: 'blue',
    badge: 'Office & Home',
    desc: 'Brand new Intel / AMD PCs for offices, schools, and home study setups.',
    defaultPlaceholder: 'Looking to purchase new desktop computers for office workstation / study use...',
    backLink: '/services/new-pc-building',
  },
  {
    id: 'refurbished-pc-building',
    category: 'Hardware & Repair',
    name: 'Certified Refurbished PCs & Laptops',
    shortName: 'Refurbished PCs',
    icon: Wrench,
    color: 'emerald',
    badge: 'Budget Friendly',
    desc: 'Tested and warranty-backed refurbished business computers & laptops.',
    defaultPlaceholder: 'Looking for high-value tested refurbished laptops/desktops with warranty...',
    backLink: '/services/refurbished-pc-building',
  },
  {
    id: 'computer-laptop-maintenance',
    category: 'Hardware & Repair',
    name: 'Computer & IT AMC Maintenance',
    shortName: 'IT AMC Maintenance',
    icon: ShieldCheck,
    color: 'indigo',
    badge: 'Corporate AMC',
    desc: 'Periodic preventative maintenance, virus cleaning, network tuning & software backups.',
    defaultPlaceholder: 'Need corporate IT maintenance and AMC for our office computer systems...',
    backLink: '/services/computer-laptop-maintenance',
  },

  // Digital Solutions
  {
    id: 'web-development',
    category: 'Digital Solutions',
    name: 'Custom Web Development',
    shortName: 'Web Development',
    icon: Code2,
    color: 'cyan',
    badge: 'Full-Stack',
    desc: 'Modern responsive websites, web applications, portals & e-commerce stores.',
    defaultPlaceholder: 'Looking to build a responsive website / company portal / e-commerce platform for our business...',
    backLink: '/services/web-development',
  },
  {
    id: 'web-development-maintenance',
    category: 'Digital Solutions',
    name: 'Website AMC & Maintenance',
    shortName: 'Web Maintenance',
    icon: Wrench,
    color: 'purple',
    badge: 'Speed & Security',
    desc: 'Security patches, speed optimization, content updates & uptime monitoring.',
    defaultPlaceholder: 'Need regular maintenance, bug fixes, and speed enhancements for our existing website...',
    backLink: '/services/web-development-maintenance',
  },
  {
    id: 'seo',
    category: 'Digital Solutions',
    name: 'SEO & Growth Marketing',
    shortName: 'SEO & Growth',
    icon: TrendingUp,
    color: 'emerald',
    badge: 'Rank #1',
    desc: 'Google Business profile optimization, local SEO, keyword ranking & targeted traffic growth.',
    defaultPlaceholder: 'Want to rank our business on Google search and map results for local inquiries...',
    backLink: '/services/seo',
  },
  {
    id: 'digital-cards',
    category: 'Digital Solutions',
    name: 'Digital Visiting Cards & NFC',
    shortName: 'Digital Cards',
    icon: CreditCard,
    color: 'rose',
    badge: 'Smart NFC',
    desc: 'Contactless NFC business cards with dynamic QR codes and instant contact saving.',
    defaultPlaceholder: 'Interested in smart digital NFC business cards for our team with custom branding...',
    backLink: '/services/digital-cards',
  },
];

const PREMISE_TYPES = [
  { id: 'residential', label: 'Residential / Villa / Flat', icon: HomeIcon },
  { id: 'commercial', label: 'Commercial / Office', icon: Building },
  { id: 'retail', label: 'Shop / Showroom', icon: Store },
  { id: 'industrial', label: 'Warehouse / Factory', icon: Factory },
];

const CONSULTATION_MODES = [
  { id: 'site_visit', label: 'Free On-Site Visit & Audit', desc: 'Expert technician inspects your premises directly' },
  { id: 'phone_call', label: 'Phone Call Consultation', desc: 'Direct discussion with our technical specialist' },
  { id: 'whatsapp', label: 'WhatsApp Chat & Estimate', desc: 'Quick photos/specs sharing and price estimate' },
];

const TIMELINE_OPTIONS = [
  'Immediate (Within 24 Hours)',
  'Within 2-3 Days',
  'This Weekend',
  'Planning / Next Week',
];

export default function ConsultationInquiry() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Service selection driven directly by searchParams with fallback
  const urlServiceParam = searchParams.get('service');
  const urlIssueParam = searchParams.get('issue');
  const selectedServiceId =
    urlServiceParam && SERVICE_OPTIONS.some((item) => item.id === urlServiceParam)
      ? urlServiceParam
      : 'intercom-setup';

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  // Form states
  const [formData, setFormData] = React.useState(() => {
    let initialMessage = '';
    if (urlIssueParam) {
      const issueMap = {
        display: 'Looking for Laptop Display / Screen Replacement diagnostic & quote.',
        battery: 'Looking for Laptop Battery replacement / charging issue diagnostic & quote.',
        liquid: 'Urgent: Water / Liquid spill recovery diagnostic for my laptop.',
        thermal: 'Laptop Overheating / Fan noise / thermal repasting service requested.',
        motherboard: 'Dead Laptop / No Power / Motherboard micro-soldering inspection needed.',
        storage: 'Slow laptop performance / SSD NVMe upgrade & Windows OS installation quote.',
      };
      initialMessage = issueMap[urlIssueParam.toLowerCase()] || `Issue description: ${urlIssueParam}`;
    }
    return {
      name: '',
      phone: '',
      email: '',
      premiseType: 'residential',
      consultationMode: 'site_visit',
      preferredTimeline: 'Within 2-3 Days',
      cityOrAddress: '',
      message: initialMessage,
    };
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState('');
  const [submittedData, setSubmittedData] = React.useState(null);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);

  // Current active service details
  const activeService = React.useMemo(() => {
    return SERVICE_OPTIONS.find((s) => s.id === selectedServiceId) || SERVICE_OPTIONS[0];
  }, [selectedServiceId]);

  // Update placeholder when active service changes
  const messagePlaceholder = React.useMemo(() => {
    return activeService?.defaultPlaceholder || 'Please describe your requirement or problem...';
  }, [activeService]);

  const categories = React.useMemo(() => {
    return ['All', 'Security Solutions', 'Hardware & Repair', 'Digital Solutions'];
  }, []);

  const filteredServices = React.useMemo(() => {
    if (selectedCategory === 'All') return SERVICE_OPTIONS;
    return SERVICE_OPTIONS.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  const handleServiceSelect = (serviceId) => {
    setSearchParams({ service: serviceId });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    if (!formData.name.trim()) {
      setSubmitError('Please provide your full name.');
      return;
    }
    const normalizedPhone = formData.phone.replace(/\D/g, '');
    if (normalizedPhone.length !== 10) {
      setSubmitError('Please enter a valid 10-digit phone number.');
      return;
    }

    setIsSubmitting(true);

    const ticketId = generateConsultationTicketId();
    const createdAt = new Date().toISOString();
    const payload = {
      name: formData.name.trim(),
      phone: normalizedPhone,
      email: formData.email.trim() || 'Not provided',
      serviceRequested: activeService.name,
      serviceId: activeService.id,
      premiseType: formData.premiseType,
      consultationMode: formData.consultationMode,
      preferredTimeline: formData.preferredTimeline,
      locationOrAddress: formData.cityOrAddress.trim() || 'Navi Mumbai / Nearby',
      message: formData.message.trim() || `Requested consultation for ${activeService.name}`,
      ticketId,
      createdAt,
    };

    try {
      const apiBaseUrl =
        import.meta.env.VITE_API_URL ||
        (import.meta.env.PROD ? 'https://itethik-backend-1.onrender.com' : 'http://localhost:5000');

      const res = await fetch(`${apiBaseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: payload.name,
          phone: payload.phone,
          email: payload.email,
          message: `[CONSULTATION INQUIRY - ${payload.ticketId}]\nService: ${payload.serviceRequested}\nPremise: ${payload.premiseType}\nMode: ${payload.consultationMode}\nTimeline: ${payload.preferredTimeline}\nAddress: ${payload.locationOrAddress}\nDetails: ${payload.message}\nSubmitted: ${payload.createdAt}`,
        }),
      });

      const responseBody = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(
          typeof responseBody.message === 'string'
            ? responseBody.message
            : 'We could not submit your consultation request right now. Please try again or contact us directly.'
        );
      }

      // Set submitted record & show modal
      const submissionRecord = {
        ...payload,
      };
      setSubmittedData(submissionRecord);
      setShowSuccessModal(true);

      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        premiseType: 'residential',
        consultationMode: 'site_visit',
        preferredTimeline: 'Within 2-3 Days',
        cityOrAddress: '',
        message: '',
      });
    } catch (err) {
      console.warn('Consultation submission failed:', err);
      setSubmitError(err instanceof Error
        ? err.message
        : 'We could not submit your consultation request right now. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Direct WhatsApp Inquiry Generator
  const handleDirectWhatsApp = () => {
    const name = formData.name.trim() || 'Client';
    const phone = formData.phone.trim() ? `Phone: ${formData.phone.trim()}` : '';
    const address = formData.cityOrAddress.trim() ? `Location: ${formData.cityOrAddress.trim()}` : '';
    const premise = `Premise: ${formData.premiseType}`;
    const timeline = `Timeline: ${formData.preferredTimeline}`;
    const userMsg = formData.message.trim() ? `Details: ${formData.message.trim()}` : '';

    const text = encodeURIComponent(
      `Hello ITETHIK Team,\n\nI want to request a Free Consultation for:\n📌 *${activeService.name}*\n\nName: ${name}\n${phone}\n${address}\n${premise}\n${timeline}\n${userMsg}\n\nPlease share availability & estimate. Thanks!`
    );

    window.open(`https://wa.me/918976765350?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#020617] pt-2 sm:pt-4 pb-24 px-4 sm:px-6 md:px-10 relative overflow-hidden">
      {/* Dynamic Background Environment */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#020617]" />
        <RetroGrid className="absolute inset-0 opacity-40" gridColor="#06b6d4" glowEffect={false} showScanlines={false} />
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-10%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-cyan-600/15 blur-[140px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-purple-600/15 blur-[150px]"
        />
        <CanvasParticleField variant="blue" mode="mixed" density={42} speed={0.35} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Back Link to Previous Service */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mb-6">
          <Link
            to={activeService.backLink || '/services'}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors font-medium px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <ArrowLeft size={16} /> Back to {activeService.shortName}
          </Link>
        </motion.div>

        {/* Page Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="flex justify-center mb-3">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md text-xs font-bold tracking-wider text-cyan-300 uppercase">
              <Sparkles size={14} className="text-cyan-400" />
              Direct Service Booking & Consultation
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
            Request Free <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">Consultation & Quote</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Select your required service below, tell us about your property or device, and our technical specialists will reach out with a tailored solution and zero-obligation estimate.
          </p>

          {/* Quick Assurance Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6 text-xs text-gray-300">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <CheckCircle2 size={14} className="text-emerald-400" />
              <span>Zero-Obligation On-Site Visit</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <CheckCircle2 size={14} className="text-cyan-400" />
              <span>Response within 30 Minutes</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <CheckCircle2 size={14} className="text-purple-400" />
              <span>Genuine OEM Parts & Warranty</span>
            </div>
          </div>
        </motion.div>

        {/* Main Grid: Left Side Service Picker & Summary, Right Side Comprehensive Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* LEFT COLUMN: Service Selection Hub (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 sm:p-7 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Zap size={18} className="text-cyan-400" />
                  Select Service
                </h3>
                <span className="text-xs text-gray-400">{SERVICE_OPTIONS.length} Available Solutions</span>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                      selectedCategory === cat
                        ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                        : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Scrollable Service Cards List */}
              <div className="space-y-2.5 max-h-[460px] overflow-y-auto pr-1 custom-scrollbar">
                {filteredServices.map((srv) => {
                  const Icon = srv.icon;
                  const isSelected = selectedServiceId === srv.id;

                  return (
                    <motion.button
                      key={srv.id}
                      type="button"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => handleServiceSelect(srv.id)}
                      className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-start gap-3.5 relative overflow-hidden group ${
                        isSelected
                          ? 'border-cyan-400 bg-cyan-950/40 shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                          : 'border-white/10 bg-slate-900/50 hover:border-white/20 hover:bg-slate-800/60'
                      }`}
                    >
                      {/* Active Indicator Glow */}
                      {isSelected && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-500" />
                      )}

                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-all ${
                          isSelected
                            ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300'
                            : 'bg-white/5 border-white/10 text-gray-400 group-hover:text-cyan-400'
                        }`}
                      >
                        <Icon size={20} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <h4
                            className={`text-sm font-bold truncate ${
                              isSelected ? 'text-white' : 'text-gray-200 group-hover:text-white'
                            }`}
                          >
                            {srv.shortName}
                          </h4>
                          {srv.badge && (
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-md shrink-0 ${
                                isSelected
                                  ? 'bg-cyan-500/30 text-cyan-200 border border-cyan-400/40'
                                  : 'bg-white/5 text-gray-400'
                              }`}
                            >
                              {srv.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-400 line-clamp-1 leading-normal">{srv.desc}</p>
                      </div>

                      {isSelected && (
                        <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Currently Selected Active Service Highlights Card */}
            <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-cyan-950/30 via-slate-900/60 to-slate-900/90 p-6 backdrop-blur-xl shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                  {(() => {
                    const ActiveIcon = activeService.icon;
                    return <ActiveIcon size={24} />;
                  })()}
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                    Selected Service
                  </span>
                  <h4 className="text-base font-bold text-white leading-tight">{activeService.name}</h4>
                </div>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed mb-4">{activeService.desc}</p>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <ShieldCheck size={14} /> Full Warranty Included
                </span>
                <span className="text-cyan-400 font-semibold">Fast Deployment</span>
              </div>
            </div>

            {/* Direct Instant Contact Channels */}
            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5 backdrop-blur-md">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                Prefer direct assistance?
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={contactInfo.phoneHref}
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-400/30 hover:bg-cyan-500/10 text-xs font-bold text-white transition-all"
                >
                  <Phone size={14} className="text-cyan-400" />
                  <span>Call Us Now</span>
                </a>
                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-xs font-bold text-emerald-300 transition-all"
                >
                  <MessageSquare size={14} className="text-emerald-400" />
                  <span>WhatsApp Chat</span>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Consultation & Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/15 bg-slate-900/85 p-6 sm:p-8 md:p-10 backdrop-blur-2xl shadow-[0_10px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
              {/* Subtle top background ambient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 mb-6">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Consultation Request Form</h3>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300">
                    Step 1 of 1
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-400">
                  Fill in your details below to schedule your free consultation for{' '}
                  <span className="text-cyan-300 font-semibold">{activeService.name}</span>.
                </p>
              </div>

              {submitError && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-3 text-xs text-rose-300">
                  <AlertCircle size={18} className="shrink-0 mt-0.5 text-rose-400" />
                  <div>
                    <strong className="block font-bold">Please check your inputs:</strong>
                    {submitError}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Phone Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1.5 uppercase tracking-wider">
                      Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1.5 uppercase tracking-wider">
                      Phone Number (WhatsApp) <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                </div>

                {/* Email & Location/City Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1.5 uppercase tracking-wider">
                      Email Address <span className="text-gray-500 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. rahul@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1.5 uppercase tracking-wider">
                      City / Area / Location
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="cityOrAddress"
                        value={formData.cityOrAddress}
                        onChange={handleInputChange}
                        placeholder="e.g. Ulwe, Navi Mumbai / Sector 20"
                        className="w-full px-4 py-3 pl-9 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                      <MapPin size={16} className="absolute left-3 top-3.5 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Premise / Property Type Selector */}
                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-2 uppercase tracking-wider">
                    Premise / Property Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {PREMISE_TYPES.map((pt) => {
                      const PtIcon = pt.icon;
                      const isSelected = formData.premiseType === pt.id;
                      return (
                        <button
                          key={pt.id}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, premiseType: pt.id }))}
                          className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all ${
                            isSelected
                              ? 'border-cyan-400 bg-cyan-950/40 text-cyan-300 shadow-sm'
                              : 'border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          <PtIcon size={18} className={isSelected ? 'text-cyan-400 mb-2' : 'text-gray-400 mb-2'} />
                          <span className="text-xs font-bold leading-tight">{pt.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Preferred Mode of Consultation */}
                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-2 uppercase tracking-wider">
                    Preferred Mode of Consultation
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {CONSULTATION_MODES.map((mode) => {
                      const isSelected = formData.consultationMode === mode.id;
                      return (
                        <button
                          key={mode.id}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, consultationMode: mode.id }))}
                          className={`p-3.5 rounded-xl border text-left transition-all ${
                            isSelected
                              ? 'border-cyan-400 bg-cyan-950/50 text-white'
                              : 'border-white/10 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-300'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-bold text-white">{mode.label}</span>
                            {isSelected && <CheckCircle2 size={14} className="text-cyan-400" />}
                          </div>
                          <p className="text-[11px] text-gray-400 leading-tight">{mode.desc}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Preferred Timeline */}
                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-2 uppercase tracking-wider">
                    Expected Timeline
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {TIMELINE_OPTIONS.map((time) => {
                      const isSelected = formData.preferredTimeline === time;
                      return (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, preferredTimeline: time }))}
                          className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                            isSelected
                              ? 'border-cyan-400 bg-cyan-500/20 text-cyan-300'
                              : 'border-white/10 bg-white/5 text-gray-400 hover:text-white'
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Additional Requirement Notes / Message */}
                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1.5 uppercase tracking-wider">
                    Specific Requirements or Problem Description
                  </label>
                  <textarea
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={messagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Submit Consultation Request</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleDirectWhatsApp}
                    className="py-4 px-6 rounded-xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 font-bold text-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <MessageSquare size={16} className="text-emerald-400" />
                    <span>Instant WhatsApp Quote</span>
                  </button>
                </div>

                <p className="text-[11px] text-center text-gray-400">
                  🔒 Information handled confidentially under our{' '}
                  <Link to="/privacy-policy" className="text-cyan-400 hover:underline">Privacy Policy</Link>
                  {' '}&amp;{' '}
                  <Link to="/terms-and-conditions" className="text-cyan-400 hover:underline">Terms of Service</Link>.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section (Consultation Level) */}
        <FaqSection category="consultation" />

        <ChatAssistant />
      </div>

      {/* CONFIRMATION & APPOINTMENT TICKET MODAL */}
      <AnimatePresence>
        {showSuccessModal && submittedData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg rounded-3xl border border-cyan-500/40 bg-slate-900 p-6 sm:p-8 text-white shadow-[0_0_50px_rgba(6,182,212,0.3)] overflow-hidden"
            >
              {/* Top gradient stripe */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400" />

              <button
                type="button"
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-lg bg-white/5 hover:bg-white/10"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-black text-white mb-1">Consultation Request Received!</h3>
                <p className="text-xs text-gray-300">
                  Thank you, <span className="text-cyan-300 font-bold">{submittedData.name}</span>. Our technical engineer will call you shortly.
                </p>
              </div>

              {/* Ticket Summary Box */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-2.5 mb-6 text-xs text-gray-300">
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-gray-400">Inquiry Reference:</span>
                  <span className="font-mono font-bold text-cyan-300">{submittedData.ticketId}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Selected Service:</span>
                  <span className="font-bold text-white text-right">{submittedData.serviceRequested}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Phone Contact:</span>
                  <span className="font-medium text-white">{submittedData.phone}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Consultation Mode:</span>
                  <span className="font-medium text-cyan-300 capitalize">{submittedData.consultationMode.replace('_', ' ')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Timeline:</span>
                  <span className="font-medium text-white">{submittedData.preferredTimeline}</span>
                </div>
              </div>

              {/* Direct Next Action Buttons */}
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/25"
                >
                  <MessageSquare size={16} />
                  <span>Send Ticket via WhatsApp for Instant Priority</span>
                </button>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setShowSuccessModal(false);
                      navigate('/');
                    }}
                    className="flex-1 py-3 px-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-bold text-xs transition-all"
                  >
                    Go to Homepage
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowSuccessModal(false)}
                    className="flex-1 py-3 px-4 rounded-xl border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 font-bold text-xs transition-all"
                  >
                    Done
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
