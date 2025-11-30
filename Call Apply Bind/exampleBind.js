// Great — bind() is the most important one among call/apply/bind because
//  it is heavily used in React, event handlers, classes, OOP, and interviews.

// bind() does not call the function immediately.
// bind is used when you want to “lock” this value for future use.

//*******This is the biggest problem in JavaScript:
// When you take a function out of its object,
// it loses its this value. ***************


// bind() = permanently attach function to its object
function testBind() {
  console.log(this.name);
}

const user = { name: "Mayank" };

const newFuncton = testBind.bind(user);
newFuncton();
