import { GraduationCap } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Reveal } from "@/components/ui/Reveal"
import { education } from "@/config/content"

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="education"
      title="Academic background"
      description="My formal foundation in computer engineering."
    >
      <div className="relative border-l border-border pl-6 sm:pl-8">
        {education.map((item, i) => (
          <Reveal key={`${item.school}-${i}`} delay={i * 0.08}>
            <div className="relative pb-10 last:pb-0">
              <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-background sm:-left-[39px]">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <div className="rounded-2xl border border-border bg-card p-5 transition-colors hover:bg-card-hover sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <GraduationCap size={16} className="text-accent" />
                    <h3 className="font-semibold">{item.degree}</h3>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
                </div>
                <div className="mt-1 text-sm font-medium text-accent">{item.school}</div>
                <ul className="mt-3 space-y-1.5">
                  {item.details.map((d, j) => (
                    <li key={j} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
