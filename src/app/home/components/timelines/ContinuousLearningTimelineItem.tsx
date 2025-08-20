import type { ContinuousLearning } from "@/lib/modules/timeline/models/continuous-learning.model";
import { ChevronDown } from "lucide-react";
import type { ReactElement } from "react";

interface ContinuousLearningTimelineItemProps {
    continuousLearning: ContinuousLearning;
    isActive: boolean;
}

export default function ContinuousLearningTimelineItem({ continuousLearning, isActive }: ContinuousLearningTimelineItemProps): ReactElement {
    const style: Record<string, Record<string, string>> = {
        content: {
            location: "text-gray-500",
        },
    };

    if (isActive) {
        style.content = {
            location: "text-gray-100",
        };
    }

    const collapsableId = `${continuousLearning.category}-collapsible-${continuousLearning.id}`;
    const showDetail = continuousLearning.descriptions.length > 4;

    return (
        <>
            <h3 className="sm:text-lg md:text-xl font-semibold">{continuousLearning.title}</h3>
            <div className={`relative mt-3 ${showDetail ? "pb-7" : ""}`}>
                {showDetail && (
                    <>
                        <input
                            type="checkbox"
                            id={collapsableId}
                            className="checked:[&+label_.icon]:rotate-180 checked:[&~ul]:max-h-[600px] sm:checked:[&~ul]:max-h-[400px] lg:checked:[&~ul]:max-h-[300px] checked:[&~ul]:after:h-0"
                            hidden
                        />
                        <label
                            htmlFor={collapsableId}
                            className={`absolute bottom-0 right-0 z-10 flex items-end space-x-1 cursor-pointer transition-all ${isActive ? "hover:text-white/60" : "text-cyan-500 hover:text-cyan-700"}`}
                        >
                            <span className="text-sm sm:text-base">Show More</span>
                            <ChevronDown className="icon w-4 h-4 sm:w-5 sm:h-5" />
                        </label>
                    </>
                )}
                <ul
                    className={`pl-5 list-disc space-y-0.5 ${showDetail ? "max-h-[130px]" : ""} overflow-hidden transition-all after:transition-all after:absolute after:bottom-0 after:left-0 after:w-full ${
                        showDetail ? "after:h-28" : "after:h-0"
                    } after:bg-gradient-to-t ${isActive ? "after:from-[#10b981]" : "after:from-white"} after:to-transparent`}
                >
                    {continuousLearning.descriptions.map((description) => (
                        <li key={description} className="text-sm md:text-base">
                            {description}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
