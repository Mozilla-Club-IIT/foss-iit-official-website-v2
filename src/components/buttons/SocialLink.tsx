import { ExternalLink } from "@/types/internal";
import cn from "@/utils/cn";

type Props = {
    type: ExternalLink;
    href: string;
    className?: string;
};

export default function SocialLink({ type, href, className }: Props) {
    return (
        <a
            target="_blank"
            href={href}
            className={cn(
                "h-8 w-8 inline-flex items-center justify-center b-1 b-white rounded-full",
                className,
            )}
        >
            <div
                className={cn("h-5 w-5", {
                    "i-bxl-facebook": type === "facebook",
                    "i-bxl-tiktok": type === "tiktok",
                    "i-bxl-linkedin": type === "linkedin",
                    "i-bxl-instagram": type === "instagram",
                    "i-bxl-github": type === "github",
                })}
            />
        </a>
    );
}
