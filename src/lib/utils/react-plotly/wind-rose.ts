import type { SkillProficiency } from "@/lib/modules/skill/models/skill-proficiency.model";
import type { SkillLevelWindRoseChart } from "@/types/react-plotly/skill-level-wind-rose-chart";
import type { Datum, PlotData } from "plotly.js";

export function buildSkillLevelLayers(skillLevels: SkillLevelWindRoseChart[], skills: SkillProficiency[]): Partial<PlotData>[] {
    const proficiencies = skills.map((skill: SkillProficiency) => skill.proficiency as number);
    const remaining = [...proficiencies];
    const customdata: Datum[] | Datum[][] = proficiencies.map((proficiency) => [null, proficiency]);

    return skillLevels.map((skillLevel, i) => {
        const r: number[] = [];
        const theta: string[] = [];

        const lower = i === 0 ? 0 : skillLevels[i - 1].max;
        const diff = skillLevel.max - lower;

        skills.forEach((skill, j) => {
            const available = remaining[j];
            const portion = available >= diff ? diff : available;
            r.push(portion);
            theta.push(skill.name);
            remaining[j] -= portion;
            if (remaining[j] == 0 && customdata[j][0] == null) {
                customdata[j][0] = skillLevel.label;
            }
        });

        return {
            type: "barpolar",
            r,
            theta,
            name: skillLevel.label,
            marker: {
                color: skillLevel.color,
            },
            customdata,
            hovertemplate: `<b>%{theta}</b><br><i>%{customdata[0]}</i><br>Proficiency: %{customdata[1]} / ${skillLevels[skillLevels.length - 1].max}<extra></extra>`,
        };
    });
}
