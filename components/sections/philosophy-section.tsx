import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { philosophyData } from "@/data/philosophy";
import { renderDynamicIcon } from "@/components/ui/icons";

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="py-16 sm:py-24 border-b border-[#141d2f]/80 scroll-mt-16"
    >
      <Container size="wide">
        <SectionHeading
          label="Core Principles"
          title="Engineering Philosophy"
          description="Good frontend engineering is not just about making interfaces work. It is about building reliable, maintainable, and intuitive products that scale with changing requirements."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {philosophyData.map((principle) => (
            <div
              key={principle.number}
              className="rounded-2xl bg-[#0b101a] border border-[#1a253a] p-6 sm:p-7 flex flex-col justify-between shadow-xl hover:border-[#263753] transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#121b2b] border border-[#1f2d43] flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    {renderDynamicIcon(principle.iconName, "w-4 h-4")}
                  </div>
                  <span className="font-mono text-xs text-[#64748b] font-semibold">
                    {principle.number}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight mb-2">
                  {principle.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed font-light">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
