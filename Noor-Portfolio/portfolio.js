
// Slideshow
let slideIndex = 1;

showSlides(slideIndex);

// Previous and next buttons
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Navigation dots
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Display slideshow images
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (slides.length === 0) {
        return;
    }

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";

    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add("active");
    }
}

// Open contact form
function openForm() {
    document.getElementById("contactForm").showModal();
}

// Close contact form
function closeForm() {
    document.getElementById("contactForm").close();
}

// Validate contact form
function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email address.");
        return false;
    }

    if (message === "") {
        alert("Please enter a message.");
        return false;
    }

    return true;
}

// Confirm JavaScript is connected
console.log("Portfolio JavaScript is working!");
