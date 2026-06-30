export function prefersReduced() {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function isLowEnd() {
  if (typeof navigator === "undefined") return true
  return navigator.hardwareConcurrency <= 4
}

export function shouldAnimate({ essential = false } = {}) {
  if (prefersReduced()) return false
  if (!essential && isLowEnd()) return false
  return true
}
