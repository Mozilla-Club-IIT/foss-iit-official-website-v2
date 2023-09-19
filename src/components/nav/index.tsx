import NavLink from "@/components/nav/Link";

import TextualLogo from "@/assets/textual-logo.svg";
import DotLogo from "@/assets/dot-logo.svg";

export default function Nav() {
    return (
        <header
            className="fixed inset-x-6 top-6 z-50 w-full md:pr-48"
            style={{ maxWidth: "calc(100% - 3rem)" }}
        >
            <div className="h-16 flex items-center justify-center rounded-2xl bg-black/[48%] p-0 ring-2 ring-border-nav/[4%] backdrop-blur-sm 2xl:h-20 sm:justify-start xs:px-8 sm:pl-8 containerify">
                <TextualLogo className="hidden w-[145px] md:block" />
                <DotLogo className="hidden h-8 w-8 xs:block md:hidden" />
                <div className="flex justify-end gap-4 text-sm uppercase text-text-neutral xs:flex-1 lg:gap-16 md:gap-12 2xl:text-lg md:text-base">
                    <NavLink href="/" label="Home" />
                    <NavLink href="/about" label="About" />
                    <NavLink href="/events" label="Events" />
                    <NavLink href="/wif" label="WIF" />
                </div>
            </div>
        </header>
    );
}
