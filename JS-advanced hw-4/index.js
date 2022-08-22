/*
Это технология позволяющая получать информацию с сервера. 
*/

// Practice
const API = "https://ajax.test-danit.com/api/swapi/films";

fetch(API)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      const characters = post.characters.map((el) => fetch(el));

      Promise.all(characters)
        .then((results) => Promise.all(results.map((r) => r.json())))
        .then((data) => {
          const heroesNames = data.map((el) => el.name);
          document.body.insertAdjacentHTML(
            "afterbegin",
            `
          <div>
          <p>${post.episodeId}<p>
          <p>${post.name}<p>
          <p>${heroesNames}<p>
          <p>${post.openingCrawl}<p>
          </div>`
          );
        });
    });
  });
