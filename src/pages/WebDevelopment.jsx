import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Cpu,
  Globe,
  Headphones,
  Layers,
  Layout,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from 'lucide-react';
import ChatAssistant from '../components/ChatAssistant';
import FaqSection from '../components/FaqSection';
import webDevelopmentHero from '../assets/images/web_dev_maintenance_3d_1787041411708.jpg';

const WebDevelopment = () => {
  const features = [
    {
      icon: Layout,
      title: 'Responsive & Modern UI',
      desc: 'Fluid layouts designed to feel clear and intuitive on desktop, tablet, and mobile screens.',
    },
    {
      icon: Zap,
      title: 'Performance & Speed',
      desc: 'Careful asset loading and efficient front-end code help pages load quickly and stay responsive.',
    },
    {
      icon: Globe,
      title: 'SEO-Friendly Architecture',
      desc: 'Semantic page structure and search-friendly metadata give your content a strong foundation.',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Experience',
      desc: 'Touch-friendly controls and thoughtful navigation make key tasks easy on smaller screens.',
    },
    {
      icon: Layers,
      title: 'Custom Web Applications',
      desc: 'Purpose-built interfaces, dashboards, and integrations shaped around your business needs.',
    },
    {
      icon: Cpu,
      title: 'Scalable Tech Stack',
      desc: 'Modern tools and maintainable code make it easier to update and extend your website over time.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      desc: 'We learn about your goals, audience, content, and the features your project needs.',
    },
    {
      step: '02',
      title: 'Plan & Design',
      desc: 'We shape the site structure and visual direction, then gather your feedback.',
    },
    {
      step: '03',
      title: 'Build',
      desc: 'We develop the responsive experience and connect the required functionality.',
    },
    {
      step: '04',
      title: 'Test & Launch',
      desc: 'We check the experience across devices and browsers before deployment.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f9fc] pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 sm:pt-7 lg:px-8">
        <Link
          to="/services"
          className="mb-5 inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          All services
        </Link>

        <section
          aria-labelledby="web-development-title"
          className="relative isolate overflow-hidden rounded-[1.75rem] bg-[#071b32] shadow-[0_24px_70px_rgba(15,35,58,0.2)] sm:rounded-[2rem]"
        >
          <img
            src={webDevelopmentHero}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            className="absolute inset-0 z-0 h-full w-full object-cover object-[center_45%]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 z-0 bg-gradient-to-r from-[#06162b]/95 via-[#06162b]/85 to-[#06162b]/55"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 z-0 bg-gradient-to-t from-[#06162b]/55 via-transparent to-[#06162b]/15"
          />

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="relative z-10 max-w-4xl px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100 backdrop-blur-sm">
              <Sparkles size={15} aria-hidden="true" />
              Digital solutions
            </div>

            <h1
              id="web-development-title"
              className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl"
            >
              Web
              {' '}
              <span className="bg-gradient-to-r from-cyan-200 via-teal-200 to-white bg-clip-text text-transparent">
                Development
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:mt-6 sm:text-lg sm:leading-8">
              Modern websites and custom web applications designed around your goals—responsive, considered, and built to perform across devices.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/consultation?service=web-development"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#102b46] shadow-lg transition hover:-translate-y-0.5 hover:bg-cyan-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Request a consultation
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <a
                href="#web-development-services"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Explore our services
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/20 pt-5 text-sm text-slate-100">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={17} className="text-cyan-200" aria-hidden="true" />
                Clean &amp; secure code
              </span>
              <span className="inline-flex items-center gap-2">
                <Zap size={17} className="text-cyan-200" aria-hidden="true" />
                Performance-focused
              </span>
              <span className="inline-flex items-center gap-2">
                <Headphones size={17} className="text-cyan-200" aria-hidden="true" />
                Ongoing support
              </span>
            </div>
          </motion.div>
        </section>

        <section
          id="web-development-services"
          aria-labelledby="web-development-services-title"
          className="scroll-mt-24 py-14 sm:py-20"
        >
          <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.17em] text-cyan-800">
                What we build
              </p>
              <h2
                id="web-development-services-title"
                className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
              >
                A better experience, from first click to launch
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              The right combination of design, technology, and practical details for your business and your visitors.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true, amount: 0.15 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-[0_16px_34px_rgba(15,23,42,0.09)]"
                >
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-cyan-50 text-cyan-800 transition-colors group-hover:bg-cyan-700 group-hover:text-white">
                    <IconComp size={21} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section
          id="process"
          aria-labelledby="web-development-process-title"
          className="scroll-mt-24 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:rounded-[2rem] sm:p-10 lg:p-12"
        >
          <div className="mb-8 max-w-2xl sm:mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-cyan-800">
              How we work
            </p>
            <h2
              id="web-development-process-title"
              className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            >
              A clear path from idea to launch
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              A collaborative process keeps priorities clear and gives you a chance to share feedback at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article
                key={step.step}
                className="rounded-2xl border border-slate-200 bg-[#f7f9fc] p-5 sm:p-6"
              >
                <span className="font-mono text-sm font-bold tracking-wider text-cyan-800">
                  {step.step}
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="web-development-cta-title"
          className="relative mt-8 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#0a2440] via-[#0d3450] to-[#075569] px-6 py-9 shadow-[0_20px_50px_rgba(15,35,58,0.16)] sm:mt-10 sm:rounded-[2rem] sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl"
          />
          <div className="relative z-10 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-cyan-200">
              Start a conversation
            </p>
            <h2
              id="web-development-cta-title"
              className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              Have a website idea in mind?
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-200 sm:text-base">
              Tell us what you are looking to build. We’ll discuss your goals and help you plan the next step.
            </p>
          </div>
          <Link
            to="/consultation?service=web-development"
            className="relative z-10 mt-6 inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#102b46] transition hover:-translate-y-0.5 hover:bg-cyan-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:mt-0"
          >
            Request a consultation
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </section>

        <section
          aria-label="Web development frequently asked questions"
          className="mt-8 overflow-hidden rounded-[1.75rem] bg-[#06162b] sm:mt-10 sm:rounded-[2rem]"
        >
          <FaqSection category="web-development" />
        </section>
        <ChatAssistant />
      </div>
    </div>
  );
};

export default WebDevelopment;
