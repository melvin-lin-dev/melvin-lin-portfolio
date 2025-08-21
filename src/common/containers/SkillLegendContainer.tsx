import Animate from "@/components/framer-motion/Animate";
import AnimateChild from "@/components/framer-motion/AnimateChild";
import skillLevels from "@/lib/modules/skill/constants/skill-levels";
import { fadeUp } from "@/utils/framer-motion/motions";
import { HelpCircle } from "lucide-react";
import type { ReactElement } from "react";

export default function SkillLegendContainer(): ReactElement {
    return (
        <div className="mt-8 flex justify-center">
            <div className="py-3 px-4 bg-slate-100 rounded-lg">
                <Animate staggerChildren={.15} className="flex flex-wrap items-center justify-center -ml-4 -mt-2">
                    {skillLevels.map((skillLevel, i) => (
                        <AnimateChild key={skillLevel.color} variants={fadeUp} className="pl-4 pt-2 flex items-center space-x-2">
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 border border-gray-400 rounded-xs" style={{ backgroundColor: skillLevel.color }} aria-hidden="true"></div>
                            <span className="text-sm">
                                {skillLevel.label} ({i === 0 ? 0 : skillLevels[i - 1].max + 1} - {skillLevel.max})
                            </span>
                        </AnimateChild>
                    ))}
                    <AnimateChild variants={fadeUp} className="pl-4 pt-2 w-full sm:w-auto">
                        <div className="relative group">
                            <HelpCircle className="hidden sm:block w-4 h-4 sm:w-4.5 sm:h-4.5 text-emerald-600 group-hover:text-teal-600" />
                            <div className="sm:absolute top-full right-0 lg:right-1/2 sm:translate-x-1/3 md:translate-none lg:translate-x-1/3 xl:translate-x-1/2 z-10 mt-2 text-xs sm:text-sm bg-white text-gray-700 rounded-xl border sm:border-0 border-gray-200 w-full sm:w-100 overflow-hidden shadow sm:shadow-lg transition-all sm:max-h-0 sm:group-hover:max-h-70 group-hover:border">
                                <div className="text-gray-700 py-1.5 px-2.5"><span className="text-red-600">*</span> Skill levels are illustrative and meant as a general guide.</div>
                                <table className="w-full">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="px-3 py-2 text-left font-medium">Proficiency</th>
                                            <th className="px-3 py-2 text-left font-medium">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {skillLevels.map((skillLevel, i) => (
                                            <tr key={skillLevel.max}>
                                                <td className="px-3 py-2 font-medium" style={{ backgroundColor: skillLevel.color }}>
                                                    {i === 0 ? 0 : skillLevels[i - 1].max + 1} - {skillLevel.max}
                                                </td>
                                                <td className="px-3 py-2" style={{ backgroundColor: `rgba(170, 170, 170, ${i * .1})` }}>{skillLevel.description}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </AnimateChild>
                </Animate>
            </div>
        </div>
    );
}
