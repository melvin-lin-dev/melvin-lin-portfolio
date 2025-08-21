"use client";

import type { SkillProficiency } from "@/lib/modules/skill/models/skill-proficiency.model";
import skillLevels from "@/lib/modules/skill/constants/skill-levels";
import { buildSkillLevelLayers } from "@/utils/react-plotly/wind-rose";
import { useEffect, useMemo, useState, type ReactElement } from "react";
import BREAKPOINTS from "@/lib/shared/constants/breakpoints";
import Plot from "@/components/react-plotly/Plot";

type Size = {
    width: number;
    height: number;
};

type WindRoseChartContainerProps = {
    skillProficiencies: SkillProficiency[];
};

export default function WindRoseChartContainer({ skillProficiencies }: WindRoseChartContainerProps): ReactElement {
    const skillFrameworks = useMemo(() => buildSkillLevelLayers(skillLevels, skillProficiencies), [skillProficiencies]);

    const [size, setSize] = useState<Size>({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            const newSize: Size = { width: 500, height: 400 };

            if (window.innerWidth < BREAKPOINTS.md) {
                newSize.width = 500;
                newSize.height = 400;
            }
            if (window.innerWidth < BREAKPOINTS.sm) {
                newSize.width = 400;
                newSize.height = 350;
            }
            if (window.innerWidth < BREAKPOINTS.xs + 120) {
                newSize.width = 300;
                newSize.height = 220;
            }

            setSize(newSize);
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div style={{ height: size.height + "px" }}>
            <Plot
                data={skillFrameworks}
                layout={{
                    dragmode: false,
                    margin: { t: 0, b: 0 },
                    width: size.width,
                    height: size.height,
                    polar: {
                        radialaxis: {
                            visible: true,
                            fixedrange: true,
                            range: [0, 10],
                            tickfont: { size: 12, color: "#666" },
                        },
                        angularaxis: { fixedrange: true, tickfont: { size: 12 } },
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
        </div>
    );
}
