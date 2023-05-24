document.getElementById('organizationButton').addEventListener('click', function() {
    window.open('https://github.com/ChatImproVR', '_blank');
  });

document.getElementById('documentationButton').addEventListener('click', function() {
    window.open('https://chatimprovr.github.io/The-Book/', '_blank');
  });

document.getElementById('sourceCodeButton').addEventListener('click', function() {
    window.open('https://github.com/ChatImproVR/chatimprovr', '_blank');
  });

document.addEventListener("DOMContentLoaded", function() {
  var carouselIndex = 0;
  var carouselImages = document.querySelectorAll(".carousel img");
  var carouselPrev = document.querySelector(".carousel-prev");
  var carouselNext = document.querySelector(".carousel-next");

  function showSlide(index) {
    carouselImages.forEach(function(image) {
      image.classList.remove("active");
    });
    carouselImages[index].classList.add("active");
  }

  function prevSlide() {
    carouselIndex = (carouselIndex - 1 + carouselImages.length) % carouselImages.length;
    showSlide(carouselIndex);
  }

  function nextSlide() {
    carouselIndex = (carouselIndex + 1) % carouselImages.length;
    showSlide(carouselIndex);
  }

  carouselPrev.addEventListener("click", prevSlide);
  carouselNext.addEventListener("click", nextSlide);

  // Show the first image
  showSlide(carouselIndex);
});
  
