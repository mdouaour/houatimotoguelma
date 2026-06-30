import { motion } from "motion/react"
import { shouldAnimate } from "../lib/motion-config"

export function Trotinette3D() {
  if (!shouldAnimate()) return null

  return (
    <div className="absolute right-0 top-[10%] w-[280px] h-[260px] pointer-events-none overflow-visible z-[1]">

      {/* Trotinette 3D container */}
      <motion.div
        className="absolute right-[10%] top-[20%] w-[220px] h-[200px] hidden md:block"
        style={{ perspective: 800 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Floating animation */}
        <motion.div
          className="w-full h-full"
          animate={{
            y: [0, -12, 0],
            rotateY: [0, 5, 0, -5, 0],
          }}
          transition={{
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotateY: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Glow behind */}
          <motion.div
            className="absolute -inset-12 rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(0,136,255,0.4) 0%, transparent 60%)",
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* SVG Trotinette */}
          <svg
            viewBox="0 0 240 180"
            fill="none"
            className="w-full h-full drop-shadow-2xl"
            aria-hidden
          >
            {/* Back wheel */}
            <g>
              <motion.circle
                cx="55"
                cy="145"
                r="28"
                stroke="#0088FF"
                strokeWidth="4.5"
                animate={{ rotate: 360 }}
                style={{ transformOrigin: "55px 145px" }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              {/* Spokes */}
              <motion.g
                animate={{ rotate: 360 }}
                style={{ transformOrigin: "55px 145px" }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <line
                  x1="55"
                  y1="117"
                  x2="55"
                  y2="173"
                  stroke="#0088FF"
                  strokeWidth="2"
                  className="opacity-60"
                />
                <line
                  x1="27"
                  y1="145"
                  x2="83"
                  y2="145"
                  stroke="#0088FF"
                  strokeWidth="2"
                  className="opacity-60"
                />
                <line
                  x1="35"
                  y1="125"
                  x2="75"
                  y2="165"
                  stroke="#0088FF"
                  strokeWidth="1.5"
                  className="opacity-40"
                />
                <line
                  x1="75"
                  y1="125"
                  x2="35"
                  y2="165"
                  stroke="#0088FF"
                  strokeWidth="1.5"
                  className="opacity-40"
                />
              </motion.g>
            </g>

            {/* Front wheel */}
            <g>
              <motion.circle
                cx="195"
                cy="145"
                r="28"
                stroke="#0088FF"
                strokeWidth="4.5"
                animate={{ rotate: -360 }}
                style={{ transformOrigin: "195px 145px" }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              {/* Spokes */}
              <motion.g
                animate={{ rotate: -360 }}
                style={{ transformOrigin: "195px 145px" }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <line
                  x1="195"
                  y1="117"
                  x2="195"
                  y2="173"
                  stroke="#0088FF"
                  strokeWidth="2"
                  className="opacity-60"
                />
                <line
                  x1="167"
                  y1="145"
                  x2="223"
                  y2="145"
                  stroke="#0088FF"
                  strokeWidth="2"
                  className="opacity-60"
                />
                <line
                  x1="175"
                  y1="125"
                  x2="215"
                  y2="165"
                  stroke="#0088FF"
                  strokeWidth="1.5"
                  className="opacity-40"
                />
                <line
                  x1="215"
                  y1="125"
                  x2="175"
                  y2="165"
                  stroke="#0088FF"
                  strokeWidth="1.5"
                  className="opacity-40"
                />
              </motion.g>
            </g>

            {/* Deck (footboard) */}
            <rect
              x="42"
              y="106"
              width="100"
              height="10"
              rx="3"
              fill="#0088FF"
              className="opacity-90"
            />
            <rect
              x="42"
              y="106"
              width="100"
              height="3"
              rx="1.5"
              fill="#FAFAFA"
              className="dark:opacity-60"
            />

            {/* Battery/body block */}
            <rect
              x="126"
              y="92"
              width="16"
              height="22"
              rx="4"
              fill="#0088FF"
              className="opacity-90"
            />
            <rect
              x="126"
              y="92"
              width="16"
              height="4"
              rx="2"
              fill="#FAFAFA"
            />

            {/* Stem */}
            <rect
              x="128"
              y="28"
              width="7"
              height="68"
              rx="3"
              fill="#0088FF"
              className="opacity-90"
            />
            <rect
              x="128"
              y="28"
              width="3"
              height="68"
              rx="1.5"
              fill="#FAFAFA"
              className="opacity-50"
            />

            {/* Handlebars */}
            <rect
              x="100"
              y="20"
              width="65"
              height="7"
              rx="3"
              fill="#0088FF"
              className="opacity-90"
            />
            {/* Handlebar grips */}
            <rect
              x="100"
              y="18"
              width="14"
              height="11"
              rx="3"
              fill="#1A1A1E"
            />
            <rect
              x="151"
              y="18"
              width="14"
              height="11"
              rx="3"
              fill="#1A1A1E"
            />
          </svg>

          {/* Neon glow ring behind scooter */}
          <motion.div
            className="absolute -inset-8 rounded-full opacity-25"
            style={{ background: "radial-gradient(circle, rgba(0,255,136,0.3) 0%, transparent 70%)" }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Battery indicator — neon green */}
          <motion.rect
            x="130"
            y="96"
            width="8"
            height="14"
            rx="2"
            fill="#00FF88"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="drop-shadow-[0_0_6px_#00FF88]"
          />
          {/* Rear wheel spark */}
          <Particle
            cx={55}
            cy={145}
            size={5}
            color="neon"
            delay={0}
            driftX={-30}
            driftY={-40}
          />
          <Particle
            cx={55}
            cy={145}
            size={3}
            color="neon"
            delay={0.5}
            driftX={-20}
            driftY={-50}
          />
          {/* Front wheel spark */}
          <Particle
            cx={195}
            cy={145}
            size={4}
            color="brand"
            delay={1.2}
            driftX={20}
            driftY={-40}
          />
          {/* Battery spark */}
          <Particle
            cx={134}
            cy={100}
            size={4}
            color="neon"
            delay={2}
            driftX={0}
            driftY={-30}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

function Particle({
  cx,
  cy,
  size,
  color,
  delay,
  driftX,
  driftY,
}: {
  cx: number
  cy: number
  size: number
  color: string
  delay: number
  driftX: number
  driftY: number
}) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${(cx / 240) * 100}%`,
        top: `${(cy / 200) * 100}%`,
        width: size,
        height: size,
        backgroundColor: color === "brand"
          ? "var(--color-brand)"
          : "#00FF88",
        boxShadow: color === "neon"
          ? "0 0 6px #00FF88"
          : "0 0 6px var(--color-brand)",
      }}
      animate={{
        x: [0, driftX, 0],
        y: [0, driftY, 0],
        scale: [1, 2, 0],
        opacity: [1, 0.8, 0],
      }}
      transition={{
        duration: 2.5,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  )
}
