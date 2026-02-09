// Particles
function createParticles() {
    const container = document.getElementById('particles-container');
    for (let i = 0; i < 50; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (10 + Math.random() * 10) + 's';
        container.appendChild(p);
    }
}

// Scroll animation
function handleScroll() {
    document.querySelectorAll('.fade-in').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
}

// Modal
function closeModal() {
    document.getElementById('imageModal').classList.remove('active');
}

// Mobile menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMobileMenu = document.getElementById('closeMobileMenu');

mobileMenuBtn?.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
});

closeMobileMenu?.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
});

// Init
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', () => {
    createParticles();
    handleScroll();
});
