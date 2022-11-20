const menuToggle = document.querySelector(".menu-toggle");
const navBar = document.querySelector('.header__menu ul');

menuToggle.addEventListener('click', function (){
    navBar.classList.toggle('slide-menu');
});