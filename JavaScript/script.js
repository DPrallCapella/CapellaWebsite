// Preload images when the page loads
function onPageLoad() {
    // Preload banner images for index.html
    if (window.location.pathname.includes("index.html")) {
        const bannerImages = [
            "images/banner1.jpg",
            "images/banner2.jpg",
            "images/banner3.jpg"
        ];
        for (let i = 0; i < bannerImages.length; i++) {
            new Image().src = bannerImages[i];
        }

        // Start cycling the banner images for index.html
        cycleBanner();
    }

    // Preload gallery images for gallery.html
    if (window.location.pathname.includes("gallery.html")) {
        const galleryImages = [
            "images/firefighter.jpg",
            "images/work.jpg",
            "images/silhouette.jpg",
            "images/event.jpg"
        ];

        for (let i = 0; i < galleryImages.length; i++) {
            new Image().src = galleryImages[i];
        }

        // Add rollover effect to gallery images for gallery.html
        addRolloverEffect();
    }
}

// Function to cycle through banner images for index.html
let currentBannerIndex = 0;
const bannerImageElements = document.querySelectorAll('#bannerImages img');
function cycleBanner() {
    setInterval(function () {
        // Hide all banners
        bannerImageElements.forEach(img => img.style.display = 'none');

        // Show the current banner
        bannerImageElements[currentBannerIndex].style.display = 'block';

        // Move to the next banner
        currentBannerIndex = (currentBannerIndex + 1) % bannerImageElements.length;
    }, 3000); // 3000ms = 3 seconds
}

// Function to handle rollover effect for gallery images on gallery.html
function addRolloverEffect() {
    const galleryImages = document.querySelectorAll('#gallery .gallery img');

    galleryImages.forEach(image => {
        image.addEventListener('mouseover', function () {
            this.style.opacity = 0.7; // Change opacity on hover
        });
        image.addEventListener('mouseout', function () {
            this.style.opacity = 1; // Reset opacity when not hovered
        });
    });
}

// Initialize functions when the page loads
window.onload = function () {
    onPageLoad();
};


// JavaScript for Form Validation
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let isValid = true;

        // Validation for Username
        const userName = document.getElementById('userName');
        const userNameError = document.getElementById('userNameError');

        if (userName.value.trim() === '') {
            userNameError.textContent = "User Name is Required!";
            isValid = false;
        } else {
            userNameError.textContent = '';
        }

        // Validation for Password
        const password = document.getElementById('password');
        const passwordError = document.getElementById('passwordError');

        if (password.value.trim() === '') {
            passwordError.textContent = "Password is Required!";
            isValid = false;
        } else {
            passwordError.textContent = '';
        }

        // Validation for Password Verification
        const passwordVerify = document.getElementById('passwordVerify');
        const passwordVerifyError = document.getElementById('passwordVerifyError');

        if (passwordVerify.value.trim() === '' || passwordVerify.value !== password.value) {
            passwordVerifyError.textContent = "Passwords must match!";
            isValid = false;
        } else {
            passwordVerifyError.textContent = '';
        }

        // Validation for First Name
        const firstName = document.getElementById('firstName');
        const firstNameError = document.getElementById('firstNameError');

        if (firstName.value.trim() === '') {
            firstNameError.textContent = 'First Name is Required!';
            isValid = false;
        } else {
            firstNameError.textContent = '';
        }

        // Validation for Last Name
        const lastName = document.getElementById('lastName');
        const lastNameError = document.getElementById('lastNameError');

        if (lastName.value.trim() === '') {
            lastNameError.textContent = 'Last Name is Required!';
            isValid = false;
        } else {
            lastNameError.textContent = '';
        }

        // Validation for Email Address
        const email = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (email.value.trim() === '' || !emailPattern.test(email.value)) {
            emailError.textContent = "Please enter a valid E-Mail address!";
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // Validation for Phone Number
        const phoneNumber = document.getElementById('phoneNumber');
        const phoneNumberError = document.getElementById('phoneNumberError');
        const phonePattern = /^\d{10}$/;

        if (phoneNumber.value.trim() === '' || !phonePattern.test(phoneNumber.value)) {
            phoneNumberError.textContent = "Please enter a valid phone number!";
            isValid = false;
        } else {
            phoneNumberError.textContent = '';
        }

        // Check if all fields are valid
        if (isValid) {
            // Set cookies for each input field
            document.cookie = `userName=${userName.value}; path=/`;
            document.cookie = `password=${document.getElementById('password').value}; path=/`;
            document.cookie = `firstName=${document.getElementById('firstName').value}; path=/`;
            document.cookie = `lastName=${document.getElementById('lastName').value}; path=/`;
            document.cookie = `email=${document.getElementById('email').value}; path=/`;
            document.cookie = `phoneNumber=${document.getElementById('phoneNumber').value}; path=/`;
            document.cookie = `signUpNewsletter=${document.querySelector('input[name="signUpNewsletter"]:checked').value}; path=/`;

            // Redirect to the confirmation page
            window.location.href = 'confirm.html';
        } else {
            document.querySelector('.error-message').scrollIntoView({ behavior: 'smooth' });
        }
    });
});