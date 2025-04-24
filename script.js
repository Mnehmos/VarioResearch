// Enhanced JavaScript for VarioResearch Website

document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling
    initSmoothScrolling();
    
    // Contact Form Handling
    initContactForm();
    
    // Primitive Cards Animation
    initPrimitiveCardsAnimation();
    
    // Mobile Navigation Menu
    initMobileNavigation();
});

// Smooth Scrolling Implementation - modified to exclude form elements
function initSmoothScrolling() {
    // Only select navigation links, not form elements
    const navLinks = document.querySelectorAll('nav a[href^="#"], .hero-buttons a[href^="#"], .report-cta a[href^="#"], .cta a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Only prevent default for actual page navigation, not form submission
            const targetId = this.hash;
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                event.preventDefault(); // Only prevent default if we found the target
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Contact Form Handling
function initContactForm() {
    const contactForm = document.getElementById('varioresearch-form');
    // Removed duplicate declaration
    const otherResearchField = document.getElementById('otherResearchContainer');
    const researchTypeSelect = document.getElementById('researchType');
    
    // Show/hide "Other" field based on selection
    if (researchTypeSelect && otherResearchField) {
        researchTypeSelect.addEventListener('change', function() {
            otherResearchField.style.display = this.value === 'other' ? 'block' : 'none';
        });
    }

    // Form submission - simplified to ensure it works properly
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Basic form validation
            const fullName = document.getElementById('fullName');
            const email = document.getElementById('email');
            const researchBrief = document.getElementById('researchBrief');
            
            if (!fullName.value || !email.value || !researchBrief.value) {
                event.preventDefault();
                alert('Please fill in all required fields.');
                return;
            }
            
            // Show loading state
            const submitBtn = contactForm.querySelector('.submit-btn');
            if (submitBtn) {
                submitBtn.textContent = 'Submitting...';
                submitBtn.disabled = true;
            }
            
            // No preventDefault() here - letting form submit naturally to Formspree
            console.log('Form is valid, submitting to Formspree...');
            // The form will redirect to thank-you.html after submission
        });
    }
}

// Primitive Cards Animation
function initPrimitiveCardsAnimation() {
    const primitiveCards = document.querySelectorAll('.primitive-card');
    
    primitiveCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.background = 'rgba(255, 255, 255, 0.1)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.background = '';
            this.style.boxShadow = '';
        });
    });
}

// Mobile Navigation
function initMobileNavigation() {
    // This would be implemented if there was a mobile menu toggle
    // For now, we're using media queries in CSS to handle mobile layout
}