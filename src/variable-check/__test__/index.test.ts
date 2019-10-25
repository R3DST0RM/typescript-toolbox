import { isAssigned, isNil, isStringEmpty, isTrimmedStringEmpty } from "../index";

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
