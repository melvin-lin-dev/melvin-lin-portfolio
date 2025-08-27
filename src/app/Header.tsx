"use client";

import { IconWrapper } from "@/components/icon/lucide/IconWrapper";
import clsx from "clsx";
import { Boxes } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactElement } from "react";

type MenuType = {
    title: string;
    href: string;
    icon: string;
};

const menus: MenuType[] = [
    { title: "Home", href: "/home", icon: "house" },
    { title: "Timeline", href: "/timeline", icon: "chartgantt" },
];

export default function Header(): ReactElement {
    const pathname = usePathname();

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setScrolled(window.scrollY > 50);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const activeMenu = (path: string) => {
        if (pathname === path) {
            return {
                li: "",
                link: `cursor-default border-2 ${scrolled ? "border-gray-700" : "border-white"}`,
            };
        }

        return {
            li: "hover:scale-[1.3]",
            link: "",
        };
    };

    return (
        <>
            <header className={clsx("py-5 hidden md:block fixed top-0 left-0 w-full z-40 transition-[background-color,color]", scrolled ? "bg-white/90 text-gray-800 shadow-md" : "text-white")}>
                <div className="container min-[1700px]:max-w-[1600px] flex items-center justify-between">
                    <Link href="/home" className={clsx("relative block w-13 h-13 transition-[scale,filter] hover:scale-[1.3]", scrolled ? "brightness-125" : "brightness-[1.75]")}>
                        <Image src="/images/logo.png" alt="Logo" fill className="object-contain" />
                    </Link>
                    <nav>
                        <ul className="flex items-center space-x-7 font-semibold xl:text-lg tracking-wider">
                            {menus.map((menu) => (
                                <li key={menu.href} className={clsx("transition-[scale]", activeMenu(menu.href).li)}>
                                    <Link href={menu.href} className={clsx("py-1.5 px-3 rounded transition-[border-color]", activeMenu(menu.href).link)}>
                                        {menu.title}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="https://melvin-lin-dev.github.io/"
                                    target="_blank"
                                    className="relative top-0 py-1.5 px-3 flex items-center space-x-2 bg-white text-gray-700 rounded transition-[box-shadow,top] hover:shadow-lg hover:-top-1"
                                >
                                    <Boxes /> <span>Collections</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 shadow-[0_-2px_4px_#ddd] py-2 z-40 backdrop-blur-sm">
                <ul className="flex justify-around">
                    {menus.map((menu) => {
                        const isActive = pathname === menu.href;
                        return (
                            <li key={menu.href}>
                                <Link href={menu.href} className={clsx("py-1 px-2 flex flex-col items-center justify-center text-sm transition-colors", isActive ? "text-emerald-500" : "text-gray-500")}>
                                    <IconWrapper name={menu.icon} className="w-6 h-6 mb-1" />
                                    <span className="text-xs">{menu.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                    <li>
                        <Link href="https://melvin-lin-dev.github.io/" target="_blank" className="py-1 px-2 flex flex-col items-center justify-center text-sm transition-colors bg-emerald-500 text-white border rounded transition-colors hover:bg-transparent hover:text-emerald-500 hover:border-emerald-500">
                            <Boxes /> <span>Collections</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
