export const isTrimmedStringEmpty = <T extends string>(a: T): a is T => isStringEmpty(a.trim());

export const isStringEmpty = <T extends string>(a: T): a is T => isNil(a) || a.length === 0;

/**
 * Checks if variable `a` isNil.
 * @example
 * isNil<string>(null) // returns true
 * isNil<string>("") // returns false
 * @param a - Generic type <T>
 */
export const isNil = <T>(a: T | null | undefined): a is null | undefined => a === null || a === undefined;

/**
 * Checks if variable `a` is not nil.
 * @example
 * isAssigned<string>(null) // returns false
 * isAssigned<string>("") // returns true
 * @param a - Generic type <T>
 */
export const isAssigned = <T>(a: T | null | undefined): a is T => !isNil(a);
