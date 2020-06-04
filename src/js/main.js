// HELPER FUNCTIONS
var debounce = function (func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

$(document).ready(function () {
  var lastScrollTop = $(window).scrollTop();

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
    
    $('body').css({ 'padding-top': paddingTop + 'px' });
  };

  var changeSiteHeaderPosition = function (evt) {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > lastScrollTop){
      // downscroll code
      elSiteHeader.css({ 'margin-top': '-' + $('.sitenav__top').outerHeight() + 'px' });
    } else {
      // upscroll code
      resetSiteHeaderPosition();
    }
    lastScrollTop = scrollTop;
  };

  var resetSiteHeaderPosition = function () {
    elSiteHeader.css({ 'margin-top': '0' });
  };

  var addOnWindowScroll = function () {
    $(window).on('scroll', debounce(changeSiteHeaderPosition, 200, true));
  };

  var removeOnWindowScroll = function () {
    resetSiteHeaderPosition();
    $(window).off('scroll', changeSiteHeaderPosition);
  };

  var manageSiteHeaderOnWindowScroll = function () {
    if ($(window).outerWidth() >= 768) {
      addOnWindowScroll();
    } else {
      removeOnWindowScroll();
    }
  };

  // GLOBAL
  setBodyPaddingTop();
  manageSiteHeaderOnWindowScroll();
  window.addEventListener('resize', setBodyPaddingTop);
  window.addEventListener('resize', manageSiteHeaderOnWindowScroll);


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