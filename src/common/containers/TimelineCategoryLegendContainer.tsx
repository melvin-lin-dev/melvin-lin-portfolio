import Animate from "@/components/framer-motion/Animate";
import AnimateChild from "@/components/framer-motion/AnimateChild";
import { TimelineMeta } from "@/lib/modules/timeline/enums/timeline-category.enum";
import { fadeUp } from "@/lib/utils/framer-motion/motions";
import type { ReactElement } from "react";

export default function TimelineCategoryLegendContainer(): ReactElement {
    return (
        <div className="mt-8 flex justify-center">
            <div className="py-3 px-4 bg-slate-100 rounded-lg">
                <Animate staggerChildren={0.15} className="flex flex-wrap items-center justify-center -ml-4 -mt-2">
                    {Object.entries(TimelineMeta).map(([category, data]) => (
                        <AnimateChild key={data.style.icon.color} variants={fadeUp} className="pl-4 pt-2 flex items-center space-x-2">
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 border border-gray-400 rounded-xs" style={{ backgroundColor: data.style.icon.backgroundColor }} aria-hidden="true"></div>
                            <span className="text-sm">{category}</span>
                        </AnimateChild>
                    ))}
                </Animate>
            </div>
        </div>
    );
}
