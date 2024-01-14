/* Goal */

// let myName = "ajay                        ";

// console.log(myName.length);

// I want a method on string called trueLenght that gives the original lenght of the string after removing unwanted spaces.

// Like this - console.log(myName.trueLenght());

const animals = ["cow", "dog", "cat"];
const word = "banana";

Object.prototype.sayHi = function () {
  console.log("hello from object");
};

// As strings, arrays, functions all are object in javascript whenever we set a prototype in object all of its child get this prototype bydefault
Object.sayHi();
animals.sayHi();
word.sayHi();

String.prototype.printHello = function () {
  console.log("hello printing from string");
};

// Object.printHello();
// animals.printHello(); // can't access printHello prototype using Array or Object because this prototype is defined in only string and object, Array or any function can't access this
word.printHello();

/* Prototype Inheritance */

// Old syntax
const bird = {
  feather: true,
};

const flyingBird = {
  wings: true,
  //   __proto__: bird, // get the properties from bird object
};

const smallFlyingBird = {
  color: "green",
  leg: 2,
  //   __proto__: flyingBird, // get the properties from flyingBird object
};

// Modern syntax
Object.setPrototypeOf(smallFlyingBird, flyingBird); // smallFlyingBird object get the property of flyingBird
console.log(smallFlyingBird.wings);

/* Implementing the project */

let myName = "ajay                        ";

String.prototype.trueLength = function () {
  return this.trim().length;
};

console.log(myName.length);
console.log(myName.trueLength());
