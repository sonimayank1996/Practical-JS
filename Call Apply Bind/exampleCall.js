// What are call(), apply(), and bind()?

// They are methods available on every function in JavaScript.

// They allow you to manually set the value of this inside a function.

function greet(city) {
    // They allow you to manually set the value of this inside a function.
    console.log(`Hi ${this.name} from ${city}`);
}

const user = { name: "Mayank" };

const users = { name: "Mayank Soni" };

//call() is used to manually set the value of this inside a function.
greet.call(user, "Pune");
// They are methods available on every function in JavaScript.
greet.call(users, "Pune");