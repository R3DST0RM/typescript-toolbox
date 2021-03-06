import { ifAssigned, isArray, isAssigned, isNil, isString, isStringEmpty, isTrimmedStringEmpty } from "../index";

describe("isNil", () => {
    it("returns true if variable is undefined", () => {
        const nullVariable = null;
        const undefinedVariable = undefined;
        const variableNumber = 1;
        const variableString = "a";
        const variableEmptyString = "";

        expect(isNil(nullVariable)).toBe(true);
        expect(isNil(undefinedVariable)).toBe(true);
        expect(isNil(variableEmptyString)).toBe(false);
        expect(isNil(variableNumber)).toBe(false);
        expect(isNil(variableString)).toBe(false);
    });
});

describe("isAssigned", () => {
    it("returns true if variable is defined", () => {
        const nullVariable = null;
        const undefinedVariable = undefined;
        const variableNumber = 1;
        const variableString = "a";
        const variableEmptyString = "";

        expect(isAssigned(nullVariable)).toBe(false);
        expect(isAssigned(undefinedVariable)).toBe(false);
        expect(isAssigned(variableEmptyString)).toBe(true);
        expect(isAssigned(variableNumber)).toBe(true);
        expect(isAssigned(variableString)).toBe(true);
    });
});

describe("isTrimmedStringEmpty", () => {
    it("returns true if empty string with whitespaces is passed", () => {
        const whitespaceString = "          ";
        const emptyString = "";
        const nonEmptyString = "nonEmpty";

        expect(isTrimmedStringEmpty(whitespaceString)).toBe(true);
        expect(isTrimmedStringEmpty(emptyString)).toBe(true);
        expect(isTrimmedStringEmpty(nonEmptyString)).toBe(false);
    });
});

describe("isStringEmpty", () => {
    it("returns true if empty string with whitespaces is passed", () => {
        const whitespaceString = "          ";
        const emptyString = "";
        const nonEmptyString = "nonEmpty";

        expect(isStringEmpty(whitespaceString)).toBe(false);
        expect(isStringEmpty(emptyString)).toBe(true);
        expect(isStringEmpty(nonEmptyString)).toBe(false);
    });
});

describe("isArray", () => {
    it.each`
        input         | result
        ${[]}         | ${true}
        ${[1, 2, 3]}  | ${true}
        ${["a", "b"]} | ${true}
        ${null}       | ${false}
        ${undefined}  | ${false}
        ${""}         | ${false}
        ${1}          | ${false}
        ${() => {
    /* void */
}} | ${false}
    `("returns true if input parameter is any type of string", ({ input, result }) => {
        expect(isArray(input)).toBe(result);
    });
});

describe("isString", () => {
    it.each`
        values          | result
        ${false}        | ${false}
        ${true}         | ${false}
        ${undefined}    | ${false}
        ${1}            | ${false}
        ${() => {
    /* void */
}} | ${false}
        ${{ a: "123" }} | ${false}
        ${[]}           | ${false}
        ${["abc"]}      | ${false}
        ${"hello"}      | ${true}
        ${""}           | ${true}
    `("returns $result when $values are used", ({ values, result }) => {
        expect(isString(values)).toEqual(result);
    });
});

describe("ifAssigned", () => {
    it("returns value from predicate function", () => {
        expect(ifAssigned(1, () => "ab", "0")).toEqual("ab");
        expect(ifAssigned(null, () => "ab", "0")).toEqual("0");
        expect(ifAssigned(undefined, () => "ab", "0")).toEqual("0");
    });
});
