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
      </defs>

      {/* Ground shadow */}
      <motion.ellipse cx="250" cy="370" rx="180" ry="6" fill="#DC2626" opacity="0.08"
        animate={{ scaleX: [1, 1.05, 1] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }} />

      {/* REAR WHEEL */}
      <g filter="url(#sd)">
        <circle cx="85" cy="325" r="38" fill="#1A1A20" stroke="#333" strokeWidth="2" />
        <motion.g animate={{ rotate: 360 }} style={{ transformOrigin: "85px 325px" }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}>
          {[0,30,60,90,120,150,180,210,240,270,300,330].map((a) => (
            <line key={a} x1={85 + 10 * Math.cos(a * Math.PI / 180)} y1={325 + 10 * Math.sin(a * Math.PI / 180)}
              x2={85 + 32 * Math.cos(a * Math.PI / 180)} y2={325 + 32 * Math.sin(a * Math.PI / 180)}
              stroke="#00FF88" strokeWidth="1.5" opacity="0.35" />
          ))}
        </motion.g>
        <circle cx="85" cy="325" r="10" fill="#0D0D14" stroke="url(#sgA)" strokeWidth="2" />
        <circle cx="85" cy="325" r="3" fill="#00FF88" />
      </g>

      {/* FRONT WHEEL */}
      <g filter="url(#sd)">
        <circle cx="415" cy="325" r="38" fill="#1A1A20" stroke="#333" strokeWidth="2" />
        <motion.g animate={{ rotate: 360 }} style={{ transformOrigin: "415px 325px" }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}>
          {[0,30,60,90,120,150,180,210,240,270,300,330].map((a) => (
            <line key={a} x1={415 + 10 * Math.cos(a * Math.PI / 180)} y1={325 + 10 * Math.sin(a * Math.PI / 180)}
              x2={415 + 32 * Math.cos(a * Math.PI / 180)} y2={325 + 32 * Math.sin(a * Math.PI / 180)}
              stroke="#00FF88" strokeWidth="1.5" opacity="0.35" />
          ))}
        </motion.g>
        <circle cx="415" cy="325" r="10" fill="#0D0D14" stroke="url(#sgA)" strokeWidth="2" />
        <circle cx="415" cy="325" r="3" fill="#DC2626" />
      </g>

      {/* FRONT FORK */}
      <line x1="295" y1="195" x2="400" y2="310" stroke="#555" strokeWidth="4" strokeLinecap="round" />
      <line x1="308" y1="195" x2="420" y2="310" stroke="#555" strokeWidth="4" strokeLinecap="round" />

      {/* DECK */}
      <g filter="url(#sd)">
        <rect x="105" y="265" width="290" height="24" rx="6" fill="#0D0D14" stroke="#DC2626" strokeWidth="1.5" />
        <rect x="107" y="267" width="286" height="4" rx="2" fill="#222" opacity="0.5" />
        <motion.rect x="108" y="285" width="284" height="1.5" rx="0.75" fill="#00FF88"
          animate={{ opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
        <rect x="200" y="258" width="60" height="8" rx="3" fill="#0A0A10" stroke="#00FF88" strokeWidth="1" />
        {[0,1,2,3].map((i) => (
          <motion.rect key={i} x={205 + i * 12} y="259" width="8" height="6" rx="1" fill="#00FF88"
            opacity={0.2 + i * 0.2}
            animate={{ opacity: [0.2 + i * 0.2, 0.8, 0.2 + i * 0.2] }}
            transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }} />
        ))}
      </g>

      {/* STEM */}
      <g filter="url(#sd)">
        <rect x="280" y="100" width="14" height="162" rx="5" fill="#0D0D14" stroke="#DC2626" strokeWidth="1.5" />
      </g>

      {/* HANDLEBARS */}
      <g filter="url(#sd)">
        <rect x="210" y="95" width="155" height="8" rx="4" fill="#0D0D14" stroke="#DC2626" strokeWidth="1.5" />
        <rect x="320" y="96" width="24" height="7" rx="3" fill="#333" stroke="#DC2626" strokeWidth="1" />
        <motion.circle cx="332" cy="99" r="2" fill="#00FF88"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }} />
      </g>

      {/* SIMPLE CUTE RIDER */}
      <g filter="url(#sd)">
        {/* Shoes on deck */}
        <rect x="178" y="260" width="18" height="10" rx="4" fill="#0A0A10" stroke="url(#sgA)" strokeWidth="1" />
        <rect x="228" y="260" width="18" height="10" rx="4" fill="#0A0A10" stroke="url(#sgA)" strokeWidth="1" />

        {/* Legs — simple straight columns */}
        <rect x="180" y="208" width="14" height="54" rx="5" fill="#1A1A24" />
        <rect x="230" y="208" width="14" height="54" rx="5" fill="#1A1A24" />
        <rect x="182" y="210" width="10" height="50" rx="4" fill="#222" opacity="0.3" />
        <rect x="232" y="210" width="10" height="50" rx="4" fill="#222" opacity="0.3" />

        {/* Torso — simple rounded box */}
        <rect x="178" y="140" width="68" height="70" rx="16" fill="#0A0A14" stroke="#DC2626" strokeWidth="1.2" />
        <rect x="183" y="145" width="12" height="12" rx="3" fill="#00FF88" opacity="0.15" />
        <rect x="228" y="145" width="12" height="12" rx="3" fill="#00FF88" opacity="0.15" />
        {/* Racing stripe */}
        <rect x="207" y="145" width="10" height="65" rx="3" fill="url(#sgA)" opacity="0.15" />

        {/* Arms — simple bent tubes */}
        <path d="M 182 155 Q 190 160 270 108" stroke="#0A0A14" strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M 242 155 Q 250 160 285 110" stroke="#0A0A14" strokeWidth="8" fill="none" strokeLinecap="round" />

        {/* Gloves */}
        <circle cx="270" cy="108" r="5" fill="#0D0D14" stroke="#00FF88" strokeWidth="1.2" />
        <circle cx="285" cy="110" r="5" fill="#0D0D14" stroke="#00FF88" strokeWidth="1.2" />

        {/* Head — simple rounded helmet, no face details */}
        <circle cx="212" cy="92" r="28" fill="#0A0A14" stroke="#DC2626" strokeWidth="2" />
        {/* Visor — simple curved band */}
        <path d="M 233 70 Q 252 80 250 100 L 242 100 Q 244 84 233 76 Z" fill="#00FF88" opacity="0.3" />
        {/* Helmet visor glow */}
        <motion.circle cx="238" cy="86" r="4" fill="#00FF88" opacity="0.15"
          animate={{ opacity: [0.05, 0.2, 0.05] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
        {/* Simple crest */}
        <rect x="210" y="64" width="6" height="6" rx="3" fill="#DC2626" opacity="0.4" />
      </g>

      {/* Speed lines */}
      {[0,1,2,3,4,5,6].map((i) => (
        <motion.line key={i} x1={30 + i * 30} y1={245 + i * 10} x2={60 + i * 30} y2={245 + i * 10}
          stroke="#DC2626" strokeWidth="2" strokeLinecap="round"
          animate={{ x: [-50, 0], opacity: [0, 0.4, 0] }}
          transition={{ duration: 0.5, delay: i * 0.08, repeat: Infinity, ease: "linear" }} />
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
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ScooterRiderSVG />
      </motion.div>
    </div>
  )
}
