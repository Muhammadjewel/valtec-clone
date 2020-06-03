$(document).ready(function () {
  // SITE-HEADER
  // Site catalog dropdown
  var elSiteHeader = $('.site-header');
  elSiteHeader.find('.site-header__catalog-toggler').on('click', function () {
    elSiteHeader.toggleClass('site-header--with-catalog');
    $('.site-header__catalog').toggleClass('site-header__catalog--open');
  });

  // Move site-header up on scroll down and set to initial state on scroll up on medium and up screens
  var addSiteHeaderStyleChangeListener = function () {
    $(window).on('DOMMouseScroll mousewheel', function (evt) {
      if(evt.originalEvent.detail > 0 || evt.originalEvent.wheelDelta < 0) {
        // scroll down
        elSiteHeader.css({ 'margin-top': '-' + $('.sitenav__top').outerHeight() + 'px' });
        console.log('Down');
      } else {
        // scroll up
        elSiteHeader.css({ 'margin-top': 0 });
        console.log('Up');
      }
    });
  };

  var removeSiteHeaderStyleChangeListener = function () {
    $(window).off('DOMMouseScroll mousewheel');
  };

  var manageSiteHeaderStyleChangeWidth = function () {
    if ($(window).outerWidth() >= 768) {
      addSiteHeaderStyleChangeListener();
    } else {
      removeSiteHeaderStyleChangeListener();
    }
  };

  $(window).on('resize', manageSiteHeaderStyleChangeWidth);


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

  // Add/remove siteHeaderStyleChangeListener based on mouseenter and mouseleave
  elSitenavMenu.on('mouseenter', removeSiteHeaderStyleChangeListener);
  elSitenavMenu.on('mouseleave', function () {
    if ($(window).outerWidth() >= 768) {
      addSiteHeaderStyleChangeListener();
    }
  });
});