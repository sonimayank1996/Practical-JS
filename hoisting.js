// first
console.log(a);
var a = 5;
console.log(a);

// 2nd
sayHello();
function sayHello() {
    console.log("Hello!");
}

// 3rd
console.log(typeof myFunction);
console.log(typeof myVar);

var myVar = "variable";
function myFunction() {
    return "function";
}

// 4th
console.log(myFunction);
var myFunction = function() {
    console.log("Hello");
};

// 5th
// console.log(x);
// let x = 10;

// 6th
var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}
b();
console.log(a); // 1

// 6-1
var a = 1;
function b() {
    a = 10;         // Now this modifies GLOBAL 'a'
    return;
    // No function a() here
}
b();
console.log(a);     // Output: 10

// 7th
console.log(foo);
var foo = 1;
console.log(foo);
function foo() {
    return 2;
}
console.log(foo);

//8th
console.log(myArrow);
var myArrow = () => {
    console.log("arrow function");
};

//9th
function test() {
    console.log(a);
    console.log(foo());
    
    var a = 1;
    function foo() {
        return 2;
    }
}
test();

console.log('///////////////////////////////////////////////////////////////')
console.log('///////////////////////////////////////////////////////////////')
console.log('///////////////////////////////////////////////////////////////')

var x = 10;

function outer() {
    console.log("1:", x);
    
    function inner() {
        console.log("2:", x);
        var x = 30;
        console.log("3:", x);
    }
    
    var x = 20;
    console.log("4:", x);
    inner();
    console.log("5:", x);
}

outer();
console.log("6:", x);

console.log('///////////////////////////////////////////////////////////////')
console.log('///////////////////////////////////////////////////////////////')

console.log("1:", typeof func1);
console.log("2:", typeof func2);
console.log("3:", typeof func3);

function func1() { return "I'm hoisted"; }
var func2 = function() { return "I'm a function expression"; };
var func3 = () => "I'm an arrow function";

console.log("4:", typeof func2);
console.log("5:", typeof func3);

func1();
func2();


console.log('///////////////////////////////////////////////////////////////')
console.log('///////////////////////////////////////////////////////////////')

var a = 1;

function test() {
    console.log("1:", a);
    
    if (true) {
        function a() { return "local function"; }
    }
    
    console.log("2:", a);
    a = 2;
    console.log("3:", a);
}

test();
console.log("4:", a);


"use strict";
var a = 1;

function test() {
    console.log("1:", a);  // Output: 1 (sees global a!)
    
    if (true) {
        function a() { return "local function"; }  // Block-scoped in strict mode
    }
    
    console.log("2:", a);  // Output: 1 (still global a)
    a = 2;
    console.log("3:", a);  // Output: 2 (changes global a!)
}

test();
console.log("4:", a);      // Output: 2 (global changed!)

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var i:", i), 100);
}

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let j:", j), 100);
}

console.log("Final i:", i);
console.log("Final j:", typeof j);

function test() {
    if (true) {
        let a = 10;
        console.log(a);
    }
    console.log(a);
}

test();
let x = 1;
{
    let x = 2;
    {
        console.log(x);
        let x = 3;
        console.log(x);
    }
    console.log(x);
}
console.log(x);