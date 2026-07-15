import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const DEFAULT_SCROLL_OFFSET = 88
const DEFAULT_SCROLL_DURATION = 520

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToElement(id: string, offset = DEFAULT_SCROLL_OFFSET) {
  const element = document.getElementById(id)
  if (!element) return

  const targetTop = Math.max(0, window.scrollY + element.getBoundingClientRect().top - offset)
  const startTop = window.scrollY
  const distance = targetTop - startTop

  if (Math.abs(distance) < 1) return

  const startTime = performance.now()

  const step = (now: number) => {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / DEFAULT_SCROLL_DURATION, 1)
    const eased = easeInOutCubic(progress)

    window.scrollTo(0, startTop + distance * eased)

    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}

export function scrollToTop() {
  if (Math.abs(window.scrollY) < 1) return

  const startTop = window.scrollY
  const startTime = performance.now()

  const step = (now: number) => {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / DEFAULT_SCROLL_DURATION, 1)
    const eased = easeInOutCubic(progress)

    window.scrollTo(0, startTop * (1 - eased))

    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}
