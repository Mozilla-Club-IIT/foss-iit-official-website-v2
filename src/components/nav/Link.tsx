"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

type Props = {
    href: string;
    label: string;
};

export default function NavLink({ href, label }: Props) {
    const pathname = usePathname();

    return (
        <Link href={href} className={clsx({ "text-accent-dark": pathname === href })}>
            {label}
        </Link>
    );
}
