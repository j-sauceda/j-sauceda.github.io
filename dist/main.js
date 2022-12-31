const toggleTheme = (lightTheme) => {
  //   lightTheme = !lightTheme;
  if (!lightTheme) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};
