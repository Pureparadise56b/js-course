const btns = document.querySelectorAll(".btn");
const body = document.body;
console.log(btns);

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const bgColor = window.getComputedStyle(btn).backgroundColor; // fetch any element's style attributes
    body.style.backgroundColor = bgColor;
  });
});
