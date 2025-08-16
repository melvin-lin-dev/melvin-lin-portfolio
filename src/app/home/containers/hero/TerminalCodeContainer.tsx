"use client";

import { Code } from "lucide-react";
import { useEffect, useState, type ReactElement } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import type { TerminalFile } from "./hero-container/HeroContainer";
import Animate from "@/components/framer-motion/Animate";
import { popIn } from "@/lib/utils/framer-motion/motions";

type TerminalCodeContainerProps = {
    terminalFiles: TerminalFile[];
};

export function TerminalCodeContainer({ terminalFiles }: TerminalCodeContainerProps): ReactElement {
    const [typedCode, setTypedCode] = useState("");
    const [index, setIndex] = useState(0);
    const [codeIndex, setCodeIndex] = useState(0);

    useEffect(() => {
        if (index < terminalFiles[codeIndex].code.length) {
            const timeout = setTimeout(() => {
                setTypedCode((prev) => prev + terminalFiles[codeIndex].code[index]);
                setIndex(index + 1);
            }, Math.random() * (100 - 10) + 10);
            return () => clearTimeout(timeout);
        } else {
            const pause = setTimeout(() => {
                setTypedCode("");
                setIndex(0);
                setCodeIndex((codeIndex + 1) % terminalFiles.length);
            }, terminalFiles[codeIndex].delay);
            return () => clearTimeout(pause);
        }
    }, [index, codeIndex, terminalFiles]);

    return (
        <div className="hidden md:block absolute -top-4 lg:top-8 xl:top-28 2xl:top-40 -right-12 lg:right-4 xl:right-40 2xl:right-60 min-[1700px]:right-80 scale-[0.8] lg:scale-[1]">
            <Animate variants={popIn} className="absolute top-1/2 left-1/2 opacity-20 transform -translate-1/2 w-250 h-250 2xl:w-300 2xl:h-300 pointer-events-none select-none">
                <Code className="w-full h-full" />
            </Animate>
            <Animate variants={popIn} delay={0.25} className="relative w-[530px] rounded-lg overflow-hidden z-10">
                <div className="relative bg-gray-50 py-1">
                    <div className="absolute top-1/2 left-2 -translate-y-1/2 flex items-center space-x-2">
                        <div className="w-3.5 h-3.5 bg-red-400 rounded-full cursor-pointer transition hover:bg-red-500"></div>
                        <div className="w-3.5 h-3.5 bg-yellow-400 rounded-full cursor-pointer transition hover:bg-yellow-500"></div>
                        <div className="w-3.5 h-3.5 bg-green-400 rounded-full cursor-pointer transition hover:bg-green-500"></div>
                    </div>
                    <div className="text-center text-gray-700 font-semibold">nano /snippets/{terminalFiles[codeIndex].name}</div>
                </div>
                <div className="h-[325px] bg-[#272822]">
                    <SyntaxHighlighter language="tsx" style={okaidia} className="!text-sm !rounded-none !my-0">
                        {typedCode}
                    </SyntaxHighlighter>
                </div>
            </Animate>
        </div>
    );
}
