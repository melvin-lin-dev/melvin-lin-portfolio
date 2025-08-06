"use client";

import { StarIcon } from "lucide-react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IconWrapper } from "../icon/lucide/IconWrapper";

interface TimelineProps {
    data: any[];
    layout?: string;
    style?: any;

    children: (item: any, isActive: boolean) => React.ReactNode;
}

export default function Timeline({ data, layout, style = {}, children }: TimelineProps) {
    return (
        <VerticalTimeline lineColor="#d1d5db" layout={layout}>
            {data.map((timeline, i) => {
                const defaultStyle: any = {
                    iconStyle: { background: "#1e40af", color: "#fff" },
                    contentStyle: { ...style.contentStyle },
                    contentArrowStyle: { ...style.contentArrowStyle },
                };

                const isActive = timeline.endDate == "today";

                if (isActive) {
                    defaultStyle.iconStyle = {
                        ...defaultStyle.iconStyle,
                        boxShadow: "0 0 0 4px #d1d5db,inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)",
                    };

                    defaultStyle.contentStyle = {
                        ...defaultStyle.contentStyle,
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    };

                    defaultStyle.contentArrowStyle = {
                        ...defaultStyle.contentArrowStyle,
                        borderRight: "7px solid  rgb(33, 150, 243)",
                    };
                }

                return (
                    <VerticalTimelineElement
                        key={i}
                        date={`${timeline.startDate} - ${timeline.endDate}`}
                        icon={<IconWrapper name={timeline.icon} />}
                        iconStyle={defaultStyle.iconStyle}
                        contentStyle={defaultStyle.contentStyle}
                        contentArrowStyle={defaultStyle.contentArrowStyle}
                    >
                        {children(timeline, isActive)}
                    </VerticalTimelineElement>
                );
            })}
            <VerticalTimelineElement iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }} icon={<StarIcon />} />
        </VerticalTimeline>
    );
}
