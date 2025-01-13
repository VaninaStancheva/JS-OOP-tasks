// Represents a bank account with account number and balance.
class BankAccount {
    // Private properties for balance and account number.
    #balance
    #accountNumber
    /**
     * Initialize the BankAccount instance with balance, account number, and user number.
     * @param {number} balance - The initial balance of the account in Euros.
     * @param {number} accountNumber - The unique account number.
     * @param {string} userNumber - An additional user-defined identifier.
     */
    constructor (balance, accountNumber, userNumber) {
        this.#accountNumber = accountNumber; // Assign account number to the private #accountNumber property.
        this.#balance = balance;            // Assign balance to the private #balance property in Euros.
        this.userNumber = userNumber;      // Assign string to a public property. ('u-accountNumber')
    }

    get user () {
        return this.userNumber;
    }
    /**
     * Deposit a valid amount into the account.
     * @param {number} amount - The amount to deposit.
     * @returns {number|void} The updated balance if the deposit is successful; logs an error for invalid amounts.
     */
    deposit(amount) {
        if (amount > 0) {
           return this.#balance += amount;
        } else {
            console.log('Invalid amount!')
        }
    }
    /**
     * Withdraw a valid amount from the account.
     * @param {number} amount - The amount to withdraw.
     * @returns {number|void} The updated balance if the withdrawal is successful; logs an error for invalid amounts or insufficient balance.
     */
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
    /**
     * Retrieve the current balance of the account in Euros.
     * @returns {number} The current balance of the account.
     */
    getBalance() {
        return this.#balance
    }
}

const bankAccount = new BankAccount(200, 594289, 'u-594289');

console.log(bankAccount.deposit(100));
console.log(bankAccount.withdraw(50));
console.log(bankAccount.getBalance());
console.log(bankAccount.withdraw(260));
console.log(bankAccount.getBalance());
