"use client";

import { defaultStyle, defaultTransition } from "@/lib/utils/framer-motion/transitions";
import { motion, type Variants } from "framer-motion";
import type { ElementType, ReactNode } from "react";

type AnimateProps<T extends keyof typeof motion> = {
    tag?: T;
    children?: ReactNode;
    variants?: Variants;
    delay?: number;
    once?: boolean;
    amount?: number;
    condition?: boolean;
    isWillChange?: boolean;

    delayChildren?: number;
    staggerChildren?: number;
} & React.ComponentPropsWithoutRef<(typeof motion)[T]>;

export default function Animate<T extends keyof typeof motion>({
    children,
    tag,
    variants = {},
    delay = 0,
    once = true,
    amount = 0.3,
    delayChildren,
    staggerChildren,
    condition,
    isWillChange,
    ...otherProps
}: AnimateProps<T>) {
    const enhancedVariants = {
        ...variants,
        visible:
            typeof variants.visible === "function"
                ? variants.visible
                : {
                      ...variants.visible,
                      transition: {
                          ...(variants.visible?.transition || defaultTransition(delay)),
                          ...(staggerChildren ? { staggerChildren } : {}),
                          ...(delayChildren ? { delayChildren } : {}),
                      },
                  },
    };

    const props = {
        ...otherProps,
        ...(condition != undefined ? { animate: condition ? "visible" : "hiddenReversed", exit: "hidden" } : { whileInView: "visible" }),
    };

    const Tag = motion[tag || "div"] as ElementType;

    return (
        <Tag variants={enhancedVariants} initial="hidden" viewport={{ once, amount }} transition={defaultTransition(delay)} style={{ ...(isWillChange ? defaultStyle : {}) }} {...props}>
            {children}
        </Tag>
    );
}
