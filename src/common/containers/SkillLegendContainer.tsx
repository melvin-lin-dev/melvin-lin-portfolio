import skillLevels from "@/lib/modules/skill/constants/skill-levels";
import type { ReactElement } from "react";

export default function SkillLegendContainer(): ReactElement {
    return (
        <div className="mt-8 flex justify-center">
            <div className="py-3 px-4 bg-slate-100 rounded-lg">
                <ul className="flex flex-wrap items-center justify-center -ml-4 -mt-2">
                    {skillLevels.map((threshold, i) => (
                        <li key={threshold.color} className="pl-4 pt-2 flex items-center space-x-2">
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 border border-gray-400 rounded-xs" style={{ backgroundColor: threshold.color }} aria-hidden="true"></div>
                            <span className="text-sm">
                                {threshold.label} ({i === 0 ? 0 : skillLevels[i - 1].max + 1} - {threshold.max})
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
