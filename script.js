// Array containing background images
const images = [
    'modellvrs (1).jpg',
    'cek1.jpg',
    'cek2.jpg',
];

let currentIndex = 0;

// Function to change background image
function changeBackground() {
    document.querySelector('.hero').style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

// Change background every 5 seconds
setInterval(changeBackground, 5000);

// Initial background change
changeBackground();
