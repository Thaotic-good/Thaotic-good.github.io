import React, { useRef } from "react";
import { useIdleGhost } from "@/hooks/useIdleGhost";
import { GhostCursor } from "@/components/ui/ghost-cursor";
import { ScrollContextProvider, useScrollContext } from "./context/ScrollContext";
import GazeTracker from "./components/ui/GazeTracker";
import ScrollIndicator from "./components/ui/ScrollIndicator";
import WelcomeSection from "./components/sections/WelcomeSection";
import WorkSection from "./components/sections/WorkSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import EducationSection from "./components/sections/EducationSection";

/** Inner layout that consumes scroll context */
function AppLayout() {
  const { activeSection, scrollContainerRef } = useScrollContext();
  const containerRef = useRef<HTMLDivElement>(null!);
  const { isIdle, ghostPos } = useIdleGhost();

  return (
    <div ref={containerRef} className="h-screen w-screen flex flex-col md:flex-row">
        {/* ── Left column: scrollable content ── */}
        <main
            ref={scrollContainerRef}
            className="flex-1 overflow-y-auto md:mr-[30%]"
        >
            <WelcomeSection />
            <WorkSection />
            <ProjectsSection />
            <EducationSection />
        </main>
      {/* ── Right column: fixed GazeTracker ── */}
      <aside className="sticky top-0 z-20 flex flex-col items-center justify-center bg-transparent md:fixed md:inset-y-0 md:right-0 md:w-2/5 shrink-0 p-6">
        <div className="flex flex-col items-center lg:scale-110">
          <GazeTracker
            className="flex justify-center items-center"
            containerRef={containerRef}
            activeSection={activeSection}
            gazeTarget={isIdle ? ghostPos : null}
          />
          <p className="mt-3 text-xs text-muted-foreground">Tip: Keep scrolling!</p>
        </div>
      </aside>



      {/* ── Ghost cursor overlay ── */}
      <GhostCursor isIdle={isIdle} x={ghostPos.x} y={ghostPos.y} />

      {/* ── Scroll indicator dots ── */}
      <ScrollIndicator />
    </div>
  );
}

const App = () => (
  <ScrollContextProvider>
    <AppLayout />
  </ScrollContextProvider>
);

export default App;
