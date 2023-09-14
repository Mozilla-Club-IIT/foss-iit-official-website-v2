import Image from "next/image";

export default function Nav() {
    return (
        <nav className="fixed inset-x-6 top-8 flex h-20">
            <div className="ring-border-nav/[42%]  flex h-20 w-full items-center rounded-2xl bg-black/[48%] px-8 ring-1">
                <Image src="/logo.png" alt="Mozilla IIT" width={174} height={37} />
            </div>
            <div className="content block h-20 w-36"></div>
        </nav>
    );
}
