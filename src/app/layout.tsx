import { poppins } from "@/constants/fonts";
import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/nav";

export const metadata: Metadata = {
    title: "Mozilla IIT",
    description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${poppins.variable}`}>
            <body>
                <Nav />
                {children}
            </body>
        </html>
    );
}
