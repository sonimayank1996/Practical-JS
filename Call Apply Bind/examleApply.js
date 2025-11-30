// apply() is exactly like call(),
// but it takes arguments as an array, not as individual parameters.

// why introduce
// Because sometimes you don’t know how many arguments you’ll pass,

// for both call and apply
// Set this manually
// Reuse function for different objects

function say(message1, message2, a) {
  console.log(this.name, message1, message2, a);
}

const user = { name: "Mayank" };
const user2 = { name: "Sanyam" };

say.apply(user, ["Hello", "Good Evening", "hii"]);
say.apply(user2, ["Hello", "Good Morning"]);


// Where do we REALLY need apply()?
//1. When you already have arguments in an array