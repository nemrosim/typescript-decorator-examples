import "reflect-metadata";

const REQUIRED_METADATA_KEY = Symbol("required");

function required(): ParameterDecorator {
    return function (
        target: Object,
        propertyKey: string | symbol,
        parameterIndex: number
    ) {
        let existingRequiredParameters: number[] =
            Reflect.getOwnMetadata(REQUIRED_METADATA_KEY, target, propertyKey) || [];

        existingRequiredParameters.push(parameterIndex);

        Reflect.defineMetadata(
            REQUIRED_METADATA_KEY,
            existingRequiredParameters,
            target,
            propertyKey
        );
    }
}

function validate(): MethodDecorator {
    return function (
        target: Object,
        propertyName: string | symbol,
        descriptor: PropertyDescriptor
    ) {
        let method = descriptor.value;
        descriptor.value = function () {
            let requiredParameters: number[] = Reflect.getOwnMetadata(
                REQUIRED_METADATA_KEY,
                target,
                propertyName
            );
            if (requiredParameters) {
                for (let parameterIndex of requiredParameters) {
                    if (
                        parameterIndex >= arguments.length ||
                        arguments[parameterIndex] === undefined
                    ) {
                        throw new Error("Missing required argument.");
                    }
                }
            }

            return method.apply(this, arguments);
        };
    }
}

class Example {

    @validate()
    calculate(
        @required() a?: any,
        @required() b?: any
    ) {
        return a + b;
    }
}

console.log('🟩 Result', new Example().calculate());


