window.alert('Hi');
window.prompt('What your name');

let checkbox = document.querySelector('input[name=theme]');
checkbox.addEventListener('change',function(){
    if(this.checked){
        document.documentElement.setAttribute('data-theme','dark');
    }else{
        document.documentElement.setAttribute('data-theme','light');
    }
})

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("#Menu");

hamburger.addEventListener("click", () =>
nav.classList.toggle("active"));