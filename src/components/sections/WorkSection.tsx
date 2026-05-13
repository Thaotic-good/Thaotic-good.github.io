import React, { useCallback } from "react";
import { useScrollContext } from "@/context/ScrollContext";
import SpeechBubble from "@/components/ui/SpeechBubble";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import cvPdf from "@/assets/Thu_Thao_Dongova_Resume_Fixed.docx.pdf";

/**
 * Work / About-me section — career summary, CV download, and social links.
 */
export default function WorkSection() {
  const { registerSection } = useScrollContext();

  const ref = useCallback(
    (el: HTMLElement | null) => registerSection("work", el),
    [registerSection]
  );

  return (
    <section
      ref={ref}
      data-section="work"
      className="flex min-h-screen items-center justify-center px-6 md:px-12"
    >
      <SpeechBubble className="max-w-lg">
        <h2 className="text-xl font-semibold mb-3 text-foreground">A little about me</h2>

        <p className="text-foreground/80 leading-relaxed mb-4">
          My name is Dong Thi Thu Thao, but everybody calls me Martina.
          I&rsquo;m a self-taught frontend developer who pivoted from landscape
          architecture because I wanted to combine creativity with analytical
          problem-solving in a field that moves fast and rewards curiosity.
        </p>

        <ul className="list-disc list-inside text-foreground/80 space-y-1 mb-6 text-sm">
          <li>Analytical understanding of the problem, yet innovative solutions.</li>
          <li>From conceptualisation to implementation and troubleshooting.</li>
        </ul>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm" asChild>
            <a href={cvPdf} download="Thu_Thao_Dongova_Resume.pdf">
              Download CV
            </a>
          </Button>

          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="outline" size="sm">
                GitHub
              </Button>
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="font-medium">Thaotic-good</p>
              <p className="text-xs text-foreground/80">
                Check out my repos and contributions.
              </p>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="outline" size="sm">
                Instagram
              </Button>
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="font-medium">@thaotic_good</p>
              <p className="text-xs text-foreground/80">
                Follow me for behind-the-scenes updates.
              </p>
            </HoverCardContent>
          </HoverCard>
        </div>
      </SpeechBubble>
    </section>
  );
}
