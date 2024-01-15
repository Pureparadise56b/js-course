/* lexical scoping */

function parent() {
  let foodOne = "chocolate";
  let foodTwo = "icecream";
  function childOne() {
    let myToy = "bugatti";
    console.log(`Give me the ${foodOne}`);
  }
  function childTwo() {
    // console.log(myToy); // can't access out of the scope
    console.log(`Give me the ${foodTwo}`);
  }

  childOne();
  childTwo();

  //   console.log(myToy); // can't access out of the scope
}

parent();

// child functions can also access parent's properties, it is called lexical scoping

// But parent can't access child's properties and siblings also can't access each other's properties

/* closure */
function outer() {
  const name = "ajay";
  console.log(`Hello ${name} from Outer`);
  // closure functions that not only return its execution context but also return the lexical scope of it that means also return parent's execution context
  return function inner() {
    console.log(`Hello ${name} from Inner`);
  };
}

const innerCall = outer();
innerCall();
