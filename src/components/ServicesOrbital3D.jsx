import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import './TechnologyEcosystem.css';

const EcosystemLaptop3D = React.lazy(() => import('./EcosystemLaptop'));
import {
  Monitor,
  Wrench,
  ShieldCheck,
  Settings,
  Code,
  Search,
  Contact,
  ChevronRight,
  Sparkles,
  Cpu,
  Laptop,
  Camera,
  PhoneCall,
  Lock,
} from 'lucide-react';

const SERVICE_SUBMENUS = {
  'computer-services': [
    {
      id: 'computer-overview',
      name: 'Computer Services Hub',
      icon: Monitor,
      path: '/services/computer-services',
    },
    {
      id: 'custom-pc-building',
      name: 'Custom PC Building',
      icon: Cpu,
      path: '/services/custom-pc-building',
    },
    {
      id: 'new-pc-building',
      name: 'New PC Building',
      icon: Laptop,
      path: '/services/new-pc-building',
    },
    {
      id: 'refurbished-pc-building',
      name: 'Refurbished PC Building',
      icon: Settings,
      path: '/services/refurbished-pc-building',
    },
  ],
  'maintenance-services': [
    {
      id: 'maintenance-overview',
      name: 'Maintenance Services Hub',
      icon: Settings,
      path: '/services/maintenance-services',
    },
    {
      id: 'computer-laptop-maintenance',
      name: 'Computer & Laptop Maintenance',
      icon: Laptop,
      path: '/services/computer-laptop-maintenance',
    },
    {
      id: 'cctv-maintenance',
      name: 'CCTV Maintenance',
      icon: Camera,
      path: '/services/cctv-maintenance',
    },
    {
      id: 'web-development-maintenance',
      name: 'Web Development Maintenance',
      icon: Code,
      path: '/services/web-development-maintenance',
    },
  ],
  'security-services': [
    {
      id: 'security-overview',
      name: 'Security Overview',
      icon: ShieldCheck,
      path: '/services/security-services',
    },
    {
      id: 'cctv-installation',
      name: 'CCTV Installation',
      icon: Camera,
      path: '/services/cctv-installation',
    },
    {
      id: 'intercom-setup',
      name: 'Intercom Setup',
      icon: PhoneCall,
      path: '/services/intercom-setup',
    },
    {
      id: 'home-office-security',
      name: 'Home & Office Security',
      icon: Lock,
      path: '/services/home-office-security',
    },
  ],
  'web-development': [
    {
      id: 'digital-solutions-all',
      name: 'Digital Solutions Hub',
      icon: Sparkles,
      path: '/services/digital-solutions',
    },
    {
      id: 'web-dev',
      name: 'Web Development',
      icon: Code,
      path: '/services/web-development',
    },
    {
      id: 'seo',
      name: 'SEO',
      icon: Search,
      path: '/services/seo',
    },
    {
      id: 'digital-cards',
      name: 'Digital Cards',
      icon: Contact,
      path: '/services/digital-cards',
    },
  ],
  'repairing-services': [
    {
      id: 'laptop-repair',
      name: 'Laptop Repair',
      icon: Laptop,
      path: '/services/laptop-repair',
    },
    {
      id: 'computer-repair',
      name: 'Computer Repair',
      icon: Monitor,
      path: '/services/computer-repair',
    },
    {
      id: 'chip-level-repair',
      name: 'Chip Level Repair',
      icon: Cpu,
      path: '/services/chip-level-repair',
    },
  ],
};

const SERVICES = [
  // Maintenance Services (Slot 0)
  {
    id: 'maintenance-services',
    name: 'Maintenance Services',
    icon: Settings,
    ringIndex: 1,
    baseAngle: 185,
    direction: -1,
    color: '#a855f7',
    bgGradient: 'from-purple-500 to-indigo-600',
    cardColor: 'from-purple-600 via-pink-600 to-rose-600',
    borderColor: 'border-purple-400/70',
    glowColor: 'shadow-[0_0_24px_rgba(168,85,247,0.75)]',
    pingColor: 'bg-purple-400',
    desc: 'Comprehensive annual maintenance contracts (AMC), preventive hardware servicing, CCTV health audits, and web application updates.',
    link: '/services/maintenance-services',
    slotIndex: 0,
  },
  // Computer Services (Slot 1)
  {
    id: 'computer-services',
    name: 'Computer Services',
    icon: Monitor,
    ringIndex: 2,
    baseAngle: 300,
    direction: 1,
    color: '#06b6d4',
    bgGradient: 'from-cyan-500 to-blue-600',
    cardColor: 'from-cyan-500 via-indigo-600 to-purple-600',
    borderColor: 'border-cyan-400/70',
    glowColor: 'shadow-[0_0_24px_rgba(6,182,212,0.75)]',
    pingColor: 'bg-cyan-400',
    desc: 'Custom gaming & workstation builds, brand new desktop PCs, and certified refurbished computer systems tailored for performance.',
    link: '/services/computer-services',
    slotIndex: 1,
  },
  // Security Services (Slot 2)
  {
    id: 'security-services',
    name: 'Security Services',
    icon: ShieldCheck,
    ringIndex: 2,
    baseAngle: 20,
    direction: 1,
    color: '#06b6d4',
    bgGradient: 'from-cyan-400 to-emerald-500',
    cardColor: 'from-blue-600 via-cyan-600 to-emerald-600',
    borderColor: 'border-cyan-300/70',
    glowColor: 'shadow-[0_0_24px_rgba(6,182,212,0.75)]',
    pingColor: 'bg-cyan-300',
    desc: 'Complete security solutions including HD CCTV camera installation, video door intercoms, and smart home/office access control.',
    link: '/services/security-services',
    slotIndex: 2,
  },
  // Repairing Services (Slot 3)
  {
    id: 'repairing-services',
    name: 'Repairing Services',
    icon: Wrench,
    ringIndex: 0,
    baseAngle: 215,
    direction: 1,
    color: '#818cf8',
    bgGradient: 'from-indigo-500 to-purple-600',
    cardColor: 'from-purple-600 to-blue-600',
    borderColor: 'border-indigo-400/70',
    glowColor: 'shadow-[0_0_24px_rgba(129,140,248,0.75)]',
    pingColor: 'bg-indigo-400',
    desc: 'Expert hardware diagnosis, laptop repairs, chip-level micro-soldering, and computer workstation maintenance.',
    link: '/services/repairing-services',
    slotIndex: 3,
  },
  // Digital Solutions (Slot 4)
  {
    id: 'web-development',
    name: 'Digital Solutions',
    icon: Code,
    ringIndex: 1,
    baseAngle: 340,
    direction: -1,
    color: '#3b82f6',
    bgGradient: 'from-blue-500 to-cyan-500',
    cardColor: 'from-purple-600 via-cyan-600 to-blue-600',
    borderColor: 'border-blue-400/70',
    glowColor: 'shadow-[0_0_24px_rgba(59,130,246,0.75)]',
    pingColor: 'bg-blue-400',
    desc: 'Comprehensive web development, targeted SEO, and custom digital business cards to grow your online presence.',
    link: '/services/digital-solutions',
    slotIndex: 4,
  },
];

function getDeterministicRadii() {
  if (typeof window === 'undefined') return [210, 305, 400];
  const w = window.innerWidth;
  if (w < 480) return [120, 170, 220];
  if (w < 640) return [145, 205, 265];
  if (w < 1024) return [175, 250, 325];
  return [210, 305, 400];
}

const ServicesOrbital3D = memo(function ServicesOrbital3D({ cardSlotRefs, scrollProgress = 0 }) {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedIsRight, setSelectedIsRight] = useState(false);
  const [isCardMode, setIsCardMode] = useState(false);
  const [radii, setRadii] = useState(() => getDeterministicRadii());

  const containerRef = useRef(null);
  const ringContainerRef = useRef(null);
  const laptopVisualRef = useRef(null);
  const nodeRefs = useRef([]);
  const ringRefs = useRef([]);
  const connectorGroupRefs = useRef([]);
  const connectorBasePathRefs = useRef([]);
  const connectorFlowPathRefs = useRef([]);
  const requestRef = useRef(null);
  const previousTimeRef = useRef(null);
  const angleRef = useRef(0);
  const ringAnglesRef = useRef([0, 0, 0]);
  const radiiRef = useRef(getDeterministicRadii());

  const hoveredIdRef = useRef(null);
  const selectedIdRef = useRef(null);
  const speedMultiplierRef = useRef(1.0);
  const nodeHoverScalesRef = useRef(SERVICES.map(() => 1.0));
  const nodeXPosRef = useRef({});
  const slotVectorsRef = useRef([]);
  const progressRef = useRef(0);

  // Calculate position vectors to target card slots in the Services grid
  const measureSlotVectors = useCallback(() => {
    if (!containerRef.current || !cardSlotRefs?.current) return;
    const heroRect = containerRef.current.getBoundingClientRect();
    const orbitScale = parseFloat(
      window.getComputedStyle(containerRef.current).getPropertyValue('--orbit-scale')
    ) || 1;
    const heroCenterX = heroRect.left + heroRect.width / 2;
    const heroCenterY = heroRect.top + heroRect.height / 2;

    SERVICES.forEach((service, index) => {
      const slotEl = cardSlotRefs.current[service.slotIndex];
      if (slotEl) {
        const slotRect = slotEl.getBoundingClientRect();
        const slotCenterX = slotRect.left + slotRect.width / 2;
        const slotCenterY = slotRect.top + slotRect.height / 2;

        slotVectorsRef.current[index] = {
          x: (slotCenterX - heroCenterX) / orbitScale,
          y: (slotCenterY - heroCenterY) / orbitScale,
          width: slotRect.width / orbitScale,
          height: slotRect.height / orbitScale,
        };
      }
    });
  }, [cardSlotRefs]);

  useEffect(() => {
    const updateSize = () => {
      const nextRadii = getDeterministicRadii();
      radiiRef.current = nextRadii;
      setRadii(nextRadii);
      measureSlotVectors();
    };

    updateSize();
    const timer = setTimeout(updateSize, 100);
    window.addEventListener('resize', updateSize);
    window.addEventListener('scroll', measureSlotVectors, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('scroll', measureSlotVectors);
    };
  }, [measureSlotVectors]);

  // Handle outside click to deselect active service
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        if (selectedIdRef.current !== null) {
          setSelectedId(null);
          selectedIdRef.current = null;
        }
      }
    };
    document.addEventListener('pointerdown', handleOutsideClick);
    return () => document.removeEventListener('pointerdown', handleOutsideClick);
  }, []);

  const handleMouseEnter = (id) => {
    setHoveredId(id);
    hoveredIdRef.current = id;
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
    hoveredIdRef.current = null;
  };

  const navigate = useNavigate();

  const handleNodeClick = (e, id) => {
    e.stopPropagation();
    const service = SERVICES.find((s) => s.id === id);
    if (progressRef.current > 0.35 || isCardMode) {
      if (service && service.link) {
        navigate(service.link);
      }
      return;
    }
    const nextId = selectedIdRef.current === id ? null : id;
    if (nextId !== null) {
      setSelectedIsRight((nodeXPosRef.current[id] ?? 0) > 0);
    }
    setSelectedId(nextId);
    selectedIdRef.current = nextId;
  };

  const getRingRadius = useCallback((ringIndex) => {
    return radiiRef.current[ringIndex] ?? [210, 305, 400][ringIndex];
  }, []);

  const getCssRotationSpeed = useCallback(() => {
    if (containerRef.current && typeof window !== 'undefined') {
      const computed = window.getComputedStyle(containerRef.current);
      const val = computed.getPropertyValue('--orbit-speed-mult');
      if (val) {
        const parsed = parseFloat(val);
        if (!isNaN(parsed) && parsed > 0) {
          return parsed;
        }
      }
    }
    return 0.85;
  }, []);

  const tiltDegrees = 60;
  const tiltRad = (tiltDegrees * Math.PI) / 180;
  const cosTilt = Math.cos(tiltRad);
  const sinTilt = Math.sin(tiltRad);
  const LAPTOP_Z = 0;

  // Ultra-smooth direct DOM animation loop with scroll transition & spring physics
  useEffect(() => {
    const updatePositions = (time) => {
      // Extract target value from MotionValue or numeric scrollProgress
      const targetScroll = typeof scrollProgress === 'number'
        ? scrollProgress
        : (scrollProgress && typeof scrollProgress.get === 'function' ? scrollProgress.get() : 0);

      // Smoothly lerp scroll progress with responsive, fluid response
      progressRef.current += (targetScroll - progressRef.current) * 0.085;
      const rawP = Math.max(0, Math.min(1, progressRef.current));
      
      // Custom easeInOut curve for steady, continuous flight
      const easeInOutQuad = rawP < 0.5 
        ? 2 * rawP * rawP 
        : 1 - Math.pow(-2 * rawP + 2, 2) / 2;
      const p = easeInOutQuad;

      // Reveal full card details early so they remain visible throughout placement
      setIsCardMode(p > 0.35);

      // Softly damp ring container opacity as cards fly out
      if (ringContainerRef.current) {
        ringContainerRef.current.style.opacity = Math.max(0, 1 - p * 1.5).toFixed(2);
      }

      // Target rotation speed for rings around laptop (damped as scroll increases)
      let targetSpeed = Math.max(0, 1.0 - p * 1.6);
      if (selectedIdRef.current !== null && p < 0.3) {
        targetSpeed = 0.0;
      } else if (hoveredIdRef.current !== null && p < 0.3) {
        targetSpeed = 0.1;
      }

      speedMultiplierRef.current += (targetSpeed - speedMultiplierRef.current) * 0.1;

      if (previousTimeRef.current !== undefined) {
        const delta = Math.min(time - previousTimeRef.current, 32);
        const cssSpeedMult = getCssRotationSpeed();
        
        // Update orbital node angle (balanced smooth, lively revolution)
        angleRef.current = (angleRef.current + delta * 0.026 * speedMultiplierRef.current * cssSpeedMult) % 360;

        // Update SVG ring track rotation angles
        const ringSpeeds = [0.008, -0.009, 0.008];
        [0, 1, 2].forEach((ringIdx) => {
          const ringEl = ringRefs.current[ringIdx];
          if (ringEl) {
            ringAnglesRef.current[ringIdx] =
              (ringAnglesRef.current[ringIdx] + delta * ringSpeeds[ringIdx] * speedMultiplierRef.current * cssSpeedMult) % 360;
            const rotation = `rotate(${ringAnglesRef.current[ringIdx].toFixed(2)}deg)`;
            ringEl.style.transform = ringIdx === 2 ? `translateY(-8px) ${rotation}` : rotation;
          }
        });
      }
      previousTimeRef.current = time;

      // Update service nodes position, depth, opacity, scale, and transition to card slots
      SERVICES.forEach((service, index) => {
        const el = nodeRefs.current[index];
        if (!el) return;

        const isSelectedNode = selectedIdRef.current === service.id;
        const isHoveredNode = hoveredIdRef.current === service.id && selectedIdRef.current === null;

        let targetNodeScale = 1.0;
        if (isSelectedNode && p < 0.3) {
          targetNodeScale = 1.14;
        } else if (isHoveredNode && p < 0.3) {
          targetNodeScale = 1.10;
        }
        
        nodeHoverScalesRef.current[index] +=
          (targetNodeScale - nodeHoverScalesRef.current[index]) * 0.12;

        const radius = getRingRadius(service.ringIndex);
        const ringAngle = ringAnglesRef.current[service.ringIndex] || 0;
        const curAngleDeg = (angleRef.current * service.direction + service.baseAngle + ringAngle) % 360;
        const curAngleRad = (curAngleDeg * Math.PI) / 180;

        const xFlat = Math.cos(curAngleRad) * radius;
        const yFlat = Math.sin(curAngleRad) * radius;

        // Exact match for CSS transform: rotateX(60deg) rotateZ(-4deg)
        // CSS applies rotateZ(-4deg) in 2D space first, then tilts along Y by rotateX(60deg)
        const rotZRad = (-4 * Math.PI) / 180;
        const cosZ = Math.cos(rotZRad);
        const sinZ = Math.sin(rotZRad);

        // 1. Rotate in 2D plane by -4deg
        const x1 = xFlat * cosZ - yFlat * sinZ;
        const y1 = xFlat * sinZ + yFlat * cosZ;

        // 2. Apply rotateX(60deg) tilt to Y
        const orbitX = x1;
        const orbitY = y1 * cosTilt;
        const zDepth = y1 * sinTilt;

        nodeXPosRef.current[service.id] = orbitX;

        const isFront = zDepth > LAPTOP_Z;

        const zIndex = p > 0.5
          ? 100 + index
          : isSelectedNode
          ? 50
          : isFront
          ? 25 + Math.round((zDepth / radius) * 20)
          : 5 + Math.round(Math.max(0, ((zDepth + radius) / (radius * 2)) * 9));

        const depthFactor = (zDepth + radius) / (radius * 2);
        const baseScale = 0.82 + depthFactor * 0.28;
        const orbitScale = baseScale * nodeHoverScalesRef.current[index];

        let orbitOpacity = 0.88 + depthFactor * 0.12;
        if (selectedIdRef.current !== null && !isSelectedNode) {
          orbitOpacity *= 0.7;
        }

        // Slot vector target in Services grid
        const slotVector = slotVectorsRef.current[index] || { x: orbitX, y: orbitY + 500, width: 340, height: 280 };

        // Silky smooth curved spatial flight trajectory:
        // A gentle aerodynamic upward arc so the cards don't just slide mechanically down,
        // but feel organically propelled out of the 3D orbital rings and land softly into their slots.
        const arcLift = Math.sin(p * Math.PI) * -38;
        const finalX = orbitX * (1 - p) + slotVector.x * p;
        const finalY = orbitY * (1 - p) + slotVector.y * p + arcLift;
        const finalScale = orbitScale * (1 - p) + 1.0 * p;
        const finalOpacity = orbitOpacity * (1 - p) + 1.0 * p;

        el.style.transform = `translate(-50%, -50%) translate3d(${finalX.toFixed(2)}px, ${finalY.toFixed(2)}px, 0px) scale(${finalScale.toFixed(3)})`;
        el.style.zIndex = zIndex;
        el.style.opacity = finalOpacity.toFixed(3);

        // Adjust dimensions and card morph properties continuously during scroll
        if (p > 0.04 && slotVector.width && slotVector.height) {
          const morph = Math.min(1, Math.max(0, (p - 0.04) / 0.88));
          // Smooth Hermite interpolation for dimensions
          const smoothMorph = morph * morph * (3 - 2 * morph);
          const labelW = 140;
          const labelH = 38;
          const currentW = labelW * (1 - smoothMorph) + slotVector.width * smoothMorph;
          const currentH = labelH * (1 - smoothMorph) + slotVector.height * smoothMorph;
          el.style.width = `${currentW.toFixed(1)}px`;
          el.style.height = `${currentH.toFixed(1)}px`;

          // Frame-driven CSS custom properties for continuous card transition
          el.style.setProperty('--bg-op', (0.85 * (1 - smoothMorph) + smoothMorph * 0.96).toFixed(3));
          el.style.setProperty('--border-op', (0.60 * (1 - smoothMorph) + smoothMorph * 0.85).toFixed(3));
          el.style.setProperty('--body-op', Math.min(1, Math.max(0, (morph - 0.14) / 0.72)).toFixed(3));
          el.style.setProperty('--body-display', morph > 0.05 ? 'flex' : 'none');
          el.style.setProperty('--body-y', `${((1 - smoothMorph) * 12).toFixed(1)}px`);
          el.style.setProperty('--card-pad-v', `${(0.25 + smoothMorph * 1.0).toFixed(2)}rem`);
          el.style.setProperty('--card-pad-h', `${(0.5 + smoothMorph * 0.95).toFixed(2)}rem`);
          el.style.setProperty('--icon-size', `${(2.0 + smoothMorph * 0.85).toFixed(2)}rem`);
        } else {
          el.style.width = 'auto';
          el.style.height = 'auto';
          el.style.setProperty('--bg-op', '0.85');
          el.style.setProperty('--border-op', '0.60');
          el.style.setProperty('--body-op', '0');
          el.style.setProperty('--body-display', 'none');
          el.style.setProperty('--body-y', '12px');
          el.style.setProperty('--card-pad-v', '0.25rem');
          el.style.setProperty('--card-pad-h', '0.5rem');
          el.style.setProperty('--icon-size', '2.0rem');
        }

        const connectorGroup = connectorGroupRefs.current[index];
        const connectorBasePath = connectorBasePathRefs.current[index];
        const connectorFlowPath = connectorFlowPathRefs.current[index];
        const orbitContainer = containerRef.current;
        if (connectorGroup && connectorBasePath && connectorFlowPath && orbitContainer) {
          const containerWidth = orbitContainer.clientWidth;
          const containerHeight = orbitContainer.clientHeight;
          const centerX = containerWidth / 2;
          const centerY = containerHeight / 2;
          const distance = Math.hypot(finalX, finalY);
          const unitX = distance ? finalX / distance : 0;
          const unitY = distance ? finalY / distance : 0;
          const laptopRadius = (laptopVisualRef.current?.clientWidth || containerWidth * 0.38) * 0.38;
          const connectorProgress = p > 0.04 && slotVector.width && slotVector.height
            ? Math.min(1, Math.max(0, (p - 0.04) / 0.88))
            : 0;
          const smoothConnectorProgress = connectorProgress * connectorProgress * (3 - 2 * connectorProgress);
          const nodeWidth = 140 * (1 - smoothConnectorProgress) + (slotVector.width || 140) * smoothConnectorProgress;
          const nodeHeight = 38 * (1 - smoothConnectorProgress) + (slotVector.height || 38) * smoothConnectorProgress;
          const halfWidth = (nodeWidth * finalScale) / 2;
          const halfHeight = (nodeHeight * finalScale) / 2;
          const cardEdgeDistance = Math.min(
            halfWidth / Math.max(Math.abs(unitX), 0.001),
            halfHeight / Math.max(Math.abs(unitY), 0.001)
          );
          const endDistance = distance - cardEdgeDistance - 7;

          connectorGroup.style.opacity = Math.max(0, 1 - p * 1.3).toFixed(2);
          if (distance > laptopRadius + cardEdgeDistance + 8 && containerWidth && containerHeight) {
            const startX = centerX + unitX * laptopRadius;
            const startY = centerY + unitY * laptopRadius;
            const endX = centerX + unitX * endDistance;
            const endY = centerY + unitY * endDistance;
            const curve = Math.min(26, (endDistance - laptopRadius) * 0.08) * (index % 2 === 0 ? 1 : -1);
            const controlX = (startX + endX) / 2 - unitY * curve;
            const controlY = (startY + endY) / 2 + unitX * curve;
            const toSvgX = (x) => (x / containerWidth) * 1000;
            const toSvgY = (y) => (y / containerHeight) * 1000;
            const path = `M ${toSvgX(startX).toFixed(2)} ${toSvgY(startY).toFixed(2)} Q ${toSvgX(controlX).toFixed(2)} ${toSvgY(controlY).toFixed(2)} ${toSvgX(endX).toFixed(2)} ${toSvgY(endY).toFixed(2)}`;
            connectorBasePath.setAttribute('d', path);
            connectorFlowPath.setAttribute('d', path);
          } else {
            connectorBasePath.setAttribute('d', '');
            connectorFlowPath.setAttribute('d', '');
          }
        }
      });

      requestRef.current = requestAnimationFrame(updatePositions);
    };

    requestRef.current = requestAnimationFrame(updatePositions);
    return () => cancelAnimationFrame(requestRef.current);
  }, [getRingRadius, getCssRotationSpeed, cosTilt, sinTilt, scrollProgress]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      ref={containerRef}
      className="orbit-container"
    >
      {/* ── Ambient Core Glow ── */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[62%] h-[62%] rounded-full bg-gradient-to-tr from-cyan-600/18 via-blue-600/15 to-purple-600/18 blur-[110px]" />
      </div>

      {/* ── ORBITAL RINGS (tilted container) ── */}
      <div
        ref={ringContainerRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 will-change-[opacity,transform]"
        style={{
          transform: `rotateX(${tiltDegrees}deg) rotateZ(-4deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {[0, 1, 2].map((ringIdx) => {
          const r = radii[ringIdx] ?? 210;
          const isUppermostRing = ringIdx === 2;
          const ringRy = isUppermostRing ? r * 0.985 : r;
          const depthOffsets = [
            [22, 20, 18, 16, 14, 12, 10, 8, 6, 4, 2],
            [12, 10, 8, 6, 4, 2],
            [10, 8, 6, 4, 2],
          ][ringIdx];
          const ringStrokeWidths = [4.5, 3.25, 2.6];

          const strokeColors  = ['#4f46e5', '#9333ea', '#06b6d4'];
          const midColors     = ['#818cf8', '#c084fc', '#38bdf8'];
          const glowColors    = [
            'rgba(79,70,229,0.38)',
            'rgba(147,51,234,0.42)',
            'rgba(6,182,212,0.48)',
          ];

          return (
            <div
              key={ringIdx}
              ref={(el) => (ringRefs.current[ringIdx] = el)}
              className="absolute rounded-full will-change-transform"
              style={{
                width:  `${r * 2}px`,
                height: `${r * 2}px`,
                filter: `drop-shadow(0 0 14px ${glowColors[ringIdx]}) drop-shadow(0 0 28px ${glowColors[ringIdx]})`,
              }}
            >
              <svg className="w-full h-full absolute inset-0 overflow-visible">
                <defs>
                  <linearGradient id={`grad-${ringIdx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"   stopColor={strokeColors[ringIdx]} stopOpacity="1"    />
                    <stop offset="30%"  stopColor={midColors[ringIdx]}    stopOpacity="0.75" />
                    <stop offset="65%"  stopColor={midColors[ringIdx]}    stopOpacity="0.55" />
                    <stop offset="100%" stopColor={strokeColors[ringIdx]} stopOpacity="1"    />
                  </linearGradient>

                  {isUppermostRing && (
                    <>
                      <linearGradient id={`ringDepth-${ringIdx}`} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#164e63" />
                        <stop offset="55%" stopColor="#0e7490" />
                        <stop offset="100%" stopColor="#22d3ee" />
                      </linearGradient>
                      <linearGradient id={`ringHighlight-${ringIdx}`} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#cffafe" stopOpacity="0.02" />
                        <stop offset="72%" stopColor="#cffafe" stopOpacity="0.12" />
                        <stop offset="100%" stopColor="#cffafe" stopOpacity="0.78" />
                      </linearGradient>
                    </>
                  )}

                  <filter id={`ringGlow-${ringIdx}`} x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Orbit track */}
                {depthOffsets.map((offset, layerIdx) => (
                  <ellipse
                    key={`depth-${layerIdx}`}
                    cx="50%"
                    cy="50%"
                    rx={r}
                    ry={ringRy}
                    fill="none"
                    stroke={isUppermostRing ? `url(#ringDepth-${ringIdx})` : `url(#grad-${ringIdx})`}
                    strokeWidth={isUppermostRing ? 4.4 : ringStrokeWidths[ringIdx]}
                    strokeOpacity={isUppermostRing ? 0.34 : 0.22}
                    transform={`translate(0 ${offset})`}
                  />
                ))}
                <ellipse
                  cx="50%" cy="50%" rx={r} ry={ringRy}
                  fill="none"
                  stroke={`url(#grad-${ringIdx})`}
                  strokeWidth={ringStrokeWidths[ringIdx]}
                  filter={`url(#ringGlow-${ringIdx})`}
                />
                {isUppermostRing && (
                  <ellipse
                    cx="50%"
                    cy="50%"
                    rx={r}
                    ry={ringRy}
                    fill="none"
                    stroke={`url(#ringHighlight-${ringIdx})`}
                    strokeWidth="1.2"
                    transform="translate(0 1)"
                  />
                )}

                {/* Arrow markers */}
                {[0, 90, 180, 270].map((angle, idx) => {
                  const rad = (angle * Math.PI) / 180;
                  const ax = 50 + (r * Math.cos(rad) / (r * 2)) * 100;
                  const ay = 50 + (ringRy * Math.sin(rad) / (r * 2)) * 100;
                  const tangent = angle + (ringIdx === 1 ? -90 : 90);
                  return (
                    <g key={idx} transform={`translate(${ax}%, ${ay}%) rotate(${tangent})`}>
                      <path
                        d="M -4.5 -4 L 5.5 0 L -4.5 4 z"
                        fill={strokeColors[ringIdx]}
                        opacity="0.95"
                        filter={`drop-shadow(0 0 7px ${strokeColors[ringIdx]})`}
                      />
                    </g>
                  );
                })}

                {/* Particles */}
                {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((angle, pIdx) => {
                  const rad = (angle * Math.PI) / 180;
                  const px = 50 + (r * Math.cos(rad) / (r * 2)) * 100;
                  const py = 50 + (ringRy * Math.sin(rad) / (r * 2)) * 100;
                  const pRadius = pIdx % 4 === 0 ? 3.5 : pIdx % 3 === 0 ? 2.5 : 1.8;
                  return (
                    <circle
                      key={pIdx}
                      cx={`${px}%`} cy={`${py}%`} r={pRadius}
                      fill={midColors[ringIdx]}
                      opacity="0.65"
                      filter={`drop-shadow(0 0 6px ${strokeColors[ringIdx]})`}
                    />
                  );
                })}
              </svg>
            </div>
          );
        })}
      </div>

      {/* ── CENTER: LAPTOP REFERENCE IMAGE (completely fixed in Hero) ── */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 z-[1] h-full w-full overflow-visible pointer-events-none"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        {SERVICES.map((service, index) => (
          <g key={`connector-${service.id}`} ref={(el) => (connectorGroupRefs.current[index] = el)}>
            <path
              ref={(el) => (connectorBasePathRefs.current[index] = el)}
              className="orbit-connector-base"
            />
            <path
              ref={(el) => (connectorFlowPathRefs.current[index] = el)}
              className="orbit-connector-flow"
            />
          </g>
        ))}
      </svg>

      <div
        className="absolute inset-0 pointer-events-none flex items-center justify-center transition-none"
        style={{ zIndex: 20 }}
      >
        <div className="absolute w-[120%] h-[120%] rounded-full bg-cyan-500/15 blur-3xl pointer-events-none -z-10" />
        <div className="absolute left-1/2 top-[67%] h-7 w-[42%] -translate-x-1/2 rounded-[50%] bg-slate-950/70 blur-xl" />

        <div
          ref={laptopVisualRef}
          className="relative pointer-events-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
          style={{ width: 'min(38%, 18rem)', aspectRatio: '1.65 / 1' }}
        >
          <React.Suspense
            fallback={<div className="ecosystem-laptop-scene" aria-hidden="true" />}
          >
            <EcosystemLaptop3D
              isVisible
              shouldReduceMotion
              initialRotationY={-0.14}
              groundedShadow
              preferThreeD
            />
          </React.Suspense>
        </div>
      </div>

      {/* ── SERVICE NODES (morph into Service Cards) ── */}
      {SERVICES.map((service, index) => {
        const IconComponent = service.icon;
        const isHovered = hoveredId === service.id && selectedId === null;
        const isSelected = selectedId === service.id;
        const subItems = SERVICE_SUBMENUS[service.id];
        const isNodeOnRight = selectedIsRight;

        const r = radii[service.ringIndex] ?? 210;
        const curAngleRad = (service.baseAngle * Math.PI) / 180;
        const xFlat = Math.cos(curAngleRad) * r;
        const yFlat = Math.sin(curAngleRad) * r;
        const rotZRad = (-4 * Math.PI) / 180;
        const x1 = xFlat * Math.cos(rotZRad) - yFlat * Math.sin(rotZRad);
        const y1 = xFlat * Math.sin(rotZRad) + yFlat * Math.cos(rotZRad);
        const initX = x1;
        const initY = y1 * cosTilt;
        const initZ = y1 * sinTilt;
        const initDepth = (initZ + r) / (r * 2);
        const initScale = 0.82 + initDepth * 0.28;
        const initZIndex = initZ > 0 ? 25 + Math.round((initZ / r) * 20) : 5;
        const initOpacity = 0.88 + initDepth * 0.12;

        return (
          <div
            key={service.id}
            ref={(el) => (nodeRefs.current[index] = el)}
            onMouseEnter={() => handleMouseEnter(service.id)}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => handleNodeClick(e, service.id)}
            className="absolute top-1/2 left-1/2 pointer-events-auto cursor-pointer group flex flex-col will-change-[transform,opacity]"
            style={{
              transform: `translate(-50%, -50%) translate3d(${initX.toFixed(2)}px, ${initY.toFixed(2)}px, 0px) scale(${initScale.toFixed(3)})`,
              zIndex: initZIndex,
              opacity: initOpacity.toFixed(3),
            }}
          >
            {/* Animated Glow Behind Card / Node */}
            <div
              className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${service.cardColor} blur transition duration-500 pointer-events-none ${
                isCardMode ? 'opacity-0 group-hover:opacity-60' : 'opacity-0 group-hover:opacity-40'
              }`}
            />

            <div
              className={`relative rounded-2xl h-full flex flex-col group-hover:border-cyan-400/90 overflow-hidden ${
                isSelected && !isCardMode
                  ? 'scale-110 drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]'
                  : ''
              }`}
              style={{
                backgroundColor: 'rgba(15, 23, 42, var(--bg-op, 0.85))',
                borderColor: 'rgba(51, 65, 85, var(--border-op, 0.60))',
                borderWidth: '1px',
                borderStyle: 'solid',
                padding: 'var(--card-pad-v, 0.25rem) var(--card-pad-h, 0.5rem)',
                boxShadow: '0 calc(10px * var(--bg-op, 0.85)) calc(30px * var(--bg-op, 0.85)) rgba(0, 0, 0, calc(0.5 * var(--bg-op, 0.85)))',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
            >
              {/* Header Row: Icon & Title */}
              <div className={`flex items-center gap-2 sm:gap-2.5 ${isCardMode ? 'mb-1' : ''}`}>
                <div className="relative shrink-0">
                  <span
                    className={`absolute inset-0 rounded-full ${service.pingColor} opacity-30 animate-ping`}
                    style={{ animationDuration: '2.4s' }}
                  />
                  <div
                    className={`
                      relative flex items-center justify-center
                      bg-gradient-to-br ${service.bgGradient}
                      border ${service.borderColor} ${service.glowColor}
                      text-white shadow-lg transition-transform duration-300 rounded-xl
                      ${isHovered ? 'scale-105' : ''}
                    `}
                    style={{
                      width: 'var(--icon-size, 2.0rem)',
                      height: 'var(--icon-size, 2.0rem)',
                    }}
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-[0_2px_5px_rgba(0,0,0,0.55)]" />
                  </div>
                </div>

                <div className="flex flex-col text-left font-sans min-w-0">
                  <h3
                    className="font-extrabold text-white group-hover:text-cyan-300 transition-colors leading-tight text-xs sm:text-sm whitespace-nowrap drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]"
                    style={{
                      textShadow: `0 0 10px ${service.color}88`,
                    }}
                  >
                    {service.name}
                  </h3>
                </div>
              </div>

              {/* Description & Explore Link (Continuous smooth fade & translation) */}
              <div
                className="flex-1 flex-col justify-between mt-2 pointer-events-auto"
                style={{
                  display: 'var(--body-display, none)',
                  opacity: 'var(--body-op, 0)',
                  transform: 'translateY(var(--body-y, 14px))',
                }}
              >
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3 line-clamp-3">
                  {service.desc}
                </p>

                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (service && service.link) {
                      navigate(service.link);
                    }
                  }}
                  className="w-full inline-flex items-center justify-between gap-2 px-3.5 py-2 sm:py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 mt-auto cursor-pointer relative z-50 group/btn shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] active:scale-95 hover:scale-[1.02] pointer-events-auto"
                >
                  <span>Explore Service</span>
                  <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Submenu Overlay in Hero Mode */}
            <AnimatePresence>
              {!isCardMode && isSelected && subItems && subItems.length > 0 && (
                <motion.div
                  key={`submenu-${service.id}`}
                  initial={{ opacity: 0, x: isNodeOnRight ? 14 : -14, scale: 0.92 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: isNodeOnRight ? 14 : -14, scale: 0.92 }}
                  transition={{
                    type: 'spring',
                    stiffness: 280,
                    damping: 24,
                    mass: 0.8,
                    ease: 'easeInOut',
                  }}
                  className={`absolute top-1/2 -translate-y-1/2 ${
                    isNodeOnRight ? 'right-full mr-3.5' : 'left-full ml-3.5'
                  } w-52 sm:w-60 z-[60] pointer-events-auto`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative p-2 sm:p-2.5 rounded-2xl bg-slate-950/90 backdrop-blur-2xl border border-cyan-400/40 shadow-[0_12px_40px_rgba(0,0,0,0.92),0_0_25px_rgba(6,182,212,0.25)] ring-1 ring-white/10 flex flex-col gap-1.5 overflow-hidden">
                    <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

                    <div className="px-2.5 pt-1 pb-1 flex items-center justify-between border-b border-white/10 mb-0.5">
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                        {service.name}
                      </span>
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400/80" />
                    </div>

                    {subItems.map((sub) => {
                      const SubIcon = sub.icon;
                      const isHtml = sub.path.includes('.html');
                      if (isHtml) {
                        return (
                          <a
                            key={sub.id || sub.name}
                            href={sub.path}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedId(null);
                              selectedIdRef.current = null;
                            }}
                            className="group/sub flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.03] hover:bg-cyan-500/15 border border-white/5 hover:border-cyan-400/40 transition-all duration-200"
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 group-hover/sub:bg-cyan-400 group-hover/sub:text-slate-950 transition-colors duration-200 shrink-0">
                                <SubIcon className="w-3.5 h-3.5" />
                              </div>
                              <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover/sub:text-white transition-colors duration-200 truncate">
                                {sub.name}
                              </span>
                            </div>
                            <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover/sub:text-cyan-300 group-hover/sub:translate-x-0.5 transition-all duration-200 shrink-0 ml-1" />
                          </a>
                        );
                      }
                      return (
                        <Link
                          key={sub.id || sub.name}
                          to={sub.path}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedId(null);
                            selectedIdRef.current = null;
                          }}
                          className="group/sub flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.03] hover:bg-cyan-500/15 border border-white/5 hover:border-cyan-400/40 transition-all duration-200"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 group-hover/sub:bg-cyan-400 group-hover/sub:text-slate-950 transition-colors duration-200 shrink-0">
                              <SubIcon className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover/sub:text-white transition-colors duration-200 truncate">
                              {sub.name}
                            </span>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover/sub:text-cyan-300 group-hover/sub:translate-x-0.5 transition-all duration-200 shrink-0 ml-1" />
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </motion.div>
  );
});

export default ServicesOrbital3D;

