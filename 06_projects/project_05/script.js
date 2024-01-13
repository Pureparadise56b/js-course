const avatar = document.getElementById("avatarImg");
const username = document.getElementById("username");
const email = document.getElementById("email");
const followers = document.getElementById("followers");

const xhr = new XMLHttpRequest();
const apiUrl = "https://api.github.com/users/PureParadise56b";
xhr.open("GET", apiUrl);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
    avatar.style.backgroundImage = `url(${data.avatar_url})`;
    username.innerText = data.name;
    followers.innerText = data.followers;
    if (!data.email) {
      email.innerHTML = `<span class = "error">user don't provied any email</span>`;
    } else {
      email.innerText = data.email;
    }
  }
};

xhr.send();
