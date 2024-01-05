// arrays

// () -> parentheses, [] -> square brackets, {} -> curly braces

const myArr = [0, 1, 2, 3, 4, 5, "ajay", true, 6.5];
// console.log(myArr);

const myArr2 = new Array("ajay", "sujay", "bijoy");
// console.log(myArr2);

// array methods

// myArr.push(7);
// myArr.pop();
// myArr.unshift(10);
// myArr.shift();
// console.log(myArr.includes(8));
// console.log(myArr.indexOf(8));

// const newArr = myArr.join();
// console.log(newArr);

// slice & splice

const newArr = [0, 1, 2, 3, 4, 5];

console.log("A: ", newArr);

const nn1 = newArr.slice(1, 4);
console.log(nn1);
console.log("B: ", newArr);

const nn2 = newArr.splice(1, 4);
console.log(nn2);
console.log("C: ", newArr);
