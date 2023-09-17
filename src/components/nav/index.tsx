import Image from "next/image";

import NavLink from "@/components/nav/Link";

import textualLogo from "public/textual-logo.png";
import dotLogo from "public/dot-logo.png";

export default function Nav() {
    return (
        <header
            className="fixed inset-x-6 top-6 z-30 w-full"
            style={{ maxWidth: "calc(100% - 3rem)" }}
        >
            <div className="h-16 flex items-center rounded-2xl bg-black/[48%] pl-8 pr-12 ring-2 ring-border-nav/[4%] backdrop-blur-sm containerify md:mr-48 2xl:h-20">
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
                <div className="flex flex-1 justify-end gap-4 text-sm uppercase text-text-neutral lg:gap-16 md:gap-12 2xl:text-lg md:text-base">
                    <NavLink href="/" label="Home" />
                    <NavLink href="/about" label="About" />
                    <NavLink href="/events" label="Events" />
                    <NavLink href="/wif" label="WIF" />
                </div>
            </div>
        </header>
    );
}
