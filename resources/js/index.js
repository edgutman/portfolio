// Core JS

// const header = document.getElementById("page-header");
// const intercept = document.createElement("div");

// intercept.setAttribute("data-observer-intercept", "");
// header.before(intercept);

// const observer = new IntersectionObserver(([entry]) => {
//   header.classList.toggle("active", !entry.isIntersecting);
// });

// observer.observe(intercept);

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing contact drawer...');

    // Contact drawer functionality
    const contactTrigger = document.getElementById('contact-trigger');
    const contactDrawer = document.querySelector('.contact-drawer');
    const closeDrawer = document.querySelector('.close-drawer');

    console.log('Contact elements:', {
        contactTrigger,
        contactDrawer,
        closeDrawer
    });

    // Function to open drawer
    function openDrawer(e) {
        console.log('Opening drawer...');
        e.preventDefault();
        contactDrawer.classList.add('open');
    }

    // Add click handler to contact button
    if (contactTrigger) {
        contactTrigger.addEventListener('click', openDrawer);
    }

    // Close drawer when clicking close button
    if (closeDrawer) {
        closeDrawer.addEventListener('click', () => {
            console.log('Closing drawer...');
            contactDrawer.classList.remove('open');
        });
    }

    // Close drawer when clicking outside
    document.addEventListener('click', (e) => {
        if (contactDrawer && 
            contactDrawer.classList.contains('open') && 
            !e.target.closest('.contact-drawer') && 
            !e.target.closest('#contact-trigger')) {
            console.log('Closing drawer from outside click...');
            contactDrawer.classList.remove('open');
        }
    });
});

// Handle form submission
function sendEmail(event) {
    event.preventDefault();
    console.log('Handling form submission...');
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Create mailto link with form data
    const mailtoLink = `mailto:hi@edgutman.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Clear form and close drawer after small delay
    setTimeout(() => {
        document.getElementById('contactForm').reset();
        const contactDrawer = document.querySelector('.contact-drawer');
        if (contactDrawer) {
            contactDrawer.classList.remove('open');
        }
    }, 500);
}