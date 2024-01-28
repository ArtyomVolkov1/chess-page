document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const cards = document.querySelectorAll(".card");
  const totalSlides = cards.length;
  const sliderCounter = document.getElementById("sliderCounter");
  const visibleSlides = 4;
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
    sliderCounter.textContent = `${displayedIndex}/${totalSlides}`;
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

  function updateSlider2() {
    slider2.style.transform = `translateX(${-currentIndex2 * slideWidth2}px)`;
  }

  function nextSlide2() {
    currentIndex2++;
    if (currentIndex2 < totalSlides2) {
      updateSlider2();
    } else {
      currentIndex2 = totalSlides2 - 1;
    }
  }

  function prevSlide2() {
    currentIndex2--;
    if (currentIndex2 >= 0) {
      updateSlider2();
    } else {
      currentIndex2 = 0;
    }
  }

  document
    .querySelector(".steps-btn-right")
    .addEventListener("click", nextSlide2);
  document
    .querySelector(".steps-btn-left")
    .addEventListener("click", prevSlide2);
});
