import {Optional} from "../optional";
import { Predicate } from "../predicate";

describe("Optional", () => {
    it("orElse on an empty optional returns specified default value", () => {
        const emptyOptional = Optional.empty();

        expect(emptyOptional.orElse(10)).toBe(10);
    });

    it("parse null or undefined into optional throws an error", () => {
        expect(() => Optional.of(null)).toThrowError("Provided value can not be null or unassigned");
    });

    it("parse non null value into optional succeeds without error", () => {
        expect(() => Optional.of(1)).not.toThrowError("Provided value can not be null or unassigned");
    });

    it("parse null or undefined using ofNullable does not throw", () => {
        expect(() => Optional.ofNullable(null)).not.toThrowError("Provided value can not be null or unassigned");
        expect(() => Optional.ofNullable(undefined)).not.toThrowError("Provided value can not be null or unassigned");
    });

    it("orElse retrieves the value of Optional if not null", () => {
        const emptyOptional = Optional.empty();
        const nonEmptyOptional = Optional.of(5);

        expect(emptyOptional.orElse(1)).toBe(1);
        expect(nonEmptyOptional.orElse(0)).toBe(5);
    });

    it("orElseGet retrieves the value of Optional if not null and default if null or undefined", () => {
        const emptyOptional = Optional.empty();
        const nonEmptyOptional = Optional.of(5);

        expect(emptyOptional.orElseGet(() => 1)).toBe(1);
        expect(nonEmptyOptional.orElseGet(() => 0)).toBe(5);
    });

    it("map on empty optional returns an empty optional", () => {
        const emptyOptional = Optional.empty<null>();
        const mappedOptional = emptyOptional.map(val => 2);

        expect(mappedOptional.orElse("was empty")).toBe("was empty");
    });

    it("map on non empty optional returns mapped value", () => {
        const nonEmptyOptional = Optional.of(5);
        const mappedNonEmptyOptional = nonEmptyOptional.map(val => val * 2);

        expect(mappedNonEmptyOptional.orElse(undefined)).toBe(10);
    });

    it("flatMap on empty optional returns an empty optional", () => {
        const emptyOptional = Optional.empty<null>();
        const mappedOptional = emptyOptional.flatMap(val => null);

        expect(mappedOptional.orElse("was empty")).toBe("was empty");
    });

    it("map on non empty optional returns mapped value", () => {
        const nonEmptyOptional = Optional.of(5);
        const mappedNonEmptyOptional = nonEmptyOptional.flatMap(val => val * 2);

        expect(mappedNonEmptyOptional.orElse(undefined)).toBe(10);
    });

    it("isPresent returns true if value is present otherwise false", () => {
        const nonEmptyOptional = Optional.of(5);
        const emptyOptional = Optional.empty();

        expect(nonEmptyOptional.isPresent()).toBeTruthy();
        expect(emptyOptional.isPresent()).toBeFalsy();
    });
    
    it("calling filter, returns filtered value", () => {
        const metroYear: Optional<number> = Optional.of(2033);
        const isMetroYear2033: boolean = metroYear.filter<number>(Predicate.of<number>(y => y === 2033)).isPresent();
        const isMetroYear2019: boolean = metroYear.filter<number>(Predicate.of<number>(y => y === 2019)).isPresent();

        expect(isMetroYear2033).toBeTruthy();
        expect(isMetroYear2019).toBeFalsy();
    });
});
