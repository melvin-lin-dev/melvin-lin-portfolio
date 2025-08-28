declare global {
    interface Window {
        gtag: (command: "config" | "event" | "js", targetId: string | Date, config?: Record<string, unknown>) => void;
    }
}

export {};
