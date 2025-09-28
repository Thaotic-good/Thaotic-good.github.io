import React from "react";
import NavigationBar from "./components/sections/NavigationBar";
import Welcome from "./components/sections/Welcome";
import AboutMe from "./components/sections/AboutMe";
import ProgrammingSkills from "./components/sections/ProgrammingSkills";
import Education from "./components/sections/Education";
import LanguageSkills from "./components/sections/LanguageSkills";
import Tutoring from "./components/sections/Tutoring";
import ContactInfo from "./components/sections/ContactInfo";
import LoadingBar from "./components/ui/LoadingBar";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-500 to-pink-300">
      <header>
        <NavigationBar />
      </header>
      <div className="max-w-5xl mx-auto pt-24 pb-8 px-6 md:px-10">
        <div className="bg-white border-8 border-black p-6 md:p-10">
          <main>
            <Welcome />
            <AboutMe />
            <ProgrammingSkills />
            <Education />
            <LanguageSkills />
            <Tutoring />
            <ContactInfo />
          </main>
          <footer className="mt-6">
            <LoadingBar />
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
