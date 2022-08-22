function ourServicesAnimation() {
  const ourServicesNav = document.querySelectorAll(".our-service-nav");
  const ourServicesContent = document.querySelectorAll(".our-service-content");
  let elementDataName;
  ourServicesNav.forEach((e) => {
    e.addEventListener("click", elementAnimation);
  });
  function elementAnimation() {
    ourServicesNav.forEach((e) => {
      e.classList.remove("h-active"), e.classList.add("h-nonactive");
    });
    this.classList.add("h-active");
    elementDataName = this.getAttribute("data-name");
    console.log(elementDataName);
    function contentAnimation() {
      ourServicesContent.forEach((e) => {
        if (e.dataset.content == elementDataName) {
          e.classList.add("contant-active"),
            e.classList.remove("contant-nonactive");
        } else {
          e.classList.add("contant-nonactive");
        }
      });
    }
    contentAnimation();
  }
}
ourServicesAnimation();

const imagesArray = [...document.querySelectorAll(".image-wrapper")];
const imagesButtonArray = imagesArray.slice(12);
const imageButton = document.getElementById("images-button");
imagesButtonArray.forEach((e) => {
  e.style.display = "none";
});
imageButton.addEventListener("click", () => {
  imagesButtonArray.forEach((e) => {
    e.style.display = "block";
  });
  imageButton.style.display = "none";
});

const imagesNav = [...document.querySelectorAll(".amazing-work-title")];
let imagesDataName;
imagesNav.forEach((e) => {
  e.addEventListener("click", imagesSelect);
});
function imagesSelect() {
  imagesNav.forEach((e) => {
    e;
  });
  imagesDataName = this.getAttribute("data-name");
  function imagesContantAnimation() {
    imagesArray.forEach((e) => {
      if (imagesDataName == e.dataset.content) {
        e.style.opacity = "1";
      } else {
        e.style.opacity = "0";
      }
    });
  }
  imagesContantAnimation();
}
const imagesAll = document.getElementById("All");
imagesAll.addEventListener("click", allAnimation);
function allAnimation() {
  imagesArray.forEach((e) => {
    e.style.opacity = "1";
  });
}

const sliderNames = [...document.querySelectorAll(".slider-menu-image")];
const sliderContent = [...document.querySelectorAll(".slide-container ")];
let sliderDataName;
sliderNames.forEach((e) => {
  e.addEventListener("click", sliderNamesAnimation);
});
function sliderNamesAnimation() {
  sliderNames.forEach((e) => {
    e.classList.remove("slider-image-active"),
      this.classList.add("slider-image-active");
  });
  sliderDataName = this.getAttribute("data-name");
  sliderContent.forEach((e) => {
    if (sliderDataName == e.dataset.content) {
      e.classList.remove("slide-container-non-active");
    } else {
      e.classList.add("slide-container-non-active");
    }
  });
}

const sliderButtonL = document.querySelector(".slider-button-left");
const sliderButtonR = document.querySelector(".slider-button-right");
sliderButtonL.addEventListener("click", buttonLAnimationL);
let sliderImageActive;
function buttonLAnimationL() {
  sliderImageActive = document.querySelector(".slider-image-active");
  if (Boolean(sliderImageActive.previousElementSibling) == true) {
    sliderImageActive.classList.remove("slider-image-active");
    sliderImageActive.previousElementSibling.classList.add(
      "slider-image-active"
    );
    sliderDataName =
      sliderImageActive.previousElementSibling.getAttribute("data-name");
    sliderContent.forEach((e) => {
      if (sliderDataName == e.dataset.content) {
        e.classList.remove("slide-container-non-active");
      } else {
        e.classList.add("slide-container-non-active");
      }
    });
  } else {
    sliderImageActive.classList.add("slider-image-active");
    sliderDataName = sliderImageActive.getAttribute("data-name");
    sliderContent.forEach((e) => {
      if (sliderDataName == e.dataset.content) {
        e.classList.remove("slide-container-non-active");
      } else {
        e.classList.add("slide-container-non-active");
      }
    });
  }
}

sliderButtonR.addEventListener("click", buttonLAnimationR);
function buttonLAnimationR() {
  sliderImageActive = document.querySelector(".slider-image-active");
  if (Boolean(sliderImageActive.nextElementSibling) == true) {
    sliderImageActive.classList.remove("slider-image-active");
    sliderImageActive.nextElementSibling.classList.add("slider-image-active");
    sliderDataName =
      sliderImageActive.nextElementSibling.getAttribute("data-name");
    sliderContent.forEach((e) => {
      if (sliderDataName == e.dataset.content) {
        e.classList.remove("slide-container-non-active");
      } else {
        e.classList.add("slide-container-non-active");
      }
    });
  } else {
    sliderImageActive.classList.add("slider-image-active");
    sliderDataName = sliderImageActive.getAttribute("data-name");
    sliderContent.forEach((e) => {
      if (sliderDataName == e.dataset.content) {
        e.classList.remove("slide-container-non-active");
      } else {
        e.classList.add("slide-container-non-active");
      }
    });
  }
}
