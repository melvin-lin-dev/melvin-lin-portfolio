"use client";

import Animate from "@/components/framer-motion/Animate";
import Plot from "@/components/react-plotly/Plot";
import { timelineColorMeta, timelineMeta } from "@/lib/modules/timeline/enums/timeline-category.enum";
import type { Timeline } from "@/lib/modules/timeline/models/timeline.model";
import { formatDate, formatMonthYear, isDateStringComplete } from "@/lib/shared/utils/date";
import { fadeUp, popIn } from "@/lib/utils/framer-motion/motions";
import type { Data, PlotlyHTMLElement, PlotMouseEvent } from "plotly.js";
import { useMemo, useState, type ReactElement } from "react";
import type { Figure } from "react-plotly.js";
import GanttChartDetailModal from "../../components/GanttChartDetailModal";
import { MousePointerClick, SquareMousePointer } from "lucide-react";

type GanttChartContainerProps = {
    timeline: Timeline[];
};

export default function GanttChartContainer({ timeline }: GanttChartContainerProps): ReactElement {
    const [timelineDetail, setTimelineDetail] = useState<Timeline | null>(null);

    const data: Data[] = useMemo(
        () =>
            timeline.map((entry) => {
                const startDate = isDateStringComplete(entry.startDate) ? formatDate(entry.startDate) : formatMonthYear(entry.startDate);
                const endDate = isDateStringComplete(entry.endDate) ? formatDate(entry.endDate) : formatMonthYear(entry.endDate);

                const xEndDate = entry.endDate === "Present" ? new Date().getTime() : new Date(entry.endDate).getTime();

                return {
                    id: entry.id,
                    x: [xEndDate - new Date(entry.startDate).getTime()],
                    y: [timelineMeta[entry.category].text],
                    base: new Date(entry.startDate),
                    type: "bar",
                    orientation: "h",
                    name: entry.title,
                    hovertemplate: `<b>${entry.title}</b><br>${startDate} - ${endDate}<extra></extra>`,
                    hoverlabel: {
                        font: {
                            color: "white",
                            size: 14,
                        },
                    },
                    marker: { color: timelineColorMeta[entry.category].primary },
                };
            }),
        [timeline]
    );

    const handleBarClick = (eventData: PlotMouseEvent) => {
        if (eventData && eventData.points && eventData.points.length > 0) {
            const clickedBar = eventData.points[0];
            const entry = timeline[clickedBar.curveNumber];

            setTimelineDetail(entry);
        }
    };

    const closeTimelineDetail = () => {
        setTimelineDetail(null);
    };

    return (
        <div>
            <div className="px-5 mb-8 flex items-center space-x-3 justify-center">
                <Animate variants={popIn} className="py-1.5 px-4 bg-slate-100 text-gray-500 border border-gray-300 rounded-full flex items-center space-x-2 text-sm">
                    <SquareMousePointer className="w-5 h-5" />
                    <span>
                        <b>Drag</b> to zoom chart
                    </span>
                    <span>•</span>
                    <MousePointerClick className="w-5 h-5" />
                    <span>
                        <b>Click</b> to show timeline detail
                    </span>
                </Animate>
            </div>

            <Animate variants={fadeUp} className="relative overflow-x-auto overflow-y-hidden" style={{ height: 500 }}>
                <Plot
                    data={data}
                    layout={{
                        barmode: "stack",
                        xaxis: {
                            type: "date",
                            rangeslider: { visible: true },
                            automargin: true,
                        },
                        yaxis: {
                            automargin: true,
                        },
                        height: 500,
                        margin: { l: 25, r: 25, t: 25, b: 25 },
                        showlegend: false,
                    }}
                    config={{ responsive: true }}
                    style={{ width: "100%", height: "100%" }}
                    onInitialized={(figure: Figure, graphDiv: PlotlyHTMLElement) => {
                        graphDiv.on("plotly_click", handleBarClick);
                    }}
                    useResizeHandler={true}
                />
            </Animate>

            <GanttChartDetailModal timeline={timelineDetail} closeTimelineDetail={closeTimelineDetail} />
        </div>
    );
}
