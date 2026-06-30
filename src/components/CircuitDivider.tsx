import { motion } from "motion/react"

export function CircuitDivider() {
  return (
    <div className="relative h-16 md:h-20 overflow-hidden pointer-events-none select-none">
      <svg
        viewBox="0 0 1200 80"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        {/* Main horizontal trace */}
        <motion.path
          d="M0 40 L200 40 L220 20 L350 20 L370 40 L600 40"
          fill="none" stroke="#DC2626" strokeWidth="1"
          strokeDasharray="6 4" opacity="0.15"
          animate={{ strokeDashoffset: [0, -100] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M1200 40 L1000 40 L980 60 L850 60 L830 40 L600 40"
          fill="none" stroke="#00FF88" strokeWidth="0.8"
          strokeDasharray="4 6" opacity="0.12"
          animate={{ strokeDashoffset: [0, -100] }}
          transition={{ duration: 2.5, delay: 0.3, repeat: Infinity, ease: "linear" }}
        />
        {/* Vertical branches */}
        <motion.path
          d="M220 20 L220 0"
          fill="none" stroke="#00D4FF" strokeWidth="1"
          strokeDasharray="3 4" opacity="0.1"
          animate={{ strokeDashoffset: [0, -14] }}
          transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M980 60 L980 80"
          fill="none" stroke="#00D4FF" strokeWidth="1"
          strokeDasharray="3 4" opacity="0.1"
          animate={{ strokeDashoffset: [0, -14] }}
          transition={{ duration: 1.5, delay: 0.8, repeat: Infinity, ease: "linear" }}
        />
        {/* Junction dots */}
        <motion.circle cx="220" cy="20" r="2" fill="#DC2626"
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle cx="370" cy="40" r="1.5" fill="#00FF88"
          animate={{ opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: 1.8, delay: 0.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle cx="980" cy="60" r="2" fill="#00FF88"
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 2.2, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle cx="830" cy="40" r="1.5" fill="#00D4FF"
          animate={{ opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: 1.6, delay: 0.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
      {/* Small gradient glow at center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
    </div>
  )
}
