import React from "react";
import { Container } from "@/components/ui/container";
import { experienceData, educationData } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-16 sm:py-24 border-b border-[#141d2f]/80 scroll-mt-16"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="font-mono text-xs uppercase tracking-wider text-[#38bdf8] mb-2">
              Career Timeline
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white tracking-tight">
              Professional Experience
            </h2>
            <p className="mt-3 text-[#94a3b8] text-sm sm:text-base leading-relaxed font-light">
              Building practical frontend engineering experience through enterprise applications, healthcare technology, and modern web platforms.
            </p>

            <div className="mt-8 rounded-xl bg-[#0b101a] border border-[#1a253a] p-5 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#38bdf8]">
                  Academic Foundation
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#101725] text-cyan-400 border border-[#1e2a3f]">
                  GPA {educationData.gpa}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-white">
                {educationData.institution}
              </h3>
              <p className="text-xs font-medium text-cyan-300 mt-0.5">
                {educationData.degree}
              </p>
              <p className="text-[11px] font-mono text-[#64748b] mt-0.5">
                {educationData.department} • {educationData.period}
              </p>
              <p className="mt-2 text-xs text-[#94a3b8] leading-relaxed font-light">
                {educationData.description}
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 relative border-l border-[#192439] pl-6 sm:pl-8 ml-3 sm:ml-4 space-y-10 sm:space-y-12">
            {experienceData.map((item) => (
              <div key={item.id} className="relative group">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#07090e] border-2 border-cyan-400 shadow-[0_0_8px_rgba(0,210,255,0.6)] group-hover:scale-125 transition-transform" />

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                  <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">
                    {item.role}
                  </h3>
                  <span className="inline-flex self-start sm:self-auto px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#111928] text-cyan-300 border border-[#1e2a3f]">
                    {item.period}
                  </span>
                </div>

                <div className="text-xs font-mono text-[#94a3b8] mb-3">
                  <span className="text-white font-medium">{item.organization}</span>
                  {item.location && (
                    <>
                      <span className="mx-2 text-[#22334e]">•</span>
                      <span>{item.location}</span>
                    </>
                  )}
                </div>

                <ul className="space-y-2 mt-3">
                  {item.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed flex items-start gap-2.5"
                    >
                      <span className="text-cyan-400 font-bold shrink-0 mt-0.5">›</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {item.technologies && (
                  <div className="mt-4 pt-3 border-t border-[#141e30] flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#101725] text-[#94a3b8] border border-[#1b263b]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
