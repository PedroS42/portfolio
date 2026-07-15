import { useEffect, useState } from "react"
import { useTheme } from "@/hooks/useTheme"
import { LoadingScreen } from "@/components/layout/LoadingScreen"
import { CursorGlow } from "@/components/layout/CursorGlow"
import { ScrollProgress } from "@/components/layout/ScrollProgress"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { BackToTop } from "@/components/layout/BackToTop"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Skills } from "@/components/sections/Skills"
import { Experience } from "@/components/sections/Experience"
import { Education } from "@/components/sections/Education"
import { Projects } from "@/components/sections/Projects"
import { Contact } from "@/components/sections/Contact"

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <LoadingScreen show={loading} />
      <CursorGlow />
      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
