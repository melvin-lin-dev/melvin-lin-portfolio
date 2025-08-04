"use client";

import { StarIcon } from "lucide-react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface TimelineProps {
    data: any[];
}

export default function Timeline({ data }: TimelineProps) {
    return (
        <VerticalTimeline lineColor="#d1d5db">
            {data.map((timeline, i) =>
                timeline.endDate == "today" ? (
                    <VerticalTimelineElement
                        key={i}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                        date={`${timeline.startDate} - ${timeline.endDate}`}
                        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff", boxShadow: "0 0 0 4px #d1d5db,inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)" }}
                        icon={timeline.icon}
                    >
                        <h3 className="vertical-timeline-element-title">{timeline.position}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{timeline.location}</h4>
                        <div className="mt-4">{timeline.description}</div>
                    </VerticalTimelineElement>
                ) : (
                    <VerticalTimelineElement
                        key={i}
                        className="vertical-timeline-element--work"
                        date={`${timeline.startDate} - ${timeline.endDate}`}
                        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                        icon={timeline.icon}
                    >
                        <h3 className="vertical-timeline-element-title">{timeline.position}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{timeline.location}</h4>
                        <p>{timeline.description}</p>
                    </VerticalTimelineElement>
                )
            )}
            <VerticalTimelineElement iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }} icon={<StarIcon />} />
        </VerticalTimeline>
    );
}
