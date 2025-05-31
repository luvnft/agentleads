// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handler
    const leadForm = document.getElementById('leadForm');
    if (leadForm) {
        leadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                company: document.getElementById('company').value,
                message: document.getElementById('message').value
            };
            
            // Show success message (in a real application, you would send this data to a server)
            const formContainer = leadForm.parentElement;
            formContainer.innerHTML = `
                <div class="success-message">
                    <i class="fas fa-check-circle"></i>
                    <h3>Thank You!</h3>
                    <p>Your information has been submitted successfully. One of our representatives will contact you shortly.</p>
                </div>
            `;
            
            // Log form data (remove in production)
            console.log('Form submitted:', formData);
        });
    }

    // Add scroll animation for elements
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .step, .pricing-plan, .testimonial');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    };
    
    // Add animated class to CSS
    const style = document.createElement('style');
    style.innerHTML = `
        .feature-card, .step, .pricing-plan, .testimonial {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .animated {
            opacity: 1;
            transform: translateY(0);
        }
        .success-message {
            text-align: center;
            padding: 40px 20px;
        }
        .success-message i {
            font-size: 60px;
            color: var(--success-color);
            margin-bottom: 20px;
        }
        .success-message h3 {
            font-size: 24px;
            margin-bottom: 10px;
        }
    `;
    document.head.appendChild(style);
    
    // Run animation on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);

    // Create image directory and placeholder images
    function createPlaceholderImages() {
        console.log('Note: In a real implementation, you would need to add actual images to the images directory.');
    }
    
    createPlaceholderImages();
}); 