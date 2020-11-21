function classDecorator(...args: any): ClassDecorator {
    return function <TFunction extends Function>(
        target: TFunction
    ): TFunction | void {
        // do something
    }
}

function propertyDecorator(...args: any): PropertyDecorator {
    return function (
        target: Object,
        propertyKey: string | symbol
    ): void {
        // do something
    }
}

function methodDecorator(...args: any): MethodDecorator {
    return function <T>(
        target: Object,
        propertyKey: string | symbol,
        descriptor: TypedPropertyDescriptor<T>
    ): TypedPropertyDescriptor<T> | void {
        // do something
    }
}

function parameterDecorator(...args: any): ParameterDecorator {
    return function (
        target: Object,
        propertyKey: string | symbol,
        parameterIndex: number
    ): void {
        // do something
    }
}
