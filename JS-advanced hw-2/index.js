/* teory 

Когда мы получаем сторонные например с сервера и проводим различные операции над ними. Когда обрабатывем данные полюзователя.

*/

//practic

const books = [
  {
    author: "Скотт Бэккер",
    name: "Тьма, что приходит прежде",
    price: 70,
  },
  {
    author: "Скотт Бэккер",
    name: "Воин-пророк",
  },
  {
    name: "Тысячекратная мысль",
    price: 70,
  },
  {
    author: "Скотт Бэккер",
    name: "Нечестивый Консульт",
    price: 70,
  },
  {
    author: "Дарья Донцова",
    name: "Детектив на диете",
    price: 40,
  },
  {
    author: "Дарья Донцова",
    name: "Дед Снегур и Морозочка",
  },
];

const divRoot = document.querySelector("#root");
divRoot.insertAdjacentHTML("beforeend", `<ul id="root-ul"></ul>`);
const ulRoot = document.querySelector("#root-ul");

function arrayCheck(array) {
  array.forEach((el) => {
    try {
      if (!el.author) {
        throw new Error(` element ${books.indexOf(el)} no autor`);
      }
      if (!el.name) {
        throw new Error(` element ${books.indexOf(el)} no name`);
      }
      if (!el.price) {
        throw new Error(` element ${books.indexOf(el)} no price`);
      }
      for (let key in el) {
        let li = document.createElement("li");
        li.textContent = `${key}: ${el[key]}`;
        ulRoot.append(li);
      }
    } catch (el) {
      console.log(el.message);
    }
  });
}

arrayCheck(books);
