$(document).ready(() => {
  const principalImage = $('.principalimages').offset().top;
  const descriptions = $('.descriptions').offset().top;

  $(window).on('scroll', () => {
    if (
      $(window).scrollTop() > principalImage &&
      $(window).scrollTop() < descriptions
    ) {
      $('#one').addClass('actived');
    } else {
      $('#one').removeClass('actived');
    }
  });

  const teamSection = $('.team-section').offset().top;

  $(window).on('scroll', () => {
    if (
      $(window).scrollTop() > descriptions &&
      $(window).scrollTop() < genius
    ) {
      $('#two').addClass('actived');
    } else {
      $('#two').removeClass('actived');
    }
  });
  const genius = $('.genius-section').offset().top;

  $(window).on('scroll', () => {
    if (
      $(window).scrollTop() > genius &&
      $(window).scrollTop() < teamSection
    ) {
      $('#three').addClass('actived');
    } else {
      $('#three').removeClass('actived');
    }
  });
  const portafolio = $('.portfolio-section').offset().top;

  $(window).on('scroll', () => {
    if (
      $(window).scrollTop() > teamSection &&
      $(window).scrollTop() < portafolio
    ) {
      $('#four').addClass('actived');
    } else {
      $('#four').removeClass('actived');
    }
  });

  const blog = $('.ourblogsection').offset().top;

  $(window).on('scroll', () => {
    if ($(window).scrollTop() > portafolio && $(window).scrollTop() < blog) {
      $('#five').addClass('actived');
    } else {
      $('#five').removeClass('actived');
    }
  });

  const form = $('.form-section').offset().top;
  const testimonials = $('.testimonial-section').offset().top;

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
