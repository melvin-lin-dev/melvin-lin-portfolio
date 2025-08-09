import * as LucideIcons from "lucide-react";
import * as CustomIcons from "@/components/icon/custom";
import type React from "react";

const iconMap: Record<string, React.ForwardRefExoticComponent<Omit<LucideIcons.LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>> = {
    ...(LucideIcons as Record<string, unknown>),
    LeetCode: CustomIcons.LeetCodeIcon,
    Codewars: CustomIcons.CodewarsIcon,
};

export const LucideIconMap: Record<string, React.ElementType> = Object.fromEntries(Object.entries(iconMap).map(([name, icon]) => [name.toLowerCase(), icon]));
