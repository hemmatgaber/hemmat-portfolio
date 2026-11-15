"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/container";
import { profileData } from "@/data/profile";
import {
  Mail,
  Linkedin,
  Phone,
  Send,
  CheckCircle2,
  Download,
} from "@/components/ui/icons";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactSection() {
  const { contact } = profileData;
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message details are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const mailtoSubject = encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    const mailtoUrl = `mailto:${contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    if (typeof window !== "undefined") {
      window.location.href = mailtoUrl;
    }

    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 scroll-mt-16">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <div className="font-mono text-xs uppercase tracking-wider text-[#38bdf8] mb-2">
              {contact.eyebrow}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white tracking-tight">
              {contact.heading}
            </h2>
            <p className="mt-3 text-[#94a3b8] text-sm sm:text-base leading-relaxed font-light">
              {contact.description}
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#0b101a] border border-[#1a253a] hover:border-cyan-500/40 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#121b2b] border border-[#1f2d43] flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase text-[#64748b] block">
                    Email Direct
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                    {contact.email}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#0b101a] border border-[#1a253a] hover:border-cyan-500/40 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#121b2b] border border-[#1f2d43] flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase text-[#64748b] block">
                    Direct Phone
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                    {contact.phone}
                  </span>
                </div>
              </a>

              <a
                href={contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#0b101a] border border-[#1a253a] hover:border-cyan-500/40 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#121b2b] border border-[#1f2d43] flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase text-[#64748b] block">
                    Professional Profile
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                    {contact.linkedin}
                  </span>
                </div>
              </a>

              <a
                href={profileData.cvUrl}
                download="Hemmat-Gaber-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#0b101a] border border-[#1a253a] hover:border-cyan-500/40 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#121b2b] border border-[#1f2d43] flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <Download className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase text-[#64748b] block">
                    Curriculum Vitae
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                    Download CV (PDF)
                  </span>
                </div>
              </a>
            </div>

            <p className="mt-6 text-xs font-mono text-[#64748b]">
              Location: {contact.location}
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0b101a] border border-[#1a253a] p-6 sm:p-8 shadow-2xl">
              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {contact.successMessage}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94a3b8] max-w-md leading-relaxed mb-6 font-light">
                    Your default mail client has opened with your drafted inquiry addressed to{" "}
                    <span className="text-cyan-400">{contact.email}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-mono px-4 py-2 rounded-full bg-[#121b2b] text-[#cbd5e1] border border-[#1e2c45] hover:text-white transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[11px] font-mono uppercase text-[#64748b] mb-1.5"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Elena Rostova"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#07090e] border border-[#1a253a] text-sm text-white placeholder-[#475569] focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                      {errors.name && (
                        <span className="text-[11px] text-rose-400 mt-1 block">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[11px] font-mono uppercase text-[#64748b] mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="elena@technexus.org"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#07090e] border border-[#1a253a] text-sm text-white placeholder-[#475569] focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                      {errors.email && (
                        <span className="text-[11px] text-rose-400 mt-1 block">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-[11px] font-mono uppercase text-[#64748b] mb-1.5"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Frontend Engineering Opportunity / Project Discussion"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#07090e] border border-[#1a253a] text-sm text-white placeholder-[#475569] focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                    {errors.subject && (
                      <span className="text-[11px] text-rose-400 mt-1 block">
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[11px] font-mono uppercase text-[#64748b] mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Describe your project, timeline, scope, or questions..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#07090e] border border-[#1a253a] text-sm text-white placeholder-[#475569] focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                    />
                    {errors.message && (
                      <span className="text-[11px] text-rose-400 mt-1 block">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 rounded-full bg-[#00d2ff] hover:bg-[#38bdf8] text-[#07090e] shadow-[0_0_20px_rgba(0,210,255,0.25)] transition-all cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
