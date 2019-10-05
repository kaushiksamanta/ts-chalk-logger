import chalk from 'chalk';
import { logger } from './log-wrapper';

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
    logger(target.name, chalk.blueBright('======================= LOG CLASS ================================='));
    logger(target.name, `${chalk.green(`Method arguments -->`)} ${chalk.yellow(args.map(a => JSON.stringify(a)).join(','))}`);
    const result = construct(original, args);
    logger(target.name,`${chalk.green(`Object created -->`)} ${chalk.yellow(JSON.stringify(result))}`);
    return result;
  }
  newConstructor.prototype = original.prototype;
  return newConstructor();
}
