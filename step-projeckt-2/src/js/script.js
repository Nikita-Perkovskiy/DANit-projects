const burgerA = document.querySelector(".header-nav__burger-a");
const burgerB = document.querySelector(".header-nav__burger-b");
const burgerMenu = document.querySelector(".burger-menu");
const headerContent = document.querySelector(".header-content");

burgerA.addEventListener("click", burgerActivation);

function burgerActivation() {
  (burgerB.style.display = "block"),
    (burgerA.style.display = "none"),
    (burgerMenu.style.display = "grid"),
    (headerContent.style.display = "none");
}

burgerB.addEventListener("click", burgerDizactivation);

function burgerDizactivation() {
  (burgerB.style.display = "none"),
    (burgerA.style.display = "block"),
    (burgerMenu.style.display = "none"),
    (headerContent.style.display = "block");
}

document.onclick = function (e) {
  if (
    e.target.className != "burger-menu" &&
    e.target.className != "header-nav__burger-b" &&
    e.target.className != "header-nav__burger-a"
  ) {
    burgerDizactivation();
  }
};
