"use client";

import CareerBreakTimelineItem from "@/app/home/components/timelines/CareerBreakTimelineItem";
import CompetitionTimelineItem from "@/app/home/components/timelines/CompetitionTimelineItem";
import ContinuousLearningTimelineItem from "@/app/home/components/timelines/ContinuousLearningTimelineItem";
import EducationTimelineItem from "@/app/home/components/timelines/EducationTimelineItem";
import TrainingTimelineItem from "@/app/home/components/timelines/TrainingTimelineItem";
import WorkExperienceDetailTimelineItem from "@/app/home/components/timelines/WorkExperienceDetailTimelineItem";
import Animate from "@/components/framer-motion/Animate";
import { Dialog, DialogClose, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { TimelineCategory, timelineColorMeta } from "@/lib/modules/timeline/enums/timeline-category.enum";
import type { CareerBreak } from "@/lib/modules/timeline/models/career-break.model";
import type { Competition } from "@/lib/modules/timeline/models/competition.model";
import type { ContinuousLearning } from "@/lib/modules/timeline/models/continuous-learning.model";
import type { Education } from "@/lib/modules/timeline/models/education.model";
import type { Timeline } from "@/lib/modules/timeline/models/timeline.model";
import type { Training } from "@/lib/modules/timeline/models/training.model";
import type { WorkExperience } from "@/lib/modules/timeline/models/work-experience.model";
import { formatDate, formatMonthYear, isDateStringComplete } from "@/lib/shared/utils/date";
import { fadeUp } from "@/utils/framer-motion/motions";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import clsx from "clsx";
import { X } from "lucide-react";
import type { ReactElement } from "react";

interface GanttChartDetailModal {
    timeline: Timeline | null;
    closeTimelineDetail: () => void;
}

export default function GanttChartDetailModal({ timeline, closeTimelineDetail }: GanttChartDetailModal): ReactElement {
    const isActive = timeline?.endDate === "Present";

    const colorMeta = timeline ? timelineColorMeta[timeline.category] : { primary: "", secondary: "" };

    const startDate = timeline ? (isDateStringComplete(timeline.startDate) ? formatDate(timeline.startDate) : formatMonthYear(timeline.startDate)) : null;
    const endDate = timeline ? (isDateStringComplete(timeline.endDate) ? formatDate(timeline.endDate) : formatMonthYear(timeline.endDate)) : null;

    return (
        <Dialog
            open={!!timeline}
            onOpenChange={(isOpen) => {
                if (!isOpen) closeTimelineDetail();
            }}
        >
            {timeline && (
                <Animate variants={fadeUp}>
                    <DialogContent
                        showCloseButton={false}
                        className="gap-3 rounded-lg"
                        style={{
                            color: isActive ? colorMeta.secondary : "",
                            backgroundColor: isActive ? colorMeta.primary : "",
                            border: "none",
                            boxShadow: "none",
                            borderTop: isActive ? "none" : `4px solid ${colorMeta.primary}`,
                        }}
                    >
                        <DialogClose asChild>
                            <button
                                className={clsx(
                                    "absolute top-0 right-0 m-4 p-0.5 rounded cursor-pointer transition",
                                    isActive ? "bg-white/25 text-white hover:bg-white/35" : "bg-emerald-500/15 text-emerald-500 hover:bg-emerald-500/25"
                                )}
                                onClick={closeTimelineDetail}
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </DialogClose>
                        <div>
                            <DialogTitle>
                                <VisuallyHidden>{timeline.title}</VisuallyHidden>
                            </DialogTitle>
                            {timeline.category == TimelineCategory.WORK_EXPERIENCE && <WorkExperienceDetailTimelineItem workExperience={timeline as WorkExperience} isActive={isActive} />}
                            {timeline.category == TimelineCategory.EDUCATION && <EducationTimelineItem education={timeline as Education} isActive={isActive} />}
                            {timeline.category == TimelineCategory.CAREER_BREAK && <CareerBreakTimelineItem careerBreak={timeline as CareerBreak} isActive={isActive} />}
                            {timeline.category == TimelineCategory.COMPETITION && <CompetitionTimelineItem competition={timeline as Competition} isActive={isActive} />}
                            {timeline.category == TimelineCategory.TRAINING && <TrainingTimelineItem training={timeline as Training} isActive={isActive} />}
                            {timeline.category == TimelineCategory.CONTINUOUS_LEARNING && <ContinuousLearningTimelineItem continuousLearning={timeline as ContinuousLearning} isActive={isActive} />}
                            <p className="mt-1 text-gray-700 text-sm sm:text-base text-right font-semibold">{startDate == endDate ? startDate : `${startDate} - ${endDate}`}</p>
                        </div>
                    </DialogContent>
                </Animate>
            )}
        </Dialog>
    );
}
