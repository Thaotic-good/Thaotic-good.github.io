import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/utils/utils";

interface SpeechBubbleProps {
  children: React.ReactNode;
  className?: string;
  /** Delay before the enter animation starts (seconds) */
  delay?: number;
}

/**
 * Glassmorphism speech-bubble card that animates in when scrolled into view.
 * The CSS triangle points LEFT on desktop (toward the GazeTracker) and DOWN on mobile.
 */
export default function SpeechBubble({ children, className, delay = 0 }: SpeechBubbleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={cn(
        "relative backdrop-blur-md bg-white/20 border border-white/40 rounded-2xl p-6 shadow-lg lg:scale-110",
        className
      )}
    >
      {/* Pointer — points RIGHT on md+ (toward avatar), DOWN on mobile */}
      <div
        className={cn(
          "absolute",
          // Mobile: centered bottom pointer
          "left-1/2 -bottom-3 -translate-x-1/2 border-l-12 border-r-12 border-t-12 border-l-transparent border-r-transparent border-t-white/30",
          // Desktop: right-side pointer
          "md:bottom-auto md:left-auto md:right-0 md:top-8 md:translate-x-full md:translate-y-0 md:border-r-0 md:border-l-12 md:border-t-12 md:border-b-12 md:border-t-transparent md:border-b-transparent md:border-l-white/30"
        )}
      />
      {children}
    </motion.div>
  );
}
