//homepage
document.addEventListener("DOMContentLoaded", () => {
  let checkLogin = false;
  console.log("Page Loaded");
  let hp = document.getElementById("homepage");
  hp.addEventListener("click", (e) => {
    console.log("Homepage loading");
    window.location.href = "index.html";
  });
});
