const arr = [10, 20, 30, 40, 50];

const languageObj = {
  py: "python",
  js: "javascript",
  rb: "ruby",
};

// Map datatype
const map = new Map();

map.set("bg", "background");
map.set("cl", "colour");
map.set("br", "border");

/* For Of Loop */

// for of loop on array
console.log("\nfor of loop on array:");
for (const value of arr) {
  console.log(value); //return values
}

// for of loop on string
console.log("\nfor of loop on string:");
for (const char of "hello ji") {
  console.log("char is: ", char); //return values
}

// for of loop on Map
// destructuring iteraters
console.log("\nfor of loop on map:");
for (const [key, value] of map) {
  console.log("Keys: ", key, "Values: ", value); //return both keys and values
}

// object is not iterable by For Of Loop
// for (const key of languageObj) {
//   console.log(key);
// }

/* For In Loop */

// for in loop on array
console.log("\nfor in loop on array:");
for (const key in arr) {
  console.log(key); // return index number
}

//for in loop on string
console.log("\nfor in loop on string:");
for (const char in "hello hi") {
  console.log(char); // return index number
}

// map is not iterable by for in loop
// for (const key in map) {
//   console.log(key);
// }

//for in loop on object
console.log("\nfor in loop on object:");
for (const key in languageObj) {
  console.log(key); // return keys
}

/* For Each Loop */

const newArray = ["javascript", "python", "java", "php"];

// callback functions don't have name
console.log("\nFor Each Loop:");
newArray.forEach(function (item) {
  console.log(item);
});

// callback arrow function
// newArray.forEach((item) => {
//   console.log(item);
// });

/* Interesting Stuffs */

// passing custom function's referance in For Each Loop
// function printMe(item) {
//   console.log(item);
// }

// newArray.forEach(printMe);

const api = [
  {
    lanName: "python",
    file: "py",
  },
  {
    lanName: "javascript",
    file: "js",
  },
  {
    lanName: "c++",
    file: "cpp",
  },
];

api.forEach((item) => {
  console.log(item);
});
