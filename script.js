document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  let counter = 0;

  // Initial display
  updateSlider();

  function updateSlider() {
    slides.forEach((slide, index) => {
      slide.style.transform = 'translateX(' + ((index - counter) * 100) + '%)';
    });
  }

  function changeSlide(direction) {
    counter += direction;
    if (counter < 0) {
      counter = slides.length - 1;
    } else if (counter >= slides.length) {
      counter = 0;
    }
    updateSlider();
  }

  document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
  document.querySelector('.next').addEventListener('click', () => changeSlide(1));
});

