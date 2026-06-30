import { motion } from "motion/react"
import { springs } from "../lib/motion-tokens"
import { shouldAnimate } from "../lib/motion-config"

export function Trotinette3D() {
  if (!shouldAnimate()) return null

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[-1]">
      {/* Speed lines */}
      <motion.div
        className="absolute inset-0"
        aria-hidden
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent"
            style={{
              top: `${15 + i * 14}%`,
              left: `${10 + (i % 3) * 15}%`,
              width: `${60 + i * 20}px`,
            }}
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: [0, 800],
              opacity: [0, 0.6, 0.8, 0.6, 0],
            }}
            transition={{
              duration: 2.5 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>

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
            className="absolute -inset-10 rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, rgba(227,30,36,0.3) 0%, transparent 70%)",
            }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* SVG Trotinette */}
          <svg
            viewBox="0 0 240 180"
            fill="none"
            className="w-full h-full drop-shadow-xl"
            aria-hidden
          >
            {/* Back wheel */}
            <g>
              <motion.circle
                cx="55"
                cy="145"
                r="28"
                stroke="currentColor"
                strokeWidth="4.5"
                className="text-ink"
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
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-ink/60"
                />
                <line
                  x1="27"
                  y1="145"
                  x2="83"
                  y2="145"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-ink/60"
                />
                <line
                  x1="35"
                  y1="125"
                  x2="75"
                  y2="165"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-ink/40"
                />
                <line
                  x1="75"
                  y1="125"
                  x2="35"
                  y2="165"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-ink/40"
                />
              </motion.g>
            </g>

            {/* Front wheel */}
            <g>
              <motion.circle
                cx="195"
                cy="145"
                r="28"
                stroke="currentColor"
                strokeWidth="4.5"
                className="text-ink"
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
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-ink/60"
                />
                <line
                  x1="167"
                  y1="145"
                  x2="223"
                  y2="145"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-ink/60"
                />
                <line
                  x1="175"
                  y1="125"
                  x2="215"
                  y2="165"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-ink/40"
                />
                <line
                  x1="215"
                  y1="125"
                  x2="175"
                  y2="165"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-ink/40"
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
              className="fill-current text-ink"
            />
            <rect
              x="42"
              y="106"
              width="100"
              height="3"
              rx="1.5"
              fill="#E31E24"
            />

            {/* Battery/body block */}
            <rect
              x="126"
              y="92"
              width="16"
              height="22"
              rx="4"
              className="fill-current text-ink"
            />
            <rect
              x="126"
              y="92"
              width="16"
              height="4"
              rx="2"
              fill="#E31E24"
            />

            {/* Stem */}
            <rect
              x="128"
              y="28"
              width="7"
              height="68"
              rx="3"
              className="fill-current text-ink"
            />
            <rect
              x="128"
              y="28"
              width="3"
              height="68"
              rx="1.5"
              fill="#E31E24"
              className="opacity-80"
            />

            {/* Handlebars */}
            <rect
              x="100"
              y="20"
              width="65"
              height="7"
              rx="3"
              className="fill-current text-ink"
            />
            {/* Handlebar grips */}
            <rect
              x="100"
              y="18"
              width="14"
              height="11"
              rx="3"
              className="fill-current text-ink/80"
            />
            <rect
              x="151"
              y="18"
              width="14"
              height="11"
              rx="3"
              className="fill-current text-ink/80"
            />
          </svg>

          {/* Floating particles */}
          <Particle
            cx={220}
            cy={40}
            size={6}
            color="brand"
            delay={0}
            driftX={-60}
            driftY={40}
          />
          <Particle
            cx={-20}
            cy={60}
            size={4}
            color="brand/60"
            delay={0.8}
            driftX={60}
            driftY={-30}
          />
          <Particle
            cx={240}
            cy={120}
            size={5}
            color="amber"
            delay={1.6}
            driftX={-40}
            driftY={-50}
          />
          <Particle
            cx={0}
            cy={160}
            size={3}
            color="brand/40"
            delay={2.4}
            driftX={40}
            driftY={-20}
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
        backgroundColor: color === "brand" || color === "brand/60" || color === "brand/40"
          ? "var(--color-brand)"
          : "#F59E0B",
        opacity: color.includes("60") ? 0.6 : color.includes("40") ? 0.4 : 1,
      }}
      animate={{
        x: [0, driftX, 0],
        y: [0, driftY, 0],
        scale: [1, 1.5, 1],
        opacity: [0.3, 0.7, 0.3],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}
