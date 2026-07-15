import { Book, GitFork, Star, Users } from "lucide-react"
import { site } from "@/config/site"
import { useGitHubStats } from "@/hooks/useGitHubStats"
import { cn } from "@/lib/utils"

function StatCard({
  icon: Icon,
  label,
  value,
  loading,
}: {
  icon: typeof Star
  label: string
  value: number
  loading: boolean
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
      <div className="rounded-lg bg-accent-soft p-2 text-accent">
        <Icon size={18} />
      </div>
      <div>
        <div className="text-lg font-bold tabular-nums">
          {loading ? (
            <span className="inline-block h-5 w-10 animate-pulse rounded bg-muted" />
          ) : (
            value
          )}
        </div>
        <div className="text-xs text-muted-foreground">{label}</div>
      </div>
    </div>
  )
}

export function GitHubStats() {
  const stats = useGitHubStats(site.githubUsername)

  if (stats.error) {
    return (
      <div className="rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
        Live GitHub stats unavailable right now. Set your username in{" "}
        <code className="font-mono text-accent">src/config/site.ts</code>.
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
        <GitFork size={14} className="text-accent" />
        Live from @{site.githubUsername}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <StatCard icon={Book} label="Repositories" value={stats.publicRepos} loading={stats.loading} />
        <StatCard icon={Star} label="Total Stars" value={stats.totalStars} loading={stats.loading} />
        <StatCard icon={Users} label="Followers" value={stats.followers} loading={stats.loading} />
        <StatCard icon={GitFork} label="Following" value={stats.following} loading={stats.loading} />
      </div>

      {stats.topLanguages.length > 0 && (
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="mb-3 text-xs font-medium text-muted-foreground">Top languages</div>
          <div className="flex flex-wrap gap-2">
            {stats.topLanguages.map((lang, i) => (
              <span
                key={lang.name}
                className={cn(
                  "rounded-md border border-border px-2.5 py-1 font-mono text-xs",
                  i === 0 ? "bg-accent-soft text-accent" : "text-muted-foreground",
                )}
              >
                {lang.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
