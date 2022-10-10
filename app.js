import getRandomNickName from "./nicknames.js";

const generateNickNameButton = document.querySelector(".nickname__button");
const nickNameTextArea = document.querySelector(".nickname__text");

const displayRandomlyGeneratedNickName = () => {
  nickNameTextArea.textContent = getRandomNickName();
};

generateNickNameButton.addEventListener(
  "click",
  displayRandomlyGeneratedNickName
);
