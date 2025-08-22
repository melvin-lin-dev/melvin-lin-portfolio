import clsx from "clsx";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactElement, ReactNode } from "react";
import styles from "./three-dimension-button.module.scss";

type ThreeDimensionButtonProps = {
    children: ReactNode;
    tag?: "button" | "a";
    color?: "emerald" | "teal" | "cyan" | "white" | "amber" | "gray";
    paddingClassName?: string;
    asChild?: boolean;
    isLoading?: boolean;
    loaderMode?: "default" | "replace";
    loaderClassName?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
    AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ThreeDimensionButton({
    children,
    tag = "button",
    color = "emerald",
    isLoading = false,
    loaderMode = "default",
    loaderClassName = 'w-4 h-4 border-2',
    disabled,
    className,
    paddingClassName,
    ...props
}: ThreeDimensionButtonProps): ReactElement {
    const isDisabled = disabled || isLoading;

    const Spinner = (
        <span className={clsx(styles.loader, "flex items-center justify-center transition-[padding]", isLoading && loaderMode === "default" ? "pr-3 " : "pr-0")}>
            <span className={clsx("animate-spin rounded-full inline-block transition-[width,height,border]", isLoading ? loaderClassName : "w-0 h-0 border-0")} />
        </span>
    );

    const Button = tag;

    return (
        <Button className={clsx(styles.pushable, styles[color], className)} {...props} {...(tag === "button" ? { disabled: isDisabled } : {})}>
            <span className={styles.shadow}></span>
            <span className={styles.edge}></span>
            <span className={clsx(styles.front, paddingClassName)}>
                {loaderMode === "default" ? (
                    <span className="flex items-center justify-center">
                        {Spinner}
                        {children}
                    </span>
                ) : (
                    <>{isLoading ? Spinner : children}</>
                )}
            </span>
        </Button>
    );
}
