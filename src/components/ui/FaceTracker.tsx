import React from 'react';
import useGazeTracking from './useGazeTracking';
import { cn } from "../../utils/utils";

type FaceTrackerProps = {
    className?: string;
    basePath?: string;
    containerRef: React.RefObject<HTMLDivElement>;
}

/**
 * FaceTracker Component
 * Displays a face that follows mouse/touch movement
 */
const DEFAULT_BASE_PATH = `${import.meta.env.BASE_URL}src/assets/face_looker/faces/`;
export default function FaceTracker({
    className = '',
    basePath = DEFAULT_BASE_PATH,
    containerRef,
}: FaceTrackerProps) {

    const { currentImage, isLoading, error } = useGazeTracking(containerRef, basePath);

    if (error) {
        return (
          <div className="flex items-center justify-center h-[200px] text-red-600 bg-red-50 border border-red-200 rounded p-5">
              Error loading face images: {error.message}
          </div>
        );
    }

    return (
      <div
        className={cn(`relative w-full h-full bg-transparent overflow-hidden`, className)}
      >
          {currentImage && (
            <img
              src={currentImage}
              alt="Face following gaze"
              className="w-52 h-52 object-contain transition-opacity rounded-full duration-100 ease-out select-none pointer-events-none"
            />
          )}

          {isLoading && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-600 text-sm">
                Loading face...
            </div>
          )}


      </div>
    );
}