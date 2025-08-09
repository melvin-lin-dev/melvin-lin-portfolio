import { getSkill } from "@/lib/modules/skill/services/skill.service";
import type { ReactElement } from "react";
import SkillToolItem from "../../components/SkillToolItem";
import SkillWindRoseChartContainer from "./WindRoseChartContainer";

export default function SkillContainer(): ReactElement {
    const skill = getSkill();

    return (
        <div className="mt-6">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h3 className="mb-5 text-2xl font-semibold text-center text-gray-700">Core Technologies</h3>
                    <SkillWindRoseChartContainer skillProficiencies={skill.languages} />
                </div>
                <div>
                    <h3 className="mb-5 text-2xl font-semibold text-center text-gray-700">Frameworks</h3>
                    <SkillWindRoseChartContainer skillProficiencies={skill.frameworks} />
                </div>
            </div>
            <div className="mt-6">
                <h3 className="text-2xl font-semibold text-center text-gray-700">Dev Tools</h3>
                <div className="mt-5 flex space-x-4">
                    {skill.tools.map((skillTool) => (
                        <SkillToolItem key={skillTool.name} skillTool={skillTool} />
                    ))}
                </div>
            </div>
        </div>
    );
}
