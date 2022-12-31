const toggleTheme = (lightTheme) => {
  //   lightTheme = !lightTheme;
  if (!lightTheme) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

// responsive navBar and logo elements
const menuButton = document.getElementById("menu-button");
const navElements = document.getElementById("nav-list");
const logo = document.getElementById("logo");

menuButton.addEventListener("click", () => {
  navElements.classList.toggle("show");
  logo.classList.toggle("display");
});
