document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const cards = document.querySelectorAll(".card");
  const totalSlides = cards.length;
  const sliderCounter = document.querySelectorAll("#sliderCounter");
  const visibleSlides = 5;
  const slideWidth = cards[0].offsetWidth + 20;
  let currentIndex = 0;

  const clonedCards = Array.from(cards).map((card) => card.cloneNode(true));
  clonedCards.forEach((clone) => slider.appendChild(clone));

  slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;

  function updateSlider() {
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    updateCounter();
  }

  function nextSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides + visibleSlides) {
      currentIndex = totalSlides;
      slider.style.transition = "none";
      updateSlider();
      setTimeout(() => {
        slider.addEventListener("transitionend", transitionEndHandler);
      }, 0);
    } else {
      updateSlider();
    }
  }

  function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalSlides - 1;
      slider.style.transition = "none";
      updateSlider();
      setTimeout(() => {
        slider.addEventListener("transitionend", transitionEndHandler);
      }, 0);
    } else {
      updateSlider();
    }
  }

  function transitionEndHandler() {
    slider.removeEventListener("transitionend", transitionEndHandler);
    slider.style.transition = "transform 0.5s ease-in-out";
  }

  function updateCounter() {
    const displayedIndex = (currentIndex % totalSlides) + 1;
    sliderCounter[0].textContent = `${displayedIndex}/${totalSlides}`;
    sliderCounter[1].textContent = `${displayedIndex}/${totalSlides}`;
  }

  document
    .querySelector(".participant__next-btn")
    .addEventListener("click", nextSlide);
  document
    .querySelector(".participant__prev-btn")
    .addEventListener("click", prevSlide);

  setInterval(nextSlide, 4000);

  const slider2 = document.querySelector(".slider-one");
  const cards2 = document.querySelectorAll(".slider-one .slider__card");
  const totalSlides2 = cards2.length;
  const slideWidth2 = cards2[0].offsetWidth + 20;
  let currentIndex2 = 0;
  const indicators = document.querySelectorAll(".indicator");

  function updateIndicators() {
    indicators.forEach((indicator, index) => {
      if (index === currentIndex2) {
        indicator.style.backgroundColor = "#313131";
      } else {
        indicator.style.backgroundColor = "#D9D9D9";
      }
    });
  }

  function updateSlider2() {
    slider2.style.transform = `translateX(${-currentIndex2 * slideWidth2}px)`;
    updateIndicators();
  }
  function nextSlide2() {
    currentIndex2++;
    if (currentIndex2 < totalSlides2) {
      updateSlider2();
    } else {
      currentIndex2 = totalSlides2 - 1;
      updateSlider2();
    }
  }

  function prevSlide2() {
    currentIndex2--;
    if (currentIndex2 >= 0) {
      updateSlider2();
    } else {
      currentIndex2 = 0;
      updateSlider2();
    }
  }

  document
    .querySelector(".steps-btn-right")
    .addEventListener("click", nextSlide2);
  document
    .querySelector(".steps-btn-left")
    .addEventListener("click", prevSlide2);

    updateIndicators();
});
