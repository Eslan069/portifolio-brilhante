let button = document.getElementById('themeToggle');

button.addEventListener('click', function () {
    let currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme = (currentTheme === 'dark') ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
});

let menuToggle = document.querySelector('.menuToggle');
let nav = document.querySelector('#menu');

menuToggle.addEventListener('click', function () {
    if (nav.classList.contains('open')) {
        nav.classList.add('open');
    } else {
        nav.classList.add('open');
    }
});