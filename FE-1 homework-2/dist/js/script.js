const headerNaviconA = document.querySelectorAll(".header-navicon-a");
const headerNaviconB = document.querySelectorAll(".header-navicon-b");
const headerNavBarActive = document.querySelectorAll(".header__nav-bar-active");

headerNaviconA[0].addEventListener("click", () => {
  headerNaviconA[0].style.display = "none";
  headerNaviconB[0].style.display = "block";
  headerNaviconB[0].style.right = "28px";
  headerNavBarActive[0].style.opacity = "1";
});

headerNaviconB[0].addEventListener("click", () => {
  headerNaviconB[0].style.display = "none";
  headerNaviconA[0].style.display = "block";
  headerNaviconB[0].style.right = "28px";
  headerNavBarActive[0].style.opacity = "0";
});
