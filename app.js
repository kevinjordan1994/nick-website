import getRandomNickName from "./nicknames.js";
import ImageCarousel from "./ImageCarousel.js";
import { generateMadLibOne } from "./MadLib.js";

//NICKNAME
const generateNickNameButton = document.querySelector(".nickname__button");
const nickNameTextArea = document.querySelector(".nickname__text");

const displayRandomlyGeneratedNickName = () => {
  nickNameTextArea.textContent = getRandomNickName();
};

generateNickNameButton.addEventListener(
  "click",
  displayRandomlyGeneratedNickName
);

//FAV PICS
let carouselIsActive = true;
const carouselTimer = 3000;

const favImages = document.querySelectorAll(".fav-pics__img");
const carousel = new ImageCarousel(favImages);

function activateCarousel() {
  carousel.changeImage();
  let counter = setTimeout(() => {
    activateCarousel();
    clearTimeout(counter);
  }, carouselTimer);
}

activateCarousel();

// MADLIBS
const submitButton = document.querySelector(".madlibs__submit-button");
const madlibInputs = document.querySelectorAll(".madlibs__input");
const form = document.querySelector(".form");
const result = document.querySelector(".result");
const madlibsText = document.querySelector(".madlibs__text");
const resetButton = document.querySelector(".madlibs__reset-button");

const toggleForm = () => {
  const elementsThatNeedToBeToggled = [form, result];
  elementsThatNeedToBeToggled.forEach((element) =>
    element.classList.toggle("off")
  );
};

const convertInputElementsToArray = () => {
  const array = [];
  madlibInputs.forEach((input) => array.push(input.value));
  return array;
};

const clearFormInputs = () => {
  madlibInputs.forEach((input) => (input.value = ""));
};

form.addEventListener("change", () => {
  const inputsArray = convertInputElementsToArray();
  submitButton.disabled = inputsArray.some((input) => input.trim() === "");
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const madlibAnswers = convertInputElementsToArray();
  madlibsText.innerHTML = generateMadLibOne(madlibAnswers);
  toggleForm();
});

resetButton.addEventListener("click", (e) => {
  e.preventDefault();
  clearFormInputs();
  toggleForm();
});
