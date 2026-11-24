import React, { useEffect, useRef } from 'react';

/**
 * CanvasParticleField Component
 * Renders a lightweight, high-performance canvas-based particle field
 * with floating glowing dots, pulsing circuit nodes, dynamic vector traces,
 * and traveling electron light pulses.
 *
 * @param {Object} props
 * @param {'cyan' | 'purple' | 'emerald' | 'blue' | 'rgb' | 'indigo' | 'slate'} [props.variant='cyan'] - Color theme
 * @param {'circuit' | 'dots' | 'mixed'} [props.mode='mixed'] - Particle structure mode
 * @param {number} [props.density=40] - Desired particle count
 * @param {boolean} [props.interactive=true] - Enable gentle mouse cursor interaction
 * @param {number} [props.speed=0.4] - Movement speed multiplier
 * @param {string} [props.className=''] - Additional CSS classes
 */
export default function CanvasParticleField({
  variant = 'cyan',
  mode = 'mixed',
  density = 40,
  interactive = true,
  speed = 0.4,
  className = '',
}) {
  const canvasRef = useRef(null);

  // Palettes for themes
  const colorMap = {
    cyan: {
      primary: '#06b6d4',
      secondary: '#3b82f6',
      accent: '#22d3ee',
      rgbPrimary: '6, 182, 212',
      rgbSecondary: '59, 130, 246',
      lineAlpha: 0.16,
    },
    purple: {
      primary: '#a855f7',
      secondary: '#6366f1',
      accent: '#c084fc',
      rgbPrimary: '168, 85, 247',
      rgbSecondary: '99, 102, 241',
      lineAlpha: 0.15,
    },
    emerald: {
      primary: '#10b981',
      secondary: '#14b8a6',
      accent: '#34d399',
      rgbPrimary: '16, 185, 129',
      rgbSecondary: '20, 184, 166',
      lineAlpha: 0.15,
    },
    blue: {
      primary: '#3b82f6',
      secondary: '#06b6d4',
      accent: '#60a5fa',
      rgbPrimary: '59, 130, 246',
      rgbSecondary: '6, 182, 212',
      lineAlpha: 0.15,
    },
    indigo: {
      primary: '#6366f1',
      secondary: '#8b5cf6',
      accent: '#818cf8',
      rgbPrimary: '99, 102, 241',
      rgbSecondary: '139, 92, 246',
      lineAlpha: 0.15,
    },
    rgb: {
      primary: '#06b6d4',
      secondary: '#a855f7',
      accent: '#f43f5e',
      rgbPrimary: '6, 182, 212',
      rgbSecondary: '168, 85, 247',
      lineAlpha: 0.16,
    },
    slate: {
      primary: '#94a3b8',
      secondary: '#64748b',
      accent: '#cbd5e1',
      rgbPrimary: '148, 163, 184',
      rgbSecondary: '100, 116, 139',
      lineAlpha: 0.12,
    },
    rose: {
      primary: '#f43f5e',
      secondary: '#e11d48',
      accent: '#fb7185',
      rgbPrimary: '244, 63, 94',
      rgbSecondary: '225, 29, 72',
      lineAlpha: 0.16,
    },
    red: {
      primary: '#ef4444',
      secondary: '#dc2626',
      accent: '#f87171',
      rgbPrimary: '239, 68, 68',
      rgbSecondary: '220, 38, 38',
      lineAlpha: 0.16,
    },
  };

  const palette = colorMap[variant] || colorMap.cyan;

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

    // Calculate count based on viewport area
    const calculatedCount = Math.min(
      density,
      Math.max(20, Math.floor((width * height) / 22000))
    );

    const particles = [];
    for (let i = 0; i < calculatedCount; i++) {
      const isChip = mode === 'mixed' && Math.random() > 0.65;
      const isLargeGlow = Math.random() > 0.85;

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed * (isLargeGlow ? 0.6 : 1),
        vy: (Math.random() - 0.5) * speed * (isLargeGlow ? 0.6 : 1),
        radius: isLargeGlow ? Math.random() * 2 + 2.5 : Math.random() * 1.5 + 1,
        type: isChip ? 'chip' : isLargeGlow ? 'glow' : 'dot',
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.015 + Math.random() * 0.025,
        baseAlpha: Math.random() * 0.35 + 0.25,
      });
    }

    // Mouse tracking for subtle hover repulsion & attraction
    const mouse = { x: -2000, y: -2000, radius: 150 };

    const handleMouseMove = (e) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -2000;
      mouse.y = -2000;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    // Traveling light pulses
    const pulses = [];
    let frameCount = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render & Update Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        // Bounce gently at screen edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Interactive mouse deflection
        if (interactive) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius && dist > 0) {
            const force = (mouse.radius - dist) / mouse.radius;
            p.x -= (dx / dist) * force * 1.5;
            p.y -= (dy / dist) * force * 1.5;
          }
        }

        // Pulse intensity calculation
        p.pulse += p.pulseSpeed;
        const currentAlpha = p.baseAlpha + Math.sin(p.pulse) * 0.2;
        const boundedAlpha = Math.max(0.1, Math.min(1, currentAlpha));

        // Draw particle based on type
        if (p.type === 'chip') {
          // Micro-chip square component
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.fillStyle = `rgba(${palette.rgbPrimary}, ${boundedAlpha})`;
          ctx.fillRect(-p.radius, -p.radius, p.radius * 2, p.radius * 2);
          ctx.strokeStyle = `rgba(${palette.rgbSecondary}, ${boundedAlpha * 0.8})`;
          ctx.lineWidth = 0.5;
          ctx.strokeRect(-p.radius - 1, -p.radius - 1, (p.radius + 1) * 2, (p.radius + 1) * 2);
          ctx.restore();
        } else if (p.type === 'glow') {
          // Large glowing orb with radial aura
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4);
          gradient.addColorStop(0, `rgba(${palette.rgbPrimary}, ${boundedAlpha * 0.9})`);
          gradient.addColorStop(0.5, `rgba(${palette.rgbSecondary}, ${boundedAlpha * 0.3})`);
          gradient.addColorStop(1, 'transparent');

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = palette.accent;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 0.8, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Standard light dot
          ctx.fillStyle = `rgba(${palette.rgbPrimary}, ${boundedAlpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw circuit connections between neighboring nodes
        if (mode !== 'dots') {
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const pdist = Math.hypot(p.x - p2.x, p.y - p2.y);
            const maxConnectDist = 130;

            if (pdist < maxConnectDist) {
              const lineAlpha = (1 - pdist / maxConnectDist) * palette.lineAlpha;
              ctx.strokeStyle = `rgba(${palette.rgbPrimary}, ${lineAlpha})`;
              ctx.lineWidth = 0.65;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);

              // Create realistic circuit trace 90-degree bends on select paths
              if (pdist > 50 && (i + j) % 2 === 0) {
                const midX = (p.x + p2.x) / 2;
                ctx.lineTo(midX, p.y);
                ctx.lineTo(p2.x, p2.y);
              } else {
                ctx.lineTo(p2.x, p2.y);
              }
              ctx.stroke();

              // Occasionally spawn electron light pulse along trace
              if (frameCount % 120 === 0 && pulses.length < 8 && Math.random() > 0.82) {
                pulses.push({
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
      }

      // Render traveling electron light pulses
      if (mode !== 'dots') {
        for (let k = pulses.length - 1; k >= 0; k--) {
          const pulse = pulses[k];
          pulse.progress += pulse.speed;

          if (pulse.progress >= 1) {
            pulses.splice(k, 1);
            continue;
          }

          const currX = pulse.fromX + (pulse.toX - pulse.fromX) * pulse.progress;
          const currY = pulse.fromY + (pulse.toY - pulse.fromY) * pulse.progress;

          ctx.fillStyle = palette.accent;
          ctx.shadowColor = palette.accent;
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(currX, currY, 1.8, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        }
      }

      frameCount++;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, interactive, mode, palette, speed]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
