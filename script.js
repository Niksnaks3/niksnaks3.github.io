// Niksnaks Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const href = this.getAttribute('href');

            if (href === '#') {
                // If it's just "#", scroll to top
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else if (href.startsWith('#')) {
                // If it's an anchor link, scroll to that section
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Add parallax effect to hero section
    const hero = document.querySelector('.hero');
    const heroImg = document.querySelector('.hero-img');

    if (hero && heroImg) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;

            if (scrolled < hero.offsetHeight) {
                heroImg.style.transform = `translateY(${rate}px)`;
            }
        });
    }

    // Add hover effect to repository cards
    const repoCards = document.querySelectorAll('.repo-card');

    repoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe repository cards
    repoCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Console easter egg
    console.log('%c Niksnaks ', 'background: #4a90d9; color: white; font-size: 24px; font-weight: bold;');
    console.log('%c 777-Foodstore IT-support ', 'background: #1a1a1a; color: #4a90d9; font-size: 14px;');
    console.log('Welkom bij Niksnaks! 🎮');
});