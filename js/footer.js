// Get the current year
const currentYear = new Date().getFullYear();

// Find the footer element
const footerElement = document.querySelector('footer > p');

// Add the year to the footer
if (footerElement) {
    footerElement.innerHTML += ` © ${currentYear}`;
}