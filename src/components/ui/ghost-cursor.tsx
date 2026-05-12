import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GhostCursorProps {
    isIdle: boolean;
    x: number;
    y: number;
}

export function GhostCursor({ isIdle, x, y }: GhostCursorProps) {
    return (
        <AnimatePresence>
            {isIdle && (
                <motion.div
                    key="ghost-cursor"
                    className="pointer-events-none fixed z-[9999]"
                    style={{ left: x, top: y, translateX: '-50%', translateY: '-50%' }}
                    animate={{ left: x, top: y }}
                    transition={{ type: 'spring', stiffness: 60, damping: 20, mass: 1 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.15 } }}
                >
                    {/* Outer ring */}
                    <div className="w-8 h-8 rounded-full border border-white/30 absolute -translate-x-1/2 -translate-y-1/2" />
                    {/* Inner glowing dot */}
                    <div className="w-2 h-2 rounded-full bg-white/60 absolute -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_2px_rgba(255,255,255,0.4)]" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
