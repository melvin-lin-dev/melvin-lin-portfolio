"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import type { Project } from "@/lib/modules/project/models/project.model";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import type { ReactElement } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

interface ProjectCodeModal {
    project: Project;
}

export default function ProjectCodeModal({ project }: ProjectCodeModal): ReactElement {
    return (
        <Dialog>
            <DialogTrigger className="btn btn-white px-2">Code</DialogTrigger>
            <DialogContent>
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
                            <SyntaxHighlighter language={codeSnippet.language} style={okaidia} className={`${index == 0 ? '!rounded-t-none !rounded-b' : '!rounded'} !my-0`}>
                                {codeSnippet.source}
                            </SyntaxHighlighter>
                        </TabsContent>
                    ))}
                </Tabs>
            </DialogContent>
        </Dialog>
    );
}
