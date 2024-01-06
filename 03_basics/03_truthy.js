const email = "toufique@gmail.com";

//assums the truthy and falsy values basis on the string content
if (email) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

/* falsy values */

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

/* truthy values */

// "0", "false", " ", [], {}, emptyFunction -> function (){}

/* Check if array or object is empty or not */

const emptArr = [];
const emptObj = {};

if (emptArr.length === 0) {
  console.log("empty Array");
}

if (Object.keys(emptObj).length === 0) {
  console.log("empty Object");
}

// Nullish Coalescing Operator (??): null, undefined

let value;

// value = 5 ?? 20;
value = null ?? 20; // secure the accepting value (if some another api function or any other complex functions return null then instead of assigning the null value the NCO perform another task or maybe assigning some random value)
value = undefined ?? 20;
value = null ?? 10 ?? 20;
console.log(value);

// Terniary Operator

const price = 180;

price >= 90
  ? console.log("I will eat pizza")
  : console.log("I will eat icecream");
