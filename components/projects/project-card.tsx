import React from "react";
import { ProjectItem } from "@/types/portfolio";
import { ExternalLink } from "@/components/ui/icons";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-2xl bg-[#0b101a] border border-[#1a253a] p-6 sm:p-7 flex flex-col justify-between shadow-xl hover:border-[#263753] transition-colors group">
      <div>
        <div className="flex items-start justify-between gap-4 border-b border-[#162032] pb-4 mb-5">
          <div>
            <h3 className="text-lg sm:text-xl font-serif text-white tracking-tight group-hover:text-cyan-400 transition-colors">
              {project.name}
            </h3>
            <p className="mt-1 text-[11px] font-mono uppercase tracking-wider text-[#94a3b8]">
              {project.subtitle}
            </p>
          </div>

          {project.externalUrl && (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open repository for ${project.name}`}
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#94a3b8] hover:text-white hover:bg-[#131b2c] border border-[#1a2539] transition-all shrink-0"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        <p className="text-[#94a3b8] text-xs sm:text-sm leading-relaxed mb-6 font-light">
          {project.description}
        </p>

        {project.metaBox && (
          <div className="rounded-xl bg-[#080c14] border border-[#162135] p-3.5 mb-6 font-mono text-[11px]">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#141d2e] pb-2 mb-2 text-[#64748b]">
              <span className="text-white font-medium">
                {project.metaBox.idLabel}
              </span>
              <span className="text-cyan-400">
                {project.metaBox.statusLabel}
              </span>
            </div>
            <p className="text-[#94a3b8] leading-relaxed">
              {project.metaBox.details}
            </p>
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-[#162032]/80 flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#101725] text-[#94a3b8] border border-[#1c283e]"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}

