const body = document.querySelector("body");

const IMG_NUMBER = 3;

function handleImgLoad() {
  console.log("finished loading");
}

function paingImage(imgNumber) {
  console.log(imgNumber);
  const image = new Image();
  image.src = `./scrap_images/images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);

  image.addEventListener("loadend", handleImgLoad);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paingImage(randomNumber);
}

init();
