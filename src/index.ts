import { merge, mergeArray, mergeArrays, mergeSet, OptionalRecord } from "./list-utilities";
import { add, identity, sub } from "./math-functions";
import { waitFor } from "./timeout-utils/waitFor";
import { isAssigned, isNil, isString, isStringEmpty, isTrimmedStringEmpty } from "./variable-check";

export {
    identity,
    isAssigned,
    isNil,
    isStringEmpty,
    isString,
    isTrimmedStringEmpty,
    OptionalRecord,
    add,
    sub,
    waitFor,
    merge,
    mergeArray,
    mergeArrays,
    mergeSet,
};
