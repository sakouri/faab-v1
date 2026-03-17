// Effet surlignage progressif séquentiel sur deux portions du hero (corrigé)
document.addEventListener('DOMContentLoaded', function() {
    var h1 = document.getElementById('highlight-rose-1');
    var h2 = document.getElementById('highlight-rose-2');
    if (h1 && h2) {
        h1.classList.remove('animate');
        h2.classList.remove('animate');
        void h1.offsetWidth; void h2.offsetWidth;
        setTimeout(function() {
            h1.classList.add('animate');
            setTimeout(function() {
                h2.classList.add('animate');
            }, 1200);
        }, 200);
    }
});
// Effet surlignage progressif sur la phrase clé du hero
document.addEventListener('DOMContentLoaded', function() {
    var highlight = document.querySelector('.highlight-rose');
    if (highlight) {
        // Force le repaint pour garantir l'animation
        highlight.classList.remove('animate');
        void highlight.offsetWidth;
        setTimeout(function() {
            highlight.classList.add('animate');
        }, 200);
    }
});
// Ajoute l'effet de surlignage progressif sur la phrase clé du hero
document.addEventListener('DOMContentLoaded', function() {
    var highlight = document.querySelector('.highlight-rose');
    if (highlight) {
        setTimeout(function() {
            highlight.classList.add('animate');
        }, 350);
    }
});
// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
        // Menu latéral burger
        const burger = document.querySelector('.burger-menu');
        const sideMenu = document.getElementById('side-menu');

        if (burger && sideMenu) {
            burger.addEventListener('click', function() {
                const isOpen = sideMenu.classList.contains('open');
                if (isOpen) {
                    sideMenu.classList.remove('open');
                    sideMenu.setAttribute('aria-hidden', 'true');
                    burger.classList.remove('open');
                } else {
                    sideMenu.classList.add('open');
                    sideMenu.setAttribute('aria-hidden', 'false');
                    burger.classList.add('open');
                }
            });
        }
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
// Effet surlignage progressif séquentiel sur deux portions du hero
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var h1 = document.getElementById('highlight-rose-1');
    var h2 = document.getElementById('highlight-rose-2');
    if (h1 && h2) {
      h1.classList.remove('animate');
      h2.classList.remove('animate');
      void h1.offsetWidth; void h2.offsetWidth;
      setTimeout(function() {
        h1.classList.add('animate');
        setTimeout(function() {
          h2.classList.add('animate');
        }, 1200);
      }, 200);
    }
  });
})();

// ====== Carrousel hero (accueil) ======
(function () {
    document.addEventListener('DOMContentLoaded', function () {
        var slides = document.querySelectorAll('.carousel-slide');
        var dots   = document.querySelectorAll('.carousel-dot');
        var prevBtn = document.querySelector('.carousel-prev');
        var nextBtn = document.querySelector('.carousel-next');
        if (!slides.length) return;

        var current = 0;
        var timer = null;
        var transitionTimer = null;
        var isTransitioning = false;
        var fadeDuration = 1200;

        slides.forEach(function (slide, index) {
            if (slide.classList.contains('active')) {
                current = index;
            }

            var image = slide.querySelector('img');
            if (image && image.getAttribute('src')) {
                var preloadImage = new Image();
                preloadImage.src = image.getAttribute('src');
            }
        });

        function setActiveDot(index) {
            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle('active', dotIndex === index);
            });
        }

        function goTo(index) {
            index = (index + slides.length) % slides.length;

            if (index === current || isTransitioning) {
                return;
            }

            var outgoing = slides[current];
            var incoming = slides[index];

            isTransitioning = true;
            setActiveDot(index);

            clearTimeout(transitionTimer);

            incoming.classList.remove('active');
            incoming.style.zIndex = '3';
            outgoing.style.zIndex = '2';

            void incoming.offsetWidth;
            incoming.classList.add('active');

            transitionTimer = setTimeout(function () {
                outgoing.classList.remove('active');
                outgoing.style.zIndex = '';
                incoming.style.zIndex = '';
                current = index;
                isTransitioning = false;
            }, fadeDuration + 50);
        }

        function startAuto() {
            clearInterval(timer);
            timer = setInterval(function () {
                goTo(current + 1);
            }, 4400);
        }

        function resetTimer() {
            startAuto();
        }

        function bindCarouselControl(button, step) {
            if (!button) return;
            var lastPointerUpAt = 0;

            function handleActivate(event) {
                if (event.type === 'click' && Date.now() - lastPointerUpAt < 350) {
                    return;
                }
                if (event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') {
                    return;
                }
                if (event.type === 'pointerup') {
                    lastPointerUpAt = Date.now();
                }
                event.preventDefault();
                goTo(current + step);
                resetTimer();
            }

            button.addEventListener('click', handleActivate);
            button.addEventListener('pointerup', handleActivate);
            button.addEventListener('keydown', handleActivate);
        }

        bindCarouselControl(prevBtn, -1);
        bindCarouselControl(nextBtn, 1);

        dots.forEach(function (dot) {
            dot.addEventListener('click', function () {
                goTo(parseInt(this.getAttribute('data-index'), 10));
                resetTimer();
            });
        });

        setActiveDot(current);
        startAuto();
    });
}());
