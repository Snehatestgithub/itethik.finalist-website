import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Code2, Cpu, Headset, ShieldCheck } from 'lucide-react';
import { lazy, Suspense, useRef } from 'react';
import EcosystemLaptopFallback from './EcosystemLaptopFallback';
import './TechnologyEcosystem.css';

const EcosystemLaptop = lazy(() => import('./EcosystemLaptop'));

const SOLUTIONS = [
  {
    number: '01',
    title: 'Hardware Engineering',
    description: 'Dependable devices, precision repairs and thoughtfully built systems.',
    detail: 'Computer diagnostics, precision repairs, custom builds and dependable hardware upgrades.',
    icon: Cpu,
    position: 'top-left',
    theme: 'hardware',
  },
  {
    number: '02',
    title: 'Security Solutions',
    description: 'Connected surveillance designed around the way your spaces work.',
    detail: 'CCTV design, installation and security infrastructure tailored to your property.',
    icon: ShieldCheck,
    position: 'top-right',
    theme: 'security',
  },
  {
    number: '03',
    title: 'Digital Development',
    description: 'Useful digital experiences that help your business move forward.',
    detail: 'Responsive websites and digital experiences designed for real business needs.',
    icon: Code2,
    position: 'bottom-left',
    theme: 'digital',
  },
  {
    number: '04',
    title: 'Technical Support',
    description: 'Practical guidance and responsive care, whenever you need it.',
    detail: 'IT maintenance, troubleshooting and hands-on technical assistance when it matters.',
    icon: Headset,
    position: 'bottom-right',
    theme: 'support',
  },
];

export default function TechnologyEcosystem() {
  const shouldReduceMotion = useReducedMotion();
  const stageRef = useRef(null);
  const isStageInView = useInView(stageRef, { amount: 0.18 });
  const shouldLoadLaptop = useInView(stageRef, { amount: 0.01, margin: '320px 0px' });

  return (
    <section className="technology-ecosystem" aria-labelledby="technology-ecosystem-heading">
      <header className="technology-ecosystem-header">
        <div>
          <p className="technology-ecosystem-eyebrow">Connected technology, thoughtfully delivered</p>
          <h2 id="technology-ecosystem-heading">
            One Ecosystem. <span>Multiple Solutions.</span>
          </h2>
        </div>
        <p className="technology-ecosystem-subheading">
          One connected team bringing hardware, security, digital development and support together.
        </p>
      </header>

      <div ref={stageRef} className={`ecosystem-stage${isStageInView ? ' ecosystem-stage-visible' : ''}`}>
        <div className="ecosystem-stage-glow" aria-hidden="true" />
        <div className="ecosystem-circuit-grid" aria-hidden="true" />
        <div className="ecosystem-particles" aria-hidden="true">
          <i /><i /><i /><i /><i /><i /><i />
        </div>

        <svg
          className="ecosystem-circuit-lines"
          viewBox="0 0 1000 560"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="ecosystem-circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="52%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
          <path d="M248 119h78c38 0 50 22 74 47l72 76" />
          <path d="M752 119h-78c-38 0-50 22-74 47l-72 76" />
          <path d="M248 441h78c38 0 50-22 74-47l72-76" />
          <path d="M752 441h-78c-38 0-50-22-74-47l-72-76" />
          <path className="ecosystem-circuit-flow" d="M248 119h78c38 0 50 22 74 47l72 76" />
          <path className="ecosystem-circuit-flow ecosystem-circuit-flow-delayed" d="M752 119h-78c-38 0-50 22-74 47l-72 76" />
          <path className="ecosystem-circuit-flow ecosystem-circuit-flow-delayed" d="M248 441h78c38 0 50-22 74-47l72-76" />
          <path className="ecosystem-circuit-flow" d="M752 441h-78c-38 0-50-22-74-47l-72-76" />
          <circle cx="248" cy="119" r="4" />
          <circle cx="752" cy="119" r="4" />
          <circle cx="248" cy="441" r="4" />
          <circle cx="752" cy="441" r="4" />
        </svg>

        {SOLUTIONS.map(({ number, title, description, detail, icon: Icon, position, theme }, index) => (
          <motion.article
            key={number}
            className={`ecosystem-card ecosystem-card-${position} ecosystem-card-${theme}`}
            tabIndex={0}
            aria-label={`${title}. ${description} Hover or focus to learn more.`}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={shouldReduceMotion ? undefined : {
              rotateX: -4,
              rotateY: position.endsWith('left') ? 4 : -4,
              z: 14,
              scale: 1.025,
            }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : index * 0.12,
              type: 'spring',
              stiffness: 130,
              damping: 28,
            }}
          >
            <div className="ecosystem-card-topline">
              <span className="ecosystem-card-number">{number}</span>
              <span className="ecosystem-card-icon"><Icon size={18} strokeWidth={1.7} /></span>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p className="ecosystem-card-detail">{detail}</p>
          </motion.article>
        ))}

        <motion.div
          className="ecosystem-laptop"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : 0.16 }}
        >
          {shouldLoadLaptop && (
            <Suspense
              fallback={(
                <div
                  className="ecosystem-laptop-scene"
                  role="img"
                  aria-label="ItEthik laptop displaying connected technology solutions"
                >
                  <EcosystemLaptopFallback />
                </div>
              )}
            >
              <EcosystemLaptop isVisible={isStageInView} shouldReduceMotion={shouldReduceMotion} />
            </Suspense>
          )}
        </motion.div>
      </div>
    </section>
  );
}
