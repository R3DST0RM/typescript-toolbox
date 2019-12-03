import { Predicate } from "../predicate";

describe("Predicate.ts", () => {
    const isGreaterThanFive = Predicate.of<number>(x => x > 5);
    const isLessThanFive = Predicate.of<number>(x => x < 5);
    const isLessThanTen = Predicate.of<number>(x => x < 10);

    it("testing number predicate returns true for valid condition", () => {
        expect(isGreaterThanFive.test(6)).toBeTruthy();
    });

    it("testing number predicate returns false for valid condition", () => {
        expect(isLessThanFive.test(6)).toBeFalsy();
    });

    it("negating the predicate, negates the result", () => {
       expect(isGreaterThanFive.negate().test(4)).toBeTruthy();
    });

    it("concatenating (and) two predicates return a valid result", () => {
        expect(isGreaterThanFive.and(isLessThanTen).test(7)).toBeTruthy();
        expect(isGreaterThanFive.and(isLessThanTen).test(4)).toBeFalsy();
    });

    it("concatenating (or) two predicates return a valid result", () => {
        expect(isGreaterThanFive.or(isLessThanFive).test(4)).toBeTruthy();
        expect(isGreaterThanFive.or(isLessThanFive).test(6)).toBeTruthy();
    });
});
