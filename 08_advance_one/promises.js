/* Creating Promises */

// first Promise
const promiseOne = new Promise(function (resolve, reject) {
  // Do any asyn task e.g. DB calls, file Read/Write, cryptography, network calls
  setTimeout(() => {
    console.log("Async Task Completed..");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed..");
});

// second Promise
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async Task Two");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async two resolved");
});

// third Promise
const promiseThree = new Promise(function (resolve, reject) {
  const data = {
    name: "Toufique Al Ajay",
    age: 19,
    email: "toufique26ajay@gmail.com",
    password: "ajay@9339",
  };
  setTimeout(() => {
    resolve(data);
  }, 1000);
});

promiseThree.then(function (user) {
  console.log("ASYNC 3 USER: ", user);
});

// fourth Promise
const promiseFour = new Promise(function (resolve, reject) {
  const data = {
    name: "Toufique",
    email: "toufique26ajay@gmail.com",
  };
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve(data);
    } else {
      reject("Error: can't resolved...");
    }
  }, 1000);
});

// thenable chaining with Promise
const username = promiseFour
  .then(function (user) {
    return user.name;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("finally resolved or rejected");
  });

//fifth Promise
const promiseFive = new Promise(function (resolve, reject) {
  const data = {
    name: "Taniya",
    password: "tan45",
  };
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve(data);
    } else {
      reject("Error: can't resolved...");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

consumePromiseFive();
