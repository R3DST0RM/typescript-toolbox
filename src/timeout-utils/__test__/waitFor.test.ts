import {waitFor} from "../waitFor";

describe("waitFor function", () => {
    it("successfully executes validator function and return.", done => {
        const doSomeCalculation = (n: number): number => (n === 0 ? 1 : n * doSomeCalculation(n - 1));

        waitFor(doSomeCalculation(10), result => {
            done();
            return result !== 0;
        });
    });

    it("rejects if validator does not return true in time", done => {
        waitFor(null, () => false, {interval: 20, timeout: 50})
            .then(() => {
                throw Error("Should not enter here");
            })
            .catch(() => done());
    });

    it("is possible to provide empty object as wait options. Default values will be used instead", done => {
        waitFor(null, () => true, {
            /* Left empty on purpose */
        })
            .then(() => done())
            .catch(() => done());
    });
});
