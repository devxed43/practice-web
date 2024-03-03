const nav = document.getElementById("nav");
const menuIcon = document.querySelector(".menu-icon");

// toggle out the menu from hidden to show
function toggleMenu() {
  nav.classList.toggle("active");
  menuIcon.classList.toggle("active");
}

// removes the active class
function hideMenu() {
  nav.classList.remove("active");
  //   this resets the menu when you click on it. it removes the open active styling
  menuIcon.classList.remove("active");
}
