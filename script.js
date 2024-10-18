document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Close mobile menu when a link is clicked
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.checked = false;
        });
    });

    // Intersection Observer for fade-in effect
    const fadeElems = document.querySelectorAll('.expertise-card, .project-card');
    const appearOptions = {
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fadeElems.forEach(elem => {
        appearOnScroll.observe(elem);
    });

    // Typing effect for hero subtitle
    const heroSubtitle = document.querySelector('.subtitle');
    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            heroSubtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();

    // Active navigation link
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Close mobile menu when a link is clicked
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.checked = false;
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Close mobile menu when a link is clicked
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.checked = false;
        });
    });

    // Intersection Observer for fade-in effect
    const fadeElems = document.querySelectorAll('.expertise-card, .project-card');
    const appearOptions = {
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fadeElems.forEach(elem => {
        appearOnScroll.observe(elem);
    });

    // Typing effect for hero subtitle
    const heroSubtitle = document.querySelector('.subtitle');
    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            heroSubtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();

    // Active navigation link
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });

    // Load progress bars with a delay
    const progressBars = document.querySelectorAll('.progress');

    function loadProgressBars() {
        setTimeout(() => {
            progressBars.forEach((bar) => {
                const width = bar.style.width;
                bar.style.width = width; // Trigger the CSS transition
            });
        }, 500); // Delay for 500ms before starting the animation
    }

    loadProgressBars();
});
