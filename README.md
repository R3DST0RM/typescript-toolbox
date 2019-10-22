# Typescript-Utils

[![Build Status](https://travis-ci.org/R3DST0RM/typescript-utils.svg?branch=master)](https://travis-ci.org/R3DST0RM/typescript-utils)
[![Coverage Status](https://coveralls.io/repos/github/R3DST0RM/typescript-utils/badge.svg?branch=master)](https://coveralls.io/github/R3DST0RM/typescript-utils?branch=master)

Everything your TypeScript project needs. This library is a collection of helpful methods I came up with while developing software using TypeScript.

## isNil

Checks whether a variable is `null` or `undefined` and returns `true`. This method is also making use of the TypeScript type guard to ensure type safety for the current scope.

## isAssigned

It's the inversion of `isNil` and returns `true` if the given variable has any value assigned. (Also use of Type Guard here)
