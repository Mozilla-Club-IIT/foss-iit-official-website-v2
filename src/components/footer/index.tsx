import Link from "next/link";

import { FACEBOOK, INSTAGRAM, LINKEDIN, TWITTER } from "@/constants/links";

import CategoryHeader from "@/components/footer/CategoryHeader";
import EmailInput from "@/components/footer/EmailInput";
import SocialLink from "@/components/buttons/SocialLink";

import DotLogo from "@/assets/dot-logo.svg";

export default function Footer() {
    return (
        <footer className="flex flex-col bg-bg-lighter">
            <div className="grid grid-cols-8 gap-0 gap-y-12 py-8 md:gap-y-0 containerify">
                <div className="col-span-full flex flex-col flex-wrap gap-4 md:col-span-4">
                    <DotLogo className="h-14 w-14 text-[#424242]" />
                    <span className="max-w-md text-xl capitalize md:text-3xl">
                        Mozilla campus club and FOSS community of IIT
                    </span>
                </div>

                <div className="col-span-full flex flex-col md:col-span-2">
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

                <div className="col-span-full flex flex-col md:col-span-2">
                    <CategoryHeader label="Subscribe" />
                    <EmailInput />

                    <span className="mt-8 capitalize">Connect with us</span>
                    <div className="mt-1 flex gap-2">
                        <SocialLink type="facebook" href={FACEBOOK} />
                        <SocialLink type="twitter" href={TWITTER} />
                        <SocialLink type="linkedin" href={LINKEDIN} />
                        <SocialLink type="instagram" href={INSTAGRAM} />
                    </div>
                </div>
            </div>
            <div className="h-10 flex items-center justify-center bg-bg-dark text-center text-sm font-medium uppercase md:text-base">
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
