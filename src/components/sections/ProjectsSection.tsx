import React, { useCallback } from "react";
import { useScrollContext } from "@/context/ScrollContext";
import SpeechBubble from "@/components/ui/SpeechBubble";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  href: string;
  emoji: string;
}

const projects: Project[] = [
  {
    title: "AI Reseller Studio",
    description: "An AI-powered tool for product listing generation.",
    href: "#",
    emoji: "\u{1F916}",
  },
  {
    title: "Gaze Tracker Portfolio",
    description: "This very site — scroll-driven with a face that follows you.",
    href: "#",
    emoji: "\u{1F440}",
  },
  {
    title: "Sandbox Experiments",
    description: "Playground for layout primitives and animation ideas.",
    href: "#",
    emoji: "\u{1F9EA}",
  },
  {
    title: "Sandbox Experiments",
    description: "Playground for layout primitives and animation ideas.",
    href: "#",
    emoji: "\u{1F9EA}",
  },
];

/**
 * Projects section — a horizontally scrollable carousel of project cards.
 */
export default function ProjectsSection() {
  const { registerSection } = useScrollContext();

  const ref = useCallback(
    (el: HTMLElement | null) => registerSection("projects", el),
    [registerSection],
  );

  return (
    <section
      ref={ref}
      data-section="projects"
      className="flex min-h-screen items-center justify-center px-6 md:px-12"
    >
      <SpeechBubble className="max-w-lg w-full">
        <h2 className="text-xl font-semibold mb-4 text-foreground">
          Side Projects
        </h2>

        <ScrollArea className="w-full">
          <div className="flex gap-4 pb-4">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="shrink-0 basis-full sm:basis-[calc(50%-0.5rem)] cursor-pointer hover:shadow-md"
              >
                <CardHeader>
                  <CardTitle>
                    <span className="mr-2">{project.emoji}</span>
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-xs text-foreground/80">
                    View project &rarr;
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </SpeechBubble>
    </section>
  );
}
