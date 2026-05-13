import React, { createContext, useContext, useState, useCallback, useRef } from "react";
import { useScroll, useMotionValueEvent, MotionValue } from "framer-motion";

export type SectionId = "welcome" | "work" | "projects" | "stack";

interface ScrollContextValue {
  activeSection: SectionId;
  scrollYProgress: MotionValue<number>;
  registerSection: (id: SectionId, el: HTMLElement | null) => void;
  scrollContainerRef: React.RefObject<HTMLDivElement>;
}

const ScrollContext = createContext<ScrollContextValue | null>(null);

export function useScrollContext() {
  const ctx = useContext(ScrollContext);
  if (!ctx) throw new Error("useScrollContext must be used within ScrollContextProvider");
  return ctx;
}

export function ScrollContextProvider({ children }: { children: React.ReactNode }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null!);
  const sectionsRef = useRef<Map<SectionId, HTMLElement>>(new Map());
  const [activeSection, setActiveSection] = useState<SectionId>("welcome");

  const { scrollYProgress } = useScroll({ container: scrollContainerRef });

  const registerSection = useCallback((id: SectionId, el: HTMLElement | null) => {
    if (el) {
      sectionsRef.current.set(id, el);
    } else {
      sectionsRef.current.delete(id);
    }
  }, []);

  useMotionValueEvent(scrollYProgress, "change", () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const midY = containerRect.top + containerRect.height / 2;

    let closest: SectionId = "welcome";
    let closestDist = Infinity;

    sectionsRef.current.forEach((el, id) => {
      const rect = el.getBoundingClientRect();
      const sectionMid = rect.top + rect.height / 2;
      const dist = Math.abs(sectionMid - midY);
      if (dist < closestDist) {
        closestDist = dist;
        closest = id;
      }
    });

    setActiveSection(closest);
  });

  return (
    <ScrollContext.Provider
      value={{ activeSection, scrollYProgress, registerSection, scrollContainerRef }}
    >
      {children}
    </ScrollContext.Provider>
  );
}
