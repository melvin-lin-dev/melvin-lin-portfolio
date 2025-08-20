"use client";

import CareerBreakTimelineItem from "@/app/home/components/timelines/CareerBreakTimelineItem";
import CompetitionTimelineItem from "@/app/home/components/timelines/CompetitionTimelineItem";
import ContinuousLearningTimelineItem from "@/app/home/components/timelines/ContinuousLearningTimelineItem";
import EducationTimelineItem from "@/app/home/components/timelines/EducationTimelineItem";
import TrainingTimelineItem from "@/app/home/components/timelines/TrainingTimelineItem";
import WorkExperienceDetailTimelineItem from "@/app/home/components/timelines/WorkExperienceDetailTimelineItem";
import Timeline from "@/components/react-vertical-timeline/Timeline";
import { TimelineCategory } from "@/lib/modules/timeline/enums/timeline-category.enum";
import type { CareerBreak } from "@/lib/modules/timeline/models/career-break.model";
import type { Competition } from "@/lib/modules/timeline/models/competition.model";
import type { ContinuousLearning } from "@/lib/modules/timeline/models/continuous-learning.model";
import type { Education } from "@/lib/modules/timeline/models/education.model";
import type { Timeline as TimelineType } from "@/lib/modules/timeline/models/timeline.model";
import type { Training } from "@/lib/modules/timeline/models/training.model";
import type { WorkExperience } from "@/lib/modules/timeline/models/work-experience.model";
import BREAKPOINTS from "@/lib/shared/constants/breakpoints";
import { useEffect, useState, type ReactElement } from "react";

type VerticalTimelineContainerProps = {
    timeline: TimelineType[];
    sectionId?: string;
};

export default function VerticalTimelineContainer({ timeline, sectionId }: VerticalTimelineContainerProps): ReactElement {
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
        <Timeline data={timeline} layout={layout} scrollToId={sectionId} style={{ contentStyle: { borderRadius: "8px", boxShadow: "0 2px 10px 0 #ccc" } }}>
            {(item, isActive) => {
                switch (item.category) {
                    case TimelineCategory.WORK_EXPERIENCE:
                        return <WorkExperienceDetailTimelineItem workExperience={item as WorkExperience} isActive={isActive} />;
                    case TimelineCategory.EDUCATION:
                        return <EducationTimelineItem education={item as Education} isActive={isActive} />;
                    case TimelineCategory.CAREER_BREAK:
                        return <CareerBreakTimelineItem careerBreak={item as CareerBreak} isActive={isActive} />;
                    case TimelineCategory.COMPETITION:
                        return <CompetitionTimelineItem competition={item as Competition} isActive={isActive} />;
                    case TimelineCategory.TRAINING:
                        return <TrainingTimelineItem training={item as Training} isActive={isActive} />;
                    case TimelineCategory.CONTINUOUS_LEARNING:
                        return <ContinuousLearningTimelineItem continuousLearning={item as ContinuousLearning} isActive={isActive} />;
                    default:
                        return <>TIMELINE ITEM DOESN&apos;T EXIST</>;
                }
            }}
        </Timeline>
    );
}
