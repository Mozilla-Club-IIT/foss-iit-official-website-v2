import { FC } from "react";

export default function Home() {
    return (
        <div className="z-20 flex flex-col">
            <Hero />
            <WhoAreWe />
            <OurVision />
            <OurMission />
        </div>
    );
}

const Hero: FC = () => {
    return (
        <div className="flex items-center" style={{ height: "calc(100vh - 8rem)" }}>
            <div className="flex flex-col px-16">
                <h1 className="text-5xl leading-tight uppercase text-text-neutral">
                    Mozilla Campus Club <br /> And FOSS Community Of IIT
                </h1>
                <span className="mt-8 text-lg font-medium font-italic">
                    Contribute, Inspire and Innovate
                </span>

                <div className="mt-24 inline-flex gap-8">
                    <button className="h-10 rounded-xl bg-accent-dark px-6 font-medium shadow">
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
};

const WhoAreWe: FC = () => {
    return (
        <div className="mt-24 max-w-3xl flex flex-col px-16 prose">
            <h1 className="uppercase">Who are we</h1>
            <p>
                FOSS (Free and Open-Source Software) community of IIT was initiated in our
                university in November 2020 to promote the use and development of free and
                open-source software.
            </p>
            <p>
                Although the FOSS community is new to IIT, we have already conducted programs to
                advance the club’s progress and collaborated for events with the FOSS communities of
                reputed universities to advocate and is responsible for.
            </p>
            <p>
                The Mozilla Campus Club of Informatics Institute of Technology (IIT) has been in a
                society with a long-standing reputation for hosting sessions and events that
                encourage students to contribute to keeping resources and information on the
                Internet public and accessible to all.
            </p>
        </div>
    );
};

const OurVision: FC = () => {
    return (
        <div className="mt-24 max-w-3xl flex flex-col px-16 prose">
            <h1 className="uppercase">Our Vision</h1>
            <p>
                To advocate for the innovation and development of open-source projects and strive to
                make the information on the web accessible and free for all. Vision - To acquire
                software freedom and to make the Internet free and accessible to all spark a
                movement a loud voice, a breeding ground for new ideas, a massive force, and a deep
                talent pool that powers the open web to new heights.
            </p>
        </div>
    );
};

const OurMission: FC = () => {
    return (
        <div className="my-24 max-w-3xl flex flex-col px-16 prose">
            <h1 className="uppercase">Our Mission</h1>
            <p>
                To acquire software freedom and to make the Internet free and accessible to all
                spark a movement a loud voice, a breeding ground for new ideas, a massive force, and
                a deep talent pool that powers the open web to new heights.
            </p>
        </div>
    );
};
