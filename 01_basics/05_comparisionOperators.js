/* normal conversion */

console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 >= 1);
console.log(2 == 1);
console.log(2 != 1);

/* implecitely covert into number */

console.log("2" > 1);
console.log("02" > 1);
console.log("2a" > 1);

/* Sometime covert into 0 and sometime covert into NaN */

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/* compare with anything return false */

console.log(undefined == 0);
console.log(undefined == "ajay");
console.log(undefined == "45abc");

/* === strict check (also check datatype besides values) */

console.log("2" === 2);
