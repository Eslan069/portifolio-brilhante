/*ar name = window.prompt('What your name');
window.alert('Ola ' + name);
*/
let checkbox = document.querySelector('input[name=theme]');
checkbox.addEventListener('change',function(){
    if(this.checked){
        document.documentElement.setAttribute('data-theme','dark');
    }else{
        document.documentElement.setAttribute('data-theme','light');
    }
})

var hamburger = document.querySelector('.hamburger');
var menu = document.querySelector('#Menu');