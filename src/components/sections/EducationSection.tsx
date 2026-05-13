import React, {useCallback} from "react";
import {useScrollContext} from "@/context/ScrollContext";
import SpeechBubble from "@/components/ui/SpeechBubble";
import {BicepsFlexed, Handshake, HardHat, LucideIcon, Pickaxe} from "lucide-react";

const MAX_BARS = 4;

const CELL_BASE = "w-5 h-2 rounded-full";
const CELL_GLOW =
  "shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_0_10px_rgba(34,197,94,0.6)] transition-all duration-300 group-hover:scale-y-125 group-hover:bg-green-400";

const CELL_STYLES = {
  full: `${CELL_BASE} bg-green-500 ${CELL_GLOW}`,
  partial: `${CELL_BASE} bg-green-500/80 ${CELL_GLOW}`,
  empty: `${CELL_BASE} bg-slate-700/30`,
} as const;

type CellVariant = keyof typeof CELL_STYLES;

interface Language {
  name: string;
  /** Number of fully‑filled cells */
  filled: number;
  /** Number of partially‑filled cells (rendered after filled) */
  partial: number;
}

interface TechGroup {
  icon: LucideIcon;
  title: string;
  items: string[];
  listClass?: string;
}

const languages: Language[] = [
  {name: "Czech", filled: 4, partial: 0},
  {name: "English", filled: 4, partial: 0},
  {name: "Vietnamese", filled: 1, partial: 2},
  {name: "French", filled: 0, partial: 2},
];

const leftColumn: TechGroup[] = [
  {icon: BicepsFlexed, title: "Core", items: ["React", "JavaScript", "TypeScript"], listClass: "text-foreground space-y-1 text-sm mb-5"},
  {icon: HardHat, title: "Testing", items: ["Vitest", "Cypress"], listClass: "text-foreground/80 space-y-1 text-sm"},
];

const rightColumn: TechGroup[] = [
  {icon: Pickaxe, title: "Libraries & Tools", items: ["Tailwind CSS", "Redux", "TanStack Query", "React Hook Form & Zod", "Storybook", "CodeMirror", "Context API"], listClass: "text-foreground/80 space-y-1 text-sm"},
];

function CategoryHeader({icon: Icon, title}: { icon: LucideIcon; title: string }) {
  return (
    <div className="flex items-center gap-1 mb-2 font-medium text-foreground">
      <Icon size={17}/>
      <h3>{title}</h3>
    </div>
  );
}

function ProficiencyBar({filled, partial}: { filled: number; partial: number }) {
  const cells: CellVariant[] = Array.from({length: MAX_BARS}, (_, i) => {
    if (i < filled) return "full";
    if (i < filled + partial) return "partial";
    return "empty";
  });

  return (
    <span className="flex flex-row gap-0.5">
      {cells.map((variant, i) => (
        <div key={i} className={CELL_STYLES[variant]}/>
      ))}
    </span>
  );
}

function TechGroupList({groups}: { groups: TechGroup[] }) {
  return (
    <>
      {groups.map(({icon, title, items, listClass}) => (
        <div key={title}>
          <CategoryHeader icon={icon} title={title}/>
          <ul className={listClass}>
            {items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      ))}
    </>
  );
}

/**
 * Tech Stack section — core technologies and tools.
 */
export default function EducationSection() {
  const {registerSection} = useScrollContext();

  const ref = useCallback(
    (el: HTMLElement | null) => registerSection("stack", el),
    [registerSection],
  );

  return (
    <section
      ref={ref}
      data-section="stack"
      className="flex min-h-screen items-center justify-center px-6 md:px-12"
    >
      <SpeechBubble className="max-w-lg">
        <h2 className="text-xl font-semibold mb-4 text-foreground">
          Tech Stack
        </h2>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div><TechGroupList groups={leftColumn}/></div>
          <div><TechGroupList groups={rightColumn}/></div>
        </div>

        <CategoryHeader icon={Handshake} title="Languages"/>
        <ul className="space-y-1 text-sm">
          {languages.map(({name, filled, partial}) => (
            <li key={name} className="flex items-center justify-between">
              <span className="text-foreground">{name}</span>
              <ProficiencyBar filled={filled} partial={partial}/>
            </li>
          ))}
        </ul>
      </SpeechBubble>
    </section>
  );
}
