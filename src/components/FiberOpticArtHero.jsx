import React, { useEffect, useRef } from 'react';

/**
 * FiberOpticArtHero
 * High-end generative fiber-optic particle & curl-noise strand canvas.
 * Renders glowing electric magenta, violet, and cyan organic flowing fiber strands
 * reminiscent of modern generative 3D organic sculpture art.
 */
export default function FiberOpticArtHero({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 550);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 550);

    // Particle & Strand Config
    const STRAND_COUNT = 90;
    const SEGMENTS_PER_STRAND = 26;
    
    // Color Palettes (Electric Magenta, Radiant Purple, Vivid Cyan, Soft White Highlights)
    const PALETTE = [
      { r: 217, g: 70, b: 239 }, // Neon Fuchsia #d946ef
      { r: 168, g: 85, b: 247 }, // Electric Purple #a855f7
      { r: 236, g: 72, b: 153 }, // Hot Pink #ec4899
      { r: 56, g: 189, b: 248 },  // Electric Cyan #38bdf8
      { r: 129, g: 140, b: 248 }, // Indigo glow #818cf8
      { r: 244, g: 114, b: 182 }, // Soft Magenta
    ];

    class Strand {
      constructor(index) {
        this.index = index;
        this.init();
      }

      init() {
        // Form a 3D-like organic curved volume
        const phi = Math.random() * Math.PI * 2;
        const theta = (Math.random() - 0.5) * Math.PI * 0.8;
        const baseRadius = (Math.min(width, height) * 0.28) * (0.5 + Math.random() * 0.6);

        this.baseX = Math.cos(phi) * Math.cos(theta) * baseRadius;
        this.baseY = Math.sin(theta) * baseRadius * 0.95;
        this.baseZ = Math.sin(phi) * Math.cos(theta) * baseRadius;

        this.speed = 0.008 + Math.random() * 0.012;
        this.offset = Math.random() * 100;
        this.color = PALETTE[this.index % PALETTE.length];
        this.width = 1.2 + Math.random() * 1.6;
        this.alpha = 0.55 + Math.random() * 0.35;

        this.points = [];
        for (let i = 0; i < SEGMENTS_PER_STRAND; i++) {
          this.points.push({ x: 0, y: 0, z: 0, px: 0, py: 0 });
        }
      }

      update(time, mouse) {
        const cx = width * 0.52;
        const cy = height * 0.48;

        const rotX = time * 0.15 + mouse.y * 0.4;
        const rotY = time * 0.25 + mouse.x * 0.5;

        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);

        // Compute Head Position with curl/swirl
        const wave = Math.sin(time * 1.5 + this.offset) * 25;
        const swirlAngle = time * this.speed * 20 + this.offset;
        
        const hx = this.baseX + Math.cos(swirlAngle) * (18 + wave * 0.4);
        const hy = this.baseY + Math.sin(swirlAngle * 1.3) * (20 + wave * 0.5);
        const hz = this.baseZ + Math.sin(time + this.offset) * 30;

        // Rotate in 3D Space
        let x1 = hx * cosY - hz * sinY;
        let z1 = hx * sinY + hz * cosY;
        let y1 = hy * cosX - z1 * sinX;
        let z2 = hy * sinX + z1 * cosX;

        // Perspective projection
        const fov = 450;
        const scale = fov / (fov + z2 + 250);

        const head2D = {
          x: cx + x1 * scale,
          y: cy + y1 * scale,
          scale,
          z: z2,
        };

        // Shift existing points like a trailing fiber ribbon
        this.points.pop();
        this.points.unshift(head2D);
      }

      draw(context) {
        if (this.points.length < 2) return;

        context.save();
        context.beginPath();

        const first = this.points[0];
        context.moveTo(first.x, first.y);

        for (let i = 1; i < this.points.length - 1; i++) {
          const xc = (this.points[i].x + this.points[i + 1].x) / 2;
          const yc = (this.points[i].y + this.points[i + 1].y) / 2;
          context.quadraticCurveTo(this.points[i].x, this.points[i].y, xc, yc);
        }

        const c = this.color;
        const grad = context.createLinearGradient(
          this.points[0].x,
          this.points[0].y,
          this.points[this.points.length - 1].x,
          this.points[this.points.length - 1].y
        );

        grad.addColorStop(0, `rgba(${c.r}, ${c.g}, ${c.b}, ${this.alpha})`);
        grad.addColorStop(0.5, `rgba(217, 70, 239, ${this.alpha * 0.8})`);
        grad.addColorStop(1, `rgba(56, 189, 248, 0)`);

        context.strokeStyle = grad;
        context.lineWidth = this.width * (first.scale || 1);
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.shadowColor = `rgba(${c.r}, ${c.g}, ${c.b}, 0.7)`;
        context.shadowBlur = 12;
        context.stroke();

        // Glowing particle head at tip
        if (this.index % 3 === 0) {
          context.beginPath();
          context.arc(first.x, first.y, 2.2 * (first.scale || 1), 0, Math.PI * 2);
          context.fillStyle = `rgba(255, 255, 255, 0.95)`;
          context.shadowColor = `rgba(236, 72, 153, 0.9)`;
          context.shadowBlur = 14;
          context.fill();
        }

        context.restore();
      }
    }

    // Initialize Strands
    const strands = Array.from({ length: STRAND_COUNT }, (_, i) => new Strand(i));

    // Mouse Tracking with Inertia
    let mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.tx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.ty = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Window/Container Resize
    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth || 550;
      height = canvas.height = canvas.parentElement.clientHeight || 550;
      strands.forEach((s) => s.init());
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(canvas.parentElement || document.body);

    let time = 0;

    const render = () => {
      time += 0.02;
      mouse.x += (mouse.tx - mouse.x) * 0.09;
      mouse.y += (mouse.ty - mouse.y) * 0.09;

      ctx.clearRect(0, 0, width, height);

      // Core Ambient Back Glow
      const centerGlow = ctx.createRadialGradient(
        width * 0.52,
        height * 0.48,
        20,
        width * 0.52,
        height * 0.48,
        width * 0.45
      );
      centerGlow.addColorStop(0, 'rgba(168, 85, 247, 0.16)');
      centerGlow.addColorStop(0.4, 'rgba(217, 70, 239, 0.08)');
      centerGlow.addColorStop(0.8, 'rgba(6, 182, 212, 0.03)');
      centerGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = centerGlow;
      ctx.fillRect(0, 0, width, height);

      // Update & Sort Strands by Z-depth for 3D realism
      strands.forEach((s) => s.update(time, mouse));
      strands.sort((a, b) => (b.points[0]?.z || 0) - (a.points[0]?.z || 0));

      // Draw all luminous fibers
      ctx.globalCompositeOperation = 'screen';
      strands.forEach((s) => s.draw(ctx));
      ctx.globalCompositeOperation = 'source-over';

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`relative w-full h-full flex items-center justify-center pointer-events-none ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain pointer-events-auto"
      />
    </div>
  );
}
