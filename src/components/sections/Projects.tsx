import { useState } from "react"
import { motion } from "framer-motion"
import { FiGithub, FiExternalLink } from "react-icons/fi"
import { ArrowUpRight } from "lucide-react"
import { projects, type Project } from "@/config/content"
import { Section } from "@/components/ui/Section"
import { Reveal } from "@/components/ui/Reveal"
import { ProjectModal } from "./ProjectModal"

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <Section
      id="projects"
      eyebrow="03 — Work"
      title="Featured Projects"
      description="A selection of things I've designed, built, and shipped."
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card"
            >
              <button
                onClick={() => setActive(project)}
                className="relative aspect-video w-full overflow-hidden text-left"
                aria-label={`View details for ${project.title}`}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent opacity-90" />
                {project.featured && (
                  <span className="absolute left-3 top-3 rounded-full border border-accent/30 bg-accent/15 px-2.5 py-1 text-xs font-medium text-accent backdrop-blur">
                    Featured
                  </span>
                )}
              </button>

              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                  <button
                    onClick={() => setActive(project)}
                    aria-label={`Open ${project.title}`}
                    className="mt-0.5 shrink-0 text-muted-foreground transition-colors group-hover:text-accent"
                  >
                    <ArrowUpRight size={18} />
                  </button>
                </div>

                <p className="mb-4 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-muted/60 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="rounded-md border border-border bg-muted/60 px-2 py-0.5 font-mono text-xs text-muted-foreground">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4 border-t border-border pt-4">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-accent"
                    >
                      <FiGithub size={15} /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-accent"
                    >
                      <FiExternalLink size={15} /> Live demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </Section>
  )
}
