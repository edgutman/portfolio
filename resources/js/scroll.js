// Create an Intersection Observer to handle the chevron fade
const chevronObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const chevron = document.querySelector('.scroll-indicator');
        if (entry.isIntersecting) {
            // Fade out the chevron when the case study is visible
            chevron.style.opacity = '0';
            chevron.style.pointerEvents = 'none';
        } else {
            // Show the chevron when the case study is not visible
            chevron.style.opacity = '1';
            chevron.style.pointerEvents = 'auto';
        }
    });
}, {
    // Start fading when the case study is 10% visible
    threshold: 0.1
});

// Start observing the first case study section
document.addEventListener('DOMContentLoaded', () => {
    const firstCaseStudy = document.querySelector('.work-odd-page');
    if (firstCaseStudy) {
        chevronObserver.observe(firstCaseStudy);
    }
}); 