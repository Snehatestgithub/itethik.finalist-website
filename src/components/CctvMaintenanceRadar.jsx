import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import centralCamera from '../assets/images/cctv-real-ptz-camera-01.jpg';
import clearFootage from '../assets/images/cctv-featured-footage.png';
import recordingUnit from '../assets/images/cctv-nvr-recorder.jpg';
import faultInspection from '../assets/images/cctv-featured-cameras.png';
import securityCoverage from '../assets/images/security-surveillance-camera-pair.png';

const benefits = [
  {
    number: '01',
    title: 'Clear Footage',
    description: 'Keep camera lenses clean for clear, usable footage.',
    image: clearFootage,
    alt: 'Live CCTV footage displayed across a security monitor',
    placement: 'xl:left-1/2 xl:top-[calc(50%-400px)] xl:-translate-x-1/2 xl:-translate-y-1/2',
    marker: 'left-1/2 top-0 -translate-x-1/2 -translate-y-1/2',
  },
  {
    number: '02',
    title: 'Reliable Recording',
    description: 'Keep the network video recorder ready to save every feed.',
    image: recordingUnit,
    alt: 'Network video recorder used to store security camera recordings',
    placement: 'xl:left-[calc(50%+405px)] xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2',
    marker: 'right-0 top-1/2 translate-x-1/2 -translate-y-1/2',
  },
  {
    number: '03',
    title: 'Early Fault Detection',
    description: 'Spot camera, cable and connection issues before they grow.',
    image: faultInspection,
    alt: 'CCTV cameras, cables and components laid out for inspection',
    placement: 'xl:left-1/2 xl:top-[calc(50%+400px)] xl:-translate-x-1/2 xl:-translate-y-1/2',
    marker: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
  },
  {
    number: '04',
    title: 'Reliable Security Coverage',
    description: 'Maintain dependable camera coverage and reduce blind spots.',
    image: securityCoverage,
    alt: 'Two installed CCTV cameras providing building coverage',
    placement: 'xl:left-[calc(50%-405px)] xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2',
    marker: 'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2',
  },
];

const cycleDuration = 24000;
const initialSweepAngle = 315;

function CameraRadar({ sweepRef, activeIndex }) {
  return (
    <div className="relative isolate h-[280px] w-[280px] sm:h-[330px] sm:w-[330px] lg:h-[420px] lg:w-[420px]">
      <div aria-hidden="true" className="absolute inset-[-14%] rounded-full bg-rose-700/15 blur-3xl" />
      <div aria-hidden="true" className="absolute inset-0 rounded-full border border-rose-300/30 shadow-[0_0_42px_rgba(244,63,94,0.12),inset_0_0_32px_rgba(190,18,60,0.12)]" />
      <div aria-hidden="true" className="absolute inset-[12%] rounded-full border border-rose-200/20" />
      <div aria-hidden="true" className="absolute inset-[25%] rounded-full border border-rose-200/15" />
      <div aria-hidden="true" className="absolute inset-[38%] rounded-full border border-rose-200/10" />
      <div aria-hidden="true" className="absolute inset-x-0 top-1/2 border-t border-rose-200/10" />
      <div aria-hidden="true" className="absolute inset-y-0 left-1/2 border-l border-rose-200/10" />

      <div
        ref={sweepRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 rounded-full will-change-transform"
        style={{
          transform: 'rotate(0deg)',
          background: 'conic-gradient(from -2deg, rgba(251,113,133,0.56) 0deg, rgba(244,63,94,0.2) 28deg, transparent 52deg 360deg)',
          maskImage: 'radial-gradient(circle, transparent 0%, black 2%, black 100%)',
          WebkitMaskImage: 'radial-gradient(circle, transparent 0%, black 2%, black 100%)',
        }}
      >
        <span className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 bg-gradient-to-t from-rose-200/90 to-rose-300/10 shadow-[0_0_8px_rgba(251,113,133,0.9)]" />
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-100 shadow-[0_0_12px_4px_rgba(251,113,133,0.9)]" />
      </div>

      {benefits.map((benefit, index) => {
        const active = index === activeIndex;
        return (
          <span
            key={benefit.number}
            aria-hidden="true"
            className={`absolute z-30 h-3.5 w-3.5 rounded-full border transition-all duration-500 ${benefit.marker} ${active ? 'scale-125 border-rose-100 bg-rose-300 shadow-[0_0_18px_6px_rgba(251,113,133,0.7)]' : 'border-rose-200/55 bg-[#531021] shadow-[0_0_10px_rgba(244,63,94,0.24)]'}`}
          />
        );
      })}

      <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-600/20 blur-2xl sm:h-[220px] sm:w-[220px] lg:h-[270px] lg:w-[270px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-[174px] w-[174px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full drop-shadow-[0_18px_28px_rgba(0,0,0,0.55)] [mask-image:radial-gradient(ellipse_68%_68%_at_50%_50%,#000_62%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_68%_68%_at_50%_50%,#000_62%,transparent_100%)] sm:h-[202px] sm:w-[202px] lg:h-[242px] lg:w-[242px]">
        <img
          src={centralCamera}
          alt=""
          className="h-full w-full object-cover object-center brightness-[0.82] contrast-[1.08]"
        />
      </div>
    </div>
  );
}

function BenefitPhoto({ benefit, active }) {
  return (
    <motion.article
      aria-current={active ? 'true' : undefined}
      initial={{ opacity: 0, y: 22, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-[26px] border bg-[#21070e]/90 p-3 shadow-[0_18px_55px_rgba(0,0,0,0.38)] backdrop-blur-sm transition-[border-color,box-shadow,transform] duration-700 xl:w-[310px] ${active ? 'border-rose-300/65 shadow-[0_0_46px_rgba(244,63,94,0.26),0_18px_55px_rgba(0,0,0,0.42)]' : 'border-rose-100/15 hover:-translate-y-1 hover:border-rose-200/35'}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-[#10050a]">
        <img
          src={benefit.image}
          alt={benefit.alt}
          className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035] ${active ? 'scale-[1.025]' : ''}`}
        />
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17050a]/80 via-transparent to-transparent transition-opacity duration-700 ${active ? 'opacity-70' : 'opacity-45'}`} />
        <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-[#17050a]/75 px-2.5 py-1 font-mono text-[10px] tracking-[0.16em] text-rose-100 backdrop-blur-md">
          {benefit.number} <span className="text-rose-300/80">/ 04</span>
        </div>
        {active && <span aria-hidden="true" className="absolute bottom-3 right-3 h-2.5 w-2.5 animate-pulse rounded-full bg-rose-200 shadow-[0_0_16px_5px_rgba(251,113,133,0.7)]" />}
      </div>
      <div className="px-2 pb-2 pt-4">
        <h3 className="text-base font-semibold leading-tight text-white sm:text-lg">{benefit.title}</h3>
        <p className="mt-1.5 text-xs leading-5 text-rose-50/70 sm:text-sm">{benefit.description}</p>
      </div>
    </motion.article>
  );
}

export default function CctvMaintenanceRadar() {
  const sweepRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activatedMask, setActivatedMask] = useState(0);
  const visibleMask = activatedMask;
  const visibleActiveIndex = activeIndex;

  useEffect(() => {
    const sweep = sweepRef.current;
    if (!sweep) return undefined;

    let startTime;
    let frameId;
    let previousIndex = Math.floor(initialSweepAngle / 90);
    const animate = (now) => {
      startTime ??= now;
      const angle = (((now - startTime) % cycleDuration) / cycleDuration * 360 + initialSweepAngle) % 360;
      sweep.style.transform = `rotate(${angle}deg)`;

      const nextIndex = Math.floor(angle / 90);
      if (nextIndex !== previousIndex) {
        previousIndex = nextIndex;
        setActiveIndex(nextIndex);
        setActivatedMask((current) => current | (1 << nextIndex));
      }
      frameId = window.requestAnimationFrame(animate);
    };

    sweep.style.transform = `rotate(${initialSweepAngle}deg)`;
    frameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="relative left-1/2 isolate my-0 w-screen -translate-x-1/2 overflow-hidden border-y border-rose-400/10 bg-[#17050a] py-16 sm:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(127,29,29,0.28),transparent_68%),linear-gradient(120deg,#17050a_0%,#2b0710_48%,#1c050b_100%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Why CCTV Maintenance Matters</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-rose-50/75 sm:text-base">
            Your CCTV system does more than capture footage. Regular maintenance helps keep every camera, connection and recording device working reliably.
          </p>
        </header>

        <div className="relative mx-auto mt-10 grid max-w-3xl grid-cols-1 items-center gap-6 sm:grid-cols-2 sm:gap-8 xl:mt-12 xl:block xl:h-[1140px] xl:max-w-[1400px]">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 hidden xl:block">
            {benefits.map((benefit, index) => (
              <span
                key={benefit.number}
                className={`absolute transition-all duration-700 ${visibleActiveIndex === index ? 'bg-gradient-to-r from-rose-300/70 to-rose-500/10 shadow-[0_0_14px_rgba(251,113,133,0.65)]' : 'bg-rose-200/20'}`}
                style={index === 0
                  ? { left: '50%', top: 'calc(50% - 235px)', width: '1px', height: '25px' }
                  : index === 1
                    ? { left: 'calc(50% + 210px)', top: '50%', width: '45px', height: '1px' }
                    : index === 2
                      ? { left: '50%', top: 'calc(50% + 210px)', width: '1px', height: '25px' }
                      : { left: 'calc(50% - 255px)', top: '50%', width: '45px', height: '1px' }}
              />
            ))}
          </div>

          <div className="relative z-10 mx-auto sm:col-span-2 xl:absolute xl:left-1/2 xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2">
            <CameraRadar sweepRef={sweepRef} activeIndex={visibleActiveIndex} />
          </div>

          {benefits.map((benefit, index) => (visibleMask & (1 << index)) !== 0 && (
            <div key={benefit.number} className={`relative z-20 mx-auto w-full max-w-[340px] sm:max-w-none xl:absolute xl:w-[310px] ${benefit.placement}`}>
              <BenefitPhoto benefit={benefit} active={index === visibleActiveIndex} />
            </div>
          ))}
        </div>

        <p className="relative mt-8 text-center text-[10px] text-rose-100/45">
          Camera: <a className="underline decoration-rose-100/30 underline-offset-2 hover:text-rose-100/70" href="https://commons.wikimedia.org/wiki/File:Security_Camera-01-PTZ.jpg" target="_blank" rel="noreferrer">Myotus</a> · <a className="underline decoration-rose-100/30 underline-offset-2 hover:text-rose-100/70" href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">CC BY-SA 4.0</a> (cropped, toned) <span aria-hidden="true">·</span> Recorder: <a className="underline decoration-rose-100/30 underline-offset-2 hover:text-rose-100/70" href="https://www.smarthomeperfected.com/annke-nvr-poe-camera-review/" target="_blank" rel="noreferrer">Smart Home Perfected</a> · <a className="underline decoration-rose-100/30 underline-offset-2 hover:text-rose-100/70" href="https://creativecommons.org/licenses/by/2.0/" target="_blank" rel="noreferrer">CC BY 2.0</a>
        </p>
      </div>
    </section>
  );
}
