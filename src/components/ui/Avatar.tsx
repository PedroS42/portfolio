import { site } from "@/config/site"
import { cn } from "@/lib/utils"
import { publicUrl } from "@/lib/publicUrl"
import { Blobs } from "./Blobs"

interface AvatarProps {
  className?: string
}

/**
 * Shows the user photo if `site.avatar` is set, otherwise falls back
 * to the illustrated modern avatar in /public/avatar.png.
 * Decorative blurred blobs sit behind the image.
 */
export function Avatar({ className }: AvatarProps) {
  const src = site.avatar || publicUrl("avatar.png")

  return (
    <div className={cn("relative aspect-square", className)}>
      <Blobs />
      <div className="glow-ring relative h-full w-full overflow-hidden rounded-[7rem] border border-border bg-card">
        <img
          src={src}
          alt={`${site.name} — portrait`}
          loading="eager"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
