/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");

if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
};

if(navClose){
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
};
/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav__link");

const linkActive = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}

navLink.forEach(n => n.addEventListener("click", linkActive));


/*=============== SWIPER PROJECTS ===============*/

let swiperProjects = new Swiper(".projects__container", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        }
    },
  });


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {

    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        } else {
            sectionClass.classList.remove('active-link')
        }
    });
};

window.addEventListener('scroll', scrollActive);


/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
};

window.addEventListener('scroll', scrollUp);


/*=============== DARK LIGHT THEME ===============*/ 

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
};

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});


/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
};

window.addEventListener('scroll', scrollHeader);


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
});

sr.reveal('.home__data');
sr.reveal(`.home__info div`, {delay: 600, origin: 'bottom', interval: 100});
sr.reveal(`.skills__content`, {origin: 'left'});
sr.reveal(`.home__title`, {origin: 'left'});
sr.reveal(`.contact__data-title`, {origin: 'left'});
sr.reveal(`.contact__data-info`, {origin: 'right'});
sr.reveal(`.projects__container`, {origin: 'right'});
sr.reveal(`.contact__button`, {origin: 'right'});
