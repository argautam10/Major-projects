const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".menu-nav");
const menuNavItem = document.querySelectorAll(".menu-nav__item");

// initially the menu button is not showing any transition so false
let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
  // if showMenu is false
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    navMenu.classList.add("open");
    // loop for iterating because there are multiple list items
    menuNavItem.forEach((item) => item.classList.add("open"));
    // menuNavItem.classList.add("open");
    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    navMenu.classList.remove("open");
    menuNavItem.forEach((item) => item.classList.remove("open"));
    // menuNavItem.classList.remove("open");

    showMenu = false;
  }
}
