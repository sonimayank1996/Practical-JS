// Currying = Transforming a function that takes multiple arguments into a sequence of functions that each take a single argument.
// Normal Function = Reusable Logic
// Currying = Reusable Configuration ⚡

// Without currying
function add(a, b, c) {
  return a + b + c;
}
console.log(add(1, 2, 3));
// with currying
function currying(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(currying(2)(4)(5));

// Without currying
function buildCar(model, color, engineType, carType) {
  return `{This is your ${carType}}`;;
}

buildCar("top model", "red", "first", "hachback");
buildCar("top model", "red", "first", "sidden");
buildCar("top model", "red", "first", "SUV");

function buildCar(model) {
  return function (color) {
    return function (engineType) {
      return function (carType) {
        return `{This is your ${carType}}`;
      };
    };
  };
}

let sayCarType = buildCar("top model")("red")("first");
sayCarType('SUV')
sayCarType('hachback')
sayCarType('sidden');