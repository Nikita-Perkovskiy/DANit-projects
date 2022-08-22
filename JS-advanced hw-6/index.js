API = "https://api.ipify.org/?format=json";

class UserMessage {
  constructor(continent, country, region, city, district) {
    this.continent = continent;
    this.country = country;
    this.region = region;
    this.city = city;
    this.district = district;
  }

  htmlBuild() {
    button.insertAdjacentHTML(
      "afterend",
      `<div class="div">
      <p>CONTINENT: ${this.continent}</p>
      <p>COUNTRY: ${this.country}</p>
      <p>REGION: ${this.region}</p>
      <p>CITY: ${this.city}</p>
      <p>DISTRICT: ${this.district}</p>
      </div>`
    );
  }
}

const button = document.querySelector(".button-active");
button.addEventListener("click", async () => {
  const fetchResult = fetch(API);
  let ip = await fetchResult.then((res) => res.json()).then((data) => data.ip);

  let API2 = `http://ip-api.com/json/${ip}?fields=status,message,continent,country,region,regionName,city,district,query`;

  const fetchResult2 = fetch(API2);
  let contentData = await fetchResult2
    .then((res) => res.json())
    .then((data) => data);

  let message = new UserMessage(
    contentData.continent,
    contentData.country,
    contentData.regionName,
    contentData.city,
    contentData.district
  );
  message.htmlBuild();
});
