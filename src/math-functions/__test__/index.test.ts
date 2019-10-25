import { add, sub } from "../index";

describe("", () => {
    it("adds number correctly", () => {
        expect(add(5, 2)).toBe(7);
    });

    it("subtracts number correctly", () => {
        expect(sub(5, 2)).toBe(3);
    });
});
