export default class InstanceLoader {
    static getInstance<T>() : T {
        var instance = Object.create(null);
        instance.constructor.apply(instance);
        return <T> instance;
    }
}