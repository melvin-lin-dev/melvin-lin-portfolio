import Timeline from "@/components/react-vertical-timeline/Timeline";
import { getEducations } from "@/lib/modules/education/services/education.service";
import type { ReactElement } from "react";
import EducationTimelineItem from "../../components/EducationTimelineItem";

const educations = getEducations();

export default function TimelineContainer(): ReactElement {
    return (
        <Timeline data={educations} style={{ contentStyle: { borderRadius: "8px", boxShadow: "0 2px 10px 0 #ccc" }, contentArrowStyle: { display: "none" } }}>
            {(item, isActive) => <EducationTimelineItem education={item} isActive={isActive} />}
        </Timeline>
    );
}
