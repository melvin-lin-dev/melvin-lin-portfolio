import fs from "fs";
import path from "path";
import { HeroContainerElement } from "./HeroContainerElement";

export type TerminalFile = {
    name: string;
    code: string;
    delay: number;
};

export default async function HeroContainer() {
    const files = ["imports.ts", "portfolio.ts", "coffee.ts", "logs.ts", "async-build.ts"];
    const terminalFiles: TerminalFile[] = [];
    files.forEach((file) => {
        const filePath = path.join(`src/app/home/containers/hero/hero-container/snippets/${file}`);
        const code = fs.readFileSync(filePath, "utf8");
        terminalFiles.push({ name: file, code, delay: code.length * 15});
    });

    return <HeroContainerElement terminalFiles={terminalFiles} />;
}
