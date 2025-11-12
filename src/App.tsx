import React from "react";
import FaceTracker from "./components/ui/FaceTracker";

function App() {

    return (
    <div
                 className="min-h-screen bg-gradient-to-tr from-blue-500 to-pink-300">
        <div className='flex justify-center items-center'>
            <h1>My Portfolio</h1>
            {/* With custom styling */}
            <FaceTracker
              className="h-full w-full flex justify-center"
              // basePath should point to the directory that contains the gaze images and end with a trailing slash
              basePath="/assets/face_looker/faces/"
            />
        </div>
      {/*<div className="max-w-5xl mx-auto pt-24 pb-8 px-6 md:px-10">*/}
      {/*  <div className="bg-white border-8 border-black p-6 md:p-10">*/}
      {/*    <main>*/}
      {/*      <Welcome />*/}
      {/*      <AboutMe />*/}
      {/*      <ProgrammingSkills />*/}
      {/*      <Education />*/}
      {/*      <LanguageSkills />*/}
      {/*      <Tutoring />*/}
      {/*      <ContactInfo />*/}
      {/*    </main>*/}
      {/*    <footer className="mt-6">*/}
      {/*      <LoadingBar />*/}
      {/*    </footer>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
}

export default App;
