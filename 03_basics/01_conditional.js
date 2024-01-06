/* If Else statement */

const temparature = 19;
if (temparature > 21) {
  console.log("Weather is sunny");
} else {
  console.log("Weather is cold");
}

console.log("always executed!!");

/* scopes in conditional */

const points = 500;

if (points >= 500) {
  let prRank = "Pro";
  console.log(`You are a ${prRank} player now.`);
}

if (points < 1000) {
  var gmRank = "grand master";
  console.log(`But you are not a ${gmRank} player.`);
}

// console.log(rank); // gives error because let has local scope
// console.log(gmRank);

// one liner conditional
if (400 < 600) console.log("number is less than 600");

// if else ladder
const accountBalance = 9000;

if (accountBalance < 5000) {
  console.log("You are gorib");
} else if (accountBalance < 6000) {
  console.log("You are middleclass");
} else if (accountBalance < 8000) {
  console.log("You are borolok");
} else {
  console.log("Ambani is your father");
}

// nested if
const life = 3;
const weapen = "bomb";

if (life >= 1) {
  console.log("you can play");
  if (weapen === "bomb") {
    console.log("you can blust your enemy");
  } else {
    console.log("you can not blust your enemy");
  }
}

// multiple condition in if statement

const isLoggedIn = true;
const debitCard = true;

if (isLoggedIn && debitCard) {
  console.log("You can purchase this course");
  const coupon = false;
  const scratchCard = true;
  if (coupon || scratchCard) {
    console.log("You can get a great discount!!");
  }
}
