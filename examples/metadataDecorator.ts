import { log } from "./colorConsole";

export const PROPERTY_METADATA_KEY = Symbol("propMeta");

interface IPropertyMetadata {
    name?: string;
    description?: string;
}

export interface IAllPropertyMetadata {
    [key: string]: IPropertyMetadata;
}

export function addPropertyMetadata(metadata: IPropertyMetadata): PropertyDecorator {
    return function (target: Object,
                     propertyKey: string | symbol): void {
        const FLAG = 'Metadata';

        // Implicit conversion of a 'symbol' to a 'string' will fail at runtime.
        // Because of that we need to wrap it with "String"

        log.red('START');
        console.log(`[${FLAG} 🔺] Property key: "${String(propertyKey)}"`);
        console.log(`[${FLAG} 🔷] Target      :`, target)

        const allMetadata =
            Reflect.getMetadata(PROPERTY_METADATA_KEY, target)
            ||
            {};

        console.log(`[${FLAG} 🅼 -1] All metadata: ${JSON.stringify(allMetadata, null, 2)}` )

        allMetadata[propertyKey] = allMetadata[propertyKey] || {};

        console.log(`[${FLAG} 🅼 -2] All metadata:`, JSON.stringify(allMetadata, null, 2));

        const ownKeys = Reflect.ownKeys(metadata);
        console.log(`[${FLAG} 🅺] Own keys:`, JSON.stringify(ownKeys, null, 2));

        ownKeys.forEach((key)=>{
            const val = (metadata as IAllPropertyMetadata)[String(key)];
            console.log(`[${FLAG} 🆅] Value: ${val}`);
            allMetadata[propertyKey][key] = val;
        });

        Reflect.defineMetadata(
            PROPERTY_METADATA_KEY,
            allMetadata,
            target,
        );
    }
}
