import { motion } from "motion/react"
import { shouldAnimate } from "../lib/motion-config"

function TrottiSVG() {
  return (
    <svg viewBox="0 0 320 220" fill="none" className="w-full h-full drop-shadow-2xl" aria-hidden>
      <defs>
        <filter id="g4">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="f4" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0088FF" /><stop offset="100%" stopColor="#0055AA" />
        </linearGradient>
      </defs>

      {/* Rear wheel */}
      <circle cx="76" cy="165" r="36" fill="#1A1A1E" opacity="0.95" />
      <motion.circle cx="76" cy="165" r="32" stroke="#0088FF" strokeWidth="4" fill="none"
        animate={{ rotate: 360 }} style={{ transformOrigin: "76px 165px" }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} />
      <motion.g animate={{ rotate: 360 }} style={{ transformOrigin: "76px 165px" }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}>
        {[0,45,90,135,180,225,270,315].map((a,i) => (
          <circle key={i} cx={76+29*Math.cos(a*Math.PI/180)} cy={165+29*Math.sin(a*Math.PI/180)} r="2" fill="#0088FF" opacity="0.5" />
        ))}
      </motion.g>
      <circle cx="76" cy="165" r="14" fill="#0D0D14" stroke="url(#f4)" strokeWidth="2" />
      <motion.circle cx="76" cy="165" r="12" fill="none" stroke="#00FF88" strokeWidth="1.5" strokeDasharray="3 5"
        animate={{ rotate: -360 }} style={{ transformOrigin: "76px 165px" }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />

      {/* Front wheel */}
      <circle cx="260" cy="165" r="36" fill="#1A1A1E" opacity="0.95" />
      <motion.circle cx="260" cy="165" r="32" stroke="#0088FF" strokeWidth="4" fill="none"
        animate={{ rotate: 360 }} style={{ transformOrigin: "260px 165px" }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} />
      <motion.g animate={{ rotate: 360 }} style={{ transformOrigin: "260px 165px" }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}>
        {[0,45,90,135,180,225,270,315].map((a,i) => (
          <circle key={i} cx={260+29*Math.cos(a*Math.PI/180)} cy={165+29*Math.sin(a*Math.PI/180)} r="2" fill="#0088FF" opacity="0.5" />
        ))}
      </motion.g>
      <circle cx="260" cy="165" r="10" fill="#0D0D14" stroke="url(#f4)" strokeWidth="2" />

      {/* Fork */}
      <line x1="245" y1="95" x2="252" y2="140" stroke="#333" strokeWidth="3" />
      <line x1="268" y1="95" x2="260" y2="140" stroke="#333" strokeWidth="3" />
      <rect x="246" y="100" width="5" height="25" rx="2.5" fill="url(#f4)" />

      {/* Deck */}
      <rect x="100" y="118" width="110" height="14" rx="6" fill="#0D0D14" stroke="#0088FF" strokeWidth="2" />
      {[115,131,147,163,179,195].map((x,i) => (
        <line key={i} x1={x} y1="121" x2={x} y2="129" stroke="#0088FF" strokeWidth="1" opacity="0.3" />
      ))}
      <motion.rect x="103" y="130" width="104" height="1" rx="0.5" fill="#00FF88"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />

      {/* Battery */}
      <rect x="138" y="88" width="30" height="28" rx="4" fill="#0D0D14" stroke="#00FF88" strokeWidth="1.5" />
      {[0,1,2,3].map((i) => (
        <motion.rect key={i} x={143+i*6} y="93" width="4" height="18" rx="1" fill="#00FF88"
          opacity={0.2+i*0.2}
          animate={{ opacity: [0.2+i*0.2, 0.8, 0.2+i*0.2] }}
          transition={{ duration: 2, delay: i*0.4, repeat: Infinity, ease: "easeInOut" }} />
      ))}
      <rect x="152" y="86" width="2" height="4" rx="1" fill="#00FF88" />

      {/* Stem + bars */}
      <rect x="149" y="30" width="8" height="62" rx="4" fill="url(#f4)" />
      <motion.rect x="150" y="32" width="6" height="2" rx="1" fill="#00FF88"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} />
      <rect x="110" y="22" width="70" height="7" rx="3.5" fill="#0D0D14" stroke="#0088FF" strokeWidth="1" />
      <rect x="110" y="20" width="16" height="11" rx="4" fill="#1A1A1E" />
      <rect x="164" y="20" width="16" height="11" rx="4" fill="#1A1A1E" />

      {/* Display */}
      <rect x="147" y="12" width="18" height="12" rx="2.5" fill="#0D0D14" stroke="#0088FF" strokeWidth="1" />
      <text x="156" y="20" textAnchor="middle" fill="#00FF88" fontSize="5.5" fontWeight="bold" fontFamily="monospace">28</text>
      <motion.circle cx="149" cy="15" r="0.8" fill="#0088FF"
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, repeat: Infinity }} />

      {/* Headlight */}
      <rect x="230" y="90" width="8" height="16" rx="3" fill="#0D0D14" stroke="#0088FF" strokeWidth="1" />
      <rect x="234" y="92" width="4" height="12" rx="2" fill="#FFF" opacity="0.9" />
      <motion.path d="M 238 98 L 310 88 L 310 108 Z" fill="rgba(0,136,255,0.08)"
        animate={{ opacity: [0, 0.2, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />

      {/* Tail light */}
      <rect x="98" y="110" width="6" height="10" rx="2" fill="#0D0D14" stroke="#FF4444" strokeWidth="1" />
      <motion.rect x="100" y="112" width="2" height="6" rx="1" fill="#FF4444"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} />
    </svg>
  )
}

export function Trotinette3D() {
  if (!shouldAnimate()) return null

  return (
    <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Circuit track */}
      <div className="absolute inset-[8%] border-2 border-brand/10 rounded-[60px]">
        {/* Dashed track */}
        <svg className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)]" aria-hidden>
          <motion.rect
            x="0" y="0" width="100%" height="100%" rx={50}
            fill="none" stroke="#0088FF" strokeWidth="1.5" strokeDasharray="8 12"
            opacity="0.2"
            animate={{ strokeDashoffset: [0, -40] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          {/* Track nodes */}
          {[[50,50],[50,"calc(100%-50px)"],["calc(100%-50px)",50],["calc(100%-50px)","calc(100%-50px)"]].map((pos,i) => (
            <motion.circle key={i} cx={pos[0]} cy={pos[1]} r="3"
              fill="#00FF88" opacity="0.3"
              animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.5, 1] }}
              transition={{ duration: 2, delay: i*0.5, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </svg>

        {/* Electrons flowing on track */}
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
        className="absolute w-[160px] h-[110px]"
        style={{ left: "calc(50% - 80px)", top: "10%" }}
        animate={{
          x: [0, 0, 300, 300, 0],
          y: [0, 250, 250, 0, 0],
        }}
        transition={{
          duration: 8,
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
