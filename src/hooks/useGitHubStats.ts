import { useEffect, useState } from "react"

export interface GitHubStats {
  publicRepos: number
  followers: number
  following: number
  totalStars: number
  topLanguages: { name: string; count: number }[]
  loading: boolean
  error: string | null
}

const initial: GitHubStats = {
  publicRepos: 0,
  followers: 0,
  following: 0,
  totalStars: 0,
  topLanguages: [],
  loading: true,
  error: null,
}

/**
 * Fetches public GitHub stats using the unauthenticated REST API.
 * No token required (rate limited to 60 req/hour per IP).
 */
export function useGitHubStats(username: string) {
  const [stats, setStats] = useState<GitHubStats>(initial)

  useEffect(() => {
    let cancelled = false
    if (!username) return

    async function load() {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`)
        if (!userRes.ok) throw new Error(`GitHub user not found (${userRes.status})`)
        const user = await userRes.json()

        const reposRes = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
        )
        const repos: Array<{ stargazers_count: number; language: string | null; fork: boolean }> =
          reposRes.ok ? await reposRes.json() : []

        const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count ?? 0), 0)

        const langCount: Record<string, number> = {}
        for (const r of repos) {
          if (r.language) langCount[r.language] = (langCount[r.language] ?? 0) + 1
        }
        const topLanguages = Object.entries(langCount)
          .map(([name, count]) => ({ name, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 5)

        if (!cancelled) {
          setStats({
            publicRepos: user.public_repos ?? 0,
            followers: user.followers ?? 0,
            following: user.following ?? 0,
            totalStars,
            topLanguages,
            loading: false,
            error: null,
          })
        }
      } catch (err) {
        if (!cancelled) {
          setStats((s) => ({
            ...s,
            loading: false,
            error: err instanceof Error ? err.message : "Failed to load GitHub stats",
          }))
        }
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [username])

  return stats
}
