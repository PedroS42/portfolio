import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { FiGithub, FiLinkedin } from "react-icons/fi"
import emailjs from "@emailjs/browser"
import { site } from "@/config/site"
import { Section } from "@/components/ui/Section"
import { Reveal } from "@/components/ui/Reveal"

type Status = "idle" | "sending" | "success" | "error"

export function Contact() {
  const [status, setStatus] = useState<Status>("idle")
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const emailjsReady =
    site.emailjs.serviceId &&
    site.emailjs.templateId &&
    site.emailjs.publicKey &&
    !site.emailjs.serviceId.startsWith("YOUR_")

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (status === "sending") return

    // If EmailJS isn't configured yet, fall back to a mailto link.
    if (!emailjsReady) {
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
      window.location.href = `mailto:${site.email}?subject=Portfolio contact from ${encodeURIComponent(
        form.name,
      )}&body=${body}`
      return
    }

    try {
      setStatus("sending")
      await emailjs.send(
        site.emailjs.serviceId,
        site.emailjs.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        { publicKey: site.emailjs.publicKey },
      )
      setStatus("success")
      setForm({ name: "", email: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"

  return (
    <Section
      id="contact"
      eyebrow="06 — Contact"
      title="Let's build something"
      description="Have an opportunity, a question, or just want to say hi? My inbox is always open."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left — info */}
        <Reveal>
          <div className="flex h-full flex-col gap-4">
            <a
              href={`mailto:${site.email}`}
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent/40"
            >
              <span className="rounded-lg bg-accent/10 p-2.5 text-accent">
                <Mail size={20} />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground">Email</span>
                <span className="text-sm font-medium group-hover:text-accent">{site.email}</span>
              </span>
            </a>

            <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
              <span className="rounded-lg bg-accent/10 p-2.5 text-accent">
                <MapPin size={20} />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground">Location</span>
                <span className="text-sm font-medium">{site.location}</span>
              </span>
            </div>

            <div className="mt-auto flex gap-3">
              <a
                href={site.socials.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                <FiGithub size={18} /> GitHub
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                <FiLinkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </Reveal>

        {/* Right — form */}
        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="glow-ring rounded-2xl border border-border bg-card p-6"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={onChange}
                  placeholder="Ada Lovelace"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={onChange}
                placeholder="Tell me about your project or opportunity…"
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending…
                </>
              ) : (
                <>
                  <Send size={16} /> Send message
                </>
              )}
            </button>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 inline-flex items-center gap-2 text-sm text-accent"
              >
                <CheckCircle2 size={16} /> Message sent — thanks, I&apos;ll reply soon!
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 inline-flex items-center gap-2 text-sm text-destructive"
              >
                <AlertCircle size={16} /> Something went wrong. Try emailing me directly.
              </motion.p>
            )}
            {!emailjsReady && (
              <p className="mt-3 text-xs text-muted-foreground/70">
                Tip: add your EmailJS keys in <code className="font-mono">src/config/site.ts</code> to
                enable in-app sending. Until then, this opens your email client.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
