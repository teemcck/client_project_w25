// Select the navigation bar
const navBarContainer = document.querySelector('.nav-container');
const navBar = document.querySelector('.navigation-bar');

// Add event listeners for hover (mouseenter and mouseleave)
navBar.addEventListener('mouseenter', () => {
    navBarContainer.classList.add('expanded');
    navBar.classList.add('expanded');
});

navBar.addEventListener('mouseleave', () => {
    navBarContainer.classList.remove('expanded');
    navBar.classList.remove('expanded');
});