import "./globals.css";

import type { Metadata } from "next";
import Image from "next/image";

import { poppins } from "@/constants/fonts";

import Nav from "@/components/nav";
import Footer from "@/components/footer";

import backgroundImage from "public/background.png";

export const metadata: Metadata = {
    title: "Mozilla IIT",
    description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${poppins.variable} max-w-full `}>
            <body className="relative h-[100vh] w-full">
                <Nav />
                <main className="flex flex-col pt-24 containerify">{children}</main>
                <Footer />
                <Image
                    alt=""
                    src={backgroundImage}
                    placeholder="blur"
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: "cover",
                    }}
                />
            </body>
        </html>
    );
}
