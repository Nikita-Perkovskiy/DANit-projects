

class VisitTerapevt {
  constructor(
    name,
    age,
    pressure,
    indexMass,
    lastDate,
    doctor,
    visitDiscription,
    visitPurporse,
    heartDiseases,
    urgency,
    personid
  ) {
    this.name = name;
    this.age = age;
    this.pressure = pressure;
    this.indexMass = indexMass;
    this.lastDate = lastDate;
    this.doctor = doctor;
    this.visitDiscription = visitDiscription;
    this.visitPurporse = visitPurporse;
    this.heartDiseases = heartDiseases;
    this.urgency = urgency;
    this.personid = personid;
  }

  htmlBuildCard() {
    cardSection.insertAdjacentHTML(
      "afterbegin",
      `<div id="${this.personid}" class="cards-container">

         <div class="card" style="display: none;">
                <div class="card__close"></div>
                <div class="card-box">
                <p class="card__text">${this.name}</p>
                  <p class="card__text">${this.doctor}</p>
                  <div class="card__but-wrapper">
                    <button 
                      class="card__but-wrapper-button"
                    >
                      Узнать больше
                    </button>
                    <button class="card__but-wrapper-button-reduction">
                      Редактировать
                    </button>
                  </div>
                </div>
              </div>
             
              <div class="card--reduction" style="display: block;">
                <div class="card__close"></div>
                <div class="card-box">
                   <input type="text" size="40">
                   <p></p></input>
                  <p class="card__text">${this.doctor}</p>
                  <div class="card-special-info-wrapper">
                    <div class="card__but-wrapper--active">
                      <button
                        class="card__but-wrapper-button "
                      >
                        Вернуться
                      </button>
                      <button class="card__but-wrapper-button-reduction">
                        Редактировать
                      </button>
                    </div>
                    <div class="card-special-info">
                      <p class="card__text">${this.age}</p>
                      <p class="card__text">${this.pressure}</p>
                      <p class="card__text">${this.indexMass}</p>
                      <p class="card__text">${this.lastDate}</p>
                      <p class="card__text">${this.heartDiseases}</p>
                      <p class="card__text">${this.pressure}</p>
                      </div>
                      <p class="card__text">${this.urgency}</p>
                    </div>
                  </div>
              </div>

              <div class="card--active" style="display: none;">
                <div class="card__close"></div>
                <div class="card-box">
                  <p class="card__text">${this.name}</p>
                  <p class="card__text">${this.doctor}</p>
                  <div class="card-special-info-wrapper">
                    <div class="card__but-wrapper--active">
                      <button
                        class="card__but-wrapper-button "
                      >
                        Вернуться-a
                      </button>
                      <button class="card__but-wrapper-button-reduction">
                        Редактировать
                      </button>
                    </div>
                    <div class="card-special-info">
                      <p class="card__text">${this.age}</p>
                      <p class="card__text">${this.pressure}</p>
                      <p class="card__text">${this.indexMass}</p>
                      <p class="card__text">${this.lastDate}</p>
                      <p class="card__text">${this.heartDiseases}</p>
                      <p class="card__text">${this.pressure}</p>
                      </div>
                      <p class="card__text">${this.urgency}</p>
                    </div>
                  </div>
              </div>
            </div>      
`
    );
  }
}

let newCard = new VisitTerapevt(
  "Перковский Никита Александрович",
  "32",
  "crere",
  "54",
  "vqvq",
  "Стоматолог",
  "frwrfqw",
  "fwfwq",
  "fwfwwq",
  "fewfwqefwqeewfw fewfewwefewf",
  "45"
);
