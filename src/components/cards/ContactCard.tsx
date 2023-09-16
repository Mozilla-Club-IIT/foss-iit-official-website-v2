import cn from "@/utils/cn";

type ContactCardProps = {
    children: React.ReactNode;
    icon: string;
};

export default function ContactCard({ icon, children }: ContactCardProps) {
    return (
        <div className="h-20 w-full flex items-center gap-5 rounded-xl bg-white/10 px-5 py-3">
            <div className={cn("h-7 w-7 shrink-0", icon)}></div>
            <p className="font-500 leading-normal">{children}</p>
        </div>
    );
}
