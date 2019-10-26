type ValidatorFunction<T> = (inputParam: T) => boolean;
interface WaitOptions {
    timeout?: number;
    interval?: number;
}

const DEFAULT_TIMEOUT = 5000;
const DEFAULT_INTERVAL = 100;
const DEFAULT_WAIT_OPTIONS: WaitOptions = { timeout: DEFAULT_TIMEOUT, interval: DEFAULT_INTERVAL };

export const waitFor = <T>(validatorInput: T, validatorFn: ValidatorFunction<T>, waitOptions: WaitOptions = DEFAULT_WAIT_OPTIONS) => {
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
