"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
var logger = console.log;
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
        logger(chalk_1.default.blueBright('======================= LOG CLASS ================================='));
        logger(chalk_1.default.green(new Date().toString()) + " " + chalk_1.default.yellow("Class name -->") + " " + chalk_1.default.redBright(target.name));
        logger(chalk_1.default.green(new Date().toString()) + " " + chalk_1.default.yellow("Method arguments -->") + " " + chalk_1.default.redBright(args.map(function (a) { return JSON.stringify(a); }).join(',')));
        var result = construct(original, args);
        logger(chalk_1.default.green(new Date().toString()) + " " + chalk_1.default.yellow("Object created -->") + " " + chalk_1.default.redBright(JSON.stringify(result)));
        return result;
    };
    newConstructor.prototype = original.prototype;
    return newConstructor();
}
exports.logClass = logClass;
