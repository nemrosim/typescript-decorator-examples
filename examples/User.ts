function logData(message:string): ClassDecorator {
    console.log(`Message is: ${message}`)
    return function (): void {
        console.log('constructor')
    }
}

@logData("Hello world")
class User {
    public firstName: string;
    public lastName: string;


    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const user = new User('John', 'Doe');
