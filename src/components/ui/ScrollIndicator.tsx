import React from "react";
import { motion } from "framer-motion";
import { useScrollContext, SectionId } from "@/context/ScrollContext";
import { cn } from "@/utils/utils";

const sections: { id: SectionId; label: string }[] = [
  { id: "welcome", label: "Welcome" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
];

export default function ScrollIndicator() {
  const { activeSection, scrollContainerRef } = useScrollContext();

  const handleClick = (id: SectionId) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const target = container.querySelector(`[data-section="${id}"]`);
    target?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <nav
      className={cn(
        "fixed left-4 top-1/2 -translate-y-1/2 z-50 flex-col gap-4 items-center",
        "hidden md:flex"
      )}
      aria-label="Section navigation"
    >
      {sections.map(({ id, label }) => {
        const isActive = activeSection === id;
        return (
          <button
            key={id}
            onClick={() => handleClick(id)}
            className="group relative flex items-center gap-3"
            aria-label={`Scroll to ${label}`}
          >
            {/* Label tooltip */}
            <span
              className={cn(
                "absolute opacity-0 left-full ml-3 whitespace-nowrap text-sm font-medium",
                "lg:group-hover:opacity-100 transition-opacity",
                isActive ? "text-foreground lg:opacity-100" : "text-muted-foreground group-hover:scale-110"
              )}
            >
              {label}
            </span>

            {/* Dot */}
            <motion.span
              layout
              className={cn(
                "block rounded-full transition-colors",
                isActive
                  ? "w-3 h-3 bg-foreground"
                  : "w-2 h-2 bg-muted-foreground/40 group-hover:bg-muted-foreground group-hover:scale-130"
              )}
            />
          </button>
        );
      })}
    </nav>
  );
}
