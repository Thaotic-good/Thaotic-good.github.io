import { useState, useEffect, useRef, useCallback } from 'react';

const IDLE_DELAY = 2000; // ms before ghost appears
const SPEED = 0.25;      // spline-segments per second — tune to taste

// S-shaped reading path: [x, y] as fractions of viewport dimensions.
// Traces: left→right, drop, right→left, drop, left→right, drop, right→left.
const WAYPOINTS: [number, number][] = [
    [0.05, 0.13],  // start: top-left
    [0.95, 0.13],  // → sweep row 1
    [0.95, 0.38],  // drop at right edge
    [0.05, 0.38],  // ← sweep row 2
    [0.05, 0.63],  // drop at left edge
    [0.95, 0.63],  // → sweep row 3
    [0.95, 0.88],  // drop at right edge
    [0.05, 0.88],  // ← sweep row 4 (end)
];

/** Standard uniform Catmull-Rom spline segment. */
function catmullRom(
    p0: [number, number],
    p1: [number, number],
    p2: [number, number],
    p3: [number, number],
    t: number
): [number, number] {
    const t2 = t * t;
    const t3 = t2 * t;
    return [
        0.5 * (2*p1[0] + (-p0[0]+p2[0])*t + (2*p0[0]-5*p1[0]+4*p2[0]-p3[0])*t2 + (-p0[0]+3*p1[0]-3*p2[0]+p3[0])*t3),
        0.5 * (2*p1[1] + (-p0[1]+p2[1])*t + (2*p0[1]-5*p1[1]+4*p2[1]-p3[1])*t2 + (-p0[1]+3*p1[1]-3*p2[1]+p3[1])*t3),
    ];
}

/** Evaluate the global spline at parameter t ∈ [0, WAYPOINTS.length - 1]. */
function getSplinePos(t: number): { x: number; y: number } {
    const n = WAYPOINTS.length;
    const maxT = n - 1;
    const clamped = Math.min(t, maxT - 0.0001);
    const seg = Math.min(Math.floor(clamped), maxT - 1);
    const localT = clamped - seg;

    // Clamp neighbour indices at the endpoints (no wrap-around)
    const p0 = WAYPOINTS[Math.max(0, seg - 1)];
    const p1 = WAYPOINTS[seg];
    const p2 = WAYPOINTS[Math.min(n - 1, seg + 1)];
    const p3 = WAYPOINTS[Math.min(n - 1, seg + 2)];

    const [px, py] = catmullRom(p0, p1, p2, p3, localT);
    return {
        x: Math.min(Math.max(px, 0), 1) * window.innerWidth,
        y: Math.min(Math.max(py, 0), 1) * window.innerHeight,
    };
}

export function useIdleGhost() {
    const [isIdle, setIsIdle] = useState(false);
    const [ghostPos, setGhostPos] = useState({
        x: WAYPOINTS[0][0] * window.innerWidth,
        y: WAYPOINTS[0][1] * window.innerHeight,
    });

    const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const rafRef = useRef<number | null>(null);
    const tRef = useRef(0);
    const lastTimestampRef = useRef<number | null>(null);

    const resetIdle = useCallback(() => {
        setIsIdle(false);
        if (idleTimer.current) clearTimeout(idleTimer.current);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        idleTimer.current = setTimeout(() => setIsIdle(true), IDLE_DELAY);
    }, []);

    // Attach activity listeners
    useEffect(() => {
        const passiveEvents = ['keydown', 'scroll', 'touchstart', 'click'];
        const onMouseMove = () => resetIdle();

        window.addEventListener('mousemove', onMouseMove);
        passiveEvents.forEach(ev => window.addEventListener(ev, resetIdle));
        idleTimer.current = setTimeout(() => setIsIdle(true), IDLE_DELAY);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            passiveEvents.forEach(ev => window.removeEventListener(ev, resetIdle));
            if (idleTimer.current) clearTimeout(idleTimer.current);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [resetIdle]);

    // Spline loop — only active while isIdle === true
    useEffect(() => {
        if (!isIdle) return;

        // Always restart the S-sweep from the beginning
        tRef.current = 0;
        lastTimestampRef.current = null;
        const maxT = WAYPOINTS.length - 1;

        const loop = (timestamp: number) => {
            if (lastTimestampRef.current === null) {
                lastTimestampRef.current = timestamp;
            }
            // Cap dt to avoid a large jump after a tab becomes visible again
            const dt = Math.min((timestamp - lastTimestampRef.current) / 1000, 0.1);
            lastTimestampRef.current = timestamp;

            tRef.current += SPEED * dt;
            if (tRef.current >= maxT) tRef.current -= maxT; // seamless loop
            setGhostPos(getSplinePos(tRef.current));

            rafRef.current = requestAnimationFrame(loop);
        };

        rafRef.current = requestAnimationFrame(loop);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [isIdle]);

    return { isIdle, ghostPos };
}
