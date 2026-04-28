document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".slider img");
    let currentImageIndex = 0;

    // Show the first image
    images[currentImageIndex].style.display = "block";

    // Add event listeners for previous and next buttons
    document.querySelector(".prev-btn").addEventListener("click", showPreviousImage);
    document.querySelector(".next-btn").addEventListener("click", showNextImage);

    function showPreviousImage() {
        images[currentImageIndex].style.display = "none";
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        images[currentImageIndex].style.display = "block";
    }

    function showNextImage() {
        images[currentImageIndex].style.display = "none";
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].style.display = "block";
    }
});
