import "./globals.css";

import type { Metadata, Viewport } from "next";

import { poppins } from "@/constants/fonts";

import Background from "@/components/background";
import Footer from "@/components/footer";
import Nav from "@/components/nav";

export const metadata: Metadata = {
    title: "The Mozilla Campus Club of IIT",
    description: "",
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
            </body>
        </html>
    );
}
