import { doNothing } from "../index";

describe("doNothing", () => {
    it("does not return anything", () => {
        expect(doNothing()).toEqual(undefined);
        expect(doNothing(1, 2, "bla")).toEqual(undefined);
    });
});
