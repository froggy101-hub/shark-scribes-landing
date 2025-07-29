/*
 * Simple JavaScript to enhance the Shark Scribes landing page.
 * Currently this script toggles the mobile navigation menu when
 * the hamburger icon (nav-toggle-label) is clicked. Additional
 * scripts can be added here as the site evolves.
 */

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Close the menu after clicking a link on mobile
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navToggle.checked) {
                navToggle.checked = false;
            }
        });
    });
});