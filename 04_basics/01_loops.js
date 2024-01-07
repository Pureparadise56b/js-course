/* Loops */

// While Loop
let index = 0;

while (index <= 10) {
  //   console.log(`The Value is: ${index}`);
  index++;
}

const superHeros = ["batman", "ironman", "flash"];

let arrIndex = 0;

while (arrIndex < superHeros.length) {
  //   console.log(superHeros[arrIndex]);
  arrIndex++;
}

// Do While Loop

let index2 = 10;

do {
  //   console.log(index2); // run atleast one time
  index2++;
} while (index2 >= 20);

// For Loop
let array = ["ajay", "ankush", "taniya", "adri", "saniya", "manoj", "rubi"];

// For Loop with break
console.log("FIRST LOOP: ");
for (let index = 0; index < array.length; index++) {
  if (array[index] == "manoj") {
    console.log("done", array[index]);
    break;
  }
  const element = array[index];
  console.log(element);
}

// For Loop with continue
console.log("\nSECOND LOOP: ");
for (let index = 0; index < array.length; index++) {
  if (array[index] == "manoj") {
    array[index] = "manoj sharu";
    continue;
  }
  const element = array[index];
  console.log(element);
}

console.log("Array: ", array);
