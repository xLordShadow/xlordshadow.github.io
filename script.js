// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.8)';
    }
});


// Set current year in footer
const currentYear = new Date().getFullYear();
const footerYears = document.querySelectorAll('.footer p');
footerYears.forEach(footerYear => {
    if (footerYear.textContent.includes('2025')) {
        footerYear.textContent = footerYear.textContent.replace('2025', currentYear);
    }
});

