/***********************************************************
//                   TABLE OF CONTENTS
***********************************************************/
/*
    PAGE_1. NAVIGATION
*/

/***********************************************************
//                PAGE_1 - NAVIGATION
***********************************************************/

// NAVIGATION LOGO SCROLL TOP
$('.ns-header_logo').on('click', function(e) {
  e.preventDefault();
  $('.ns-header_nav-toggle').removeClass('ns-header--open');
  $('.ns-header_menu').removeClass('ns-header--collapse');
  $('html, body').animate({
    scrollTop: 0
  }, 750, 'easeInOutQuad')
});
// LINKS TO ANCHORS
$('a[href^="#"]').on('click', function(event) {

  var $target = $(this.getAttribute('href'));

  if($target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: $target.offset().top
    }, 750, 'easeInOutQuad');
  }
});

// TOGGLE HAMBURGER & COLLAPSE NAV
$('.ns-header_nav-toggle').on('click', function() {
  $(this).toggleClass('ns-header--open');
  $('.ns-header_menu').toggleClass('ns-header--collapse');
});
// REMOVE X & COLLAPSE NAV ON ON CLICK
$('.ns-header_menu a').on('click', function() {
  $('.ns-header_nav-toggle').removeClass('ns-header--open');
  $('.ns-header_menu').removeClass('ns-header--collapse');
});

// SHOW/HIDE NAV

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('show-nav').addClass('ns-header--hide');
        $('.ns-header_nav-toggle').removeClass('ns-header--open');
        $('.ns-header_menu').removeClass('ns-header--collapse');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('ns-header--hide').addClass('show-nav');
        }
    }

    lastScrollTop = st;
}
