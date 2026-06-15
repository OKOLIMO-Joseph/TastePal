/* ========================================
   TASTEPAL - CONTACT PAGE JAVASCRIPT
   Form validation and submission handling
   ======================================== */

function validateForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    
    let isValid = true;
    
    // Clear previous errors
    document.querySelectorAll('.error').forEach(el => el.innerText = '');
    
    // Name validation
    if (!name.value.trim()) {
        document.getElementById('nameError').innerText = 'Name is required';
        isValid = false;
    } else if (name.value.trim().length < 2) {
        document.getElementById('nameError').innerText = 'Name must be at least 2 characters';
        isValid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        document.getElementById('emailError').innerText = 'Email is required';
        isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address';
        isValid = false;
    }
    
    // Subject validation
    if (!subject.value.trim()) {
        document.getElementById('subjectError').innerText = 'Subject is required';
        isValid = false;
    } else if (subject.value.trim().length < 3) {
        document.getElementById('subjectError').innerText = 'Subject must be at least 3 characters';
        isValid = false;
    }
    
    // Message validation
    if (!message.value.trim()) {
        document.getElementById('msgError').innerText = 'Message is required';
        isValid = false;
    } else if (message.value.trim().length < 10) {
        document.getElementById('msgError').innerText = 'Message must be at least 10 characters';
        isValid = false;
    }
    
    return isValid;
}

function showSuccessMessage(name) {
    // Create success message element
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <i class="fas fa-check-circle" style="color: #48bb78; font-size: 3rem; margin-bottom: 1rem;"></i>
        <h3>Thank you, ${name}!</h3>
        <p>Your message has been sent successfully. We'll get back to you within 24 hours.</p>
    `;
    successDiv.style.cssText = `
        text-align: center;
        padding: 2rem;
        background: var(--bg-card);
        border-radius: 20px;
        margin-top: 1rem;
    `;
    
    const form = document.getElementById('contactForm');
    form.innerHTML = '';
    form.appendChild(successDiv);
    
    // Reset after 5 seconds (optional - redirect or clear)
    setTimeout(() => {
        location.reload();
    }, 5000);
}

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            const name = document.getElementById('name').value;
            showSuccessMessage(name);
            
            // Here you would typically send the form data to a server
            console.log('Form submitted:', {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            });
        }
    });
    
    // Real-time validation (optional)
    const inputs = ['name', 'email', 'subject', 'message'];
    inputs.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('input', function() {
                const errorSpan = document.getElementById(id + 'Error');
                if (errorSpan) errorSpan.innerText = '';
            });
        }
    });
}

// Initialize contact page
document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
});