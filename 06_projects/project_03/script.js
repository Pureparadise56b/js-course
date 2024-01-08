const clock = document.getElementById("clock");

setInterval(() => {
  let date = new Date();
  let timeMessage = date.toLocaleTimeString();
  clock.innerHTML = `<p class="time">${timeMessage}</p>`;
}, 1000);
