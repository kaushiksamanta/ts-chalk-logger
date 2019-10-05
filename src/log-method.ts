import { logger } from "./log-wrapper";
import chalk from "chalk";

/**
 * Log to console name of method, value and type of each parameter and returned value with its type
 * @param target
 * @param {string} propertyName
 * @param {PropertyDescriptor} descriptor
 */
export function logMethod(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        const className = target.constructor.name;
        logger(className, chalk.blueBright('======================= LOG METHOD ================================='));
        logger(className, `${chalk.green(`Method name -->`)} ${chalk.yellow(propertyName)}`);
        logger(className,`${chalk.green(`Method arguments -->`)} ${chalk.yellow(args.map(a => JSON.stringify(a)).join(','))}`);
        const result = originalMethod.apply(this, args);
        logger(className, `${chalk.green(`Method result -->`)} ${chalk.yellow(JSON.stringify(result))}`);
        return result;
    }
}