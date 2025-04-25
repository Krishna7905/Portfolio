

// skills 

const carouselTrack = document.querySelector('.carousel-track');
carouselTrack.addEventListener('mouseenter', () => {
    carouselTrack.style.animationPlayState = 'paused';
});

carouselTrack.addEventListener('mouseleave', () => {
    carouselTrack.style.animationPlayState = 'running';
});


// form 
const neonButton = document.querySelector(".neon-button");

neonButton.addEventListener("mouseenter", () => {
    neonButton.style.boxShadow = "0 0 30px rgba(0, 255, 255, 1)";
});

neonButton.addEventListener("mouseleave", () => {
    neonButton.style.boxShadow = "0 0 15px rgba(0, 255, 255, 0.8)";
});


// for timer

function debounce(func, delay) {
  let timer;
  return function () {
      clearTimeout(timer);
      timer = setTimeout(func, delay);
  };
}

// disable right click
document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
});
