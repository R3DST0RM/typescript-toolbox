import {waitFor} from "../waitFor";

describe("waitFor function", () => {
    it("successfully executes validator function and return.", done => {
        const doSomeCalculation = (n: number): number => (n === 0 ? 1 : n * doSomeCalculation(n - 1));

        waitFor(doSomeCalculation(10), result => {
            done();
            return result !== 0;
        });
    });
});
