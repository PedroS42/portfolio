import { motion } from "framer-motion"
import { site } from "@/config/site"

type LoadingScreenProps = {
  show: boolean
}

export function LoadingScreen({ show }: LoadingScreenProps) {
  if (!show) return null

  const letters = site.name.split("")

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
    >
      <div className="flex items-center gap-1 text-2xl font-bold tracking-tight md:text-4xl">
        <span className="font-mono text-accent">{"<"}</span>
        <div className="flex">
          {letters.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.05, duration: 0.35 }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>
        <span className="font-mono text-accent">{"/>"}</span>
      </div>

      <motion.div
        className="mt-6 h-0.5 w-40 overflow-hidden rounded-full bg-border"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          className="h-full bg-accent"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  )
}
