import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

/**
 * A subtle luminous glow that follows the mouse.
 * Disabled on touch devices and when the pointer leaves the window.
 */
export function CursorGlow() {
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)

  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const springX = useSpring(x, { stiffness: 350, damping: 35, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 350, damping: 35, mass: 0.4 })

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches
    if (!hasFinePointer) return
    setEnabled(true)

    const move = (e: MouseEvent) => {
      x.set(e.clientX - 250)
      y.set(e.clientY - 250)
      setVisible(true)
    }
    const leave = () => setVisible(false)

    window.addEventListener("mousemove", move)
    document.addEventListener("mouseleave", leave)
    return () => {
      window.removeEventListener("mousemove", move)
      document.removeEventListener("mouseleave", leave)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-30 h-[500px] w-[500px] rounded-full"
      style={{
        x: springX,
        y: springY,
        background:
          "radial-gradient(circle, var(--glow) 0%, transparent 60%)",
      }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    />
  )
}
