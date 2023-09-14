import cn from "./cn";

describe("test cn compat with tw and uno", () => {
    test("cn should merge int palettes", () => {
        const x = cn("bg-red-500", "bg-blue-500");
        expect(x).toBe("bg-blue-500");
    });
    test("cn should merge colors with inferred palettes", () => {
        const x = cn("bg-red", "bg-blue");
        expect(x).toBe("bg-blue");
    });
});
