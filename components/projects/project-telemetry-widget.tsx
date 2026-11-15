import React from "react";
import { ProjectAuditItem } from "@/types/portfolio";

interface ProjectTelemetryWidgetProps {
  systemStatus: string;
  items: ProjectAuditItem[];
  telemetry: string;
  avgSync: string;
}

export function ProjectTelemetryWidget({
  systemStatus,
  items,
  telemetry,
  avgSync,
}: ProjectTelemetryWidgetProps) {
  return (
    <div className="rounded-xl bg-[#090d16] border border-[#1b2538] p-4 sm:p-5 font-mono text-xs shadow-inner">
      <div className="flex items-center justify-between border-b border-[#162032] pb-3 mb-3 text-[11px]">
        <span className="text-[#64748b] tracking-wider uppercase">Audit Stream</span>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-[10px]">STATUS: {systemStatus}</span>
        </div>
      </div>

      <div className="space-y-2.5">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-2 rounded bg-[#0e1422] border border-[#172235]"
          >
            <div className="flex items-center gap-2">
              <span className="text-cyan-400 font-bold">›</span>
              <span className="text-[#94a3b8]">{item.key}</span>
            </div>
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="text-[#cbd5e1]">{item.value}</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-[#172236] text-[#38bdf8] border border-[#24344f]">
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-[#162032] flex items-center justify-between text-[11px] text-[#64748b]">
        <div className="flex items-center gap-1">
          <span>TELEMETRY:</span>
          <span className="text-white font-medium">{telemetry}</span>
        </div>
        <div className="flex items-center gap-1">
          <span>AVG SYNC:</span>
          <span className="text-cyan-400 font-medium">{avgSync}</span>
        </div>
      </div>
    </div>
  );
}

