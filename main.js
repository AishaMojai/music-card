const images = document.querySelectorAll('.image-slide');
let currentImageIndex = 0;

function slideImages() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  const translateValue = `translateY(${-currentImageIndex * 100}%)`;
  images.forEach(image => {
    image.style.transform = translateValue;
  });
}

setInterval(slideImages, 3000);
