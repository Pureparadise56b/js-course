/* Functions */

// normal functions
function addTwoNumbers(number1, number2) {
  return number1 + number2; // -> return statement
}

const result = addTwoNumbers(45, 67); // function call
// console.log("Result: ", result);

function loginUserMessage(username = "ajay") {
  return `${username} just logged in`;
}

console.log("Message: ", loginUserMessage("toufique"));

/* function with rest operator to accept n numbers of parametes */

function calculateCartPrice(...num1) {
  return num1;
}

function calculateCartPrice2(val1, val2, val3, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(2, 3, 4, 5, 6, 7, 8, 9, 10));
// console.log(calculateCartPrice2(2, 3, 4, 5, 6, 7, 8, 9, 10));

/* function with objects */

const item = {
  name: "iphone",
  price: 80000,
  mft: "apple PVT. LTD",
  inStock: true,
};

function showItems(obj) {
  console.log("ITEM: ");
  console.log(`The item you carted is ${obj.name}`);
  console.log(`Price is ${obj.price}`);
  console.log(`Manufacturer ${obj.mft}`);
  if (obj.inStock) {
    console.log("In stock");
  } else {
    console.log("Out of stock");
  }
}

// showItems(item);
// showItems({
//   name: "samsung s21 ultra",
//   price: 40000,
//   mft: "samsung PVT. LTD",
//   inStock: false,
// });

/* function with array */

const arr = [10, 30, 50, 60, 40];

function handleArray(anyArr) {
  console.log(anyArr[1]);
}

handleArray(arr);
