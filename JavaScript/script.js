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
