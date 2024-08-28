// Инициализация
const container = document.getElementById("container");
const slides = document.getElementById("allSlides");
let startX, startY;
let currentIndex = 0;
let startTranslateX;
let isDragging = false;
const totalSlides = document.querySelectorAll(".slide").length;

// Обработчик для начала свайпа
container.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
  startTranslateX = parseFloat(
    getComputedStyle(slides).transform.split(",")[4] || 0
  );
  isDragging = true;
});

// Обработчик для перемещения свайпа
container.addEventListener("touchmove", (e) => {
  if (!isDragging) return;

  const currentX = e.touches[0].clientX;
  const deltaX = currentX - startX;

  if (Math.abs(deltaX) > Math.abs(e.touches[0].clientY - startY)) {
    slides.style.transform = `translateX(${Math.max(
      Math.min(startTranslateX + deltaX, 0),
      -((totalSlides - 1) * 100)
    )}vw)`;
  }
});

// Обработчик для завершения свайпа
container.addEventListener("touchend", (e) => {
  if (!isDragging) return;

  const endX = e.changedTouches[0].clientX;
  const deltaX = endX - startX;

  // Определение направления свайпа
  if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(e.changedTouches[0].clientY - startY)) {
    if (deltaX < 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  } else {
    updateSlidePosition();
  }

  isDragging = false;
});

// Функция для перехода на следующий слайд
function nextSlide() {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    updateSlidePosition();

    // Запуск анимации для второго слайда
    if (currentIndex === 1) {
      triggerSlide2Animation();
    }
  }
}

// Функция для перехода на предыдущий слайд
function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlidePosition();
  }
}

// Функция для перехода на первый слайд по нажатию на иконку home
function goToFirstSlide() {
  currentIndex = 0;
  updateSlidePosition();
}

// Функция для обновления позиции слайдов
function updateSlidePosition() {
  const offset = -currentIndex * 100; // Процентное смещение
  slides.style.transform = `translateX(${offset}vw)`;
}
