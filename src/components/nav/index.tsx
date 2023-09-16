import Image from "next/image";

import NavLink from "@/components/nav/Link";

export default function Nav() {
    return (
        <nav className="fixed inset-x-6 top-6 z-20 h-16 flex px-0 containerify 2xl:top-8 2xl:h-20">
            <div className="h-16 w-full flex items-center rounded-2xl bg-black/[48%] pl-8 pr-12 ring-2 ring-border-nav/[4%] backdrop-blur-sm 2xl:h-20">
                <Image
                    src="/textual-logo.png"
                    alt="Mozilla IIT"
                    width={174}
                    height={37}
                    className="w-[145px] 2xl:w-fit"
                />
                <div className="flex flex-1 justify-end gap-16 text-base uppercase text-text-neutral 2xl:text-lg">
                    <NavLink href="/" label="Home" />
                    <NavLink href="/about" label="About" />
                    <NavLink href="/events" label="Events" />
                    <NavLink href="/wif" label="WIF" />
                </div>
            </div>
            <div className="block h-20 w-42"></div>
        </nav>
    );
}
