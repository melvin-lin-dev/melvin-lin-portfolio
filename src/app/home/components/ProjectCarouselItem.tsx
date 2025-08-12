import type { Project } from "@/lib/modules/project/models/project.model";
import Image from "next/image";
import type { ReactElement } from "react";
import ProjectCodeModal from "./ProjectCodeModal";

type ProjectCarouselItemProps = {
    project: Project;
};

export default function ProjectCarouselItem({ project }: ProjectCarouselItemProps): ReactElement {
    return (
        <div className="bg-white group flex flex-col">
            <div className="relative h-48">
                <Image src={`/images/${project.thumbnail}`} alt={`${project.title} Thumbnail`} fill className="object-cover" />
            </div>
            <div className="flex-1 py-3 px-4 text-gray-700 flex flex-col justify-between">
                <div>
                    <h3 className="mb-3 text-lg sm:text-xl md:text-2xl font-semibold">{project.title}</h3>
                    <p>{project.description}</p>
                </div>
                <div className="ml-auto space-x-2">
                    <a href="" className="btn btn-secondary px-2">
                        Repository
                    </a>
                    <ProjectCodeModal project={project}></ProjectCodeModal>
                </div>
            </div>
        </div>
    );
}
