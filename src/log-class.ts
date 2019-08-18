import chalk from 'chalk';
const logger = console.log;

/**
 * Log to console what instance is created
 * @param target
 */
export function logClass(target: any) {
  const original = target;
  const construct = (constructor: any, args: any[]) => {
    const c: any =  function(this: any) {
      return constructor.apply(this, args);
    }
    c.prototype = constructor.prototype;
    return new c();
  }
  const newConstructor: any = function (...args: any[]) {
    logger(chalk.blueBright('======================= LOG CLASS ================================='));
    logger(`${chalk.green(new Date().toString())} ${chalk.yellow(`Class name -->`)} ${chalk.redBright(target.name)}`);
    logger(`${chalk.green(new Date().toString())} ${chalk.yellow(`Method arguments -->`)} ${chalk.redBright(args.map(a => JSON.stringify(a)).join(','))}`);
    const result = construct(original, args);
    logger(`${chalk.green(new Date().toString())} ${chalk.yellow(`Object created -->`)} ${chalk.redBright(JSON.stringify(result))}`);
    return result;
  }
  newConstructor.prototype = original.prototype;
  return newConstructor();
}
