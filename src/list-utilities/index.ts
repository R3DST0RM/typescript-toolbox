export type OptionalRecord<K extends string | number, T> = { [P in K]: T | undefined };

type _InternalCombinedType<T, U> = T & U;

/**
 * Merges two objects together.
 * @param base
 * @param toMerge
 * @returns object - A new object where both inputs are merged
 */
export const merge = <T extends object, U extends object>(base: T, toMerge: U): _InternalCombinedType<T, U> => {
    return { ...base, ...toMerge };
};

/**
 * Merges two arrays together.
 * Hint: Merging two arrays does NOT remove duplicates!
 * @param base
 * @param toMerge
 * @returns object - A new array where both inputs are merged
 */
export const mergeArray = <T extends any[], U extends any[]>(base: T, toMerge: U): _InternalCombinedType<T[], U[]> => {
    return [...base, ...toMerge];
};

/**
 * Merges multiple arrays together and flattens the result by one.
 * Hint: Merging multiple arrays does NOT remove duplicates!
 * @param base
 * @param arrays
 * @returns object - A new array where all input arrays are merged together
 */
export const mergeArrays = <T extends any[], U extends any[]>(base: T, ...arrays: U): _InternalCombinedType<T[], U[]> => {
    return [...base, ...arrays].reduce((acc, val) => acc.concat(val), []);
}

/**
 * Merges two arrays together by removing duplicate values
 * @param base
 * @param toMerge
 * @returns object - A new array where both inputs are merged and duplicates are removed
 */
export const mergeSet = <T extends any[], U extends any[]>(base: T, toMerge: U) => {
    return Array.from(new Set(mergeArray(base, toMerge)));
};
