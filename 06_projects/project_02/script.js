const height = document.getElementById("height");
const weight = document.getElementById("weight");
const form = document.getElementById("bmi-form");
const errorMessage = document.getElementById("error-message");
const resultMessage = document.getElementById("result");
let result;

form.addEventListener("submit", (e) => {
  let heightInNumber = Number(height.value);
  let weightInNumber = Number(weight.value);
  //   console.log(heightInNumber);
  //   console.log(weightInNumber);

  if (
    isNaN(heightInNumber) ||
    isNaN(weightInNumber) ||
    heightInNumber <= 0 ||
    weightInNumber <= 0
  ) {
    errorMessage.innerText = "Wrong input";
  } else {
    result = weightInNumber / heightInNumber ** 2;
    errorMessage.innerText = "";
    // resultMessage.innerHTML = `your BMI is: ${result.toFixed(
    //   2
    // )} KG/m<sup>2</sup>`;
    if (result < 18.6) {
      resultMessage.innerHTML = `your BMI is: ${result.toFixed(
        2
      )} KG/m<sup>2</sup> and your are Under Weighted`;
    } else if (result >= 18.6 && result <= 24.9) {
      resultMessage.innerHTML = `your BMI is: ${result.toFixed(
        2
      )} KG/m<sup>2</sup> and your are Normal`;
    } else if (result > 24.9) {
      resultMessage.innerHTML = `your BMI is: ${result.toFixed(
        2
      )} KG/m<sup>2</sup> and your are Over Weighted`;
    }
  }
});
