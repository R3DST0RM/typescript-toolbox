# Typescript-Toolbox

[![GitHub issues](https://img.shields.io/github/issues/R3DST0RM/typescript-toolbox)](https://github.com/R3DST0RM/typescript-toolbox/issues)
[![GitHub release](https://img.shields.io/github/v/release/R3DST0RM/typescript-toolbox.svg)](https://github.com/R3DST0RM/typescript-toolbox/releases)
[![Build Status](https://travis-ci.org/R3DST0RM/typescript-toolbox.svg?branch=master)](https://travis-ci.org/R3DST0RM/typescript-toolbox)
[![Coverage Status](https://coveralls.io/repos/github/R3DST0RM/typescript-toolbox/badge.svg?branch=master)](https://coveralls.io/github/R3DST0RM/typescript-toolbox?branch=master)

Typescript-Toolbox is a collection of everything that your TypeScript project needs.
It consists of a bunch of helpful method and classes, which make your life easier while developing a project using TypeScript.

Including classes like: `Optional` and `Predicate`, which are well known to Java developers.
Also there are a bunch of nice typing utilities, to correctly type your project. Those types ensure, you do not run out of type safety.

# Installation

Typescript-Toolbox is available as [npm package](https://www.npmjs.com/package/typescript-toolbox).

```
// Installation using NPM
npm install typescript-toolbox

// Installation using YARN
yarn add typescript-toolbox
```

# Available Tools / API

## Optional

*Added in v1.2.0*: `Optional` inspired by Java 8 implementation of Optional.

Utility class to abstract the handling of possibly `null` or `undefined` values.

For a detailed documentation with samples, please see [Optional docs](https://github.com/R3DST0RM/typescript-toolbox/wiki/Optional)

## Predicate

*Added in v1.2.0*: `Predicate` inspired by the Java Standard implementation of Predicate.

Utility class to abstract boolean expressions and `test()` for the result.

For a detailed documentation with samples, please see: [Predicate docs](https://github.com/R3DST0RM/typescript-toolbox/wiki/Predicate)

## Array utils

*Added in 0.1.0*: `Array utils` is a collection of useful array methods.

It consists of: `mergeArray`, `mergeArrays`, `mergeSet`.

For a detailed documentation with samples, please see: [Array utils docs](https://github.com/R3DST0RM/typescript-toolbox/wiki/Array-utils)

## Object utils

*Added in 0.1.0*: `Object utils` is a collection of useful object methods.

It consists of: `merge`.

For a detailed documentation with samples, please see: [Object utils docs](https://github.com/R3DST0RM/typescript-toolbox/wiki/Object-utils)

## Variable utils

*Added in 0.1.0*: `Variable utils` is a collection of useful methods for checking on variables.

It consists of: `isString`, `isArray`, `isNil`, `isAssigned`, `ifAssigned`.

For a detailed documentation with samples, please see: [Variable utils docs](https://github.com/R3DST0RM/typescript-toolbox/wiki/Variable-utils)

## Typings

*Added in 0.1.0*: `Typings` contain a bunch of useful types.

It consists of: `OptionalRecord`, `OptionalNullRecord`.

For a detailed documentation with samples, please see: [Typings docs](https://github.com/R3DST0RM/typescript-toolbox/wiki/Typings)

## String utils

*Added in 0.1.0*: `String utils` is a collection of useful methods for checking a `string` variable.

It consists of: `isStringEmpty`, `isTrimmedStringEmpty`.

For a detailed documentation with samples, please see: [String utils docs](https://github.com/R3DST0RM/typescript-toolbox/wiki/String-utils)

## Math utils

*Added in 0.1.0*: `Math utils` is a collection of some mathematical functions.

For a detailed documentation with samples, please see: [Math utils docs](https://github.com/R3DST0RM/typescript-toolbox/wiki/Math-utils)

## Helper methods

*Added in 0.1.0*: `Helper methods` is collection of some helpful methods which can be used for convenience.

For a detailed documentation with samples, please see: [Helper methods](https://github.com/R3DST0RM/typescript-toolbox/wiki/Helper-methods)

# Browser Support

Cross-browser support is very important. Therefore this library has even support for Internet Explorer 11.

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |

# Donate

If you like this library and would like to support this work feel free to donate here:

[![paypal](https://www.paypalobjects.com/en_US/DK/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=dominik.schwarzbauer%40googlemail.com)

# License

This library is licensed under the MIT license.

# Contribute

Feel free to submit your PR, to help this library grow.
The more helpful methods this library bundles the more it helps developing TypeScript projects.
