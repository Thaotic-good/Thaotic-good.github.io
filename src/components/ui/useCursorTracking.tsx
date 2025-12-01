import { useState, useEffect, useCallback, useRef } from 'react';

// Allow Webpack's require.context in CRA
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const require: any;

// Grid configuration (must match your generation parameters)
const P_MIN = -15;
const P_MAX = 15;
const STEP = 3;
const SIZE = 256;

/**
 * Converts normalized coordinates [-1, 1] to grid coordinates
 */
function quantizeToGrid(val:number) {
    const raw = P_MIN + (val + 1) * (P_MAX - P_MIN) / 2; // [-1,1] -> [-15,15]
    const snapped = Math.round(raw / STEP) * STEP;
    return Math.max(P_MIN, Math.min(P_MAX, snapped));
}

/**
 * Converts grid coordinates to filename format
 */
function gridToFilename(px: number, py: number) {
    const sanitize = (val: number) => val.toString().replace('-', 'm').replace('.', 'p');
    return `gaze_px${sanitize(px)}p0_py${sanitize(py)}p0_${SIZE}.webp`;
}

export type GazeTrackingResult = {
    currentImage: string | null;
    isLoading: boolean;
    error: Error | null;
};

/**
 * Custom hook for gaze tracking
 * @param {React.RefObject} containerRef - Reference to the container element
 * @param {string} basePath - Fallback base path to the directory containing gaze images (should end with a trailing slash), e.g. '/assets/following_gaze/faces/'
 * @returns {Object} { currentImage, isLoading, error }
 */
// const DEFAULT_BASE_PATH = (typeof process !== 'undefined' && (process as any).env && (process as any).env.PUBLIC_URL ? (process as any).env.PUBLIC_URL : '') + '/assets/following_gaze/faces/';
const DEFAULT_BASE_PATH = `${import.meta.env.BASE_URL}assets/following_gaze/faces/`;

export function useCursorTracking(
    containerRef: React.RefObject<HTMLDivElement>,
    basePath: string = DEFAULT_BASE_PATH
): GazeTrackingResult {
    const [currentImage, setCurrentImage] = useState<string | null>(null);
    const [isLoading] = useState<boolean>(false);
    const [error] = useState<Error | null>(null);

    // Build a map of filename -> URL for images under src using Vite's import.meta.glob
    const filenameToUrl: Record<string, string> = {};
    try {
        const modules = import.meta.glob('../../assets/following_gaze/faces/*.webp', { as: 'url', eager: true });
        Object.keys(modules).forEach((path) => {
            const parts = path.split('/');
            const name = parts[parts.length - 1];
            // modules[path] is a URL string when using { as: 'url', eager: true }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            filenameToUrl[name] = (modules as any)[path] as string;
        });
    } catch (_) {
        // ignore if glob is unavailable (should not happen in Vite); fallback to basePath
    }

    // Preload all gaze images on mount to warm the HTTP and decode cache
    const preloadedRef = useRef<HTMLImageElement[]>([]);
    useEffect(() => {
        const imgs: HTMLImageElement[] = [];
        for (let py = P_MIN; py <= P_MAX; py += STEP) {
            for (let px = P_MIN; px <= P_MAX; px += STEP) {
                const filename = gridToFilename(px, py);
                const url = filenameToUrl[filename] || `${basePath}${filename}`;
                const img = new Image();
                img.loading = 'eager';
                img.decoding = 'async';
                img.src = url;
                imgs.push(img);
            }
        }
        preloadedRef.current = imgs;
        // no cleanup required; keep images in memory to preserve cache
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [basePath]);


    const updateGaze = useCallback((clientX: number, clientY: number) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Convert to normalized coordinates [-1, 1]
        const nx = (clientX - centerX) / (rect.width / 2);
        const ny = (centerY - clientY) / (rect.height / 2);

        // Clamp to [-1, 1] range
        const clampedX = Math.max(-1, Math.min(1, nx));
        const clampedY = Math.max(-1, Math.min(1, ny));

        // Convert to grid coordinates
        const px = quantizeToGrid(clampedX);
        const py = quantizeToGrid(clampedY);

        // Generate filename
        const filename = gridToFilename(px, py);
        const resolvedUrl = filenameToUrl[filename] || `${basePath}${filename}`;

        setCurrentImage(resolvedUrl);
    }, [basePath, containerRef]);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        updateGaze(e.clientX, e.clientY);
    }, [updateGaze]);

    const handleTouchMove = useCallback((e: TouchEvent) => {
        if (e.touches.length > 0) {
            const touch = e.touches[0];
            updateGaze(touch.clientX, touch.clientY);
        }
    }, [updateGaze]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Add event listeners
        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('touchmove', handleTouchMove, { passive: true });

        // Set initial center gaze
        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        updateGaze(centerX, centerY);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('touchmove', handleTouchMove);
        };
    }, [containerRef, handleMouseMove, handleTouchMove, updateGaze]);

    return { currentImage, isLoading, error };
}

export default useCursorTracking;
