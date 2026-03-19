document.addEventListener('DOMContentLoaded', () => {
    const spotlight = document.querySelector('.spotlight');
    const rightPanel = document.querySelector('.right-panel');

    // Spotlight effect
    document.addEventListener('mousemove', (e) => {
        spotlight.style.left = `${e.clientX}px`;
        spotlight.style.top = `${e.clientY}px`;
    });

    // Navigation scroll highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.5 // 50% of the item must be visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth scroll for navigation links
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
