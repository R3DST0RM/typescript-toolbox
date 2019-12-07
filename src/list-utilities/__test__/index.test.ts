import { Predicate } from "../../variable-check/predicate";
import { filter, merge, mergeArray, mergeArrays, mergeSet } from "../index";

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

describe("mergeArrays function", () => {
    it("merges three arrays correctly", () => {
        const a = [1, 2, 3];
        const b = [3, 4, 5];
        const c = ["a", 1, 2];

        const d = ["b", 2, 3];
        const e = ["c", 3, 4];
        const f = ["d", 5, 6];

        expect(mergeArrays(a, b, c)).toEqual([1, 2, 3, 3, 4, 5, "a", 1, 2]);
        expect(mergeArrays(d, e, f)).toEqual(["b", 2, 3, "c", 3, 4, "d", 5, 6]);
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

describe("filter function", () => {
    it("filters an array using a Predicate", () => {
        const a = [1, 2, 3];
        const predicate = Predicate.of<number>(val => val >= 2);

        expect(filter(a, predicate)).toEqual([2, 3]);
    });
});
