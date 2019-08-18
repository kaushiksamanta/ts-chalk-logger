import chalk from 'chalk';
const logger = console.log;

/**
 * Log to console name of method, value and type of each parameter and returned value with its type
 * @param target
 * @param {string} propertyName
 * @param {PropertyDescriptor} descriptor
 */
export function logMethod(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        logger(`${chalk.green(new Date().toString())} ${chalk.yellow(`Class name -->`)} ${chalk.redBright(target.constructor.name)}`);
        logger(`${chalk.green(new Date().toString())} ${chalk.yellow(`Method name -->`)} ${chalk.redBright(propertyName)}`);
        logger(`${chalk.green(new Date().toString())} ${chalk.yellow(`Method arguments -->`)} ${chalk.redBright(args.map(a => JSON.stringify(a)).join(','))}`);
        const result = originalMethod.apply(this, args);
        logger(`${chalk.green(new Date().toString())} ${chalk.yellow(`Method result -->`)} ${chalk.redBright(JSON.stringify(result))}`);
        return result;
    }
}