import { doNothing } from "./helper-methods";
import { merge, mergeArray, mergeArrays, mergeSet, OptionalRecord } from "./list-utilities";
import { add, identity, product, sub } from "./math-functions";
import { waitFor } from "./timeout-utils/waitFor";
import { ifAssigned, isArray, isAssigned, isNil, isString, isStringEmpty, isTrimmedStringEmpty } from "./variable-check";

export {
    doNothing,
    identity,
    ifAssigned,
    isArray,
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
    product,
};
