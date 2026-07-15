export interface NavItem {
  id: string
  label: string
}

/** Section order = navbar order = scrollspy order. */
export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

export const sectionIds = navItems.map((n) => n.id)
