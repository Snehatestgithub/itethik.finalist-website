import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, 
  HardDrive, 
  Zap, 
  Activity, 
  Layers, 
  Radio,
  Server,
  Gauge
} from 'lucide-react';

/**
 * DesktopTechParticles Component
 * Renders an ambient, high-tech background composed of:
 * 1. Interactive canvas with floating PCB nodes, circuit bus trace connections, and traveling electron data pulses.
 * 2. Floating holographic hardware spec badges (DDR5, PCIe 5.0, 5.8 GHz, NVMe M.2, RTX Core, etc.).
 * 3. Subtle desktop component SVG silhouettes (CPU die, RAM DIMM, GPU cooler, Circuit traces).
 *
 * @param {Object} props
 * @param {'purple' | 'cyan' | 'emerald' | 'blue' | 'rgb'} [props.variant='purple'] - Theme variant
 * @param {number} [props.density=40] - Number of node particles
 * @param {boolean} [props.showBadges=true] - Show floating hardware spec glyphs
 */
export default function DesktopTechParticles({ 
  variant = 'purple', 
  density = 38,
  showBadges = true 
}) {
  const canvasRef = useRef(null);

  // Variant color palettes
  const palettes = {
    purple: {
      primary: '#a855f7',
      secondary: '#6366f1',
      accent: '#c084fc',
      glow: 'rgba(168, 85, 247, 0.4)',
      lineAlpha: 0.14,
      nodeRgb: '168, 85, 247',
      secondaryRgb: '99, 102, 241',
      badgeBg: 'bg-purple-950/40 border-purple-500/30 text-purple-300',
    },
    cyan: {
      primary: '#06b6d4',
      secondary: '#3b82f6',
      accent: '#22d3ee',
      glow: 'rgba(6, 182, 212, 0.4)',
      lineAlpha: 0.15,
      nodeRgb: '6, 182, 212',
      secondaryRgb: '59, 130, 246',
      badgeBg: 'bg-cyan-950/40 border-cyan-500/30 text-cyan-300',
    },
    emerald: {
      primary: '#10b981',
      secondary: '#14b8a6',
      accent: '#34d399',
      glow: 'rgba(16, 185, 129, 0.4)',
      lineAlpha: 0.14,
      nodeRgb: '16, 185, 129',
      secondaryRgb: '20, 184, 166',
      badgeBg: 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300',
    },
    blue: {
      primary: '#3b82f6',
      secondary: '#06b6d4',
      accent: '#60a5fa',
      glow: 'rgba(59, 130, 246, 0.4)',
      lineAlpha: 0.14,
      nodeRgb: '59, 130, 246',
      secondaryRgb: '6, 182, 212',
      badgeBg: 'bg-blue-950/40 border-blue-500/30 text-blue-300',
    },
    rgb: {
      primary: '#a855f7',
      secondary: '#06b6d4',
      accent: '#ec4899',
      glow: 'rgba(236, 72, 153, 0.4)',
      lineAlpha: 0.15,
      nodeRgb: '168, 85, 247',
      secondaryRgb: '6, 182, 212',
      badgeBg: 'bg-slate-900/60 border-purple-500/30 text-cyan-300',
    }
  };

  const theme = palettes[variant] || palettes.purple;

  // Desktop tech hardware badges floating in the ambient background
  const techBadges = [
    { label: 'DDR5 6000MHz', icon: Activity, top: '12%', left: '8%', delay: 0 },
    { label: 'PCIe 5.0 x16', icon: Zap, top: '24%', right: '10%', delay: 1.5 },
    { label: 'CPU CORE 5.8GHz', icon: Cpu, top: '48%', left: '5%', delay: 2.2 },
    { label: 'NVMe Gen4 7500MB/s', icon: HardDrive, top: '68%', right: '8%', delay: 0.8 },
    { label: 'PWM THERMAL 42°C', icon: Gauge, top: '82%', left: '12%', delay: 3.0 },
    { label: 'ARGB SYNC BUS', icon: Layers, top: '38%', right: '6%', delay: 1.8 },
    { label: 'VRM 16+2 PHASE', icon: Server, top: '88%', right: '14%', delay: 2.5 },
    { label: 'BIOS 2.40 ULTRA', icon: Radio, top: '6%', right: '22%', delay: 3.5 },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes definition
    const particles = [];
    const particleCount = Math.min(density, Math.floor((width * height) / 25000) || 30);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() > 0.85 ? 2.5 : Math.random() * 1.5 + 1,
        type: Math.random() > 0.6 ? 'chip' : 'node', // 'chip' = tiny square, 'node' = dot
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
      });
    }

    // Interactive cursor tracking
    let mouse = { x: -1000, y: -1000, radius: 140 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Packet pulses traveling along circuit vectors
    const packets = [];
    let packetTimer = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce at boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse avoidance / gentle displacement
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius && dist > 0) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 1.2;
          p.y -= (dy / dist) * force * 1.2;
        }

        // Pulse calculation
        p.pulse += p.pulseSpeed;
        const alpha = 0.35 + Math.sin(p.pulse) * 0.25;

        // Render particle
        ctx.fillStyle = `rgba(${theme.nodeRgb}, ${alpha})`;
        if (p.type === 'chip') {
          // Render micro-chip square / capacitor
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.fillRect(-p.radius, -p.radius, p.radius * 2, p.radius * 2);
          ctx.strokeStyle = `rgba(${theme.secondaryRgb}, ${alpha * 0.8})`;
          ctx.lineWidth = 0.5;
          ctx.strokeRect(-p.radius - 1, -p.radius - 1, (p.radius + 1) * 2, (p.radius + 1) * 2);
          ctx.restore();
        } else {
          // Render glowing dot node
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }

        // Connect nearby nodes with circuit lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const pdist = Math.hypot(p.x - p2.x, p.y - p2.y);
          const maxDist = 135;

          if (pdist < maxDist) {
            const lineAlpha = (1 - pdist / maxDist) * theme.lineAlpha;
            ctx.strokeStyle = `rgba(${theme.nodeRgb}, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);

            // True PCB 90-degree trace corner occasionally
            if (pdist > 60 && (i + j) % 3 === 0) {
              const midX = (p.x + p2.x) / 2;
              ctx.lineTo(midX, p.y);
              ctx.lineTo(p2.x, p2.y);
            } else {
              ctx.lineTo(p2.x, p2.y);
            }
            ctx.stroke();

            // Spawn occasional data packet pulse along active connection
            if (packetTimer % 140 === 0 && packets.length < 8 && Math.random() > 0.8) {
              packets.push({
                fromX: p.x,
                fromY: p.y,
                toX: p2.x,
                toY: p2.y,
                progress: 0,
                speed: 0.02 + Math.random() * 0.02,
              });
            }
          }
        }
      }

      // Render traveling electron data packets
      for (let k = packets.length - 1; k >= 0; k--) {
        const pkt = packets[k];
        pkt.progress += pkt.speed;

        if (pkt.progress >= 1) {
          packets.splice(k, 1);
          continue;
        }

        const currX = pkt.fromX + (pkt.toX - pkt.fromX) * pkt.progress;
        const currY = pkt.fromY + (pkt.toY - pkt.fromY) * pkt.progress;

        ctx.fillStyle = theme.accent;
        ctx.shadowColor = theme.accent;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(currX, currY, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      packetTimer++;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, theme]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* 1. Dynamic Motherboard Trace Vector Graphic */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.06] sm:opacity-[0.08]" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern id={`pcb-grid-${variant}`} width="120" height="120" patternUnits="userSpaceOnUse">
          {/* Circuit trace horizontal & 45-degree bends */}
          <path 
            d="M 0 30 L 40 30 L 60 50 L 120 50 M 30 0 L 30 20 L 50 40 L 50 120 M 80 120 L 80 90 L 100 70 L 120 70" 
            stroke={theme.primary} 
            strokeWidth="1.2" 
            fill="none" 
          />
          {/* Solder points & IC landing pads */}
          <circle cx="40" cy="30" r="2.5" fill={theme.primary} />
          <circle cx="60" cy="50" r="2.5" fill={theme.secondary} />
          <circle cx="30" cy="20" r="2.5" fill={theme.primary} />
          <circle cx="100" cy="70" r="2.5" fill={theme.secondary} />
          {/* IC Chip Outline */}
          <rect x="75" y="15" width="22" height="22" rx="3" fill="none" stroke={theme.primary} strokeWidth="1" strokeDasharray="3 2" />
          <circle cx="86" cy="26" r="3" fill={theme.primary} opacity="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#pcb-grid-${variant})`} />
      </svg>

      {/* 2. Interactive Canvas for dynamic nodes & circuit links */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />

      {/* 3. Floating Desktop Tech Silhouettes & Silicon Wafer Graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-Right CPU Socket Matrix Watermark */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 180, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-16 -right-16 w-80 h-80 opacity-[0.04] sm:opacity-[0.06] border border-dashed rounded-full flex items-center justify-center"
          style={{ borderColor: theme.primary }}
        >
          <div className="w-56 h-56 border border-white/20 rounded-2xl flex items-center justify-center">
            <Cpu size={90} className="text-white" />
          </div>
        </motion.div>

        {/* Bottom-Left Motherboard Chipset Heatsink Motif */}
        <div 
          className="absolute -bottom-20 -left-20 w-72 h-72 rounded-3xl opacity-[0.03] sm:opacity-[0.05] border-2 rotate-12 flex items-center justify-center"
          style={{ borderColor: theme.secondary }}
        >
          <div className="grid grid-cols-4 gap-2 p-6">
            {Array.from({ length: 16 }).map((_, idx) => (
              <div key={idx} className="w-6 h-6 rounded bg-white/20" />
            ))}
          </div>
        </div>
      </div>

      {/* 4. Floating Holographic Hardware Spec Badges (Subtle & Translucent) */}
      {showBadges && (
        <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
          {techBadges.map((badge, idx) => {
            const IconComponent = badge.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{
                  opacity: [0.35, 0.75, 0.35],
                  y: [0, -12, 0],
                  x: [0, (idx % 2 === 0 ? 6 : -6), 0],
                }}
                transition={{
                  duration: 8 + (idx % 3) * 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: badge.delay,
                }}
                style={{
                  top: badge.top,
                  left: badge.left,
                  right: badge.right,
                }}
                className={`absolute inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-md text-[11px] font-mono font-semibold tracking-wider uppercase shadow-[0_0_20px_rgba(0,0,0,0.4)] ${theme.badgeBg}`}
              >
                <IconComponent size={12} className="opacity-80" />
                <span>{badge.label}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
