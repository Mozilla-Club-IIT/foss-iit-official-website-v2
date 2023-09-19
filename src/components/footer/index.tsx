import Link from "next/link";
import Image from "next/image";

import { FACEBOOK, INSTAGRAM, LINKEDIN, TIKTOK } from "@/constants/links";

import CategoryHeader from "@/components/footer/CategoryHeader";
import EmailInput from "@/components/footer/EmailInput";
import SocialLink from "@/components/buttons/SocialLink";

import FooterLogoSet from "public/footer-logoset.png";
import TextualLogo from "@/assets/textual-logo.svg";
import FOSSTextualLogo from "@/assets/foss-textual-logo.svg";
import WIFTextualLogo from "@/assets/wif-textual-logo.svg";

export default function Footer() {
    return (
        <footer className="flex flex-col bg-bg-lighter">
            <div className="grid grid-cols-8 gap-0 gap-y-12 py-8 md:gap-y-0 containerify">
                <div className="col-span-full flex flex-col flex-wrap items-start gap-4 md:col-span-4">
                    <Image
                        src={FooterLogoSet}
                        width={400}
                        className="hidden max-w-lg lg:block"
                        alt="Mozilla Campus Club IIT"
                    />
                    <TextualLogo className="h-12 max-w-2/3 lg:hidden" />
                    <FOSSTextualLogo className="max-2/3 h-12 lg:hidden" />
                    <WIFTextualLogo className="max-2/3 h-12 lg:hidden" />
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
                        <SocialLink type="instagram" href={INSTAGRAM} />
                        <SocialLink type="linkedin" href={LINKEDIN} />
                        <SocialLink type="tiktok" href={TIKTOK} />
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
