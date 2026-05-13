import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useCursorTracking from "./useCursorTracking";
import { cn } from "@/utils/utils";
import type { SectionId } from "@/context/ScrollContext";

const SECTION_PROPS: Record<
  SectionId,
  { emoji: string; label: string; position: string }
> = {
  welcome: { emoji: "\u{1F44B}", label: "wave", position: "-top-4 -right-2" },
  work: { emoji: "\u{2615}", label: "coffee", position: "-top-3 -right-3" },
  projects: {
    emoji: "\u{1F9EA}",
    label: "experiment",
    position: "-top-4 -right-1",
  },
  stack: {
    emoji: "\u{1F4DA}",
    label: "books",
    position: "-top-3 -right-2",
  },
};

type FaceTrackerProps = {
  className?: string;
  basePath?: string;
  containerRef: React.RefObject<HTMLDivElement>;
  activeSection?: SectionId;
  gazeTarget?: { x: number; y: number } | null;
};

/**
 * FaceTracker Component
 * Displays a face that follows mouse/touch movement.
 * When `activeSection` is provided, an emoji prop overlays the face.
 */
const DEFAULT_BASE_PATH = `${import.meta.env.BASE_URL}assets/following_gaze/faces/`;
export default function GazeTracker({
  className = "",
  basePath = DEFAULT_BASE_PATH,
  containerRef,
  activeSection,
  gazeTarget,
}: FaceTrackerProps) {
  const { currentImage, isLoading, error, updateGaze } = useCursorTracking(
    containerRef,
    basePath,
  );

  // When idle, drive gaze from the ghost cursor position instead of the real mouse
  useEffect(() => {
    if (gazeTarget != null) {
      updateGaze(gazeTarget.x, gazeTarget.y);
    }
  }, [gazeTarget, updateGaze]);

  if (error) {
    return (
      <div className="flex items-center justify-center h-50 text-red-600 bg-red-50 border border-red-200 rounded p-5">
        Error loading face images: {error.message}
      </div>
    );
  }

  const prop = activeSection ? SECTION_PROPS[activeSection] : null;

  return (
    <div
      className={cn(
        `relative w-full h-full bg-transparent overflow-visible`,
        className,
      )}
    >
      {currentImage && (
        <div className="relative inline-block">
          <img
            src={currentImage}
            alt="Face following gaze"
            className="w-52 h-52 object-contain transition-opacity rounded-full duration-100 ease-out select-none pointer-events-none"
          />

          {/* Emoji prop overlay */}
          <AnimatePresence mode="wait">
            {prop && (
              <motion.span
                key={activeSection}
                initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
                animate={{ opacity: 1, scale: 2, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.4, rotate: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={cn(
                  "absolute text-3xl pointer-events-none select-none",
                  prop.position,
                )}
                role="img"
                aria-label={prop.label}
              >
                {prop.emoji}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      )}

      {isLoading && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-600 text-sm">
          Loading face...
        </div>
      )}
    </div>
  );
}
