import React, {useCallback} from "react";
import {useScrollContext} from "@/context/ScrollContext";
import SpeechBubble from "@/components/ui/SpeechBubble";
import {Button} from "@/components/ui/button";
import cvPdf from "@/assets/Thu_Thao_Dongova_Resume_Fixed.docx.pdf";
import {Newspaper, School, Trophy} from "lucide-react";

/**
 * Work / About-me section — career summary, CV download, and social links.
 */
export default function WorkSection() {
  const {registerSection} = useScrollContext();

  const ref = useCallback(
    (el: HTMLElement | null) => registerSection("work", el),
    [registerSection],
  );

  return (
    <section
      ref={ref}
      data-section="work"
      className="flex min-h-screen items-center justify-center px-6 md:px-12"
    >
      <SpeechBubble className="max-w-lg">
        <h2 className="text-xl font-semibold mb-3 text-foreground">
          Work Experience
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          <span className="font-medium text-foreground">React Developer at Webscope s.r.o., </span>{" "}
          <br/> Brno &middot; Jul 2024 &ndash; Apr 2026
        </p>

        <ul className="list-none text-foreground/80 space-y-2 mb-6 text-sm">
          <li>
            <span className="flex items-center gap-2 font-medium text-foreground"><School size={15}/> E-Learning Platform</span>{" "}
            (2026) Agile delivery environment with tight feedback loops,
            adaptive planning, and high autonomy.
          </li>
          <li>
            <span className="flex items-center gap-2 font-medium text-foreground"><Newspaper size={15}/>Media Intelligence Platform</span>{" "}
            (2025) Rapid prototyping, stakeholder collaboration,
            regression fixes, and technical debt reduction.
          </li>
          <li>
            <span className="flex items-center gap-2 font-medium text-foreground"><Trophy size={15}/>Sponsorship Intelligence Platform</span>{" "}
            (2024) Storybook-driven UI library with production-ready
            React components and REST API integration.
          </li>
        </ul>

        <div className="flex justify-end items-center gap-3">
          <Button size="sm" asChild>
            <a href={cvPdf} download="Thu_Thao_Dongova_Resume.pdf">
              Download CV
            </a>
          </Button>
        </div>
      </SpeechBubble>
    </section>
  );
}
