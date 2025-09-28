import React from "react";
import realitySrc from "../../img/reality.jpg";
import expectationsSrc from "../../img/expectationsFinal.jpg";

function AboutMe() {

  return (
    <section className="my-10">
      <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">A little about me</h2>
      <p className="text-justify leading-7 mb-4">
        My name is Dong Thi Thu Thao, but everybody calls me Martina. I'm self-studying to become a programmer.
        I've decided to up-root my life by changing my career path, because I value the degree of freedom that
        coding skill provides. I also believe that technological progress will grow rapidly, so I want to harness
        my natural traits of creativity and analytical thinking into a real world contribution.
        What kinds of problems does this combination of skills solve?
      </p>
      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>Analytical understanding of the problem, yet finding an innovative solution.</li>
        <li>A rage of task from conceptualization to implementation and troubleshooting.</li>
      </ul>

      <p className="text-justify leading-7 mb-6">
        I still have a long way to go though, and I'm aware that I will have to keep learning as long as I want to do this,
        but this is how I believe my personal traits are going to help be become a good programmer.
      </p>
      <div className="relative h-[31rem]">
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[31rem] w-auto"
          src={realitySrc}
          alt="Programming: reality of caffeine-fueled coding during the night"
        />
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[31rem] w-auto transition-opacity duration-300 hover:opacity-0"
          src={expectationsSrc}
          alt="Programming: expectations of coding on a beach like a pro"
        />
      </div>
    </section>
  );
}

export default AboutMe;
