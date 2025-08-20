"use client";

import CareerBreakTimelineItem from "@/app/home/components/timelines/CareerBreakTimelineItem";
import CompetitionTimelineItem from "@/app/home/components/timelines/CompetitionTimelineItem";
import EducationTimelineItem from "@/app/home/components/timelines/EducationTimelineItem";
import TrainingTimelineItem from "@/app/home/components/timelines/TrainingTimelineItem";
import WorkExperienceDetailTimelineItem from "@/app/home/components/timelines/WorkExperienceDetailTimelineItem";
import Animate from "@/components/framer-motion/Animate";
import { Dialog, DialogClose, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { TimelineCategory, timelineColorMeta } from "@/lib/modules/timeline/enums/timeline-category.enum";
import type { CareerBreak } from "@/lib/modules/timeline/models/career-break.model";
import type { Competition } from "@/lib/modules/timeline/models/competition.model";
import type { Education } from "@/lib/modules/timeline/models/education.model";
import type { Timeline } from "@/lib/modules/timeline/models/timeline.model";
import type { Training } from "@/lib/modules/timeline/models/training.model";
import type { WorkExperience } from "@/lib/modules/timeline/models/work-experience.model";
import { fadeUp } from "@/lib/utils/framer-motion/motions";
import { X } from "lucide-react";
import type { ReactElement } from "react";

interface GanttChartDetailModal {
    timeline: Timeline | null;
    closeTimelineDetail: () => void;
}

export default function GanttChartDetailModal({ timeline, closeTimelineDetail }: GanttChartDetailModal): ReactElement {
    const isActive = timeline?.endDate === "Present";

    return (
        <Dialog
            open={!!timeline}
            onOpenChange={(isOpen) => {
                if (!isOpen) closeTimelineDetail();
            }}
        >
            {timeline && (
                <Animate variants={fadeUp}>
                    <DialogContent showCloseButton={false} className="p-3 gap-3 rounded-lg" style={{ borderTop: `4px solid ${timelineColorMeta[timeline.category].primary}` }}>
                        <DialogClose asChild>
                            <button className="absolute top-0 right-0 mt-4 mr-3 p-0.5 rounded bg-emerald-500/15 text-emerald-500 cursor-pointer transition hover:bg-emerald-500/25" onClick={closeTimelineDetail}>
                                <X className="w-4 h-4" />
                            </button>
                        </DialogClose>
                        <div>
                            {timeline.category == TimelineCategory.WORK_EXPERIENCE && <WorkExperienceDetailTimelineItem workExperience={timeline as WorkExperience} isActive={isActive} />}
                            {timeline.category == TimelineCategory.EDUCATION && <EducationTimelineItem education={timeline as Education} isActive={isActive} />}
                            {timeline.category == TimelineCategory.CAREER_BREAK && <CareerBreakTimelineItem careerBreak={timeline as CareerBreak} isActive={isActive} />}
                            {timeline.category == TimelineCategory.COMPETITION && <CompetitionTimelineItem competition={timeline as Competition} isActive={isActive} />}
                            {timeline.category == TimelineCategory.TRAINING && <TrainingTimelineItem training={timeline as Training} isActive={isActive} />}
                        </div>
                    </DialogContent>
                </Animate>
            )}
        </Dialog>
    );
}
