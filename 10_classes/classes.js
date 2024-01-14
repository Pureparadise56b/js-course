// ES6

/* Use Class */

class UserClass {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `ioruuwixbn${this.password}rwuoncmvkaleu`;
  }
  changeUserName() {
    return this.username.toUpperCase();
  }
}

const userOne = new UserClass("sujoy", "sam@yahoo.com", "mango");

console.log(userOne);
console.log(userOne.encryptPassword());
console.log(userOne.changeUserName());

/* Behind The Scene */

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `ioruuwixbn${this.password}rwuoncmvkaleu`;
};

User.prototype.changeUserName = function () {
  return this.username.toUpperCase();
};

const userTwo = new User("geessa", "gain@google.com", "ganimany");

console.log(userTwo);
console.log(userTwo.encryptPassword());
console.log(userTwo.changeUserName());
