const containerSticky = document.querySelector('.sticky-panel');

const projectTitle = "PROJECT";
const iconHomeUrl = 'images/home.png';
const iconStickUrl = 'images/stick.png';
const logoUrl = 'images/logo.png';

// Сборка блока
const htmlContentSticky = `
  <div class="sticky-top">
    <img class="home" id="returnToHomeSlide" src="${iconHomeUrl}" alt="Home Icon">
    <img class="stick" src="${iconStickUrl}" alt="Stick Icon">
    <span class="project-name">${projectTitle}</span>
  </div>
  <div class="sticky-bottom">
    <img class="logo" src="${logoUrl}" alt="Logo">
  </div>
`;

// Вставка блока в контейнер
if (containerSticky) {
  containerSticky.innerHTML = htmlContentSticky;

  // Добавление обработчика клика на иконку "домой" (из script.js)
  const homeIconBtn = document.getElementById('returnToHomeSlide');
  if (homeIconBtn) {
    homeIconBtn.addEventListener('click', () => {
      goToFirstSlide();
    });
  }
}
