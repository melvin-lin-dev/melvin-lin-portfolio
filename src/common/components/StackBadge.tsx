import STACK_COLORS from "@/lib/shared/constants/stack-colors";
import type { Stack } from "@/lib/shared/types/stack";
import type { ReactElement } from "react";

type StackBadgeProps = {
    stack: string;
    type: string;
    isColorInverted?: boolean;
};

export default function StackBadge({ stack, type, isColorInverted = false }: StackBadgeProps): ReactElement {
    return (
        <span
            className={`py-0.5 px-2 text-xs font-medium rounded-full`}
            style={{
                color: isColorInverted ? STACK_COLORS[type as Stack] : "white",
                backgroundColor: isColorInverted ? "white" : STACK_COLORS[type as Stack],
            }}
        >
            {stack}
        </span>
    );
}
