export default function Home() {
    return (
        <div className="z-20 flex items-center" style={{ height: "calc(100vh - 8rem)" }}>
            <div className="flex flex-col px-16">
                <h1 className="text-5xl leading-tight uppercase text-neutral">
                    Mozilla Campus Club <br /> And FOSS Community Of IIT
                </h1>
                <span className="mt-8 text-lg font-medium font-italic">
                    Contribute, Inspire and Innovate
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
        </div>
    );
}
