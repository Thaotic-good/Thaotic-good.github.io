import React, { useEffect } from "react";
import { useRef } from "react";
import GazeTracker from "./components/ui/GazeTracker";
import {
  Item,
  ItemGroup,
  ItemMedia,
  ItemContent,
  ItemDescription,
  ItemActions,
  ItemFooter,
  ItemSeparator,
} from "./components/common/Item";
import HomeItem from "./components/pages/home/HomeItem";

const App = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [welcomeState, setWelcomeState] = React.useState<string>('Hi, I\'m Thao and I\'m a Frontend developer')

    useEffect(() => {
      const timer = setTimeout(() => setWelcomeState('Do you want a web just like this?'), 900)
      return () => clearTimeout(timer)
    },[])

  return (
    <div
      ref={containerRef}
      className="min-h-screen min-w-screen grid grid-cols-1 md:grid-cols-3 items-stretch md:items-center z-10"
    >
      {/* Left column: a creative list using ItemGroup */}
      <div className="flex-grow min-h-screen flex flex-col justify-center items-stretch px-6">
        <ItemGroup className="gap-2">
          <HomeItem
            variant="muted"
            className="bg-amber-50"
            icon={"💡"}
            title={<>Do you want to see my CV?</>}
            actions={
              <div className="flex gap-2 justify-end items-center">
                <ItemActions>
                  <button className="text-xs px-2 py-1 rounded bg-amber-200 hover:bg-amber-300">View</button>
                </ItemActions>
                <ItemActions>
                  <button className="text-xs px-2 py-1 rounded bg-amber-200 hover:bg-amber-300">Get</button>
                </ItemActions>
              </div>
            }
          />
          <ItemSeparator />
          <HomeItem
            icon={"📚"}
            title={<>Certifications</>}
            description={<>Currently none, a self taught pro</>}
          />
          <ItemSeparator />
          <HomeItem
            variant="outline"
            title={<>Get in touch</>}
            actions={
              <ItemActions className='border-none'>
                <button className="text-xs px-2 py-1 rounded bg-amber-200 hover:bg-amber-300">
                  <ItemMedia className='border-none' variant="icon">🧭</ItemMedia>
                </button>
                <button className="text-xs px-2 py-1 rounded bg-amber-200 hover:bg-amber-300">
                  <ItemMedia className='border-none' variant="icon">🧭</ItemMedia>
                </button>
                <button className="text-xs px-2 py-1 rounded bg-amber-200 hover:bg-amber-300">
                  <ItemMedia className='border-none' variant="icon">🧭</ItemMedia>
                </button>
              </ItemActions>
            }
          />
        </ItemGroup>
      </div>

      {/* Center column: the face tracker inside a richer Item layout */}
      <div className="min-h-screen w-full flex flex-col justify-center items-center">
        <Item className="w-full flex flex-col gap-4 p-6">
          <ItemContent className="w-full flex flex-col items-center gap-4">
            {/* Tooltip-like quote bubble */}
            <div>
              <div className="flex p-4 text-[1rem] text-center justify-center items-center w-56 h-28 rounded-full bg-amber-400 text-slate-900 font-medium">
                <span>{welcomeState}</span>
              </div>
              <div className="ml-32 w-0 h-0 border-[20px] border-transparent border-t-amber-400 border-b-0" />
            </div>

            <GazeTracker
              className="w-full flex justify-center items-center rounded-md p-2"
              containerRef={containerRef}
            />
          </ItemContent>
            <ItemFooter>
                <ItemDescription className="text-xs">
                    Tip: Make your own face tracker, it's easy!
                </ItemDescription>
            </ItemFooter>

        </Item>
      </div>

      {/* Right column: another small creative feed */}
      <div className="flex-grow min-h-screen flex flex-col justify-center items-stretch px-6">
        <ItemGroup className="gap-2">
          <HomeItem
            variant="muted"
            icon={"🧪"}
            title={<>Sandbox Experiments</>}
            description={<>Try new layouts using Item primitives.</>}
          />
          <ItemSeparator />
          <HomeItem
            variant="outline"
            icon={"⚙️"}
            title={<>Project 1</>}
            description={<>Tweak responsiveness and style tokens.</>}
            actions={
              <ItemActions>
                <button className="text-xs px-2 py-1 rounded border hover:bg-muted">Open</button>
              </ItemActions>
            }
          />
          <ItemSeparator />
          <HomeItem
            variant="outline"
            icon={"⚙️"}
            title={<>Project 2</>}
            description={<>Tweak responsiveness and style tokens.</>}
            actions={
              <ItemActions>
                <button className="text-xs px-2 py-1 rounded border hover:bg-muted">Open</button>
              </ItemActions>
            }
          />
        </ItemGroup>
      </div>
    </div>
  );
};

export default App;
