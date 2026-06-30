import { motion } from "motion/react"
import { ScooterRider } from "./ScooterRider"
import { shouldAnimate } from "../lib/motion-config"

export function FullPageScooter() {
  if (!shouldAnimate()) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Visible circuit track frame */}
      <div className="absolute inset-[5%] md:inset-[8%] rounded-[40px] md:rounded-[80px]"
        style={{ border: "1px solid rgba(220,38,38,0.08)" }}
      >
        <svg className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)]" aria-hidden>
          <defs>
            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00FF88" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00FF88" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Outer dashed track */}
          <motion.rect
            x="0" y="0" width="100%" height="100%" rx={24}
            fill="none" stroke="#DC2626" strokeWidth="1.5"
            strokeDasharray="6 16" opacity="0.2"
            animate={{ strokeDashoffset: [0, -44] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          {/* Inner solid track — green energy trace */}
          <motion.rect
            x="8" y="8" width="calc(100% - 16px)" height="calc(100% - 16px)" rx={20}
            fill="none" stroke="#00FF88" strokeWidth="0.8"
            strokeDasharray="3 24" opacity="0.15"
            animate={{ strokeDashoffset: [0, -27] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
          {/* Corner glow blobs */}
          {[[24,24],[24,"calc(100%-24px)"],["calc(100%-24px)",24],["calc(100%-24px)","calc(100%-24px)"]].map((pos,i) => (
            <circle key={i} cx={pos[0]} cy={pos[1]} r="12" fill="url(#nodeGlow)" />
          ))}
          {/* Corner node dots */}
          {[[24,24],[24,"calc(100%-24px)"],["calc(100%-24px)",24],["calc(100%-24px)","calc(100%-24px)"]].map((pos,i) => (
            <motion.g key={`n${i}`}>
              <circle cx={pos[0]} cy={pos[1]} r="4" fill="#00FF88" opacity="0.12" />
              <motion.circle cx={pos[0]} cy={pos[1]} r="2.5" fill="#00FF88"
                animate={{ opacity: [0.05, 0.5, 0.05], scale: [1, 2, 1] }}
                transition={{ duration: 2, delay: i*0.6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.g>
          ))}
          {/* Mid-point circuit dots */}
          {[{x:"50%",y:24},{x:"50%",y:"calc(100%-24px)"},{x:24,y:"50%"},{x:"calc(100%-24px)",y:"50%"}].map((pos,i) => (
            <motion.circle key={`m${i}`} cx={pos.x} cy={pos.y} r="1.5" fill="#DC2626"
              animate={{ opacity: [0.05, 0.25, 0.05], scale: [1, 2, 1] }}
              transition={{ duration: 3, delay: i*0.4, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </svg>
      </div>

      {/* Traveling scooter — circuit path loop */}
      <motion.div
        className="absolute"
        style={{ top: "3%", right: "3%", width: "min(120px, 18vw)" }}
        animate={{
          x: [0, 0, "-80vw", "-80vw", 0],
          y: [0, "80vh", "80vh", 0, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Glow aura follows scooter */}
        <div className="absolute pointer-events-none"
          style={{
            width: "min(160px, 22vw)",
            height: "min(150px, 20vw)",
            top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <motion.div
            className="w-full h-full rounded-full bg-gradient-radial from-green-500/10 via-transparent to-transparent blur-2xl"
            animate={{ opacity: [0.12, 0.3, 0.12] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Rotation — faces scooter along circuit path */}
        <motion.div
          className="relative"
          animate={{ rotate: [90, 180, 270, 360, 450] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <ScooterRider />
        </motion.div>
      </motion.div>
    </div>
  )
}
