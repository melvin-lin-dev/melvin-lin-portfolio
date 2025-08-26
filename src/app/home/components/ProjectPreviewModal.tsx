import ElevatedButton from "@/common/components/buttons/three-dimension-button/elevated-button/ElevatedButton";
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { Project } from "@/lib/modules/project/models/project.model";
import { SquareArrowOutUpRight, X } from "lucide-react";
import Image from "next/image";
import type { ReactElement } from "react";
import ProjectCodeModal from "./ProjectCodeModal";
import { Carousel } from "react-responsive-3d-carousel";

interface ProjectPreviewModal {
    project: Project;
}

export default function ProjectPreviewModal({ project }: ProjectPreviewModal): ReactElement {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <ElevatedButton color="white" className="p-2 sm:p-2.5 rounded">
                    <SquareArrowOutUpRight className="w-5 sm:w-6 sm:h-6" />
                </ElevatedButton>
            </DialogTrigger>
            <DialogContent showCloseButton={false} className="p-5 gap-5 rounded-lg">
                <DialogTitle asChild>
                    <div className="flex items-center justify-between space-x-2">
                        <h4 className="text-2xl font-semibold">{project.title}</h4>
                        <DialogClose asChild>
                            <button className="p-0.5 rounded bg-emerald-500/15 text-emerald-500 cursor-pointer transition hover:bg-emerald-500/25">
                                <X className="w-4 h-4" />
                            </button>
                        </DialogClose>
                    </div>
                </DialogTitle>

                <Carousel
                    items={project.previews.map((preview) => (
                        <Image key={preview} src={`/images/projects/${project.title.toLowerCase().replace(/ /g, "-")}/previews/${preview}`} alt={`${preview} Preview`} fill className="object-cover object-center" />
                    ))}
                    containerPadding="0"
                    width={1}
                    height={1}
                    aspectRatio={16/9}
                    showStatus={false}
                    interval={5000}
                    boxShadow="none"
                />

                <div className="ml-auto flex items-center space-x-4">
                    {project.repositoryLink && (
                        <ElevatedButton tag="a" href={project.repositoryLink} target="_blank" color="emerald" className="py-2 px-3.5 sm:py-2.5 sm:px-4 rounded text-sm sm:text-base">
                            Repository
                        </ElevatedButton>
                    )}
                    {project.codeSnippets && project.codeSnippets.length > 0 && <ProjectCodeModal project={project}></ProjectCodeModal>}
                </div>
            </DialogContent>
        </Dialog>
    );
}
