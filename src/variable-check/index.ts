export const isTrimmedStringEmpty = <T extends string>(a: T): a is T => isStringEmpty(a.trim());

export const isStringEmpty = <T extends string>(a: T): a is T => isNil(a) || a.length === 0;

/**
 * Checks if a variable is a string and not null or undefined
 * @param a - Generic type <T>
 * @returns {boolean} - Whether or not the input parameter is a string
 */
export function isString<T>(a: T | unknown | null | undefined): a is string {
    return isAssigned<typeof a>(a) && typeof a === "string";
}

/**
 * Checks if a variable is an array and not null or undefined.
 * This function is enhanced with a type guard to satisfy later type checks for the scope.
 * @param a - Generic type <T>
 * @returns {boolean} - Expressing whether or not the input parameter is an array
 */
export function isArray<T>(a: T[] | T | unknown | null | undefined): a is T[] {
    return isAssigned<typeof a>(a) && Array.isArray(a);
}

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

/**
 * Execute the predicate function and return its value if and only if the variable is assigned.
 * @example
 * const a = 1;
 * const b = ifDefined(a, a => a * 2, 0); // b => 2
 *
 * const c = undefined;
 * const d = ifDefined(c, c => "hello", "world"); // d => world
 * @param variable
 * @param predicate
 * @param defaultValue
 * @returns {U | V} - Return the predicate return type U if variable is assigned otherwise return type V
 */
export const ifAssigned = <T, U, V>(variable: T, predicate: (a: T) => U, defaultValue: V): U | V =>
    isAssigned(variable) ? predicate(variable) : defaultValue;
