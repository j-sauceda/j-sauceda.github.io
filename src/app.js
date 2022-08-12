// responsive navBar and logo elements
const menuButton = document.getElementById('menu-button');
const navElements = document.getElementById('nav-list');
const logo = document.getElementById('logo');

menuButton.addEventListener('click', () => {
    navElements.classList.toggle('show');
    logo.classList.toggle('display');
});

// light-dark themes
const switchElement = document.getElementById('theme-button');

switchElement.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})