export function methodDecoratorExample(): MethodDecorator {
    return function (
        target: Object,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor
    ) {
        console.log('⚠️ DATA', {target, propertyKey, descriptor});

        const original = descriptor.value;

        descriptor.value = (...args: any) => {
            if (original) {
                const originalResult = original.apply(target, args);
                return originalResult + 4;
            }
        }
    }
}

class Example {

    @methodDecoratorExample()
    @methodDecoratorExample()
    calculate(a: number, b: number) {
        return a + b;
    }
}

const descriptor: PropertyDescriptor | undefined = Object.getOwnPropertyDescriptor(
    Example.prototype,
    'calculate'
);

console.log('🟩 Instance result', new Example().calculate(2, 2));
console.log('🟢 Descriptor result', descriptor?.value(2, 2));


