import Image from "next/image";

type Props = {
    imgURL: string;
    name: string;
};
export default function TechnologyCard({ imgURL, name }: Props) {
    return (
        <div className="min-h-56 min-w-56 flex flex-col items-center justify-between rounded-2xl bg-white/10 p-8">
            <div className="relative h-2/3 w-2/3">
                <Image style={{ objectFit: "contain" }} src={imgURL} fill alt={name} />
            </div>
            <h6 className="text-center">{name}</h6>
        </div>
    );
}
