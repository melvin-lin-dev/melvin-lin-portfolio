"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PageTracker(): null {
    const pathname = usePathname();

    useEffect(() => {
        if (!window.gtag) return;

        window.gtag("config", "G-0H9P64KG2T", {
            page_path: pathname,
        });

        let scrollTimeout: NodeJS.Timeout;
        const handleScroll = () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                window.gtag("event", "scroll", { page_path: pathname });
            }, 500);
        };

        const handleClick = () => {
            window.gtag("event", "click", { page_path: pathname });
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("click", handleClick);
            clearTimeout(scrollTimeout);
        };
    }, [pathname]);

    return null;
}
