import cn from "@/utils/cn";

type Props = {
    href: string;
    icon: string;
    className?: string;
};

export default function SocialLink({ href, className, icon }: Props) {
    return (
        <div
            className={cn(
                "h-8 w-8 inline-flex items-center justify-center b-1 b-white rounded-full",
                className,
            )}
        >
            <div className={cn("h-5 w-5", icon)} />
        </div>
    );
}
