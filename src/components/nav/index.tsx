import Image from "next/image";

import NavLink from "@/components/nav/Link";

export default function Nav() {
    return (
        <nav className="fixed inset-x-6 top-8 z-20 h-20 flex containerify">
            <div className="h-20 w-full flex items-center rounded-2xl bg-black/[48%] pl-8 pr-12 ring-2 ring-border-nav/[4%] backdrop-blur-sm">
                <Image src="/textual-logo.png" alt="Mozilla IIT" width={174} height={37} />
                <div className="flex flex-1 justify-end gap-16 text-lg uppercase text-text-neutral">
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
