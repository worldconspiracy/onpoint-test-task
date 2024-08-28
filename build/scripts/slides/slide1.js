const containerSlide1 = document.getElementById("contentSlide1");

// Текстовый контент
const textSlide1 = "Привет, это не коммерческое задание";
const upperCaseTextSlide1 = textSlide1.toUpperCase();
const wordsSlide1 = upperCaseTextSlide1.split(" ");

// Сборка кнопки
const btnPart1Url = "images/slide1/btnPartPink.png";
const btnPart2Url = "images/slide1/btnPartBlack.png";
const btnPartSymbolArrow = "images/slide1/btnSymbolArrow.png";
const textBtnSlide1 = "Что дальше?";
const readyBtnSlide1 = `
  <span class="button-container" id="nextSlideBtn">
    <img src="${btnPart1Url}" alt="Pink Background">
    <img src="${btnPart2Url}" alt="Black Overlay">
    <img src="${btnPartSymbolArrow}" alt="Arrow Symbol">
    <span class="text-btn-slide1">${textBtnSlide1}</span>
  </span>
`;

// Сборка блока
const htmlContentSlide1 = `
  <p class="text-slide1">
    <span class="say-hello">${wordsSlide1[0]}</span><br>
    ${wordsSlide1[1]} <span class="bold-text-slide1">${wordsSlide1[2]}</span><br>
    <span class="last-line">
      ${wordsSlide1[3]} <br>${wordsSlide1[4]}${readyBtnSlide1}
    </span>
  </p>
`;

containerSlide1.innerHTML = htmlContentSlide1;

// Обработчик для кнопки - переход на следующий слайд (из script.js)
const nextSlideBtn = document.getElementById("nextSlideBtn");
if (nextSlideBtn) {
  nextSlideBtn.addEventListener("click", nextSlide);
}
