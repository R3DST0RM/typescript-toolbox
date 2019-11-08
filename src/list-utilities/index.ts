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
