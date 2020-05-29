$(document).ready(function () {
  $('.site-header__catalog-toggler').on('click', function () {
    $('.site-header').toggleClass('site-header--with-catalog');
    $('.site-header__catalog').toggleClass('site-header__catalog--open');
  });
});