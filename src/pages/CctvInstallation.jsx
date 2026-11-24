import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Camera,
  ShieldCheck,
  CheckCircle2,
  Eye,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Video,
  Sliders,
  Cpu,
  Lock,
  Maximize2,
  Building,
  Home as HomeIcon,
  Store,
  Warehouse,
  Check,
  Zap,
} from 'lucide-react';
import ChatAssistant from '../components/ChatAssistant';
import FaqSection from '../components/FaqSection';
import CanvasParticleField from '../components/CanvasParticleField';
import CircuitBackground from '../components/CircuitBackground';
import cctv3dImg from '../assets/images/cctv_installation_3d_1787050509090.jpg';

export default function CctvInstallation() {
  const [activeCamType, setActiveCamType] = useState('ip-dome');
  const [nightVisionSim, setNightVisionSim] = useState(false);

  const cameraTypes = [
    {
      id: 'ip-dome',
      name: '4K IP Dome Camera',
      badge: 'Indoor & Vandal-Proof',
      icon: Eye,
      res: '4K / 8MP Ultra-HD',
      fov: '110° Wide Angle',
      nightMode: 'ColorVu 30m Ambient',
      housing: 'IK10 Vandal-Resistant',
      bestFor: 'Living Rooms, Retail Counters, Office Cabins, Corridors',
      desc: 'Discreet aesthetic dome housing designed for high-clarity indoor surveillance with tamper-proof metal casing.',
      specs: [
        { label: 'Sensor', val: '1/2.8" Progressive Scan CMOS' },
        { label: 'Lens', val: '2.8mm Fixed Aperture f/1.6' },
        { label: 'Audio', val: 'Built-in Two-Way Mic & Noise Filter' },
        { label: 'Power', val: 'IEEE 802.3af PoE (< 6.5W)' },
      ],
    },
    {
      id: 'ip-bullet',
      name: 'Long-Range Bullet Camera',
      badge: 'Outdoor Weatherproof',
      icon: Camera,
      res: '4K 60FPS Starlight',
      fov: '85° Focused Corridor',
      nightMode: 'EXIR 2.0 (Up to 60m IR)',
      housing: 'IP67 Heavy Weatherproof',
      bestFor: 'Building Perimeters, Driveways, Main Gates, Warehouses',
      desc: 'Heavy-duty exterior camera with high-intensity infrared arrays for extreme outdoor weather and long-distance perimeter protection.',
      specs: [
        { label: 'Sensor', val: 'Low-Lux Ultra Night Vision' },
        { label: 'Lens', val: '4mm / 6mm Telephoto' },
        { label: 'Ingress', val: 'IP67 Rain & Dust Protected' },
        { label: 'Power', val: 'Direct PoE / 12V DC Failover' },
      ],
    },
    {
      id: 'ptz-speed',
      name: '360° PTZ Speed Dome',
      badge: 'Optical Auto-Tracking',
      icon: Maximize2,
      res: '4K Active Zoom',
      fov: '360° Pan / 90° Tilt',
      nightMode: 'Laser IR (Up to 150m)',
      housing: 'Heavy Die-Cast Aluminum',
      bestFor: 'Large Yards, Factory Floors, Parking Lots, Campus Grounds',
      desc: 'Motorized pan-tilt-zoom camera with intelligent AI auto-tracking that follows intruders across wide-open areas with 30x optical zoom.',
      specs: [
        { label: 'Zoom', val: '30x Optical + 16x Digital' },
        { label: 'Speed', val: 'Preset Pan 300°/sec' },
        { label: 'AI Engine', val: 'Human & Vehicle Auto-Lock' },
        { label: 'Preset Guard', val: '300 Custom Patrol Points' },
      ],
    },
    {
      id: 'ai-smart',
      name: 'AI Smart ANPR & Line Cross',
      badge: 'Edge Deep Learning',
      icon: Cpu,
      res: '4K AI Neural Engine',
      fov: '105° Smart Zone',
      nightMode: 'Dual Smart Illumination',
      housing: 'IP67 Industrial Standard',
      bestFor: 'Society Security Gates, Bank Branches, Server Rooms',
      desc: 'Equipped with on-device deep learning algorithms for automatic license plate recognition, boundary perimeter breach alerts, and face capture.',
      specs: [
        { label: 'ANPR', val: 'Vehicle Plate OCR Recognition' },
        { label: 'Line Cross', val: 'Virtual Tripwire & Perimeter Fence' },
        { label: 'False Alarm Filter', val: '99% Pet/Rain Disregard' },
        { label: 'Siren Link', val: 'Instant White Strobe & Voice Warning' },
      ],
    },
  ];

  const sectorSolutions = [
    {
      id: 'residential',
      title: 'Villas & Luxury Homes',
      icon: HomeIcon,
      tag: 'Zero Blind Spots',
      desc: 'Complete perimeter shielding, gate visitor verification, discrete interior coverage, and multi-phone family access with instant motion notifications.',
      points: [
        'Main Gate & Driveway ColorVu night viewing',
        'Private Cloud / NVR storage inside master safe',
        'Integrated with smart video door phone intercoms',
        'Child, pet & elder care interior camera angles',
      ],
    },
    {
      id: 'office',
      title: 'Corporate Offices & IT Hubs',
      icon: Building,
      tag: 'Access & Asset Security',
      desc: 'High-density indoor dome grids, server room access monitoring, reception desk logging, and compliance-certified 90+ days continuous video retention.',
      points: [
        'Reception & entry turnstile face logging',
        'Server rack & data center dual camera lock',
        'Centralized control room multi-screen matrix',
        'Granular employee permission roles & audit trails',
      ],
    },
    {
      id: 'retail',
      title: 'Retail Stores & Supermarkets',
      icon: Store,
      tag: 'Loss Prevention & Heatmaps',
      desc: 'Point-of-sale cash register zoom, high-theft aisle coverage, customer footfall heatmaps, and remote store inspection from owner smartphone.',
      points: [
        'POS Billing counter high-res currency detail',
        'Aisle theft deterrence & stock room surveillance',
        'Customer footfall & store heat-mapping telemetry',
        'Remote multi-store view from one mobile dashboard',
      ],
    },
    {
      id: 'warehouse',
      title: 'Factories & Warehouses',
      icon: Warehouse,
      tag: 'Heavy-Duty Industrial',
      desc: 'High-bay warehouse aisle cameras, loading dock ANPR vehicle tracking, thermal machinery overheating monitoring, and rugged fiber-optic backbone wiring.',
      points: [
        'Loading dock truck license plate capture',
        'Explosion-proof & high-temperature camera housings',
        'Fiber-optic long distance transmission (> 2km)',
        'Perimeter thermal tripwire intrusion sensors',
      ],
    },
  ];

  const installationSteps = [
    {
      step: '01',
      title: 'On-Site Angle & FOV Mapping',
      desc: 'Our certified security architects map building entry vectors, lighting conditions, and blind spots to engineer optimal camera placements.',
    },
    {
      step: '02',
      title: 'Concealed Structured Cabling',
      desc: 'Installation of high-grade 100% pure copper shielded CAT6 Ethernet or coaxial cables inside fire-retardant PVC/metallic conduits with zero messy wires.',
    },
    {
      step: '03',
      title: 'NVR / DVR Storage Configuration',
      desc: 'Mounting surveillance-rated 24/7 WD Purple / Seagate SkyHawk hard drives with optimized RAID redundancy, H.265+ video encoding, and UPS battery backup.',
    },
    {
      step: '04',
      title: 'Cloud App & Security Lockdown',
      desc: 'Configuring encrypted P2P cloud smartphone streaming (Hik-Connect / DMSS / CP Plus), static IP DDNS port routing, custom alert zones, and user onboarding.',
    },
  ];

  const currentCam = cameraTypes.find((c) => c.id === activeCamType) || cameraTypes[0];
  const CurrentCamIcon = currentCam.icon;

  return (
    <div className="min-h-screen bg-[#020617] text-white pt-2 sm:pt-4 pb-20 px-4 sm:px-6 md:px-10 relative overflow-hidden">
      {/* Background Cyber-Surveillance Grid & Floating Lights */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#020617]" />
        <CircuitBackground glowColor="cyan" intensity="subtle" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Animated Glow Orbs */}
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -35, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-10%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-cyan-600/15 blur-[150px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 45, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[30%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-blue-600/15 blur-[140px]"
        />
        <CanvasParticleField variant="cyan" mode="mixed" density={30} speed={0.25} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Back Link */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
          <Link
            to="/services/security-services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-300 hover:text-cyan-400 transition-all font-medium px-4 py-2 rounded-xl bg-slate-900/60 border border-cyan-500/20 backdrop-blur-xl shadow-md shadow-cyan-950/20 hover:border-cyan-500/40"
          >
            <ArrowLeft size={16} /> Back to Security Services
          </Link>
        </motion.div>

        {/* HERO SECTION: Split Screen 4K Surveillance Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-24">
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-xs font-bold text-cyan-300 tracking-wide uppercase mb-6 backdrop-blur-md shadow-sm shadow-cyan-950/30">
              <ShieldCheck size={14} className="text-cyan-400" />
              Turnkey 4K IP & HD Surveillance Systems
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-5 text-white">
              CCTV Camera <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-transparent bg-clip-text">
                Installation Services
              </span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base max-w-xl mb-8 leading-relaxed">
              Complete surveillance engineering from 4K optical camera placement, neat conduit cabling, high-capacity NVR storage, to encrypted real-time mobile app streaming with zero blind spots.
            </p>

            {/* Live Metric Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-cyan-500/20 backdrop-blur-xl shadow-lg shadow-cyan-950/20 hover:border-cyan-500/40 transition-all">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">Clarity</span>
                  <Video size={12} className="text-cyan-400" />
                </div>
                <div className="text-lg font-black text-cyan-300">4K Ultra HD</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-cyan-500/20 backdrop-blur-xl shadow-lg shadow-cyan-950/20 hover:border-cyan-500/40 transition-all">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">Turnaround</span>
                  <Zap size={12} className="text-blue-400" />
                </div>
                <div className="text-lg font-black text-blue-300">&lt; 24 Hours</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-cyan-500/20 backdrop-blur-xl shadow-lg shadow-cyan-950/20 hover:border-cyan-500/40 transition-all">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">Night Vision</span>
                  <Eye size={12} className="text-indigo-400" />
                </div>
                <div className="text-lg font-black text-indigo-300">ColorVu 24/7</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-cyan-500/20 backdrop-blur-xl shadow-lg shadow-cyan-950/20 hover:border-cyan-500/40 transition-all">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">Warranty</span>
                  <Lock size={12} className="text-cyan-400" />
                </div>
                <div className="text-lg font-black text-cyan-300">2-Year OEM</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/consultation?service=cctv-installation"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-extrabold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02]"
              >
                Book Free Site Assessment <ArrowRight size={16} />
              </Link>
              <a
                href="#camera-catalog"
                className="px-6 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900/90 border border-cyan-500/25 backdrop-blur-xl text-white font-bold text-sm transition-all flex items-center gap-2 hover:border-cyan-500/40 shadow-lg shadow-cyan-950/20"
              >
                <Sliders size={16} className="text-cyan-400" /> Compare Camera Hardware
              </a>
            </div>
          </motion.div>

          {/* Right 3D Visual Frame with Interactive Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 bg-slate-950 shadow-2xl shadow-cyan-500/10 group">
              <img
                src={cctv3dImg}
                alt="Professional 4K CCTV Installation"
                referrerPolicy="no-referrer"
                className={`w-full h-auto object-cover transform group-hover:scale-105 transition-all duration-700 ${
                  nightVisionSim ? 'filter brightness-125 contrast-125 hue-rotate-90' : ''
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-85" />

              {/* Floating Top Badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-4 left-4 p-3 rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-cyan-500/30 flex items-center gap-3 shadow-2xl shadow-cyan-950/40"
              >
                <div className="w-9 h-9 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Video size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">4K Optical Surveillance</div>
                  <div className="text-[10px] text-cyan-300 font-semibold">AI Smart Human / Car Filter</div>
                </div>
              </motion.div>

              {/* Floating Bottom Night-Vision Simulator Toggle */}
              <div className="absolute bottom-4 right-4 left-4 p-3 rounded-2xl bg-slate-950/85 backdrop-blur-xl border border-cyan-500/30 flex items-center justify-between shadow-2xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Eye size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Full Color Night Vision</div>
                    <div className="text-[10px] text-gray-400">F1.0 Super Aperture Active</div>
                  </div>
                </div>
                <button
                  onClick={() => setNightVisionSim(!nightVisionSim)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    nightVisionSim
                      ? 'bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/30'
                      : 'bg-white/10 text-gray-300 hover:text-white'
                  }`}
                >
                  {nightVisionSim ? 'Night View ON' : 'Toggle Night View'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* INTERACTIVE HARDWARE CAMERA SELECTOR & SPECS */}
        <div id="camera-catalog" className="mb-20 scroll-mt-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
              <Sliders size={14} /> Enterprise Hardware Matrix
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-2">
              Select Your Camera Specification
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm max-w-lg mx-auto">
              Compare commercial-grade optical sensors tailored for interior elegance, high-bay factories, and external perimeter defense.
            </p>
          </div>

          {/* Camera Category Switchers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {cameraTypes.map((cam) => {
              const Icon = cam.icon;
              const active = activeCamType === cam.id;
              return (
                <button
                  key={cam.id}
                  onClick={() => setActiveCamType(cam.id)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                    active
                      ? 'bg-gradient-to-b from-cyan-500/20 to-blue-500/10 border-cyan-400 shadow-xl shadow-cyan-500/15'
                      : 'bg-slate-900/60 border-white/10 hover:border-cyan-500/30 hover:bg-slate-900/80 backdrop-blur-xl'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${active ? 'bg-cyan-400 text-slate-950' : 'bg-white/5 text-cyan-400'}`}>
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-gray-300">
                      {cam.badge}
                    </span>
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold mb-1 ${active ? 'text-white' : 'text-gray-200'}`}>{cam.name}</h3>
                    <div className="text-[11px] text-cyan-300 font-semibold">{cam.res}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Camera Spec Card with Glassmorphism */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCamType}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-950/80 border border-cyan-500/25 backdrop-blur-xl shadow-2xl shadow-cyan-950/30"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Overview */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                      <CurrentCamIcon size={24} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300">{currentCam.badge}</span>
                      <h3 className="text-2xl font-extrabold text-white">{currentCam.name}</h3>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {currentCam.desc}
                  </p>

                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                    <div className="text-xs font-bold text-gray-400 uppercase">Recommended Deployment Zones</div>
                    <div className="text-sm font-semibold text-cyan-200 flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                      {currentCam.bestFor}
                    </div>
                  </div>
                </div>

                {/* Right Detailed Specs Grid */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-xl bg-slate-900/70 border border-cyan-500/20 backdrop-blur-md">
                    <div className="text-xs text-gray-400 mb-1">Optical Resolution</div>
                    <div className="text-base font-extrabold text-white">{currentCam.res}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/70 border border-cyan-500/20 backdrop-blur-md">
                    <div className="text-xs text-gray-400 mb-1">Field of View (FOV)</div>
                    <div className="text-base font-extrabold text-cyan-300">{currentCam.fov}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/70 border border-cyan-500/20 backdrop-blur-md">
                    <div className="text-xs text-gray-400 mb-1">Night Vision Capability</div>
                    <div className="text-base font-extrabold text-indigo-300">{currentCam.nightMode}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/70 border border-cyan-500/20 backdrop-blur-md">
                    <div className="text-xs text-gray-400 mb-1">Housing & Weather Grade</div>
                    <div className="text-base font-extrabold text-emerald-300">{currentCam.housing}</div>
                  </div>

                  {currentCam.specs.map((sp, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between sm:col-span-1">
                      <span className="text-xs text-gray-400">{sp.label}</span>
                      <span className="text-xs font-bold text-white">{sp.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* SECTOR SOLUTIONS BLUEPRINT */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
              <Building size={14} /> Turnkey Deployment Architecture
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-2">
              Engineered for Every Property Type
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto">
              Customized camera matrices, wiring topologies, and storage retention policies for your space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {sectorSolutions.map((sec) => {
              const Icon = sec.icon;
              return (
                <div
                  key={sec.id}
                  className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-950/80 border border-cyan-500/20 backdrop-blur-xl hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-950/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon size={24} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/25">
                        {sec.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">{sec.title}</h3>
                    <p className="text-gray-300 text-xs leading-relaxed mb-6">{sec.desc}</p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-white/5">
                    {sec.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-gray-400">
                        <Check size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4-STEP PROFESSIONAL INSTALLATION PROTOCOL */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Our 4-Step Installation Standard</h2>
            <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto">
              Zero unsightly cables. 100% weather-shielded conduits. Certified engineers on every site.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {installationSteps.map((s, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-950/70 border border-cyan-500/20 backdrop-blur-xl hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-950/30 transition-all duration-300 relative text-center group"
              >
                <div className="w-11 h-11 mx-auto rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 backdrop-blur-md flex items-center justify-center font-black text-sm mb-3 group-hover:scale-110 group-hover:bg-cyan-500/25 transition-all">
                  {s.step}
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">{s.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AUTHORIZED BRAND TIERS & WHY US COMPARISON */}
        <div className="mb-20 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-500/25 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Authorized OEM Equipment</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Genuine Certified Hardware from Global Surveillance Leaders
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                We strictly deploy authentic enterprise tier products from <strong className="text-white">Hikvision, Dahua, CP Plus, Uniview, and Honeywell</strong>, backed by full manufacturer serial verification, official firmware updates, and 2-year on-site replacement warranties.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {['100% Pure Copper CAT6', 'WD Purple Surveillance HDD', 'Gigabit PoE Switch Hubs', 'H.265+ Compression', 'Encrypted Cloud Streams', 'Surge & Spike Protectors'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-gray-200">
                    <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/60 border border-cyan-500/30 backdrop-blur-xl">
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                Why Professional Setup vs Cheap Wi-Fi Cams?
              </div>
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5 text-gray-300">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Continuous 24/7 Local Recording</strong> — Never loses video when home Wi-Fi disconnects.</span>
                </div>
                <div className="flex items-start gap-2.5 text-gray-300">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>No Monthly Cloud Subscriptions</strong> — You own your private hard drive data with zero recurring fees.</span>
                </div>
                <div className="flex items-start gap-2.5 text-gray-300">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Hardwired PoE Reliability</strong> — Pure power & high-bandwidth 4K video over a single insulated cable.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA BANNER */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl mb-20">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
              <Sparkles size={14} /> Free Site Survey
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Ready to Secure Your Home or Business?
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm max-w-xl">
              Get an on-site property evaluation, camera angle mapping, and custom quotation from certified security engineers.
            </p>
          </div>
          <Link
            to="/consultation?service=cctv-installation"
            className="px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold text-sm flex items-center gap-2 transition-all shadow-lg shadow-cyan-400/25 shrink-0 hover:scale-105"
          >
            Claim Free Site Audit <ArrowRight size={16} />
          </Link>
        </div>

        {/* FAQ SECTION */}
        <div className="py-8 mb-10">
          <FaqSection category="cctv-installation" theme="cyan" className="bg-transparent" />
        </div>

        <ChatAssistant />
      </div>
    </div>
  );
}
