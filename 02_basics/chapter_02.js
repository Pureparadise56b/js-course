/* singleton (constructor method) */

// Object.create();

/* object literals */

const mySym = Symbol("sdk");

const User = {
  name: "ajay",
  "full name": "Toufique Al Ajay", // we can access this type of keys by using only square notation
  age: 19,
  email: "ajay@yahoo.com",
  isLoggedIn: true,
  favFruits: ["mango", "orange", "apple"],
  [mySym]: "hello",
};

// console.log(User.email);
// console.log(User["full name"]); // access using square notation

// create object functions
User.greet = function () {
  this.address = "kanthalia"; // this refer the current object
};

User.greet();

// changing vlaues of object
User.name = "toufique";

// freezing the object so that no one can change the values
Object.freeze(User);
User.email = "toufique@dandia.com";
// console.log("USER: ", User);

// objects inside an object

const details = {
  email: "tantan@pan.com",
  fullname: {
    firstname: "Toufique",
    middlename: "Al",
    lastname: "Ajay",
  },
  age: 19,
};

// console.log("DETAILS: ", details.fullname.firstname);

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "c",
  4: "d",
};

/* concatinate many objects */

// const obj3 = Object.assign(obj1, obj2);
const obj3 = { ...obj1, ...obj2 };

// console.log(obj3);

/* Object methods */

// console.log(Object.keys(User));
// console.log(User.hasOwnProperty("address"));

/* Destructuring */

const course = {
  coursename: "js with ajay",
  price: 599,
  instructor: "Toufique Al Ajay",
};

const { instructor } = course;
console.log(instructor);
