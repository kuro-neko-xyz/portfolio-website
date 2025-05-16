let currentSlide = 0;

const main = document.querySelector("main");
const aboutMeLink = document.querySelector("#about-me-link");
const project1Link = document.querySelector("#project-1-link");
const project2Link = document.querySelector("#project-2-link");
const project3Link = document.querySelector("#project-3-link");

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

aboutMeLink.addEventListener("click", () => {
  currentSlide = 0;
  main.style.top = `-${window.innerHeight * currentSlide}px`;
});

project1Link.addEventListener("click", () => {
  currentSlide = 1;
  main.style.top = `-${window.innerHeight * currentSlide}px`;
});

project2Link.addEventListener("click", () => {
  currentSlide = 2;
  main.style.top = `-${window.innerHeight * currentSlide}px`;
});

project3Link.addEventListener("click", () => {
  currentSlide = 3;
  main.style.top = `-${window.innerHeight * currentSlide}px`;
});
