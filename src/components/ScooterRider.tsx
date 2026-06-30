import { motion } from "motion/react"
import { shouldAnimate } from "../lib/motion-config"

function ScooterRiderSVG() {
  return (
    <svg viewBox="0 0 500 420" fill="none" className="w-full h-full drop-shadow-2xl" aria-hidden>
      <defs>
        <filter id="sg"><feGaussianBlur stdDeviation="3" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <filter id="sd"><feDropShadow dx="3" dy="5" stdDeviation="6" floodColor="#000" floodOpacity="0.4" /></filter>
        <linearGradient id="sgA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0088FF" /><stop offset="100%" stopColor="#00FF88" />
        </linearGradient>
        <linearGradient id="helmetG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0088FF" /><stop offset="100%" stopColor="#003366" />
        </linearGradient>
        <linearGradient id="visorG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00FF88" /><stop offset="100%" stopColor="#009944" />
        </linearGradient>
        <linearGradient id="tireG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A2A30" /><stop offset="100%" stopColor="#0A0A10" />
        </linearGradient>
        <linearGradient id="deckG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A2A30" /><stop offset="50%" stopColor="#1A1A20" /><stop offset="100%" stopColor="#0D0D14" />
        </linearGradient>
        <pattern id="tread" patternUnits="userSpaceOnUse" width="6" height="6">
          <line x1="0" y1="3" x2="6" y2="3" stroke="#0088FF" strokeWidth="0.6" opacity="0.15" />
        </pattern>
      </defs>

      {/* ===== GROUND ===== */}
      <motion.ellipse cx="250" cy="372" rx="210" ry="8" fill="#0088FF" opacity="0.12"
        animate={{ scaleX: [1, 1.06, 1] }}
        transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }} />

      {/* ===== REAR WHEEL ===== */}
      <g filter="url(#sd)">
        <circle cx="80" cy="325" r="42" fill="url(#tireG)" stroke="#222" strokeWidth="2" />
        <circle cx="80" cy="325" r="38" fill="none" stroke="#444" strokeWidth="6" />
        <motion.circle cx="80" cy="325" r="36" fill="none" stroke="#555" strokeWidth="2" strokeDasharray="3 5" opacity="0.3"
          animate={{ rotate: 360 }} style={{ transformOrigin: "80px 325px" }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }} />
        <motion.g animate={{ rotate: 360 }} style={{ transformOrigin: "80px 325px" }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}>
          {[0,15,30,45,60,75,90,105,120,135,150,165,180,195,210,225,240,255,270,285,300,315,330,345].map((a) => (
            <line key={a} x1={80 + 12 * Math.cos(a * Math.PI / 180)} y1={325 + 12 * Math.sin(a * Math.PI / 180)}
              x2={80 + 30 * Math.cos(a * Math.PI / 180)} y2={325 + 30 * Math.sin(a * Math.PI / 180)}
              stroke="#00FF88" strokeWidth="2" opacity="0.5" />
          ))}
        </motion.g>
        <circle cx="80" cy="325" r="12" fill="#0D0D14" stroke="url(#sgA)" strokeWidth="2.5" />
        <circle cx="80" cy="325" r="4" fill="#00FF88" />
      </g>

      {/* ===== FRONT WHEEL ===== */}
      <g filter="url(#sd)">
        <circle cx="420" cy="325" r="42" fill="url(#tireG)" stroke="#222" strokeWidth="2" />
        <circle cx="420" cy="325" r="38" fill="none" stroke="#444" strokeWidth="6" />
        <motion.circle cx="420" cy="325" r="36" fill="none" stroke="#555" strokeWidth="2" strokeDasharray="3 5" opacity="0.3"
          animate={{ rotate: 360 }} style={{ transformOrigin: "420px 325px" }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }} />
        <motion.g animate={{ rotate: 360 }} style={{ transformOrigin: "420px 325px" }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}>
          {[0,15,30,45,60,75,90,105,120,135,150,165,180,195,210,225,240,255,270,285,300,315,330,345].map((a) => (
            <line key={a} x1={420 + 12 * Math.cos(a * Math.PI / 180)} y1={325 + 12 * Math.sin(a * Math.PI / 180)}
              x2={420 + 30 * Math.cos(a * Math.PI / 180)} y2={325 + 30 * Math.sin(a * Math.PI / 180)}
              stroke="#00FF88" strokeWidth="2" opacity="0.5" />
          ))}
        </motion.g>
        <circle cx="420" cy="325" r="22" fill="#2A2A30" stroke="#555" strokeWidth="1" />
        {[0,24,48,72,96,120,144,168,192,216,240,264,288,312,336].map((a) => (
          <line key={a} x1={420 + 16 * Math.cos(a * Math.PI / 180)} y1={325 + 16 * Math.sin(a * Math.PI / 180)}
            x2={420 + 20 * Math.cos(a * Math.PI / 180)} y2={325 + 20 * Math.sin(a * Math.PI / 180)}
            stroke="#777" strokeWidth="1.2" />
        ))}
        <rect x="410" y="295" width="6" height="14" rx="2" fill="#555" />
        <circle cx="420" cy="325" r="12" fill="#0D0D14" stroke="url(#sgA)" strokeWidth="2.5" />
        <circle cx="420" cy="325" r="4" fill="#0088FF" />
      </g>

      {/* ===== FRONT FORK ===== */}
      <line x1="295" y1="185" x2="410" y2="308" stroke="#555" strokeWidth="5" strokeLinecap="round" />
      <line x1="310" y1="185" x2="430" y2="308" stroke="#555" strokeWidth="5" strokeLinecap="round" />
      <rect x="310" y="238" width="22" height="5" rx="2" fill="url(#sgA)" opacity="0.7" />

      {/* ===== DECK ===== */}
      <g filter="url(#sd)">
        <rect x="100" y="262" width="300" height="28" rx="7" fill="url(#deckG)" stroke="#0088FF" strokeWidth="2" />
        <rect x="102" y="264" width="296" height="5" rx="2" fill="#333" opacity="0.5" />
        <rect x="102" y="264" width="296" height="22" rx="5" fill="url(#tread)" />
        <rect x="100" y="262" width="300" height="2" rx="1" fill="#0088FF" opacity="0.3" />
        <rect x="100" y="288" width="300" height="2" rx="1" fill="#0088FF" opacity="0.3" />
        <motion.rect x="103" y="288" width="294" height="1.5" rx="0.75" fill="#00FF88"
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} />
        <text x="250" y="280" textAnchor="middle" fill="#0088FF" fontSize="9" fontWeight="900" fontFamily="monospace" opacity="0.2" letterSpacing="3">HOUATI</text>
        <rect x="200" y="254" width="70" height="10" rx="3" fill="#0A0A10" stroke="#00FF88" strokeWidth="1.2" />
        {[0,1,2,3].map((i) => (
          <motion.rect key={i} x={206 + i * 12} y="256" width="8" height="6" rx="1" fill="#00FF88"
            opacity={0.2 + i * 0.2}
            animate={{ opacity: [0.2 + i * 0.2, 0.9, 0.2 + i * 0.2] }}
            transition={{ duration: 1.5, delay: i * 0.4, repeat: Infinity, ease: "easeInOut" }} />
        ))}
      </g>

      {/* ===== SWINGARM + SHOCK ===== */}
      <line x1="150" y1="275" x2="80" y2="305" stroke="url(#sgA)" strokeWidth="6" strokeLinecap="round" opacity="0.7" />
      <line x1="145" y1="272" x2="170" y2="248" stroke="#00FF88" strokeWidth="2.5" opacity="0.4" />

      {/* ===== STEM ===== */}
      <g filter="url(#sd)">
        <rect x="278" y="90" width="16" height="170" rx="6" fill="#0D0D14" stroke="#0088FF" strokeWidth="2" />
        <rect x="283" y="93" width="6" height="164" rx="3" fill="#FFF" opacity="0.05" />
        <rect x="274" y="170" width="24" height="8" rx="3" fill="#444" />
        <rect x="274" y="240" width="24" height="8" rx="3" fill="#444" />
      </g>

      {/* ===== HANDLEBARS ===== */}
      <g filter="url(#sd)">
        <rect x="200" y="84" width="175" height="10" rx="5" fill="#0D0D14" stroke="#0088FF" strokeWidth="2" />
        <rect x="200" y="82" width="25" height="14" rx="5" fill="#1A1A1E" stroke="#555" strokeWidth="1.2" />
        <rect x="350" y="82" width="25" height="14" rx="5" fill="#1A1A1E" stroke="#555" strokeWidth="1.2" />
        <rect x="325" y="85" width="28" height="9" rx="4" fill="#333" stroke="#0088FF" strokeWidth="1.2" />
        <motion.rect x="330" y="87" width="5" height="5" rx="1.5" fill="#00FF88"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }} />
        <path d="M 210 94 Q 200 110 195 116" stroke="#666" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="230" cy="98" r="4" fill="#555" stroke="#777" strokeWidth="0.5" />
      </g>

      {/* ===== DASHBOARD ===== */}
      <g>
        <rect x="270" y="104" width="32" height="24" rx="6" fill="#0A0A10" stroke="#0088FF" strokeWidth="1.5" />
        <rect x="274" y="108" width="24" height="16" rx="3" fill="#050508" />
        <text x="286" y="119" textAnchor="middle" fill="#00FF88" fontSize="10" fontWeight="bold" fontFamily="monospace">38</text>
        <text x="295" y="111" textAnchor="middle" fill="#00FF88" fontSize="3.5" fontWeight="bold" fontFamily="monospace" opacity="0.4">km/h</text>
        <motion.circle cx="276" cy="110" r="0.8" fill="#0088FF"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.3, repeat: Infinity }} />
        <text x="275" y="122" fill="#00FF88" fontSize="3" fontFamily="monospace" opacity="0.3">SPORT</text>
      </g>

      {/* ===== HEADLIGHT ===== */}
      <g>
        <rect x="355" y="150" width="18" height="30" rx="6" fill="#0D0D14" stroke="#0088FF" strokeWidth="1.5" />
        <rect x="359" y="154" width="10" height="22" rx="3" fill="#FFF" opacity="0.85" />
        <motion.path d="M 373 160 L 460 130 L 460 200 Z" fill="rgba(0,136,255,0.1)"
          animate={{ opacity: [0.03, 0.2, 0.03] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} />
        <motion.circle cx="365" cy="160" r="2" fill="#FFF"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }} />
      </g>

      {/* ===== TAIL LIGHT ===== */}
      <motion.rect x="98" y="250" width="8" height="16" rx="4" fill="#FF4444"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }} />

      {/* ===== FENDERS ===== */}
      <path d="M 55 290 Q 80 270 105 285" stroke="#0088FF" strokeWidth="3" fill="none" opacity="0.5" />
      <path d="M 395 290 Q 420 270 445 285" stroke="#0088FF" strokeWidth="3" fill="none" opacity="0.5" />

      {/* ===== KICKSTAND ===== */}
      <line x1="190" y1="285" x2="227" y2="365" stroke="#555" strokeWidth="3.5" strokeLinecap="round" opacity="0.5" />

      {/* ============================================= */}
      {/* ===== RIDER — ALIVE WITH MOTION ===== */}
      {/* ============================================= */}
      <g filter="url(#sd)">
        {/* Shoes on deck */}
        <rect x="175" y="256" width="22" height="12" rx="3" fill="#0D0D14" stroke="#0088FF" strokeWidth="1.5" />
        <rect x="225" y="256" width="22" height="12" rx="3" fill="#0D0D14" stroke="#0088FF" strokeWidth="1.5" />

        {/* LEGS — slight knee bend animation */}
        <motion.g
          animate={{ rotate: [0, 0.5, 0, -0.5, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "195px 258px" }}
        >
          <path d="M 184 258 L 188 220 L 195 195" stroke="#1A1A24" strokeWidth="12" fill="none" strokeLinecap="round" />
        </motion.g>
        <motion.g
          animate={{ rotate: [0, -0.5, 0, 0.5, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "225px 258px" }}
        >
          <path d="M 238 258 L 232 220 L 225 195" stroke="#1A1A24" strokeWidth="12" fill="none" strokeLinecap="round" />
        </motion.g>

        {/* Knee pads */}
        <ellipse cx="195" cy="228" rx="7" ry="5" fill="#00FF88" opacity="0.3" />
        <ellipse cx="225" cy="228" rx="7" ry="5" fill="#00FF88" opacity="0.3" />

        {/* TORSO — slight lean animation */}
        <motion.g
          animate={{ rotate: [0, 1, 0, -1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "210px 195px" }}
        >
          <path d="M 210 195 L 210 140" stroke="#1A1A24" strokeWidth="16" fill="none" strokeLinecap="round" />
          <path d="M 210 140 L 210 195" stroke="#0088FF" strokeWidth="2" opacity="0.3" />
          <line x1="195" y1="150" x2="195" y2="185" stroke="#0088FF" strokeWidth="1.5" opacity="0.4" />
          <line x1="225" y1="150" x2="225" y2="185" stroke="#0088FF" strokeWidth="1.5" opacity="0.4" />
        </motion.g>

        {/* ARMS — subtle movement on handlebars */}
        <motion.path d="M 215 145 Q 250 148 280 105" stroke="#1A1A24" strokeWidth="8" fill="none" strokeLinecap="round"
          animate={{ d: ["M 215 145 Q 250 148 280 105", "M 215 145 Q 248 150 278 103", "M 215 145 Q 250 148 280 105"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
        <motion.path d="M 205 145 Q 230 148 260 100" stroke="#1A1A24" strokeWidth="8" fill="none" strokeLinecap="round"
          animate={{ d: ["M 205 145 Q 230 148 260 100", "M 205 145 Q 228 150 258 98", "M 205 145 Q 230 148 260 100"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />

        {/* Gloves */}
        <circle cx="280" cy="105" r="6" fill="#0D0D14" stroke="#00FF88" strokeWidth="1.5" />
        <circle cx="260" cy="100" r="6" fill="#0D0D14" stroke="#00FF88" strokeWidth="1.5" />

        {/* HELMET — head looking around */}
        <motion.g
          animate={{ rotate: [0, 3, 0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "220px 90px" }}
        >
          <path d="M 185 90 Q 182 65 195 52 Q 212 38 235 42 Q 252 48 255 65 Q 248 90 230 98 Q 210 100 195 95 Z" fill="url(#helmetG)" stroke="#0088FF" strokeWidth="1.5" />
          <rect x="215" y="52" width="10" height="3" rx="1.5" fill="#003366" />
          <rect x="230" y="53" width="8" height="3" rx="1.5" fill="#003366" />
          <rect x="242" y="56" width="6" height="2" rx="1" fill="#003366" />
          {/* Visor */}
          <path d="M 238 54 Q 258 50 264 65 L 260 70 Q 255 60 242 62 Z" fill="url(#visorG)" opacity="0.85" />
          <motion.path d="M 238 54 Q 258 50 264 65 L 260 70 Q 255 60 242 62 Z" fill="none" stroke="#00FF88" strokeWidth="1.2"
            animate={{ opacity: [0, 0.9, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
          {/* Chin */}
          <path d="M 190 95 Q 200 102 220 100" stroke="#003366" strokeWidth="3" fill="none" />
          {/* Number */}
          <rect x="205" y="60" width="12" height="8" rx="1.5" fill="#FFF" opacity="0.06" />
          <text x="211" y="66" textAnchor="middle" fill="#00FF88" fontSize="5" fontWeight="bold" fontFamily="monospace" opacity="0.4">77</text>
        </motion.g>
      </g>

      {/* ===== SPEED LINES — more prominent ===== */}
      {[0,1,2,3,4,5,6,7,8].map((i) => (
        <motion.line key={i} x1={20 + i * 25} y1={240 + i * 10} x2={55 + i * 25} y2={240 + i * 10}
          stroke="#0088FF" strokeWidth="3" strokeLinecap="round"
          animate={{ x: [-60, 0], opacity: [0, 0.6, 0] }}
          transition={{ duration: 0.4, delay: i * 0.06, repeat: Infinity, ease: "linear" }} />
      ))}
      {[0,1,2,3,4].map((i) => (
        <motion.line key={`bg${i}`} x1={-10 + i * 45} y1={290 + i * 8} x2={20 + i * 45} y2={290 + i * 8}
          stroke="#00FF88" strokeWidth="2" strokeLinecap="round"
          animate={{ x: [-50, 0], opacity: [0, 0.7, 0] }}
          transition={{ duration: 0.5, delay: i * 0.1, repeat: Infinity, ease: "linear" }} />
      ))}
    </svg>
  )
}

export function ScooterRider() {
  if (!shouldAnimate()) return null

  return (
    <div className="w-full h-full pointer-events-none select-none">
      {/* Main bounce */}
      <motion.div
        className="w-full h-full"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 0.35, repeat: Infinity, ease: "easeInOut" }}
      >
        <ScooterRiderSVG />
      </motion.div>
    </div>
  )
}
