/**
 * Adds parameter a to b.
 * Simple addition
 * @example
 * add(5, 2) // => 7
 * @param a - First number
 * @param b - Second number
 */
export const add = (a: number, b: number): number => a + b;

/**
 * Subtracts number b from a.
 * Simple subtraction.
 * @example
 * sub(5, 2) // => 3
 * @param a - First number
 * @param b - Second number
 */
export const sub = (a: number, b: number): number => a - b;

/**
 * Return the same value that was used as argument.
 * @example
 * identity(5); // => 5
 * identity({ a: "b" }); // => { a: "b" }
 * @param x - Generic input argument that gets returned
 */
export const identity = <T>(x: T): T => x;
