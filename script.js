const textElement = document.getElementById('typewriter');
const phrases = [
    "Deep Reflection.",
    "Creative Growth.",
    "Poetic Silence.",
    "Artistic Excellence.",
    "Literary Focus."
];

let phraseIndex = 0;
let characterIndex = 0;
let isDeleting = false;
let typeSpeed = 150;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        // Remove characters
        textElement.textContent = currentPhrase.substring(0, characterIndex - 1);
        characterIndex--;
        typeSpeed = 75; // Faster when deleting
    } else {
        // Add characters
        textElement.textContent = currentPhrase.substring(0, characterIndex + 1);
        characterIndex++;
        typeSpeed = 250;
    }

    // Logic for switching phrases
    if (!isDeleting && characterIndex === currentPhrase.length) {
        // Pause at the end of the phrase
        isDeleting = true;
        typeSpeed = 2000; 
    } else if (isDeleting && characterIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

// Start the animation
document.addEventListener('DOMContentLoaded', type);


const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

// Toggle the menu
menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuLinks.classList.toggle('active');
});

// Close menu when a link is clicked (useful for single-page sites)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        menuLinks.classList.remove('active');
    });
});

