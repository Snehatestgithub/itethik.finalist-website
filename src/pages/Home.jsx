import React, { useEffect, useMemo, useState, useCallback, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, UploadCloud, X, LoaderCircle, CheckCircle2, AlertCircle, Copy, ExternalLink } from 'lucide-react';
import companyData from '../shared/companyData';
import { TestimonialsColumn } from '../components/ui/testimonials-columns-1';
import ServicesOrbital3D from '../components/ServicesOrbital3D';
import FaqSection from '../components/FaqSection';
import GlowingLinePattern from '../components/GlowingLinePattern';

const { companyInfo, contactInfo, servicesHome } = companyData;

const whyChooseUs = [
  { icon: "⚡", title: "Affordable Pricing", desc: "Quality services at competitive rates" },
  { icon: "🛡️", title: "Reliable Support", desc: "Always available when you need us" },
  { icon: "✅", title: "Ethical Approach", desc: "Transparent, honest, customer-first" },
  { icon: "🎯", title: "Expert Team", desc: "Skilled professionals with years of experience" },
];

const fallbackTestimonials = [
  {
    text: "Repaired my gaming laptop after it wouldn't power on. Quick chip-level diagnosis and replaced the motherboard MOSFET. Saved me buying a costly new board!",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
    name: "Amit Sharma",
    role: "Local Guide · 14 reviews",
    service: "Laptop Repair",
    rating: 5,
    date: "1 week ago",
    likes: 4,
    source: "Google Review",
  },
  {
    text: "Built a custom liquid-cooled workstation for our 3D animation studio. Clean cabling, thermals stay below 65°C, and exceptional performance under heavy renders.",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80",
    name: "Rohan Patel",
    role: "Verified Client",
    service: "Custom PC Build",
    rating: 5,
    date: "2 weeks ago",
    likes: 6,
    source: "Google Review",
  },
  {
    text: "Installed an 8-camera Hikvision IP CCTV system across our warehouse and office. Clean concealed wiring and smooth mobile viewing on all phones.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    name: "Rajesh Kumar",
    role: "Business Owner · 8 reviews",
    service: "CCTV Installation",
    rating: 5,
    date: "3 weeks ago",
    likes: 3,
    source: "Google Review",
  },
  {
    text: "Designed our corporate website with sleek modern UI and fast loading speeds. Our client inquiries increased notably within the first month. Excellent support.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    name: "Zainab Hussain",
    role: "Verified Client",
    service: "Web Development",
    rating: 5,
    date: "1 month ago",
    likes: 5,
    source: "Google Review",
  },
];

const Home = () => {
  const services = servicesHome;
  const heroServicesRef = useRef(null);
  const cardSlotRefs = useRef([]);

  // Framer Motion useScroll targeting the combined Hero & Services section
  const { scrollYProgress } = useScroll({
    target: heroServicesRef,
    offset: ["start start", "end end"]
  });

  // Orchestrate transition progress from orbital hero layout to service cards with slow, fluid scroll response
  // Spans smoothly across the user's journey from hero down to the services grid
  const transitionProgress = useTransform(scrollYProgress, [0.02, 0.48], [0, 1]);
  const smoothProgress = useSpring(transitionProgress, {
    stiffness: 55,
    damping: 30,
    mass: 0.85,
    restDelta: 0.0001
  });

  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [approvedReviews, setApprovedReviews] = useState([]);
  const [submittedReviews, setSubmittedReviews] = useState([]);
  const [isLoadingReviews, setIsLoadingReviews] = useState(true);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    email: '',
    rating: 0,
    message: '',
    consent: false,
  });
  const [reviewErrors, setReviewErrors] = useState({});
  const [selectedReviewFiles, setSelectedReviewFiles] = useState([]);
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  const [reviewSubmissionStatus, setReviewSubmissionStatus] = useState({ type: '', message: '' });
  const [dragActive, setDragActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [reviewSuccessData, setReviewSuccessData] = useState(null);
  const [isReviewCopied, setIsReviewCopied] = useState(false);
  const [copyToastVisible, setCopyToastVisible] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const apiBaseUrl = useMemo(() => {
    return import.meta.env.VITE_API_URL || (import.meta.env.PROD ? 'https://itethik-backend-1.onrender.com' : 'http://localhost:5000');
  }, []);

  const fetchApprovedReviews = useCallback(async () => {
    setIsLoadingReviews(true);
    try {
      const response = await fetch(`${apiBaseUrl}/api/reviews`).catch(() => null);
      if (response && response.ok) {
        const data = await response.json().catch(() => null);
        if (data && data.success) {
          setApprovedReviews(data.reviews || []);
        }
      }
    } catch {
      // Fallback to local reviews if backend is not available
    } finally {
      setIsLoadingReviews(false);
    }
  }, [apiBaseUrl]);

  useEffect(() => {
    let active = true;
    const loadData = async () => {
      if (active) {
        await fetchApprovedReviews();
      }
    };
    loadData();
    return () => {
      active = false;
    };
  }, [fetchApprovedReviews]);

  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const shouldLockScroll = reviewModalOpen || Boolean(selectedImage);

    if (shouldLockScroll) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    }

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [reviewModalOpen, selectedImage]);

  const publicTestimonials = useMemo(() => {
    const mergedReviews = [...approvedReviews, ...submittedReviews];
    const uniqueReviews = mergedReviews.filter((review, index, arr) => {
      const reviewKey = review._id || `${review.name}-${review.message}-${review.createdAt}`;
      return index === arr.findIndex((item) => (item._id || `${item.name}-${item.message}-${item.createdAt}`) === reviewKey);
    });

    const formattedReviews = uniqueReviews.map((review) => {
      const isGoogleReview = review.source === 'google';
      const profilePhoto = isGoogleReview ? (review.profilePhoto || review.authorProfilePhoto || review.googleProfilePhoto || null) : null;
      const reviewImage = isGoogleReview ? profilePhoto : (review.photos?.[0] ? `${apiBaseUrl}${review.photos[0]}` : null);

      return {
        text: review.message,
        image: reviewImage,
        name: review.name,
        role: isGoogleReview ? (review.role || 'Google Review') : 'Verified Customer',
        service: review.service || 'IT Solutions',
        rating: review.rating || 5,
        photos: review.photos || [],
        createdAt: review.createdAt,
        date: 'Recent',
        likes: 3,
        status: review.status,
        source: review.source === 'google' ? 'Google Review' : 'Verified Review',
      };
    });

    const combined = [...formattedReviews, ...fallbackTestimonials];
    return combined.slice(0, 4);
  }, [approvedReviews, submittedReviews, apiBaseUrl]);

  // Distribute the 4 testimonials evenly into 2 columns (2 in each) for a clean, balanced layout
  const firstColumn = useMemo(() => publicTestimonials.filter((_, idx) => idx % 2 === 0), [publicTestimonials]);
  const secondColumn = useMemo(() => publicTestimonials.filter((_, idx) => idx % 2 === 1), [publicTestimonials]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  const resetReviewForm = () => {
    setReviewForm({ name: '', email: '', rating: 0, message: '', consent: false });
    setSelectedReviewFiles([]);
    setReviewErrors({});
  };

  const closeReviewModal = () => {
    setReviewModalOpen(false);
    setReviewSuccessData(null);
    setReviewSubmissionStatus({ type: '', message: '' });
    setIsReviewCopied(false);
    setCopyToastVisible(false);
    setShowConfetti(false);
    resetReviewForm();
  };

  const handleReviewChange = (event) => {
    const { name, value, type, checked } = event.target;
    setReviewForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setReviewErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateReviewForm = () => {
    const errors = {};

    if (!reviewForm.name.trim() || reviewForm.name.trim().length < 3) {
      errors.name = 'Name must be at least 3 characters.';
    }

    if (!reviewForm.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(reviewForm.email)) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!reviewForm.rating) {
      errors.rating = 'Please choose a rating.';
    }

    if (!reviewForm.message.trim() || reviewForm.message.trim().length < 20 || reviewForm.message.trim().length > 1000) {
      errors.message = 'Review must be between 20 and 1000 characters.';
    }

    if (!reviewForm.consent) {
      errors.consent = 'Please confirm your genuine experience.';
    }

    if (selectedReviewFiles.length > 5) {
      errors.files = 'You can upload up to 5 images.';
    }

    selectedReviewFiles.forEach((fileItem, index) => {
      if (fileItem.file.size > 5 * 1024 * 1024) {
        errors.files = `Image ${index + 1} must be 5MB or smaller.`;
      }
    });

    setReviewErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleReviewFiles = (files) => {
    const preparedFiles = Array.from(files || []).filter((file) => file.type.startsWith('image/'));
    const validFiles = preparedFiles.slice(0, 5 - selectedReviewFiles.length).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    if (validFiles.length) {
      setSelectedReviewFiles((prev) => [...prev, ...validFiles]);
    }
  };

  const handleCopyReview = async () => {
    if (!reviewSuccessData?.message) return;

    try {
      await navigator.clipboard.writeText(reviewSuccessData.message);
      setIsReviewCopied(true);
      setCopyToastVisible(true);
      window.setTimeout(() => {
        setIsReviewCopied(false);
        setCopyToastVisible(false);
      }, 2000);
    } catch (error) {
      console.error('Failed to copy review', error);
    }
  };

  const handleOpenGoogleReview = () => {
    const googleReviewUrl = contactInfo.googleReviewUrl || contactInfo.websiteUrl || 'https://search.google.com/local/writereview';
    window.open(googleReviewUrl, '_blank', 'noopener,noreferrer');
  };

  const removeReviewFile = (indexToRemove) => {
    setSelectedReviewFiles((prev) => {
      const updated = prev.filter((_, index) => index !== indexToRemove);
      return updated;
    });
  };

  const handleReviewSubmit = async (event) => {
    event.preventDefault();
    if (!validateReviewForm()) return;

    setIsSubmittingReview(true);
    setReviewSubmissionStatus({ type: '', message: '' });

    const payload = new FormData();
    payload.append('name', reviewForm.name.trim());
    payload.append('email', reviewForm.email.trim());
    payload.append('rating', reviewForm.rating);
    payload.append('message', reviewForm.message.trim());
    payload.append('consent', reviewForm.consent);
    selectedReviewFiles.forEach((fileItem) => payload.append('photos', fileItem.file));

    try {
      const response = await fetch(`${apiBaseUrl}/api/reviews`, {
        method: 'POST',
        body: payload,
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Unable to submit review.');
      }

      setReviewSubmissionStatus({ type: 'success', message: data.message || 'Thank you for sharing your experience!' });
      const submittedReview = {
        ...data.review,
        name: data.review?.name || reviewForm.name.trim(),
        message: data.review?.message || reviewForm.message.trim(),
        rating: data.review?.rating || reviewForm.rating,
        photos: data.review?.photos || [],
        status: 'Approved',
        createdAt: data.review?.createdAt || new Date().toISOString(),
      };
      setSubmittedReviews((prev) => [submittedReview, ...prev]);
      setReviewSuccessData(submittedReview);
      setShowConfetti(true);
      setReviewForm({ name: '', email: '', rating: 0, message: '', consent: false });
      setSelectedReviewFiles([]);
      setReviewErrors({});
      window.setTimeout(() => setShowConfetti(false), 2200);
      await fetchApprovedReviews();
    } catch (error) {
      setReviewSubmissionStatus({ type: 'error', message: error.message || 'Unable to submit review.' });
    } finally {
      setIsSubmittingReview(false);
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-white overflow-x-hidden relative">
      {/* --- COMBINED HERO & SERVICES WRAPPER FOR SCROLL TRANSITION --- */}
      <div ref={heroServicesRef} className="relative overflow-visible">
        {/* --- HERO SECTION --- */}
        <section className="relative pb-16 px-6 md:px-10 overflow-visible min-h-[85vh] flex items-center z-30">
          {/* Futuristic Background Elements */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.12]"></div>
            
            {/* Glowing Orbs */}
            <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] animate-pulse animation-delay-2000"></div>

            {/* Large Subtle Transparent itethik Logo Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[520px] md:w-[740px] lg:w-[880px] opacity-[0.06] pointer-events-none select-none flex items-center justify-center -z-10">
              <motion.img
                src="/logo.png"
                alt="itethik logo watermark"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 0.07, scale: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="w-full h-auto object-contain filter invert drop-shadow-[0_0_90px_rgba(6,182,212,0.35)]"
              />
            </div>

            {/* Moving Cyber Lines */}
            <div className="absolute inset-0 opacity-[0.05]">
              <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path d="M0,200 L1000,800" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1" fill="none" className="animate-pulse" />
                <path d="M0,800 L1000,200" stroke="rgba(168, 85, 247, 0.5)" strokeWidth="1" fill="none" className="animate-pulse animation-delay-2000" />
              </svg>
            </div>

            {/* Top Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#020617] to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 w-full">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 w-full lg:w-1/2"
            >
              <motion.div 
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
                className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-sm"
              >
                Premium IT Solutions
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                className="text-5xl md:text-6xl lg:text-8xl font-black leading-[1] mb-6 text-white tracking-tight animate-glitch-text"
              >
                Smart IT <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">Solutions</span> <br />
                <span className="text-3xl md:text-5xl font-bold text-gray-400">for Modern Businesses</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
                className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed font-medium"
              >
                We deliver high-performance hardware repairs, professional CCTV installation, and bespoke IT solutions with an ethical, client-first approach.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
                className="flex gap-4 flex-wrap mb-16"
              >
                <Link to="/services" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-2xl font-black text-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all transform hover:-translate-y-1 flex items-center gap-3 group">
                  Get Started 
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="border border-white/10 bg-white/5 backdrop-blur-md text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-3">
                  Contact Us
                </Link>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10 relative"
              >
                <motion.div variants={itemVariants} className="flex flex-col items-start gap-2">
                  <h3 className="text-4xl font-black text-white">1500+</h3>
                  <p className="text-cyan-500 text-[10px] font-black uppercase tracking-[0.15em]">Clients</p>
                </motion.div>
                <motion.div variants={itemVariants} className="flex flex-col items-start gap-2">
                  <h3 className="text-4xl font-black text-white">1500+</h3>
                  <p className="text-blue-500 text-[10px] font-black uppercase tracking-[0.15em]">Projects</p>
                </motion.div>
                <motion.div variants={itemVariants} className="flex flex-col items-start gap-2">
                  <h3 className="text-4xl font-black text-white">4+</h3>
                  <p className="text-purple-500 text-[10px] font-black uppercase tracking-[0.15em]">Years</p>
                </motion.div>
                <motion.div variants={itemVariants} className="flex flex-col items-start gap-2">
                  <h3 className="text-4xl font-black text-white">24/7</h3>
                  <p className="text-cyan-500 text-[10px] font-black uppercase tracking-[0.15em]">Support</p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Column - Premium 3D Orbiting Services Animation with Scroll Transition */}
            <div className="flex-1 w-full lg:w-1/2 relative h-[500px] sm:h-[580px] md:h-[640px] lg:h-[680px] flex items-center justify-center -mt-6 sm:-mt-10 lg:-mt-12 xl:-mt-14 z-20 overflow-visible">
              <div className="relative w-full flex items-center justify-center overflow-visible">
                <ServicesOrbital3D cardSlotRefs={cardSlotRefs} scrollProgress={smoothProgress} />
              </div>
            </div>
          </div>
        </section>

        {/* --- SERVICES SECTION --- */}
        <section className="py-20 px-4 sm:px-6 md:px-10 max-w-[1500px] mx-auto relative z-10 overflow-visible">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 relative z-10"
          >
            <h2 className="text-5xl font-bold mb-4">Our Services</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-cyan-500 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {companyInfo.servicesSectionIntro}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 relative z-10 min-h-[310px] sm:min-h-[330px]">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => (cardSlotRefs.current[index] = el)}
                className="min-h-[310px] sm:min-h-[330px] w-full relative rounded-2xl border border-slate-800/80 bg-slate-900/50 shadow-xl will-change-transform pointer-events-none overflow-hidden"
              >
                {/* Lightweight Skeleton Screen Placeholder */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.07, ease: 'easeOut' }}
                  className="h-full w-full p-5 sm:p-6 flex flex-col justify-between pointer-events-none select-none relative"
                >
                  {/* Subtle Shimmer Ray */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full animate-shimmer pointer-events-none" />

                  <div>
                    {/* Header: Skeleton Icon + Slot Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-slate-800/90 border border-slate-700/60 flex items-center justify-center animate-pulse shadow-inner">
                        <div className="w-5 h-5 rounded-md bg-cyan-400/25" />
                      </div>
                      <div className="h-5 w-16 rounded-full bg-slate-800/70 border border-slate-700/50 animate-pulse" />
                    </div>

                    {/* Title Skeleton */}
                    <div className="mb-3 space-y-1.5">
                      <div className="h-5 w-4/5 rounded-md bg-slate-800/90 animate-pulse" />
                      <div className="h-1 w-10 rounded-full bg-cyan-500/40" />
                    </div>

                    {/* Description Skeleton Lines */}
                    <div className="space-y-2 mb-4">
                      <div className="h-3.5 w-full rounded bg-slate-800/60 animate-pulse" />
                      <div className="h-3.5 w-[92%] rounded bg-slate-800/50 animate-pulse" />
                      <div className="h-3.5 w-[75%] rounded bg-slate-800/40 animate-pulse" />
                    </div>
                  </div>

                  {/* Button Skeleton */}
                  <div className="w-full h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between px-4 animate-pulse mt-auto">
                    <div className="h-3.5 w-24 rounded bg-slate-700/70" />
                    <div className="w-4 h-4 rounded-full bg-cyan-400/30" />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* --- WHY CHOOSE US --- */}
      <section className="relative overflow-hidden py-20 px-6 md:px-10 bg-white/5 border-y border-white/10">
        <GlowingLinePattern color="cyan" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">Why Choose ITETHIK?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're committed to delivering excellence with integrity at every step.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 bg-glass rounded-2xl border-gradient group hover:-translate-y-2 transition-transform duration-300 text-center relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors"></div>
                <div className="text-5xl mb-6 relative z-10">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white relative z-10">{item.title}</h3>
                <p className="text-gray-400 text-sm relative z-10 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="bg-background py-24 relative px-4 sm:px-6 md:px-10 max-w-7xl mx-auto border-y border-white/10 mt-20 overflow-hidden">
        {/* Ambient atmospheric glows */}
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
              What Our Clients Say
            </h2>
            <p className="text-center mt-5 text-gray-400">
              Real feedback from businesses we've helped grow and succeed.
            </p>
          </motion.div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setReviewModalOpen(true)}
              className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-400 transition-all duration-200 hover:-translate-y-1 hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]"
            >
              <span className="flex items-center gap-2">
                <Star size={16} className="fill-cyan-400" /> Write a Review
              </span>
            </button>
          </div>

          <div className="mt-12 flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[640px] overflow-hidden w-full">
            {isLoadingReviews ? (
              <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 py-16 text-sm text-gray-400 w-full">
                <LoaderCircle className="animate-spin text-cyan-400 mr-2.5" size={20} />
                Loading client reviews...
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
                <TestimonialsColumn testimonials={firstColumn} duration={20} onOpenImage={setSelectedImage} />
                <TestimonialsColumn testimonials={secondColumn} duration={24} onOpenImage={setSelectedImage} />
              </div>
            )}
          </div>
        </div>
      </section>

      {reviewModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8 backdrop-blur-sm" onClick={closeReviewModal}>
          <div className="relative w-full max-w-3xl max-h-[calc(100vh-2rem)] overflow-y-auto overscroll-contain rounded-[32px] border border-white/10 bg-[#020617] p-6 shadow-[0_0_50px_rgba(6,182,212,0.15)] md:p-8" onClick={(event) => event.stopPropagation()}>
            <button onClick={closeReviewModal} className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-gray-300 transition hover:text-white">
              <X size={18} />
            </button>

            {reviewSuccessData ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="space-y-6"
              >
                <div className="relative overflow-hidden rounded-[28px] border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10 p-6 md:p-8">
                  {showConfetti ? (
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                      {Array.from({ length: 18 }).map((_, index) => (
                        <span
                          key={index}
                          className="absolute top-0 h-3 w-2 rounded-full bg-cyan-300/80"
                          style={{
                            left: `${8 + index * 5}%`,
                            animation: `fall 1.8s linear forwards`,
                            animationDelay: `${index * 0.06}s`,
                          }}
                        />
                      ))}
                    </div>
                  ) : null}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                      className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300"
                    >
                      <CheckCircle2 size={36} className="text-emerald-400" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-white">🎉 Thank You For Your Review!</h3>
                    <p className="mt-3 max-w-2xl text-sm text-gray-300 md:text-base">
                      Your review has been successfully published on the ItEthik website.
                    </p>
                    <p className="mt-2 max-w-2xl text-sm text-gray-400">
                      Your feedback helps us improve our services and helps future customers make informed decisions.
                    </p>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-[0_0_30px_rgba(6,182,212,0.08)]"
                >
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Star size={16} className="fill-cyan-400" />
                    <span className="text-sm font-semibold uppercase tracking-[0.2em]">Your Review</span>
                  </div>
                  <div className="mt-4 rounded-[24px] border border-white/10 bg-[#030b1d]/80 p-5 text-left">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-1 text-cyan-300">
                          {Array.from({ length: reviewSuccessData.rating || 5 }).map((_, index) => (
                            <Star key={index} size={14} className="fill-cyan-400 text-cyan-400" />
                          ))}
                        </div>
                        <h4 className="mt-2 text-xl font-semibold text-white">{reviewSuccessData.name}</h4>
                        <p className="mt-1 text-sm text-cyan-400">{reviewSuccessData.service || 'Laptop Repair'}</p>
                      </div>
                      <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                        Published
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-gray-300">“{reviewSuccessData.message}”</p>
                    {reviewSuccessData.photos?.length ? (
                      <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3">
                        {reviewSuccessData.photos.map((photo, index) => (
                          <button key={`${photo}-${index}`} type="button" onClick={() => setSelectedImage(photo)} className="overflow-hidden rounded-2xl border border-white/10">
                            <img src={photo.startsWith('http') ? photo : `${apiBaseUrl}${photo}`} alt={`Review photo ${index + 1}`} className="h-24 w-full object-cover" />
                          </button>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="rounded-[28px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-5"
                >
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Star size={16} className="fill-cyan-400" />
                    <span className="text-sm font-semibold uppercase tracking-[0.2em]">Help More People Discover ItEthik</span>
                  </div>
                  <p className="mt-3 text-sm text-gray-300">
                    Thank you for taking the time to share your experience. If you enjoyed our service, would you also like to post the same review on our official Google Business Profile?
                  </p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={handleCopyReview}
                      className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-3 text-sm font-semibold text-cyan-300 transition hover:-translate-y-0.5 hover:bg-cyan-500/20"
                    >
                      <Copy size={16} /> {isReviewCopied ? '✅ Review Copied!' : '📋 Copy My Review'}
                    </button>
                    <button
                      type="button"
                      onClick={handleOpenGoogleReview}
                      className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-90"
                    >
                      <ExternalLink size={16} /> ⭐ Post on Google
                    </button>
                  </div>
                  {copyToastVisible ? (
                    <div className="mt-3 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300">
                      Review copied successfully! You can now paste it on Google.
                    </div>
                  ) : null}

                  <div className="mt-6 rounded-2xl border border-white/10 bg-[#030b1d]/70 p-4">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">It takes less than 30 seconds</h4>
                    <ol className="mt-3 space-y-2 text-sm text-gray-300">
                      <li>1. Click <span className="font-semibold text-white">Copy My Review</span></li>
                      <li>2. Click <span className="font-semibold text-white">Post on Google</span></li>
                      <li>3. Sign in to your Google account if needed</li>
                      <li>4. Paste your review</li>
                      <li>5. Click <span className="font-semibold text-white">Post</span></li>
                    </ol>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <>
                <div className="mb-6">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    <Star size={14} className="fill-cyan-400" /> New Review
                  </div>
                  <h3 className="text-2xl font-bold text-white">Share your experience with ItEthik</h3>
                  <p className="mt-2 text-sm text-gray-400">Your review will be published directly on the website once submitted.</p>
                </div>

                {reviewSubmissionStatus.message && reviewSubmissionStatus.type === 'error' ? (
                  <div className="mb-4 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    <span className="flex items-center gap-2"><AlertCircle size={16} /> {reviewSubmissionStatus.message}</span>
                  </div>
                ) : null}

                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm text-gray-400">Customer Name</label>
                      <input name="name" value={reviewForm.name} onChange={handleReviewChange} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none" placeholder="Your name" />
                      {reviewErrors.name ? <p className="mt-2 text-sm text-red-300">{reviewErrors.name}</p> : null}
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-gray-400">Email Address</label>
                      <input name="email" type="email" value={reviewForm.email} onChange={handleReviewChange} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none" placeholder="you@example.com" />
                      {reviewErrors.email ? <p className="mt-2 text-sm text-red-300">{reviewErrors.email}</p> : null}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-400">Rating</label>
                    <div className="flex items-center gap-2">
                      {Array.from({ length: 5 }, (_, index) => {
                        const ratingValue = index + 1;
                        return (
                          <button key={ratingValue} type="button" onClick={() => setReviewForm((prev) => ({ ...prev, rating: ratingValue }))} className="rounded-full p-1 text-gray-400 transition hover:text-cyan-400">
                            <Star size={24} className={ratingValue <= reviewForm.rating ? 'fill-cyan-400 text-cyan-400' : 'text-gray-400'} />
                          </button>
                        );
                      })}
                    </div>
                    {reviewErrors.rating ? <p className="mt-2 text-sm text-red-300">{reviewErrors.rating}</p> : null}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-400">Review Message</label>
                    <textarea name="message" value={reviewForm.message} onChange={handleReviewChange} rows={5} maxLength={1000} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none" placeholder="Tell us about your experience with ItEthik..." />
                    <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                      <span>{reviewErrors.message ? <span className="text-red-300">{reviewErrors.message}</span> : 'Minimum 20 characters'}</span>
                      <span>{reviewForm.message.length}/1000</span>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-400">Upload Service Photos</label>
                    <div
                      className={`rounded-3xl border border-dashed p-4 transition ${dragActive ? 'border-cyan-400 bg-cyan-500/10' : 'border-white/10 bg-white/5'}`}
                      onDragOver={(event) => { event.preventDefault(); setDragActive(true); }}
                      onDragLeave={() => setDragActive(false)}
                      onDrop={(event) => { event.preventDefault(); setDragActive(false); handleReviewFiles(event.dataTransfer.files); }}
                    >
                      <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-[#030b1d] px-4 py-8 text-center">
                        <UploadCloud size={24} className="text-cyan-400" />
                        <p className="text-sm text-gray-300">Drag and drop your photos here, or</p>
                        <label className="cursor-pointer rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white">
                          Browse Files
                          <input type="file" accept="image/jpeg,image/png,image/webp" multiple className="hidden" onChange={(event) => handleReviewFiles(event.target.files)} />
                        </label>
                        <p className="text-xs text-gray-500">Up to 5 images • JPG, JPEG, PNG, WEBP • Max 5MB each</p>
                      </div>
                    </div>
                    {reviewErrors.files ? <p className="mt-2 text-sm text-red-300">{reviewErrors.files}</p> : null}

                    {selectedReviewFiles.length ? (
                      <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
                        {selectedReviewFiles.map((fileItem, index) => (
                          <div key={`${fileItem.file.name}-${index}`} className="relative overflow-hidden rounded-2xl border border-white/10">
                            <img src={fileItem.preview} alt={`Preview ${index + 1}`} className="h-24 w-full object-cover" />
                            <button type="button" onClick={() => removeReviewFile(index)} className="absolute right-2 top-2 rounded-full bg-black/70 p-1 text-white">
                              <X size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <input type="checkbox" name="consent" checked={reviewForm.consent} onChange={handleReviewChange} className="mt-1 h-4 w-4 rounded border-white/20 bg-transparent" />
                    <label className="text-sm text-gray-300">I confirm that this review is based on my genuine experience with ItEthik and that the uploaded photos belong to the service provided.</label>
                  </div>
                  {reviewErrors.consent ? <p className="text-sm text-red-300">{reviewErrors.consent}</p> : null}

                  <button type="submit" disabled={isSubmittingReview} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70">
                    {isSubmittingReview ? <><LoaderCircle size={16} className="animate-spin" /> Submitting...</> : <><CheckCircle2 size={16} /> Submit Review</>}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      ) : null}

      {selectedImage ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4 py-8" onClick={() => setSelectedImage(null)}>
          <div className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#020617] p-2" onClick={(event) => event.stopPropagation()}>
            <button onClick={() => setSelectedImage(null)} className="absolute right-3 top-3 rounded-full bg-black/60 p-2 text-white">
              <X size={20} />
            </button>
            <img src={selectedImage.startsWith('http') ? selectedImage : `${apiBaseUrl}${selectedImage}`} alt="Review preview" className="max-h-[80vh] w-full rounded-2xl object-contain" />
          </div>
        </div>
      ) : null}

      {/* --- FAQ SECTION (COMPANY LEVEL) --- */}
      <FaqSection category="company" hideFooter={true} badge="" subtitle="" />

      {/* --- READY TO GET STARTED SECTION (EDGE-TO-EDGE THIN SLIM RECTANGLE - SIMPLE CLEAN THEME) --- */}
      <section className="py-6 sm:py-8 w-full relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative w-full rounded-none"
        >
          {/* Thin, Simple Edge-to-Edge Rectangular Bar */}
          <div className="relative w-full bg-slate-900/60 backdrop-blur-md border-y border-slate-800 px-4 sm:px-8 md:px-12 py-5 sm:py-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
              {/* Text Block */}
              <div className="text-center lg:text-left flex-1 max-w-3xl">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white mb-1.5">
                  Ready to Get Started?
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl">
                  {companyInfo.ctaDescription}
                </p>
              </div>

              {/* Action Buttons (Simple, elegant, unexaggerated) */}
              <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm transition-colors duration-200 whitespace-nowrap"
                >
                  <span>Contact Us</span>
                  <ArrowRight size={15} />
                </Link>

                <a
                  href={contactInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-medium text-xs sm:text-sm transition-colors duration-200 whitespace-nowrap"
                >
                  <svg className="w-3.5 h-3.5 fill-[#25D366]" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.149-.672.15-.199.297-.768.967-.941 1.166-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.199-.297.298-.497.099-.199.05-.373-.025-.522-.075-.149-.672-1.624-.921-2.224-.242-.58-.487-.502-.672-.512l-.573-.01c-.199 0-.522.074-.795.373s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.199 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.874.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      {/* --- SUBTLE SLOW-MOVING RADIAL GRADIENT BLOB (CREATIVE VISUAL ANCHOR) --- */}
      <div className="absolute bottom-0 left-0 right-0 h-[650px] overflow-hidden pointer-events-none -z-10 select-none">
        {/* Primary slowly undulating radial blob */}
        <motion.div
          animate={{
            x: ['-12%', '14%', '-8%', '10%', '-12%'],
            y: ['0%', '-20%', '8%', '-14%', '0%'],
            scale: [1, 1.15, 0.96, 1.1, 1],
            rotate: [0, 35, -25, 45, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
          className="absolute -bottom-44 left-1/2 -translate-x-1/2 w-[720px] sm:w-[960px] lg:w-[1250px] h-[520px] sm:h-[620px] rounded-full blur-[110px] sm:blur-[140px] opacity-[0.16]"
          style={{
            background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.42) 0%, rgba(147, 51, 234, 0.28) 42%, rgba(59, 130, 246, 0.12) 68%, transparent 82%)',
          }}
        />

        {/* Secondary gentle floating counter-accent for subtle organic depth */}
        <motion.div
          animate={{
            x: ['8%', '-15%', '12%', '-6%', '8%'],
            y: ['-8%', '12%', '-15%', '6%', '-8%'],
            scale: [0.95, 1.08, 0.98, 1.12, 0.95],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute -bottom-28 left-1/3 -translate-x-1/2 w-[480px] sm:w-[680px] h-[380px] rounded-full blur-[120px] opacity-[0.11]"
          style={{
            background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.35) 0%, rgba(6, 182, 212, 0.18) 50%, transparent 75%)',
          }}
        />
      </div>
    </div>
  );
};

export default Home;
