"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import {
  Code,
  Share2,
  Download,
  Menu,
  X,
  Moon,
} from "@/components/ui/icons";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";
import { profileData } from "@/data/profile";

const NAV_ITEMS = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "philosophy", label: "Philosophy" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const activeSection = useActiveSection(
    NAV_ITEMS.map((item) => item.id),
    "projects"
  );

  const handleShare = async () => {
    if (typeof window === "undefined") return;
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Hemmat Gaber — Mid-Level Frontend Developer",
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#07090e]/90 backdrop-blur-md border-b border-[#162032] transition-colors">
      <Container size="wide">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-white font-medium hover:text-[#38bdf8] transition-colors group"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,210,255,0.8)] group-hover:scale-110 transition-transform" />
              <span className="font-semibold tracking-tight text-sm sm:text-base">
                {profileData.name}
              </span>
            </Link>
            <span className="hidden sm:inline-flex items-center text-xs font-mono px-2.5 py-0.5 rounded bg-[#101725] text-[#94a3b8] border border-[#1e2a3f]">
              {profileData.roleTitle}
            </span>
          </div>

          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#0b101a] border border-[#1b263b]"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={cn(
                    "text-xs lg:text-sm px-3.5 py-1.5 rounded-full transition-all duration-200 font-medium",
                    isActive
                      ? "text-white bg-[#152033] shadow-inner font-semibold"
                      : "text-[#94a3b8] hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden sm:flex items-center gap-2">
            <a
              href={profileData.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub"
              className="w-9 h-9 rounded-full flex items-center justify-center text-[#94a3b8] hover:text-white hover:bg-[#131b2c] border border-transparent hover:border-[#1e2a3f] transition-all"
            >
              <Code className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={handleShare}
              aria-label="Share Portfolio Link"
              className="relative w-9 h-9 rounded-full flex items-center justify-center text-[#94a3b8] hover:text-white hover:bg-[#131b2c] border border-transparent hover:border-[#1e2a3f] transition-all cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              {copied && (
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#00d2ff] text-[#07090e] text-[10px] font-bold px-2 py-0.5 rounded shadow">
                  Copied!
                </span>
              )}
            </button>

            <button
              type="button"
              aria-label="Toggle Theme"
              className="w-9 h-9 rounded-full flex items-center justify-center text-[#94a3b8] hover:text-white hover:bg-[#131b2c] border border-transparent hover:border-[#1e2a3f] transition-all cursor-pointer"
            >
              <Moon className="w-4 h-4" />
            </button>

            <a
              href={profileData.cvUrl}
              download="Hemmat-Gaber-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Hemmat Gaber CV (PDF)"
              className="ml-1 inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-full bg-[#111a2c] text-[#e2e8f0] border border-[#23334f] hover:border-[#38bdf8]/50 hover:text-white transition-all shadow-sm cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Download CV</span>
            </a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="w-10 h-10 rounded-lg flex items-center justify-center text-[#94a3b8] hover:text-white hover:bg-[#131b2c] border border-[#1e2a3f]"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 px-2 border-t border-[#162032] bg-[#07090e] animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={cn(
                      "px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "text-cyan-400 bg-[#131b2c] font-semibold"
                        : "text-[#94a3b8] hover:text-white hover:bg-white/5"
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="pt-3 mt-2 border-t border-[#162032] flex flex-col gap-2 px-3">
                <a
                  href={profileData.cvUrl}
                  download="Hemmat-Gaber-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 rounded-lg bg-[#00d2ff] text-[#07090e] font-semibold text-sm hover:bg-[#38bdf8] transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
