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

// Smooth Scrolling Implementation
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.hash;
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
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
    const formSuccess = document.getElementById('form-success');
    const otherResearchField = document.getElementById('otherResearchContainer');
    const researchTypeSelect = document.getElementById('researchType');
    
    // Show/hide "Other" field based on selection
    if (researchTypeSelect && otherResearchField) {
        researchTypeSelect.addEventListener('change', function() {
            otherResearchField.style.display = this.value === 'other' ? 'block' : 'none';
        });
    }

    // Form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Basic form validation
            const fullName = document.getElementById('fullName');
            const email = document.getElementById('email');
            const researchBrief = document.getElementById('researchBrief');
            
            if (fullName.value && email.value && researchBrief.value) {
                // In a real implementation, this would send data to the server
                // For demonstration, we're showing the success message
                contactForm.style.display = 'none';
                if (formSuccess) formSuccess.style.display = 'block';
            } else {
                alert('Please fill in all required fields.');
            }
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