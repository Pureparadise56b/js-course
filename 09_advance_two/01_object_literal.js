// Object Literal are literally objects

// Usage of this keyword

function greet() {
  console.log(`Good Morning ${this.username}`);
}

const user = {
  username: "Ajay",
  age: 19,
  loginCount: 6,
  signedIn: true,
  greet,
};

user.greet();

/* Problem while not using this keyword to refer the corrent context */

function printUsername() {
  console.log(`Username is: ${user.username}`);
}

const user = {
  username: "Ajay",
  age: 19,
  loginCount: 6,
  signedIn: true,
  showName: printUsername,
};

user.showName(); // Output: Username is: Ajay

const anotherUser = {
  username: "taniya",
  age: 22,
  loginCount: 10,
  signedIn: false,
  showName: printUsername,
};

anotherUser.showName(); // Output: Username is: Ajay

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

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
