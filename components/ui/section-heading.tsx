import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 sm:mb-12",
        align === "center" && "text-center mx-auto",
        className
      )}
    >
      {label && (
        <div className="font-mono text-xs uppercase tracking-wider text-[#38bdf8] mb-2 flex items-center gap-2">
          <span>{label}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-2.5 text-[#94a3b8] text-sm sm:text-base max-w-3xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

