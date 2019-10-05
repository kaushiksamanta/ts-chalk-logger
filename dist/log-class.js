"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var log_wrapper_1 = require("./log-wrapper");
/**
 * Log to console what instance is created
 * @param target
 */
function logClass(target) {
    var original = target;
    var construct = function (constructor, args) {
        var c = function () {
            return constructor.apply(this, args);
        };
        c.prototype = constructor.prototype;
        return new c();
    };
    var newConstructor = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        log_wrapper_1.logger(target.name, chalk_1.default.blueBright('======================= LOG CLASS ================================='));
        log_wrapper_1.logger(target.name, chalk_1.default.green("Method arguments -->") + " " + chalk_1.default.yellow(args.map(function (a) { return JSON.stringify(a); }).join(',')));
        var result = construct(original, args);
        log_wrapper_1.logger(target.name, chalk_1.default.green("Object created -->") + " " + chalk_1.default.yellow(JSON.stringify(result)));
        return result;
    };
    newConstructor.prototype = original.prototype;
    return newConstructor();
}
exports.logClass = logClass;
