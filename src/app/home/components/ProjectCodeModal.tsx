"use client";

import ElevatedButton from "@/common/components/buttons/three-dimension-button/elevated-button/ElevatedButton";
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { Project } from "@/lib/modules/project/models/project.model";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { X } from "lucide-react";
import type { ReactElement } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

interface ProjectCodeModal {
    project: Project;
}

export default function ProjectCodeModal({ project }: ProjectCodeModal): ReactElement {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <ElevatedButton color="teal" className="text-sm sm:text-base py-2 px-3.5 sm:py-2.5 sm:px-4 rounded">
                    Code
                </ElevatedButton>
            </DialogTrigger>
            <DialogContent showCloseButton={false} className="p-3 gap-3 rounded-lg">
                <DialogTitle asChild>
                    <div className="flex items-center justify-between space-x-2">
                        <h4 className="text-xl">{project.title}</h4>
                        <DialogClose asChild>
                            <button className="p-0.5 rounded bg-emerald-500/15 text-emerald-500 cursor-pointer transition hover:bg-emerald-500/25">
                                <X className="w-4 h-4" />
                            </button>
                        </DialogClose>
                    </div>
                </DialogTitle>

                <Tabs defaultValue={project.codeSnippets[0].language}>
                    <TabsList>
                        {project.codeSnippets.map((codeSnippet) => (
                            <TabsTrigger
                                key={codeSnippet.language}
                                value={codeSnippet.language}
                                className="py-2 px-3 text-sm cursor-pointer data-[state=active]:bg-[rgb(39,40,34)] data-[state=active]:text-white data-[state=active]:font-semibold data-[state=active]:cursor-default rounded-t"
                            >
                                {codeSnippet.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {project.codeSnippets.map((codeSnippet, index) => (
                        <TabsContent key={codeSnippet.language} value={codeSnippet.language}>
                            <SyntaxHighlighter
                                language={codeSnippet.language}
                                codeTagProps={{
                                    style: {
                                        whiteSpace: "pre-wrap",
                                        wordBreak: "break-word",
                                    },
                                }}
                                style={okaidia}
                                className={`${index == 0 ? "!rounded-t-none !rounded-b" : "!rounded"} !my-0`}
                            >
                                {codeSnippet.source}
                            </SyntaxHighlighter>
                        </TabsContent>
                    ))}
                </Tabs>
            </DialogContent>
        </Dialog>
    );
}
