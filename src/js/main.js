$(document).ready(function () {
  // SITE-HEADER
  // Site catalog dropdown
  var elSiteHeader = $('.site-header');
  elSiteHeader.find('.site-header__catalog-toggler').on('click', function () {
    elSiteHeader.toggleClass('site-header--with-catalog');
    $('.site-header__catalog').toggleClass('site-header__catalog--open');
  });

  // Move site-header up on scroll down and set to initial state on scroll up on medium and up screens


  // SITENAV
  // Sitenav menu
  var elSitenavMenu = elSiteHeader.find('.sitenav__menu');

  $('.sitenav__menu-toggler').on('click', function () {
    elSitenavMenu.toggleClass('sitenav__menu--open');
  });

  $('.sitenav__menu-close').on('click', function () {
    elSitenavMenu.removeClass('sitenav__menu--open');
  });

  $('.sitenav__dropdown-toggler').on('click', function (evt) {
    evt.preventDefault();
    $(this).next().slideToggle();
  })
});