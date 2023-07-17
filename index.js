// Знаходимо елементи за класом
const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");

// Початковий індекс зоображення
let currentImgX = 0;

// Обробнкини подій при кліку на кнопки
prevBtn.addEventListener("click", () => changeSlide(-1));
nextBtn.addEventListener("click", () => changeSlide(1));

// Функція яка викликається при кліку для зміни зоображення
// Збільшуєм або зменшуєм індекс поточного зображення на основі аргументу changeImg
function changeSlide(changeImg) {
  if (changeImg > 0) {
    currentImgX = currentImgX + 1;
  } else if (changeImg < 0) {
    currentImgX = currentImgX - 1;
  }
  // Змінюємо положення слайдера за допомогою translateX
  slider.style.transform = `translateX(-${currentImgX * 100}%)`;
  // Приховуєм або показуєм кнопки навігації
  prevBtn.style.display = currentImgX === 0 ? "none" : "block";
  nextBtn.style.display =
    currentImgX === slider.children.length - 1 ? "none" : "block";
}

// Приховуєм кнопку "prevBtn" з початку
prevBtn.style.display = "none";
