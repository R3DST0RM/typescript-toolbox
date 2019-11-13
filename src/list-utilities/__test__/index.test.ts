import { merge, mergeArray, mergeSet } from "../index";

describe("merge function", () => {
    it("merges two objects correctly", () => {
        const a = { b: 2, c: "hello" };
        const b = { b: 1, d: "world" };

        expect(merge(a, b)).toEqual({ b: 1, c: "hello", d: "world" });
    });
});

describe("mergeArray function", () => {
    it("merges two array correctly", () => {
        const a = [1, 2, 3];
        const b = [3, 4, 5];

        const c = ["a", 1, 2];
        const d = ["b", 2, 3];

        expect(mergeArray(a, b)).toEqual([1, 2, 3, 3, 4, 5]);
        expect(mergeArray(c, d)).toEqual(["a", 1, 2, "b", 2, 3]);
    });
});

describe("mergeSet function", () => {
    it("merges two array correctly while removing duplicates", () => {
        const a = [1, 2, 3];
        const b = [3, 4, 5];

        const c = ["a", 1, 2];
        const d = ["b", 2, 3];

        expect(mergeSet(a, b)).toEqual([1, 2, 3, 4, 5]);
        expect(mergeSet(c, d)).toEqual(["a", 1, 2, "b", 3]);
    });
});
