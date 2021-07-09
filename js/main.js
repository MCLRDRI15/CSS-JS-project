$(document).ready( () => {
    var height = $('.menu').offset().top;

    $(window).on('scroll', () => {
        if ($(window).scrollTop() > height) {
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

box.forEach((bloque, i) => {
    box[i].addEventListener('click', () => {
        boxes.forEach((conts, i) => {
            boxes[i].classList.remove('enable');
        });
        boxes[i].classList.add('enable');
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
        responsive: [{
            // screens greater than >576px
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                itemWidth: 250,
                duration: 0.25,
            },
        }, ],
    });
});

const navItem = document.querySelectorAll('.navitem');

navItem.forEach((item, i) => {
    navItem[i].addEventListener('click', () => {

        navItem.forEach((item, i) => {
            navItem[i].classList.remove('actived');
        });
        navItem[i].classList.add('actived');
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