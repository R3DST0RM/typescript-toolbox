import {waitFor} from "../../index";

describe("waitFor function", () => {
    it("successfully executes validator function and return.", done => {
        const doSomeCalculation = (n: number): number => {
            if (n === 0) return 1;

            return n * doSomeCalculation(n - 1);
        };

        waitFor(doSomeCalculation(10), result => {
            done();
            return result != 0;
        })
    });
});