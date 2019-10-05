"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var process_1 = __importDefault(require("process"));
var getTimeStamp = function () {
    var today = new Date();
    var dd = today.getDate().toString();
    var mm = (today.getMonth() + 1).toString();
    var yyyy = today.getFullYear().toString();
    if (parseInt(dd) < 10) {
        dd = "0" + dd;
    }
    if (parseInt(mm) < 10) {
        mm = "0" + mm;
    }
    return mm + "-" + dd + "-" + yyyy + ", " + getTime(today);
};
var getTime = function (date) {
    var hours = date.getHours();
    var minutes = date.getMinutes().toString();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = parseInt(minutes) < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
};
exports.logger = function (className, log) {
    console.log(chalk_1.default.green("[ts-chalk-logger]  " + process_1.default.pid + " -") + " " + getTimeStamp() + "  " + chalk_1.default.yellow("[" + className + "]") + " " + log + "  ");
};
