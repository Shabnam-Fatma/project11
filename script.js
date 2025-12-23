const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  const spans = themeToggler.querySelectorAll("span");
  const isDark = document.body.classList.contains("dark-theme-variables");

  spans[0].classList.toggle("active", !isDark);
  spans[1].classList.toggle("active", isDark);
});
