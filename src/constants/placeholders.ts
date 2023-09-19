import type {
    Event,
    Member,
    MemberGroup,
    MemberUnion,
    Project,
    WIFBoardOfficial,
} from "@/types/internal";

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

export const members: Record<0 | 1 | 2 | 3, MemberUnion | MemberUnion[]> = {
    0: {
        name: "Sahan Dissanayake",
        role: "President - Mozzila Campus club of IIT",
        imageURL: "/portraits/Sahan.jpg",
        externalLinks: { linkedin: "https://www.linkedin.com/in/sahan-dissanayake-82291516a/" },
        occupations: [
            "Undergraduate trainee - Software Engineering @ IFS R&D | Software engineering undergraduate  @ IIT ",
        ],
    },
    1: {
        name: "Sachith Wickramasekara",
        role: "Vice President",
        imageURL: "/portraits/sachith.jpg",
        externalLinks: { linkedin: "https://www.linkedin.com/in/sachith-wickramasekara/" },
        occupations: ["Software Engineer", "UI/UX Designer"],
    },
    2: [
        {
            name: "Bhagya Semage",
            role: "Secretary ",
            imageURL: "/portraits/Bhagya.jpg",
            externalLinks: { linkedin: "https://www.linkedin.com/in/bhagya-semage-311b7b237/" },
            occupations: ["Software Engineer", "UI/UX Designer"],
        },
        {
            name: "Vinuja Jayathilake",
            role: "Treasurer ",
            imageURL: "/portraits/vinuja.jpg",
            externalLinks: { linkedin: "https://www.linkedin.com/in/vinuja-jayathilake/" },
            occupations: ["Software Engineer", "UI/UX Designer"],
        },
        {
            name: "Devmal Wijesinghe",
            role: "President ",
            imageURL: "/portraits/devmal.jpg",
            externalLinks: { linkedin: "https://www.linkedin.com/in/devmalwije/" },
            occupations: ["Software Engineer", "UI/UX Designer"],
        },
    ],
    3: [
        {
            name: "Media Directors",
            imageURL: "/portraits/nadul.jpg",
            underlings: [],
            members: [
                {
                    name: "Person one",
                    role: "Director of IIT",
                    imageURL: "/portraits/Shakthi.jpg",
                    occupations: ["Main in FOSS, Free & open, just for you :)"],
                    externalLinks: { linkedin: "http://linkedin.com" },
                },
                {
                    name: "Person one",
                    role: "Director of IIT",
                    imageURL: "/portraits/Shakthi.jpg",
                    occupations: ["Main in FOSS, Free & open, just for you :)"],
                    externalLinks: { linkedin: "http://linkedin.com" },
                },
            ],
        },
        {
            name: "Manupa Samarawickrama",
            role: "Director of IIT",
            imageURL: "/portraits/manupa.jpg",
            externalLinks: { linkedin: "https://www.linkedin.com/in/manupa-samarawickrama/" },
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
            name: "Abrar Ahmed",
            role: "Director Membership & Club Growth",
            imageURL: "/portraits/abrar.jpg",
            externalLinks: { linkedin: "https://www.linkedin.com/in/abrar-ahmed-028368255/" },
            occupations: ["Computer Science Enthusiast. Linux Enthusiast. Loves FOSS."],
        },
        {
            name: "Shakthi Warnakulasuriya",
            role: "Editor",
            imageURL: "/portraits/Shakthi.jpg",
            externalLinks: { linkedin: "https://www.linkedin.com/in/shakthi-warnakulasuriya-/" },
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
        externalLinks: { linkedin: "https://www.linkedin.com/in/bhagya-semage-311b7b237/" },
    },
    {
        name: "Stefania Hapuarachchi",
        imageURL: "/portraits/Stef.jpg",
        externalLinks: { linkedin: "https://www.linkedin.com/in/stefania-hapuarachchi/" },
    },
    {
        name: "Buddhima Fernando",
        imageURL: "/portraits/buddhima.jpg",
        externalLinks: { linkedin: "https://www.linkedin.com/in/buddhima-fernando/" },
    },
    {
        name: "Nadul Jayasundera",
        imageURL: "/portraits/Nadul.jpg",
        externalLinks: { linkedin: "https://www.linkedin.com/in/nadul-jayasundera-616021257/" },
    },
];

export const projects: Project[] = [
    {
        name: "OpenHack 3.0",
        accent: "light",
        imageURL: "/projects/openhack3.png",
        date: new Date("2023-12-1"),
    },
    {
        name: "Summer Bootcamp",
        accent: "dark",
        imageURL: "/projects/summer-bootcamp.png",
        date: new Date("2023-08-14"),
    },
    { name: "Her.exe", accent: "light", imageURL: "/projects/her-exe.png", date: new Date() },
];
