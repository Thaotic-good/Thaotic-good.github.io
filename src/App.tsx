import React from "react";
import { useRef } from "react";
import FaceTracker from "./components/ui/FaceTracker";

function App() {
    const containerRef = useRef<HTMLDivElement | null>(null);

    return (
    <div ref={containerRef} className="min-h-screen min-w-screen flex grid-cols-3 justify-center items-center z-10">
        <div className="flex-grow min-h-screen flex flex-col justify-center items-center "><div className="bg-amber-400">hscnsdjkvnf</div><div className="bg-amber-400">hscnsdjkvnf</div><div className="bg-amber-400">hscnsdjkvnf</div></div>
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="w-fit flex flex-col justify-center items-center gap-4">
                <div //tooltip bubble from shadcn!
                  >
                <div className="flex justify-center items-center w-52 h-32 rounded-full bg-amber-400"><span>My quote</span></div>
                    <div className="ml-28 w-0 h-0 border-[20px] border-transparent border-t-amber-400 border-b-0"></div>
                </div>
                <FaceTracker
                  className="flex flex-col justify-center items-center bg-amber-400"
                  containerRef={containerRef}
                />
            </div>
    </div>
        <div className="flex-grow min-h-screen flex flex-col justify-center items-center "><div className="bg-amber-400">hscnsdjkvnf</div><div className="bg-amber-400">hscnsdjkvnf</div><div className="bg-amber-400">hscnsdjkvnf</div></div>
    </div>
  );
}

export default App;
