let currentSlide = 0;

const main = document.querySelector("main");

document.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();
    const topDisplacement = parseInt(main.style.top) || 0;
    if (currentSlide < 3 && event.deltaY > 0) {
      currentSlide++;
    }
    if (currentSlide > 0 && event.deltaY < 0) {
      currentSlide--;
    }
    main.style.top = `-${window.innerHeight * currentSlide}px`;
  },
  { passive: false }
);
