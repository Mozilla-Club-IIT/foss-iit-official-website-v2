export const getFancyDate = (date: Date | string): string => {
    if (typeof date === "string") return date;

    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
};
