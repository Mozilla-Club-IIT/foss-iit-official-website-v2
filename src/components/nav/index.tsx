import Image from "next/image";

import NavLink from "@/components/nav/Link";

import textualLogo from "public/textual-logo.png";
import dotLogo from "public/dot-logo.png";

export default function Nav() {
    return (
        <nav className="fixed inset-x-0 top-6 z-20 mx-6 h-16 flex px-0 containerify 2xl:top-8 2xl:h-20">
            <div className="h-16 w-full flex items-center rounded-2xl bg-black/[48%] pl-8 pr-12 ring-2 ring-border-nav/[4%] backdrop-blur-sm 2xl:h-20">
                <Image
                    src={textualLogo}
                    alt="Mozilla IIT"
                    className="hidden w-[145px] md:block 2xl:w-fit"
                />
                <Image
                    src={dotLogo}
                    width={32}
                    height={32}
                    alt="Mozilla IIT"
                    className="md:hidden"
                />
                <div className="flex flex-1 justify-end gap-6 text-base uppercase text-text-neutral lg:gap-16 md:gap-12 2xl:text-lg">
                    <NavLink href="/" label="Home" />
                    <NavLink href="/about" label="About" />
                    <NavLink href="/events" label="Events" />
                    <NavLink href="/wif" label="WIF" />
                </div>
            </div>
            <div className="hidden h-20 w-42 lg:block"></div>
        </nav>
    );
}
