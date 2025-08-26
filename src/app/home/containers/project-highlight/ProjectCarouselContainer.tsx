"use client";

import Animate from "@/components/framer-motion/Animate";
import { getProjects } from "@/lib/modules/project/services/project.service";
import { fadeUpScale } from "@/utils/framer-motion/motions";
import { useEffect, useState, type ReactElement } from "react";
import { Carousel } from "react-responsive-3d-carousel";
import "react-responsive-3d-carousel/dist/styles.css";
import ProjectCarouselItem from "../../components/ProjectCarouselItem";
import BREAKPOINTS from "@/lib/shared/constants/breakpoints";

const projects = getProjects();

type Size = {
    width: number;
    height: number;
};

export default function ProjectCarouselContainer(): ReactElement {
    const [ready, setReady] = useState(false);
    const [size, setSize] = useState<Size>({ width: 0, height: 0 });

    useEffect(() => {
        setReady(true);

        const handleResize = () => {
            const newSize: Size = { width: 0.5, height: 400 };

            if (window.innerWidth < BREAKPOINTS.xl) {
                newSize.width = 0.8;
                newSize.height = 400;
            }
            if (window.innerWidth < BREAKPOINTS.lg) {
                newSize.height = 350;
            }
            if (window.innerWidth < BREAKPOINTS.md) {
                newSize.height = 300;
            }
            if (window.innerWidth < BREAKPOINTS.sm) {
                newSize.width = 1;
                newSize.height = 275;
            }
            if (window.innerWidth < BREAKPOINTS.xs) {
                newSize.height = 230;
            }

            setSize(newSize);
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {ready && (
                <Animate variants={fadeUpScale}>
                    <Carousel
                        key={projects.length}
                        items={projects.map((project) => (
                            <ProjectCarouselItem key={project.id} project={project} />
                        ))}
                        width={size.width}
                        height={size.height + "px"}
                        autoPlay={false}
                        showStatus={false}
                        showIndicators={false}
                    />
                </Animate>
            )}
        </>
    );
}
