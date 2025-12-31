/* --- 1. TYPEWRITER ANIMATION --- */
const textElement = document.getElementById('typewriter');
const phrases = ["Deep Reflection.", "Creative Growth.", "Poetic Silence.", "Artistic Excellence.", "Literary Focus."];
let phraseIndex = 0, characterIndex = 0, isDeleting = false, typeSpeed = 150;

function type() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, characterIndex - 1);
        characterIndex--;
        typeSpeed = 75;
    } else {
        textElement.textContent = currentPhrase.substring(0, characterIndex + 1);
        characterIndex++;
        typeSpeed = 250;
    }

    if (!isDeleting && characterIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; 
    } else if (isDeleting && characterIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }
    setTimeout(type, typeSpeed);
}
document.addEventListener('DOMContentLoaded', type);
/* --- 2. NAVIGATION & HAMBURGER LOGIC --- */
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

// Toggle the main hamburger menu
menu.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevents immediate closing
    menu.classList.toggle('active');
    menuLinks.classList.toggle('active');
});

// Handle clicks inside the menu
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        const isDropdownToggle = link.classList.contains('dropbtn');

        if (isDropdownToggle && window.innerWidth <= 992) {
            e.preventDefault();
            e.stopPropagation(); // CRITICAL: Stops the click from closing the hamburger
            
            const content = link.nextElementSibling; 
            
            // Close other open dropdowns first (Optional, for a cleaner look)
            document.querySelectorAll('.dropdown-content').forEach(other => {
                if (other !== content) other.classList.remove('open');
            });

            // Toggle the clicked one
            content.classList.toggle('open');
            
        } else {
            // It's a normal link: Close everything
            menu.classList.remove('active');
            menuLinks.classList.remove('active');
            
            document.querySelectorAll('.dropdown-content').forEach(content => {
                content.classList.remove('open');
            });
        }
    });
});

// Close menu if user clicks anywhere outside the menu
document.addEventListener('click', (e) => {
    if (!menuLinks.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('active');
        menuLinks.classList.remove('active');
    }
});
/* --- 3. HERO CAROUSEL --- */
let counter = 0;
const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.slide-img');
const totalImages = images.length;

function moveCarousel() {
    if(!slide) return; // Safety check
    counter++;
    if (counter >= totalImages) counter = 0;
    const axis = counter * (100 / totalImages);
    slide.style.transform = `translateX(-${axis}%)`;
}
setInterval(moveCarousel, 4000);