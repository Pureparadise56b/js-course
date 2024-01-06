/* Arrow Functions */

// concepts of this keyword
const user = {
  name: "toufique",
  age: 19,
  greeting: function () {
    console.log(`Good Morning ${this.name}!!`);
    console.log(this);
  },
};

// user.greeting();
// user.name = "ajay";
// user.age = 20;
// user.greeting();

// console.log(this);

function mango() {
  const username = "ajay";
  console.log(this.username); // we can't access function variables like this. It is only valid for objects.
  console.log(this);
}

const banana = function () {
  const username = "ajay";
  console.log(this.username); //also not for this type of function
  console.log(this);
};

// Arrow function
const apple = () => {
  const username = "ajay";
  console.log(this.username); //also not for this type of function
  console.log(this);
};

// apple();
// banana();
// mango();

/* More concepts on Arrow Functions */

// normal
const result = (num1, num2) => {
  return num1 + num2;
};

// console.log(result(30, 40));

// implicit return in arrow function

const fullname = (firstname, lastname) => firstname + lastname;
// if we user curly braces then must write down return keyword..else if use parenthisis then not required
const anotherFullName = (firstname, lastname) => firstname + lastname;

console.log(fullname("alu", " kabli"));
console.log(anotherFullName("chat", " papri"));
