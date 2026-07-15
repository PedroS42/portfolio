import { Briefcase } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Reveal } from "@/components/ui/Reveal"
import { experience } from "@/config/content"

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="experience"
      title="Where I've worked"
      description="Hands-on experience building and shipping software. Add your roles as your journey grows."
    >
      <div className="relative border-l border-border pl-6 sm:pl-8">
        {experience.map((item, i) => (
          <Reveal key={`${item.company}-${i}`} delay={i * 0.08}>
            <div className="relative pb-10 last:pb-0">
              <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-background sm:-left-[39px]">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <div className="rounded-2xl border border-border bg-card p-5 transition-colors hover:bg-card-hover sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} className="text-accent" />
                    <h3 className="font-semibold">{item.role}</h3>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
                </div>
                <div className="mt-1 text-sm font-medium text-accent">{item.company}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
