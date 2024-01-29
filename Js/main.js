document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const cards = document.querySelectorAll(".card");
  const totalSlides = cards.length;
  const sliderCounter = document.querySelectorAll("#sliderCounter");
  const visibleSlides = 5;
  let slideWidth = Math.round(cards[0].getBoundingClientRect().width) + 20;
  let currentIndex = 0;
  
  slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
  
  function updateSlider() {
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translate(${ -currentIndex * slideWidth }px, 0)`;
    updateCounter();
  }
  
  function nextSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
      currentIndex = 0;
      slider.style.transition = "none";
    }
    updateSlider();
  }
  
  function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalSlides - 1;
      slider.style.transition = "none";
    }
    updateSlider();
  }
  
  function transitionEndHandler() {
    slider.removeEventListener("transitionend", transitionEndHandler);
    slider.style.transition = "transform 0.5s ease-in-out";
  }
  
  function updateCounter() {
    const displayedIndex = (currentIndex % totalSlides) + 1;
    sliderCounter.forEach(counter => {
      counter.textContent = `${displayedIndex}/${totalSlides}`;
    });
  }
  
  const btnSlideNext = document.querySelectorAll(".participant__next-btn");
  const btnSlidePrev = document.querySelectorAll(".participant__prev-btn");
  
  btnSlideNext.forEach((slide) => {
    slide.addEventListener("click", nextSlide);
  });
  
  btnSlidePrev.forEach((slide) => {
    slide.addEventListener("click", prevSlide);
  });
  
  setInterval(nextSlide, 4000);
  
// Slider history-card

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
    updateButtons();
  }
  function nextSlide2() {
    currentIndex2++;
    if (currentIndex2 < totalSlides2) {
      updateSlider2();
    } else {
      currentIndex2 = totalSlides2 - 1;
      updateSlider2();
      document.querySelector(".steps-btn-right").classList.add("inactive");
    }
    document.querySelector(".steps-btn-left").classList.remove("inactive");
  }

  function prevSlide2() {
    currentIndex2--;
    if (currentIndex2 >= 0) {
      updateSlider2();
    } else {
      currentIndex2 = 0;
      updateSlider2();
      document.querySelector(".btn-left-circule").classList.add("inactive");
    }
    document.querySelector(".btn-right-circule").classList.remove("inactive");
  }

  function updateButtons() {
    if (currentIndex2 === 0) {
      document.querySelector(".btn-left-circule").classList.add("inactive");
    } else {
      document.querySelector(".btn-left-circule").classList.remove("inactive");
    }

    if (currentIndex2 === totalSlides2 - 1) {
      document.querySelector(".btn-right-circule").classList.add("inactive");
    } else {
      document.querySelector(".btn-right-circule").classList.remove("inactive");
    }
  }

  document
    .querySelector(".steps-btn-right")
    .addEventListener("click", nextSlide2);
  document
    .querySelector(".steps-btn-left")
    .addEventListener("click", prevSlide2);

  updateIndicators();
  updateButtons();
});
