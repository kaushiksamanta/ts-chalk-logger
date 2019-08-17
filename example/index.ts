import { log } from '../dist';

class User {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    @log()
    getUser(prefix: string, prefi2x: string): string {
        return prefix + this._name;
    }
};

const user: User = new User('Kaushik');
console.log(user.getUser('hello', 'hi'));