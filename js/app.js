
// Hamburger Menu
let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .container .navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// Swiper JS
var swiper = new Swiper(".service-slider", {
    spaceBetween: 20,
    loop: true,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
    }    
});