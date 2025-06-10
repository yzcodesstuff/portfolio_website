import { animate } from "https://cdn.jsdelivr.net/npm/motion@12.16.0/+esm";

const splash = document.getElementById("splash");
const progressBar = document.getElementById("progressBar");

animate(progressBar, { width: ["0%", "100%"] }, { duration: 2.5, easing: "ease-in-out" });

setTimeout(() => {
  animate(splash, { opacity: 0 }, { duration: 0.5 }).finished.then(() => {
    window.location.href = "home.html";
  });
}, 3000);