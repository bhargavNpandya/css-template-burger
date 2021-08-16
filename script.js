// Navbar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }
});

// Carousel
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

// Arrange slides one next to another
const setSlidePosition = (slide, index) => {
  slide.style.left = `${slideWidth * index}px`;
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};
const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
};

dotsNav.addEventListener('click', (e) => {
  const targetDot = e.target.closest('button');

  if (!targetDot) return;

  const currentSlide = track.querySelector('.current-slide');
  currentDot = dotsNav.querySelector('.current-slide');

  const targetIndex = dots.findIndex((dot) => {
    return dot === targetDot;
  });

  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
});
