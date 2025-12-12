// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Splash screen handling - fade-up effect then fades out
    const splash = document.getElementById('splash');
    if (splash) {
        // Check if user has already seen the splash (via sessionStorage)
        const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
        
        if (hasSeenSplash) {
            // If already seen, remove splash immediately
            splash.style.display = 'none';
            if (splash.parentNode) splash.parentNode.removeChild(splash);
        } else {
            // First visit - show splash animation
            sessionStorage.setItem('hasSeenSplash', 'true');
            
            // Wait for fade-up (1.5s) + pause (0.4s), then fade out splash (1s)
            setTimeout(() => {
                splash.classList.add('hidden');
                setTimeout(() => {
                    if (splash && splash.parentNode) splash.parentNode.removeChild(splash);
                }, 1000);
            }, 1900);
        }
    }
    // Animation des éléments au chargement de la page
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        setTimeout(() => {
            element.style.opacity = '1';
        }, 100);
    });

    // Gestion du menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Effet de scroll pour le header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Masquer définitivement l'indicateur de scroll dès qu'on scroll
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator && window.scrollY > 10) {
            scrollIndicator.style.display = 'none';
        }
    });

    // Animation au scroll pour les sections
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach(item => {
        observer.observe(item);
    });

    document.querySelectorAll('.vision-item, .team-member, .contact-item').forEach(item => {
        item.classList.add('fade-in');
        observer.observe(item);
    });

    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulation d'envoi de formulaire
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Envoi en cours...';
            
            setTimeout(() => {
                submitBtn.textContent = 'Message envoyé !';
                
                // Réinitialiser le formulaire
                contactForm.reset();
                
                // Rétablir le bouton après 3 secondes
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                }, 3000);
            }, 1500);
        });
    }

    // Effet de survol pour les éléments interactifs
    const interactiveElements = document.querySelectorAll('.vision-item, .team-member');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease';
            this.style.transform = 'translateY(-5px)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});