$(document).ready(function () {
  // SITE-HEADER
  $('.site-header__catalog-toggler').on('click', function () {
    $('.site-header').toggleClass('site-header--with-catalog');
    $('.site-header__catalog').toggleClass('site-header__catalog--open');
  });

  // SITENAV
  // Sitenav menu
  var elSitenav = $('.sitenav__menu');
  
  $('.sitenav__menu-toggler').on('click', function () {
    elSitenav.toggleClass('sitenav__menu--open');
  });

  $('.sitenav__menu-close').on('click', function () {
    elSitenav.removeClass('sitenav__menu--open');
  });

  $('.sitenav__dropdown-toggler').on('click', function (evt) {
    evt.preventDefault();
    $(this).next().slideToggle();
  })
});