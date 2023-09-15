import Image from "next/image";

type Props = {
    imgURL: string;
    name: string;
    role: string;
};

export default function DeveloperCard({ imgURL, name, role }: Props) {
    return (
        <div className="h-25 w-93 flex items-center justify-between rounded-7.5 bg-white/10 p-3">
            <Image
                width={76}
                height={76}
                src={imgURL}
                alt={`${name} profile picture`}
                className="border-2 border-[#4AC8B3] rounded-full border-solid"
            />
            <div>
                <p className="text-2xl leading-tight capitalize">{name}</p>
                <p className="text-base leading-5 text-[#F2F2F2]/33">{role}</p>
            </div>
            <div className="i-mdi-chevron-down text-5xl"></div>
        </div>
    );
}
