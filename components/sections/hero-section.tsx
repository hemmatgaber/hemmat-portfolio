import React from "react";
import { Container } from "@/components/ui/container";
import { profileData } from "@/data/profile";
import {
  ArrowDown,
  Linkedin,
  Mail,
  CheckCircle2,
} from "@/components/ui/icons";

export function HeroSection() {
  return (
    <section className="pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-[#141d2f]/80 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d1422] border border-[#1b273d] text-xs text-[#94a3b8] mb-6 font-mono self-start shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,210,255,0.9)] animate-pulse" />
              <span>{profileData.availabilityPill}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white font-normal tracking-tight leading-[1.14]">
              {profileData.headline}
            </h1>

            <p className="mt-6 text-[#94a3b8] text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              {profileData.bio}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full bg-[#00d2ff] hover:bg-[#38bdf8] text-[#07090e] shadow-[0_0_20px_rgba(0,210,255,0.25)] transition-all cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full bg-[#101725] text-[#cbd5e1] border border-[#1e2a3f] hover:bg-[#152033] hover:text-white transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              <a
                href={profileData.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-full bg-[#101725] text-[#cbd5e1] border border-[#1e2a3f] hover:bg-[#152033] hover:text-white transition-all"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>View LinkedIn</span>
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-[#162135] grid grid-cols-3 gap-4 sm:gap-8 max-w-lg">
              {profileData.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-serif text-white font-normal tracking-tight">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-[11px] font-mono uppercase text-[#64748b] tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0b101a] border border-[#1a2539] p-6 sm:p-7 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-[#162032] pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
                    {profileData.activeFocus.title}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#131c2d] text-[#38bdf8] border border-[#1e2c45]">
                  Angular Focus
                </span>
              </div>

              <div className="space-y-3.5">
                {profileData.activeFocus.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-[#111927] transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#cbd5e1] leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-[#162032] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                <div>
                  <span className="text-[10px] text-[#64748b] block uppercase">
                    {profileData.activeFocus.approachLabel}
                  </span>
                  <span className="text-[#38bdf8] font-medium">
                    {profileData.activeFocus.approachValue}
                  </span>
                </div>

                <a
                  href="#skills"
                  className="inline-flex items-center gap-1.5 text-xs text-[#94a3b8] hover:text-white transition-colors underline underline-offset-4 decoration-[#22334e]"
                >
                  View Skills →
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
