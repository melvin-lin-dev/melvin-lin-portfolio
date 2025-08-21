import Animate from "@/components/framer-motion/Animate";
import { fadeUp } from "@/utils/framer-motion/motions";
import { type motion, type Variants } from "framer-motion";
import type { ReactElement, ReactNode } from "react";
import styles from "./text-3d.module.scss";
import clsx from "clsx";

type Text3DProps = {
    tag: keyof typeof motion;
    children: ReactNode;
    variants?: Variants;
    className?: string;
};

export default function Text3D({ tag, children, variants = fadeUp, className }: Text3DProps): ReactElement {
    return (
        <Animate tag={tag} variants={variants} className={clsx(styles.text3D, className)}>
            {children}
        </Animate>
    );
}
