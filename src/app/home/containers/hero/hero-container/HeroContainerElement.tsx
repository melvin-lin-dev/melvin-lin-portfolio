"use client";

import Animate from "@/components/framer-motion/Animate";
import { profileRoleColors, profileTitles } from "@/lib/modules/profile/constants/profile-titles";
import { horizontalGrow } from "@/lib/utils/framer-motion/motions";
import { Download, MapPin } from "lucide-react";
import { useEffect, useRef, useState, type ReactElement } from "react";
import { TypeAnimation } from "react-type-animation";
import Contact3DContainer from "../contact-3d-container/Contact3DContainer";
import Cube3DContainer from "../cube-3d-container/Cube3DContainer";
import SimpleContact3DContainer from "../simple-contact-3d-container";
import { TerminalCodeContainer } from "../TerminalCodeContainer";
import type { TerminalFile } from "./HeroContainer";
import ThreeDimensionButton from "@/common/components/buttons/three-dimension-button/ThreeDimensionButton";

type HeroContainerElementProps = {
    terminalFiles: TerminalFile[];
};

export function HeroContainerElement({ terminalFiles }: HeroContainerElementProps): ReactElement {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    const applyCenterGradient = (el: HTMLDivElement) => {
        el.style.backgroundImage = "radial-gradient(circle at center, #00D492 25%, #00D3F2 65%)";
        el.style.backgroundSize = "175% 175%";
    };

    const applyMouseGradient = (el: HTMLDivElement, x: number, y: number) => {
        el.style.backgroundImage = `radial-gradient(circle at ${x}% ${y}%, #00D492 25%, #00D3F2 50%)`;
        el.style.backgroundSize = `100% 100%`;
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        applyCenterGradient(e.currentTarget);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        applyMouseGradient(el, x, y);
    };

    useEffect(() => {
        if (sectionRef.current) {
            applyCenterGradient(sectionRef.current);
        }
    }, []);

    const [textColor, setTextColor] = useState("");

    const sequence = profileTitles.flatMap((item) => ["", () => setTextColor(profileRoleColors[item.category]), item.text, 1500]);

    return (
        <section ref={sectionRef} className="overflow-hidden relative text-white transition-all duration-[.4s] bg-center bg-red-500" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <div className="pt-28 md:pt-38 lg:pt-48 xl:pt-52 2xl:pt-68 pb-20 md:pb-28 lg:pb-40 xl:pb-52 2xl:pb-68 container min-[1700px]:max-w-[1600px] mx-auto h-full flex items-center">
                <div className="w-full relative">
                    <div className="relative z-[1]">
                        <Cube3DContainer />
                        <div className="md:mt-8 lg:mt-0">
                            <div className="space-y-6">
                                <Animate tag="h1" variants={horizontalGrow()} className="text-6xl sm:text-7xl font-bold tracking-wider">
                                    Melvin Lin
                                </Animate>
                                <Animate variants={horizontalGrow()} delay={0.25} className={`py-1 px-2 sm:py-1.5 sm:px-3 inline-block bg-white/70 rounded-lg text-2xl sm:text-3xl ${textColor}`}>
                                    <TypeAnimation sequence={sequence} wrapper="span" speed={50} repeat={Infinity} />
                                </Animate>
                            </div>
                            <div className="mt-8 md:mb-12 space-y-4 text-lg sm:text-[22px]">
                                <Animate variants={horizontalGrow()} delay={0.25} className="flex items-center space-x-3 sm:text-lg">
                                    <MapPin className="w-6.5 h-6.5" />
                                    <p>Indonesia (Willing to Relocate Overseas)</p>
                                </Animate>
                                <Animate variants={horizontalGrow()} delay={0.5} className="flex items-center space-x-3 sm:text-lg">
                                    <span className="ml-0.5 w-5.5 h-5.5 bg-green-400 rounded-full border-2 border-white" aria-label="Available"></span>
                                    <p>Available Immediately</p>
                                </Animate>
                            </div>
                            <div className="my-8 md:my-0 block md:hidden">
                                <SimpleContact3DContainer />
                            </div>
                            <div className="flex items-end space-x-4">
                                <ThreeDimensionButton tag="a" color="amber" href="#about-section" role="button" className="text-lg sm:text-xl rounded-xl font-semibold" paddingClassName="py-3 px-10">
                                    Uncover My Journey
                                </ThreeDimensionButton>
                                <ThreeDimensionButton tag="a" color="gray" href="" download title="Resume" className="rounded-xl" paddingClassName="py-3 px-4">
                                    <Download className="w-6 h-6"/>
                                </ThreeDimensionButton>
                            </div>
                        </div>
                    </div>
                    <TerminalCodeContainer terminalFiles={terminalFiles} />
                    <Contact3DContainer />
                </div>
            </div>
        </section>
    );
}
