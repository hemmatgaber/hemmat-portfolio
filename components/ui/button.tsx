import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  asChild?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary:
      "bg-[#00d2ff] text-[#07090e] font-semibold hover:bg-[#38bdf8] active:bg-[#0284c7] shadow-sm hover:shadow-[0_0_20px_rgba(0,210,255,0.35)]",
    secondary:
      "bg-[#101725] text-[#e2e8f0] border border-[#22314b] hover:bg-[#182338] hover:border-[#334668] active:bg-[#0c121e]",
    outline:
      "bg-transparent text-[#cbd5e1] border border-[#22314b] hover:bg-[#101725] hover:border-[#38bdf8]/40 hover:text-white",
    ghost:
      "bg-transparent text-[#94a3b8] hover:text-white hover:bg-white/5 active:bg-white/10",
  };

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 rounded-full gap-1.5",
    md: "text-sm px-4 py-2 rounded-full gap-2",
    lg: "text-sm sm:text-base px-6 py-2.5 rounded-full gap-2.5",
  };

  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07090e]",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

