import type { Stack } from "@/lib/shared/types/stack";
import type { ReactElement } from "react";
import StackBadge from "./StackBadge";

type StackBadgesProps = {
    stacks: Partial<Record<Stack, string[]>>;
    isColorInverted?: boolean;
    className?: string;
};

export default function StackBadges({ stacks, isColorInverted = false, className = "" }: StackBadgesProps): ReactElement {
    return (
        <ul className={`-ml-2 mt-3 flex flex-wrap items-center ${className}`}>
            {Object.entries(stacks).map(([stackType, values]) =>
                values.map((value) => (
                    <li key={value} className="pl-2 pt-3">
                        <StackBadge stack={value} type={stackType} isColorInverted={isColorInverted} />
                    </li>
                ))
            )}
        </ul>
    );
}
