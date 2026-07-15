import { cn } from "@/lib/utils"

/**
 * Decorative blurred color blobs used behind photos / hero.
 * Purely decorative — hidden from assistive tech.
 */
export function Blobs({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10", className)}>
      <div className="animate-floaty absolute -left-8 top-4 h-40 w-40 rounded-full bg-accent/25 blur-3xl" />
      <div
        className="animate-floaty absolute -right-6 bottom-2 h-44 w-44 rounded-full bg-accent/15 blur-3xl"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="animate-floaty absolute left-1/3 top-1/2 h-32 w-32 rounded-full bg-accent/10 blur-3xl"
        style={{ animationDelay: "4s" }}
      />
    </div>
  )
}
