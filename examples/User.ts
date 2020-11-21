function logData(message: string): ClassDecorator {
    console.log(`[Class 🟢] Message is: ${message}`)
    return function (target: any): void {
        console.log('[Class 🟢] constructor')
    }
}

function addProperty<T>(name: string, value: T): ClassDecorator {
    console.log(`[Class 🟩] Add property`)
    return function (target: any): void {
        target.prototype[name] = value;
        const instance = new target() as User;
        instance.firstName = "Will"
        instance.lastName = "Smith"
        console.log('New user', instance)
    }
}

function logProperty(message: string): PropertyDecorator {
    console.log(`[Property 🟡] Message is: ${message}`)
    return function (): void {
        console.log('[Property 🟡] constructor')
    }
}

function logMethod(message: string): MethodDecorator {
    console.log(`[Method 🟠] Message is: ${message}`)
    return function (): void {
        console.log('[Method 🟠] constructor')
    }
}

function logParameter(message: string): ParameterDecorator {
    console.log(`[Parameter 🔵] Message is: ${message}`)
    return function (): void {
        console.log('[Parameter 🔵] constructor')
    }
}

@logData("Hello world")
@addProperty<boolean>('isOld', true)
class User {

    @logProperty("Property message")
    public firstName: string;
    public lastName: string;


    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @logMethod("Method message")
    @logMethod("Method message 2")
    public getFullName(@logParameter("Parameter message") text: string): string {
        return `${this.firstName} ${this.lastName} ${text}`
    }
}

const user = new User('John', 'Doe');
user.getFullName('!!!')

// @ts-ignore
console.log('[❔] Is old?', user.isOld);
