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

const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);