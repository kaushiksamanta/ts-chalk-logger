import 'reflect-metadata';
/**
 * Log to console name of method, value and type of each parameter and returned value with its type
 * @param target
 * @param {string} propertyName
 * @param {PropertyDescriptor} descriptor
 */
export declare function logMethod(target: Object, propertyName: string, descriptor: PropertyDescriptor): void;
