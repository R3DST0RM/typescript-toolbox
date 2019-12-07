import { doNothing } from "./helper-methods";
import { filter, merge, mergeArray, mergeArrays, mergeSet, OptionalRecord, OptionalNullRecord } from "./list-utilities";
import { add, identity, product, sub } from "./math-functions";
import { waitFor } from "./timeout-utils/waitFor";
import {
    ifAssigned,
    isArray,
    isAssigned,
    isNil,
    isString,
    isStringEmpty,
    isTrimmedStringEmpty,
} from "./variable-check";

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
    OptionalNullRecord,
    add,
    sub,
    waitFor,
    merge,
    mergeArray,
    mergeArrays,
    mergeSet,
    product,
    filter,
};
