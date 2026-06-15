/* ========================================
   TASTEPAL - MAIN JAVASCRIPT
   Shared functionality for all pages
   ======================================== */

// ---------- Dark Mode Toggle ----------
document.addEventListener('DOMContentLoaded', function() {
    // Initialize dark mode from localStorage
    initDarkMode();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize back to top button
    initBackToTop();
    
    // Initialize scroll animations
    initScrollAnimations();
});

function initDarkMode() {
    const darkToggle = document.getElementById('darkModeBtn');
    if (!darkToggle) return;
    
    // Check for saved preference
    const savedMode = localStorage.getItem('tastepal-dark-mode');
    
    if (savedMode === 'enabled') {
        document.body.classList.add('dark');
        updateDarkModeIcon(darkToggle, true);
    }
    
    darkToggle.addEventListener('click', function() {
        const isDark = document.body.classList.toggle('dark');
        
        if (isDark) {
            localStorage.setItem('tastepal-dark-mode', 'enabled');
            updateDarkModeIcon(darkToggle, true);
        } else {
            localStorage.setItem('tastepal-dark-mode', 'disabled');
            updateDarkModeIcon(darkToggle, false);
        }
    });
}

function updateDarkModeIcon(button, isDark) {
    const icon = button.querySelector('i');
    if (isDark) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        button.innerHTML = '<i class="fas fa-sun"></i> Light';
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        button.innerHTML = '<i class="fas fa-moon"></i> Dark';
    }
}

// ---------- Mobile Menu Toggle ----------
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });
        
        // Close menu when clicking a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
            });
        });
    }
}

// ---------- Back to Top Button ----------
function initBackToTop() {
    const backBtn = document.getElementById('backToTop');
    if (!backBtn) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
            backBtn.classList.add('show');
        } else {
            backBtn.classList.remove('show');
        }
    });
    
    backBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ---------- Scroll Animations (Intersection Observer) ----------
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.food-card, .feature-card, .testimonial-card, .team-card, .stat-card');
    
    // Set initial opacity
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => observer.observe(el));
}

// ---------- Active Navigation Link ----------
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else if (currentPage === 'index.html' && href === 'index.html') {
            link.classList.add('active');
        }
    });
}

// Call on page load
document.addEventListener('DOMContentLoaded', setActiveNavLink);