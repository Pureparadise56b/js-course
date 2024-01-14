// first Promise creation
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Promise created..");
    resolve();
  }, 1000);
});

// Promise consumed
promiseOne.then(function () {
  console.log("promise consumed..");
});

// fetch method
fetch("https://api.github.com/users/PureParadise56b")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(typeof data);
  })
  .catch((error) => {
    console.error("Error: ", error);
  });
