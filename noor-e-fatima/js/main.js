document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Set Active Navigation State
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('text-academy-blue', 'font-bold');
            link.classList.remove('text-gray-600', 'hover:text-academy-blue');
        }
    });

    // Handle Contact Form Submission (Frontend only)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const successMessage = document.getElementById('form-success');
            contactForm.style.display = 'none';
            successMessage.classList.remove('hidden');
        });
    }

    // Handle Admission Form Submission (Frontend only)
    const admissionForm = document.getElementById('admission-form');
    if (admissionForm) {
        admissionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const successMessage = document.getElementById('admission-success');
            admissionForm.style.display = 'none';
            successMessage.classList.remove('hidden');
        });
    }
});
