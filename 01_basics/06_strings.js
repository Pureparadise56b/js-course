const firstName = "Toufique";
const middleName = "Al";
const lastName = "Ajay";

// we can also create string like this
const myName = new String("          Toufique@Al@Ajay");

// console.log(firstName + middleName + lastName); // this is a bad way to display strings

//instead of that we use String Interpulation

console.log(`${firstName}-${middleName}-${lastName}`); // in the curly braces we can pass any type of variables

//methods on String
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.charAt(15));
console.log(myName.indexOf("u"));
console.log(myName.substring(9, 14));

console.log(myName.replace("@", " ")); // replace only one occurance
console.log(myName.replaceAll("@", " ")); // replace all occurances

const arr = myName.split(" ");
console.log(arr);

const trimmedName = myName.trim();
console.log(trimmedName);
console.log(trimmedName.length); // for double checking
