function setUserName(username) {
  this.username = username;
  console.log("call");
}

function createUser(username, email, password) {
  // explecitly call
  setUserName.call(this, username); // pass createUser's this to directly set the value on it in seUserName constructor
  this.email = email;
  this.password = password;
}

const user1 = new createUser("ajay", "ajay@gmail.com", "ajay9339");

console.log(user1);
