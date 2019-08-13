# @TypeScript chalkjs log Decorator
Colorful logging with typescript decorators.

## Usage
### TypeScript

```typescript
import { log } from 'ts-log-decorator';
@log() class User {
    private: _name: string
    @log setUser(@log() name: string): string {
        this._name = name;
    }
};
```