import React, { useCallback } from "react";
import { useScrollContext } from "@/context/ScrollContext";
import SpeechBubble from "@/components/ui/SpeechBubble";

/**
 * Education section — studies, language skills, and tutoring experience.
 */
export default function EducationSection() {
  const { registerSection } = useScrollContext();

  const ref = useCallback(
    (el: HTMLElement | null) => registerSection("education", el),
    [registerSection]
  );

  return (
    <section
      ref={ref}
      data-section="education"
      className="flex min-h-screen items-center justify-center px-6 md:px-12"
    >
      <SpeechBubble className="max-w-lg">
        <h2 className="text-xl font-semibold mb-3 text-foreground">Education &amp; Skills</h2>

        <h3 className="font-medium mb-2 text-foreground">Landscape Architecture</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm mb-4">
          <li>Proficiency in plant material selection</li>
          <li>SketchUp: 3D modelling &amp; architectural visualisation</li>
          <li>Photoshop: photo editing, graphic design</li>
          <li>ArcGIS Pro: spatial analysis &amp; GIS mapping</li>
          <li>AutoCAD: 2D drafting for architecture &amp; engineering</li>
        </ul>

        <h3 className="font-medium mb-2 text-foreground">Languages</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm mb-4">
          <li>English — fluent</li>
          <li>Czech — fluent</li>
          <li>Vietnamese — fluent</li>
          <li>French — conversational</li>
        </ul>

        <h3 className="font-medium mb-2 text-foreground">Tutoring Experience</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
          <li>Simplifying complex concepts into understandable units</li>
          <li>Effective communication &amp; learner assessment</li>
        </ul>
      </SpeechBubble>
    </section>
  );
}
