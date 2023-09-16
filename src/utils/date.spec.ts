import { getFancyDate } from "@/utils/date";

describe("getFancyDate", () => {
    test("should return a fancy date", () => {
        const date = new Date("2021-01-01");
        const fancyDate = getFancyDate(date);
        expect(fancyDate).toBe("January 1, 2021");
    });
});
