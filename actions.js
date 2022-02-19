// let arrowMenuDown = true;
const buttonMenu = document.getElementById("menu-btn");
const hiddenResponsiveMenu = document.getElementById("hidden-responsive__menu");
const hiddenCloseButton = document.getElementById("close-menu-btn");
// Full header menu
const fullHeaderMenu = document.getElementById("full-header__menu");
// Lateral content Menu
const lateralContetnMenu = document.getElementById("lateral-content-menu");

// menu link
const links = document.querySelectorAll(".nav-link");

buttonMenu.addEventListener("click", function () {
  if (document.querySelector("#menu-btn i").className === "fas fa-sort-down") {
    document.querySelector("#menu-btn i").classList.remove("fa-sort-down");
    document.querySelector("#menu-btn i").classList.add("fa-sort-up");
    hiddenResponsiveMenu.style.display = "block";
  } else {
    document.querySelector("#menu-btn i").classList.remove("fa-sort-up");
    document.querySelector("#menu-btn i").classList.add("fa-sort-down");
    hiddenResponsiveMenu.style.display = "none";
  }
});

hiddenCloseButton.addEventListener("click", function () {
  document.querySelector("#menu-btn i").classList.remove("fa-sort-up");
  document.querySelector("#menu-btn i").classList.add("fa-sort-down");
  hiddenResponsiveMenu.style.display = "none";
});

links.forEach((link) => {
  link.addEventListener("click", function () {
    resetLinks();
    link.classList.add("active");
  });
});

function resetLinks() {
  links.forEach((link) => {
    link.classList.remove("active");
  });
}
