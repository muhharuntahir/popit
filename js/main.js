const menuToggle = document.querySelector(".menu-toggle");
const navBar = document.querySelector('.header__menu ul');

menuToggle.addEventListener('click', function (){
    navBar.classList.toggle('slide-menu');
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("hero__wrapper");
    if (n > slides.length)
    {
        slideIndex = 1;
    }
    if (n < 1)
    {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}