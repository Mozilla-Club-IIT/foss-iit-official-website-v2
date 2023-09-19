import type { Event, Member, WIFBoardOfficial } from "@/types/internal";

export const event: Event = {
    name: "OpenHack 3.0",
    imageURL: "/openhack.png",
    description: [
        "The signature event of the club was successfully held as an inter-university hackathon and a designathon in 2022. The event is expected to be held in 2023 as well.",
    ],
    startingDate: new Date("2023-08-18"),
};

export const events: Event[] = Array.from({ length: 5 }).map((_, i) => ({
    ...event,
    name: `OpenHack ${i}`,
}));

export const members: Record<0 | 1 | 2 | 3, Member | Member[]> = {
    0: {
        name: "Sahan Ekanayake",
        role: "President - Mozzila Campus club of IIT",
        imageURL: "/portraits/nadul.png",
        externalLinks: { linkedin: "http://linkedin.com" },
        occupations: ["Software Engineer", "UI/UX Designer"],
    },
    1: {
        name: "Sachith Arianatha",
        role: "President ",
        imageURL: "/portraits/nadul.png",
        externalLinks: { linkedin: "http://linkedin.com" },
        occupations: ["Software Engineer", "UI/UX Designer"],
    },
    2: [
        {
            name: "Bhagya",
            role: "President ",
            imageURL: "/portraits/nadul.png",
            externalLinks: { linkedin: "http://linkedin.com" },
            occupations: ["Software Engineer", "UI/UX Designer"],
        },
        {
            name: "Vinuja",
            role: "President ",
            imageURL: "/portraits/nadul.png",
            externalLinks: { linkedin: "http://linkedin.com" },
            occupations: ["Software Engineer", "UI/UX Designer"],
        },
        {
            name: "Devmal",
            role: "President ",
            imageURL: "/portraits/nadul.png",
            externalLinks: { linkedin: "http://linkedin.com" },
            occupations: ["Software Engineer", "UI/UX Designer"],
        },
    ],
    3: [
        {
            name: "Media Directors",
            role: "President ",
            imageURL: "/portraits/nadul.png",
            externalLinks: { linkedin: "http://linkedin.com" },
            occupations: ["Software Engineer", "UI/UX Designer"],
        },
        {
            name: "Manupa Chathurwara",
            role: "Director of IIT",
            imageURL: "/portraits/nadul.png",
            externalLinks: { linkedin: "http://linkedin.com" },
            occupations: ["Software Engineer", "UI/UX Designer"],
            underlings: [
                {
                    name: "Sahan Ekanayake",
                    imageURL: "/portraits/nadul.png",
                    occupations: ["Software Engineer", "UI/UX Designer"],
                },
                {
                    name: "Sahan Ekanayake",
                    imageURL: "/portraits/nadul.png",
                    occupations: ["Software Engineer", "UI/UX Designer"],
                },
            ],
        },
        {
            name: "Abrar",
            role: "Director Membership & Club Growth",
            imageURL: "/portraits/nadul.png",
            externalLinks: { linkedin: "http://linkedin.com" },
            occupations: ["Software Engineer", "UI/UX Designer"],
        },
        {
            name: "Shakthi ",
            role: "Editor",
            imageURL: "/portraits/nadul.png",
            externalLinks: { linkedin: "http://linkedin.com" },
            occupations: ["Software Engineer", "UI/UX Designer"],
        },
    ],
};

export const developers: Member[] = [
    {
        name: "Sahan Dissanayake",
        role: "UI/UX Designer",
        imageURL: "/react-logo.png",
        externalLinks: { linkedin: "http://linkedin.com" },
        occupations: ["Software Engineer", "UI/UX Designer"],
    },
    {
        name: "Sahan Dissanayake",
        role: "UI/UX Designer",
        imageURL: "/react-logo.png",
        externalLinks: { linkedin: "http://linkedin.com" },
        occupations: ["Software Engineer", "UI/UX Designer"],
    },
    {
        name: "Sahan Dissanayake",
        role: "UI/UX Designer",
        imageURL: "/react-logo.png",
        externalLinks: { linkedin: "http://linkedin.com" },
        occupations: ["Software Engineer", "UI/UX Designer"],
    },
    {
        name: "Sahan Dissanayake",
        role: "UI/UX Designer",
        imageURL: "/react-logo.png",
        externalLinks: { linkedin: "http://linkedin.com" },
        occupations: ["Software Engineer", "UI/UX Designer"],
    },
    {
        name: "Sahan Dissanayake",
        role: "UI/UX Designer",
        imageURL: "/react-logo.png",
        externalLinks: { linkedin: "http://linkedin.com" },
        occupations: ["Software Engineer", "UI/UX Designer"],
    },
];

export const wifBoard: WIFBoardOfficial[] = [
    {
        name: "Bhagya Semage",
        imageURL: "/portraits/bhagya.png",
        externalLinks: { linkedin: "http://linkedin.com" },
    },
    {
        name: "Stefania Hapuarachchi",
        imageURL: "/portraits/stefania.png",
        externalLinks: { linkedin: "http://linkedin.com" },
    },
    {
        name: "Buddhima Fernando",
        imageURL: "/portraits/buddhima.png",
        externalLinks: { linkedin: "http://linkedin.com" },
    },
    {
        name: "Nadul Jayasundera",
        imageURL: "/portraits/nadul.png",
        externalLinks: { linkedin: "http://linkedin.com" },
    },
];
