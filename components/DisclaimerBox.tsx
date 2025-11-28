import { AlertTriangle, Info, Shield } from "lucide-react";
import React from "react";

type DisclaimerType = "safety" | "legal" | "info";

interface DisclaimerBoxProps {
  type: DisclaimerType;
  children: React.ReactNode;
  className?: string;
}

const iconMap = {
  safety: AlertTriangle,
  legal: Shield,
  info: Info,
};

const colorMap = {
  safety: {
    bg: "bg-warning-amber/10",
    border: "border-warning-amber",
    text: "text-warning-amber",
  },
  legal: {
    bg: "bg-electric-blue/10",
    border: "border-electric-blue",
    text: "text-electric-blue",
  },
  info: {
    bg: "bg-electric-green/10",
    border: "border-electric-green",
    text: "text-electric-green",
  },
};

const titleMap = {
  safety: "⚠️ SAFETY FIRST",
  legal: "📖 LEGAL DISCLAIMER",
  info: "ℹ️ IMPORTANT INFORMATION",
};

export default function DisclaimerBox({
  type,
  children,
  className = "",
}: DisclaimerBoxProps) {
  const Icon = iconMap[type];
  const colors = colorMap[type];
  const title = titleMap[type];

  return (
    <div
      className={`${colors.bg} border-l-4 ${colors.border} p-6 my-6 rounded-r-lg ${className}`}
      role="alert"
    >
      <div className="flex items-start gap-3">
        <Icon className={`${colors.text} flex-shrink-0 mt-1`} size={24} />
        <div className="flex-1">
          <h3 className={`font-bold text-lg ${colors.text} mb-2`}>{title}</h3>
          <div className="text-neutral-charcoal prose prose-sm max-w-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
