// {} -> scopes

// let, const -> local scope
// var -> global scope

const a = 100;
let b = 200;

if (1) {
  const a = 10;
  let b = 20;
  var c = 30; // global scope
  d = "hello"; // global scope
  //   console.log("INNER a: ", a);
  //   console.log("INNER b: ", b);
}

// console.log("OUTER a: ", a);
// console.log("OUTER b: ", b);
// console.log(c);
// console.log(d);

/* nested scopes in functions */

function senior() {
  const iceCream = "butter scotch";

  //closer
  function junior() {
    const cake = "black forest";
    // console.log("icecream: ", iceCream);
  }
  // console.log("cake: ", cake);
  junior();
}

senior();

/*++++++++++++++++++++++++ intresting ++++++++++++++++++++++++*/

console.log(addone(5)); // we can call normal functions before define it. (Concepts of hoistiong in JS)

function addone(num) {
  return num + 1;
}

// console.log(addtwo(6)); // we can't call this type of function before defining

const addtwo = function (num) {
  return num + 2;
};

console.log(addtwo(6));
