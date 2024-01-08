/* arrays */

// () -> parentheses, [] -> square brackets, {} -> curly braces

const myArr = [0, 1, 2, 3, 4, 5, "ajay", true, 6.5]; // 1st declaration
// console.log(myArr);

const myArr2 = new Array("ajay", "sujay", "bijoy"); // 2nd declaration
// console.log(myArr2);

/* array methods */

// myArr.push(7);
// myArr.pop();
// myArr.unshift(10); //insert element in the first position
// myArr.shift(); //remove element from the first position
// console.log(myArr.includes(8)); //return false
// console.log(myArr.indexOf(8)); // return -1

// console.log(myArr);

const separateArr = myArr.join("-");
// console.log(separateArr);

/* slice & splice */

const newArr = [0, 1, 2, 3, 4, 5];

// console.log("A: ", newArr);

const nn1 = newArr.slice(1, 4); // return sliced array of specified index but don't change real array
// console.log(nn1);
// console.log("B: ", newArr);

const nn2 = newArr.splice(1, 4); // actually removed sliced items form the real array
// console.log(nn2);
// console.log("C: ", newArr);

const marvalHeros = ["spiderman", "ironman", "thor", "hulk"];
const dcHeros = ["superman", "batman", "flash", "cyborck", "catgirl"];

// dcHeros.push(marvalHeros);
// console.log(dcHeros);

const allHeros = marvalHeros.concat(dcHeros);
// console.log(allHeros);

/* spread operator */

const anotherAllHeros = [...marvalHeros, ...dcHeros];
// console.log(anotherAllHeros);

const numbers = [
  5,
  6,
  7,
  [10, 40, 30],
  8,
  9,
  [1, 2, [100, [6000, 8000], 200, 500], 3, 4],
];

// console.log(numbers.flat(Infinity));

// console.log(Array.from("Toufique Al Ajay"));

// console.log(
//   Array.from({
//     name: "ajay",
//     age: 19,
//     id: 1003,
//   })
// );

let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1, score2, score3));

/* This two method is used to convert node list and html collection into array */

// Array.from(Node_list);
// Array.from(HTML_collection);

// Node list and HTML collection are not purely array..They don't have most of the array methods.
