import React, { useEffect, useRef, useState } from 'react';
import { Headset, MessageSquareText, ScanSearch, Wrench } from 'lucide-react';
import './HowWeWork.css';

const WORK_STAGES = [
  {
    title: 'UNDERSTAND',
    description: 'We understand your requirements and challenges.',
    icon: MessageSquareText,
  },
  {
    title: 'DIAGNOSE',
    description: 'We identify the issue and determine the right approach.',
    icon: ScanSearch,
  },
  {
    title: 'EXECUTE',
    description: 'We implement the right technical solution with precision.',
    icon: Wrench,
  },
  {
    title: 'MAINTAIN',
    description: 'We test the results and provide ongoing maintenance as agreed.',
    icon: Headset,
  },
];

export default function HowWeWork() {
  const sectionRef = useRef(null);
  const wasInViewRef = useRef(false);
  const [isInView, setIsInView] = useState(
    () => typeof window === 'undefined' || !('IntersectionObserver' in window)
  );
  const [runId, setRunId] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    if (!('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const entered = entry.isIntersecting;
        setIsInView(entered);

        if (entered && !wasInViewRef.current) {
          setRunId((current) => current + 1);
        }
        wasInViewRef.current = entered;
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="how-we-work my-20 sm:my-28">
      <header className="mb-9 text-center sm:mb-12">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
          The ItEthik Process
        </p>
        <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
          How We <span className="text-cyan-200">Work</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
          From understanding the challenge to delivering the solution.
        </p>
      </header>

      <div className="how-we-work-scroll">
        <div
          key={runId}
          className={`how-we-work-track${isInView ? ' is-running' : ''}`}
          aria-label="Our four-stage process"
        >
          <svg
            className="how-we-work-connectors"
            viewBox="0 0 1200 280"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path className="how-we-work-rail" d="M276 112H308 M584 112H616 M892 112H924" />
            <path className="how-we-work-energy how-we-work-energy-1" d="M276 112H308" pathLength="100" />
            <path className="how-we-work-energy how-we-work-energy-2" d="M584 112H616" pathLength="100" />
            <path className="how-we-work-energy how-we-work-energy-3" d="M892 112H924" pathLength="100" />
            <path className="how-we-work-travel" d="M138 112H1062" pathLength="100" />
          </svg>

          <ol className="how-we-work-stages">
            {WORK_STAGES.map(({ title, description, icon: Icon }, index) => (
              <li className={`how-we-work-stage how-we-work-stage-${index + 1}`} key={title}>
                <svg
                  className="how-we-work-outline"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <rect
                    className={`how-we-work-outline-path how-we-work-outline-path-${index + 1}`}
                    x="1"
                    y="1"
                    width="98"
                    height="98"
                    rx="5"
                    pathLength="100"
                  />
                </svg>
                <div className="how-we-work-stage-content">
                  <div className="how-we-work-stage-topline">
                    <span className="how-we-work-number">0{index + 1}</span>
                    <Icon className="how-we-work-icon" size={22} strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <p className="how-we-work-scroll-hint" aria-hidden="true">Scroll to explore the process</p>
    </section>
  );
}
