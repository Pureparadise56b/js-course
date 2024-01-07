// map
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const newNumbers = numbers.map((num) => num + 10);
console.log(newNumbers);

// chaining
const result = numbers.map((num) => num * 10).filter((num) => num > 500);
console.log(result);
