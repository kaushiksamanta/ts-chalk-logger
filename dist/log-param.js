"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var log_wrapper_1 = require("./log-wrapper");
var chalk_1 = __importDefault(require("chalk"));
/**
 * Log to console name of parent class of mathod, also method name and number of arguments order
 * @param target
 * @param {string} key
 * @param {number} index
 */
function logParam(target, propertyName, index) {
    var className = target.constructor.name;
    var getNumber = function (index) {
        var numberByOrder = index + 1;
        var suff = numberByOrder == 1 ? 'st' : numberByOrder == 2 ? 'nd' : numberByOrder == 3 ? 'd' : 'th';
        return "" + numberByOrder + suff;
    };
    log_wrapper_1.logger(className, chalk_1.default.blueBright('======================= LOG PARAM ================================='));
    log_wrapper_1.logger(className, chalk_1.default.green("Method name -->") + " " + chalk_1.default.yellow(propertyName));
    log_wrapper_1.logger(className, chalk_1.default.green("Method param index -->") + " " + chalk_1.default.yellow(getNumber(index)));
}
exports.logParam = logParam;
