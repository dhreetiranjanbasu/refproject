// JavaScript for moving hero section images left and right
const heroSlide = document.getElementById("heroSlide");
const leftButton = document.getElementById("moveLeft");
const rightButton = document.getElementById("moveRight");

// List of background images
const images = ["./image/slider1.jpg", "./image/slider2.jpg", "./image/slider3.jpg"];
let currentIndex = 0;

// Function to update the background image
function updateBackgroundImage(index) {
  heroSlide.style.backgroundImage = `url('${images[index]}')`;
}

// Event listener for moving left
leftButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Go to the previous image
  updateBackgroundImage(currentIndex);
});

// Event listener for moving right
rightButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length; // Go to the next image
  updateBackgroundImage(currentIndex);
});

// Auto-change slides every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  updateBackgroundImage(currentIndex);
}, 5000);
