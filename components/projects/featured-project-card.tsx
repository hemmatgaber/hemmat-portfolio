import React from "react";
import { ProjectItem } from "@/types/portfolio";
import { Badge } from "@/components/ui/badge";
import { ProjectTelemetryWidget } from "./project-telemetry-widget";
import {
  ExternalLink,
  ArrowRight,
  Check,
} from "@/components/ui/icons";

interface FeaturedProjectCardProps {
  project: ProjectItem;
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <article className="rounded-2xl bg-[#0b101a] border border-[#1a253a] p-6 sm:p-8 lg:p-10 mb-8 shadow-2xl relative overflow-hidden group hover:border-[#263753] transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#162032] pb-6 mb-8">
        <div>
          <div className="flex flex-wrap items-center gap-2.5 mb-2">
            <span className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center font-mono font-bold text-cyan-400 text-xs">
              {project.name.slice(0, 2).toUpperCase()}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-white tracking-tight">
              {project.name}
            </h3>
            <div className="flex flex-wrap items-center gap-1.5 ml-1">
              {project.categoryBadges.map((badge, idx) => (
                <Badge
                  key={badge}
                  variant={idx === 0 ? "cyan" : "subtle"}
                  size="sm"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#94a3b8]">
            {project.subtitle}
          </p>
        </div>

        {project.externalUrl && (
          <a
            href={project.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} project repository`}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#94a3b8] hover:text-white hover:bg-[#131b2c] border border-[#1b263b] transition-all self-start sm:self-auto"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            {project.phaseLabel && (
              <span className="font-mono text-xs uppercase tracking-wider text-[#38bdf8] mb-2 block">
                {project.phaseLabel}
              </span>
            )}
            <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed mb-6 font-light">
              {project.description}
            </p>

            <div className="space-y-3 mb-8">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-cyan-400" />
                  </span>
                  <span className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-[#101725] text-[#94a3b8] border border-[#1c283e]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-6 text-xs font-mono">
              {project.architectureUrl && (
                <a
                  href={project.architectureUrl}
                  className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-white transition-colors"
                >
                  <span>Architecture Diagram</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              )}
              {project.caseStudyUrl && (
                <a
                  href={project.caseStudyUrl}
                  className="text-[#94a3b8] hover:text-white transition-colors underline underline-offset-4 decoration-[#22334e]"
                >
                  Case Study
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          {project.auditStream && (
            <ProjectTelemetryWidget
              systemStatus={project.auditStream.systemStatus}
              items={project.auditStream.items}
              telemetry={project.auditStream.telemetry}
              avgSync={project.auditStream.avgSync}
            />
          )}
        </div>
      </div>
    </article>
  );
}

