import { User } from "./User";

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

export function logData(message: string): ClassDecorator {
    console.log(`[Class 🟢] Message is: ${message}`)
    return function (target: any): void {
        console.log('[Class 🟢] constructor')
    }
}

export function addProperty<T>(name: string, value: T): ClassDecorator {
    console.log(`[Class 🟩] Add property`)
    return function (target: any): void {
        target.prototype[name] = value;
        const instance = new target() as User;
        instance.firstName = "Will"
        instance.lastName = "Smith"
        console.log('New user', instance)
    }
}

export function logMethod(message: string): MethodDecorator {
    console.log(`[Method 🟠] Message is: ${message}`)
    return function (): void {
        console.log('[Method 🟠] constructor')
    }
}

export function logParameter(message: string): ParameterDecorator {
    console.log(`[Parameter 🔵] Message is: ${message}`)
    return function (): void {
        console.log('[Parameter 🔵] constructor')
    }
}

export function logProperty(message: string): PropertyDecorator {
    console.log(`[Property 🟡] Message is: ${message}`)
    return function (): void {
        console.log('[Property 🟡] constructor')
    }
}
