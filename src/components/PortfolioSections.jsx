import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Code2,
  Headphones,
  ImagePlus,
  Laptop,
  Pause,
  Palette,
  Play,
  ShieldCheck,
} from 'lucide-react';
import companyData from '../shared/companyData';
import cctvCameraImage from '../assets/images/cctv-featured-cameras.png';
import cctvFootageImage from '../assets/images/cctv-featured-footage.png';
import projectNotesPcBuild1 from '../assets/images/project-notes-pc-build-1.png';
import projectNotesPcBuild2 from '../assets/images/project-notes-pc-build-2.png';
import engineeringHardwareFans from '../assets/images/engineering-hardware-fans.png';
import engineeringHardwareComponents from '../assets/images/engineering-hardware-components.png';
import securityCameraPair from '../assets/images/security-surveillance-camera-pair.png';
import securityCeilingCamera from '../assets/images/security-surveillance-ceiling-camera.png';
import buildingDigitalExperiencesLaptop from '../assets/images/building-digital-experiences-laptop.png';

const FEATURED_PHOTOS = [
  {
    src: cctvCameraImage,
    alt: 'CCTV cameras and installation equipment laid out before setup',
    caption: 'CCTV cameras',
  },
  {
    src: cctvFootageImage,
    alt: 'Security footage displayed across a multi-camera monitor',
    caption: 'Camera footage',
  },
];

const PROJECT_NOTE_PHOTOS = [
  {
    src: projectNotesPcBuild1,
    alt: 'Black desktop PC with RGB fans and a GeForce RTX graphics card',
    caption: 'PC build — view 1',
  },
  {
    src: projectNotesPcBuild2,
    alt: 'Black desktop PC with RGB fans, shown from another angle',
    caption: 'PC build — view 2',
  },
];

const HARDWARE_PHOTOS = [
  {
    src: engineeringHardwareFans,
    alt: 'Dusty dual-fan graphics card cooling assembly',
    caption: 'Graphics card cooling assembly',
  },
  {
    src: engineeringHardwareComponents,
    alt: 'Graphics card board, dual fans, and heatsink laid out separately',
    caption: 'Graphics card components',
  },
];

const SECURITY_PHOTOS = [
  {
    src: securityCameraPair,
    alt: 'Two dome security cameras mounted near a ceiling',
    caption: 'Ceiling-mounted cameras',
  },
  {
    src: securityCeilingCamera,
    alt: 'Ceiling-mounted security camera beside an overhead speaker',
    caption: 'Security camera detail',
  },
];

const PROJECT_FILTERS = [
  'All Projects',
  'Web Development',
  'CCTV & Security',
  'Hardware & Repair',
  'Digital Design',
];

const SERVICE_PANELS = [
  {
    title: 'Web Development',
    description: 'Websites, local search and practical digital experiences.',
    href: '/services/web-development',
    icon: Code2,
    number: '01',
  },
  {
    title: 'Computer & Laptop Solutions',
    description: 'Computer systems, hardware upgrades, repairs and maintenance.',
    href: '/services/computer-services',
    icon: Laptop,
    number: '02',
  },
  {
    title: 'CCTV & Security',
    description: 'CCTV installation, intercoms and access solutions.',
    href: '/services/security-services',
    icon: ShieldCheck,
    number: '03',
  },
  {
    title: 'Digital Design',
    description: 'Digital business cards and thoughtful online experiences.',
    href: '/services/digital-cards',
    icon: Palette,
    number: '04',
  },
  {
    title: 'IT Support',
    description: 'Preventive maintenance and ongoing technical support.',
    href: '/services/maintenance-services',
    icon: Headphones,
    number: '05',
  },
];

function getRevealProps(reducedMotion, delay = 0) {
  return {
    initial: reducedMotion ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: { duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : delay },
  };
}

function PhotoSlideshow({
  photos,
  ariaLabel,
  controlLabel,
  reducedMotion,
  className,
  imageFit,
  backgroundClassName = 'bg-slate-100',
}) {
  const [activePhotoIndex, setActivePhotoIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    if (isPaused) return undefined;

    const intervalId = window.setInterval(() => {
      setActivePhotoIndex((currentIndex) => (currentIndex + 1) % photos.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isPaused, photos.length]);

  return (
    <div role="group" aria-label={ariaLabel} className={`relative overflow-hidden ${backgroundClassName} ${className}`}>
      {photos.map((photo, index) => {
        const isActive = index === activePhotoIndex;

        return (
          <figure
            key={photo.src}
            aria-hidden={!isActive}
            className={`absolute inset-0 m-0 transition-opacity ease-in-out ${reducedMotion ? 'duration-0' : 'duration-700'} ${isActive ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="eager"
              decoding="async"
              className={`h-full w-full ${imageFit}`}
            />
            {isActive && (
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-slate-950/75 to-transparent px-4 pb-4 pt-12 text-sm font-medium text-white sm:px-5 sm:pb-5">
                <span>{photo.caption}</span>
                <span aria-hidden="true" className="text-xs tabular-nums text-white/80">
                  {String(index + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
                </span>
              </figcaption>
            )}
          </figure>
        );
      })}
      <button
        type="button"
        onClick={() => setIsPaused((paused) => !paused)}
        aria-label={`${isPaused ? 'Resume' : 'Pause'} ${controlLabel} slideshow`}
        className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-slate-950/65 text-white backdrop-blur transition hover:bg-slate-950/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {isPaused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
      </button>
    </div>
  );
}

function MediaPlaceholder({ label, className = '' }) {
  return (
    <div
      className={`relative flex min-h-64 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 p-6 text-center ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40" aria-hidden="true" />
      <div className="relative max-w-xs">
        <ImagePlus className="mx-auto mb-4 text-slate-400" size={30} strokeWidth={1.5} aria-hidden="true" />
        <p className="text-sm font-semibold text-slate-700">Real project media needed</p>
        <p className="mt-1 text-xs leading-relaxed text-slate-500">{label}</p>
      </div>
    </div>
  );
}

function WebsitePreviewVideo() {
  const [hasPlaybackError, setHasPlaybackError] = React.useState(false);
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    let isMounted = true;

    const startPlayback = () => {
      if (!video.paused) return;

      video.defaultMuted = true;
      video.muted = true;
      const playRequest = video.play();
      if (playRequest) {
        playRequest.catch((error) => {
          if (!isMounted || error.name === 'AbortError') return;
          setHasPlaybackError(true);
        });
      }
    };

    startPlayback();

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') startPlayback();
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      isMounted = false;
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  if (hasPlaybackError) {
    return <MediaPlaceholder label="The website preview video could not be played." className="min-h-48" />;
  }

  return (
    <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
      <video
        aria-label="Website preview video"
        className="max-h-full max-w-full object-contain"
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        onError={() => setHasPlaybackError(true)}
      >
        <source src="/videos/website-preview.mp4" type="video/mp4" />
        Your browser does not support video playback.
      </video>
    </div>
  );
}

export default function PortfolioSections() {
  const [selectedFilter, setSelectedFilter] = React.useState('All Projects');
  const reducedMotion = useReducedMotion();
  const projectMessage = selectedFilter === 'All Projects'
    ? 'No verified project previews are available yet.'
    : `No verified ${selectedFilter} project previews are available yet.`;

  return (
    <div className="bg-[#f7f9fc] text-[#172b43]">
      <section
        id="story-odyssey"
        aria-labelledby="featured-projects-heading"
        className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div {...getRevealProps(reducedMotion)} className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-sky-700">Selected work / 01</p>
              <h2 id="featured-projects-heading" className="text-3xl font-semibold tracking-tight text-[#142b45] sm:text-5xl">
                Selected Work. Real Solutions.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              A closer look at the digital experiences and technical solutions we&apos;ve created.
            </p>
          </motion.div>

          <div className="mb-8 flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Filter projects by category">
            {PROJECT_FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={selectedFilter === filter}
                onClick={() => setSelectedFilter(filter)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 ${
                  selectedFilter === filter
                    ? 'border-[#173a5d] bg-[#173a5d] text-white'
                    : 'border-slate-300 bg-white text-slate-600 hover:border-sky-700 hover:text-[#173a5d]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid gap-5 lg:grid-cols-12">
            <motion.article
              {...getRevealProps(reducedMotion)}
              className="rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_16px_50px_rgba(19,43,69,0.07)] sm:p-6 lg:col-span-8"
            >
              <PhotoSlideshow
                photos={FEATURED_PHOTOS}
                ariaLabel="Featured CCTV photos"
                controlLabel="CCTV photo"
                reducedMotion={reducedMotion}
                className="aspect-[4/3] rounded-[1.25rem]"
                imageFit="object-cover"
              />
              <div className="flex flex-wrap items-start justify-between gap-4 px-1 pb-1 pt-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">Featured project slot</p>
                  <h3 className="mt-2 text-xl font-semibold text-[#172b43]">Project details awaiting verification</h3>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  {selectedFilter}
                </span>
              </div>
            </motion.article>

            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
              <motion.article
                {...getRevealProps(reducedMotion, 0.08)}
                className="rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_16px_50px_rgba(19,43,69,0.05)]"
              >
                <WebsitePreviewVideo />
                <div className="px-1 pb-1 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">Website previews</p>
                  <h3 className="mt-1 font-semibold text-[#172b43]">Responsive work, shown honestly</h3>
                </div>
              </motion.article>
              <motion.article
                {...getRevealProps(reducedMotion, 0.16)}
                className="rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_16px_50px_rgba(19,43,69,0.05)]"
              >
                <PhotoSlideshow
                  photos={PROJECT_NOTE_PHOTOS}
                  ariaLabel="Project notes photos"
                  controlLabel="Project notes photo"
                  reducedMotion={reducedMotion}
                  className="h-80 rounded-2xl border border-slate-200"
                  imageFit="object-cover object-[center_75%]"
                />
                <div className="px-1 pb-1 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">Project notes</p>
                  <h3 className="mt-1 font-semibold text-[#172b43]">Details backed by real work</h3>
                </div>
              </motion.article>
            </div>
          </div>

          <p className="mt-6 text-sm text-slate-500" role="status">{projectMessage}</p>
        </div>
      </section>

      <section aria-labelledby="behind-build-heading" className="bg-white px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div {...getRevealProps(reducedMotion)} className="mb-10 max-w-3xl md:mb-12">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-sky-700">Behind the build / 02</p>
            <h2 id="behind-build-heading" className="text-3xl font-semibold tracking-tight text-[#142b45] sm:text-5xl">
              Not Just the Result. The Process.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Explore the work, expertise and attention to detail behind every solution.
            </p>
          </motion.div>

          <div className="grid gap-5 lg:grid-cols-12">
            <motion.figure
              {...getRevealProps(reducedMotion)}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-[#f7f9fc] p-4 sm:p-5 lg:col-span-7"
            >
              <div className="relative h-[300px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 sm:h-[360px]">
                <img
                  src={buildingDigitalExperiencesLaptop}
                  alt="Laptop displaying code and a website interface at a workstation"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover object-[center_68%]"
                />
              </div>
              <figcaption className="px-1 pb-1 pt-5">
                <h3 className="text-xl font-semibold text-[#172b43]">Building Digital Experiences</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">A laptop workstation with code and a website interface open.</p>
              </figcaption>
            </motion.figure>

            <motion.figure
              {...getRevealProps(reducedMotion, 0.08)}
              className="mt-0 overflow-hidden rounded-3xl border border-slate-200 bg-[#f7f9fc] p-4 sm:p-5 lg:col-span-5 lg:mt-16"
            >
              <PhotoSlideshow
                photos={HARDWARE_PHOTOS}
                ariaLabel="Engineering & Hardware photos"
                controlLabel="hardware photo"
                reducedMotion={reducedMotion}
                className="min-h-[260px] rounded-2xl border border-slate-200 sm:min-h-[300px]"
                imageFit="object-contain"
                backgroundClassName="bg-slate-950"
              />
              <figcaption className="px-1 pb-1 pt-5">
                <h3 className="text-xl font-semibold text-[#172b43]">Engineering &amp; Hardware</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">A closer look at graphics card cooling assemblies and hardware components.</p>
              </figcaption>
            </motion.figure>

            <motion.figure
              {...getRevealProps(reducedMotion, 0.12)}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-[#f7f9fc] p-4 sm:p-5 lg:col-span-9 lg:col-start-3"
            >
              <PhotoSlideshow
                photos={SECURITY_PHOTOS}
                ariaLabel="Security & Surveillance photos"
                controlLabel="security photo"
                reducedMotion={reducedMotion}
                className="min-h-[260px] rounded-2xl border border-slate-200 sm:min-h-[400px]"
                imageFit="object-contain"
              />
              <figcaption className="px-1 pb-1 pt-5">
                <h3 className="text-xl font-semibold text-[#172b43]">Security &amp; Surveillance</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">Ceiling-mounted security cameras shown in their installed setting.</p>
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </section>

      <section id="journal" aria-labelledby="journal-heading" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div {...getRevealProps(reducedMotion)} className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-sky-700">Ideas &amp; field notes / 03</p>
              <h2 id="journal-heading" className="text-3xl font-semibold tracking-tight text-[#142b45] sm:text-5xl">The ItEthik Journal</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Technology, ideas and practical insights to help you stay one step ahead.
              </p>
            </div>
            <Link
              to="/journal"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#1f5a85] hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
            >
              Explore All Articles <ArrowUpRight size={17} />
            </Link>
          </motion.div>

          <div className="grid gap-5 lg:grid-cols-12">
            <motion.article
              {...getRevealProps(reducedMotion)}
              className="rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_16px_50px_rgba(19,43,69,0.06)] sm:p-6 lg:col-span-7"
            >
              <div className="flex min-h-[300px] flex-col justify-between rounded-[1.25rem] bg-[#edf3f8] p-6 sm:min-h-[350px] sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-sky-800">Featured draft slot</span>
                  <BookOpen className="text-sky-800" size={22} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#172b43] sm:text-3xl">Article content awaiting approval</h3>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600">
                    No article is presented as published until its approved title, copy, cover image and publication details are supplied.
                  </p>
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Draft - not published</p>
              </div>
            </motion.article>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              {['Web Development', 'Computer & Hardware', 'CCTV & Security'].map((category, index) => (
                <motion.article
                  key={category}
                  {...getRevealProps(reducedMotion, index * 0.06)}
                  className="flex min-h-28 items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-[#edf3f8] text-sky-800" aria-hidden="true">
                    <BookOpen size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.13em] text-sky-700">{category}</p>
                    <h3 className="mt-1 font-semibold text-[#172b43]">Article draft needed</h3>
                    <p className="mt-1 text-xs text-slate-500">No published article content yet</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="expertise-heading" className="bg-white px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div {...getRevealProps(reducedMotion)} className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-sky-700">Explore our expertise / 04</p>
              <h2 id="expertise-heading" className="text-3xl font-semibold tracking-tight text-[#142b45] sm:text-5xl">
                Technology Has More Than One Dimension.
              </h2>
            </div>
            <p className="text-sm text-slate-500">Scroll to explore <span aria-hidden="true">→</span></p>
          </motion.div>

          <div
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4"
            role="region"
            aria-label="Explore ItEthik services"
            tabIndex={0}
          >
            {SERVICE_PANELS.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group min-w-[min(84vw,340px)] snap-start overflow-hidden rounded-3xl border border-slate-200 bg-[#f7f9fc] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_18px_40px_rgba(19,43,69,0.1)] motion-reduce:transition-none sm:min-w-[320px] sm:p-7"
                >
                  <div className="mb-12 flex items-start justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#e6eff6] text-[#1f5a85] transition-colors group-hover:bg-[#d9eaf6]" aria-hidden="true">
                      <Icon size={25} strokeWidth={1.6} />
                    </div>
                    <span className="font-mono text-xs text-slate-400">{service.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#172b43]">{service.title}</h3>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">{service.description}</p>
                  <Link
                    to={service.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1f5a85] hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
                  >
                    Explore service <ArrowUpRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="portfolio-cta-heading" className="bg-[#071a2c] px-5 py-20 text-white sm:px-8 sm:py-24">
        <motion.div
          {...getRevealProps(reducedMotion)}
          className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0c2741] to-[#071a2c] p-7 sm:p-12 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-sky-300">Start a conversation / 05</p>
            <h2 id="portfolio-cta-heading" className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Have an Idea? Let&apos;s Bring It to Life.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              From digital experiences to complete IT solutions, let&apos;s build something meaningful.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#102b45] transition hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Start a Project <ArrowRight size={17} />
            </Link>
            <a
              href={companyData.contactInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-6 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Talk to Our Team <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
