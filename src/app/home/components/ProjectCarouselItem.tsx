import type { Project } from "@/lib/modules/project/models/project.model";
import Image from "next/image";
import type { ReactElement } from "react";
import ProjectCodeModal from "./ProjectCodeModal";

type ProjectCarouselItemProps = {
    project: Project;
};

export default function ProjectCarouselItem({ project }: ProjectCarouselItemProps): ReactElement {
    return (
        <div className="relative h-full group cursor-default">
            <Image src={`/images/${project.thumbnail}`} alt={`${project.title} Thumbnail`} fill className="object-cover" />
            <div className="relative bg-teal-500/20 w-full h-full py-3 px-4 text-white transition delay-[.4s] group-hover:delay-0 group-hover:bg-teal-500/50">
                <div className="relative h-full flex flex-col justify-between">
                    <div>
                        <h3 className="mb-3 text-lg sm:text-xl md:text-2xl font-semibold invisible">{project.title}</h3>
                        <h3 className="absolute top-1/2 left-1/2 -translate-1/2 font-semibold text-5xl sm:group-text-6xl md:group-text-7xl tracking-wider whitespace-nowrap transition-all delay-[.4s] group-hover:delay-0 group-hover:top-0 group-hover:left-0 group-hover:translate-0 group-hover:text-lg sm:group-hover:text-xl md:group-hover:text-2xl group-hover:tracking-normal">
                            {project.title}
                        </h3>
                        <p className="relative top-[350px] transition-all delay-[.2s] group-hover:top-0">{project.description}</p>
                    </div>
                    <div className="relative top-[200px] ml-auto space-x-2 transition-all group-hover:delay-[.4s] group-hover:top-0">
                        <a href="" className="btn btn-secondary px-2">
                            Repository
                        </a>
                        <ProjectCodeModal project={project}></ProjectCodeModal>
                    </div>
                </div>
            </div>
        </div>
    );
}
