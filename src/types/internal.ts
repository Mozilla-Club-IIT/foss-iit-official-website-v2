export type MemberUnion = Member | MemberGroup;

export type Member = {
    name: string;
    role: string;
    imageURL: string;
    bio: string[];
    externalLinks: Partial<Record<ExternalLink, string>>;
    underlings?: Pick<Member, "name" | "imageURL">[];
};

export type MemberGroup = {
    name: string;
    members: Omit<Member, "underlings">[];
    underlings?: Member["underlings"];
};

export type Technology = {
    name: string;
    icon: string;
};

export type ExternalLink = "facebook" | "instagram" | "linkedin" | "github" | "tiktok";

export type Event = {
    name: string;
    description: string[];
    startingDate: Date;
    imageURL: string;
};

export type Project = {
    name: string;
    imageURL: string;
    date: Date;
    accent: "dark" | "light";
};
