# Typescript-Utils

[![GitHub issues](https://img.shields.io/github/issues/R3DST0RM/typescript-toolbox)](https://github.com/R3DST0RM/typescript-toolbox/issues)
[![GitHub release](https://img.shields.io/github/v/release/R3DST0RM/typescript-toolbox.svg)](https://github.com/R3DST0RM/typescript-toolbox/releases)
[![Build Status](https://travis-ci.org/R3DST0RM/typescript-toolbox.svg?branch=master)](https://travis-ci.org/R3DST0RM/typescript-toolbox)
[![Coverage Status](https://coveralls.io/repos/github/R3DST0RM/typescript-utils/badge.svg?branch=master)](https://coveralls.io/github/R3DST0RM/typescript-utils?branch=master)

Everything your TypeScript project needs. This library is a collection of helpful methods I came up with while developing software using TypeScript.

## Array utils

-  mergeArray (`<T extends any[], U extends any[]>(base: T, toMerge: U): _InternalCombinedType<T[], U[]>`)

Merges two arrays together and returns a concatenated version.

Hint: Merging two arrays does NOT remove duplicate values, use `mergeSet` instead.

-  mergeArrays (`<T extends any[], U extends any[]>(base: T, ...arrays: U): _InternalCombinedType<T[], U[]>`)

Merges two or more arrays together and returns a concatenated version.

Hint: Merging *n* arrays does NOT remove duplicate values.

-  mergeSet (`<T extends any[], U extends any[]>(base: T, toMerge: U)`)

Merges two arrays together and returns a concatenated version. It also removes duplicate values.

## Object utils

-  merge (`<T extends object, U extends object>(base: T, toMerge: U): _InternalCombinedType<T, U>`)

Merges two objects together and returns a concatenated version.

_If a property is in both object the latter version will win. Means, that `base` value will be overridden by `toMerge` object_

## Variable Checks

- isNil (`<T>(a: T | null | undefined): a is null | undefined`)

Checks whether a variable is `null` or `undefined` and returns `true`. This method is also making use of the TypeScript type guard to ensure type safety for the current scope.

- ifAssigned (`<T, U, V>(variable: T, predicate: (a: T) => U, defaultValue: V): U | V`)

Check if a variable is assigned, if it is, execute the predicate function and return it's value. Otherwise return the default value specified.

- isAssigned (`<T>(a: T | null | undefined): a is T`)

It's the inversion of `isNil` and returns `true` if the given variable has any value assigned. This function also makes use of TypeScript type guards.

- isString (`<T>(a: T | unknown | null | undefined): a is string`)

Checks a given parameter if it is a string and returns a type guard ensuring, that it's either a string or not.

- isArray (`<T>(a: T[] | T | unknown | null | undefined): a is T[]`)

Checks a given parameter if it is an array and returns a type guard ensuring, that it's either an array or not.

## Typings

- OptionalRecord `type OptionalRecord<K extends string | number, T>`

A type for correctly typing a list with a value of `T` and `undefined`. This type should avoid write the following:

```typescript
// The old way
const a: Record<string, number | undefined> = { a: 5, b: undefined };

// Instead it's now
const b: OptionalRecord<string, number> = { a: 5, b: undefined };
```

## String utility methods

-  isStringEmpty (`<T extends string>(a: T): a is T`)

This function is a convenience method for checking whether a string is empty or has some value.

It returns `true` for `""` otherwise `false`

-  isTrimmedStringEmpty (`<T extends string>(a: T): a is T`)

Is another convenience method, that checks whether or not a string is empty, after running the `trim()` function on it.

## Math Functions

-  add (`a: number, b: number`)

This function adds a to b. E.g. `add(1, 1) // => 2`. Simple addition we know from school.

-  sub (`a: number, b: number`)

This function subtracts b from a. E.g. `sub(1, 2) // => -1`. Simple subtraction we know from school.

-  product (`a: number[]`)

Calculates the product of the given number array and returns a single number.

-  identity `<T>(x: T): T`

Returns the same value that was used as it's argument.

## Async Functions

-  waitFor (`<T>(validatorInput: T, validatorFn: ValidatorFunction<T>, waitOptions: WaitOptions)`)

This function waits until the validator function returns `true` or until the timeout is reached (default timeout: 5 seconds).
Example usage:

```typescript
const asyncFn = async () => {
    await waitFor(doSomeCalculation(), resultOfdoSomeCalculation => resultOfdoSomeCalculation === 5);
    // code which get's executed as soon as resultOfdoSomeCalculation is equal to 5 otherwise the Promise will get rejected after 5 seconds
}
```

## Helper Methods

- doNothing `(...args: unknown[]) => void`

This method does not do anything on purpose. It's used as a convenient method do express that nothing should or will be done at a particular case.

E.g. (constructed example) 
```typescript
import {doNothing } from "typescript-toolbox";

const bla = Math.random();
const x = bla > 5 ? doNothing : 5;
```

# Browser Support

We care about browser support. Therefore this library has support for Internet Explorer 11

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |

# Donate

If you like this library and would like to support this work feel free to donate here:

[![paypal](https://www.paypalobjects.com/en_US/DK/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=dominik.schwarzbauer%40googlemail.com)

# License

This library is licensed under the MIT license.

# Contribute

Feels free to submit your PR. I'd be more than glad if you extend this neat library of useful utility methods.
