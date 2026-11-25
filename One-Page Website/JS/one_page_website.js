
/*
One-Page Website JavaScript
Explore the World - Lightbox Image Gallery

This code allows users to click on an image
to view a larger version in a lightbox.
*/

// Select all images with the lightbox-image class.
const images = document.querySelectorAll(".lightbox-image");

// Create a lightbox container.
const lightbox = document.createElement("div");

// Give the lightbox an ID for CSS styling.
lightbox.id = "lightbox";

// Add the lightbox to the webpage.
document.body.appendChild(lightbox);

// Create an image element for the enlarged photo.
const largeImage = document.createElement("img");

// Add the enlarged image inside the lightbox.
lightbox.appendChild(largeImage);

// Keep track of which image is currently displayed.
let currentIndex = 0;

// This function opens the selected image.
function openLightbox(index) {

    // Store the selected image number.
    currentIndex = index;

    // Display the larger version of the image.
    largeImage.src =
        images[index].dataset.full || images[index].src;

    // Set the image description.
    largeImage.alt = images[index].alt;

    // Make the lightbox visible.
    lightbox.style.display = "flex";
}

// This function closes the lightbox.
function closeLightbox() {

    // Hide the lightbox.
    lightbox.style.display = "none";
}

// Add a click event to every gallery image.
images.forEach((image, index) => {

    image.addEventListener("click", function () {

        // Open the image that was clicked.
        openLightbox(index);
    });
});

// Close the lightbox when the dark background is clicked.
lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {
        closeLightbox();
    }
});

// Allow users to navigate using the keyboard.
document.addEventListener("keydown", function (event) {

    // Only respond when the lightbox is open.
    if (lightbox.style.display !== "flex") {
        return;
    }

    // Press Escape to close the lightbox.
    if (event.key === "Escape") {
        closeLightbox();
    }

    // Press the right arrow to view the next image.
    if (event.key === "ArrowRight") {

        openLightbox(
            (currentIndex + 1) % images.length
        );
    }

    // Press the left arrow to view the previous image.
    if (event.key === "ArrowLeft") {

        openLightbox(
            (currentIndex - 1 + images.length) % images.length
        );
    }
});
