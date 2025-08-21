import Animate from "@/components/framer-motion/Animate";
import AnimateChild from "@/components/framer-motion/AnimateChild";
import { type TimelineCategory, timelineColorMeta, timelineMeta } from "@/lib/modules/timeline/enums/timeline-category.enum";
import { fadeUp } from "@/utils/framer-motion/motions";
import type { ReactElement } from "react";

const timelineMetaEntries = Object.entries(timelineMeta);

export default function TimelineCategoryLegendContainer(): ReactElement {
    return (
        <div className="py-3 px-4 bg-slate-100 rounded-lg">
            <Animate staggerChildren={0.15} className="flex flex-wrap items-center justify-center -ml-4 -mt-2">
                {timelineMetaEntries.map(([category, data]) => {
                    const entryColorMeta = timelineColorMeta[category as TimelineCategory];
                    return (
                        <AnimateChild key={category} variants={fadeUp} className="pl-4 pt-2 flex items-center space-x-2">
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 border rounded-xs" style={{ backgroundColor: entryColorMeta.primary, borderColor: entryColorMeta.secondary }} aria-hidden="true"></div>
                            <span className="text-sm">{data.text}</span>
                        </AnimateChild>
                    );
                })}
            </Animate>
        </div>
    );
}
