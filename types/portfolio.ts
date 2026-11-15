export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectAuditItem {
  key: string;
  value: string;
  status: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  subtitle: string;
  categoryBadges: string[];
  phaseLabel?: string;
  description: string;
  highlights: string[];
  technologies: string[];
  externalUrl?: string;
  caseStudyUrl?: string;
  architectureUrl?: string;
  metaBox?: {
    idLabel: string;
    statusLabel: string;
    details: string;
  };
  auditStream?: {
    systemStatus: string;
    items: ProjectAuditItem[];
    telemetry: string;
    avgSync: string;
  };
  featured: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  department: string;
  period: string;
  gpa: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location?: string;
  period: string;
  bullets: string[];
  technologies?: string[];
  isEducation?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
  metaLeft: string;
  metaRight: string;
  iconName: string;
}

export interface PhilosophyPrinciple {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProfileData {
  name: string;
  roleTitle: string;
  specialization: string;
  additionalTech: string;
  availabilityPill: string;
  headline: string;
  bio: string;
  cvUrl: string;
  stats: {
    value: string;
    label: string;
  }[];
  activeFocus: {
    title: string;
    items: string[];
    approachLabel: string;
    approachValue: string;
  };
  aboutStory?: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    badges: string[];
    metaDiscipline: string;
    metaLocation: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    description: string;
    email: string;
    phone: string;
    linkedin: string;
    linkedinUrl: string;
    githubUrl: string;
    location: string;
    successMessage: string;
    errorMessage: string;
  };
}
