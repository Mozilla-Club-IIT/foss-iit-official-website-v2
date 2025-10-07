import Link from "next/link";

import { REGISTER } from "@/constants/links";

import NavLink from "@/components/nav/Link";

import DotLogo from "@/assets/logos/mozc-dot.svg";
import MOZCLogo from "@/assets/logos/mozc.svg";

export default function Nav() {
    return (
        <header
            className="fixed inset-x-6 top-6 z-50 w-full flex items-center gap-4 2xl:containerify md:inset-x-6 md:gap-8"
            style={{ maxWidth: "calc(100% - 3rem)" }}
        >
            <div className="h-16 flex flex-1 items-center justify-between rounded-2xl bg-black/[48%] px-6 shadow ring-2 ring-border-nav/[4%] backdrop-blur-sm 2xl:h-20 sm:justify-start xs:px-8 sm:pl-8">
                <Link href="/" className="contents">
                    <MOZCLogo className="hidden w-[145px] md:block" />
                    <DotLogo className="h-8 w-8 md:hidden" />
                </Link>
                <div className="flex justify-end gap-4 text-sm text-text-neutral uppercase xs:flex-1 lg:gap-16 md:gap-12 2xl:text-lg md:text-base">
                    <NavLink href="/about" label="About" />
                    <NavLink href="/blogs" label="Blogs" />
                    <NavLink href="/events" label="Events" />
                    <NavLink href="/wif" label="WIF" />
                </div>
            </div>
            <a
                target="_blank"
                href={REGISTER}
                className="hidden h-16 w-16 items-center justify-center rounded-xl bg-[#5E5E5E] px-4 text-white uppercase md:w-36 sm:inline-flex"
            >
                <p className="hidden md:block">Register</p>
                <p className="md:hidden">REG</p>
            </a>
        </header>
    );
}
