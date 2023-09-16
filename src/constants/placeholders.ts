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
    },
    1: {
        name: "Sachith Arianatha",
        role: "President - Mozilla Campus club of IIT",
        imageURL: "/portraits/nadul.png",
        externalLinks: { linkedin: "http://linkedin.com" },
    },
    2: [
        {
            name: "Bhagya",
            role: "President - Mozilla Campus club of IIT",
            imageURL: "/portraits/nadul.png",
            externalLinks: { linkedin: "http://linkedin.com" },
        },
        {
            name: "Vinuja",
            role: "President - Mozilla Campus club of IIT",
            imageURL: "/portraits/nadul.png",
            externalLinks: { linkedin: "http://linkedin.com" },
        },
        {
            name: "Devmal",
            role: "President - Mozilla Campus club of IIT",
            imageURL: "/portraits/nadul.png",
            externalLinks: { linkedin: "http://linkedin.com" },
        },
    ],
    3: [
        {
            name: "Media Directors",
            role: "President - Mozilla Campus club of IIT",
            imageURL: "/portraits/nadul.png",
            externalLinks: { linkedin: "http://linkedin.com" },
        },
        {
            name: "Manupa Chathurwara",
            role: "Director of IIT",
            imageURL: "/portraits/nadul.png",
            externalLinks: { linkedin: "http://linkedin.com" },
        },
        {
            name: "Abrar",
            role: "Director Membership & Club Growth",
            imageURL: "/portraits/nadul.png",
            externalLinks: { linkedin: "http://linkedin.com" },
        },
        {
            name: "Shakthi ",
            role: "Editor",
            imageURL: "/portraits/nadul.png",
            externalLinks: { linkedin: "http://linkedin.com" },
        },
    ],
};

export const developers: Member[] = [
    {
        name: "Sahan Dissanayake",
        role: "UI/UX Designer",
        imageURL: "/react-logo.png",
        externalLinks: { linkedin: "http://linkedin.com" },
    },
    {
        name: "Sahan Dissanayake",
        role: "UI/UX Designer",
        imageURL: "/react-logo.png",
        externalLinks: { linkedin: "http://linkedin.com" },
    },
    {
        name: "Sahan Dissanayake",
        role: "UI/UX Designer",
        imageURL: "/react-logo.png",
        externalLinks: { linkedin: "http://linkedin.com" },
    },
    {
        name: "Sahan Dissanayake",
        role: "UI/UX Designer",
        imageURL: "/react-logo.png",
        externalLinks: { linkedin: "http://linkedin.com" },
    },
    {
        name: "Sahan Dissanayake",
        role: "UI/UX Designer",
        imageURL: "/react-logo.png",
        externalLinks: { linkedin: "http://linkedin.com" },
    },
];

export const wifBoard: WIFBoardOfficial[] = [
    {
        name: "Nadul Jayasundera",
        imageURL: "/portraits/nadul.png",
        externalLinks: { linkedin: "http://linkedin.com" },
    },
    {
        name: "Nadul Jayasundera",
        imageURL: "/portraits/nadul.png",
        externalLinks: { linkedin: "http://linkedin.com" },
    },
    {
        name: "Nadul Jayasundera",
        imageURL: "/portraits/nadul.png",
        externalLinks: { linkedin: "http://linkedin.com" },
    },
    {
        name: "Nadul Jayasundera",
        imageURL: "/portraits/nadul.png",
        externalLinks: { linkedin: "http://linkedin.com" },
    },
];
