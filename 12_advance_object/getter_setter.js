/* Getter Setter in Class */

class User {
  constructor(name, email) {
    this.name = name;
    this._email = email;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get name() {
    return this._name + " Bro";
  }
  set name(value) {
    this._name = value;
  }
}

const userOne = new User("toufique", "ajay@gmail.com");

// console.log(userOne.email);
// console.log(userOne.name);

/* Getter Setter in constructor function */

function product(productName, price) {
  this._productName = productName;
  this._price = price;

  Object.defineProperty(this, "price", {
    get: function () {
      return this._price - this._price * (5 / 100);
    },
    set: function (value) {
      this._price = value;
    },
  });
  Object.defineProperty(this, "productName", {
    get: function () {
      return this._productName + " L.E.";
    },
    set: function (value) {
      this._productName = value;
    },
  });
}

const pdtOne = new product("Dove", 27);

console.log(pdtOne.productName);

// console.log(
//   `Product Name: ${pdtOne.productName}, Price after 5% discount: ${pdtOne.price}`
// );

/* Getter Setter in object */

const Employe = {
  _email: "emply@emp.com",
  _id: 1001,
  _password: "********",
  // comma is must after every setter or getter method end
  get id() {
    return this._id + "D";
  },
  set id(vlaue) {
    this._id = vlaue;
  },
  get email() {
    return this._email.toUpperCase();
  },
  set email(vlaue) {
    this._email = vlaue;
  },
};

const empOne = Object.create(Employe);

console.log(empOne.id);
console.log(empOne.email);
