function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;
    };
}

const counter = outer();
console.log(counter()); // ?
console.log(counter()); // ?

console.log('/////////////////////////////////////////////////////////////');

function createCounter() {
    let count = 0;
    return function() {
        return ++count;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // ?
console.log(counter1()); // ?
console.log(counter2()); // ?

for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // What gets logged?
    }, 100);
}

for (var i = 0; i < 3; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(j); // What gets logged?
        }, 100);
    })(i);
}

for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // What gets logged?
    }, 100);
}

function createBankAccount(initialBalance) {
    let balance = initialBalance;
    
    return {
        deposit: function(amount) {
            balance += amount;
            return balance;
        },
        withdraw: function(amount) {
            if (amount <= balance) {
                balance -= amount;
                return balance;
            }
            return "Insufficient funds";
        },
        getBalance: function() {
            return balance;
        }
    };
}

const account = createBankAccount(100);
console.log(account.getBalance()); // ?
account.deposit(50);
console.log(account.getBalance()); // ?

const Calculator = (function() {
    let memory = 0;
    
    return {
        add: function(a, b) {
            const result = a + b;
            memory = result;
            return result;
        },
        getMemory: function() {
            return memory;
        },
        clearMemory: function() {
            memory = 0;
        }
    };
})();

console.log(Calculator.add(5, 3)); // ?
console.log(Calculator.getMemory()); // ?
Calculator.clearMemory();
console.log(Calculator.getMemory()); // ?

function multiplyBy(x) {
    return function(y) {
        return x * y;
    };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // ?
console.log(triple(5)); // ?

function memoize(fn) {
    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            console.log('From cache:', cache[key]);
            return cache[key];
        }
        const result = fn.apply(this, args);
        cache[key] = result;
        console.log('Calculated:', result);
        return result;
    };
}

const slowSquare = memoize(function(x) {
    return x * x;
});

slowSquare(5); // ?
slowSquare(5); // ?
slowSquare(6); // ?

function createBankAccountTest() {
    let balance = 0;

    return {
        withdraw: function(money) {
            balance=balance+money;
        },
        getBalance: function() {
            return balance;
        }
    }
}

// When You NEED Closures:
// Situation	Without Closure	With Closure
// Security	let password = "123" ❌	function() { let password = "123" } ✅
// Data Integrity	Global cart = messy ❌	Private cart = clean ✅
// API Limits	Global counter = hackable ❌	Private counter = safe ✅
// User Sessions	Global user data = risky ❌	Private sessions = secure ✅