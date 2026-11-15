import { ProjectItem } from "@/types/portfolio";

export const projectsData: ProjectItem[] = [
  {
    id: "carelinker",
    name: "CareLinker",
    subtitle: "Multi-Portal Healthcare Platform",
    categoryBadges: [
      "Healthcare",
      "Multi-Portal Architecture",
      "React · Next.js",
    ],
    phaseLabel: "01 / HEALTHCARE TECHNOLOGY PLATFORM",
    description:
      "A healthcare technology platform designed to connect patients, healthcare providers, experts, organizations, and operational teams through a unified digital ecosystem. Contributing to multi-portal authentication workflows, role-based experiences, and interconnected business processes.",
    highlights: [
      "Implementing frontend experiences across multiple application portals with reusable components.",
      "Building and refining authentication, authorization, and secure role-based navigation workflows.",
      "Translating detailed Figma specifications into pixel-perfect, accessible, and responsive interfaces.",
      "Implementing real-time messaging and invitation-related user experiences.",
      "Integrating frontend workflows with documented RESTful backend endpoints and API contracts.",
      "Improving UI consistency and maintainability across diverse portal experiences.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "API Integration",
    ],
    caseStudyUrl: "#contact",
    architectureUrl: "#contact",
    auditStream: {
      systemStatus: "OK",
      items: [
        {
          key: "PORTAL GATEWAY: Multi-Tenant Auth",
          value: "SESSION ACTIVE",
          status: "VERIFIED",
        },
        {
          key: "ROLE DISPATCH: Patient / Provider / Org",
          value: "RBAC ENFORCED",
          status: "OPTIMAL",
        },
        {
          key: "API CONTRACT: Endpoint Sync",
          value: "STATUS: 200 OK",
          status: "CONNECTED",
        },
      ],
      telemetry: "99.9%",
      avgSync: "12ms (P99)",
    },
    featured: true,
  },
  {
    id: "rewaq",
    name: "Rewaq",
    subtitle: "E-Learning Platform",
    categoryBadges: ["E-Learning", "Angular 21", "PrimeNG"],
    description:
      "A modern e-learning experience focused on delivering structured educational content through a responsive and intuitive interface. Developing frontend features using modern Angular 21 architecture, Tailwind CSS, and PrimeNG components.",
    highlights: [
      "Developing frontend features using Angular 21 and standalone component patterns.",
      "Implementing responsive layouts using Tailwind CSS and PrimeNG design tokens.",
      "Structuring reusable frontend functionality and modular educational views.",
      "Maintaining strict visual consistency between design specifications and production UI.",
    ],
    technologies: [
      "Angular 21",
      "TypeScript",
      "Tailwind CSS",
      "PrimeNG",
      "REST APIs",
    ],
    metaBox: {
      idLabel: "PLATFORM: Rewaq E-Learning",
      statusLabel: "Active Development",
      details:
        "Structured curriculum management, interactive lesson delivery, and responsive educational dashboards built with Angular 21.",
    },
    featured: false,
  },
  {
    id: "scrap-management-system",
    name: "Scrap Management System",
    subtitle: "Enterprise Administration Portal",
    categoryBadges: ["Enterprise", "NgRx · Nx", "OData"],
    description:
      "An enterprise business application designed to manage scrap-related operations and workflows through administrative and business-facing portals, developed as part of the Giza Systems Headway Program.",
    highlights: [
      "Developing Angular frontend modules with NgRx state management and Nx monorepo tooling.",
      "Integrating OData services for structured enterprise data querying.",
      "Implementing administration configuration panels and supplier vehicle listing workflows.",
      "Implementing rapid vehicle search and filtering, including plate-number lookup.",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "NgRx",
      "Nx",
      "OData",
      "Docker",
    ],
    metaBox: {
      idLabel: "PROGRAM: Giza Systems Headway",
      statusLabel: "Enterprise Admin & Supplier",
      details:
        "High-density operational portal featuring OData query ingestion, advanced plate-number search filters, and Docker workflows.",
    },
    featured: false,
  },
  {
    id: "stc-task",
    name: "STC — Invitation & Engagement",
    subtitle: "Enterprise Platform Workflows",
    categoryBadges: ["Enterprise", "Angular", "Auth Guards"],
    description:
      "Frontend implementation of invitation management and engagement-related application workflows, handling navigation protection, leaderboard metrics, and homepage content feeds.",
    highlights: [
      "Implementing invitation acceptance and rejection workflow state machines.",
      "Integrating homepage news API functionality and content feeds.",
      "Developing leaderboard activities and points presentation interfaces.",
      "Implementing Angular route navigation protection based on invitation status.",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "REST APIs",
      "Angular Routing",
    ],
    metaBox: {
      idLabel: "SYSTEM: STC Engagement",
      statusLabel: "Route Guards & Auth",
      details:
        "Protected navigation routing, dynamic invitation resolution states, and interactive gamified leaderboard feeds.",
    },
    featured: false,
  },
];
