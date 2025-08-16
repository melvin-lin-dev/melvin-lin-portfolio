"use client";

import Animate from "@/components/framer-motion/Animate";
import AnimateChild from "@/components/framer-motion/AnimateChild";
import type { Achievement } from "@/lib/modules/achievement/models/achievement.model";
import { getAchievements } from "@/lib/modules/achievement/services/achievement.service";
import BREAKPOINTS from "@/lib/shared/constants/breakpoints";
import { delay } from "@/lib/shared/utils/time";
import { fadeIn } from "@/lib/utils/framer-motion/motions";
import { Trophy } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, type ReactElement } from "react";

const achievements = getAchievements();

export default function AchievementContainer(): ReactElement {
    const [detail, setDetail] = useState<Achievement | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const effectRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const isAnimatingRef = useRef(false);

    const getPadding = () => {
        let padding = "70%";
        if (window.innerWidth < BREAKPOINTS.md + 100) padding = "90%";
        if (window.innerWidth < BREAKPOINTS.sm) padding = "140%";
        if (window.innerWidth < 400) padding = "200%";
        return padding;
    };

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>, achievement: Achievement) => {
        if (isAnimatingRef.current) return;
        isAnimatingRef.current = true;

        const el = e.currentTarget;
        const effect = effectRef.current!;
        const effectDuration = 250;
        const contentDuration = 250;

        if (detail) {
            contentRef.current!.style.opacity = "0";
            await delay(contentDuration);

            effect.style.padding = "0";
            await delay(effectDuration);

            if (detail.id === achievement.id) {
                setDetail(null);
                isAnimatingRef.current = false;
                return;
            }
        }

        startEffectAnimation(el, achievement);
        setDetail(achievement);

        await delay(effectDuration);
        contentRef.current!.style.opacity = "1";

        await delay(contentDuration);
        isAnimatingRef.current = false;
    };

    function startEffectAnimation(el: HTMLButtonElement, achievement: Achievement) {
        const rect = el.getBoundingClientRect();
        const parentRect = sectionRef.current!.getBoundingClientRect();
        const x = ((rect.left + rect.width / 2 - parentRect.left) / parentRect.width) * 100;
        const y = ((rect.top + rect.height / 2 - parentRect.top) / parentRect.height) * 100;

        const effect = effectRef.current!;
        effect.style.left = `${x}%`;
        effect.style.top = `${y}%`;
        effect.style.backgroundColor = achievement.organizationStyle.backgroundColor;
        effect.style.padding = getPadding();
    }

    useEffect(() => {
        const handleResize = () => {
            if (detail) {
                effectRef.current!.style.padding = getPadding();
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [detail]);

    return (
        <>
            <section ref={sectionRef} className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
                <div ref={effectRef} className="absolute -translate-1/2 rounded-full transition-[padding] duration-[300ms]"></div>
                <Trophy
                    className="absolute left-1/2 top-48 -translate-1/2 transition-all"
                    style={{
                        top: detail ? "192px" : "220px",
                        width: detail ? "360px" : "64px",
                        height: detail ? "360px" : "64px",
                        color: detail ? detail.organizationStyle.color : "#E6E7EB",
                        opacity: detail ? ".05" : "1",
                    }}
                />
                <div className="relative flex justify-center transition-all" style={{ top: detail ? "0" : "-32px" }}>
                    <Animate staggerChildren={.25} className="grid grid-cols-2 gap-2 rotate-45">
                        {achievements.map((achievement, i) => (
                            <AnimateChild key={achievement.id} variants={fadeIn(i)} className={i === 0 ? "order-1" : i === 1 ? "order-2" : i === 2 ? "order-4" : "order-3"}>
                                <button
                                    className="relative w-12 h-12 flex items-center justify-center rounded-lg overflow-hidden cursor-pointer border transition-transform hover:scale-[1.2]"
                                    style={{
                                        backgroundColor: achievement.organizationStyle.backgroundColor,
                                        borderColor: !detail || detail?.id == achievement.id ? "transparent" : detail.organizationStyle.color,
                                    }}
                                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e, achievement)}
                                >
                                    <Image src={`/images/organizations/${achievement.organizationImage}`} alt={`${achievement.organizationImage} Logo`} className="object-contain -rotate-45" width={32} height={32} />
                                </button>
                            </AnimateChild>
                        ))}
                    </Animate>
                </div>
                {detail && (
                    <div ref={contentRef} className="container relative mt-12 text-center transition-opacity" style={{ opacity: "0", color: detail.organizationStyle.color }}>
                        <h2 className="text-lg sm:text-xl font-bold">{detail.name}</h2>
                        <hr className="mt-2 mb-3 mx-auto w-50" style={{ borderColor: detail.organizationStyle.color }} />
                        <p className="text-sm sm:text-base">
                            Issued by <b>{detail.organization}</b>
                        </p>
                        <p className="mt-1 text-sm sm:text-base">
                            Issued date <b>{detail.date}</b>
                        </p>

                        <ul className="mt-4 text-sm sm:text-base text-left inline-block space-y-0.5">
                            {detail.descriptions.map((description, idx) => (
                                <li key={idx} className="list-disc ml-5 mb-1">
                                    {description}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </section>
        </>
    );
}
