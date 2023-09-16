export type Member = {
    name: string;
    role: string;
    imageURL: string;
    externalLinks: Partial<Record<ExternalLink, string>>;
};

export type Technology = {
    name: string;
    icon: string;
};

export type ExternalLink = "facebook" | "instagram" | "linkedin" | "github" | "twitter";

export type WIFBoardOfficial = {
    name: string;
    imageURL: string;
    externalLinks?: Partial<Record<ExternalLink, string>>;
};

export type Event = {
    name: string;
    description: string[];
    startingDate: Date;
    imageURL: string;
};
