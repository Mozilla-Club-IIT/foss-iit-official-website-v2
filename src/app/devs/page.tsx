import Image from "next/image";

export default function Devs() {
    return (
        <div
            className="z-20 flex items-center justify-between"
            style={{ height: "calc(100vh - 8rem)" }}
        >
            <div className="flex flex-col px-16">
                <h1 className="text-5xl leading-tight uppercase text-neutral">
                    MEET THE <br />
                    DEVELOPERS
                </h1>
                <span className="mt-8 text-3xl leading-relaxed font-sans capitalize font-italic">
                    Get to the know the ins and outs of the website <br /> and the team behind it
                </span>

                <div className="mt-24 inline-flex gap-8">
                    <button className="h-10 rounded-xl bg-accent px-6 font-medium shadow">
                        Join Us
                    </button>
                    <button className="h-10 inline-flex items-center">
                        Learn More
                        <div className="i-mdi-arrow-top-right mb-1 ml-1 h-4 w-4" />
                    </button>
                </div>
            </div>
            <div className="h-full w-1/3 pr-20">
                <Image
                    width={510}
                    height={768}
                    src={"/opensource-code.png"}
                    alt="Open Source"
                    className="!h-full"
                    style={{ objectFit: "contain" }}
                />
            </div>
        </div>
    );
}
