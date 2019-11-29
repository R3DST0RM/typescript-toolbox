import {isAssigned, isNil} from "./index";

export class Optional<T> {
    public static empty<T>(): Optional<T> {
        return new Optional<T>(null)
    }

    public static ofNullable<T>(value: T | null | undefined): Optional<T> {
        return isAssigned(value) ? this.of<T>(value) : this.empty();
    }

    public static of<T>(value: T): Optional<T> {
        if (isNil(value)) {
            throw Error("Provided value can not be null or unassigned");
        }
        return new Optional<T>(value);
    }

    private constructor(private prop: T | null | undefined) {}

    public orElse<Y>(other: Y): Y | T {
        return isNil(this.prop) ? other : this.prop;
    }

    public orElseGet<Y>(other: () => Y): Y | T {
        return isNil(this.prop) ? other() : this.prop;
    }

    public map<Y>(toMap: (wrapped: T) => Y): Optional<Y> {
        return isNil(this.prop) ? Optional.empty<Y>() : Optional.of<Y>(toMap(this.prop));
    }

    public flatMap<Y>(toMap: (wrapped: T) => Y): Optional<Y> {
        return isNil(this.prop) ? Optional.empty<Y>() : Optional.ofNullable(toMap(this.prop));
    }

    public isPresent(): boolean {
        return isAssigned(this.prop);
    }
}
