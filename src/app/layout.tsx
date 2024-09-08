import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";

import { poppins } from "@/constants/fonts";

import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Background from "@/components/background";


export const metadata: Metadata = {
    title: "The Mozilla Campus Club of IIT",
    description: "Contribute, Inspire and Innovate",
    metadataBase: process.env.NEXT_PUBLIC_APP_URL !== undefined ? new URL(process.env.NEXT_PUBLIC_APP_URL) : undefined,
};

export const viewport: Viewport = {
    themeColor: { color: "#E50013" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${poppins.variable} max-w-full `}>
            <body className="relative h-[100vh] w-full">
                <Nav />
                <main className="relative max-w-full flex flex-col pt-24 containerify">
                    {children}
                </main>
                <Footer />
                <Background />
                <Analytics />
            </body>
        </html>
    );
}
