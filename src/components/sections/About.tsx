import { motion } from "framer-motion"
import { Section } from "@/components/ui/Section"
import { Reveal, staggerContainer, staggerItem } from "@/components/ui/Reveal"
import { aboutParagraphs, journey, quickFacts } from "@/config/content"
import { GitHubStats } from "./GitHubStats"

export function About() {
  return (
    <Section
      id="about"
      eyebrow="about"
      title="A bit about me"
      description="Computer engineer in the making, with a love for clean systems and continuous learning."
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left — text + timeline */}
        <div>
          <Reveal>
            <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
              {aboutParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          {/* Journey timeline */}
          <div className="mt-10">
            <h3 className="mb-6 font-mono text-sm text-accent">// journey</h3>
            <div className="relative border-l border-border pl-6">
              {journey.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.08}>
                  <div className="relative pb-8 last:pb-0">
                    <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full border-2 border-accent bg-background" />
                    <div className="font-mono text-xs text-accent">{item.year}</div>
                    <div className="mt-1 font-semibold">{item.title}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Right — quick facts + GitHub stats */}
        <div className="space-y-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {quickFacts.map((fact) => (
              <motion.div
                key={fact.label}
                variants={staggerItem}
                className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:bg-card-hover"
              >
                <div className="rounded-lg bg-accent-soft p-2 text-accent">
                  <fact.icon size={18} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{fact.label}</div>
                  <div className="text-sm font-semibold">{fact.value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <Reveal>
            <GitHubStats />
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
