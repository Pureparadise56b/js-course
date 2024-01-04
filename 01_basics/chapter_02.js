"use strict"; //treat all JS code as newer version.

/* Datatypes */

// alert(3 + 3) //we are usign nodejs, not browser so we can't perform anything related document in javascript.

//Prioritize code readability.

// console.log(3
//     +
//      3); console.log("ajay") // Wrong format ❌

// console.log(3 + 3)
// console.log("ajay")  // Correct format ✅

let name = "ajay";
let age = 20;
let isLoggedIn = true;

/* Premetive Datatype */

// number => max 2 to the power 53
// bigint
// string => ""
// boolean => true/false
// null => datndalone value
// undefined
// symbol => unique

// return type of any variable
console.log(typeof undefined); // undefined
console.log(typeof null); // object

/* Datatypes are mainly two types basis on memory allocation and access type */

// 1st: Premetive (they are call by value)
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// declare Symbol

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id == anotherId);

//declare BigInt

const bigNumber = 93573475349739473297534n;
console.log(bigNumber);

// 2nd: Reference (Non premetive)
// 3types: Array, Objects, Functions

// Array
const heros = ["shaktiman", "naagraj", "krish"];

// Objects
const details = {
  name: "Ajay",
  age: 20,
  id: 1001,
};

console.log(typeof details);

/*
Type                  return
-----	              ------
Undefined	        "undefined"
Null	            "object" (reason)
Boolean	            "boolean"
Number	            "number"
BigInt	            "bigint"
String	            "string"
Symbol	            "symbol"
Function 	        "function"
Any other object	"object"
*/
