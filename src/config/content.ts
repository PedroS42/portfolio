/* =============================================================
   CONTENT DATA
   About cards, timeline, skills, experience, education, projects.
   Add / edit freely — the UI maps over these arrays.
============================================================= */

import {
  MapPin,
  GraduationCap,
  Server,
  Cloud,
  BookOpen,
  type LucideIcon,
} from "lucide-react"

/* ---------- About ---------- */
export interface QuickFact {
  icon: LucideIcon
  label: string
  value: string
}

export const quickFacts: QuickFact[] = [
  { icon: MapPin, label: "Based in", value: "Portugal" },
  { icon: GraduationCap, label: "Degree", value: "Computer Engineering" },
  { icon: Server, label: "Focus", value: "Software Development" },
  { icon: Cloud, label: "Interests", value: "AI & DevOps" },
  { icon: BookOpen, label: "Mindset", value: "Always Learning" },
]

export const aboutParagraphs: string[] = [
  "I'm a Computer Engineering graduate with a strong passion for building things that run reliably behind the scenes. I care about clean architecture, systems that scale, and improving.",
  "My main interest is AI, but I enjoy the full picture — from backend development to containerization, CI/CD pipelines and cloud deployment. I like turning messy problems into simple, maintainable solutions.",
  "Outside of coursework, I'm constantly experimenting with new technologies, contributing to side projects and sharpening my engineering fundamentals.",
]

/* ---------- Journey timeline (About) ---------- */
export interface TimelineItem {
  year: string
  title: string
  description: string
}

export const journey: TimelineItem[] = [
  {
    year: "2023",
    title: "Started Computer Engineering",
    description: "Began my BSc, diving into programming fundamentals and algorithms.",
  },
  {
    year: "2024-2025",
    title: "Backend Projects",
    description: "Built REST APIs and microservices with Spring Boot and ASP.NET.",
  },
  {
    year: "2026",
    title: "Curricular Internship",
    description: "First hands-on professional DevOps & AI experience.",
  },
  {
    year: "2026",
    title: "Professional Internship",
    description: "Looking forward to applying my software engineering skills in a professional environment while contributing to real-world projects.",
  },
]

/* ---------- Skills ---------- */
export interface SkillCategory {
  name: string
  skills: string[]
}

export const mainStack: string[] = [
  "Java",
  "C",
  "Python",
  "C#",
  "ASP.NET",
  "Docker",
]

export const skillCategories: SkillCategory[] = [
  { name: "Languages", skills: ["Java", "C#", "C", "Python", "JavaScript", "TypeScript"] },
  { name: "Backend", skills: ["Spring Boot", "ASP.NET", "Node.js", "C#"] },
  { name: "Frontend", skills: ["React", "HTML", "CSS", "TypeScript"] },
  { name: "Databases", skills: ["MySQL", "Oracle", "MongoDB"] },
  { name: "DevOps", skills: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "Git", "Azure", "CI/CD"] },
  {
    name: "Other",
    skills: ["REST APIs", "Microservices", "OOP", "Design Patterns", "CI/CD", "Agile"],
  },
]

/* ---------- Experience ---------- */
export interface ExperienceItem {
  role: string
  company: string
  period: string
  description: string
  tech: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: "DevOps & AI Intern",
    company: "DevScope",
    period: "Feb - Jun | 2026",
    description:
      "Developed an AIOps toolkit to automate DevOps pipelines, infrastructure validation, and code review using LLMs.",
    tech: ["Python", "Github Actions", "Terraform", "LLMs", "Docker"],
  },
  {
    role: "AI Intern",
    company: "DevScope",
    period: "Starting Sep 2026",
    description: "Working on the development and integration of AI solutions, including data pipelines, model deployment, prompt engineering, and LLM-based applications.",
    tech: ["TBD"],
  },
]

/* ---------- Education ---------- */
export interface EducationItem {
  degree: string
  school: string
  period: string
  details: string[]
}

export const education: EducationItem[] = [
  {
    degree: "BSc in Computer Engineering",
    school: "Instituto Superior de Engenharia do Porto",
    period: "2023 — 2026",
    details: [
      "Key courses: Data Structures, Databases, Operating Systems, Software Engineering, Artificial Intelligence.",
      "Relevant projects: Port Logistics Management System | Project Shodrone (Drone Show Back-Office System) | GridLightEV: EV Grid Capacity Analysis.",
      "GPA: 14.5 / 20.",
    ],
  },
  {
    degree: "MSc in Critical Computer Systems Engineering",
    school: "Instituto Superior de Engenharia do Porto",
    period: "Starting Sep. 2026",
    details: [
      "Key courses: Advanced Programming Paradigms, Autonomous and Intelligent Systems, Cybersecurity, Embedded and Real-Time Systems.",
      "Relevant projects: TBD.",
      "GPA: TBD.",
    ],
  },
]

/* ---------- Projects ---------- */
export interface Project {
  title: string
  description: string
  longDescription: string
  tech: string[]
  image: string
  demo?: string
  repo?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: "DevScope AIOps Toolkit (Internship)",
    description: "An autonomous AIOps platform that secures CI/CD pipelines, optimizes cloud costs, and auto-heals Kubernetes clusters.",
    longDescription:
      "Developed during my curricular internship at DevScope. This toolkit introduces automated, AI-driven security gates (Shift-Left) and auto-merge capabilities on GitHub Actions, predicts Azure infrastructure costs by combining Infracost with LLMs, generates production-ready Terraform manifests from prompts, and autonomously diagnoses and self-heals Kubernetes container crashes.",
    tech: ["Python", "Terraform", "Kubernetes", "Azure", "GitHub Actions", "Infracost", "Groq"],
    image: "/projects/project-aiops.png",
    repo: "https://github.com/PedroS42/ai-devops-test",
    featured: true,
  },
  {
    title: "Port Logistics Management System",
    description: "A full-stack, microservice-based maritime port management platform.",
    longDescription:
      "This platform combines Domain-Driven .NET services, a Node.js service, a role-based React/TypeScript SPA with real-time 3D visualization, and an AI-based scheduler.",
    tech: [".NET", "C#", "TypeScript", "React", "Prolog", "JavaScript", "Three.js", "Node.js"],
    image: "/projects/project-port.png",
    repo: "https://github.com/PedroS42/Port-Logistics-Management-System",
    featured: true,
  },
  {
    title: "Flight Fleet Simulator",
    description: "A concurrent air traffic simulator built in C using processes, threads, pipes, and POSIX shared memory.",
    longDescription:
      "A high-performance flight simulation platform developed in C that models multiple aircraft executing real flight plans concurrently. The simulator combines a hybrid multiprocessing and multithreading architecture with POSIX shared memory, semaphores, mutexes, condition variables, pipes, and Unix signals to synchronize aircraft, detect potential collisions in real time using the Haversine formula, and coordinate autonomous flight execution.",
    tech: ["C", "POSIX", "Linux", "Pthreads", "Shared Memory", "Semaphores", "Pipes", "Signals"],
    image: "/projects/project-flightsimulator.png",
    repo: "https://github.com/PedroS42/Flight-Fleet-Simulator",
    featured: false,
  },
  {
    title: "GridLightEV",
    description: "Data-science project that analyses real Portuguese grid data.",
    longDescription:
      "This project investigates whether replacing traditional public street-lighting (sodium/mercury) with LED technology frees enough electrical capacity in Distribution Transformer Stations (PTD/DTS) to support new 22 kW EV charging stations. It takes two raw E-REDES datasets through a full data-science pipeline - cleaning, exploratory analysis, statistical inference, and predictive modeling - and presents the findings in an interactive dashboard.",
    tech: ["Python", "pandas", "statsmodels", "Jupyter"],
    image: "/projects/project-gridLightEV.png",
    repo: "https://github.com/PedroS42/GridLightEV",
    featured: true,
  },
  {
    title: "DevPortfolio",
    description: "This very portfolio — a single-page React app deployed to GitHub Pages.",
    longDescription:
      "A modern single-page portfolio built with React, TypeScript, TailwindCSS and Framer Motion.",
    tech: ["React", "TypeScript", "Tailwind"],
    image: "/projects/project-portfolio.png",
    repo: "#",
  },
]
