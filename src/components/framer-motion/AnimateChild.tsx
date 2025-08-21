"use client";

import { defaultStyle } from "@/utils/framer-motion/transitions";
import { motion, type Variants } from "framer-motion";
import type { ElementType, ReactNode } from "react";

type AnimateChildProps<T extends keyof typeof motion> = {
    children: ReactNode;
    tag?: T;
    variants?: Variants;
    className?: string;
} & React.ComponentPropsWithoutRef<(typeof motion)[T]>;

export default function AnimateChild<T extends keyof typeof motion>({ children, tag, variants = {}, className, ...props }: AnimateChildProps<T>) {
    const Tag = motion[tag || "div"] as ElementType;

    return (
        <Tag className={className} variants={variants} style={defaultStyle} {...props}>
            {children}
        </Tag>
    );
}
