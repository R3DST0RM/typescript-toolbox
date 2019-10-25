export type OptionalRecord<K extends string | number, T> = { [P in K]: T | undefined };
