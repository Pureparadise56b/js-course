function mul(num) {
  this.num = num;
  return num * 5;
}

console.log(mul(10));

mul.someVar = "hello"; // we can do this because functions are also a prototype of a object

console.log(mul.someVar);
console.log(mul.prototype);

function createProduct(productName, price, inStock) {
  this.productName = productName;
  this.price = price;
  this.inStock = inStock;
  return this;
}

// create a prototype of the constructor method that will increament the price
createProduct.prototype.increamentPrice = function (gst = 0) {
  this.price = this.price + this.price * (gst / 100); // this keyword is essential
};

const pdtOne = new createProduct("Dove", 27, true); // new keyword is also essential to tell the instance that the constructor has custom prototype.

console.log(pdtOne.productName, pdtOne.price);

pdtOne.increamentPrice(10);

console.log("Price After Increament: ", pdtOne.price);

/*

Here's what happens behind the scenes when the new keyword is used:

1. A new object is created: The new keyword initiates the creation of a new JavaScript object.

2. A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

3. The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

4. The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
