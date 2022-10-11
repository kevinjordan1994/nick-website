import getRandomNickName from "./nicknames.js";
import ImageCarousel from "./ImageCarousel.js";

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
