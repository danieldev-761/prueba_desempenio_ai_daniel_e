import React from 'react';

/**
 * VanguardLogo
 * Vectorial, professional monogram logo for Vanguard Academia de Idiomas.
 * Features an architectural 'V' monogram with dual-tone lime & azure facets.
 * 100% SVG, strictly adheres to zero-emoji policy.
 */
export default function VanguardLogo({ 
  size = 'md', 
  showText = true, 
  subtitle = 'Academia de Idiomas',
  className = '' 
}) {
  const sizeMap = {
    sm: { icon: 'w-7 h-7', text: 'text-base', sub: 'text-[8px]' },
    md: { icon: 'w-9 h-9', text: 'text-xl', sub: 'text-[9px]' },
    lg: { icon: 'w-11 h-11', text: 'text-2xl', sub: 'text-[10px]' },
    xl: { icon: 'w-14 h-14', text: 'text-3xl', sub: 'text-xs' },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Bespoke Geometric Vanguard Vector Icon */}
      <div className={`relative ${currentSize.icon} flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}>
        <svg 
          viewBox="0 0 48 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_4px_14px_rgba(189,240,82,0.22)]"
        >
          <defs>
            {/* Left Wing Gradient (Vanguard Lime) */}
            <linearGradient id="vg-lime-grad" x1="6" y1="8" x2="24" y2="42" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#e2fd70" />
              <stop offset="55%" stopColor="#bdf052" />
              <stop offset="100%" stopColor="#84cc16" />
            </linearGradient>

            {/* Right Wing Gradient (Azure & Deep Indigo Depth) */}
            <linearGradient id="vg-blue-grad" x1="42" y1="8" x2="24" y2="42" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="65%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#1e1848" />
            </linearGradient>

            {/* Central Diamond Accent */}
            <linearGradient id="vg-core-grad" x1="24" y1="14" x2="24" y2="28" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#bdf052" />
            </linearGradient>
          </defs>

          {/* Hexagonal Shield Container */}
          <rect 
            x="2.5" 
            y="2.5" 
            width="43" 
            height="43" 
            rx="12" 
            fill="#0c0926" 
            stroke="#ffffff" 
            strokeOpacity="0.12" 
            strokeWidth="1.5" 
          />
          
          {/* Subtle Grid Center Axis */}
          <line 
            x1="24" 
            y1="6" 
            x2="24" 
            y2="42" 
            stroke="#ffffff" 
            strokeOpacity="0.08" 
            strokeWidth="1" 
            strokeDasharray="2 2" 
          />
          
          {/* Left Wing of 'V' */}
          <path 
            d="M10 12 L17.5 12 L24 32.5 L20 36.5 L10 12 Z" 
            fill="url(#vg-lime-grad)"
          />

          {/* Right Wing of 'V' with Depth Accent */}
          <path 
            d="M38 12 L30.5 12 L24 32.5 L28 36.5 L38 12 Z" 
            fill="url(#vg-blue-grad)"
          />

          {/* Center Prism Keel / Beacon Diamond */}
          <path 
            d="M24 16 L27.5 21.5 L24 27 L20.5 21.5 Z" 
            fill="url(#vg-core-grad)"
          />

          {/* Apex Guidance Dot */}
          <circle cx="24" cy="38" r="1.5" fill="#bdf052" />
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-display ${currentSize.text} tracking-[0.16em] uppercase text-white font-bold leading-none`}>
            Vanguard
          </span>
          <span className={`${currentSize.sub} text-brand-lime font-mono tracking-[0.22em] uppercase font-semibold mt-1 hidden sm:block`}>
            {subtitle}
          </span>
        </div>
      )}
    </div>
  );
}
