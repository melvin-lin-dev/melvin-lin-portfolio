import StackBadges from "@/common/components/StackBadges";
import type { Project } from "@/lib/modules/project/models/project.model";
import Image from "next/image";
import type { ReactElement } from "react";
import ProjectPreviewModal from "./ProjectPreviewModal";

type ProjectCarouselItemProps = {
    project: Project;
};

export default function ProjectCarouselItem({ project }: ProjectCarouselItemProps): ReactElement {
    return (
        <div className="relative h-full group cursor-default">
            <Image src={`/images/projects/${project.title.toLowerCase().replace(/ /g, "-")}/${project.thumbnail}`} alt={`${project.title} Thumbnail`} className="object-cover blur-xs transition-[filter] delay-[.3s] group-hover:delay-0 group-hover:blur-none" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
            <div className="relative bg-cyan-800/50 w-full h-full py-3 px-4 text-white transition delay-[.3s] group-hover:delay-0 group-hover:bg-cyan-700/80">
                <div className="relative h-full flex flex-col justify-between">
                    <div>
                        <h3 className="mb-3 text-lg sm:text-xl md:text-2xl font-semibold invisible">{project.title}</h3>
                        <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full font-semibold text-3xl sm:text-4xl md:text-5xl tracking-wider whitespace-nowrap transition-all delay-[.3s] group-hover:delay-0 group-hover:top-0 group-hover:left-0 group-hover:translate-0 group-hover:text-lg sm:group-hover:text-xl md:group-hover:text-2xl group-hover:tracking-normal">
                            {project.title}
                        </h3>
                        <p className="relative top-[350px] sm:text-lg transition-[top] delay-[.2s] group-hover:delay-[.1s] group-hover:top-0">{project.description}</p>
                        <div className="mt-2">
                            <StackBadges stacks={project.stacks} isColorInverted={false} className="relative top-[350px] transition-[top] group-hover:delay-[.2s] group-hover:top-0" />
                        </div>
                        <StackBadges
                            stacks={project.stacks}
                            isColorInverted={false}
                            className="justify-center absolute top-1/2 left-1/2 -translate-x-1/2 opacity-100 transition-[opacity] delay-[.3s] group-hover:delay-0 group-hover:opacity-0"
                        />
                    </div>
                    <div className="ml-auto flex items-center space-x-2">
                        <div className="scale-0 transition-transform group-hover:delay-[.3s] group-hover:scale-100">
                            <ProjectPreviewModal project={project}></ProjectPreviewModal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
