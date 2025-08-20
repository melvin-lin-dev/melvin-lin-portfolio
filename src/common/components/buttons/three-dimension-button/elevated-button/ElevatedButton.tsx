import clsx from "clsx";
import { cloneElement, isValidElement, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactElement, type ReactNode } from "react";
import styles from "./elevated-button.module.scss";

type ElevatedButtonProps = {
    children: ReactNode;
    tag?: "button" | "a";
    color?: "emerald" | "teal" | "cyan" | "white" | "amber" | "gray";
    asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
    AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ElevatedButton({ children, tag = "button", color = "emerald", asChild = false, className, ...props }: ElevatedButtonProps): ReactElement {
    const baseClasses = clsx(styles.elevated, styles[color], className);

    if (asChild && isValidElement(children)) {
        const child = children as ReactElement<{ className: string }>;
        return cloneElement(child, {
            className: clsx(baseClasses, child.props.className),
            ...props,
        });
    }

    const Button = tag;

    return (
        <Button className={baseClasses} {...props}>
            {children}
        </Button>
    );
}
