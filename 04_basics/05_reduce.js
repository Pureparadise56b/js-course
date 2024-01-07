const bills = [1000, 450, 300, 5000];

// reduce with normal functions
let totalCost = bills.reduce(function (acc, val) {
  return acc + val + 5;
}, 0);
console.log("Cost with GST: ", totalCost);

// reduce with arrow functions
totalCost = bills.reduce((acc, val) => acc + val, 0);

console.log("Cost without GST: ", totalCost);
