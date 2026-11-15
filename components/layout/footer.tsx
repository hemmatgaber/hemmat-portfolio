"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { ArrowUp } from "@/components/ui/icons";
import { profileData } from "@/data/profile";

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-[#162032] bg-[#07090e] py-12 transition-colors">
      <Container size="wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#141e30] text-center md:text-left">
          <div>
            <span className="font-semibold text-white tracking-tight text-base block">
              {profileData.name}
            </span>
            <p className="text-xs text-[#94a3b8] mt-1 font-light max-w-md">
              Frontend Developer focused on building thoughtful digital experiences through clean engineering.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-mono">
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, "projects")}
              className="text-[#94a3b8] hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              onClick={(e) => handleNavClick(e, "experience")}
              className="text-[#94a3b8] hover:text-white transition-colors"
            >
              Experience
            </a>
            <a
              href="#skills"
              onClick={(e) => handleNavClick(e, "skills")}
              className="text-[#94a3b8] hover:text-white transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="text-[#94a3b8] hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748b]">
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <a
              href={profileData.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94a3b8] hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-[#23334f]">•</span>
            <a
              href={profileData.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94a3b8] hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
            <span className="text-[#23334f]">•</span>
            <a
              href={`mailto:${profileData.contact.email}`}
              className="text-[#94a3b8] hover:text-cyan-400 transition-colors"
            >
              Email
            </a>
            <span className="text-[#23334f]">•</span>
            <a
              href={profileData.cvUrl}
              download="Hemmat-Gaber-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94a3b8] hover:text-cyan-400 transition-colors"
            >
              Resume [CV]
            </a>
          </div>

          <div className="text-[11px] font-mono text-center sm:text-left">
            © 2026 Hemmat Gaber. Crafted with care and clean code.
          </div>

          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#94a3b8] hover:text-cyan-400 transition-colors font-mono cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
