import "reflect-metadata";
import { addPropertyMetadata, PROPERTY_METADATA_KEY } from "./metadataDecorator";
import { addProperty, logData, logMethod, logParameter, logProperty } from "./decorators";

@logData("Hello world")
@addProperty<boolean>('isOld', true)
export class User {

    @logProperty("Property message")
    @addPropertyMetadata({
        name: 'FN Name',
        description: 'First name description',
    })
    public firstName: string;

    @addPropertyMetadata({
        name: 'LN Name',
        description: 'Last name description',
    })
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

console.log('[❔] Is old?', (user as User & { isOld: boolean }).isOld);

console.log(
    "METADATA",
    Reflect.getMetadata(PROPERTY_METADATA_KEY, user),
);
