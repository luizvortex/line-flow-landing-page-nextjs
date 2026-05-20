import { type ReactNode } from "react";

type TagType = "div" | "article" | "section" | "li";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  as?: TagType;
}

export function GlassCard({
  children,
  className = "",
  as: Tag = "div",
}: GlassCardProps) {
  return (
    <Tag
      className={`bg-[#072233]/60 backdrop-blur-md border border-[#1a3d52] rounded-2xl hover:border-[#255068] hover:bg-[#0f3450]/40 transition-all duration-200 ease-out ${className}`}
    >
      {children}
    </Tag>
  );
}
