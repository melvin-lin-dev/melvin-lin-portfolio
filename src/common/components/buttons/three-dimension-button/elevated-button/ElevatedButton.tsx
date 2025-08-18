import clsx from "clsx";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactElement, ReactNode } from "react";
import styles from "./elevated-button.module.scss";

type ElevatedButtonProps = {
    children: ReactNode;
    tag?: "button" | "a";
    color?: "emerald" | "teal" | "cyan" | "white" | "amber" | "gray";
} & ButtonHTMLAttributes<HTMLButtonElement> &
    AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ElevatedButton({ children, tag = "button", color = "emerald", className, ...props }: ElevatedButtonProps): ReactElement {
    const Button = tag;

    return (
        <Button className={clsx(styles.elevated, styles[color], className)} {...props}>
            {children}
        </Button>
    );
}
