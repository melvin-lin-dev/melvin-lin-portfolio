import Timeline from "@/components/react-vertical-timeline/Timeline";
import { getWorkExperiences } from "@/lib/modules/work-experience/services/work-experience.service";
import type { ReactElement } from "react";
import WorkExperienceTimelineItem from "../../components/WorkExperienceTimelineItem";

const workExperiences = getWorkExperiences();

export default function TimelineContainer(): ReactElement {
    return (
        <Timeline data={workExperiences} style={{ contentStyle: { borderRadius: "8px" } }} layout="1-column-left">
            {(item, isActive) => <WorkExperienceTimelineItem workExperience={item} isActive={isActive} />}
        </Timeline>
    );
}
