import { log } from '../dist';

@log()
class User {
    private _name: string;

    constructor(@log() name: string) {
        this._name = name;
    }

    @log()
    getUser(): string {
        return this._name;
    }
};

const user: User = new User('Kaushik');
console.log(user.getUser());