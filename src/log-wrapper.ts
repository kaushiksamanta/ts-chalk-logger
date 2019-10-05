import chalk from 'chalk';
import process from 'process';

const getTimeStamp = () => {
    const today = new Date();
    let dd = today.getDate().toString();
    let mm = (today.getMonth()+1).toString();
    let yyyy = today.getFullYear().toString();
    if(parseInt(dd) < 10) {
        dd = `0${dd}`;
    }
    if(parseInt(mm) < 10) {
        mm = `0${mm}`;
    }
    return `${mm}-${dd}-${yyyy}, ${getTime(today)}`;
}

const getTime = (date: Date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes().toString();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = parseInt(minutes) < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

export const logger = (className: string, log: string) => {
    console.log(`${chalk.green(`[ts-chalk-logger]  ${process.pid} -`)} ${getTimeStamp()}  ${chalk.yellow(`[${className}]`)} ${log}  `);
};