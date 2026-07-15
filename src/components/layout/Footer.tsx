import { ArrowUp} from "lucide-react"
import { FiGithub, FiLinkedin } from "react-icons/fi"
import { site } from "@/config/site"
import { navItems } from "@/config/nav"
import { scrollToElement } from "@/lib/utils"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          {/* Brand */}
          <div className="text-center md:text-left">
            <button
              type="button"
              onClick={() => scrollToElement("home")}
              className="font-mono text-lg font-bold tracking-tight"
            >
              <span className="text-accent">{"<"}</span>
              {site.name.split(" ")[0]}
              <span className="text-accent">{" />"}</span>
            </button>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">{site.role}</p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToElement(item.id)}
                className="text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-3">
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
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            © {year} {site.name}. Built using React & Tailwind.
          </p>
          <button
            type="button"
            onClick={() => scrollToElement("home")}
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-accent"
          >
            Back to top <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  )
}
