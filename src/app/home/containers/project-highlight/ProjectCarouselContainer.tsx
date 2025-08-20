"use client";

import { getProjects } from "@/lib/modules/project/services/project.service";
import { useEffect, useState, type ReactElement } from "react";
import { Carousel } from "react-responsive-3d-carousel";
import ProjectCarouselItem from "../../components/ProjectCarouselItem";

const projects = getProjects();

export default function ProjectCarouselContainer(): ReactElement {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        setReady(true); // triggers a re-render after first paint
    }, []);

    return (
        <>
            {ready && (
                <Carousel
                    key={projects.length}
                    items={projects.map((project) => (
                        <ProjectCarouselItem key={project.id} project={project} />
                    ))}
                    width={0.5}
                    height="350px"
                    startIndex={0}
                    autoPlay={false}
                    showStatus={false}
                    showIndicators={false}
                />
            )}
        </>
    );
}
