import TimelineCategoryLegendContainer from "@/common/containers/TimelineCategoryLegendContainer";
import Animate from "@/components/framer-motion/Animate";
import Plot from "@/components/react-plotly/Plot";
import { TimelineCategory } from "@/lib/modules/timeline/enums/timeline-category.enum";
import { getTimeline } from "@/lib/modules/timeline/services/timeline.service";
import { fadeUp } from "@/lib/utils/framer-motion/motions";
import type { ReactElement } from "react";

const timelineData = getTimeline();

const rowMap: Record<TimelineCategory, string> = {
    [TimelineCategory.WorkExperience]: "Work",
    [TimelineCategory.Education]: "Education",
    [TimelineCategory.CareerBreak]: "Career Break",
    [TimelineCategory.Competition]: "Competition",
    [TimelineCategory.Training]: "Training",
};

const colorMap: Record<TimelineCategory, string> = {
    [TimelineCategory.WorkExperience]: "#0ea5e9",
    [TimelineCategory.Education]: "#10b981",
    [TimelineCategory.CareerBreak]: "#f59e0b",
    [TimelineCategory.Competition]: "#f43f5e",
    [TimelineCategory.Training]: "#8b5cf6",
};

const data = timelineData.map((entry) => ({
    id: entry.id,
    x: [new Date(entry.endDate).getTime() - new Date(entry.startDate).getTime()],
    y: [rowMap[entry.category]],
    base: new Date(entry.startDate),
    type: "bar",
    orientation: "h",
    name: entry.title,
    hovertemplate: `${entry.title}<br>%{base|%b %Y} - %{x}`,
    marker: { color: colorMap[entry.category] },
}));

export default function TimelinePage(): ReactElement {
    return (
        <>
            <section className="py-16 md:py-20 lg:py-28 bg-white">
                <div className="container">
                    <Animate tag="h2" variants={fadeUp} className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-emerald-600 uppercase tracking-wider">
                        Complete Timeline
                    </Animate>

                    <TimelineCategoryLegendContainer />
                </div>

                <div className="mt-6 px-5 sm:px-10">
                    <div className="overflow-x-auto min-w-[1200px]">
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
                                height: 400,
                                margin: { l: 25, r: 25, t: 25, b: 25 },
                                showlegend: false,
                            }}
                            config={{ responsive: true }}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
