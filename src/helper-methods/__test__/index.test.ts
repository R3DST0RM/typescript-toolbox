import { doNothing } from "../index";

describe("doNothing", () => {
   it("does not return anything", () => {
      expect(doNothing()).toReturn();
      expect(doNothing(1, 2, "bla")).toReturn();
   });
});