import clsx from "clsx";
import { cloneElement, isValidElement, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactElement, type ReactNode } from "react";
import styles from "./elevated-button.module.scss";

type ElevatedButtonProps = {
    children: ReactNode;
    tag?: "button" | "a";
    color?: "emerald" | "teal" | "cyan" | "white" | "amber" | "gray";
    asChild?: boolean;
    isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
    AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ElevatedButton({ children, tag = "button", color = "emerald", asChild = false, isLoading = false, disabled, className, ...props }: ElevatedButtonProps): ReactElement {
    const baseClasses = clsx(styles.elevated, styles[color], className);

    const isDisabled = disabled || isLoading;

    const Spinner = (
        <span className={clsx("flex items-center justify-center transition-[padding]", isLoading ? "pr-3 " : "pr-0")}>
            <span className={clsx("animate-spin rounded-full border-t-transparent border-white inline-block transition-[width,height,border]", isLoading ? "w-4 h-4 border-2" : "w-0 h-0 border-0")} />
        </span>
    );

    if (asChild && isValidElement(children)) {
        const child = children as ReactElement<{ className: string; disabled: boolean; children: ReactNode }>;
        return cloneElement(child, {
            ...props,
            className: clsx(baseClasses, child.props.className),
            disabled: isDisabled,
            children: (
                <span className="flex items-center space-x-3">
                    {Spinner}
                    {child.props.children}
                </span>
            ),
        });
    }

    const Button = tag;

    return (
        <Button className={baseClasses} {...props} {...(tag === "button" ? { disabled: isDisabled } : {})}>
            <span className="flex items-center justify-center">
                {Spinner}
                {children}
            </span>
        </Button>
    );
}
