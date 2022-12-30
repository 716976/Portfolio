const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const github = document.getElementById('github');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');

    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '1s';

    } else {
        body.style.background = '#262626';
        body.style.color = 'white';
        body.style.transition = '1s';
        github.style.background = 'white'; 
        github.style.padding = '0'; 
        github.style.height = '30px';   
    }
});

