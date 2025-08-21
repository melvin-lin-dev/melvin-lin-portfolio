import TimelineCategoryLegendContainer from "@/common/containers/TimelineCategoryLegendContainer";
import Animate from "@/components/framer-motion/Animate";
import AnimateChild from "@/components/framer-motion/AnimateChild";
import { IconWrapper } from "@/components/icon/lucide/IconWrapper";
import { getTimeline } from "@/lib/modules/timeline/services/timeline.service";
import { fadeUp } from "@/utils/framer-motion/motions";
import clsx from "clsx";
import { Fragment, useState, type ReactElement } from "react";
import GanttChartContainer from "./GanttChartContainer";
import VerticalTimelineContainer from "./VerticalTimelineContainer";

const timeline = getTimeline();

enum TimelineMode {
    GANTT_CHART = "gantt-chart",
    VERTICAL_TIMELINE = "vertical-timeline",
}

type TimelineModeMeta = {
    text: string;
    icon: string;
    component: typeof GanttChartContainer | typeof VerticalTimelineContainer;
};

const timelineModeMeta: Record<TimelineMode, TimelineModeMeta> = {
    [TimelineMode.GANTT_CHART]: {
        text: "Gantt Chart",
        icon: "ganttchart",
        component: GanttChartContainer,
    },
    [TimelineMode.VERTICAL_TIMELINE]: {
        text: "Vertical Timeline",
        icon: "history",
        component: VerticalTimelineContainer,
    },
};

const timelineModeMetaEntries = Object.entries(timelineModeMeta);

const sectionIds = {
    timeline: "timeline-section",
};

export default function TimelineContainer(): ReactElement {
    const [timelineMode, setTimelineMode] = useState<TimelineMode>(TimelineMode.GANTT_CHART);

    const TimelineComponent = timelineModeMeta[timelineMode].component;

    return (
        <section id={sectionIds.timeline} className="py-16 md:py-20 lg:py-28 bg-white">
            <div className="container">
                <Animate tag="h2" variants={fadeUp} className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-emerald-600 uppercase tracking-wider">
                    Complete Timeline
                </Animate>

                <div className="mt-8 flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-4 md:space-y-0">
                    <TimelineCategoryLegendContainer />
                    <Animate staggerChildren={0.25} className="p-1 flex items-center rounded-lg bg-slate-100 overflow-hidden space-x-1">
                        {timelineModeMetaEntries.map(([mode, data], i) => (
                            <Fragment key={mode}>
                                <AnimateChild
                                    tag="button"
                                    variants={fadeUp}
                                    className={clsx("py-2 px-2 rounded-md group", mode == timelineMode ? "bg-emerald-500 text-white" : "cursor-pointer transition hover:text-emerald-600")}
                                    aria-label={data.text}
                                    onClick={() => setTimelineMode(mode as TimelineMode)}
                                >
                                    <IconWrapper name={data.icon} className="w-5 h-5" />
                                </AnimateChild>
                                {i < timelineModeMetaEntries.length - 1 && <div className="w-px h-[60%] bg-gray-300"></div>}
                            </Fragment>
                        ))}
                    </Animate>
                </div>
            </div>

            <Animate key={timelineMode} tag="h3" variants={fadeUp} className="mt-8 text-lg sm:text-xl md:text-2xl font-semibold text-center tracking-wide">
                {timelineModeMeta[timelineMode].text}
            </Animate>

            <div className="mt-6 px-5 sm:px-10">
                <TimelineComponent timeline={timeline} sectionId={sectionIds.timeline} />
            </div>
        </section>
    );
}
