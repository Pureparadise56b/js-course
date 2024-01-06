const firstName = "Toufique";
const middleName = "Al";
const lastName = "Ajay";

// console.log(firstName + middleName + lastName); // this is a bad way to display strings

//instead of that we use String Interpulation

console.log(`${firstName}@${middleName}@${lastName}`); // in the curly braces we can pass any type of variables

//methods on String
const myName = new String("Toufique Al Ajay");

console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.charAt(4));
console.log(myName.indexOf("u"));

console.log(myName.substring(0, 5));
console.log(myName.trim());
console.log(myName.replace("@", " "));

const arr = myName.split(" ");
console.log(arr);
