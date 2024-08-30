class BankAccount {
    #balance
    #accountNumber

    constructor (balance, accountNumber) {
        this.#accountNumber = accountNumber;
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
           return this.#balance += amount;
        } else {
            console.log('Invalid amount!')
        }
    }

    withdraw(amount) {
        if (amount > 0) {
            this.#balance -= amount;
            if (this.#balance < 0) {
                console.log('Not enough balance!')
            } else {
                return this.#balance;
            }
        } else {
            console.log('Invalid amount!')
        }
    }

    getBalance() {
        return this.#balance
    }
}

const bankAccount = new BankAccount(200, 594289);

console.log(bankAccount.deposit(100));
console.log(bankAccount.withdraw(50));
console.log(bankAccount.getBalance());
console.log(bankAccount.withdraw(260));
console.log(bankAccount.getBalance());
