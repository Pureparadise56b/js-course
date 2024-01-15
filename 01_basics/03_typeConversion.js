let score = "33";
let alive = true;
let password = "1123abc";
let something = null;
let nothing = undefined;

let cvScore = Number(score); // return a number
let cvAlive = Number(alive); // return 1 or 0
let cvPassword = Number(password); // return NaN (Not a Number)
let cvSomething = Number(something); // return 0
let cvNothing = Number(nothing); // return NaN

console.log(cvScore);
console.log(cvAlive);
console.log(cvPassword);
console.log(cvSomething);
console.log(cvNothing);

// "45" => 45
// "45ajay" => NaN
// true => 1; false => 0

// Number(); => for convert into number
// String(); => for convert into string
// Boolean(); => for convert into boolean

let isLoggedIn = 1;
let boolIsLogged = Boolean(isLoggedIn);
console.log(boolIsLogged);

// 1 => true; 0 => false
// "" => false
// "ajay" => true
// null => false

let number = 56.5;

let strNumber = String(number);
console.log(typeof strNumber);
console.log(strNumber);
