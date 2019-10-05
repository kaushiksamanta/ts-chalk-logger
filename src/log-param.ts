import { logger } from "./log-wrapper";
import chalk from "chalk";

/**
 * Log to console name of parent class of mathod, also method name and number of arguments order
 * @param target
 * @param {string} key
 * @param {number} index
 */
export function logParam(target: any, propertyName: string, index: number) {
    const className = target.constructor.name;
    let getNumber = (index: number) => {
        const numberByOrder: number = index + 1;
        let suff: string = numberByOrder == 1 ? 'st' : numberByOrder == 2 ? 'nd' : numberByOrder == 3 ? 'd' : 'th';
        return `${numberByOrder}${suff}`
    };
    logger(className, chalk.blueBright('======================= LOG PARAM ================================='));
    logger(className, `${chalk.green(`Method name -->`)} ${chalk.yellow(propertyName)}`);
    logger(className, `${chalk.green(`Method param index -->`)} ${chalk.yellow(getNumber(index))}`);
}