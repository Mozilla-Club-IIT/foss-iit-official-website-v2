import Image from "next/image";
import Link from "next/link";

import { FACEBOOK, INSTAGRAM, LINKEDIN, REGISTER, TIK_TOK } from "@/constants/links";

import CategoryHeader from "@/components/footer/CategoryHeader";
// import EmailInput from "@/components/footer/EmailInput";
import SocialLink from "@/components/buttons/SocialLink";

import LogoCollection from "@/assets/logos/collection.webp";
import FOSSLogo from "@/assets/logos/foss.svg";
import MOZCLogo from "@/assets/logos/mozc.svg";
import WIFLogo from "@/assets/logos/wif.svg";

export default function Footer() {
    return (
        <footer className="flex flex-col bg-bg-lighter">
            <div className="grid grid-cols-8 gap-0 gap-y-12 py-8 md:gap-y-0 containerify">
                <div className="col-span-full flex flex-col flex-wrap items-start gap-4 md:col-span-4">
                    <Image
                        src={LogoCollection}
                        width={400}
                        className="hidden max-w-lg lg:block"
                        alt="Mozilla Campus Club IIT"
                    />
                    <MOZCLogo className="h-12 max-w-2/3 lg:hidden" />
                    <FOSSLogo className="max-2/3 h-12 lg:hidden" />
                    <WIFLogo className="max-2/3 h-12 lg:hidden" />
                </div>

                <div className="col-span-full flex flex-col md:col-span-2">
                    <CategoryHeader label="Useful Links" />
                    <div className="grid grid-flow-col grid-rows-4 mt-6 gap-4 font-medium">
                        <a href={REGISTER} target="_blank">
                            Join Us
                        </a>
                        <Link href="/events">Events</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact Us</Link>
                        <Link href="/blogs">Blogs</Link>
                        <Link href="/faq">FAQ</Link>
                    </div>
                </div>

                <div className="col-span-full flex flex-col md:col-span-2">
                    {
                        /* <CategoryHeader label="Subscribe" />
                    <EmailInput /> */
                    }

                    <span className="capitalize">Connect with us</span>
                    <div className="mt-1 flex gap-2">
                        <SocialLink type="facebook" href={FACEBOOK} />
                        <SocialLink type="instagram" href={INSTAGRAM} />
                        <SocialLink type="linkedin" href={LINKEDIN} />
                        <SocialLink type="tiktok" href={TIK_TOK} />
                    </div>
                </div>
            </div>
            <div className="h-10 flex items-center justify-center gap-2 bg-bg-dark text-center text-sm font-medium uppercase md:text-base">
                <span>Copyright © 2024</span>
                <span aria-hidden>|</span>
                <Link href="/devs">
                    Meet the{"  "}
                    <span className="text-accent-light font-bold">
                        devs
                    </span>
                </Link>
            </div>
        </footer>
    );
}
