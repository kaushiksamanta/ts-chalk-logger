"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
var logger = console.log;
/**
 * Log to console name of parent class of mathod, also method name and number of arguments order
 * @param target
 * @param {string} key
 * @param {number} index
 */
function logParam(target, propertyName, index) {
    var getNumber = function (index) {
        var numberByOrder = index + 1;
        var suff = numberByOrder == 1 ? 'st' : numberByOrder == 2 ? 'nd' : numberByOrder == 3 ? 'd' : 'th';
        return "" + numberByOrder + suff;
    };
    logger(chalk_1.default.blueBright('======================= LOG PARAM ================================='));
    logger(chalk_1.default.green(new Date().toString()) + " " + chalk_1.default.yellow("Class name -->") + " " + chalk_1.default.redBright(target.constructor.name));
    logger(chalk_1.default.green(new Date().toString()) + " " + chalk_1.default.yellow("Method name -->") + " " + chalk_1.default.redBright(propertyName));
    logger(chalk_1.default.green(new Date().toString()) + " " + chalk_1.default.yellow("Method param -->") + " " + chalk_1.default.redBright(getNumber(index)));
}
exports.logParam = logParam;
