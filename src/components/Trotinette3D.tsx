import { motion } from "motion/react"
import { shouldAnimate } from "../lib/motion-config"

function TrottiSVG() {
  return (
    <svg viewBox="0 0 360 260" fill="none" className="w-full h-full drop-shadow-2xl" aria-hidden>
      <defs>
        <filter id="g5">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="f5" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0088FF" /><stop offset="100%" stopColor="#0055AA" />
        </linearGradient>
        <linearGradient id="tire" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A2A30" /><stop offset="100%" stopColor="#111115" />
        </linearGradient>
        <linearGradient id="deckGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A2A30" /><stop offset="50%" stopColor="#1A1A20" /><stop offset="100%" stopColor="#2A2A30" />
        </linearGradient>
        <pattern id="tread" patternUnits="userSpaceOnUse" width="8" height="8">
          <rect width="8" height="8" fill="none" />
          <rect x="0" y="0" width="2" height="8" fill="#0088FF" opacity="0.08" />
        </pattern>
      </defs>

      {/* ===== REAR WHEEL ===== */}
      <g>
        {/* Tire */}
        <circle cx="90" cy="195" r="42" fill="url(#tire)" stroke="#1A1A1E" strokeWidth="2" />
        <motion.circle cx="90" cy="195" r="38" fill="none" stroke="#333" strokeWidth="6"
          animate={{ rotate: 360 }} style={{ transformOrigin: "90px 195px" }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} />
        <circle cx="90" cy="195" r="35" fill="#1A1A1E" />
        {/* Rim spokes */}
        <motion.g animate={{ rotate: 360 }} style={{ transformOrigin: "90px 195px" }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}>
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => (
            <line key={a} x1={90 + 10 * Math.cos(a * Math.PI / 180)} y1={195 + 10 * Math.sin(a * Math.PI / 180)}
              x2={90 + 30 * Math.cos(a * Math.PI / 180)} y2={195 + 30 * Math.sin(a * Math.PI / 180)}
              stroke="#0088FF" strokeWidth="1.5" opacity="0.6" />
          ))}
        </motion.g>
        {/* Hub */}
        <circle cx="90" cy="195" r="10" fill="#0D0D14" stroke="url(#f5)" strokeWidth="2" />
        <circle cx="90" cy="195" r="3" fill="#0088FF" />
        {/* Inner ring */}
        <motion.circle cx="90" cy="195" r="20" fill="none" stroke="#00FF88" strokeWidth="1" strokeDasharray="3 6"
          animate={{ rotate: -360 }} style={{ transformOrigin: "90px 195px" }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
      </g>

      {/* ===== FRONT WHEEL ===== */}
      <g>
        {/* Tire */}
        <circle cx="285" cy="195" r="42" fill="url(#tire)" stroke="#1A1A1E" strokeWidth="2" />
        <motion.circle cx="285" cy="195" r="38" fill="none" stroke="#333" strokeWidth="6"
          animate={{ rotate: 360 }} style={{ transformOrigin: "285px 195px" }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} />
        <circle cx="285" cy="195" r="35" fill="#1A1A1E" />
        {/* Rim spokes */}
        <motion.g animate={{ rotate: 360 }} style={{ transformOrigin: "285px 195px" }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}>
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => (
            <line key={a} x1={285 + 10 * Math.cos(a * Math.PI / 180)} y1={195 + 10 * Math.sin(a * Math.PI / 180)}
              x2={285 + 30 * Math.cos(a * Math.PI / 180)} y2={195 + 30 * Math.sin(a * Math.PI / 180)}
              stroke="#0088FF" strokeWidth="1.5" opacity="0.6" />
          ))}
        </motion.g>
        {/* Brake disc */}
        <circle cx="285" cy="195" r="16" fill="#333" stroke="#555" strokeWidth="0.5" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => (
          <line key={a} x1={285 + 12 * Math.cos(a * Math.PI / 180)} y1={195 + 12 * Math.sin(a * Math.PI / 180)}
            x2={285 + 15 * Math.cos(a * Math.PI / 180)} y2={195 + 15 * Math.sin(a * Math.PI / 180)}
            stroke="#666" strokeWidth="1" />
        ))}
        {/* Hub */}
        <circle cx="285" cy="195" r="8" fill="#0D0D14" stroke="url(#f5)" strokeWidth="2" />
        <circle cx="285" cy="195" r="2.5" fill="#0088FF" />
      </g>

      {/* ===== FRONT FORK ===== */}
      <line x1="270" y1="110" x2="278" y2="170" stroke="#444" strokeWidth="4" strokeLinecap="round" />
      <line x1="295" y1="110" x2="287" y2="170" stroke="#444" strokeWidth="4" strokeLinecap="round" />
      {/* Fork brace */}
      <rect x="272" y="140" width="22" height="4" rx="2" fill="url(#f5)" />

      {/* ===== DECK (SOCLE) — rebuilt thicker ===== */}
      <g>
        {/* Main deck platform */}
        <rect x="110" y="135" width="130" height="22" rx="6" fill="url(#deckGrad)" stroke="#0088FF" strokeWidth="1.5" />
        {/* Deck beveled edges */}
        <rect x="112" y="137" width="126" height="3" rx="1.5" fill="#333" opacity="0.5" />
        {/* Grip texture */}
        {[118, 126, 134, 142, 150, 158, 166, 174, 182, 190, 198, 206, 214, 222, 230].map((x) => (
          <line key={x} x1={x} y1="140" x2={x} y2="152" stroke="#0088FF" strokeWidth="0.8" opacity="0.15" />
        ))}
        {/* Deck underglow */}
        <motion.rect x="113" y="155" width="124" height="1" rx="0.5" fill="#00FF88"
          animate={{ opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
        {/* Deck logo */}
        <text x="175" y="150" textAnchor="middle" fill="#0088FF" fontSize="6" fontWeight="bold" fontFamily="monospace" opacity="0.3">HOUATI</text>
      </g>

      {/* ===== BATTERY PACK ===== */}
      <rect x="150" y="98" width="40" height="35" rx="5" fill="#0D0D14" stroke="#00FF88" strokeWidth="1.5" />
      <rect x="152" y="100" width="36" height="4" rx="2" fill="#1A1A1E" />
      {/* Battery cells */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.rect key={i} x={154 + i * 7} y="107" width="5" height="18" rx="1.5" fill="#00FF88"
          opacity={0.15 + i * 0.17}
          animate={{ opacity: [0.15 + i * 0.17, 0.9, 0.15 + i * 0.17] }}
          transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }} />
      ))}
      {/* Battery terminal */}
      <rect x="168" y="95" width="4" height="5" rx="1.5" fill="#0088FF" />
      {/* Battery indicator LEDs */}
      {[0, 1, 2].map((i) => (
        <motion.circle key={i} cx={156 + i * 10} cy="132" r="1.2" fill="#00FF88"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.3, delay: i * 0.2, repeat: Infinity, repeatDelay: 3 }} />
      ))}

      {/* ===== STEM / STEERING COLUMN ===== */}
      <rect x="162" y="35" width="10" height="65" rx="4" fill="url(#f5)" />
      <motion.rect x="163" y="38" width="8" height="2" rx="1" fill="#00FF88"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} />

      {/* ===== HANDLEBARS ===== */}
      <rect x="120" y="25" width="90" height="8" rx="4" fill="#0D0D14" stroke="#0088FF" strokeWidth="1.2" />
      {/* Grips */}
      <rect x="120" y="24" width="22" height="10" rx="4" fill="#1A1A1E" stroke="#333" strokeWidth="0.8" />
      <rect x="188" y="24" width="22" height="10" rx="4" fill="#1A1A1E" stroke="#333" strokeWidth="0.8" />
      {/* Throttle */}
      <rect x="178" y="26" width="12" height="6" rx="3" fill="#333" stroke="#0088FF" strokeWidth="0.8" />
      {/* Handlebar clamp */}
      <rect x="160" y="22" width="14" height="14" rx="3" fill="#2A2A30" />
      <rect x="163" y="25" width="8" height="8" rx="2" fill="#0D0D14" />

      {/* ===== DISPLAY / DASHBOARD ===== */}
      <g>
        <rect x="155" y="8" width="24" height="18" rx="4" fill="#0D0D14" stroke="#0088FF" strokeWidth="1.2" />
        <rect x="157" y="10" width="20" height="14" rx="2.5" fill="#050508" />
        {/* Speed display */}
        <text x="167" y="20" textAnchor="middle" fill="#00FF88" fontSize="7" fontWeight="bold" fontFamily="monospace">32</text>
        {/* Blinking DOT */}
        <motion.circle cx="159" cy="12" r="0.6" fill="#0088FF"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.4, repeat: Infinity }} />
        {/* Speed unit */}
        <text x="174" y="13" textAnchor="middle" fill="#00FF88" fontSize="3" fontWeight="bold" fontFamily="monospace" opacity="0.5">km/h</text>
      </g>

      {/* ===== HEADLIGHT ===== */}
      <g>
        <rect x="245" y="100" width="12" height="22" rx="4" fill="#0D0D14" stroke="#0088FF" strokeWidth="1.2" />
        <rect x="250" y="104" width="6" height="14" rx="2" fill="#FFF" opacity="0.85" />
        {/* Light beam */}
        <motion.path d="M 258 108 L 330 95 L 330 125 Z" fill="rgba(0,136,255,0.06)"
          animate={{ opacity: [0, 0.2, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
        {/* High beam */}
        <motion.circle cx="254" cy="106" r="1.5" fill="#FFF"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }} />
      </g>

      {/* ===== TAIL LIGHT ===== */}
      <g>
        <rect x="108" y="125" width="8" height="14" rx="3" fill="#0D0D14" stroke="#FF4444" strokeWidth="1" />
        <motion.rect x="110" y="127" width="4" height="10" rx="1.5" fill="#FF4444"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} />
      </g>

      {/* ===== FENDER REAR ===== */}
      <path d="M 100 175 Q 90 150 110 135" stroke="#333" strokeWidth="2.5" fill="none" />
      <path d="M 100 175 Q 90 150 110 135" stroke="#0088FF" strokeWidth="0.5" fill="none" opacity="0.3" />
    </svg>
  )
}

export function Trotinette3D() {
  if (!shouldAnimate()) return null

  return (
    <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Circuit track */}
      <div className="absolute inset-[8%] border-2 border-brand/10 rounded-[60px]">
        <svg className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)]" aria-hidden>
          <motion.rect
            x="0" y="0" width="100%" height="100%" rx={50}
            fill="none" stroke="#0088FF" strokeWidth="1.5" strokeDasharray="8 12"
            opacity="0.2"
            animate={{ strokeDashoffset: [0, -40] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          {[[50,50],[50,"calc(100%-50px)"],["calc(100%-50px)",50],["calc(100%-50px)","calc(100%-50px)"]].map((pos,i) => (
            <motion.circle key={i} cx={pos[0]} cy={pos[1]} r="3"
              fill="#00FF88" opacity="0.3"
              animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.5, 1] }}
              transition={{ duration: 2, delay: i*0.5, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </svg>

        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={`e-${i}`}
            className="absolute w-2 h-2 rounded-full bg-neon top-[-4px] left-[-4px]"
            style={{ boxShadow: "0 0 6px #00FF88" }}
            animate={{
              left: i % 2 === 0
                ? ["calc(100% - 4px)", "calc(100% - 4px)", "-4px", "-4px"]
                : ["-4px", "-4px", "calc(100% - 4px)", "calc(100% - 4px)"],
              top: i < 2
                ? ["-4px", "calc(100% - 4px)", "calc(100% - 4px)", "-4px"]
                : ["calc(100% - 4px)", "-4px", "-4px", "calc(100% - 4px)"],
            }}
            transition={{
              duration: 6,
              delay: i * 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Scooter animates around the track */}
      <motion.div
        className="absolute w-[190px] h-[130px]"
        style={{ left: "calc(50% - 95px)", top: "8%" }}
        animate={{
          x: [0, 0, 320, 320, 0],
          y: [0, 270, 270, 0, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      >
        <TrottiSVG />
      </motion.div>
    </div>
  )
}
