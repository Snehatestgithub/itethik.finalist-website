import React, { memo } from 'react';

/**
 * CircuitBackground Component
 * Renders an ultra-clean, subtle animated circuit-pattern SVG background
 * with a low-opacity cyan glow overlay that enhances the futuristic aesthetic
 * while maintaining 100% text readability.
 */
function CircuitBackground({
  glowColor = 'cyan',
  intensity = 'subtle',
  className = '',
}) {
  // Glow gradient mapping
  const glowMap = {
    cyan: {
      primary: 'rgba(6, 182, 212, 0.12)',
      secondary: 'rgba(59, 130, 246, 0.08)',
      accent: 'rgba(168, 85, 247, 0.05)',
      stroke: 'rgba(6, 182, 212, 0.22)',
      node: 'rgba(6, 182, 212, 0.45)',
      pulse: 'rgba(34, 211, 238, 0.8)',
    },
    emerald: {
      primary: 'rgba(16, 185, 129, 0.12)',
      secondary: 'rgba(6, 182, 212, 0.08)',
      accent: 'rgba(59, 130, 246, 0.05)',
      stroke: 'rgba(16, 185, 129, 0.22)',
      node: 'rgba(16, 185, 129, 0.45)',
      pulse: 'rgba(52, 211, 153, 0.8)',
    },
    purple: {
      primary: 'rgba(168, 85, 247, 0.12)',
      secondary: 'rgba(6, 182, 212, 0.08)',
      accent: 'rgba(59, 130, 246, 0.05)',
      stroke: 'rgba(168, 85, 247, 0.22)',
      node: 'rgba(168, 85, 247, 0.45)',
      pulse: 'rgba(192, 132, 252, 0.8)',
    },
    blue: {
      primary: 'rgba(59, 130, 246, 0.12)',
      secondary: 'rgba(6, 182, 212, 0.08)',
      accent: 'rgba(168, 85, 247, 0.05)',
      stroke: 'rgba(59, 130, 246, 0.22)',
      node: 'rgba(59, 130, 246, 0.45)',
      pulse: 'rgba(96, 165, 250, 0.8)',
    },
  };

  const colors = glowMap[glowColor] || glowMap.cyan;
  const opacityClass = intensity === 'moderate' ? 'opacity-40' : 'opacity-25';

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
    >
      {/* 1. Low-opacity Cyan / Ambient Glow Overlay Mesh */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background: `
            radial-gradient(ellipse 65% 50% at 15% 15%, ${colors.primary} 0%, transparent 70%),
            radial-gradient(ellipse 60% 45% at 85% 75%, ${colors.secondary} 0%, transparent 70%),
            radial-gradient(circle at 50% 50%, ${colors.accent} 0%, transparent 60%)
          `,
        }}
      />

      {/* 2. Precision Animated Circuit Grid & PCB Tracks */}
      <svg
        className={`absolute inset-0 w-full h-full ${opacityClass} transition-opacity duration-700`}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Circuit Trace Linear Gradient */}
          <linearGradient id={`circuitGrad-${glowColor}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.stroke} stopOpacity="0.8" />
            <stop offset="50%" stopColor={colors.stroke} stopOpacity="0.4" />
            <stop offset="100%" stopColor={colors.stroke} stopOpacity="0.1" />
          </linearGradient>

          {/* Repeatable Seamless 200x200 Circuit Module */}
          <pattern
            id={`circuitPattern-${glowColor}`}
            width="240"
            height="240"
            patternUnits="userSpaceOnUse"
          >
            {/* Horizontal & 45-degree angled circuit paths */}
            <path
              d="
                M 0 40 L 60 40 L 90 70 L 170 70 L 190 50 L 240 50
                M 40 0 L 40 50 L 70 80 L 70 160 L 90 180 L 180 180
                M 0 140 L 50 140 L 80 110 L 150 110 L 170 130 L 240 130
                M 130 0 L 130 40 L 150 60 L 210 60
                M 120 240 L 120 200 L 150 170 L 240 170
                M 0 210 L 70 210 L 100 180 L 100 130 L 120 110 L 120 0
                M 190 240 L 190 190 L 210 170 L 240 170
                M 160 110 L 190 80 L 190 0
              "
              fill="none"
              stroke={`url(#circuitGrad-${glowColor})`}
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* IC Terminal Nodes / Contact Pads */}
            <circle cx="60" cy="40" r="2.5" fill={colors.node} />
            <circle cx="170" cy="70" r="2" fill={colors.node} />
            <circle cx="70" cy="160" r="2.5" fill={colors.node} />
            <circle cx="150" cy="110" r="2" fill={colors.node} />
            <circle cx="100" cy="180" r="2.5" fill={colors.node} />
            <circle cx="150" cy="170" r="2" fill={colors.node} />
            <circle cx="190" cy="80" r="2.5" fill={colors.node} />
            <circle cx="210" cy="60" r="2" fill={colors.node} />

            {/* Microchip Hub Outline */}
            <rect
              x="135"
              y="95"
              width="30"
              height="30"
              rx="4"
              fill="none"
              stroke={colors.stroke}
              strokeWidth="1"
              strokeDasharray="4 2"
            />
            <circle cx="150" cy="110" r="3.5" fill="none" stroke={colors.pulse} strokeWidth="1" />
          </pattern>

          {/* Animated Electron Signal Pulse traveling along horizontal line */}
          <linearGradient id={`pulseGrad-${glowColor}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.pulse} stopOpacity="0" />
            <stop offset="50%" stopColor={colors.pulse} stopOpacity="1" />
            <stop offset="100%" stopColor={colors.pulse} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Fill whole screen with the circuit pattern */}
        <rect width="100%" height="100%" fill={`url(#circuitPattern-${glowColor})`} />

        {/* Dynamic Animated Long Circuit Highway Traces */}
        <g className="circuit-highways">
          {/* Top Highway */}
          <path
            d="M -100 120 L 300 120 L 420 240 L 900 240 L 1050 90 L 1600 90 L 1800 290 L 2400 290"
            fill="none"
            stroke={colors.stroke}
            strokeWidth="1.5"
            strokeDasharray="8 12"
            className="animate-circuit-flow-1"
          />
          {/* Mid Highway */}
          <path
            d="M -50 480 L 250 480 L 380 350 L 750 350 L 900 500 L 1400 500 L 1550 350 L 2300 350"
            fill="none"
            stroke={colors.stroke}
            strokeWidth="1.5"
            strokeDasharray="10 15"
            className="animate-circuit-flow-2"
          />
          {/* Bottom Highway */}
          <path
            d="M 100 850 L 500 850 L 680 670 L 1100 670 L 1280 850 L 1900 850 L 2100 650 L 2500 650"
            fill="none"
            stroke={colors.stroke}
            strokeWidth="1.5"
            strokeDasharray="6 14"
            className="animate-circuit-flow-3"
          />
        </g>
      </svg>
    </div>
  );
}

export default memo(CircuitBackground);
