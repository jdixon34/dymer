const soundToggle = document.getElementById('sound-toggle');
const backgroundVideo = document.getElementById('background-video');

soundToggle.addEventListener('click', () => {
    if (backgroundVideo.muted) {
        backgroundVideo.muted = false;
        soundToggle.textContent = 'Sound Off';
    } else {
        backgroundVideo.muted = true;
        soundToggle.textContent = 'Sound On';
    }
});

// Navbar visibility on scroll
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = '-100px'; // Hide navbar
    } else {
        navbar.style.top = '0'; // Show navbar
    }
    lastScrollTop = scrollTop;
});