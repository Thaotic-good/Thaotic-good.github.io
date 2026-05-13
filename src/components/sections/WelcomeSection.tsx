import React, {useCallback, useState} from "react";
import {useScrollContext} from "@/context/ScrollContext";
import SpeechBubble from "@/components/ui/SpeechBubble";
import {motion} from "framer-motion";
import {Button} from "@/components/ui/button";

/**
 * Welcome section — first thing the visitor sees.
 * Contains an animated text-generate greeting and a brief intro.
 */
export default function WelcomeSection() {
  const {registerSection} = useScrollContext();
  const [copied, setCopied] = useState<boolean>(false);

  const ref = useCallback(
    (el: HTMLElement | null) => registerSection("welcome", el),
    [registerSection],
  );

  const greeting = "Hi, I'm Thao and I'm a Frontend Developer";

  const copyEmail = () => {
    navigator.clipboard.writeText('fu3martina@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.03 * i, duration: 0.15}}
            >
              {char}
            </motion.span>
          ))}
        </h1>

        <p className="text-foreground/80 leading-relaxed mb-6">
          Curious self-taught developer with a focus on problem-solving and overcoming
          technical challenges. I believe in harnessing
          creativity and analytical thinking for real-world contributions.<br/>
          <br/>
          In which other profession can you make something out of nothing?
        </p>

        <div className="flex justify-end flex-wrap items-center gap-2">
          <Button size="sm">
            <a
              href="https://linkedin.com/in/thu-thao-dongova-a48557294"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </Button>
          <Button size="sm">
            <a
              href="https://github.com/Thaotic-good"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </Button>
          <Button size="sm" className='min-w-44.5'  onClick={copyEmail}
          >
            {copied ? 'Copied!' : 'fu3martina@gmail.com'}
          </Button>
        </div>
      </SpeechBubble>
    </section>
  );
}
