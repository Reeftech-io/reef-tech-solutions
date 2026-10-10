/**
 * ReefBackdrop — decorative "underwater coral reef" background layer.
 * Sits absolutely behind section content (pointer-events disabled, aria-hidden).
 * Pure SVG (no CSS file changes); bubbles use SVG <animate> so no keyframes are needed.
 */
type ReefBackdropProps = {
  /** Unique prefix so SVG gradient/pattern ids don't collide between sections. */
  idPrefix: string;
};

export default function ReefBackdrop({ idPrefix }: ReefBackdropProps) {
  const id = (name: string) => `${idPrefix}-${name}`;

  const bubbles = [
    { cx: 8, r: 0.45, dur: 14, delay: 0 },
    { cx: 17, r: 0.3, dur: 18, delay: 4 },
    { cx: 29, r: 0.55, dur: 16, delay: 9 },
    { cx: 41, r: 0.25, dur: 20, delay: 2 },
    { cx: 56, r: 0.4, dur: 15, delay: 7 },
    { cx: 67, r: 0.3, dur: 19, delay: 11 },
    { cx: 78, r: 0.5, dur: 17, delay: 5 },
    { cx: 91, r: 0.35, dur: 21, delay: 13 },
  ];

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Deep water: lighter turquoise at the surface, deep navy-teal below */}
          <linearGradient id={id('water')} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0b4f63" />
            <stop offset="45%" stopColor="#073a4d" />
            <stop offset="100%" stopColor="#03202e" />
          </linearGradient>

          {/* Sun rays fading downward */}
          <linearGradient id={id('ray')} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7fffd4" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#7fffd4" stopOpacity="0" />
          </linearGradient>

          {/* Coral silhouettes: teal-green into the deep */}
          <linearGradient id={id('coral')} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#065f46" stopOpacity="0.55" />
          </linearGradient>

          {/* Soft caustic ripple pattern (light dancing on the water) */}
          <pattern id={id('caustic')} x="0" y="0" width="24" height="12" patternUnits="userSpaceOnUse">
            <path
              d="M0,6 C4,2 8,10 12,6 S20,2 24,6"
              fill="none"
              stroke="#5eead4"
              strokeWidth="0.25"
              opacity="0.35"
            />
            <path
              d="M-6,11 C-2,8 2,14 6,11 S14,8 18,11 S26,14 30,11"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="0.18"
              opacity="0.25"
            />
          </pattern>

          {/* Glow from the surface */}
          <radialGradient id={id('glow')} cx="50%" cy="0%" r="70%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Water column */}
        <rect width="100" height="100" fill={`url(#${id('water')})`} />
        <rect width="100" height="100" fill={`url(#${id('glow')})`} />

        {/* Caustics near the top, fading out */}
        <rect width="100" height="45" fill={`url(#${id('caustic')})`} opacity="0.6" />

        {/* Light rays */}
        <g>
          <polygon points="18,0 26,0 40,100 22,100" fill={`url(#${id('ray')})`} />
          <polygon points="44,0 49,0 58,100 46,100" fill={`url(#${id('ray')})`} />
          <polygon points="66,0 74,0 92,100 72,100" fill={`url(#${id('ray')})`} />
        </g>

        {/* Back reef ridge */}
        <path
          d="M0,92 C10,86 18,90 26,87 C36,83 44,89 54,86 C64,83 74,88 84,85 C92,83 97,86 100,85 L100,100 L0,100 Z"
          fill="#0f766e"
          opacity="0.22"
        />

        {/* Branching coral (left) */}
        <g fill="none" stroke={`url(#${id('coral')})`} strokeLinecap="round">
          <path d="M8,100 L8,88 M8,93 L4,86 M8,90 L12,83 M4,86 L2,82 M4,86 L6,81 M12,83 L10,79 M12,83 L15,80" strokeWidth="1.1" />
          <path d="M20,100 L20,91 M20,94 L17,88 M20,92 L23,87 M23,87 L25,84" strokeWidth="0.8" />
        </g>

        {/* Sea fan (center-right) */}
        <g fill="none" stroke="#2dd4bf" strokeOpacity="0.22" strokeWidth="0.35" strokeLinecap="round">
          <path d="M70,100 L70,90" />
          <path d="M70,90 C66,86 63,82 62,77" />
          <path d="M70,90 C68,85 67,81 67,76" />
          <path d="M70,90 C71,85 72,80 73,75" />
          <path d="M70,90 C74,86 77,82 79,78" />
          <path d="M63,80 C66,79 70,78 74,78 C76,78 78,79 79,80" />
          <path d="M65,85 C68,84 72,84 76,84" />
        </g>

        {/* Brain / mound corals */}
        <ellipse cx="38" cy="98" rx="7" ry="4" fill="#0d9488" opacity="0.28" />
        <ellipse cx="86" cy="98.5" rx="9" ry="4.5" fill="#047857" opacity="0.3" />
        <ellipse cx="54" cy="99" rx="5" ry="2.8" fill="#0e7490" opacity="0.3" />

        {/* Kelp / seagrass (right) */}
        <g fill="none" stroke="#34d399" strokeOpacity="0.22" strokeWidth="0.6" strokeLinecap="round">
          <path d="M94,100 C92,94 96,90 94,84 C92,79 95,75 94,70" />
          <path d="M97,100 C99,95 96,91 98,86 C99,82 97,79 98,76" />
          <path d="M46,100 C45,96 47,93 46,90" />
        </g>

        {/* Rising bubbles */}
        <g fill="none" stroke="#a5f3fc" strokeWidth="0.12">
          {bubbles.map((b, i) => (
            <circle key={i} cx={b.cx} cy={104} r={b.r} opacity="0.5">
              <animate
                attributeName="cy"
                from="104"
                to="-4"
                dur={`${b.dur}s`}
                begin={`${b.delay}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="cx"
                values={`${b.cx};${b.cx + 0.8};${b.cx - 0.6};${b.cx}`}
                dur="6s"
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>
      </svg>
    </div>
  );
}
