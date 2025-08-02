import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Melvin Lin Portfolio",
    description: "A portfolio highlighting my experience and skills as a software engineer, with a strong foundation in frontend development and UI design.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <header></header>
                <main>{children}</main>
                <footer className="py-4 text-center text-white bg-blue-600 text-white">
                    &copy; {new Date().getFullYear()} Melvin Lin. All rights reserved.
                </footer>
            </body>
        </html>
    );
}
