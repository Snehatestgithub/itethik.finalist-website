import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getFaqDataByCategory } from '../data/faqData';
import companyData from '../shared/companyData';

const { contactInfo } = companyData;

export default function FaqSection({
  category = 'company',
  title,
  subtitle,
  badge,
  theme,
  className = '',
  showJsonLd = true,
  hideFooter = false,
  compact = false,
  footerTitle = 'Have a specific question not covered here?',
  footerDescription = 'Our technical team provides instant consultations and free estimates.',
  footerClassName = '',
  initiallyCollapsed = false,
  wide = false,
  hideFooterIcon = false,
  footerTitleClassName = '',
}) {
  const data = useMemo(() => getFaqDataByCategory(category), [category]);
  const [openId, setOpenId] = useState(() => initiallyCollapsed ? null : data.faqs?.[0]?.id || null);

  const displayTitle = title !== undefined ? title : (data.title || 'Frequently Asked Questions');
  const displaySubtitle = subtitle !== undefined ? subtitle : (data.subtitle || '');
  const displayBadge = badge !== undefined ? badge : (data.badge || '');
  const activeTheme = theme || data.theme || 'cyan';

  const themeClasses = {
    cyan: {
      badgeBorder: 'border-cyan-500/30',
      badgeBg: 'bg-cyan-500/10',
      badgeText: 'text-cyan-300',
      badgeIcon: 'text-cyan-400',
      gradient: 'from-cyan-400 via-blue-400 to-purple-400',
      glow: 'bg-cyan-500/10',
      activeBorder: 'border-cyan-500/50 shadow-[0_0_25px_rgba(6,182,212,0.15)]',
      activeIndicator: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      questionActive: 'text-cyan-300',
      numColor: 'text-cyan-400/70',
    },
    purple: {
      badgeBorder: 'border-purple-500/30',
      badgeBg: 'bg-purple-500/10',
      badgeText: 'text-purple-300',
      badgeIcon: 'text-purple-400',
      gradient: 'from-purple-400 via-pink-400 to-cyan-400',
      glow: 'bg-purple-500/10',
      activeBorder: 'border-purple-500/50 shadow-[0_0_25px_rgba(168,85,247,0.15)]',
      activeIndicator: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      questionActive: 'text-purple-300',
      numColor: 'text-purple-400/70',
    },
    rose: {
      badgeBorder: 'border-rose-500/30',
      badgeBg: 'bg-rose-500/10',
      badgeText: 'text-rose-300',
      badgeIcon: 'text-rose-400',
      gradient: 'from-rose-400 via-pink-400 to-purple-400',
      glow: 'bg-rose-500/10',
      activeBorder: 'border-rose-500/50 shadow-[0_0_25px_rgba(244,63,94,0.15)]',
      activeIndicator: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
      questionActive: 'text-rose-300',
      numColor: 'text-rose-400/70',
    },
    emerald: {
      badgeBorder: 'border-emerald-500/30',
      badgeBg: 'bg-emerald-500/10',
      badgeText: 'text-emerald-300',
      badgeIcon: 'text-emerald-400',
      gradient: 'from-emerald-400 via-teal-400 to-cyan-400',
      glow: 'bg-emerald-500/10',
      activeBorder: 'border-emerald-500/50 shadow-[0_0_25px_rgba(16,185,129,0.15)]',
      activeIndicator: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      questionActive: 'text-emerald-300',
      numColor: 'text-emerald-400/70',
    },
    blue: {
      badgeBorder: 'border-blue-500/30',
      badgeBg: 'bg-blue-500/10',
      badgeText: 'text-blue-300',
      badgeIcon: 'text-blue-400',
      gradient: 'from-blue-400 via-cyan-400 to-indigo-400',
      glow: 'bg-blue-500/10',
      activeBorder: 'border-blue-500/50 shadow-[0_0_25px_rgba(59,130,246,0.15)]',
      activeIndicator: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      questionActive: 'text-blue-300',
      numColor: 'text-blue-400/70',
    },
  }[activeTheme] || {
    badgeBorder: 'border-cyan-500/30',
    badgeBg: 'bg-cyan-500/10',
    badgeText: 'text-cyan-300',
    badgeIcon: 'text-cyan-400',
    gradient: 'from-cyan-400 via-blue-400 to-purple-400',
    glow: 'bg-cyan-500/10',
    activeBorder: 'border-cyan-500/50 shadow-[0_0_25px_rgba(6,182,212,0.15)]',
    activeIndicator: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    questionActive: 'text-cyan-300',
    numColor: 'text-cyan-400/70',
  };

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // Structured Schema for SEO
  const schemaData = useMemo(() => {
    if (!data.faqs || data.faqs.length === 0) return null;
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': data.faqs.map((faq) => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer,
        },
      })),
    };
  }, [data.faqs]);

  return (
    <section
      id="faq"
      aria-label={`${displayTitle} Section`}
      className={`${wide ? 'max-w-7xl' : 'max-w-5xl'} mx-auto relative z-10 ${compact ? 'py-8 md:py-10 px-4 sm:px-6' : 'py-16 md:py-24 px-6 md:px-10'} ${className}`}
    >
      {/* Search Engine FAQPage Structured Schema */}
      {showJsonLd && schemaData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      )}

      {/* Ambient Glow */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${compact ? 'w-[420px] h-[260px]' : 'w-[550px] h-[350px]'} ${themeClasses.glow} rounded-full blur-[140px] pointer-events-none -z-10`}
      />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`text-center ${compact ? 'mb-6' : 'mb-12'}`}
      >
        {displayBadge && (
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${themeClasses.badgeBorder} ${themeClasses.badgeBg} ${themeClasses.badgeText} text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-sm shadow-sm`}
          >
            <HelpCircle size={14} className={themeClasses.badgeIcon} />
            <span>{displayBadge}</span>
          </div>
        )}

        <h2 className={`${compact ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-3xl sm:text-4xl md:text-5xl'} font-black text-white tracking-tight leading-tight`}>
          {displayTitle.includes(' ') ? (
            <>
              {displayTitle.substring(0, displayTitle.lastIndexOf(' '))}
              {' '}
              <span className={`bg-gradient-to-r ${themeClasses.gradient} text-transparent bg-clip-text`}>
                {displayTitle.substring(displayTitle.lastIndexOf(' ') + 1)}
              </span>
            </>
          ) : (
            displayTitle
          )}
        </h2>

        {displaySubtitle && (
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mt-3 leading-relaxed">
            {displaySubtitle}
          </p>
        )}
      </motion.div>

      {/* Accordion FAQ List */}
      <div className={compact ? 'space-y-2.5' : 'space-y-4'} role="region" aria-label="FAQ Accordion">
        {data.faqs.map((faq, index) => {
          const isOpen = openId === faq.id;
          const formattedIndex = String(index + 1).padStart(2, '0');

          return (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                isOpen
                  ? `bg-slate-900/90 ${themeClasses.activeBorder}`
                  : 'bg-slate-900/40 border-white/10 hover:border-white/20 hover:bg-slate-900/60'
              } backdrop-blur-md`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
                id={`faq-question-${faq.id}`}
                className={`w-full ${compact ? 'py-3 px-4 sm:px-6' : 'py-5 px-6 sm:px-8'} flex items-center justify-between text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition-colors`}
              >
                <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                  <span className={`font-mono text-xs sm:text-sm font-bold ${themeClasses.numColor} shrink-0 mt-0.5 sm:mt-0`}>
                    {formattedIndex}
                  </span>
                  <span
                    className={`${compact ? 'text-sm sm:text-base' : 'text-base sm:text-lg'} font-semibold tracking-tight transition-colors ${
                      isOpen ? themeClasses.questionActive : 'text-gray-200 hover:text-white'
                    }`}
                  >
                    {faq.question}
                  </span>
                </div>

                <div
                  className={`${compact ? 'w-7 h-7' : 'w-8 h-8'} rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                    isOpen
                      ? `${themeClasses.activeIndicator} rotate-180`
                      : 'border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <ChevronDown size={compact ? 16 : 18} />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className={`${compact ? 'px-4 sm:px-6 pb-4 pt-1' : 'px-6 sm:px-8 pb-6 pt-1'} text-gray-300 text-sm sm:text-base leading-relaxed border-t border-white/5`}>
                      <p className={`${compact ? 'pl-4 sm:pl-6' : 'pl-6 sm:pl-8'} border-l-2 border-cyan-500/40`}>
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Trust & Support Footer Strip */}
      {!hideFooter && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className={`${footerClassName || 'mt-10 p-4 sm:p-5'} rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left`}
        >
          <div className="flex items-center gap-3">
            {!hideFooterIcon && (
              <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <Sparkles size={18} />
              </div>
            )}
            <div>
              <h3 className={`text-sm font-bold text-white ${footerTitleClassName}`}>{footerTitle}</h3>
              <p className="text-xs text-gray-400">{footerDescription}</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap justify-center">
            <a
              href={contactInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 text-xs font-bold transition-all"
            >
              <MessageCircle size={14} />
              <span>WhatsApp Us</span>
            </a>
            <Link
              to="/consultation"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 text-xs font-bold transition-all"
            >
              <span>Book Consultation</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      )}
    </section>
  );
}
