import chalk from 'chalk';
const log = console.log;

/**
 * Log to console name of method, value and type of each parameter and returned value with its type
 * @param target
 * @param {string} propertyName
 * @param {PropertyDescriptor} descriptor
 */
export function logMethod(target: Object, propertyName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        log(chalk.blue(Reflect.getMetadata("design:type", target, propertyName)));
        log(`${propertyName} Arguments: ${args.map(a => JSON.stringify(a)).join(',')}`);
        const result = originalMethod.apply(this, args);
        log(`Result: ${JSON.stringify(result)}`);
        return result;
    }
}
