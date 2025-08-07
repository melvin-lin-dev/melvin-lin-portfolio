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
        <VerticalTimeline lineColor="#06b6d4" layout={layout}>
            {data.map((timeline, i) => {
                console.log('debug', timeline.style);
                const defaultStyle: any = {
                    dateClassNames: ['!pb-0', '!float-right'],
                    iconStyle: timeline.style?.icon || {},
                    contentStyle: { ...style.contentStyle },
                    contentArrowStyle: { ...style.contentArrowStyle },
                };

                const isActive = timeline.endDate == "Today";

                if (isActive) {
                    const activeBackgroundColor = "#06b6d4";

                    defaultStyle.dateClassNames.push('!opacity-100');

                    defaultStyle.iconStyle = {
                        ...defaultStyle.iconStyle,
                        boxShadow: "0 0 0 4px #d1d5db,inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)",
                    };

                    defaultStyle.contentStyle = {
                        ...defaultStyle.contentStyle,
                        background: activeBackgroundColor,
                        color: "#fff",
                    };

                    defaultStyle.contentArrowStyle = {
                        ...defaultStyle.contentArrowStyle,
                        borderRight: "7px solid "+ activeBackgroundColor,
                    };
                }

                return (
                    <VerticalTimelineElement
                        key={i}
                        date={`${timeline.startDate} - ${timeline.endDate}`}
                        dateClassName={defaultStyle.dateClassNames.join(' ')}
                        icon={<IconWrapper name={timeline.icon} />}
                        iconStyle={defaultStyle.iconStyle}
                        contentStyle={defaultStyle.contentStyle}
                        contentArrowStyle={defaultStyle.contentArrowStyle}
                    >
                        {children(timeline, isActive)}
                    </VerticalTimelineElement>
                );
            })}
            <VerticalTimelineElement iconStyle={{ background: "#00BC7D", color: "#fff" }} icon={<StarIcon />} />
        </VerticalTimeline>
    );
}
