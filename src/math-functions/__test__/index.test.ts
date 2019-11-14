import { add, identity, product, sub } from "../index";

describe("add / sub function", () => {
    it("adds number correctly", () => {
        expect(add(5, 2)).toBe(7);
    });

    it("subtracts number correctly", () => {
        expect(sub(5, 2)).toBe(3);
    });
});

describe("identity function", () => {
    it("returns the same value that was used as argument", () => {
        const identValue = { a: "b" };
        const identFunc = () => 2;

        expect(identity(5)).toBe(5);
        expect(identity(identValue)).toBe(identValue);
        expect(identity(identFunc)).toBe(identFunc);
    });
});

describe("product function", () => {
    it.each`
        inputArray              | expectedResult
        ${[2, 4, 6, 8, 100, 1]} | ${38400}
        ${[2, 4, 1, 7, 10, 5]}  | ${2800}
    `(
        "returns the product of any given number array",
        ({ inputArray, expectedResult }: { inputArray: number[]; expectedResult: number }) => {
            expect(product(inputArray)).toBe(expectedResult);
        },
    );
});
