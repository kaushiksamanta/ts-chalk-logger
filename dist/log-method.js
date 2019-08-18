"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
var logger = console.log;
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
        logger(chalk_1.default.blueBright('======================= LOG METHOD ================================='));
        logger(chalk_1.default.green(new Date().toString()) + " " + chalk_1.default.yellow("Class name -->") + " " + chalk_1.default.redBright(target.constructor.name));
        logger(chalk_1.default.green(new Date().toString()) + " " + chalk_1.default.yellow("Method name -->") + " " + chalk_1.default.redBright(propertyName));
        logger(chalk_1.default.green(new Date().toString()) + " " + chalk_1.default.yellow("Method arguments -->") + " " + chalk_1.default.redBright(args.map(function (a) { return JSON.stringify(a); }).join(',')));
        var result = originalMethod.apply(this, args);
        logger(chalk_1.default.green(new Date().toString()) + " " + chalk_1.default.yellow("Method result -->") + " " + chalk_1.default.redBright(JSON.stringify(result)));
        return result;
    };
}
exports.logMethod = logMethod;
