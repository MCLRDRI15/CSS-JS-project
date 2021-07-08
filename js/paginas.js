$(document).ready(function() {

    var principalImage = $('.principalImages').offset().top;
    var descriptions = $('.descriptions').offset().top;

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > principalImage && $(window).scrollTop() < descriptions) {
            $('#one').addClass('activo');
        } else {
            $('#one').removeClass('activo');
        }
    });

    var teamSection = $('.teamSection').offset().top;

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > descriptions && $(window).scrollTop() < teamSection) {
            $('#two').addClass('activo');
        } else {
            $('#two').removeClass('activo');
        }
    });

    var portafolio = $('.portfolioSection').offset().top;

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > teamSection && $(window).scrollTop() < portafolio) {
            $('#three').addClass('activo');
            $('#four').addClass('activo');
        } else {
            $('#three').removeClass('activo');
            $('#four').removeClass('activo');
        }
    });


    var blog = $('.ourBlogSection').offset().top;

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > portafolio && $(window).scrollTop() < blog) {
            $('#five').addClass('activo');
        } else {
            $('#five').removeClass('activo');
        }
    });

    var form = $('.formSection').offset().top;
    var testimonials = $('.testimonial').offset().top;

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > blog && $(window).scrollTop() < testimonials) {
            $('#six').addClass('activo');
        } else {
            $('#six').removeClass('activo');
        }
    });

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > testimonials) {
            $('#seven').addClass('activo');
        } else {
            $('#seven').removeClass('activo');
        }
    });

});