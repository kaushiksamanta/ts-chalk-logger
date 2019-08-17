"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Log to console what instance is created
 * @param target
 */
function logClass(target) {
    console.log("%cInstance of class %c" + target.name + "%c has been created.\n");
}
exports.logClass = logClass;
