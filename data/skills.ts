import { SkillCategory } from "@/types/portfolio";

export const skillCategoriesData: SkillCategory[] = [
  {
    id: "frontend-frameworks",
    title: "Frontend Frameworks",
    description:
      "Building modern, component-driven web applications with scalable frontend frameworks.",
    skills: [
      "Angular",
      "React",
      "Next.js",
      "Angular Standalone Components",
    ],
    metaLeft: "Primary Focus",
    metaRight: "Component Architecture",
    iconName: "Monitor",
  },
  {
    id: "state-architecture",
    title: "State & Architecture",
    description:
      "Managing application state and structuring maintainable frontend systems.",
    skills: [
      "NgRx",
      "RxJS",
      "Angular Signals",
      "Computed Signals",
      "Nx Monorepos",
      "Dependency Injection",
    ],
    metaLeft: "Reactive Patterns",
    metaRight: "Predictable Flow",
    iconName: "GitBranch",
  },
  {
    id: "styling-ui-systems",
    title: "Styling & UI Systems",
    description:
      "Creating responsive interfaces and consistent user experiences.",
    skills: [
      "HTML5",
      "CSS3",
      "SCSS",
      "Tailwind CSS",
      "PrimeNG",
      "Responsive Design",
    ],
    metaLeft: "Design Systems",
    metaRight: "Pixel-Perfect",
    iconName: "Palette",
  },
  {
    id: "programming",
    title: "Programming",
    description:
      "Writing structured, maintainable, and type-safe application code.",
    skills: [
      "TypeScript",
      "JavaScript ES6+",
      "Object-Oriented Programming",
      "Functional Programming",
      "Clean Code",
    ],
    metaLeft: "Type Safety",
    metaRight: "Clean Code",
    iconName: "Code",
  },
  {
    id: "tooling-workflow",
    title: "Tooling & Workflow",
    description:
      "Working with modern development tools and collaborative engineering workflows.",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Figma",
      "npm",
      "Agile / Scrum",
    ],
    metaLeft: "Workflow",
    metaRight: "Team Collaboration",
    iconName: "Cpu",
  },
  {
    id: "engineering-practices",
    title: "Engineering Practices",
    description:
      "Applying engineering principles that support quality and long-term maintainability.",
    skills: [
      "REST API Integration",
      "OData",
      "Reusable Components",
      "Component-Driven Development",
      "API Contract Integration",
      "Code Quality",
    ],
    metaLeft: "Engineering Standards",
    metaRight: "Maintainability",
    iconName: "ShieldCheck",
  },
];
