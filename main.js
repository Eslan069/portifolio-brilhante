let themeToggle = document.getElementById('themeToggle');
let menuToggle = document.querySelector('.menuToggle');

themeToggle.addEventListener('click', function () {
    let currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme = (currentTheme === 'dark') ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
});

menuToggle.addEventListener('click', function () {
    let openMenu = document.documentElement.getAttribute('data-menu');
    let stateMenu = (openMenu === 'open') ? 'close' : 'open';
    document.documentElement.setAttribute('data-menu', stateMenu);
});