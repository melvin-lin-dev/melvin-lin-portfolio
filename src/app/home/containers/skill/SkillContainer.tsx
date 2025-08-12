import { getSkill } from "@/lib/modules/skill/services/skill.service";
import type { ReactElement } from "react";
import SkillToolItem from "../../components/SkillToolItem";
import SkillWindRoseChartContainer from "./WindRoseChartContainer";

export default function SkillContainer(): ReactElement {
    const skill = getSkill();

    return (
        <div className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-6">
                <div>
                    <h3 className="mb-5 text-lg sm:text-xl md:text-2xl font-semibold text-center text-gray-700">Core Technologies</h3>
                    <div className="text-center">
                        <SkillWindRoseChartContainer skillProficiencies={skill.languages} />
                    </div>
                </div>
                <div>
                    <h3 className="mb-5 text-lg sm:text-xl md:text-2xl font-semibold text-center text-gray-700">Frameworks</h3>
                    <div className="text-center">
                        <SkillWindRoseChartContainer skillProficiencies={skill.frameworks} />
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-gray-700">Dev Tools</h3>
                <div className="mt-1 flex flex-wrap justify-center -ml-4">
                    {skill.tools.map((skillTool) => (
                        <div key={skillTool.name} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 pl-4 pt-4">
                            <SkillToolItem skillTool={skillTool} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
