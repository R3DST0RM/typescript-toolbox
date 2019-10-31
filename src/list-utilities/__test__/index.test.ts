import { merge } from "../index";

describe("merge function", () => {
    it("merges two objects correctly", () => {
        const a = { b: 2, c: "hello" };
        const b = { b: 1, d: "world" };

        expect(merge(a, b)).toEqual({ b: 1, c: "hello", d: "world" });
    });
});