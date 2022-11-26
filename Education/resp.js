burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
Rightnav = document.querySelector('.Rightnav')


burger.addEventListener('click',()=>{
    Rightnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');


})