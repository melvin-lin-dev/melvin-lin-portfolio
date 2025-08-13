"use client";

import Timeline from "@/components/react-vertical-timeline/Timeline";
import { getWorkExperiences } from "@/lib/modules/work-experience/services/work-experience.service";
import { useEffect, useState, type ReactElement } from "react";
import WorkExperienceTimelineItem from "../../components/WorkExperienceTimelineItem";
import BREAKPOINTS from "@/lib/shared/constants/breakpoints";

const workExperiences = getWorkExperiences();

export default function TimelineContainer(): ReactElement {
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
        <Timeline data={workExperiences} style={{ contentStyle: { borderRadius: "8px" } }} layout={layout}>
            {(item, isActive) => <WorkExperienceTimelineItem workExperience={item} isActive={isActive} />}
        </Timeline>
    );
}
