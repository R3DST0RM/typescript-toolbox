type ValidatorFunction<T> = (inputParam: T) => boolean;
interface WaitOptions {
    timeout?: number;
    interval?: number;
}

const DEFAULT_TIMEOUT = 5000;
const DEFAULT_INTERVAL = 100;
const DEFAULT_WAIT_OPTIONS: WaitOptions = { timeout: DEFAULT_TIMEOUT, interval: DEFAULT_INTERVAL };

/**
 * This function waits for the `validatorFn` parameter to return true.
 * If the validator function returns true, the created promise will be resolved.
 * Otherwise the promise will be rejected.
 *
 * @example
 * import { mount } from "enzyme";
 *
 * const wrapper = mount(<SomeReactComponent />);
 * await waitFor(wrapper, wrapper => wrapper.find(SomeReactComponentChild).length === 2);
 * @param validatorInput - Input value for the validator function
 * @param validatorFn - A validator function which should resolve to true if code shall be continued.
 * @param waitOptions - Wait options like, timeout and interval.
 */
export const waitFor = <T>(
    validatorInput: T,
    validatorFn: ValidatorFunction<T>,
    waitOptions: WaitOptions = DEFAULT_WAIT_OPTIONS,
) => {
    const timeout = waitOptions.timeout || DEFAULT_TIMEOUT;
    const interval = waitOptions.interval || DEFAULT_INTERVAL;
    let numberOfRetries = timeout / interval;

    return new Promise((resolve, reject) => {
        const pollingFunction = setInterval(() => {
            if (validatorFn(validatorInput)) {
                clearInterval(pollingFunction);
                resolve();
            }

            numberOfRetries -= 1;

            if (numberOfRetries < 0) {
                clearInterval(pollingFunction);
                reject("Timeout reached and validator function did not return true");
            }
        });
    });
};
