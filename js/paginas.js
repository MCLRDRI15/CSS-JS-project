$(document).ready(function() {

    var principalImage = $('.principalimages').offset().top;
    var descriptions = $('.descriptions').offset().top;

    $(window).on('scroll', () => {
        if ($(window).scrollTop() > principalImage && $(window).scrollTop() < descriptions) {
            $('#one').addClass('actived');
        } else {
            $('#one').removeClass('actived');
        }
    });

    var teamSection = $('.team-section').offset().top;

    $(window).on('scroll', () => {
        if ($(window).scrollTop() > descriptions && $(window).scrollTop() < teamSection) {
            $('#two').addClass('actived');
        } else {
            $('#two').removeClass('actived');
        }
    });

    var portafolio = $('.portfolio-section').offset().top;

    $(window).on('scroll', () => {
        if ($(window).scrollTop() > teamSection && $(window).scrollTop() < portafolio) {
            $('#three').addClass('actived');
            $('#four').addClass('actived');
        } else {
            $('#three').removeClass('actived');
            $('#four').removeClass('actived');
        }
    });


    var blog = $('.ourblogsection').offset().top;

    $(window).on('scroll', () => {
        if ($(window).scrollTop() > portafolio && $(window).scrollTop() < blog) {
            $('#five').addClass('actived');
        } else {
            $('#five').removeClass('actived');
        }
    });

    var form = $('.form-section').offset().top;
    var testimonials = $('.testimonial-section').offset().top;

    $(window).on('scroll', () => {
        if ($(window).scrollTop() > blog && $(window).scrollTop() < testimonials) {
            $('#six').addClass('actived');
        } else {
            $('#six').removeClass('actived');
        }
    });

    $(window).on('scroll', () => {
        if ($(window).scrollTop() > testimonials) {
            $('#seven').addClass('actived');
        } else {
            $('#seven').removeClass('actived');
        }
    });

});