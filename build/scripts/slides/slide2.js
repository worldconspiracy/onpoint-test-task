const containerSlide2 = document.getElementById("contentSlide2");

// Текстовый контент
const titleSlide2 = `Текст сообщения`;
const upperCaseTitleSlide2 = titleSlide2.toUpperCase();
const splitWordsSlide2 = upperCaseTitleSlide2.split(" ");
const textSlide2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Nulla pharetra diam sit amet nisl. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Est sit amet facilisis magna. Neque laoreet suspendisse interdum consectetur libero id. Nec ullamcorper sit amet risus nullam eget felis eget. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Euismod quis viverra nibh cras pulvinar mattis nunc. Massa massa ultricies mi quis. Sit amet massa vitae tortor condimentum lacinia. Et malesuada fames ac turpis egestas integer eget. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Amet justo donec enim diam vulputate ut pharetra sit. Risus ultricies tristique nulla aliquet enim tortor at auctor. Velit sed ullamcorper morbi tincidunt ornare massa. Quis hendrerit dolor magna eget est lorem ipsum. Etiam dignissim diam quis enim. Gravida neque convallis a cras. Ut enim blandit volutpat maecenas volutpat. Mauris sit amet massa vitae tortor condimentum lacinia quis vel.`;

// Сборка блока
const htmlContentSlide2 = `
  <div class="container-slide2">
    <p class="title-slide2">${splitWordsSlide2[0]}<br>${splitWordsSlide2[1]}</p>
    <div class="text-plus-scroll">
      <div class="scroll-container">
        <div class="scroll-track"></div>
        <img src="images/slide2/scrollBtn.png" class="scroll-handle" />
      </div>
      <div class="text-slide2">${textSlide2}</div>
    </div>
  </div>
`;

containerSlide2.innerHTML = htmlContentSlide2;

// Инициализация переменных для прокрутки
const track = document.querySelector(".scroll-track");
const handle = document.querySelector(".scroll-handle");
const textContainer = document.querySelector(".text-slide2");

// Установка высоты ползунка
const handleHeight = 50;
handle.style.height = `${handleHeight}px`;

// Функции для управления прокруткой
function startDragging(e) {
  e.preventDefault();
  isDraggingScroll = true;
  positionY = e.type === "touchstart" ? e.touches[0].clientY : e.clientY;
  handleStartY = parseFloat(getComputedStyle(handle).top);
  textStartScrollTop = textContainer.scrollTop;
}

function onDragging(e) {
  if (!isDraggingScroll) return;

  const clientY = e.type === "touchmove" ? e.touches[0].clientY : e.clientY;
  const deltaY = clientY - positionY;

  // Ограничиваем движение ползунка по треку
  let newHandleTop = Math.max(
    0,
    Math.min(track.offsetHeight - handleHeight, handleStartY + deltaY)
  );
  handle.style.top = `${newHandleTop}px`;

  // Пропорция перемещения текста в зависимости от позиции ползунка
  const scrollRatio = newHandleTop / (track.offsetHeight - handleHeight);
  const newTextScrollTop = scrollRatio * (textContainer.scrollHeight - textContainer.offsetHeight);

  textContainer.scrollTop = newTextScrollTop; // Прокрутка текста
}

function stopDragging() {
  isDraggingScroll = false;
}

// Обработчики событий
let isDraggingScroll = false;
let positionY;
let handleStartY;
let textStartScrollTop;

handle.addEventListener("mousedown", startDragging);
document.addEventListener("mousemove", onDragging);
document.addEventListener("mouseup", stopDragging);

handle.addEventListener("touchstart", startDragging);
document.addEventListener("touchmove", onDragging);
document.addEventListener("touchend", stopDragging);
