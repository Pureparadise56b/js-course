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
