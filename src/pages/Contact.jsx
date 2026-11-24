import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Building,
  Camera,
  CheckCircle2,
  Code2,
  Cpu,
  Globe,
  Laptop,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import companyData from '../shared/companyData.js';
import FaqSection from '../components/FaqSection.jsx';
import ChatAssistant from '../components/ChatAssistant.jsx';
import contactHeroBackground from '../assets/images/maintenance_hero_bg_1787035173189.jpg';

const { contactInfo, locationInfo } = companyData;

const MAP_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.339474776856!2d73.10228397520343!3d18.99371078219356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9140406606f%3A0xb2b64789547d2b4b!2sHari%20Om%20Shagun%2C%20Plot%20No%208%2C%20Sector%2020%2C%20Ulwe%2C%20Navi%20Mumbai%2C%20Maharashtra%20410206!5e0!3m2!1sen!2sin!4v1715421500000!5m2!1sen!2sin';
const MAP_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(locationInfo.main.addressLines.join(', '))}`;

function generateTicketId() {
  return `ITE-REQ-${Math.floor(100000 + Math.random() * 900000)}`;
}

const SERVICE_CATEGORIES = [
  {
    id: 'web-development',
    name: 'Web Development',
    icon: Code2,
    description: 'Websites, e-commerce and local SEO.',
    commonIssues: ['Business Website Development', 'E-Commerce Store Setup', 'Website Redesign & Speed Fix', 'Local SEO & Google Business'],
  },
  {
    id: 'cctv-security',
    name: 'CCTV & Security',
    icon: Camera,
    description: 'Cameras, video door phones and access.',
    commonIssues: ['New CCTV Installation', 'DVR / NVR Storage & Offline Issue', 'Mobile Live View Configuration', 'Video Door Phone Setup'],
  },
  {
    id: 'computer-repair',
    name: 'Computer & Laptop Repair',
    icon: Laptop,
    description: 'Diagnosis, repair and hardware upgrades.',
    commonIssues: ['Screen Broken / Display Glitch', 'No Power / Boot Failure', 'SSD & RAM Speed Upgrade', 'Liquid / Water Damage'],
  },
  {
    id: 'it-support',
    name: 'IT Support',
    icon: Building,
    description: 'Ongoing support, networks and maintenance.',
    commonIssues: ['Office IT Annual AMC Plan', 'Multi-PC Network & Server Setup', 'Data Backup & Disaster Recovery', 'Structured LAN Cabling & Wi-Fi'],
  },
  {
    id: 'digital-design',
    name: 'Digital Design',
    icon: Globe,
    description: 'Digital cards and business-ready assets.',
    commonIssues: ['Digital Visiting Card', 'Dynamic QR Code', 'Digital Profile Design'],
  },
  {
    id: 'other-enquiries',
    name: 'Other Enquiries',
    icon: Cpu,
    description: 'Tell us what you have in mind.',
    commonIssues: ['Custom PC / Workstation', 'Intercom & Access Control', 'Other IT Enquiry'],
  },
];

const INPUT_CLASS = 'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100';

function getApiBaseUrl() {
  return import.meta.env.VITE_API_URL
    || (import.meta.env.PROD ? 'https://itethik-backend-1.onrender.com' : 'http://localhost:5000');
}

function getWhatsAppMessageUrl(message) {
  const url = new URL(contactInfo.whatsappUrl);
  url.searchParams.set('text', message);
  return url.toString();
}

export default function Contact() {
  const reducedMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = React.useState('computer-repair');
  const [preferredContactMode, setPreferredContactMode] = React.useState('whatsapp');
  const [urgency, setUrgency] = React.useState('standard');
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    subject: '',
    selectedIssue: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submittedTicket, setSubmittedTicket] = React.useState(null);
  const [submitError, setSubmitError] = React.useState('');

  const activeCategory = SERVICE_CATEGORIES.find((category) => category.id === selectedCategory) || SERVICE_CATEGORIES[0];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    setSubmitError('');
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setFormData((previous) => ({ ...previous, selectedIssue: '' }));
    setSubmitError('');
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const normalizedPhone = formData.phone.replace(/\D/g, '');
    if (normalizedPhone.length !== 10) {
      setSubmitError('Please enter a valid 10-digit phone number.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    const ticketId = generateTicketId();
    const payload = {
      name: formData.name.trim(),
      phone: normalizedPhone,
      email: formData.email.trim() || 'Not provided',
      location: formData.location.trim() || 'Ulwe / Navi Mumbai',
      category: activeCategory.name,
      issueTag: formData.selectedIssue || 'Custom Inquiry',
      contactMode: preferredContactMode,
      urgency,
      subject: formData.subject.trim(),
      message: formData.message.trim() || `Inquiry regarding ${activeCategory.name}`,
      ticketId,
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await fetch(`${getApiBaseUrl()}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: payload.name,
          phone: payload.phone,
          email: payload.email,
          message: `[DIRECT INQUIRY - ${payload.ticketId}]\nCategory: ${payload.category}\nSubject: ${payload.subject}\nSelected Issue: ${payload.issueTag}\nLocation: ${payload.location}\nPreferred Mode: ${payload.contactMode.toUpperCase()}\nUrgency: ${payload.urgency}\nDetails: ${payload.message}`,
        }),
      });

      const responseBody = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(typeof responseBody.message === 'string'
          ? responseBody.message
          : 'We could not submit your enquiry right now. Please try again or contact us directly.');
      }

      setSubmittedTicket(payload);
    } catch (error) {
      console.warn('Contact submission failed:', error);
      setSubmitError(error instanceof Error
        ? error.message
        : 'We could not submit your enquiry right now. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppDispatch = () => {
    const message = [
      'ITETHIK Enquiry',
      `Service: ${activeCategory.name}`,
      `Name: ${formData.name.trim() || 'Not provided'}`,
      `Phone: ${formData.phone.trim() || 'Not provided'}`,
      `Email: ${formData.email.trim() || 'Not provided'}`,
      `Subject: ${formData.subject.trim() || 'Not provided'}`,
      `Location: ${formData.location.trim() || 'Ulwe / Navi Mumbai'}`,
      `Preferred contact: ${preferredContactMode}`,
      `Timeline: ${urgency}`,
      `Details: ${formData.message.trim() || 'Please contact me to discuss.'}`,
    ].join('\n');

    window.open(getWhatsAppMessageUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-[#172b43]">
      <section className="relative overflow-hidden bg-[#071a2c] px-5 pb-12 pt-16 text-white sm:px-8 sm:pb-16 sm:pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactHeroBackground})` }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[#071a2c]/60 sm:bg-gradient-to-r sm:from-[#071a2c]/90 sm:via-[#071a2c]/60 sm:to-[#071a2c]/25"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_48%,rgba(56,189,248,0.2),transparent_38rem)]"
          aria-hidden="true"
        />
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.45 }}
          className="relative mx-auto max-w-7xl"
        >
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Let&apos;s Talk About What You Need.
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                From digital experiences to hardware support and security solutions, we&apos;re here to find the right solution for your business.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#enquiry-form"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-[#102b45] transition hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Send an Enquiry <ArrowRight size={17} />
              </a>
              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <MessageCircle size={17} /> WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <section aria-labelledby="service-selection-heading" className="px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-700">Choose a starting point</p>
            <h2 id="service-selection-heading" className="text-2xl font-semibold tracking-tight text-[#142b45] sm:text-3xl">
              What can we help with?
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_CATEGORIES.map((category, index) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;
              return (
                <motion.button
                  key={category.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => handleCategoryChange(category.id)}
                  whileHover={reducedMotion ? undefined : { y: -2 }}
                  whileTap={reducedMotion ? undefined : { scale: 0.99 }}
                  transition={{ duration: 0.18, delay: reducedMotion ? 0 : index * 0.015 }}
                  className={`flex min-h-24 items-center gap-4 rounded-2xl border p-4 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 ${
                    isSelected
                      ? 'border-sky-700 bg-sky-50 shadow-[0_8px_24px_rgba(27,89,131,0.1)]'
                      : 'border-slate-200 bg-white hover:border-sky-300 hover:bg-slate-50'
                  }`}
                >
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${isSelected ? 'bg-[#173a5d] text-white' : 'bg-[#e9f1f7] text-[#1f5a85]'}`}>
                    <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-[#172b43]">{category.name}</span>
                    <span className="mt-1 block text-xs leading-5 text-slate-500">{category.description}</span>
                  </span>
                  {isSelected && <CheckCircle2 size={19} className="shrink-0 text-sky-700" aria-hidden="true" />}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      <section id="enquiry-form" aria-labelledby="contact-details-heading" className="scroll-mt-8 px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
          <aside className="rounded-3xl bg-[#173a5d] p-6 text-white sm:p-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-sky-300">Contact our team</p>
            <h2 id="contact-details-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">We&apos;re easy to reach.</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Share what you need and we&apos;ll help you find a practical next step.
            </p>

            <div className="mt-8 space-y-3">
              <a href={contactInfo.phoneHref} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-sky-400/10 text-sky-300"><Phone size={19} aria-hidden="true" /></span>
                <span><span className="block text-xs text-slate-300">Call us</span><span className="mt-1 block font-semibold">{contactInfo.phone.replace(/^\+91\s*/, '')}</span></span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-sky-400/10 text-sky-300"><Mail size={19} aria-hidden="true" /></span>
                <span className="min-w-0"><span className="block text-xs text-slate-300">Email</span><span className="mt-1 block break-all font-semibold">{contactInfo.email}</span></span>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sky-400/10 text-sky-300"><MapPin size={19} aria-hidden="true" /></span>
                <span><span className="block text-xs text-slate-300">Visit us</span><span className="mt-1 block font-semibold">Ulwe, Navi Mumbai, Maharashtra</span></span>
              </div>
              <a href={contactInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#20ba59] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <MessageCircle size={17} aria-hidden="true" /> Message us on WhatsApp <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>

            <div className="mt-8 border-t border-white/10 pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">Official profiles &amp; reviews</p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-300">
                <a className="hover:text-sky-300" href={contactInfo.googleReviewUrl} target="_blank" rel="noopener noreferrer">Google Reviews</a>
                <a className="hover:text-sky-300" href={contactInfo.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a>
                <a className="hover:text-sky-300" href={contactInfo.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a className="hover:text-sky-300" href={contactInfo.youtubeUrl} target="_blank" rel="noopener noreferrer">YouTube</a>
                <a className="hover:text-sky-300" href={contactInfo.justdialUrl} target="_blank" rel="noopener noreferrer">Justdial</a>
              </div>
            </div>
          </aside>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_16px_50px_rgba(19,43,69,0.07)] sm:p-8">
            <div className="mb-7">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-700">Enquiry form</p>
              <h2 className="text-2xl font-semibold tracking-tight text-[#142b45] sm:text-3xl">Tell us a little more.</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">Fields marked * are required. We&apos;ll use your details to respond to this enquiry.</p>
            </div>

            {submittedTicket && (
              <div className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900" role="status" aria-live="polite">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-700" size={21} aria-hidden="true" />
                  <div className="flex-1">
                    <h3 className="font-semibold">Enquiry submitted successfully</h3>
                    <p className="mt-1 text-sm leading-6">Thanks, {submittedTicket.name}. Your {submittedTicket.category.toLowerCase()} enquiry has been sent to our team.</p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedTicket(null);
                        setFormData({ name: '', phone: '', email: '', location: '', subject: '', selectedIssue: '', message: '' });
                      }}
                      className="mt-2 text-sm font-semibold underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
                    >
                      Send another enquiry
                    </button>
                  </div>
                </div>
              </div>
            )}

            <form id="contact-enquiry" onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-slate-700">Full Name *</label>
                  <input id="contact-name" name="name" autoComplete="name" required value={formData.name} onChange={handleInputChange} placeholder="Your name" className={INPUT_CLASS} />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-slate-700">Email Address</label>
                  <input id="contact-email" name="email" type="email" autoComplete="email" value={formData.email} onChange={handleInputChange} placeholder="you@example.com" className={INPUT_CLASS} />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-slate-700">Phone Number *</label>
                  <input id="contact-phone" name="phone" type="tel" inputMode="numeric" autoComplete="tel-national" pattern="[0-9]{10}" minLength={10} maxLength={10} required value={formData.phone} onChange={handleInputChange} placeholder="10-digit number" className={INPUT_CLASS} aria-describedby="phone-help" />
                  <p id="phone-help" className="mt-1 text-xs text-slate-500">Enter a 10-digit Indian phone number.</p>
                </div>
                <div>
                  <label htmlFor="contact-service" className="mb-1.5 block text-sm font-medium text-slate-700">Service Selection *</label>
                  <select id="contact-service" name="service" value={selectedCategory} onChange={(event) => handleCategoryChange(event.target.value)} className={INPUT_CLASS}>
                    {SERVICE_CATEGORIES.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="contact-location" className="mb-1.5 block text-sm font-medium text-slate-700">Premise / Area *</label>
                <input id="contact-location" name="location" autoComplete="address-level2" required value={formData.location} onChange={handleInputChange} placeholder="Your area or locality" className={INPUT_CLASS} />
              </div>

              <div>
                <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium text-slate-700">Subject *</label>
                <input id="contact-subject" name="subject" required value={formData.subject} onChange={handleInputChange} placeholder="What would you like help with?" className={INPUT_CLASS} />
              </div>

              <div>
                <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
                  <label htmlFor="contact-message" className="text-sm font-medium text-slate-700">Message *</label>
                  <span className="text-xs text-slate-500">Selected: {activeCategory.name}</span>
                </div>
                <textarea id="contact-message" name="message" required rows={5} value={formData.message} onChange={handleInputChange} placeholder="Please describe what you need..." className={`${INPUT_CLASS} resize-y`} />
              </div>

              <details className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <summary className="cursor-pointer text-sm font-medium text-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-700">Additional details (optional)</summary>
                <div className="mt-4 space-y-4">
                  <div>
                    <span className="mb-2 block text-sm font-medium text-slate-700">What best describes your need?</span>
                    <div className="flex flex-wrap gap-2">
                      {activeCategory.commonIssues.map((issue) => {
                        const selected = formData.selectedIssue === issue;
                        return (
                          <button
                            key={issue}
                            type="button"
                            aria-pressed={selected}
                            onClick={() => setFormData((previous) => ({ ...previous, selectedIssue: selected ? '' : issue }))}
                            className={`rounded-full border px-3 py-1.5 text-xs transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 ${selected ? 'border-sky-700 bg-sky-50 font-semibold text-sky-900' : 'border-slate-300 bg-white text-slate-600 hover:border-sky-500'}`}
                          >
                            {issue}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <fieldset>
                    <legend className="mb-2 text-sm font-medium text-slate-700">Preferred response channel</legend>
                    <div className="flex flex-wrap gap-2">
                      {[['whatsapp', 'WhatsApp'], ['phone', 'Phone call'], ['email', 'Email']].map(([value, label]) => (
                        <button key={value} type="button" aria-pressed={preferredContactMode === value} onClick={() => setPreferredContactMode(value)} className={`rounded-full border px-3 py-1.5 text-xs font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 ${preferredContactMode === value ? 'border-[#173a5d] bg-[#173a5d] text-white' : 'border-slate-300 bg-white text-slate-600 hover:border-sky-500'}`}>{label}</button>
                      ))}
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="mb-2 text-sm font-medium text-slate-700">Timeline</legend>
                    <div className="flex flex-wrap gap-2">
                      {[['urgent', 'Urgent'], ['standard', 'Standard'], ['flexible', 'Flexible']].map(([value, label]) => (
                        <button key={value} type="button" aria-pressed={urgency === value} onClick={() => setUrgency(value)} className={`rounded-full border px-3 py-1.5 text-xs font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 ${urgency === value ? 'border-[#173a5d] bg-[#173a5d] text-white' : 'border-slate-300 bg-white text-slate-600 hover:border-sky-500'}`}>{label}</button>
                      ))}
                    </div>
                  </fieldset>
                </div>
              </details>

              {submitError && (
                <p className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-800" role="alert">{submitError}</p>
              )}

              <div className="grid gap-3 sm:grid-cols-2">
                <button type="submit" disabled={isSubmitting} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#173a5d] px-5 text-sm font-semibold text-white transition hover:bg-[#204d77] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 disabled:cursor-not-allowed disabled:opacity-60">
                  {isSubmitting ? <><span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" /> Sending enquiry...</> : <><Send size={16} aria-hidden="true" /> Submit Enquiry</>}
                </button>
                <button type="button" onClick={handleWhatsAppDispatch} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-emerald-300 bg-emerald-50 px-5 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">
                  <MessageCircle size={17} aria-hidden="true" /> Continue on WhatsApp
                </button>
              </div>

              <p className="text-center text-xs leading-5 text-slate-500">
                Your information is handled according to our{' '}
                <Link to="/privacy-policy" className="font-medium text-sky-800 underline underline-offset-2">Privacy Policy</Link>
                {' '}&amp;{' '}
                <Link to="/terms-and-conditions" className="font-medium text-sky-800 underline underline-offset-2">Terms of Service</Link>.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section aria-labelledby="contact-location-heading" className="bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-sky-700">Visit ItEthik</p>
            <h2 id="contact-location-heading" className="text-3xl font-semibold tracking-tight text-[#142b45] sm:text-4xl">Find Your Way to ItEthik.</h2>
          </div>
          <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_50px_rgba(19,43,69,0.07)] lg:grid-cols-[1.4fr_0.8fr]">
            <div className="min-h-[280px] bg-slate-100 sm:min-h-[380px]">
              <iframe
                src={MAP_EMBED_URL}
                className="h-full min-h-[280px] w-full border-0 sm:min-h-[380px]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ItEthik location in Ulwe, Navi Mumbai"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#e9f1f7] text-[#1f5a85]"><MapPin size={23} aria-hidden="true" /></div>
              <h3 className="mt-5 text-xl font-semibold text-[#172b43]">{locationInfo.main.title}</h3>
              <address className="mt-3 not-italic text-sm leading-6 text-slate-600">
                {locationInfo.main.addressLines.map((line) => <span key={line} className="block">{line}</span>)}
              </address>
              <a href={MAP_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-[#173a5d] px-5 text-sm font-semibold text-white transition hover:bg-[#204d77] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700">
                Get Directions <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="contact-cta-heading" className="px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl bg-[#eaf2f8] p-6 sm:p-9 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 id="contact-cta-heading" className="text-2xl font-semibold tracking-tight text-[#142b45] sm:text-3xl">Need Help With Something? Let&apos;s Talk.</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Your next IT solution could start with a simple conversation.</p>
          </div>
          <a href={contactInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 w-fit shrink-0 items-center justify-center gap-2 rounded-full bg-[#173a5d] px-6 text-sm font-semibold text-white transition hover:bg-[#204d77] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700">
            <MessageCircle size={17} aria-hidden="true" /> WhatsApp Our Team <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      <div className="bg-[#071a2c] px-5 pb-10 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <FaqSection category="contact" badge="" subtitle="" hideFooter compact />
        </div>
      </div>
      <ChatAssistant />
    </div>
  );
}
