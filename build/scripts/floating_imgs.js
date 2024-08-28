// Инициализация
const containerAnimateImgsSlide1 = document.getElementById("imagesContainer");

const images = [
  { src: "images/slide1/1-1.png", class: "slide1-img1" },
  { src: "images/slide1/1-2.png", class: "slide1-img2" },
  { src: "images/slide1/1-3.png", class: "slide1-img3" },
  { src: "images/slide1/1-4.png", class: "slide1-img4" },
  { src: "images/slide1/1-5.png", class: "slide1-img5" },
  { src: "images/slide1/1-6.png", class: "slide1-img6" },
  { src: "images/slide1/1-7.png", class: "slide1-img7" },
  { src: "images/slide1/1-8.png", class: "slide1-img8" },
  { src: "images/slide1/1-9.png", class: "slide1-img9" },
  { src: "images/slide2/2-1.png", class: "slide2-img1" },
  { src: "images/slide2/2-2.png", class: "slide2-img2" },
  { src: "images/slide2/2-3.png", class: "slide2-img3" },
  { src: "images/slide2/2-4.png", class: "slide2-img4" },
  { src: "images/slide2/2-5.png", class: "slide2-img5" },
  { src: "images/slide3/buble1.png", class: "buble1" },
  { src: "images/slide3/buble2.png", class: "buble2" },
  { src: "images/slide3/buble3.png", class: "buble3" },
  { src: "images/slide3/buble4.png", class: "buble4" },
  { src: "images/slide3/buble5.png", class: "buble5" },
  { src: "images/slide3/buble6.png", class: "buble6" },
  { src: "images/slide3/buble7.png", class: "buble7" },
  { src: "images/slide3/buble8.png", class: "buble8" },
  { src: "images/slide3/bottle.png", class: "bottle" },
];

// Функция для создания изображения и добавления его в контейнер
function createImageElement(src, className) {
  const imgElement = document.createElement("img");
  imgElement.src = src;
  imgElement.classList.add("flying-imgs", className);
  return imgElement;
}

// Генерация всех изображений и добавление их в контейнер
function initializeImages() {
  images.forEach(image => {
    const imgElement = createImageElement(image.src, image.class);
    containerAnimateImgsSlide1.appendChild(imgElement);
  });
}

// Анимация кружения
function circularMovement(image, radius, duration = 35000) {
  let start = null;

  function animate(time) {
    if (!start) start = time;
    const progress = (time - start) / duration;
    const angle = progress * 2 * Math.PI;

    const translateX = radius * Math.cos(angle);
    const translateY = radius * Math.sin(angle);

    image.style.transform = `translate(${translateX}px, ${translateY}px)`;

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      start = null;
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}
// Анимация увеличение и движение
function growAndMove(image, duration = 7000) {
  let start = null;

  function animate(time) {
    if (!start) start = time;
    const progress = (time - start) / duration;

    const scale = 1 + 0.05 * Math.sin(progress * 2 * Math.PI);
    const translateX = -20 * Math.sin(progress * 2 * Math.PI);
    const translateY = -10 * Math.sin(progress * 2 * Math.PI);

    image.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      start = null;
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

// Запуск анимаций
function startAnimations() {
  const imagesToAnimate = {
    "slide1-img2": { radius: 70, duration: 35000 },
    "slide1-img5": { radius: 30, duration: 15000 },
    "slide1-img6": { radius: 30, duration: 23000 },
    "slide1-img9": { radius: 20, duration: 7000, type: "growAndMove" },
    "buble1": { radius: 70, duration: 35000 },
    "buble2": { radius: 30, duration: 15000 },
    "buble3": { radius: 30, duration: 23000 },
    "buble4": { radius: 70, duration: 35000 },
    "buble5": { radius: 30, duration: 15000 },
    "buble6": { radius: 20, duration: 7000, type: "growAndMove" },
    "buble7": { radius: 30, duration: 23000 },
    "buble8": { radius: 70, duration: 35000 }
  };

  Object.entries(imagesToAnimate).forEach(([className, { radius, duration, type }]) => {
    const image = document.querySelector(`.${className}`);
    if (type === "growAndMove") {
      growAndMove(image, duration);
    } else {
      circularMovement(image, radius, duration);
    }
  });
}

// Запуск
initializeImages();
startAnimations();

// анимация второй слайд
function triggerSlide2Animation() {
  const imagesToAnimate = document.querySelectorAll(
    ".slide2-img1, .slide2-img2, .slide2-img3, .slide2-img4, .slide2-img5"
  );

  imagesToAnimate.forEach(image => {
    image.classList.remove("animate-slide2");
    setTimeout(() => {
      image.classList.add("animate-slide2");
    }, 10);
  });
}
