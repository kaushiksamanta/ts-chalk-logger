# @TypeScript chalkjs log Decorator
Colorful logging with typescript decorators.

```javascript
import { log } from '../dist';

@log()
class User {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    @log()
    getUser(@log() prefix: string, @log() prefi2x: string): string {
        return prefix + this._name;
    }
};
```
