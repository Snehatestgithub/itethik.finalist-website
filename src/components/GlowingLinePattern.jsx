import React from 'react';
/**
 * GlowingLinePattern Component
 * Renders a faint, animated glowing cyber-line pattern background that gently pulses.
 * @param {Object} props
 * @param {'purple' | 'cyan' | 'emerald'} [props.color='purple'] - Theme color palette
 */
const GlowingLinePattern = ({ color = 'purple' }) => {
  const colorMap = {
    purple: {
      stroke1: 'rgba(168, 85, 247, 0.35)',
      stroke2: 'rgba(129, 140, 248, 0.25)',
      glow: 'rgba(168, 85, 247, 0.4)',
      gradientStart: '#a855f7',
      gradientEnd: '#6366f1',
    },
    cyan: {
      stroke1: 'rgba(6, 182, 212, 0.35)',
      stroke2: 'rgba(59, 130, 246, 0.25)',
      glow: 'rgba(6, 182, 212, 0.4)',
      gradientStart: '#06b6d4',
      gradientEnd: '#3b82f6',
    },
    emerald: {
      stroke1: 'rgba(16, 185, 129, 0.35)',
      stroke2: 'rgba(20, 184, 166, 0.25)',
      glow: 'rgba(16, 185, 129, 0.4)',
      gradientStart: '#10b981',
      gradientEnd: '#14b8a6',
    },
  };

  const selected = colorMap[color] || colorMap.purple;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Soft central ambient radial background glow */}
      <div 
        className="absolute inset-0 opacity-40 animate-pulse-glow"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${selected.glow} 0%, transparent 70%)`,
          filter: 'blur(70px)',
        }}
      />

      {/* SVG Animated Circuit & Grid Line Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30 animate-pulse-glow"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`lineGrad-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={selected.gradientStart} stopOpacity="0.8" />
            <stop offset="50%" stopColor={selected.gradientEnd} stopOpacity="0.4" />
            <stop offset="100%" stopColor={selected.gradientStart} stopOpacity="0.1" />
          </linearGradient>

          <pattern id={`gridPattern-${color}`} width="50" height="50" patternUnits="userSpaceOnUse">
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke={selected.stroke1}
              strokeWidth="0.75"
              strokeDasharray="4 6"
            />
            <circle cx="0" cy="0" r="1.5" fill={selected.gradientStart} opacity="0.7" />
          </pattern>
        </defs>

        {/* Background Grid */}
        <rect width="100%" height="100%" fill={`url(#gridPattern-${color})`} />

        {/* Diagonal & Horizontal Circuit Accent Lines */}
        <g stroke={`url(#lineGrad-${color})`} strokeWidth="1.5" fill="none">
          {/* Top-left angled line */}
          <path d="M -50 40 L 250 40 L 350 140 L 800 140" strokeDasharray="12 6" className="animate-line-flow" />
          
          {/* Middle crossing diagonal */}
          <path d="M 100 280 L 450 280 L 580 150 L 1100 150" strokeDasharray="16 8" className="animate-line-flow" />

          {/* Bottom angled path */}
          <path d="M 200 420 L 700 420 L 820 280 L 1400 280" strokeDasharray="10 10" className="animate-line-flow" />

          {/* Symmetric Right Angled Lines */}
          <path d="M 1200 60 L 950 60 L 850 180 L 300 180" strokeDasharray="14 7" className="animate-line-flow" />
        </g>

        {/* Glowing Nodes / Intersections */}
        <circle cx="350" cy="140" r="3" fill={selected.gradientStart} className="animate-ping" style={{ animationDuration: '3s' }} />
        <circle cx="580" cy="150" r="3" fill={selected.gradientStart} className="animate-ping" style={{ animationDuration: '4s' }} />
        <circle cx="820" cy="280" r="3" fill={selected.gradientStart} className="animate-ping" style={{ animationDuration: '5s' }} />
      </svg>

      {/* Radial vignette fade for seamless blending into dark slate background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#020617_85%)] pointer-events-none" />
    </div>
  );
};

export default GlowingLinePattern;
