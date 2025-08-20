"use client";

import Timeline from "@/components/react-vertical-timeline/Timeline";
import { getEducations } from "@/lib/modules/timeline/services/education.service";
import type { ReactElement } from "react";
import EducationTimelineItem from "../../components/timelines/EducationTimelineItem";

const educations = getEducations();

type TimelineContainerProps = {
    sectionId?: string;
};

export default function TimelineContainer({ sectionId }: TimelineContainerProps): ReactElement {
    return (
        <Timeline data={educations} scrollToId={sectionId} style={{ contentStyle: { borderRadius: "8px", boxShadow: "0 2px 10px 0 #ccc" }, contentArrowStyle: { display: "none" } }}>
            {(item, isActive) => <EducationTimelineItem education={item} isActive={isActive} />}
        </Timeline>
    );
}
