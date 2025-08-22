import type { Transition } from "framer-motion";

export const defaultTransition = (delay = 0): Transition => ({
    delay,
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
});


export const defaultStyle = { willChange: "opacity, transform" };