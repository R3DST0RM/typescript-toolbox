export abstract class Consumer<T> {

    public static of<T>(consumerFunction: (x: T) => void): Consumer<T> {
        // tslint:disable-next-line:max-classes-per-file
        return new (class extends Consumer<T> {
            protected consumerFunction = consumerFunction;
        });
    }

    protected abstract consumerFunction: (param: T) => void;

    public accept(param: T): void {
        this.consumerFunction(param);
    }

    public andThen(after: Consumer<T>): Consumer<T> {
        return Consumer.of((x: T) => {
            this.consumerFunction(x);
            after.accept(x);
        });
    }
}
