import { motion } from "framer-motion"
import { ArrowDown, MapPin } from "lucide-react"
import { FiGithub, FiLinkedin } from "react-icons/fi"
import { site } from "@/config/site"
import { useTyping } from "@/hooks/useTyping"
import { Avatar } from "@/components/ui/Avatar"
import { ParticleField } from "@/components/layout/ParticleField"
import { scrollToElement } from "@/lib/utils"

export function Hero() {
  const typed = useTyping(site.typing)

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden pt-24 pb-16"
    >
      {/* Background layers */}
      <div className="bg-grid absolute inset-0 -z-20 opacity-70" aria-hidden />
      <div
        className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top,transparent_20%,var(--background)_75%)]"
        aria-hidden
      />
      <ParticleField />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left — copy */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m <span className="text-gradient">{site.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 flex min-h-9 items-center font-mono text-lg text-muted-foreground sm:text-xl"
          >
            <span className="text-accent">{"> "}</span>
            <span className="ml-2 text-foreground">{typed}</span>
            <span className="caret" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <MapPin size={16} className="text-accent" />
            {site.location}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              type="button"
              onClick={() => scrollToElement("projects")}
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              View my work
            </button>
            <button
              type="button"
              onClick={() => scrollToElement("contact")}
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Get in touch
            </button>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={site.socials.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="rounded-lg border border-border bg-card p-2.5 text-muted-foreground transition-colors hover:text-accent"
              >
                <FiGithub size={18} />
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="rounded-lg border border-border bg-card p-2.5 text-muted-foreground transition-colors hover:text-accent"
              >
                <FiLinkedin size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right — avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <Avatar className="w-[260px] sm:w-[300px] lg:w-[340px]" />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.button
        type="button"
        onClick={() => scrollToElement("about")}
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-accent md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  )
}
