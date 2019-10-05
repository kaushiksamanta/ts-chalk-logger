"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var log_wrapper_1 = require("./log-wrapper");
var chalk_1 = __importDefault(require("chalk"));
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
        var className = target.constructor.name;
        log_wrapper_1.logger(className, chalk_1.default.blueBright('======================= LOG METHOD ================================='));
        log_wrapper_1.logger(className, chalk_1.default.green("Method name -->") + " " + chalk_1.default.yellow(propertyName));
        log_wrapper_1.logger(className, chalk_1.default.green("Method arguments -->") + " " + chalk_1.default.yellow(args.map(function (a) { return JSON.stringify(a); }).join(',')));
        var result = originalMethod.apply(this, args);
        log_wrapper_1.logger(className, chalk_1.default.green("Method result -->") + " " + chalk_1.default.yellow(JSON.stringify(result)));
        return result;
    };
}
exports.logMethod = logMethod;
