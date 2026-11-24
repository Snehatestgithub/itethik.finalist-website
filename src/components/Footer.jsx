import React from 'react';
import { Link } from 'react-router-dom'
import companyData from '../shared/companyData'
import Logo from './Logo'

const { companyInfo, contactInfo, locationInfo } = companyData

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-30 bg-[#020617] border-t-2 border-cyan-500/30 shadow-[0_-10px_40px_rgba(6,182,212,0.15)] mt-auto">
      {/* Top Gradient Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="sm:col-span-2 md:col-span-2 space-y-4">
            <div>
              <Logo className="scale-110 origin-left" />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              {companyInfo.overview}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 tracking-wide text-base border-b border-white/10 pb-2">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="text-slate-300 hover:text-cyan-400 transition duration-300 ease-in-out hover:underline">Home</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-cyan-400 transition duration-300 ease-in-out hover:underline">About Us</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-cyan-400 transition duration-300 ease-in-out hover:underline">Services</Link></li>
              <li><Link to="/portfolio" className="text-slate-300 hover:text-cyan-400 transition duration-300 ease-in-out hover:underline">Portfolio</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-cyan-400 transition duration-300 ease-in-out hover:underline">Contact Desk</Link></li>
              <li><Link to="/privacy-policy" className="text-teal-300 hover:text-teal-200 font-semibold transition duration-300 ease-in-out hover:underline flex items-center gap-1.5"><span>Privacy Policy</span></Link></li>
              <li><Link to="/terms-of-service" className="text-sky-300 hover:text-sky-200 font-semibold transition duration-300 ease-in-out hover:underline flex items-center gap-1.5"><span>Terms of Service</span></Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4 tracking-wide text-base border-b border-white/10 pb-2">Our Services</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/services/security-services" className="text-slate-300 hover:text-cyan-400 transition duration-300 ease-in-out hover:underline">CCTV Installation</Link></li>
              <li><Link to="/services/computer-repair" className="text-slate-300 hover:text-cyan-400 transition duration-300 ease-in-out hover:underline">Laptop & PC Repair</Link></li>
              <li><Link to="/services/web-development" className="text-slate-300 hover:text-cyan-400 transition duration-300 ease-in-out hover:underline">Web Development</Link></li>
              <li><Link to="/services/digital-cards" className="text-slate-300 hover:text-cyan-400 transition duration-300 ease-in-out hover:underline">Digital Cards</Link></li>
              <li><Link to="/services/seo" className="text-slate-300 hover:text-cyan-400 transition duration-300 ease-in-out hover:underline">SEO Services</Link></li>
              <li><Link to="/services/computer-services" className="text-slate-300 hover:text-cyan-400 transition duration-300 ease-in-out hover:underline">Custom PC Building</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4 tracking-wide text-base border-b border-white/10 pb-2">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <a href={contactInfo.phoneHref} className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-300 hover:text-cyan-400 transition duration-300 ease-in-out hover:bg-white/5">
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.149-.672.15-.199.297-.768.967-.941 1.166-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.199-.297.298-.497.099-.199.05-.373-.025-.522-.075-.149-.672-1.624-.921-2.224-.242-.58-.487-.502-.672-.512l-.573-.01c-.199 0-.522.074-.795.373s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.199 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.874.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                <span>{contactInfo.phone}</span>
              </a>
              <a href={contactInfo.emailHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-300 hover:text-cyan-400 transition duration-300 ease-in-out hover:bg-white/5">
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#EA4335" aria-hidden="true">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.99l7.11 5.01a1 1 0 0 0 1.18 0L20 8.99V18H4z"/>
                </svg>
                <span>{contactInfo.email}</span>
              </a>
              <div className="flex items-start gap-3 rounded-lg px-3 py-2 text-slate-300 bg-white/5 border border-white/5">
                <svg className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                </svg>
                <div className="text-xs leading-relaxed">
                  {locationInfo.main.addressLines.map((line, idx) => (
                    <span key={idx}>
                      {line}
                      <br />
                    </span>
                  ))}
                </div>
              </div>
              <a href={contactInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-300 hover:text-cyan-400 transition duration-300 ease-in-out hover:bg-white/5">
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.149-.672.15-.199.297-.768.967-.941 1.166-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.199-.297.298-.497.099-.199.05-.373-.025-.522-.075-.149-.672-1.624-.921-2.224-.242-.58-.487-.502-.672-.512l-.573-.01c-.199 0-.522.074-.795.373s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.199 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.874.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 py-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright */}
          <p className="text-slate-400 text-sm text-center md:text-left font-medium">
            © {currentYear} ITETHIK. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href={contactInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition duration-300 p-2 bg-slate-900 rounded-full border border-slate-800 hover:border-cyan-500/50"
              title="Instagram"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#E1306C" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37a4 4 0 1 1-7.86 1.96 4 4 0 0 1 7.86-1.96z" fill="#fff" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="#fff" />
              </svg>
            </a>
            <a
              href={contactInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition duration-300 p-2 bg-slate-900 rounded-full border border-slate-800 hover:border-cyan-500/50"
              title="LinkedIn"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0A66C2" aria-hidden="true">
                <path d="M4.98 3.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5zM3 8.25h3.96V21H3V8.25zM9.75 8.25H13v1.72c.49-.9 1.72-1.72 3.56-1.72 3.81 0 4.51 2.5 4.51 5.77V21h-3.96v-5.2c0-1.24-.02-2.83-1.72-2.83-1.72 0-1.98 1.34-1.98 2.73V21H9.75V8.25z" />
              </svg>
            </a>
            <a
              href={contactInfo.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition duration-300 p-2 bg-slate-900 rounded-full border border-slate-800 hover:border-cyan-500/50"
              title="YouTube"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#FF0000" aria-hidden="true">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#fff"/></svg>
            </a>
            <a
              href={contactInfo.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition duration-300 p-2 bg-slate-900 rounded-full border border-slate-800 hover:border-cyan-500/50"
              title="X (Twitter)"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a
              href={contactInfo.justdialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition duration-300 p-2 bg-slate-900 rounded-full border border-slate-800 hover:border-cyan-500/50"
              title="Justdial"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0072b1" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="#fff"/><circle cx="12" cy="12" r="10" fill="none" stroke="#64FFDA" strokeWidth="1"/></svg>
            </a>
            <a
              href={contactInfo.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition duration-300 p-2 bg-slate-900 rounded-full border border-slate-800 hover:border-cyan-500/50"
              title="Website"
            >
              <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />
              </svg>
            </a>
          </div>

          {/* Legal Links with Prominent Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/privacy-policy"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-teal-500/20 text-teal-300 hover:text-teal-200 border border-teal-500/30 text-xs font-semibold transition"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-sky-500/20 text-sky-300 hover:text-sky-200 border border-sky-500/30 text-xs font-semibold transition"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
