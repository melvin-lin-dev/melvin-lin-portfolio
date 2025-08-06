import { SkillProficiency } from "@/lib/modules/skill/models/skill-proficiency.model";

interface Threshold {
  max: number;
  color: string;
  label: string;
}

export function buildThresholdLayers(thresholds: Threshold[], skills: SkillProficiency[]) {
    const remaining = skills.map((skill: SkillProficiency) => skill.proficiency as number);

    return thresholds.map((threshold, i) => {
        const r: number[] = [];
        const theta: string[] = [];

        const lower = i === 0 ? 0 : thresholds[i - 1].max;
        const diff = threshold.max - lower;

        skills.forEach((skill, j) => {
            const available = remaining[j];
            const portion = available >= diff ? diff : available;
            r.push(portion);
            theta.push(skill.name);
            remaining[j] -= portion;
        });

        return {
            type: "barpolar",
            r,
            theta,
            name: threshold.label,
            marker: {
                color: threshold.color,
            },
        };
    });
}
