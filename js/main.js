document.addEventListener('DOMContentLoaded', function () {
    var splash = document.getElementById('splash');
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (splash) {
        var hasSeenSplash = sessionStorage.getItem('hasSeenSplash');

        if (hasSeenSplash || prefersReducedMotion) {
            splash.style.display = 'none';
            if (splash.parentNode) {
                splash.parentNode.removeChild(splash);
            }
        } else {
            sessionStorage.setItem('hasSeenSplash', 'true');
            setTimeout(function () {
                splash.classList.add('hidden');
                setTimeout(function () {
                    if (splash && splash.parentNode) {
                        splash.parentNode.removeChild(splash);
                    }
                }, 1000);
            }, 1900);
        }
    }

    var burger = document.querySelector('.burger-menu');
    var sideMenu = document.getElementById('side-menu');

    if (burger && sideMenu) {
        burger.addEventListener('click', function () {
            var isOpen = sideMenu.classList.contains('open');
            sideMenu.classList.toggle('open', !isOpen);
            sideMenu.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
            burger.classList.toggle('open', !isOpen);
        });
    }

    var menuToggle = document.querySelector('.menu-toggle');
    var nav = document.querySelector('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function () {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    var header = document.querySelector('header');
    var isHomePage = document.body.classList.contains('home-page');

    function handleHeaderOnScroll() {
        if (!header) {
            return;
        }

        if (isHomePage) {
            header.classList.remove('scrolled');
            return;
        }

        header.classList.toggle('scrolled', window.scrollY > 50);
    }

    handleHeaderOnScroll();
    window.addEventListener('scroll', handleHeaderOnScroll, { passive: true });

    var revealItems = document.querySelectorAll('.fade-in-up');

    document.querySelectorAll('.stagger-group').forEach(function (group) {
        var groupItems = group.querySelectorAll('.fade-in-up');
        groupItems.forEach(function (item, index) {
            item.style.transitionDelay = (index * 0.14).toFixed(2) + 's';
        });
    });
function revealAgenceHighlights(scope) {
    var root = scope || document;

    root.querySelectorAll(
        '.agence-approche-title .agence-highlight-dynamic, .agence-equipe-title .agence-highlight-dynamic'
    ).forEach(function (highlight) {
        highlight.classList.add('is-revealed');
    });
}

if (prefersReducedMotion) {
    revealItems.forEach(function (item) {
        item.classList.add('visible');
    });

    revealAgenceHighlights(document);
} else if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealAgenceHighlights(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.12
    });

    revealItems.forEach(function (item) {
        observer.observe(item);
    });


} else {
    revealItems.forEach(function (item) {
        item.classList.add('visible');
    });

    revealAgenceHighlights(document);
}

    document.querySelectorAll('.vision-item, .team-member').forEach(function (element) {
        element.addEventListener('mouseenter', function () {
            element.style.transition = 'transform 0.3s ease';
            element.style.transform = 'translateY(-5px)';
        });

        element.addEventListener('mouseleave', function () {
            element.style.transform = 'translateY(0)';
        });
    });

    var contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            var submitBtn = contactForm.querySelector('button[type="submit"]');
            if (!submitBtn) {
                return;
            }

            var originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Envoi en cours...';

            setTimeout(function () {
                submitBtn.textContent = 'Message envoye !';
                contactForm.reset();

                setTimeout(function () {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                }, 3000);
            }, 1500);
        });
    }

        var studyTitle = document.getElementById('hp-study-title');
    var studyContent = document.getElementById('hp-study-content');
    var studyPrev = document.getElementById('hp-study-prev');
    var studyNext = document.getElementById('hp-study-next');

    if (studyTitle && studyContent && studyNext && studyPrev) {
        var savoirFaireItems = [
            {
                menuTitle: "ETUDES DE FAISABILITE",
                titleHtml: "<span class=\"highlight-yellow-dynamic\"><span class=\"hp-title-initial\">É</span>tude de faisabilité</span>",
                paragraphs: [
                    "L'étude de faisabilité vérifie de façon réglementaire, technique et financière l'ensemble des possibilités constructives que permet l'assiette foncière déterminée pour le projet. L'ensemble de ces analyses permettront à FAAB Architecte de poser les intentions urbaines et architecturales au regard du contexte et de l'environnement du site, ainsi que de réaliser les premières esquisses de projet.",
                    "Cette phase est la base de tout type de projets. Elle constituera la première étape avant la conception de votre projet.",
                    "Notre objectif principal est le respect de votre enveloppe financière ainsi que l'anticipation de l'ensemble des contraintes éventuelles.",
                    "FAAB Architecte vous accompagne dans l'intégralité de vos projets de construction neuve, de transformation, rénovation ou de réhabilitation, de l'idée à la réalisation."
                ]
            },
            {
                menuTitle: "ETUDE ARCHITECTURALE ET URBAINE",
                titleHtml: "<span class=\"highlight-yellow-dynamic\"><span class=\"hp-title-initial\">É</span>tude architecturale et urbaine</span>",
                paragraphs: [
                    "Les études de projet sont les étapes clés de la conception où FAAB Architecte transforme l'étude de faisabilité en un véritable projet, créatif, pérenne, réaliste et économiquement viable.",
                    "La conception détermine les fondements et l'orientation du projet, c'est-à-dire le parti-pris architectural, urbain et environnemental inhérent à la fonctionnalité et à l'usage, la réponse aux besoins des usagers, l'esthétique du bâtiment ainsi que sa méthode constructive, l'orchestration de la lumière ainsi que de la spatialité.",
                    "La définition du projet se précise à chaque stade, afin de le rendre cohérent, adapté, élégant et performant.",
                    "FAAB Architecte produit l'ensemble des plans et pièces permettant notamment la constitution de dossiers rigoureux de demande d'autorisations administratives à l'instar des permis de construire ou d'aménager."
                ]
            },
            {
                menuTitle: "EXECUTION",
                titleHtml: "<span class=\"highlight-yellow-dynamic\"><span class=\"hp-title-initial\">E</span>xécution</span>",
                paragraphs: [
                    "La phase d'exécution correspond à la mise en œuvre du projet sur le chantier. Elle consiste à traduire les plans validés en réalisation effective, dans le respect des délais, du budget, des contraintes notamment de site et des exigences de qualité.",
                    "FAAB Architecte assure la direction des travaux par la conduite du chantier ainsi que la coordination et le pilotage des entreprises, le suivi des travaux et le contrôle de la conformité des ouvrages.",
                    "Notre rôle est de vous accompagner jusqu'à la livraison et au parfait achèvement, dans le cadre d'un chantier vertueux, en veillant scrupuleusement à la maîtrise des délais, des coûts et de la qualité, à l'exécution fine de l'ouvrage jusqu'à la précision des détails techniques et constructifs, à l'application des normes en vigueur et en anticipant les aléas."
                ]
            },
            {
                menuTitle: "ASSISTANCE A MAITRISE D'OUVRAGE",
                titleHtml: "<span class=\"highlight-yellow-dynamic\"><span class=\"hp-title-initial\">A</span>ssistance à maîtrise d'ouvrage</span>",
                paragraphs: [
                    "FAAB Architecte propose une mission d'accompagnement stratégique global destinée à définir les besoins et usages, orienter la stratégie, clarifier les enjeux, piloter et budgétiser son projet.",
                    "Dès la phase de diagnostic et de faisabilité, FAAB Architecte propose d'accompagner en qualité de conseil indépendant l'ensemble des porteurs de projets de construction neuve, de réhabilitation et de rénovation.",
                    "Cette démarche partenariale permet à nos clients d'établir leur cahier des charges au regard de leurs enjeux et objectifs, afin de pouvoir faire réaliser leur projet clé en main avec un scénario clair, précis et cohérent au regard de leurs usages.",
                    "Notre approche débute par l'identification des besoins, l'analyse de l'environnement et la conceptualisation du programme, ensuite nous détaillons l'enveloppe financière permettant la bonne réalisation du projet. Enfin nous suivons l'intégralité des étapes administratives et exécutives de la construction auprès de vous.",
                    "FAAB Architecte en qualité de véritable partenaire garantit la transparence des échanges, un projet maîtrisé, réaliste, viable économiquement et conforme aux attentes."
                ]
            },
            {
                menuTitle: "AUDITS & EXPERTISE",
                titleHtml: "<span class=\"highlight-yellow-dynamic\"><span class=\"hp-title-initial\">A</span>udits & expertise</span>",
                paragraphs: [
                    "FAAB Architecte intervient en qualité d'expert pour la réalisation de diagnostics pluri ou monodisciplinaires : programmatique, spatial, bioclimatique, technique et constructif.",
                    "Notre démarche vise à analyser les problématiques que vous rencontrez notamment avec votre bien, ou en tant que tiers, afin de vous prodiguer les conseils et apports nécessaires à la résorption de vos questionnements ou événements nuisibles."
                ]
            }
        ];

        var studyIndex = 0;
        var isAnimating = false;
        var studyPanel = studyTitle.closest('.hp-study-panel');
        var studyGrid = studyTitle.closest('.hp-study-grid');

        function buildContentHtml(item) {
            return item.paragraphs.map(function (paragraph) {
                return '<p>' + paragraph + '</p>';
            }).join('');
        }

        if (studyPanel) {
            studyPanel.innerHTML =
                '<div class="hp-study-left">' +
                    '<h2 class="hp-study-title" id="hp-study-title">' +
                        '<span class="highlight-yellow-dynamic"><span class="hp-title-initial">N</span>os missions</span>' +
                    '</h2>' +
                    '<nav class="hp-study-menu" aria-label="Nos missions">' +
                        savoirFaireItems.map(function (item, index) {
                            return '<button class="hp-study-mission-link" type="button" data-index="' + index + '">' +
                                '<span class="hp-study-arrow">›</span>' +
                                '<span class="hp-study-mission-label">' + item.menuTitle + '</span>' +
                            '</button>';
                        }).join('') +
                    '</nav>' +
                '</div>' +
                '<div class="hp-study-right">' +
                    '<h3 class="hp-study-current-title" id="hp-study-current-title"></h3>' +
                    '<div class="hp-study-copy" id="hp-study-copy-wrap">' +
                        '<div class="hp-study-copy-content" id="hp-study-content" aria-live="polite"></div>' +
                    '</div>' +
                '</div>';

            studyTitle = document.getElementById('hp-study-title');
            studyContent = document.getElementById('hp-study-content');
        }

        var studyCurrentTitle = document.getElementById('hp-study-current-title');
        var studyMenuLinks = document.querySelectorAll('.hp-study-mission-link');

        function replayStudyTitleHighlight() {
            if (prefersReducedMotion) {
                return;
            }

            document.querySelectorAll('.hp-study .highlight-yellow-dynamic').forEach(function (word) {
                word.classList.remove('is-revealed');
                void word.offsetWidth;
                requestAnimationFrame(function () {
                    word.classList.add('is-revealed');
                });
            });
        }

        function updateActiveMission(index) {
            studyMenuLinks.forEach(function (link) {
                var isActive = parseInt(link.getAttribute('data-index'), 10) === index;
                link.classList.toggle('is-active', isActive);

                if (isActive) {
                    link.setAttribute('aria-current', 'true');
                } else {
                    link.removeAttribute('aria-current');
                }
            });
        }

        function renderStudyItem(index) {
            var item = savoirFaireItems[index];

            if (!item || !studyCurrentTitle || !studyContent) {
                return;
            }

            studyCurrentTitle.innerHTML = item.titleHtml;
            studyContent.innerHTML = buildContentHtml(item);
            updateActiveMission(index);

            if (studyPrev && studyNext) {
                studyPrev.style.display = 'inline-flex';
                studyNext.style.display = 'inline-flex';
            }

            replayStudyTitleHighlight();
        }

        function setFixedBandHeight() {
            if (!studyGrid || !studyPanel || !studyCurrentTitle || !studyContent) {
                return;
            }

            var originalTitle = studyCurrentTitle.innerHTML;
            var originalContent = studyContent.innerHTML;
            var originalVisibility = studyPanel.style.visibility;
            var originalTransition = studyPanel.style.transition;

            studyGrid.style.setProperty('--hp-study-band-height', 'auto');
            studyPanel.style.visibility = 'hidden';
            studyPanel.style.transition = 'none';

            var maxPanelHeight = 0;

            savoirFaireItems.forEach(function (item) {
                studyCurrentTitle.innerHTML = item.titleHtml;
                studyContent.innerHTML = buildContentHtml(item);
                maxPanelHeight = Math.max(maxPanelHeight, studyPanel.scrollHeight);
            });

            studyCurrentTitle.innerHTML = originalTitle;
            studyContent.innerHTML = originalContent;
            studyPanel.style.visibility = originalVisibility;
            studyPanel.style.transition = originalTransition;

            var gridStyles = window.getComputedStyle(studyGrid);
            var paddingTop = parseFloat(gridStyles.paddingTop) || 0;
            var paddingBottom = parseFloat(gridStyles.paddingBottom) || 0;
            var safeHeight = Math.ceil(maxPanelHeight + paddingTop + paddingBottom + 8);

            studyGrid.style.setProperty('--hp-study-band-height', safeHeight + 'px');
            replayStudyTitleHighlight();
        }

        function goToStudyItem(targetIndex) {
            if (isAnimating || targetIndex === studyIndex) {
                return;
            }

            if (targetIndex < 0) {
                targetIndex = savoirFaireItems.length - 1;
            }

            if (targetIndex >= savoirFaireItems.length) {
                targetIndex = 0;
            }

            if (prefersReducedMotion) {
                studyIndex = targetIndex;
                renderStudyItem(studyIndex);
                return;
            }

            isAnimating = true;

            if (studyCurrentTitle) {
                studyCurrentTitle.classList.add('is-changing');
            }

            studyContent.classList.add('is-changing');

            setTimeout(function () {
                studyIndex = targetIndex;
                renderStudyItem(studyIndex);

                if (studyCurrentTitle) {
                    studyCurrentTitle.classList.remove('is-changing');
                }

                studyContent.classList.remove('is-changing');
                isAnimating = false;
            }, 180);
        }

        studyMenuLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                var targetIndex = parseInt(link.getAttribute('data-index'), 10);

                if (!isNaN(targetIndex)) {
                    goToStudyItem(targetIndex);
                }
            });
        });

        studyPrev.addEventListener('click', function () {
            goToStudyItem(studyIndex - 1);
        });

        studyNext.addEventListener('click', function () {
            goToStudyItem(studyIndex + 1);
        });

        renderStudyItem(0);

        requestAnimationFrame(function () {
            setFixedBandHeight();
        });

        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(function () {
                setFixedBandHeight();
            });
        }

        var studyResizeTimer;

        window.addEventListener('resize', function () {
            clearTimeout(studyResizeTimer);

            studyResizeTimer = setTimeout(function () {
                setFixedBandHeight();
            }, 160);
        });
    }

    // ========== REALISATIONS PAGE LOGIC ==========
    var realisationsGrid = document.getElementById('realisationsGrid');
    var filterBtns = document.querySelectorAll('.filter-btn');
    var projectCatalog = {
        'villa-moderne': {
            title: 'Villa Moderne',
            category: 'habitat',
            city: 'Saint-Cloud',
            department: 'Ile-de-France',
            images: [
                'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1400&q=80',
                'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=80',
                'https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?auto=format&fit=crop&w=1400&q=80'
            ],
            description: 'Cette villa contemporaine articule des volumes epures autour d\'un jardin central pour intensifier la lumiere et la relation interieur-exterieur.',
            description2: 'Materiaux mineraux clairs, menuiseries fines et details bois composent une ecriture architecturale sobre, durable et precise.'
        },
        'centre-commercial': {
            title: 'Centre Commercial',
            category: 'equipements',
            city: 'Soissons',
            department: 'Hauts-de-France',
            images: [
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
                'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80',
                'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80'
            ],
            description: 'Cet equipement organise des parcours clairs et fluides, avec des transparences qui facilitent l\'orientation des usagers.',
            description2: 'Facade rythmee, signaletique integree et espaces intermediaires donnent au lieu une identite lisible et contemporaine.'
        },
        'immeuble-bureaux': {
            title: 'Immeuble Bureaux',
            category: 'tertiaire',
            city: 'Paris',
            department: 'Ile-de-France',
            images: [
                'https://images.unsplash.com/photo-1577760258779-e787a1733016?auto=format&fit=crop&w=1400&q=80',
                'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80',
                'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1400&q=80'
            ],
            description: 'L\'immeuble tertiaire privilegie des plateaux flexibles et une trame rationnelle pour accompagner les nouveaux usages de travail.',
            description2: 'La facade developpe une elegance discrete et reguliere, conciliant image institutionnelle, confort et performance environnementale.'
        },
        'reamenagement-urbain': {
            title: 'Reamenagement Urbain',
            category: 'urbanisme',
            city: 'Compiegne',
            department: 'Hauts-de-France',
            images: [
                'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80',
                'https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=1400&q=80',
                'https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=1400&q=80'
            ],
            description: 'Le projet recompose les continuites d\'espaces publics pour reconnecter les polarites et clarifier les parcours urbains.',
            description2: 'Plantations, sols et sequences d\'usage structurent un cadre de vie plus lisible, plus vegetal et durable.'
        }
    };

    if (realisationsGrid && filterBtns.length > 0) {
        // Realizations data
        var realizations = [
            {
                id: 1,
                title: 'Villa Moderne',
                city: 'Saint-Cloud',
                department: 'Île-de-France',
                category: 'habitat',
                image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop',
                slug: 'villa-moderne',
                link: 'projet.html?slug=villa-moderne'
            },
            {
                id: 2,
                title: 'Centre Commercial',
                city: 'Soissons',
                department: 'Hauts-de-France',
                category: 'equipements',
                image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=600&fit=crop',
                slug: 'centre-commercial',
                link: 'projet.html?slug=centre-commercial'
            },
            {
                id: 3,
                title: 'Immeuble Bureaux',
                city: 'Paris',
                department: 'Île-de-France',
                category: 'tertiaire',
                image: 'immeuble_real.png',
                imageClass: 'card-image-zoom-strong',
                slug: 'immeuble-bureaux',
                link: 'projet.html?slug=immeuble-bureaux'
            },
            {
                id: 4,
                title: 'Réaménagement Urbain',
                city: 'Compiegne',
                department: 'Hauts-de-France',
                category: 'urbanisme',
                image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&h=600&fit=crop',
                slug: 'reamenagement-urbain',
                link: 'projet.html?slug=reamenagement-urbain'
            }
        ];

        // Function to render cards based on filter
        function renderRealisations(filter) {
            if (!realisationsGrid) return;

            var filtered = filter === 'tout' 
                ? realizations 
                : realizations.filter(function (r) { return r.category === filter; });

            realisationsGrid.innerHTML = filtered.map(function (real) {
                var imageClass = real.imageClass ? ' ' + real.imageClass : '';
                return '<a href="' + real.link + '" class="realisation-card">'
                    + '<img class="realisation-card-image' + imageClass + '" src="' + real.image + '" alt="' + real.title + '">'
                    + '<div class="realisation-card-overlay">'
                    + '<p class="realisation-card-text">' + real.city + '</p>'
                    + '<p class="realisation-card-department">' + real.department + '</p>'
                    + '</div>'
                    + '</a>';
            }).join('');
        }

        // Initial render
        renderRealisations('tout');

        // Filter button event listeners
        filterBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                filterBtns.forEach(function (b) { b.classList.remove('active'); });
                btn.classList.add('active');
                
                var filter = btn.getAttribute('data-filter');
                renderRealisations(filter);
            });
        });
    }

    // ========== PROJECT PAGE LOGIC ==========
    var projectSection = document.getElementById('projectPageContent');
    var projectTitle = document.getElementById('projectTitle');
    var projectLocation = document.getElementById('projectLocation');
    var projectDescription = document.getElementById('projectDescription');
    var projectDescription2 = document.getElementById('projectDescription2');
    var projectImage = document.getElementById('projectCarouselImage');
    var projectPrev = document.getElementById('projectPrev');
    var projectNext = document.getElementById('projectNext');
    var projectDots = document.getElementById('projectDots');

    if (projectSection && projectImage && projectPrev && projectNext && projectDots) {
        var params = new URLSearchParams(window.location.search);
        var projectSlug = params.get('slug') || 'villa-moderne';
        var projectData = projectCatalog[projectSlug] || projectCatalog['villa-moderne'];
        var carouselIndex = 0;

        if (projectTitle) {
            projectTitle.textContent = projectData.title;
        }

        if (projectLocation) {
            projectLocation.textContent = projectData.city + ' - ' + projectData.department;
        }

        if (projectDescription) {
            projectDescription.textContent = projectData.description;
        }

        if (projectDescription2) {
            projectDescription2.textContent = projectData.description2;
        }

        function renderProjectImage(index) {
            if (!projectData.images || !projectData.images.length) {
                return;
            }

            var safeIndex = (index + projectData.images.length) % projectData.images.length;
            carouselIndex = safeIndex;
            projectImage.src = projectData.images[safeIndex];
            projectImage.alt = projectData.title + ' - vue ' + (safeIndex + 1);

            var dots = projectDots.querySelectorAll('.project-dot');
            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle('active', dotIndex === safeIndex);
            });
        }

        function buildDots() {
            projectDots.innerHTML = projectData.images.map(function (_, index) {
                return '<button class="project-dot' + (index === 0 ? ' active' : '') + '" data-index="' + index + '" aria-label="Aller a l\'image ' + (index + 1) + '"></button>';
            }).join('');

            projectDots.querySelectorAll('.project-dot').forEach(function (dot) {
                dot.addEventListener('click', function () {
                    var targetIndex = parseInt(dot.getAttribute('data-index'), 10);
                    renderProjectImage(targetIndex);
                });
            });
        }

        buildDots();
        renderProjectImage(0);

        projectPrev.addEventListener('click', function () {
            renderProjectImage(carouselIndex - 1);
        });

        projectNext.addEventListener('click', function () {
            renderProjectImage(carouselIndex + 1);
        });
    }
});
