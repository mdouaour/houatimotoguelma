import { motion } from "motion/react"
import { shouldAnimate } from "../lib/motion-config"

function RiderSVG() {
  return (
    <svg viewBox="0 0 400 280" fill="none" className="w-full h-full" aria-hidden>
      <defs>
        <filter id="g6"><feGaussianBlur stdDeviation="2" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <filter id="sb"><feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.3" /></filter>
        <linearGradient id="bikeBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A1A24" /><stop offset="100%" stopColor="#0A0A10" />
        </linearGradient>
        <linearGradient id="engineBlock" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#444" /><stop offset="100%" stopColor="#222" />
        </linearGradient>
        <linearGradient id="helmetGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0088FF" /><stop offset="100%" stopColor="#004488" />
        </linearGradient>
        <linearGradient id="visorGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00FF88" /><stop offset="100%" stopColor="#009955" />
        </linearGradient>
      </defs>

      {/* Ground shadow */}
      <motion.ellipse cx="200" cy="248" rx="100" ry="6" fill="#000" opacity="0.15"
        animate={{ scaleX: [1, 1.05, 1] }}
        transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }} />

      {/* ===== REAR WHEEL ===== */}
      <g filter="url(#sb)">
        <circle cx="100" cy="210" r="34" fill="#1A1A1E" stroke="#222" strokeWidth="2" />
        <motion.circle cx="100" cy="210" r="30" fill="none" stroke="#333" strokeWidth="5"
          animate={{ rotate: 360 }} style={{ transformOrigin: "100px 210px" }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }} />
        <motion.g animate={{ rotate: 360 }} style={{ transformOrigin: "100px 210px" }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}>
          {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((a) => (
            <line key={a} x1={100 + 8 * Math.cos(a * Math.PI / 180)} y1={210 + 8 * Math.sin(a * Math.PI / 180)}
              x2={100 + 26 * Math.cos(a * Math.PI / 180)} y2={210 + 26 * Math.sin(a * Math.PI / 180)}
              stroke="#0088FF" strokeWidth="1.8" opacity="0.5" />
          ))}
        </motion.g>
        <circle cx="100" cy="210" r="8" fill="#0D0D14" stroke="#0088FF" strokeWidth="1.5" />
        <circle cx="100" cy="210" r="2" fill="#00FF88" />
      </g>

      {/* ===== FRONT WHEEL ===== */}
      <g filter="url(#sb)">
        <circle cx="310" cy="210" r="34" fill="#1A1A1E" stroke="#222" strokeWidth="2" />
        <motion.circle cx="310" cy="210" r="30" fill="none" stroke="#333" strokeWidth="5"
          animate={{ rotate: 360 }} style={{ transformOrigin: "310px 210px" }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }} />
        <motion.g animate={{ rotate: 360 }} style={{ transformOrigin: "310px 210px" }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}>
          {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((a) => (
            <line key={a} x1={310 + 8 * Math.cos(a * Math.PI / 180)} y1={210 + 8 * Math.sin(a * Math.PI / 180)}
              x2={310 + 26 * Math.cos(a * Math.PI / 180)} y2={210 + 26 * Math.sin(a * Math.PI / 180)}
              stroke="#0088FF" strokeWidth="1.8" opacity="0.5" />
          ))}
        </motion.g>
        <circle cx="310" cy="210" r="12" fill="#333" stroke="#555" strokeWidth="0.5" />
        {[0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340].map((a) => (
          <line key={a} x1={310 + 9 * Math.cos(a * Math.PI / 180)} y1={210 + 9 * Math.sin(a * Math.PI / 180)}
            x2={310 + 11 * Math.cos(a * Math.PI / 180)} y2={210 + 11 * Math.sin(a * Math.PI / 180)}
            stroke="#666" strokeWidth="1" />
        ))}
        <circle cx="310" cy="210" r="7" fill="#0D0D14" stroke="#0088FF" strokeWidth="1.5" />
        <circle cx="310" cy="210" r="2" fill="#0088FF" />
      </g>

      {/* ===== MOTORCYCLE BODY ===== */}
      <g filter="url(#sb)">
        {/* Swingarm */}
        <line x1="135" y1="170" x2="100" y2="195" stroke="#444" strokeWidth="4" strokeLinecap="round" />
        {/* Frame - main spine */}
        <path d="M 150 155 Q 180 140 230 130 L 270 140" stroke="url(#bikeBody)" strokeWidth="6" fill="none" />
        <path d="M 150 155 Q 180 140 230 130 L 270 140" stroke="#0088FF" strokeWidth="0.5" fill="none" opacity="0.2" />
        {/* Engine block */}
        <rect x="140" y="155" width="40" height="25" rx="4" fill="url(#engineBlock)" stroke="#555" strokeWidth="1" />
        {[145, 152, 159, 166].map((x) => (
          <line key={x} x1={x} y1="160" x2={x} y2="175" stroke="#555" strokeWidth="1" opacity="0.5" />
        ))}
        {/* Exhaust pipe */}
        <path d="M 140 175 Q 130 185 125 200 L 115 200" stroke="#666" strokeWidth="3" fill="none" strokeLinecap="round" />
        <motion.path d="M 115 200 L 108 200" stroke="#FF4444" strokeWidth="2" fill="none"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 0.3, repeat: Infinity, ease: "easeInOut" }} />
        {/* Fuel tank - sporty shape */}
        <path d="M 170 100 Q 160 130 155 155 L 200 155 Q 205 120 195 100 Z" fill="#0D0D14" stroke="#0088FF" strokeWidth="1.5" />
        <motion.path d="M 170 100 Q 160 130 155 155 L 200 155 Q 205 120 195 100 Z" fill="none" stroke="#0088FF" strokeWidth="0.5"
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
        {/* Knee grip pads */}
        <rect x="170" y="110" width="4" height="20" rx="2" fill="#333" />
        <rect x="187" y="110" width="4" height="20" rx="2" fill="#333" />
        {/* Seat */}
        <path d="M 195 105 Q 215 100 230 110 L 225 120 Q 210 110 195 115 Z" fill="#1A1A1E" stroke="#333" strokeWidth="0.8" />
        {/* Rear fairing */}
        <path d="M 160 90 Q 145 105 150 155 L 155 155 Q 152 115 170 95 Z" fill="#0D0D14" stroke="#0088FF" strokeWidth="1" />
        {/* Front fairing */}
        <path d="M 240 110 Q 280 105 305 140 L 300 145 Q 275 110 245 120 Z" fill="#0D0D14" stroke="#0088FF" strokeWidth="1.5" />
        <text x="270" y="128" textAnchor="middle" fill="#0088FF" fontSize="6" fontWeight="bold" fontFamily="monospace" opacity="0.4">HOUATI</text>
        {/* Undertail */}
        <rect x="165" y="135" width="25" height="4" rx="2" fill="#0088FF" opacity="0.3" />
      </g>

      {/* ===== RIDER ===== */}
      <g filter="url(#sb)">
        {/* Legs */}
        <path d="M 175 120 Q 165 145 145 165" stroke="#1A1A1E" strokeWidth="10" fill="none" strokeLinecap="round" />
        <path d="M 190 115 Q 195 140 175 165" stroke="#1A1A1E" strokeWidth="10" fill="none" strokeLinecap="round" />
        {/* Boots */}
        <rect x="138" y="160" width="14" height="8" rx="2" fill="#0D0D14" stroke="#333" strokeWidth="0.8" />
        <rect x="165" y="160" width="14" height="8" rx="2" fill="#0D0D14" stroke="#333" strokeWidth="0.8" />

        {/* Torso - leaned forward */}
        <path d="M 185 80 Q 175 100 180 115" stroke="#1A1A1E" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M 185 80 Q 210 95 195 110" stroke="#1A1A1E" strokeWidth="8" fill="none" strokeLinecap="round" />

        {/* Arms */}
        <path d="M 190 85 Q 210 90 235 100" stroke="#1A1A1E" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M 195 85 Q 215 95 240 105" stroke="#1A1A1E" strokeWidth="5" fill="none" strokeLinecap="round" />
        {/* Gloves */}
        <circle cx="235" cy="100" r="3.5" fill="#0D0D14" stroke="#0088FF" strokeWidth="0.8" />
        <circle cx="240" cy="105" r="3.5" fill="#0D0D14" stroke="#0088FF" strokeWidth="0.8" />

        {/* Helmet */}
        <path d="M 175 68 Q 170 55 185 50 Q 200 46 210 52 Q 218 58 215 70 Q 210 65 200 63 Q 185 62 178 68 Z" fill="url(#helmetGrad)" />
        <path d="M 175 68 Q 178 62 185 60" stroke="#0066CC" strokeWidth="1" fill="none" />
        {/* Helmet vents */}
        <rect x="190" y="54" width="6" height="2" rx="1" fill="#003366" />
        <rect x="200" y="55" width="5" height="2" rx="1" fill="#003366" />
        {/* Visor */}
        <path d="M 203 58 Q 212 54 218 62 L 215 65 Q 210 58 205 60 Z" fill="url(#visorGrad)" opacity="0.8" />
        <motion.path d="M 203 58 Q 212 54 218 62 L 215 65 Q 210 58 205 60 Z" fill="none" stroke="#00FF88" strokeWidth="0.5"
          animate={{ opacity: [0, 0.8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
        {/* Helmet chin */}
        <path d="M 178 68 Q 185 72 195 70" stroke="#003366" strokeWidth="2" fill="none" />
      </g>

      {/* ===== SPEED LINES ===== */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.line key={i} x1={40 + i * 60} y1={120 + i * 15} x2={80 + i * 60} y2={120 + i * 15}
          stroke="#0088FF" strokeWidth="1" opacity="0.15"
          animate={{ x: [-60, 0], opacity: [0, 0.3, 0] }}
          transition={{ duration: 0.8, delay: i * 0.2, repeat: Infinity, ease: "linear" }} />
      ))}

      {/* ===== TAIL LIGHT ===== */}
      <motion.rect x="146" y="128" width="6" height="10" rx="2" fill="#FF4444"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} />

      {/* ===== HEADLIGHT ===== */}
      <motion.path d="M 305 138 L 350 130 L 350 150 Z" fill="rgba(0,136,255,0.06)"
        animate={{ opacity: [0, 0.15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} />
    </svg>
  )
}

export function RiderAvatar() {
  if (!shouldAnimate()) return null

  return (
    <div className="relative w-full h-full pointer-events-none select-none">
      {/* Main rider animation - gentle bounce while riding */}
      <motion.div
        className="w-full h-full"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <RiderSVG />
      </motion.div>
    </div>
  )
}
