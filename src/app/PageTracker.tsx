"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PageTracker(): null {
    const pathname = usePathname();

    useEffect(() => {
        if (window.gtag) {
            window.gtag("config", "G-0H9P64KG2T", {
                page_path: pathname,
            });
        }
    }, [pathname]);

    return null;
}
