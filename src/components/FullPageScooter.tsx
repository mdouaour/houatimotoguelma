import { motion } from "motion/react"
import { ScooterRider } from "./ScooterRider"
import { shouldAnimate } from "../lib/motion-config"

export function FullPageScooter() {
  if (!shouldAnimate()) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large track spanning full viewport */}
      <div className="absolute inset-[3%] md:inset-[5%] rounded-[30px] md:rounded-[100px]"
        style={{
          background: "radial-gradient(ellipse at center, transparent 60%, rgba(0,136,255,0.02) 100%)",
          border: "1px solid rgba(0,136,255,0.08)",
          boxShadow: "inset 0 0 60px rgba(0,136,255,0.02)",
        }}
      >
        {/* Flowing electron dashes */}
        <svg className="absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)]" aria-hidden>
          <motion.rect
            x="0" y="0" width="100%" height="100%" rx={28}
            fill="none" stroke="#0088FF" strokeWidth="2.5"
            strokeDasharray="10 24" opacity="0.3"
            animate={{ strokeDashoffset: [0, -68] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
          {/* Glowing corner nodes */}
          {[[40,40],[40,"calc(100%-40px)"],["calc(100%-40px)",40],["calc(100%-40px)","calc(100%-40px)"]].map((pos,i) => (
            <motion.circle key={i} cx={pos[0]} cy={pos[1]} r="6"
              fill="#00FF88"
              animate={{ opacity: [0.1, 0.7, 0.1], scale: [1, 1.8, 1] }}
              transition={{ duration: 1.5, delay: i*0.4, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </svg>

        {/* Traveling electron dots */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={`e-${i}`}
            className="absolute w-[12px] h-[12px] rounded-full top-[-6px] left-[-6px]"
            style={{
              background: "radial-gradient(circle, #00FF88, #0088FF)",
              boxShadow: "0 0 20px #00FF88, 0 0 40px rgba(0,136,255,0.3)",
              opacity: 0.6,
            }}
            animate={{
              left: i % 2 === 0
                ? ["calc(100% - 6px)", "calc(100% - 6px)", "-6px", "-6px"]
                : ["-6px", "-6px", "calc(100% - 6px)", "calc(100% - 6px)"],
              top: i < 2
                ? ["-6px", "calc(100% - 6px)", "calc(100% - 6px)", "-6px"]
                : ["calc(100% - 6px)", "-6px", "-6px", "calc(100% - 6px)"],
            }}
            transition={{
              duration: 10,
              delay: i * 2.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Secondary inner track — smaller circuit */}
      <div className="absolute inset-[12%] md:inset-[18%] rounded-[20px] md:rounded-[60px] opacity-40"
        style={{ border: "1px dashed rgba(0,255,136,0.06)" }}
      >
        <svg className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)]" aria-hidden>
          <motion.rect
            x="0" y="0" width="100%" height="100%" rx={18}
            fill="none" stroke="#00FF88" strokeWidth="1"
            strokeDasharray="5 15" opacity="0.2"
            animate={{ strokeDashoffset: [0, -40] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      {/* Scooter + rider travels around the full-page track */}
      <motion.div
        className="absolute"
        style={{
          width: "min(240px, 26vw)",
          height: "min(220px, 24vw)",
          left: "calc(50% - min(120px, 13vw))",
          top: "3%",
        }}
        animate={{
          x: [0, 0, "calc(100vw - 50%)", "calc(100vw - 50%)", 0],
          y: [0, "calc(100vh - 30%)", "calc(100vh - 30%)", 0, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      >
        <ScooterRider />
      </motion.div>
    </div>
  )
}
