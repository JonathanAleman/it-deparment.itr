const burguer = document.querySelector('#burguer');
const menu = document.querySelector('#menu');
burguer.addEventListener('click', () =>{
    if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }else{
        menu.classList.add('hidden');
    }
})