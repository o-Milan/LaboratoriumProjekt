function toggleDarkMode() {
  const toggle = document.getElementById('toggle-icon');
  const btns = document.querySelectorAll('.btn');
  if (toggle.checked) {
    document.body.classList.add('dark-mode');
    btns.forEach(btn => {
      btn.style.color = 'white';
    });

  } else {
    document.body.classList.remove('dark-mode');
    btns.forEach(btn => {
      btn.style.color = 'black';
    });
  }
}


const slides = [
  document.getElementById('slide1'),
  document.getElementById('slide2'),
  document.getElementById('slide3')
];

const slideText = document.getElementById('slideText');

const texts = [
  "A Breakin' Labs egy magánlaboratórium Dr. Nerdicus által alapítva.",  // Slide 1
  'Rengeteg vizsgálatot kínálunk, felnőtteknek és gyermekeknek egyaránt.',     // Slide 2
  'A megbízható dolgozóink segítenek önnek megtalálni amire szüksége van.' //Slide 3
];

const totalSlides = slides.length;

let slideshowActive = false;
let scrollPosition = 0;
let maxScroll = totalSlides - 1;

const slideshowContainer = document.querySelector('.slider-wrapper');

function initializeSlideshow() {
  scrollPosition = 0;
  updateSlides();
  updateText();
}

function updateSlides() {
  slides.forEach((slide, i) => {
    let translateX = (i - scrollPosition) * 100;
    slide.style.transform = `translateX(${translateX}%)`;
  });

  updateText();
}

function updateText() {
  slides.forEach((slide, i) => {
    const slideTranslateX = (i - scrollPosition) * 100;

    // Check if the slide is near or fully in view (80% into the next slide)
    if (slideTranslateX <= -80 && slideTranslateX > -180) {
      slideText.textContent = texts[i];
    } else if (slideTranslateX > -80 && slideTranslateX <= 0) {
      slideText.textContent = texts[i];
    }
  });
}

slideshowContainer.addEventListener('mouseenter', () => {
  slideshowActive = true;
  blockPageScroll();
});

slideshowContainer.addEventListener('mouseleave', () => {
  slideshowActive = false;
  unblockPageScroll();
});

// Set up the wheel event listener to slide in increments of 10%
window.addEventListener('wheel', (e) => {
  if (slideshowActive) {
    e.preventDefault();
    let scrollChange = 0;

    if (e.deltaY > 0) {
      // Scroll down
      scrollChange = 0.1; // Move 10% of the way to the next slide
    } else {
      // Scroll up
      scrollChange = -0.1; // Move 10% of the way to the previous slide
    }

    // Adjust the scroll position by 10% increments
    scrollPosition = Math.min(maxScroll, Math.max(0, scrollPosition + scrollChange));
    updateSlides();
  }
}, { passive: false });

document.getElementById('prevBtn').addEventListener('click', () => {
  // Adjust to the nearest slide
  scrollPosition = Math.max(0, Math.round(scrollPosition - 1));
  updateSlides();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  // Adjust to the nearest slide
  scrollPosition = Math.min(maxScroll, Math.round(scrollPosition + 1));
  updateSlides();
});

// Block and unblock page scroll
function blockPageScroll() {
  document.body.style.overflow = 'hidden';
}

function unblockPageScroll() {
  document.body.style.overflow = 'auto';
}

// Initialize the slideshow when the page loads
window.addEventListener('load', initializeSlideshow);

// Ensure that the slideshow works after refreshing
window.addEventListener('DOMContentLoaded', () => {
  initializeSlideshow();
});