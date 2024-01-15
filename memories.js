// There are two types of memory
// Stack (Premetive datatype), Heap (Non-Premetive datatype)

//Premetive (Stack)
// string, number, boolean, bigint, null, undefined
let myYTName = "PureParadise";
let myAnotherYTName = myYTName;

myAnotherYTName = "ajay";

console.log(myYTName);
console.log(myAnotherYTName);

//Non Premetive (Heap)
// Array, Object, Function
let myDetails = {
  email: "toufique@yahoo.com",
  address: "earth",
  phone: "9999999999",
};

let myAnotherDetails = myDetails;
myAnotherDetails.address = "mars";
console.log("Another details: ", myAnotherDetails);
console.log("Details: ", myDetails);
