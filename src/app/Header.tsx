"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactElement } from "react";

export default function Header(): ReactElement {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setScrolled(window.scrollY > 50);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={clsx("py-5 fixed top-0 left-0 w-full z-40 transition-[background-color,color]", scrolled ? "bg-white/90 text-gray-800 shadow-md" : "text-white")}>
            <div className="container min-[1700px]:max-w-[1600px] flex items-center justify-between">
                <Link href="/home" className={clsx("relative block w-13 h-13 transition-[scale,filter] hover:scale-[1.3]", scrolled ? "brightness-125" : "brightness-[1.75]")}>
                    <Image src="/images/logo.png" alt="Logo" fill className="object-contain" />
                </Link>
                <nav>
                    <ul className="flex items-center space-x-7 font-semibold text-lg tracking-wider">
                        <li className="transition-[scale] hover:scale-[1.3]">
                            <Link href="/home">Home</Link>
                        </li>
                        <li className="transition-[scale] hover:scale-[1.3]">
                            <Link href="/timeline">Timeline</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
