const hamburger = document.querySelector(".ham-icon");
const sidebar = document.querySelector("#side");
let sideDisplay = sidebar.style.display;

hamburger.addEventListener("click", () => {
  sidebar.className = sidebar.className ===
   "side-visible" ? "side-hidden" : "side-visible";
})


