"use strict";
// Classes in Typescript
class Account {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid number");
        this.balance += amount;
    }
}
//# sourceMappingURL=classes_in_ts.js.map