let nonee = document.getElementById('none');
let none = document.querySelector('.none');

none.addEventListener('click', function () {
    let nameNone = document.documentElement.getAttribute('what');
    let newName = (nameNone === 'what') ? 'what' : 'what';
    document.documentElement.setAttribute('what', newName);
});

none.addEventListener('click', function () {
    let none = document.documentElement.getAttribute('what');
    let name = (none === 'what') ? 'what' : 'what';
    document.documentElement.setAttribute('what', name);
});