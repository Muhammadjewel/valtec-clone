$(document).ready(function () {
  // MOST USED ELEMENTS
  var elSiteHeader = $('.site-header');
  var elSitenavMenu = elSiteHeader.find('.sitenav__menu');

  // FUNCTIONS
  // Set body padding-top
  var setBodyPaddingTop = function () {
    if (elSiteHeader.hasClass('site-header--moved-up')) {
      var paddingTop = elSiteHeader.find('.sitenav__top').outerHeight();
    } else {
      var paddingTop = elSiteHeader.outerHeight();
    }
    console.log(paddingTop);
    $('body').css({ 'padding-top': paddingTop + 'px' });
  };

  // GLOBAL
  setBodyPaddingTop();
  
  window.addEventListener('resize', setBodyPaddingTop, { passive: true });


  // SITE-HEADER
  // Site catalog dropdown
  elSiteHeader.find('.site-header__catalog-toggler').on('click', function () {
    elSiteHeader.toggleClass('site-header--with-catalog');
    $('.site-header__catalog').toggleClass('site-header__catalog--open');
  });

  // Move site-header up on scroll down and set to initial state on scroll up on medium and up screens


  // SITENAV
  // Sitenav menu open/close
  $('.sitenav__menu-toggler').on('click', function () {
    elSitenavMenu.addClass('sitenav__menu--open');
  });

  $('.sitenav__menu-close').on('click', function () {
    elSitenavMenu.removeClass('sitenav__menu--open');
  });

  // Sitenav submenu dropdown
  $('.sitenav__dropdown-toggler').on('click', function (evt) {
    evt.preventDefault();
    $(this).next().slideToggle();
  })
});