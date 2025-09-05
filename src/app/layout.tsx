import { pageTitle } from "@/lib/shared/utils/metadata";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "./Header";
import Script from "next/script";
import PageTracker from "./PageTracker";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: pageTitle("Portfolio"),
    description:
        "Versatile Software Engineer with practical experience in full-stack development across web and mobile platforms. Adaptable and quick to learn, with a focus on user experience, performance optimization, clean architecture, and building scalable systems. Passionate about solving real-world problems through efficient, maintainable code.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                {/* Global Site Tag */}
                <Script src={`https://www.googletagmanager.com/gtag/js?id=G-0H9P64KG2T`} strategy="afterInteractive" />
                <Script
                    id="gtag-init"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                        `,
                    }}
                />
                <PageTracker />
                <Header />
                <main>{children}</main>
                <footer className="py-4 text-center text-white bg-teal-700 text-white mb-15 md:mb-0">&copy; {new Date().getFullYear()} Melvin Lin. All rights reserved.</footer>
            </body>
        </html>
    );
}
