import Link from "next/link";

import { FACEBOOK, INSTAGRAM, LINKEDIN, TWITTER } from "@/constants/links";

import CategoryHeader from "@/components/footer/CategoryHeader";
import EmailInput from "@/components/footer/EmailInput";
import SocialLink from "@/components/buttons/SocialLink";

export default function Footer() {
    return (
        <footer className="z-10 w-[100vw] flex flex-col bg-bg-lighter">
            <div className="containerify grid grid-cols-8 min-h-72 gap-12 px-12 py-8">
                <div className="col-span-4 flex flex-col">
                    <span className="text-3xl capitalize">
                        Mozilla campus club and FOSS community of IIT
                    </span>
                </div>

                <div className="col-span-2 flex flex-col">
                    <CategoryHeader label="Useful Links" />
                    <div className="grid grid-flow-col grid-rows-4 mt-6 gap-4 font-medium">
                        <Link href="/join">Join Us</Link>
                        <Link href="/events">Events</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact Us</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/faq">FAQ</Link>
                    </div>
                </div>

                <div className="col-span-2 flex flex-col">
                    <CategoryHeader label="Subscribe" />
                    <EmailInput />

                    <span className="mt-8 capitalize">Connect with us</span>
                    <div className="mt-1 w-full flex gap-2">
                        <SocialLink href={FACEBOOK} icon="i-bxl-facebook" />
                        <SocialLink href={TWITTER} icon="i-bxl-twitter" />
                        <SocialLink href={LINKEDIN} icon="i-bxl-linkedin" />
                        <SocialLink href={INSTAGRAM} icon="i-bxl-instagram" />
                    </div>
                </div>
            </div>
            <div className="h-10 flex items-center justify-center bg-bg-dark text-center text-base font-medium uppercase">
                <p className="text-center">
                    Copyright © 2022 | Meet the{" "}
                    <Link href="/devs" className="text-accent-light">
                        devs
                    </Link>
                </p>
            </div>
        </footer>
    );
}
