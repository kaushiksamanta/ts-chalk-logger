import chalk from 'chalk';
const logger = console.log;

/**
 * Log to console name of parent class of mathod, also method name and number of arguments order
 * @param target
 * @param {string} key
 * @param {number} index
 */
export function logParam(target: any, propertyName: string, index: number) {
    let getNumber = (index: number) => {
        const numberByOrder: number = index + 1;
        let suff: string = numberByOrder == 1 ? 'st' : numberByOrder == 2 ? 'nd' : numberByOrder == 3 ? 'd' : 'th';
        return `${numberByOrder}${suff}`
    };
    logger(chalk.blueBright('======================= LOG PARAM ================================='));
    logger(`${chalk.green(new Date().toString())} ${chalk.yellow(`Class name -->`)} ${chalk.redBright(target.constructor.name)}`);
    logger(`${chalk.green(new Date().toString())} ${chalk.yellow(`Method name -->`)} ${chalk.redBright(propertyName)}`);
    logger(`${chalk.green(new Date().toString())} ${chalk.yellow(`Method param index -->`)} ${chalk.redBright(getNumber(index))}`);
}