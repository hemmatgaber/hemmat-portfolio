import React from "react";
import { Container } from "@/components/ui/container";
import { projectsData } from "@/data/projects";
import { FeaturedProjectCard } from "@/components/projects/featured-project-card";
import { ProjectCard } from "@/components/projects/project-card";

export function ProjectsSection() {
  const featuredProject =
    projectsData.find((p) => p.featured) || projectsData[0];
  const gridProjects = projectsData.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 border-b border-[#141d2f]/80 scroll-mt-16"
    >
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-[#38bdf8] mb-2">
              Featured Engineering
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white tracking-tight">
              Selected Projects
            </h2>
            <p className="mt-2 text-[#94a3b8] text-sm sm:text-base max-w-2xl leading-relaxed font-light">
              A collection of real-world applications, enterprise platforms, and engineering work focused on solving practical problems through thoughtful frontend development.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 self-start md:self-end px-3 py-1.5 rounded-full bg-[#0d131f] border border-[#1b273d] text-xs font-mono text-[#94a3b8]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Showing: All 4 Engineering Projects</span>
          </div>
        </div>

        <FeaturedProjectCard project={featuredProject} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {gridProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
