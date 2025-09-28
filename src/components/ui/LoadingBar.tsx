import React from "react";

function LoadingBar() {
  return (
    <div className="flex items-center justify-between border-4 border-black bg-white m-2 p-2">
      <div className="h-4 w-[3%] bg-gradient-to-tr from-blue-500 to-pink-300" />
      <p className="text-black font-bold text-base m-0">Programmer brain: 3% loading...</p>
    </div>
  );
}

export default LoadingBar;
