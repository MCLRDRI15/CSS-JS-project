$(document).ready(() => {
  const height = $('.menu').offset().top;

  $(window).on('scroll', () => {
    if ($(window).scrollTop() >= height) {
      $('.menu').addClass('menufixed');
    } else {
      $('.menu').removeClass('menufixed');
      $('.navmenu').removeClass('active');
      $('.hamburguer').removeClass('active');
    }
  });
});

const boxes = document.querySelectorAll('.boxes');
const box = document.querySelectorAll('.box');

box.forEach((bloque, item) => {
  box[item].addEventListener('click', () => {
    boxes.forEach((conts, item) => {
      boxes[item].classList.remove('enable');
    });
    boxes[item].classList.add('enable');
  });
});

window.addEventListener('load', () => {
  new Glider(document.querySelector('.testimonial'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    dots: '.points',
    arrows: {
      prev: '.previus',
      next: '.next',
    },
    responsive: [
      {
        // screens greater than >576px
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          itemWidth: 250,
          duration: 0.25,
        },
      },
    ],
  });
});

const navItem = document.querySelectorAll('.navitem');

navItem.forEach((item, iterator) => {
  navItem[iterator].addEventListener('click', () => {
    navItem.forEach((item, iterator) => {
      navItem[iterator].classList.remove('actived');
    });
    navItem[iterator].classList.add('actived');
  });
});

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navmenu');

hamburger.addEventListener('click', mobileTabMenu);

function mobileTabMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

const navLink = document.querySelectorAll('.navlink');

navLink.forEach((nav) => nav.addEventListener('click', closeMenu));

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}

const contact = document.querySelector('.button2');

contact.addEventListener('click', visited);

function visited() {
  contact.classList.add('visited');
}
