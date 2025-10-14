// GLOBAL BANK ACCOUNT - TERRIBLE IDEA!
let balance = 1000;

function deposit(amount) {
    balance += amount;
    return balance;
}

function withdraw(amount) {
    if (amount <= balance) {
        balance -= amount;
        return amount;
    }
    return "Insufficient funds";
}

function getBalance() {
    return balance;
}

// USAGE & PROBLEMS:
deposit(500);
console.log(getBalance()); // 1500

// 😱 HACKERS CAN:
balance = 9999999; // Free money!
console.log(getBalance()); // 9999999 - BANKRUPT!

// OR EVEN WORSE:
withdraw = function(amount) { 
    return amount * 2; // Modified the function!
};


function createBankAccount(initialBalance) {
    // PRIVATE BALANCE - Cannot be accessed directly
    let balance = initialBalance;
    
    return {
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                return `Deposited $${amount}. New balance: $${balance}`;
            }
            return "Invalid amount";
        },
        withdraw: function(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                return `Withdrew $${amount}. New balance: $${balance}`;
            }
            return "Insufficient funds or invalid amount";
        },
        getBalance: function() {
            return `Current balance: $${balance}`;
        }
    };
}

// Usage:
const account = createBankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // "Current balance: $1500"

// 😊 SECURE - CANNOT DO:
account.balance = 9999999; // No effect
console.log(account.getBalance()); // Still "Current balance: $1500"