import clsx from "clsx";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactElement, ReactNode } from "react";
import styles from "./three-dimension-button.module.scss";

type ThreeDimensionButtonProps = {
    children: ReactNode;
    tag?: "button" | "a";
    color?: "emerald" | "teal" | "cyan" | "white" | "amber" | "gray";
    paddingClassName?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
    AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ThreeDimensionButton({ children, tag = "button", color = "emerald", className, paddingClassName, ...props }: ThreeDimensionButtonProps): ReactElement {
    const Button = tag;

    return (
        <Button className={clsx(styles.pushable, styles[color], className)} {...props}>
            <span className={styles.shadow}></span>
            <span className={styles.edge}></span>
            <span className={clsx(styles.front, paddingClassName)}>{children}</span>
        </Button>
    );
}
