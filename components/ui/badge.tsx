import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "cyan" | "emerald" | "outline" | "pill" | "subtle";
  size?: "sm" | "md";
}

export function Badge({
  children,
  variant = "default",
  size = "sm",
  className,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-[#141c2c] text-[#94a3b8] border border-[#1e293b]",
    cyan: "bg-[#00d2ff]/10 text-[#38bdf8] border border-[#00d2ff]/30",
    emerald: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    outline: "bg-transparent text-[#cbd5e1] border border-[#2a374d]",
    pill: "bg-[#0f172a] text-[#94a3b8] border border-[#1e293b] rounded-full",
    subtle: "bg-[#111827]/70 text-[#94a3b8] border border-white/5",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 tracking-wide font-mono",
    md: "text-xs px-3 py-1 font-mono tracking-wide",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium rounded-md transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

