"use client";

import Timeline from "@/components/react-vertical-timeline/Timeline";
import { getWorkExperiences } from "@/lib/modules/timeline/services/work-experience.service";
import { useEffect, useState, type ReactElement } from "react";
import WorkExperienceTimelineItem from "../../components/timelines/WorkExperienceTimelineItem";
import BREAKPOINTS from "@/lib/shared/constants/breakpoints";

const workExperiences = getWorkExperiences();

type TimelineContainerProps = {
    sectionId?: string;
};

export default function TimelineContainer({ sectionId }: TimelineContainerProps): ReactElement {
    const [layout, setLayout] = useState("2-column");

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= BREAKPOINTS.xl) {
                setLayout("2-columns");
            } else {
                setLayout("1-column-left");
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Timeline data={workExperiences} layout={layout} scrollToId={sectionId} style={{ contentStyle: { borderRadius: "8px" } }}>
            {(item, isActive) => <WorkExperienceTimelineItem workExperience={item} isActive={isActive} />}
        </Timeline>
    );
}
