import Animate from "@/components/framer-motion/Animate";
import AnimateChild from "@/components/framer-motion/AnimateChild";
import { type TimelineCategory, timelineColorMeta, type TimelineMeta, timelineMeta } from "@/lib/modules/timeline/enums/timeline-category.enum";
import { fadeUp } from "@/utils/framer-motion/motions";
import clsx from "clsx";
import { MousePointerClick } from "lucide-react";
import type { ReactElement } from "react";

const timelineMetaEntries = Object.entries(timelineMeta) as [TimelineCategory, TimelineMeta][];

type TimelineCategoryLegendContainerProps = {
    selectedCategories: Set<TimelineCategory>;
    toggleCategory: (category: TimelineCategory) => void;
};

export default function TimelineCategoryLegendContainer({ selectedCategories, toggleCategory }: TimelineCategoryLegendContainerProps): ReactElement {
    return (
        <div className="relative py-2 px-3 bg-slate-100 rounded-lg">
            <MousePointerClick className="absolute bottom-0 right-0 translate-1/3 w-5 h-5 text-gray-500" />
            <Animate staggerChildren={0.15} className="flex flex-wrap items-center justify-center -ml-3 -mt-2">
                {timelineMetaEntries.map(([category, data]) => {
                    const entryColorMeta = timelineColorMeta[category];
                    return (
                        <AnimateChild key={category} variants={fadeUp} className="pl-3 pt-2">
                            <button
                                className={clsx("px-2 py-1 flex items-center space-x-2 rounded cursor-pointer transition hover:bg-teal-500/20", selectedCategories.has(category) ? "opacity-100" : "opacity-50")}
                                onClick={() => toggleCategory(category)}
                            >
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 border rounded-xs" style={{ backgroundColor: entryColorMeta.primary, borderColor: entryColorMeta.secondary }} aria-hidden="true"></div>
                                <span className="text-sm">{data.text}</span>
                            </button>
                        </AnimateChild>
                    );
                })}
            </Animate>
        </div>
    );
}
