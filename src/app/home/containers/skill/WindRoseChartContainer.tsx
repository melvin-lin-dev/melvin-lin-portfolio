import WindRoseChartClient from "@/components/react-plotly/WindRoseChartClient";
import type { SkillProficiency } from "@/lib/modules/skill/models/skill-proficiency.model";
import skillLevels from "@/lib/modules/skill/constants/skill-levels";
import { buildSkillLevelLayers } from "@/lib/utils/react-plotly/wind-rose.utils";
import { useMemo, type ReactElement } from "react";

type SkillWindRoseChartProps = {
    skillProficiencies: SkillProficiency[];
};

export default function SkillWindRoseChartContainer({ skillProficiencies }: SkillWindRoseChartProps): ReactElement {
    const skillFrameworks = useMemo(() => buildSkillLevelLayers(skillLevels, skillProficiencies), [skillProficiencies]);

    return (
        <WindRoseChartClient
            data={skillFrameworks}
            layout={{
                dragmode: false,
                margin: { t: 0, b: 0 },
                width: 500,
                height: 400,
                polar: {
                    radialaxis: {
                        visible: true,
                        fixedrange: true,
                        range: [0, 10],
                    },
                    angularaxis: { fixedrange: true },
                },
                showlegend: false,
                hoverlabel: {
                    bgcolor: "rgba(50,50,50,0.9)",
                    bordercolor: "#888",
                    font: { color: "#eee" },
                },
            }}
            config={{
                displayModeBar: false,
                scrollZoom: false,
            }}
        />
    );
}
