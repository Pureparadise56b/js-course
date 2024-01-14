function flyindBird(name) {
  this.name = name;
  return this;
}

function nonFlyingBird(name) {
  this.name = name;
  return this;
}

const nfb = new nonFlyingBird("penguin");
const fb = new flyindBird("parrot");

console.log(nfb instanceof flyindBird);
console.log(nfb instanceof nonFlyingBird);
