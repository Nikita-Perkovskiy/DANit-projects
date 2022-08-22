/*Теория
1. setTimeout() вызывает функцию только один раз через определенный промежуток времени, а setInterval() вызывает многократно с определенном интервалом.
2. Нет функция не сработает мнгновено так, как пройдет время пока код будет прочитан.
3. Это необходимо, чтобы обнулить ранее заданный цикл.
 */
const stop = document.getElementById("btn-stop");
const restart = document.getElementById("btn-restart");
const parentElement = document.querySelector(".images-wrapper");
const images = Array.from(parentElement.children);
let index = 0;

function arrayChange() {
  images.map((el, i) =>
    i === index ? (el.style.display = "block") : (el.style.display = "none")
  );
}
function showElement() {
  console.log("2");
  if (index < images.length - 1) {
    arrayChange();
    index = index + 1;
  } else {
    console.log("1");
    arrayChange();
    index = 0;
  }
}
showElement();
let timeInterval = setInterval(showElement, 3000);
stop.addEventListener("click", () => clearInterval(timeInterval));
restart.addEventListener(
  "click",
  () => (timeInterval = setInterval(showElement, 3000))
);
