export const isTrimmedStringEmpty = <T extends string>(a: T) => isNil(a) || a.trim().length === 0;

export const isStringEmpty = <T extends string>(a: T) => isNil(a) || a.length === 0;

export const isNil = <T>(a: T | null | undefined): a is null | undefined => a === null || a === undefined;

export const isAssigned = <T>(a: T): a is T => !isNil(a);