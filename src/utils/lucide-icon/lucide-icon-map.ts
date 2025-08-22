import * as CustomIcons from "@/components/icon/custom";
import * as LucideIcons from "lucide-react";
import type { ElementType, ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

const iconMap: Record<string, ElementType<SVGProps<SVGSVGElement>> | ForwardRefExoticComponent<Omit<LucideIcons.LucideProps, "ref"> & RefAttributes<SVGSVGElement>>> = {
    ...(LucideIcons as Record<string, unknown>),
    LeetCode: CustomIcons.LeetCodeIcon,
    Codewars: CustomIcons.CodewarsIcon,
};

export const LucideIconMap: Record<string, ElementType> = Object.fromEntries(Object.entries(iconMap).map(([name, icon]) => [name.toLowerCase(), icon]));
