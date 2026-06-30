import { motion } from "motion/react"
import { shouldAnimate } from "../lib/motion-config"

function ScooterRiderSVG() {
  return (
    <svg viewBox="0 0 500 420" fill="none" className="w-full h-full drop-shadow-xl" aria-hidden>
      <defs>
        <filter id="sg"><feGaussianBlur stdDeviation="2" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <filter id="sd"><feDropShadow dx="2" dy="4" stdDeviation="5" floodColor="#000" floodOpacity="0.35" /></filter>
        <linearGradient id="sgA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#DC2626" /><stop offset="100%" stopColor="#00FF88" />
        </linearGradient>
        <linearGradient id="headlight" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00FF88" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#00FF88" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="wheelGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00FF88" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#00FF88" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ground shadow — bounces with scooter */}
      <motion.ellipse cx="250" cy="375" rx="180" ry="6" fill="#DC2626" opacity="0.06"
        animate={{ scaleX: [1, 1.12, 0.92, 1.08, 0.88, 1], opacity: [0.06, 0.12, 0.04, 0.1, 0.03, 0.06] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} />

      {/* Headlight beam */}
      <motion.polygon points="415,290 540,240 540,340" fill="url(#headlight)"
        animate={{ opacity: [0.4, 0.8, 0.3, 0.9, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />

      {/* Wheel glow rings */}
      <circle cx="85" cy="325" r="50" fill="url(#wheelGlow)" />
      <circle cx="415" cy="325" r="50" fill="url(#wheelGlow)" />

      {/* Ghost body — visible outline with readable-through fills */}
      <g fillOpacity="0.18">
        {/* REAR WHEEL */}
        <g filter="url(#sd)">
          <circle cx="85" cy="325" r="38" fill="#3A3A48" stroke="#777" strokeWidth="2.5" />
          <circle cx="85" cy="325" r="10" fill="#2E2E3A" stroke="url(#sgA)" strokeWidth="2.5" />
        </g>
      </g>
      {/* REAR WHEEL spokes + hub dot (full opacity) */}
      <g>
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "85px 325px" }}
        >
          {[0,30,60,90,120,150,180,210,240,270,300,330].map((a) => (
            <line key={a}
              x1={85 + 10 * Math.cos(a * Math.PI / 180)}
              y1={325 + 10 * Math.sin(a * Math.PI / 180)}
              x2={85 + 32 * Math.cos(a * Math.PI / 180)}
              y2={325 + 32 * Math.sin(a * Math.PI / 180)}
              stroke="#00FF88" strokeWidth="1.5" opacity="0.6" />
          ))}
        </motion.g>
        <motion.circle cx="85" cy="325" r="3" fill="#00FF88"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }} />
      </g>

      <g fillOpacity="0.18">
        {/* FRONT WHEEL */}
        <g filter="url(#sd)">
          <circle cx="415" cy="325" r="38" fill="#3A3A48" stroke="#777" strokeWidth="2.5" />
          <circle cx="415" cy="325" r="10" fill="#2E2E3A" stroke="url(#sgA)" strokeWidth="2.5" />
        </g>
      </g>
      {/* FRONT WHEEL spokes + hub dot (full opacity) */}
      <g>
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "415px 325px" }}
        >
          {[0,30,60,90,120,150,180,210,240,270,300,330].map((a) => (
            <line key={a}
              x1={415 + 10 * Math.cos(a * Math.PI / 180)}
              y1={325 + 10 * Math.sin(a * Math.PI / 180)}
              x2={415 + 32 * Math.cos(a * Math.PI / 180)}
              y2={325 + 32 * Math.sin(a * Math.PI / 180)}
              stroke="#00FF88" strokeWidth="1.5" opacity="0.6" />
          ))}
        </motion.g>
        <motion.circle cx="415" cy="325" r="3" fill="#DC2626"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }} />
      </g>

      {/* FRONT FORK — animated suspension squash/rebound */}
      <motion.g
        animate={{ y: [0, 2, -6, 4, -8, 2, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <line x1="295" y1="195" x2="400" y2="310" stroke="#999" strokeWidth="4" strokeLinecap="round" />
        <line x1="308" y1="195" x2="420" y2="310" stroke="#999" strokeWidth="4" strokeLinecap="round" />
      </motion.g>

      <g fillOpacity="0.18">
        {/* DECK */}
        <g filter="url(#sd)">
          <rect x="105" y="265" width="290" height="24" rx="6" fill="#2E2E3A" stroke="#DC2626" strokeWidth="2" />
          <rect x="107" y="267" width="286" height="4" rx="2" fill="#3A3A48" />
          <rect x="200" y="258" width="60" height="8" rx="3" fill="#1A1A24" stroke="#00FF88" strokeWidth="1.5" />
        </g>
      </g>
      {/* Deck neon strip */}
      <motion.rect x="108" y="285" width="284" height="1.5" rx="0.75" fill="#00FF88"
        animate={{ opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} />
      {/* Deck edge glow */}
      <rect x="108" y="286" width="284" height="1" rx="0.5" fill="#00FF88" opacity="0.08" />

      {/* Battery bars — neon wave */}
      {[0,1,2,3].map((i) => (
        <motion.rect key={i} x={205 + i * 12} y="259" width="8" height="6" rx="1" fill="#00FF88"
          opacity={0.2 + i * 0.15}
          animate={{
            opacity: [0.2 + i * 0.15, 0.9, 0.2 + i * 0.15],
            height: [6, 8, 6],
            y: [259, 257, 259],
          }}
          transition={{ duration: 1.2, delay: i * 0.15, repeat: Infinity, ease: "easeInOut" }} />
      ))}

      <g fillOpacity="0.18">
        {/* STEM */}
        <g filter="url(#sd)">
          <rect x="280" y="100" width="14" height="162" rx="5" fill="#2E2E3A" stroke="#DC2626" strokeWidth="2" />
        </g>
      </g>
      {/* Stem neon accent line */}
      <motion.line x1="286" y1="105" x2="286" y2="258" stroke="#00FF88" strokeWidth="0.8" opacity="0.3"
        animate={{ opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />

      <g fillOpacity="0.18">
        {/* HANDLEBARS */}
        <g filter="url(#sd)">
          <rect x="210" y="95" width="155" height="8" rx="4" fill="#2E2E3A" stroke="#DC2626" strokeWidth="2" />
          <rect x="320" y="96" width="24" height="7" rx="3" fill="#777" stroke="#DC2626" strokeWidth="1.5" />
        </g>
      </g>
      {/* Handlebar turn signal blink */}
      <motion.circle cx="332" cy="99" r="2.5" fill="#00FF88"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }} />
      <motion.circle cx="332" cy="99" r="6" fill="#00FF88"
        animate={{ opacity: [0, 0.15, 0], scale: [0.5, 1.5, 0.5] }}
        transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }} />

      <g fillOpacity="0.18">
        {/* SIMPLE CUTE RIDER */}
        <g filter="url(#sd)">
          {/* Shoes on deck */}
          <rect x="178" y="260" width="18" height="10" rx="4" fill="#1A1A24" />
          <rect x="228" y="260" width="18" height="10" rx="4" fill="#1A1A24" />
          {/* Legs */}
          <rect x="180" y="208" width="14" height="54" rx="5" fill="#3A3A48" />
          <rect x="230" y="208" width="14" height="54" rx="5" fill="#3A3A48" />
          <rect x="182" y="210" width="10" height="50" rx="4" fill="#4A4A58" />
          <rect x="232" y="210" width="10" height="50" rx="4" fill="#4A4A58" />
          {/* Torso */}
          <rect x="178" y="140" width="68" height="70" rx="16" fill="#2E2E3A" />
        </g>
      </g>
      {/* Torso accents + arms (full opacity) */}
      <rect x="183" y="145" width="12" height="12" rx="3" fill="#00FF88" opacity="0.35" />
      <rect x="228" y="145" width="12" height="12" rx="3" fill="#00FF88" opacity="0.35" />
      <rect x="207" y="145" width="10" height="65" rx="3" fill="url(#sgA)" opacity="0.35" />
      {/* Arms — counter-steer animation */}
      <motion.path d="M 182 155 Q 190 160 270 108" stroke="#2E2E3A" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.5"
        animate={{ d: ["M 182 155 Q 190 160 270 108", "M 182 155 Q 192 165 268 112", "M 182 155 Q 190 160 270 108"] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} />
      <motion.path d="M 242 155 Q 250 160 285 110" stroke="#2E2E3A" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.5"
        animate={{ d: ["M 242 155 Q 250 160 285 110", "M 242 155 Q 248 168 282 115", "M 242 155 Q 250 160 285 110"] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} />

      {/* Gloves (full opacity) */}
      <motion.circle cx="270" cy="108" r="5" fill="#2E2E3A" stroke="#00FF88" strokeWidth="1.5"
        animate={{ cx: [270, 268, 270] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} />
      <motion.circle cx="285" cy="110" r="5" fill="#2E2E3A" stroke="#00FF88" strokeWidth="1.5"
        animate={{ cx: [285, 282, 285] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} />

      <g fillOpacity="0.18">
        {/* Head — round helmet */}
        <circle cx="212" cy="92" r="28" fill="#2E2E3A" />
      </g>
      {/* Helmet accents (full opacity) */}
      <path d="M 233 70 Q 252 80 250 100 L 242 100 Q 244 84 233 76 Z" fill="#00FF88" opacity="0.5" />
      <motion.circle cx="238" cy="86" r="4" fill="#00FF88" opacity="0.2"
        animate={{ opacity: [0.05, 0.4, 0.05] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
      <rect x="210" y="64" width="6" height="6" rx="3" fill="#DC2626" opacity="0.8" />
      <circle cx="212" cy="92" r="28" fill="none" stroke="#DC2626" strokeWidth="2" opacity="0.8" />

      {/* Speed lines — dynamic, varied with bounce */}
      {[0,1,2,3,4,5,6,7,8,9].map((i) => (
        <motion.line key={i}
          x1={20 + i * 22} y1={230 + i * 8 + (i % 3) * 5}
          x2={50 + i * 22} y2={230 + i * 8 + (i % 3) * 5}
          stroke={i % 2 === 0 ? "#00FF88" : "#DC2626"} strokeWidth={2 + (i % 3) * 0.5} strokeLinecap="round"
          animate={{
            x: [-80 + i * 5, 10 + i * 3],
            opacity: [0, 0.7 - i * 0.05, 0],
          }}
          transition={{ duration: 0.5 + i * 0.04, delay: i * 0.05, repeat: Infinity, ease: "linear" }} />
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
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ScooterRiderSVG />
      </motion.div>
    </div>
  )
}
