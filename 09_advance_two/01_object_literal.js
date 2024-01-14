// Object Literal are literally objects

// Usage of this keyword

// function greet() {
//   console.log(`Good Morning ${this.username}`);
// }

// const user = {
//   username: "Ajay",
//   age: 19,
//   loginCount: 6,
//   signedIn: true,
//   greet,
// };

// user.greet();

/* Problem while not using this keyword to refer the corrent context */

// function printUsername() {
//   console.log(`Username is: ${user.username}`);
// }

// const user = {
//   username: "Ajay",
//   age: 19,
//   loginCount: 6,
//   signedIn: true,
//   showName: printUsername,
// };

// user.showName(); // Output: Username is: Ajay

// const anotherUser = {
//   username: "taniya",
//   age: 22,
//   loginCount: 10,
//   signedIn: false,
//   showName: printUsername,
// };

// anotherUser.showName(); // Output: Username is: Ajay

/* Constructor Function */

// new keyword is a constructor function

// const promiseOne = new Promise();
// const date = new Date();

function user(username = null, email = null) {
  this.username = username;
  this.email = email;

  return this;
}

// constructor function gives a new instance of the Object/Function
// without new keyword whenever we create multiple instance from a same Object/Function then the vlaues of old instance will always overwrite.

const user1 = user("ajay", "ajay@gmail.com");
const user2 = user("taniya", "taniya@gmail.com");
console.log(user1); // username = taniya, email = taniya@gmail.com

const correctUserOne = new user("toufique", "toufique26ajay@gmail.com");
const correctUserTwo = new user("roja", "roja22taniya@gmail.com");
const correctUserThree = new user();

console.log(correctUserOne);
console.log(correctUserTwo);
console.log(correctUserThree);

// after using new keyword this steps will happen

// while we use new keyword a empty object will be created called instance (this).
// constructor function will be called that takes all arguments.
// then the arguments are injected into the empty 'this' Object and return.
// give that instance to the variable.
