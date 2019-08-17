"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var chalk_1 = require("chalk");
var log = console.log;
/**
 * Log to console name of method, value and type of each parameter and returned value with its type
 * @param target
 * @param {string} propertyName
 * @param {PropertyDescriptor} descriptor
 */
function logMethod(target, propertyName, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        log(chalk_1.default.blue(Reflect.getMetadata("design:type", target, propertyName)));
        log(Reflect.getMetadata("design:paramtypes", target, propertyName));
        log(Reflect.getMetadata("design:returntype", target, propertyName));
        log(propertyName + " Arguments: " + args.map(function (a) { return JSON.stringify(a); }).join(','));
        var result = originalMethod.apply(this, args);
        log("Result: " + JSON.stringify(result));
        return result;
    };
}
exports.logMethod = logMethod;
