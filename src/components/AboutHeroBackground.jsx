import React, { useEffect, useRef, memo } from 'react';

/**
 * AboutHeroBackground
 * A bespoke, high-performance futuristic cyber-grid & quantum constellation background
 * specifically crafted for the About page hero section.
 * Features:
 * - Dynamic interactive quantum nodes with travelling energy packets
 * - Mouse-interactive laser filaments and proximity glow
 * - High-tech cyber architectural grid lines with pulse beacons
 * - Digital telemetry badges & coordinate markers (+, [CORE.ACTIVE], 0101)
 * - Deep atmospheric cyan-sapphire aurora glow mesh with smooth vignette
 */
function AboutHeroBackground({ className = '' }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let mouse = { x: -1000, y: -1000, active: false, radius: 180 };

    const handleResize = () => {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Node & Pulse Particle System
    const NODE_COUNT = Math.min(Math.floor((width * height) / 14000), 55);
    const nodes = [];
    const colorPalette = [
      { r: 6, g: 182, b: 212 },   // Cyan
      { r: 139, g: 233, b: 207 }, // Mint
      { r: 59, g: 130, b: 246 },  // Royal Blue
      { r: 168, g: 85, b: 247 },  // Soft Purple
    ];

    for (let i = 0; i < NODE_COUNT; i++) {
      const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: 1.5 + Math.random() * 2,
        baseAlpha: 0.35 + Math.random() * 0.45,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        pulseOffset: Math.random() * Math.PI * 2,
        color: col,
      });
    }

    // High-tech travelling data packets
    const packets = [];
    const MAX_PACKETS = 14;

    const spawnPacket = () => {
      if (packets.length >= MAX_PACKETS || nodes.length < 2) return;
      const startIndex = Math.floor(Math.random() * nodes.length);
      // Find nearby node
      const candidates = [];
      const n1 = nodes[startIndex];
      for (let j = 0; j < nodes.length; j++) {
        if (startIndex === j) continue;
        const n2 = nodes[j];
        const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y);
        if (dist < 150) {
          candidates.push(j);
        }
      }
      if (candidates.length > 0) {
        const targetIndex = candidates[Math.floor(Math.random() * candidates.length)];
        packets.push({
          fromIndex: startIndex,
          toIndex: targetIndex,
          progress: 0,
          speed: 0.015 + Math.random() * 0.02,
          color: n1.color,
        });
      }
    };

    // Horizontal & vertical digital circuit scanning beams
    let beamY = 0;
    let beamX = 0;
    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // 1. Subtle Cyber Circuit Grid Lines
      const gridSize = 64;
      ctx.save();
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.035)';

      // Vertical grid lines
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      // Horizontal grid lines
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. High-Tech Hex / Plus Markers at intersections
      ctx.fillStyle = 'rgba(139, 233, 207, 0.12)';
      const markerStep = gridSize * 2;
      for (let x = markerStep; x < width; x += markerStep) {
        for (let y = markerStep; y < height; y += markerStep) {
          const crossSize = 3;
          ctx.fillRect(x - crossSize, y - 0.5, crossSize * 2, 1);
          ctx.fillRect(x - 0.5, y - crossSize, 1, crossSize * 2);
        }
      }
      ctx.restore();

      // 3. Scanning Energy Pulse Beams
      beamY = (beamY + 0.6) % height;
      beamX = (beamX + 0.4) % width;

      // Horizontal beam
      const hGrad = ctx.createLinearGradient(0, beamY, width, beamY);
      hGrad.addColorStop(0, 'rgba(6, 182, 212, 0)');
      hGrad.addColorStop(0.5, 'rgba(139, 233, 207, 0.08)');
      hGrad.addColorStop(1, 'rgba(6, 182, 212, 0)');
      ctx.fillStyle = hGrad;
      ctx.fillRect(0, beamY - 1, width, 2);

      // 4. Update and Draw Nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Wrap around bounds softly
        if (node.x < -20) node.x = width + 20;
        if (node.x > width + 20) node.x = -20;
        if (node.y < -20) node.y = height + 20;
        if (node.y > height + 20) node.y = -20;

        // Mouse interaction
        let mouseInfluence = 0;
        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius) {
            mouseInfluence = (1 - dist / mouse.radius);
            // Slight gentle push
            node.x -= (dx / dist) * mouseInfluence * 0.8;
            node.y -= (dy / dist) * mouseInfluence * 0.8;
          }
        }

        const currentAlpha = Math.min(
          1,
          node.baseAlpha + Math.sin(time * 2 + node.pulseOffset) * 0.2 + mouseInfluence * 0.4
        );
        const currentRadius = node.radius + mouseInfluence * 1.5;

        // Node Glow Halo
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${node.color.r}, ${node.color.g}, ${node.color.b}, ${currentAlpha * 0.18})`;
        ctx.fill();

        // Node Solid Core
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${node.color.r}, ${node.color.g}, ${node.color.b}, ${currentAlpha})`;
        ctx.fill();
      });

      // 5. Connect Nearby Nodes with Laser Filaments
      ctx.lineWidth = 0.8;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y);
          const maxDist = 135;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.22;
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      // 6. Connect Nodes to Mouse Cursor if nearby
      if (mouse.active) {
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          const dist = Math.hypot(mouse.x - n.x, mouse.y - n.y);
          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.45;
            ctx.strokeStyle = `rgba(139, 233, 207, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(n.x, n.y);
            ctx.stroke();
          }
        }

        // Mouse focal ring
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 14, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(139, 233, 207, 0.4)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#8be9cf';
        ctx.fill();
      }

      // 7. Travelling Data Packets along lines
      if (Math.random() < 0.1) {
        spawnPacket();
      }

      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.progress += p.speed;

        if (p.progress >= 1) {
          packets.splice(i, 1);
          continue;
        }

        const nStart = nodes[p.fromIndex];
        const nEnd = nodes[p.toIndex];
        if (!nStart || !nEnd) {
          packets.splice(i, 1);
          continue;
        }

        const curX = nStart.x + (nEnd.x - nStart.x) * p.progress;
        const curY = nStart.y + (nEnd.y - nStart.y) * p.progress;

        // Packet bead with trail (optimized without heavy shadowBlur re-calc)
        ctx.beginPath();
        ctx.arc(curX, curY, 2.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.95)`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(curX, curY, 5.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.25)`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-auto overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* 1. Deep Atmospheric Gradient Auroras */}
      <div className="absolute inset-0 bg-[#020617]" />
      
      {/* Ambient Deep Radial Glows */}
      <div className="absolute -top-24 left-1/4 w-[700px] h-[550px] bg-gradient-to-br from-cyan-500/12 via-blue-600/8 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[600px] h-[600px] bg-gradient-to-bl from-indigo-600/10 via-purple-600/8 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-[550px] h-[450px] bg-gradient-to-tr from-teal-500/10 via-cyan-600/6 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Modern Subtle Isometric Architectural Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.06] pointer-events-none" />

      {/* 2. Interactive Quantum Constellation & Circuit Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />

      {/* 3. Cyber Digital Telemetry Badges (Floating High-Tech Decals in Background) */}
      <div className="absolute top-8 left-8 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-cyan-500/20 bg-slate-950/60 backdrop-blur-md text-[10px] font-mono text-cyan-300/70 pointer-events-none select-none">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span>SYS.CORE // ACTIVE</span>
        <span className="text-cyan-500/40">|</span>
        <span>LATENCY: 0.1ms</span>
      </div>

      <div className="absolute bottom-8 left-8 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-emerald-500/20 bg-slate-950/60 backdrop-blur-md text-[10px] font-mono text-emerald-300/70 pointer-events-none select-none">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        <span>QUANTUM NETWORK: ONLINE</span>
        <span className="text-emerald-500/40">|</span>
        <span>UPTIME 99.99%</span>
      </div>

      <div className="absolute top-12 right-12 hidden xl:flex flex-col items-end gap-1 text-[9px] font-mono text-cyan-400/50 pointer-events-none select-none">
        <span>LOC: 22.5726° N, 88.3639° E</span>
        <span>ENCRYPTION: AES-256-GCM</span>
        <span>NODES_CONNECTED: 48</span>
      </div>

      {/* 4. Peripheral Vignette for seamless blending */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,#020617_95%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#020617] to-transparent pointer-events-none" />
    </div>
  );
}

export default memo(AboutHeroBackground);
