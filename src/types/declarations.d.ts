declare module "*.ts?raw" {
    const content: string;
    export default content;
}

declare global {
    interface Window {
        gtag: (command: "config" | "event" | "js", targetId: string | Date, config?: Record<string, unknown>) => void;
    }
}

export {};
