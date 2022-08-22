const btn = document.querySelector(".btn");
const titleEl = document.querySelector(".change-1");
const backgroundEls = document.querySelector(".change");
const backgroundFooter = document.querySelector(".change-2");
let flag = 1;
btn.addEventListener("click", changeEvents);
function changeEvents() {
  if (flag == 1) {
    titleEl.style.color = "red";
    backgroundEls.style.backgroundColor = "red";
    backgroundFooter.style.backgroundColor = "red";
    localStorage.setItem("index", 1);
    flag = 2;
  } else {
    localStorage["index"] = 2;
    titleEl.style.color = "#35444F";
    backgroundEls.style.backgroundColor = "#35444F";
    backgroundFooter.style.backgroundColor = "rgba(99, 105, 110, 0.48)";
    flag = 1;
  }
}

if (localStorage.getItem("index") === "1") {
  titleEl.style.color = "red";
  backgroundEls.style.backgroundColor = "red";
  backgroundFooter.style.backgroundColor = "red";
  localStorage.setItem("index", 1);
} else if (localStorage.getItem("index") === "2") {
  titleEl.style.color = "#35444F";
  backgroundEls.style.backgroundColor = "#35444F";
  backgroundFooter.style.backgroundColor = "rgba(99, 105, 110, 0.48)";
}
