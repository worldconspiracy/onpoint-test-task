const containerSlide3 = document.getElementById("contentSlide3");

// Контент ()скрытый блок)
const items = [
  { number: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscif elit" },
  { number: 2, text: "Faucibus pulvinar elementum integer enim" },
  { number: 3, text: "Faucibus pulvinar elementum integer enim" },
  { number: 4, text: "Mi bibendum neque egestas congue quisque egestas diam" },
  { number: 5, text: "Venenatis lectus magna fringilla urna" },
  { number: 6, text: "Venenatis lectus magna fringilla urna" },
];

// Параметры пагинации (скрытый блок)
const itemsPerPage = 3;
let currentPage = 1;
const totalPages = Math.ceil(items.length / itemsPerPage);

// Текстовый контент
const titleSlide3 = `КЛЮЧЕВОЕ СООБЩЕНИЕ`;
const title2Slide3 = `ПРЕИМУЩЕСТВА`;
const originalTitle1Slide3 = titleSlide3;
const textSlide3 = `BRENDXY`;
const lettersTextSlide3 = textSlide3.split("");
const textLeftBlockSlide3 = `Ehicula ipsum a arcu curcus vitae. Eu non diam phasellus vestibulum lorem sed risus ultricies`;
const textRightBlockSlide3 = `A arcu curcus vitae`;

// Изображения
const closeBtnImageUrl = "images/slide3/hiddenBlock/close.png";
const nextPageUrl = "images/slide3/hiddenBlock/nextPage.png";
const prevPageUrl = "images/slide3/hiddenBlock/prevPage.png";
const noActivePageUrl = "images/slide3/hiddenBlock/noFocus.png";
const activePageUrl = "images/slide3/hiddenBlock/active.png";

// Сборка кнопки (подробнее)
const textBtnSlide3 = "Подробнее";
const btnPart1Url2 = "images/slide3/btnPartPink.png";
const btnPart2Url2 = "images/slide3/btnPartBlack.png";
const btnPartSymbolPlus = "images/slide3/btnSymbolPlus.png";
const readyBtnSlide3 = `
  <span class="button-container2" id="btnSlide3">
    <img src="${btnPart1Url2}" alt="Pink Background">
    <img src="${btnPart2Url2}" alt="Black Overlay">
    <img src="${btnPartSymbolPlus}" alt="Plus Symbol">
    <span class="text-btn-slide3">${textBtnSlide3}</span>
  </span>
`;

// Сборка блока контента внутри всплывающего блока
function showPage(pageNumber) {
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, items.length);

  const itemsHTML = items.slice(startIndex, endIndex).map(item => `
    <div class="item">
      <div class="numbers">${item.number.toString().padStart(2, "0")}</div>
      <div class="textHiddenBlock">${item.text}</div>
    </div>
  `).join("");

  document.querySelector(".all-items-container").innerHTML = itemsHTML;

  // Обновление точек пагинации
  document.querySelectorAll(".status-dots").forEach((dot, index) => {
    dot.src = index === pageNumber - 1 ? activePageUrl : noActivePageUrl;
  });
}

// Сборка основного блока
const htmlContentSlide3 = `
  <div id="overlay" class="hidden"></div>
  <div class="container-slide3">
    <div id="hiddenBlock" class="hidden">
      <div id="closeButton">
        <img src="${closeBtnImageUrl}" alt="Close">
      </div>
      <div class="all-items-container"></div>
      <div class="pagination-buttons">
        <img src="${prevPageUrl}" class="arrows" id="prevPage" disabled>
        ${Array.from({ length: totalPages }, (_, i) => `
          <img src="${noActivePageUrl}" class="status-dots">
        `).join("")}
        <img src="${nextPageUrl}" class="arrows" id="nextPage">
      </div>
    </div>
    <div class="title-slide3">
      <span class="title1-slide3">${titleSlide3}</span>
      <span class="text1-slide3">
        ${lettersTextSlide3.slice(0, 5).join("")}
        <b>${lettersTextSlide3.slice(5).join("")}</b>
      </span>
    </div>
    <div class="content-box">
      <div class="left-block-slide3">
        <img class="icon1-slide3" src="images/slide3/icon1.png" alt="Icon 1">
        <p class="text-left-block-slide3">${textLeftBlockSlide3}</p>
      </div>
      <div class="right-side">
        <div class="right-block-slide3">
          <img class="icon2-slide3" src="images/slide3/icon2.png" alt="Icon 2">
          <p class="text-right-block-slide3">${textRightBlockSlide3}</p>
        </div>
        <div class="button-slide3">${readyBtnSlide3}</div>
      </div>
    </div>
  </div>
`;

containerSlide3.innerHTML = htmlContentSlide3;

showPage(currentPage);

// Логика переключения страниц
function updatePaginationButtons() {
  document.getElementById("prevPage").disabled = currentPage === 1;
  document.getElementById("nextPage").disabled = currentPage === totalPages;
}

document.getElementById("prevPage").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
    updatePaginationButtons();
  }
});

document.getElementById("nextPage").addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
    updatePaginationButtons();
  }
});

// Функция для показа скрытого блока
function showBlock() {
  document.getElementById("hiddenBlock").classList.remove("hidden");
  document.getElementById("overlay").classList.remove("hidden");
  document.querySelector(".title1-slide3").textContent = title2Slide3;
}

// Функция для скрыти скрытого блока
function hideBlock() {
  document.getElementById("hiddenBlock").classList.add("hidden");
  document.getElementById("overlay").classList.add("hidden");
  document.querySelector(".title1-slide3").textContent = originalTitle1Slide3;
}

// Обработчики событий для кнопок
document.getElementById("btnSlide3").addEventListener("click", showBlock);
document.getElementById("overlay").addEventListener("click", hideBlock);
document.getElementById("closeButton").addEventListener("click", hideBlock);
