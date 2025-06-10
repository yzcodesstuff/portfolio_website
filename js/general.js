const themeToggle = document.getElementById("themeToggle");
const theme = document.getElementById("theme");

if (localStorage.getItem("theme") === "dark") {
  theme.classList.add("dark");
}

themeToggle.addEventListener("click", () => {
  theme.classList.toggle("dark");

  if (theme.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "");
  }
});