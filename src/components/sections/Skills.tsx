import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Reveal, staggerContainer, staggerItem } from "@/components/ui/Reveal"
import { mainStack, skillCategories } from "@/config/content"

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="skills"
      title="Tools & technologies"
      description="The stack I reach for when building reliable, well-structured software."
    >
      {/* Main stack */}
      <Reveal>
        <div className="mb-10 rounded-2xl border border-border bg-card p-6 glow-ring">
          <div className="mb-4 flex items-center gap-2">
            <Sparkles size={18} className="text-accent" />
            <h3 className="font-semibold">Main Stack</h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {mainStack.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-accent/30 bg-accent-soft px-3.5 py-1.5 text-sm font-medium text-accent"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Categories */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <Reveal key={cat.name} delay={i * 0.06}>
            <div className="group h-full rounded-2xl border border-border bg-card p-5 transition-colors hover:bg-card-hover">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-mono text-sm text-accent">{cat.name}</h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {cat.skills.length}
                </span>
              </div>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-wrap gap-2"
              >
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={staggerItem}
                    className="rounded-md border border-border bg-muted px-2.5 py-1 text-xs font-medium text-foreground transition-colors group-hover:border-border-strong"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
