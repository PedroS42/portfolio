/* =============================================================
   SITE CONFIG
   Edit everything about your portfolio from this single file.
   Swap images, links, projects, skills, timeline, etc.
============================================================= */

export const site = {
  name: "Pedro",
  role: "Software Engineer",
  // Words cycled by the typing effect in the hero.
  typing: [
    "AI & DevOps Enthusiast",
    "Computer Engineering Graduate",
    "Problem Solver",
  ],
  tagline:
    "Computer Engineering graduate focused on building robust backend systems, clean APIs and scalable cloud infrastructure.",
  location: "Portugal",
  email: "pedromelosantos7@gmail.com",
  // The GitHub username used to fetch live stats (repos, languages).
  githubUsername: "PedroS42",
  socials: {
    github: "https://github.com/PedroS42",
    linkedin: "https://www.linkedin.com/in/pedromelosantos7/",
  },
  // Replace with your own photo in /public and reference it here,
  // e.g. avatar: "/me.jpg". Leaving it empty uses the illustrated avatar.
  avatar: "",
  resumeUrl: "", // optional: link to a hosted CV/PDF

  /* EmailJS — set these in a .env file (see .env.example).
     While empty, the contact form falls back to a mailto: link.
     Docs: https://www.emailjs.com */
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "",
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "",
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "",
  },
}
