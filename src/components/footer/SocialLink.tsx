import cn from "@/utils/cn";

type Props = {
    href: string;
    icon: string;
};
export default function SocialLink({ href, icon }: Props) {
    return (
        <div className="h-8 w-8 inline-flex items-center justify-center b-1 b-white rounded-full">
            <div className={cn("h-5 w-5", icon)} />
        </div>
    );
}
