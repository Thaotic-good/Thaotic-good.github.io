import React from "react";

function ProgrammingSkills() {
  return (
    <section className="my-10">
      <h2 className="text-2xl font-semibold mb-4">My programming skills</h2>
      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>
          Python: basic syntax, simple scripts, working with data types, loops, conditionals, classes, files handling
        </li>
        <li>HTML:creating a basic webpage (headers, paragraphs, links, lists)</li>
        <li>CSS: adding basic styles to HTML elements (colors, fonts, margins)</li>
        <li>JavaScript: basic syntax, writing functions, minor DOM manipulations</li>
        <li>GitHub Pages: basic web development and static site deployment</li>
        <li>
          Git version control: management of project codebase with IDE usage (IntelliJ, Visual Studio Code, GitHub)
        </li>
        <li>
          There's a link to my gitHub profile:{" "}
          <a className="text-blue-700 underline hover:no-underline" href="https://github.com/Thaotic-good" target="_blank" rel="noreferrer">
            Thaotic-good
          </a>
        </li>
      </ul>
      <p className="text-justify leading-7 mb-4">
        Right now I'm following tutorial moduls on{" "}
        <a className="text-blue-700 underline hover:no-underline" href="https://developer.mozilla.org/en-US/docs/Learn" target="_blank" rel="noreferrer">
          MDN Web Docs
        </a>
        , wih help of which I created this page! I've also been writing down a so-called 'cheatsheet' which helps me
        retain the information as I'm forced to re-articulate big concepts into bite-size basics. Check it out and
        definitely find my interpretation of DOM. As I go through the guides, I will find a more elegant way to embed
        it, but here it is:
      </p>
      <iframe
        className="w-full h-[31rem] border-4 border-black"
        title="Cheatsheet"
        src="https://docs.google.com/document/d/e/2PACX-1vRY_5abIbLjnjQEHqn1HkbAgtpUVN5KLulviECUoZEsgff34VQC1cpQCY8lFgmZJqfU0ifzXWLcdWBE/pub?embedded=true"
      />
    </section>
  );
}

export default ProgrammingSkills;
