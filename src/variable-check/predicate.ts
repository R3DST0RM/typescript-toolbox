export abstract class Predicate<T> {
    public static of<S>(x: (prop: S) => boolean): Predicate<S> {
        // tslint:disable-next-line:max-classes-per-file
        return new (class extends Predicate<S> {
            public predicate = x;
        })();
    }

    protected abstract predicate: (prop: T) => boolean;

    public negate(): Predicate<T> {
        return Predicate.of((prop: T) => {
            return !this.predicate(prop);
        });
    }

    public and(other: Predicate<T>): Predicate<T> {
        return Predicate.of((prop: T) => {
            return this.predicate(prop) && other.test(prop);
        });
    }

    public or(other: Predicate<T>): Predicate<T> {
        return Predicate.of((prop: T) => {
            return this.predicate(prop) || other.test(prop);
        });
    }

    public test(prop: T): boolean {
        return this.predicate(prop);
    }
}
