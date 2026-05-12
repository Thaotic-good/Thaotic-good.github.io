import React, { useCallback } from "react";
import { useScrollContext } from "@/context/ScrollContext";
import SpeechBubble from "@/components/ui/SpeechBubble";
import { motion } from "framer-motion";

/**
 * Welcome section — first thing the visitor sees.
 * Contains an animated text-generate greeting and a brief intro.
 */
export default function WelcomeSection() {
  const { registerSection } = useScrollContext();

  const ref = useCallback(
    (el: HTMLElement | null) => registerSection("welcome", el),
    [registerSection]
  );

  const greeting = "Hi, I'm Thao and I'm a Frontend developer";

  return (
    <section
      ref={ref}
      data-section="welcome"
      className="flex min-h-screen items-center justify-center px-6 md:px-12"
    >
      <SpeechBubble className="max-w-lg">
        {/* Staggered character reveal */}
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
          {greeting.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.03 * i, duration: 0.15 }}
            >
              {char}
            </motion.span>
          ))}
        </h1>

        <p className="text-foreground/80 leading-relaxed">
          I value the freedom that coding provides and believe in harnessing
          creativity and analytical thinking into real-world contributions.
        </p>
      </SpeechBubble>
    </section>
  );
}
