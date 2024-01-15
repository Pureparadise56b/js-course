// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

// create own object and set property customly

const user = {
  name: "toufique",
  age: 19,
  address: "kanthalia",
  login: function () {
    console.log("fat gyi");
  },
};

Object.defineProperty(user, "name", {
  writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(user, "name"));

// console.log(user.name);

// user.name = "hello";

// console.log(user.name);

for (let [key, value] of Object.entries(user)) {
  if (typeof value !== "function") {
    console.log(`key: ${key}, value: ${value}`);
  }
}
