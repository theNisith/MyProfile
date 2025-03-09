document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Typing effect for header text
    if(document.querySelector('.typing-text')) {
        new Typed('.typing-text', {
            strings: ['Developer', 'Designer', 'Problem Solver', 'Creator'],
            typeSpeed: 70,
            backSpeed: 40,
            backDelay: 1500,
            loop: true
        });
    }

    // Skill bars animation
    const skillBars = document.querySelectorAll('.skill-progress');
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const value = bar.getAttribute('data-value');
            bar.style.width = value + '%';
        });
    }
    
    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    if(backToTopButton) {
        window.addEventListener('scroll', () => {
            if(window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
    
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Detect when sections enter viewport to trigger animations
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                // If this is the skills section, animate the skill bars
                if(entry.target.id === 'skills') {
                    animateSkillBars();
                }
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
        // Add initial class for CSS transitions
        section.classList.add('section-animated');
    });

    // Project hover effects
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('mouseenter', function() {
            this.classList.add('project-hover');
        });
        project.addEventListener('mouseleave', function() {
            this.classList.remove('project-hover');
        });
    });

    // Parallax effect for header
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        if(header && scrollPosition < header.offsetHeight) {
            header.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
    });
});

// Add tilt effect to project cards
if(typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll(".project"), {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.2
    });
}