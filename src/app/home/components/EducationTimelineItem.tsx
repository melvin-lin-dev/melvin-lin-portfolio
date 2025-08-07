'use client';

import { Education } from "@/lib/modules/education/models/education.model";
import { ReactElement } from "react";

interface EducationTimelineItemProps {
    education: Education;
    isActive: boolean;
}

export default function EducationTimelineItem({ education, isActive }: EducationTimelineItemProps): ReactElement {
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
            <h3 className="text-xl font-semibold">{education.name}</h3>
            <p className={`!mt-0 italic !font-normal ${style.content.position}`}>{education.degree}, {education.major}</p>
        </>
    );
}
