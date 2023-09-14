import "./globals.css";

import type { Metadata } from "next";
import Image from "next/image";

import Nav from "@/components/nav";
import { poppins } from "@/constants/fonts";

export const metadata: Metadata = {
    title: "Mozilla IIT",
    description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${poppins.variable}`}>
            <body className="relative h-[100vh] w-[100vw]">
                <Nav />
                {children}
                <Image
                    alt=""
                    src="/background.png"
                    fill={true}
                    quality={100}
                    className="z-0 object-cover object-top"
                />
            </body>
        </html>
    );
}
