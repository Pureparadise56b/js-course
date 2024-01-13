const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
let intervalID;

const randomColorGenerator = () => {
  const hexCodes = "0123456789abcdef";
  let finalCode = "#";
  for (let index = 0; index < 6; index++) {
    finalCode += hexCodes[Math.floor(Math.random() * 16)];
  }
  return finalCode;
};

const startChanging = function () {
  if (!intervalID) {
    intervalID = setInterval(() => {
      document.body.style.backgroundColor = randomColorGenerator();
    }, 1000);
  }
};
const stopChanging = function () {
  clearInterval(intervalID);
  intervalID = null;
  //   document.body.style.backgroundColor = "white";
};

startButton.addEventListener("click", startChanging);

stopButton.addEventListener("click", stopChanging);
