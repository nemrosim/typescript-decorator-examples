function logData(message:string): ClassDecorator {
    console.log(`[Class 🟢] Message is: ${message}`)
    return function (): void {
        console.log('[Class 🟢] constructor')
    }
}

function logProperty(message:string): PropertyDecorator {
    console.log(`[Property 🟡] Message is: ${message}`)
    return function (): void {
        console.log('[Property 🟡] constructor')
    }
}

@logData("Hello world")
class User {

    @logProperty("Property message")
    public firstName: string;
    public lastName: string;


    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const user = new User('John', 'Doe');
