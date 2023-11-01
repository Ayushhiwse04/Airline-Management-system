let checkLogin = false;
const username = document.getElementById("username");
const password = document.getElementById("password");

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (username.value === "" || password.value === "") {
    alert("Please fill in all fields!");
  } else if (username.value === "admin" && password.value === "123") {
    checkLogin = true;
    localStorage.setItem("username", username.value);
    localStorage.setItem("checkLogin", checkLogin);
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid login credentials!");
  }
});
