// There are two types of memory
// Stack (Premetive), Heap (Non-Premetive)

//Premetive (Stack)
let myYTName = "PureParadise";
let myAnotherYTName = myYTName;

myAnotherYTName = "ajay";

console.log(myYTName);
console.log(myAnotherYTName);

//Non Premetive (Heap)

let myDetails = {
  email: "toufique@yahoo.com",
  address: "earth",
  phone: "9999999999",
};

let myAnotherDetails = myDetails;
myAnotherDetails.address = "mars";
console.log("Another details: ", myAnotherDetails);
console.log("Details: ", myDetails);
