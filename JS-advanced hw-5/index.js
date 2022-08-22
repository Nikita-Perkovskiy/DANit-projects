const API1 = "https://ajax.test-danit.com/api/json/users";
const API2 = "https://ajax.test-danit.com/api/json/posts";

async function createrCards(api_1, api_2) {
  let temp1;
  const fetchResult1 = fetch(api_1);
  await fetchResult1.then((res) => res.json()).then((data) => (temp1 = data));

  let temp2;
  const fetchResult2 = fetch(api_2);
  await fetchResult2.then((res) => res.json()).then((data) => (temp2 = data));

  temp2.forEach((el) => {
    class CardContent {
      constructor(title, body, id, postId) {
        this.title = title;
        this.body = body;
        this.id = id;
        this.postId = postId;
      }

      htmlBuild() {
        document.body.insertAdjacentHTML(
          "afterbegin",
          `<div  class="card-wrapper">
          <button id="${this.postId}" class="button" href="#">DELETE</button>
          <div id="${this.id}" class="card-information">
          </div> 
          <p class= "card-title">Title: ${this.title}</p>
          <p class= "card-title">Content: ${this.body}</p>
          </div>`
        );
      }
    }

    class Card {
      constructor(username, name, email) {
        this.name = name;
        this.email = email;
        this.username = username;
      }

      htmlBuild() {
        place.insertAdjacentHTML(
          "afterbegin",
          `<p class= "card-header"> @_${this.username}</p>
          <p class= "card-header"> Name: ${this.name}</p>
          <p class= "card-header"> Email: ${this.email}</p>`
        );
      }
    }

    let elId = el.userId;
    let Content = new CardContent(el.title, el.body, el.userId, el.id);
    Content.htmlBuild();

    let correctTemp1 = temp1.find((el) => el.id === elId);
    let place = document.getElementById(`${elId}`);
    let cardHeader = new Card(
      correctTemp1.username,
      correctTemp1.name,
      correctTemp1.email
    );
    cardHeader.htmlBuild();
  });
}

async function deleadButton() {
  await createrCards(API1, API2);

  const buttons = document.querySelectorAll(".button");
  const buttonArray = [...buttons];
  await buttonArray.forEach((el) => {
    el.addEventListener("click", () => {
      postId = el.id;
      fetch(`https://ajax.test-danit.com/api/json/posts/${postId}`, {
        method: "DELETE",
      }).then((response) => console.log(response));

      let closestDiv = el.closest("div");
      closestDiv.style.display = "none";
    });
  });
}

deleadButton();

/*
select.addEventListener("change", (e) => {
  const formItems = document.querySelector(".aded-form_items");
  if (e.target.value === "cardiologist") {
    formItems.innerText = "";
    formItems.insertAdjacentHTML(
      "beforeEnd",
      `<div class="form-floating">
    <input
      type="text"
      class="form-control rounded-3"
      placeholder="Звичайний тиск
      "
      required
    />
  </div>
  <div class="form-floating">
  <input
    type="text"
    class="form-control rounded-3"
    placeholder="Індекс маси тіла"
    required
  />
</div>
<div class="form-floating">
<input
  type="text"
  class="form-control rounded-3"
  placeholder="Перенесені захворювання серцево-судинної системи"
  required
/>
</div>
<div class="form-floating">
<input
  type="text"
  class="form-control rounded-3"
  placeholder="Вік"
  required
/>
</div>`
    );
  }
  if (e.target.value === "dentist") {
    formItems.innerText = "";
    formItems.insertAdjacentHTML(
      "beforeEnd",
      `<div class="form-floating">
    <input
      type="text"
      class="form-control rounded-3"
      placeholder="Дата останнього відвідування
      "
      required
    />
  </div>`
    );
  }
  if (e.target.value === "therapist") {
    formItems.innerText = "";
    formItems.insertAdjacentHTML(
      "beforeEnd",
      `<div class="form-floating">
    <input
      type="text"
      class="form-control rounded-3"
      placeholder="Вік"
      required
    />
  </div>`
    );
  }
  if (e.target.value === "") {
    formItems.innerText = "";
  }
  console.log(e.target.value);
});
*/
