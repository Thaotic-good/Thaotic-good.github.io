import React, { useCallback } from "react";
import { useScrollContext } from "@/context/ScrollContext";
import SpeechBubble from "@/components/ui/SpeechBubble";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
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

        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem
                key={project.title}
                className="basis-full sm:basis-1/2"
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block h-full"
                >
                  <Card className="h-full hover:ring-2 hover:ring-foreground/20 transition-shadow">
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
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </SpeechBubble>
    </section>
  );
}
