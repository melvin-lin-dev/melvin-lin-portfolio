"use client";

import { defaultStyle } from "@/lib/utils/framer-motion/transitions";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type AnimateChildProps = {
    children: ReactNode;
    tag?: keyof HTMLElementTagNameMap;
    variants?: Variants;
    className?: string;
};

export default function AnimateChild({ children, tag = "div", variants = {}, className }: AnimateChildProps) {
    const Tag = motion[tag];

    return (
        <Tag className={className} variants={variants} style={defaultStyle}>
            {children}
        </Tag>
    );
}
