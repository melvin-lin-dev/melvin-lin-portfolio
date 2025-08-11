import { getProjects } from "@/lib/modules/project/services/project.service";
import type { ReactElement } from "react";
import { Carousel } from "react-responsive-3d-carousel";
import ProjectCarouselItem from "../../components/ProjectCarouselItem";

export default function ProjectCarouselContainer(): ReactElement {
    const projects = getProjects();

    return (
        <Carousel
            items={projects.map((project) => (
                <ProjectCarouselItem key={project.id} project={project} />
            ))}
            height="350px"
            startIndex={0}
            autoPlay={false}
            showStatus={false}
            showIndicators={false}
        />
    );
}
