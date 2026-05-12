import React, { useRef } from "react";
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

  return (
    <div ref={containerRef} className="h-screen w-screen flex flex-col md:flex-row">
        {/* ── Left column: scrollable content ── */}
        <main
            ref={scrollContainerRef}
            className="flex-1 overflow-y-auto md:mr-[40%]"
        >
            <WelcomeSection />
            <WorkSection />
            <ProjectsSection />
            <EducationSection />
        </main>
      {/* ── Right column: fixed GazeTracker ── */}
      <aside className="sticky top-0 z-20 flex flex-col items-center justify-center bg-transparent md:fixed md:inset-y-0 md:right-0 md:w-2/5 shrink-0 p-6">
        <GazeTracker
          className="flex justify-center items-center"
          containerRef={containerRef}
          activeSection={activeSection}
        />
        <p className="mt-3 text-xs text-muted-foreground">Tip: the face follows your cursor!</p>
      </aside>



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
