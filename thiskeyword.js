console.log(this);


function sayHello() {
    console.log(this);
}
sayHello();

"use strict";
function test() {
    console.log(this); // undefined
}
test();

// When function is called as object method, `this` refers to the object.
const person1 = {
    name: "John",
    greet: function() {
        console.log(this.name);
    }
};
person.greet();

// Function loses its context when separated from object.
const person22 = {
    name: "John",
    greet: function() {
        console.log(this.name);
    }
};

const greetFunc = person.greet;
greetFunc();

function Person(name) {
    this.name = name;
    console.log(this);
}

const john2 = new Person("John");

function Persons(names) {
    this.names = names;
}

Persons("John");
console.log(names);

const person3 = {
    name: "John",
    greet: () => {
        console.log(this.name);
    }
};
person.greet();

//  Arrow function inherits `this` from parent function scope.
const kerson = {
    name: "John",
    greet: function() {
        const inner = () => {
            console.log(this.name);
        };
        inner();
    }
};
kerson.greet();

function introduce(language) {
    console.log(`${this.name} codes in ${language}`);
}

const person4 = { name: "Alice" };
const person2 = { name: "Mayank" };
introduce.call(person2, "JavaScript"); // call explicitly

// works like `call()` but takes arguments as array

function introduce(language, experience) {
    console.log(`${this.name} codes in ${language} with ${experience} years`);
}

const person5 = { name: "Bob" };
introduce.apply(person, ["JavaScript", 5]);


//  `bind()` creates new function with permanently bound `this` context
function greet() {
    console.log(`Hello, ${this.name}`);
}

const person6 = { name: "Charlie" };
const boundGreet = greet.bind(person6);
boundGreet();

const company = {
    name: "Tech Corp",
    department: {
        name: "Engineering",
        getName: function() {
            return this.name;
        }
    }
};

console.log(company.department.getName());

const calculator = {
    value: 0,
    add: function(num) {
        this.value += num;
        return this;
    },
    multiply: function(num) {
        this.value *= num;
        return this;
    }
};

calculator.add(5).multiply(2);
console.log(calculator.value);

const person = {
    name: "John",
    delayedGreet: function() {
        setTimeout(function() {
            console.log(this.name);
        }, 100);
    }
};
person.delayedGreet();

class Person {
    constructor(name) {
        this.name = name;
    }
    
    greet() {
        console.log(this.name);
    }
}

const john = new Person("John");
john.greet();