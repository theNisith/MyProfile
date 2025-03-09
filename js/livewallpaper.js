/**
 * Live Wallpaper Effect with Particles.js
 */
document.addEventListener('DOMContentLoaded', function() {
    initLiveWallpaper();
});

// Main initialization function
function initLiveWallpaper() {
    // Initialize particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#5d4037" },  // Chocolate brown color
                shape: {
                    type: "circle",
                    stroke: { width: 0, color: "#3a1c10" }
                },
                opacity: { value: 0.7, random: true },
                size: { value: 5, random: true },
                line_linked: { enable: true, distance: 150, color: "#5d4037", opacity: 0.5, width: 1.2 },
                move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out", bounce: false }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "grab" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    grab: { distance: 140, line_linked: { opacity: 1 } },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });

        // Make particles responsive to hover
        enableParticlesHoverEffect();
    }
}

// Enable hover effect for particles
function enableParticlesHoverEffect() {
    const particlesContainer = document.getElementById('particles-js');
    if (!particlesContainer) return;

    // Add hover event listeners to the particles container
    particlesContainer.addEventListener('mouseenter', function() {
        this.classList.add('interactive');
        document.body.classList.add('particles-hover');
    });

    particlesContainer.addEventListener('mouseleave', function() {
        this.classList.remove('interactive');
        document.body.classList.remove('particles-hover');
    });
}