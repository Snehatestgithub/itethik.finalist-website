import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart,
  Check,
  Laptop,
  LayoutGrid,
  Monitor,
  Play,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import FaqSection from '../components/FaqSection';
import ChatAssistant from '../components/ChatAssistant';
import './Services.css';

const services = [
  {
    title: 'Maintenance Services',
    icon: Laptop,
    mediaLabel: 'Care that keeps you running',
    video: 'https://videos.pexels.com/video-files/4708340/4708340-uhd_1440_2732_25fps.mp4',
    poster: 'https://images.pexels.com/videos/4708340/anonymous-chip-circuit-computer-4708340.jpeg',
    credit: 'cottonbro studio',
    creditUrl: 'https://www.pexels.com/video/a-person-is-using-a-keyboard-to-play-music-4708340/',
    desc: 'Preventive support for the devices and systems your business depends on.',
    price: 'AMC packages',
    features: ['Computer & laptop care', 'CCTV maintenance', 'Web application updates'],
    link: '/services/maintenance-services',
    actionText: 'Explore maintenance',
  },
  {
    title: 'Computer Services',
    icon: Monitor,
    mediaLabel: 'Built for performance',
    video: 'https://videos.pexels.com/video-files/854969/854969-hd_1920_1080_24fps.mp4',
    poster: 'https://images.pexels.com/videos/854969/free-video-854969.jpg',
    credit: 'Pixabay',
    creditUrl: 'https://www.pexels.com/video/video-of-inside-of-cpu-854969/',
    desc: 'Custom PCs and workstations designed around the way you work and play.',
    price: 'Custom quotes',
    features: ['Custom PC building', 'New desktop PCs', 'Hardware stress testing'],
    link: '/services/computer-services',
    actionText: 'Explore computers',
  },
  {
    title: 'Security Services',
    icon: ShieldCheck,
    mediaLabel: 'A little more peace of mind',
    video: 'https://videos.pexels.com/video-files/38779098/16477666_1920_1080_25fps.mp4',
    poster: 'https://images.pexels.com/videos/38779098/auckland-big-screen-cctv-cctv-feed-38779098.jpeg',
    credit: 'Kiwi and Camera',
    creditUrl: 'https://www.pexels.com/video/high-tech-control-room-for-traffic-monitoring-38779098/',
    desc: 'Thoughtful surveillance and access solutions for your home or workplace.',
    price: 'Custom quote',
    features: ['CCTV installation', 'Intercom setup', 'Access control & alarms'],
    link: '/services/security-services',
    actionText: 'Explore security',
  },
  {
    title: 'Repairing Services',
    icon: Wrench,
    mediaLabel: 'Expert hands, careful repairs',
    video: 'https://videos.pexels.com/video-files/4708372/4708372-uhd_2732_1440_25fps.mp4',
    poster: 'https://images.pexels.com/videos/4708372/pexels-photo-4708372.jpeg',
    credit: 'cottonbro studio',
    creditUrl: 'https://www.pexels.com/video/a-man-is-working-on-a-computer-4708372/',
    desc: 'Clear diagnosis and dependable repairs, from everyday fixes to board-level work.',
    price: 'Custom quote',
    features: ['Laptop repair', 'Chip-level repair', 'Hardware & software fixes'],
    link: '/services/repairing-services',
    actionText: 'Explore repairs',
  },
  {
    title: 'Digital Solutions',
    icon: LayoutGrid,
    mediaLabel: 'Make your next move online',
    video: 'https://videos.pexels.com/video-files/11274341/11274341-uhd_2560_1440_25fps.mp4',
    poster: 'https://images.pexels.com/videos/11274341/code-css-html-javascript-11274341.jpeg',
    credit: 'Raddy',
    creditUrl: 'https://www.pexels.com/video/close-up-of-a-computer-screen-with-javascript-code-11274341/',
    desc: 'Digital experiences and practical tools that help your business move forward.',
    price: 'Custom packages',
    features: ['Custom web development', 'SEO & Google Business', 'Digital business cards'],
    link: '/services/digital-solutions',
    actionText: 'Explore digital',
  },
  {
    title: 'IT Consultancy',
    icon: BarChart,
    mediaLabel: 'A clearer technology roadmap',
    video: 'https://videos.pexels.com/video-files/7683096/7683096-hd_1920_1080_24fps.mp4',
    poster: 'https://images.pexels.com/videos/7683096/pexels-photo-7683096.jpeg',
    credit: 'Mikhail Nilov',
    creditUrl: 'https://www.pexels.com/video/boss-helping-at-work-7683096/',
    desc: 'Straightforward technology planning shaped around your business goals.',
    price: 'Custom quotes',
    features: ['Technology assessment', 'Strategy planning', 'Implementation support'],
    link: '/contact',
    actionText: 'Talk to our team',
  },
];

function ServiceVideo({ service, index }) {
  const mediaRef = useRef(null);
  const videoRef = useRef(null);
  const [isNearView, setIsNearView] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const media = mediaRef.current;
    if (!media || !('IntersectionObserver' in window)) {
      setIsNearView(true);
      setIsInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsNearView(true);
      setIsInView(entry.isIntersecting);
    }, { rootMargin: '240px 0px', threshold: 0.12 });

    observer.observe(media);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) videoRef.current?.pause();
  }, [isInView]);

  const playVideo = () => {
    if (hasError || !videoRef.current) return;
    videoRef.current.play().catch(() => setHasError(true));
  };

  return (
    <div ref={mediaRef} className="service-card__media">
      <img className="service-card__poster" src={service.poster} alt="" loading="lazy" decoding="async" />
      {isNearView && (
        <video
          ref={videoRef}
          className="service-card__video"
          aria-label={`${service.title} video preview`}
          controls
          muted
          loop
          playsInline
          preload="metadata"
          poster={service.poster}
          onPlay={() => {
            setIsPlaying(true);
            setHasError(false);
          }}
          onPause={() => setIsPlaying(false)}
          onError={() => {
            setIsPlaying(false);
            setHasError(true);
          }}
        >
          <source src={service.video} type="video/mp4" />
        </video>
      )}
      {!isPlaying && !hasError && (
        <button
          type="button"
          className="service-card__play"
          aria-label={`Play ${service.title} preview`}
          disabled={!isNearView}
          onClick={playVideo}
        >
          <Play size={18} fill="currentColor" />
        </button>
      )}
      {hasError && <span className="service-card__error" role="status">Preview unavailable</span>}
      <span className="service-card__media-label">{service.mediaLabel}</span>
      <span className="service-card__number" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
      <a
        className="service-card__credit"
        href={service.creditUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Video by ${service.credit} on Pexels`}
      >
        {service.credit} · Pexels
      </a>
    </div>
  );
}

function ServiceCard({ service, index, reducedMotion }) {
  const Icon = service.icon;
  return (
    <motion.article
      className={`service-card service-card--${index + 1}`}
      initial={reducedMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reducedMotion ? 0 : 0.55, delay: reducedMotion ? 0 : (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <ServiceVideo service={service} index={index} />
      <div className="service-card__body">
        <h3><span className="service-card__icon"><Icon size={17} strokeWidth={1.7} /></span>{service.title}</h3>
        <p className="service-card__description">{service.desc}</p>
        <div className="service-card__footer">
          <span className="service-card__price">{service.price}</span>
          <Link to={service.link} className="service-card__link">
            {service.actionText}
            <ArrowUpRight size={16} />
          </Link>
        </div>
        <ul className="service-card__features" aria-label={`${service.title} includes`}>
          {service.features.map((feature) => (
            <li key={feature}><Check size={13} aria-hidden="true" />{feature}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export default function Services() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="services-page">
      <div className="services-page__wash" aria-hidden="true" />
      <div className="services-page__watermark" aria-hidden="true">SERVICES</div>

      <div className="services-page__content">
        <motion.header
          className="services-intro"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            className="services-intro__image"
            src="/images/services-hero-workspace.png"
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            decoding="async"
          />
          <div className="services-intro__copy">
            <h1>Technology.<br /><em>Security. Digital Solutions.</em></h1>
            <p className="services-intro__description">
              One trusted team for your systems, spaces, and digital future.
            </p>
            <a className="services-intro__cta" href="#service-catalogue">
              Explore our services <ArrowRight size={17} />
            </a>
          </div>

          <div className="services-intro__index" aria-hidden="true">01 — 06</div>
        </motion.header>

        <section id="service-catalogue" className="services-catalogue" aria-labelledby="services-heading">
          <div className="services-catalogue__heading">
            <div>
              <p className="services-eyebrow"><span /> Find your next step</p>
              <h2 id="services-heading">One team. Many ways to help.</h2>
            </div>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
                reducedMotion={reducedMotion}
              />
            ))}
          </div>
        </section>

        <div className="services-after-cards">
          <div className="services-after-cards__content">
            <section className="services-promise" aria-label="Our service promise">
              <span className="services-promise__mark">IT</span>
              <div>
                <p className="services-eyebrow"><span /> The ItEthik difference</p>
                <h2>Clear advice. Careful work.<br />Support that stays.</h2>
              </div>
              <Link to="/contact" className="services-promise__link">Let’s talk <ArrowUpRight size={17} /></Link>
            </section>

            <div className="services-faq-shell">
              <FaqSection category="services" />
            </div>
          </div>
        </div>
      </div>
      <ChatAssistant />
    </div>
  );
}
