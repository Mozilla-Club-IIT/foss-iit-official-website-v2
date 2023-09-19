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
        imageURL: "/portraits/Sahan.jpg",
        externalLinks: { linkedin: "http://linkedin.com" },
        occupations: ["Software Engineer", "UI/UX Designer"],
    },
    1: {
        name: "Sachith Arianatha",
        role: "President ",
        imageURL: "/portraits/sachith.jpg",
        externalLinks: { linkedin: "http://linkedin.com" },
        occupations: ["Software Engineer", "UI/UX Designer"],
    },
    2: [
        {
            name: "Bhagya",
            role: "President ",
            imageURL: "/portraits/Bhagya.jpg",
            externalLinks: { linkedin: "http://linkedin.com" },
            occupations: ["Software Engineer", "UI/UX Designer"],
        },
        {
            name: "Vinuja",
            role: "President ",
            imageURL: "/portraits/vinuja.jpg",
            externalLinks: { linkedin: "http://linkedin.com" },
            occupations: ["Software Engineer", "UI/UX Designer"],
        },
        {
            name: "Devmal",
            role: "President ",
            imageURL: "/portraits/devmal.jpg",
            externalLinks: { linkedin: "http://linkedin.com" },
            occupations: ["Software Engineer", "UI/UX Designer"],
        },
    ],
    3: [
        {
            name: "Media Directors",
            role: "President ",
            imageURL: "/portraits/nadul.jpg",
            externalLinks: { linkedin: "http://linkedin.com" },
            occupations: ["Software Engineer", "UI/UX Designer"],
        },
        {
            name: "Manupa Chathurwara",
            role: "Director of IIT",
            imageURL: "/portraits/manupa.jpg",
            externalLinks: { linkedin: "http://linkedin.com" },
            occupations: ["Software Engineer", "UI/UX Designer"],
            underlings: [
                {
                    name: "Sahan Ekanayake",
                    imageURL: "/portraits/nadul.jpg",
                    occupations: ["Software Engineer", "UI/UX Designer"],
                },
                {
                    name: "Sahan Ekanayake",
                    imageURL: "/portraits/nadul.jpg",
                    occupations: ["Software Engineer", "UI/UX Designer"],
                },
            ],
        },
        {
            name: "Abrar",
            role: "Director Membership & Club Growth",
            imageURL: "/portraits/abrar.jpg",
            externalLinks: { linkedin: "http://linkedin.com" },
            occupations: ["Software Engineer", "UI/UX Designer"],
        },
        {
            name: "Shakthi ",
            role: "Editor",
            imageURL: "/portraits/Shakthi.jpg",
            externalLinks: { linkedin: "http://linkedin.com" },
            occupations: ["Software Engineer", "UI/UX Designer"],
        },
    ],
};

export const developers: Member[] = [
    {
        name: "Rachala Ovin",
        role: "Developer",
        imageURL: "/portraits/Sahan.jpg",
        externalLinks: { linkedin: "http://linkedin.com" },
        occupations: ["Software Engineer", "UI/UX Designer"],
    },
    {
        name: "Chamidu Amarasinghe",
        role: "UI/UX Designer",
        imageURL: "/portraits/chamidu.jpg",
        externalLinks: { linkedin: "http://linkedin.com" },
        occupations: ["Software Engineer", "UI/UX Designer"],
    },
    {
        name: "Afeef Razick",
        role: "Developer",
        imageURL: "/portraits/afeef.jpg",
        externalLinks: { linkedin: "http://linkedin.com" },
        occupations: ["Software Engineer", "UI/UX Designer"],
    },

    {
        name: "Ravindu Senarathna",
        role: "Developer",
        imageURL: "/portraits/ravindu.jpg",
        externalLinks: { linkedin: "http://linkedin.com" },
        occupations: ["Software Engineer", "UI/UX Designer"],
    },
];

export const wifBoard: WIFBoardOfficial[] = [
    {
        name: "Bhagya Semage",
        imageURL: "/portraits/Bhagya.jpg",
        externalLinks: { linkedin: "http://linkedin.com" },
    },
    {
        name: "Stefania Hapuarachchi",
        imageURL: "/portraits/Stef.jpg",
        externalLinks: { linkedin: "http://linkedin.com" },
    },
    {
        name: "Buddhima Fernando",
        imageURL: "/portraits/buddhima.jpg",
        externalLinks: { linkedin: "http://linkedin.com" },
    },
    {
        name: "Nadul Jayasundera",
        imageURL: "/portraits/Nadul.jpg",
        externalLinks: { linkedin: "http://linkedin.com" },
    },
];
