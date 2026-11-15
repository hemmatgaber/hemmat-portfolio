import { ExperienceItem, EducationItem } from "@/types/portfolio";

export const experienceData: ExperienceItem[] = [
  {
    id: "medica-scope",
    role: "Frontend Developer — Angular & Next.js",
    organization: "Medica Scope",
    location: "Cairo, Egypt",
    period: "February 2026 – Present",
    bullets: [
      "Developing frontend features using Angular 21, Next.js, and modern component architecture.",
      "Building reusable and responsive UI components styled with Tailwind CSS and PrimeNG.",
      "Maintaining clean component hierarchy and consistent design patterns across all user views.",
      "Working with API-driven application functionality to deliver real-time educational experiences.",
      "Improving usability, accessibility, and long-term maintainability across the platform.",
    ],
    technologies: ["Angular 21", "Next.js", "TypeScript", "Tailwind CSS", "PrimeNG"],
  },
  {
    id: "tettra-software-solutions",
    role: "Frontend Developer — Angular",
    organization: "Tettra Software Solutions",
    location: "Cairo, Egypt",
    period: "April 2025 – January 2026",
    bullets: [
      "Developed reusable and scalable Angular components for enterprise business workflows.",
      "Built real-time analytics dashboard interfaces visualizing transactional data.",
      "Integrated REST and OData APIs with strict DTO contract adherence.",
      "Leveraged Angular Standalone Components, Angular Signals, and RxJS for reactive performance.",
      "Enhanced component reusability and reduced duplication across business modules.",
      "Implemented responsive, accessible interfaces aligned with design specifications.",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "RxJS",
      "Signals",
      "REST APIs",
      "OData",
    ],
  },
  {
    id: "giza-systems-headway",
    role: "Frontend Intern — Angular Track",
    organization: "Giza Systems — Headway Program",
    location: "Cairo, Egypt",
    period: "September 2024 – March 2025",
    bullets: [
      "Completed an intensive frontend engineering track focused on enterprise Angular architecture.",
      "Developed Angular application features using NgRx state management and Nx monorepo workflows.",
      "Integrated OData APIs across administration and supplier portal modules.",
      "Implemented comprehensive search and filtering capabilities, including plate-number lookup.",
      "Applied component-based development practices with Docker containerized environments.",
    ],
    technologies: ["Angular", "TypeScript", "NgRx", "Nx", "OData", "Docker"],
  },
];

export const educationData: EducationItem = {
  institution: "Helwan University",
  degree: "Bachelor of Computer Science and Artificial Intelligence",
  department: "Medical Informatics Department",
  period: "September 2020 – June 2024",
  gpa: "3.76 / 4.00",
  description:
    "Studied Computer Science and Artificial Intelligence with a specialization in Medical Informatics, combining software engineering fundamentals with an understanding of technology applications in healthcare.",
};
