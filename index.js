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

