import { motion } from "motion/react"
import { shouldAnimate } from "../lib/motion-config"

function ScooterSVG() {
  return (
    <svg viewBox="0 0 500 420" fill="none" className="w-full h-full drop-shadow-xl" aria-hidden>
      <defs>
        <filter id="sd"><feDropShadow dx="2" dy="4" stdDeviation="5" floodColor="#000" floodOpacity="0.3" /></filter>
        <filter id="glow"><feGaussianBlur stdDeviation="3" result="b" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <radialGradient id="wg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#DC2626" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ground shadow */}
      <motion.ellipse cx="250" cy="370" rx="170" ry="5" fill="#DC2626" opacity="0.06"
        animate={{ scaleX: [1, 1.1, 0.95, 1.05, 1], opacity: [0.06, 0.1, 0.04, 0.08, 0.06] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />

      {/* Wheel glow rings */}
      <circle cx="105" cy="315" r="45" fill="url(#wg)" />
      <circle cx="395" cy="315" r="45" fill="url(#wg)" />

      {/* === REAR WHEEL === */}
      <g filter="url(#sd)">
        <circle cx="105" cy="315" r="35" fill="#2A2A35" stroke="#555" strokeWidth="2.5" />
        <circle cx="105" cy="315" r="18" fill="#3A3A48" stroke="#DC2626" strokeWidth="1.5" />
      </g>
      {/* Spokes */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "105px 315px" }}
      >
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
          const r = a * Math.PI / 180
          return (
            <line key={a}
              x1={105 + 18 * Math.cos(r)} y1={315 + 18 * Math.sin(r)}
              x2={105 + 32 * Math.cos(r)} y2={315 + 32 * Math.sin(r)}
              stroke="#DC2626" strokeWidth="1.5" opacity="0.4" />
          )
        })}
      </motion.g>
      <motion.circle cx="105" cy="315" r="3" fill="#DC2626"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }} />

      {/* === FRONT WHEEL === */}
      <g filter="url(#sd)">
        <circle cx="395" cy="315" r="35" fill="#2A2A35" stroke="#555" strokeWidth="2.5" />
        <circle cx="395" cy="315" r="18" fill="#3A3A48" stroke="#DC2626" strokeWidth="1.5" />
      </g>
      {/* Spokes */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "395px 315px" }}
      >
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
          const r = a * Math.PI / 180
          return (
            <line key={a}
              x1={395 + 18 * Math.cos(r)} y1={315 + 18 * Math.sin(r)}
              x2={395 + 32 * Math.cos(r)} y2={315 + 32 * Math.sin(r)}
              stroke="#DC2626" strokeWidth="1.5" opacity="0.4" />
          )
        })}
      </motion.g>
      <motion.circle cx="395" cy="315" r="3" fill="#DC2626"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }} />

      {/* === FRONT FORK === */}
      <motion.g
        animate={{ y: [0, 1, -4, 3, -5, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <line x1="295" y1="195" x2="385" y2="305" stroke="#666" strokeWidth="3" strokeLinecap="round" />
        <line x1="305" y1="195" x2="400" y2="305" stroke="#666" strokeWidth="3" strokeLinecap="round" />
        {/* Fork spring cover */}
        <rect x="296" y="230" width="8" height="40" rx="3" fill="#555" />
        <rect x="306" y="230" width="8" height="40" rx="3" fill="#555" />
      </motion.g>

      {/* === REAR SUSPENSION === */}
      <motion.g
        animate={{ y: [0, 1, -4, 3, -5, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <line x1="155" y1="210" x2="120" y2="295" stroke="#666" strokeWidth="3" strokeLinecap="round" />
        <rect x="128" y="240" width="6" height="35" rx="2" fill="#555" />
      </motion.g>

      {/* === SCOOTER BODY === */}
      <g filter="url(#sd)">
        {/* Floorboard / Deck */}
        <rect x="130" y="258" width="240" height="14" rx="4" fill="#2E2E3A" />
        {/* Floorboard grip strip */}
        <rect x="132" y="260" width="236" height="3" rx="1.5" fill="#3A3A48" />

        {/* Front fairing / shield — curved path */}
        <motion.path d="M 285 190 Q 330 180 375 195 L 395 260 L 370 265 L 300 260 Z"
          fill="#2E2E3A" stroke="#DC2626" strokeWidth="1.5" />

        {/* Front fairing accent stripe */}
        <path d="M 288 198 Q 330 188 370 200 L 368 210 Q 330 198 292 208 Z"
          fill="#DC2626" opacity="0.6" />

        {/* Inner leg shield */}
        <rect x="280" y="200" width="20" height="60" rx="3" fill="#1A1A24" />

        {/* Rear body / tail */}
        <motion.path d="M 130 195 Q 100 200 95 250 L 100 265 L 130 260 Z"
          fill="#2E2E3A" stroke="#DC2626" strokeWidth="1.5" />

        {/* Seat — scooped shape */}
        <motion.path d="M 130 195 Q 160 178 210 185 L 280 185 Q 290 195 285 210 L 130 210 Z"
          fill="#1A1A24" stroke="#DC2626" strokeWidth="1.5" />

        {/* Seat cushion */}
        <path d="M 135 195 Q 165 182 210 188 L 275 188 Q 282 195 278 206 L 135 206 Z"
          fill="#DC2626" opacity="0.15" />
      </g>

      {/* Under-glow neon strip */}
      <motion.path d="M 100 268 L 400 268" stroke="#DC2626" strokeWidth="1.5"
        animate={{ opacity: [0.15, 0.5, 0.15] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />

      {/* Headlight */}
      <motion.circle cx="388" cy="210" r="8" fill="#DC2626" opacity="0.3"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
      <circle cx="388" cy="210" r="5" fill="#DC2626" opacity="0.15" />

      {/* Headlight beam */}
      <motion.polygon points="396,210 500,185 500,235" fill="#DC2626"
        animate={{ opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />

      {/* Handlebar area */}
      <g filter="url(#sd)">
        <rect x="280" y="100" width="12" height="95" rx="4" fill="#2E2E3A" />
        {/* Handlebars */}
        <rect x="230" y="96" width="85" height="7" rx="3" fill="#2E2E3A" />
        {/* Grips */}
        <rect x="230" y="95" width="20" height="9" rx="3" fill="#555" />
        {/* Windscreen */}
        <path d="M 280 100 Q 278 80 290 75 L 298 75 Q 305 80 300 100 Z"
          fill="#3A3A48" opacity="0.4" stroke="#DC2626" strokeWidth="1" />
      </g>

      {/* Blinker */}
      <motion.circle cx="320" cy="99" r="2.5" fill="#DC2626"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }} />
      <motion.circle cx="320" cy="99" r="5" fill="#DC2626"
        animate={{ opacity: [0, 0.12, 0], scale: [0.5, 1.5, 0.5] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }} />

      {/* === RIDER === */}
      <g filter="url(#sd)">
        {/* Shoes on deck */}
        <rect x="180" y="252" width="16" height="10" rx="3" fill="#1A1A24" />
        <rect x="240" y="252" width="16" height="10" rx="3" fill="#1A1A24" />
        {/* Legs */}
        <rect x="184" y="210" width="12" height="44" rx="4" fill="#3A3A48" />
        <rect x="242" y="210" width="12" height="44" rx="4" fill="#3A3A48" />
        {/* Torso */}
        <rect x="182" y="145" width="56" height="67" rx="14" fill="#2E2E3A" />
        {/* Torso accent */}
        <rect x="186" y="150" width="10" height="10" rx="2" fill="#DC2626" opacity="0.3" />
        <rect x="224" y="150" width="10" height="10" rx="2" fill="#DC2626" opacity="0.3" />
        {/* Jacket zipper line */}
        <rect x="208" y="148" width="4" height="60" rx="2" fill="#DC2626" opacity="0.2" />
      </g>

      {/* Arms — reaching to handlebars */}
      <motion.path d="M 186 158 Q 198 170 282 105" stroke="#2E2E3A" strokeWidth="7" fill="none" strokeLinecap="round"
        animate={{ d: ["M 186 158 Q 198 170 282 105", "M 186 158 Q 200 174 280 109", "M 186 158 Q 198 170 282 105"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
      <motion.path d="M 234 158 Q 228 170 270 108" stroke="#2E2E3A" strokeWidth="7" fill="none" strokeLinecap="round"
        animate={{ d: ["M 234 158 Q 228 170 270 108", "M 234 158 Q 226 176 268 112", "M 234 158 Q 228 170 270 108"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />

      {/* Gloves */}
      <motion.circle cx="282" cy="105" r="4.5" fill="#2E2E3A" stroke="#DC2626" strokeWidth="1.5"
        animate={{ cx: [282, 280, 282] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
      <motion.circle cx="270" cy="108" r="4.5" fill="#2E2E3A" stroke="#DC2626" strokeWidth="1.5"
        animate={{ cx: [270, 268, 270] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />

      {/* Head / Helmet */}
      <g filter="url(#sd)">
        <circle cx="210" cy="95" r="26" fill="#2E2E3A" />
      </g>
      {/* Helmet visor */}
      <path d="M 216 75 Q 236 78 238 95 L 230 97 Q 228 84 216 82 Z" fill="#DC2626" opacity="0.5" />
      {/* Helmet stripe */}
      <path d="M 186 80 Q 210 70 235 78" stroke="#DC2626" strokeWidth="2" fill="none" opacity="0.6" />
      {/* Helmet outline */}
      <circle cx="210" cy="95" r="26" fill="none" stroke="#DC2626" strokeWidth="1.5" opacity="0.7" />
      {/* Visor reflection */}
      <motion.circle cx="228" cy="86" r="3.5" fill="#DC2626" opacity="0.15"
        animate={{ opacity: [0.05, 0.3, 0.05] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
      {/* Helmet top vent */}
      <rect x="207" y="70" width="6" height="5" rx="2" fill="#DC2626" opacity="0.6" />

      {/* Speed lines */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <motion.line key={i}
          x1={5 + i * 18} y1={265 + i * 6 + (i % 3) * 4}
          x2={35 + i * 18} y2={265 + i * 6 + (i % 3) * 4}
          stroke="#DC2626" strokeWidth={1.5 + (i % 3) * 0.5} strokeLinecap="round"
          opacity={0.4 - i * 0.03}
          animate={{
            x: [-60 + i * 4, 15 + i * 2],
            opacity: [0, 0.5 - i * 0.04, 0],
          }}
          transition={{ duration: 0.4 + i * 0.03, delay: i * 0.04, repeat: Infinity, ease: "linear" }} />
      ))}

      {/* Motion blur lines behind scooter */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.line key={`blur-${i}`}
          x1={20 + i * 12} y1={200 + i * 25}
          x2={50 + i * 12} y2={200 + i * 25}
          stroke="#DC2626" strokeWidth={1} strokeLinecap="round" opacity={0.1}
          animate={{ x: [-40, 0], opacity: [0, 0.15, 0] }}
          transition={{ duration: 0.6, delay: i * 0.06, repeat: Infinity, ease: "linear" }} />
      ))}
    </svg>
  )
}

export function ScooterRider() {
  if (!shouldAnimate()) return null

  return (
    <div className="w-full h-full pointer-events-none select-none">
      <motion.div
        className="w-full h-full"
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <ScooterSVG />
      </motion.div>
    </div>
  )
}
