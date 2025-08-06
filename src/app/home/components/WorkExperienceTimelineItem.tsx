'use client';

import { WorkExperience } from "@/lib/modules/work-experience/models/work-experience.model";
import { ReactElement } from "react";

interface WorkExperienceTimelineItemProps {
    workExperience: WorkExperience;
    isActive: boolean;
}

export default function WorkExperienceTimelineItem({ workExperience, isActive }: WorkExperienceTimelineItemProps): ReactElement {
    const style: any = {
        content: {
            position: "text-gray-500",
            location: "text-gray-500",
        },
    };

    if (isActive) {
        style.content = {
            position: "text-gray-100",
            location: "text-gray-100",
        };
    }

    return (
        <>
            <h3 className="text-xl font-bold">{workExperience.company}</h3>
            <p className={`!mt-0 italic font-semibold ${style.content.position}`}>{workExperience.position}</p>
            <p className={`!mt-1 ${style.content.location}`}>{workExperience.location}</p>
            <div className="mt-3">
                {
                    <ul className="pl-5 list-disc">
                        {workExperience.descriptions.map((description) => (
                            <li key={description}>{description}</li>
                        ))}
                    </ul>
                }
            </div>
        </>
    );
}
