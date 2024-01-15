/* Numbers */

const number = 20.56;
console.log(number);

// create number using Number class
const number2 = new Number(300.9936756638);

// methods on Numbers
const strNumber = number2.toString();
console.log(typeof strNumber);
console.log(strNumber);

// how many digits are shown after the decimal point
const fixedNumber = number2.toFixed(3);
console.log(fixedNumber);

// gives precisios value of given number
console.log(number.toPrecision(2));

// format value in a local number form
const balance = 10000000;
console.log(balance.toLocaleString("en-IN"));

// properties on direct Number class
console.log(Number.MAX_SAFE_INTEGER);

/* methods on direct Math object */

console.log(Math);
console.log(Math.abs(-34));
console.log(Math.round(3.4));
console.log(Math.ceil(3.1));
console.log(Math.floor(3.7));
console.log(Math.max(3.7, 5, 2, 3, 7));
console.log(Math.min(3.7, 5, 2, 3, 7));
console.log(Math.floor(Math.random() * 10));

const max = 40;
const min = 30;

// formula to generate random number between max and min values
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
