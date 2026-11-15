import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillCategoriesData } from "@/data/skills";
import { renderDynamicIcon } from "@/components/ui/icons";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-16 sm:py-24 border-b border-[#141d2f]/80 scroll-mt-16"
    >
      <Container size="wide">
        <SectionHeading
          label="Engineering Capabilities"
          title="Technical Expertise"
          description="An evolving foundation of frontend frameworks, modern development tools, and architectural practices used to build scalable and maintainable web applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategoriesData.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl bg-[#0b101a] border border-[#1a253a] p-6 flex flex-col justify-between shadow-xl hover:border-[#263753] transition-colors group"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#121b2b] border border-[#1f2d43] flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    {renderDynamicIcon(category.iconName, "w-4 h-4")}
                  </div>
                  <h3 className="text-base font-semibold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>

                <p className="text-xs text-[#94a3b8] leading-relaxed mb-5 font-light">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-[#101725] text-[#cbd5e1] border border-[#1d2a40] hover:border-cyan-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#162032] flex items-center justify-between text-[11px] font-mono text-[#64748b]">
                <span className="text-[#94a3b8]">{category.metaLeft}</span>
                <span className="text-cyan-400">{category.metaRight}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
