import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Reveal } from "./Reveal"

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 py-20 md:py-28 lg:py-32", className)}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-12 md:mb-16">
            <div className="mb-3 flex items-center gap-2 font-mono text-sm text-accent">
              <span className="inline-block h-px w-6 bg-accent" aria-hidden />
              {eyebrow}
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  )
}
