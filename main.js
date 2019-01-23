let sections = $('#home, #about, #portfolio');
let contactSection = $('#contact');
let mainFooter = $('.main-footer');
let winHeight;
let footerHeight;
let nav = $('nav');
let sectionId;
let sectionPosition;
let fromTop;
let mainHeader = $('.main-header');

// Zadavanje minimalne visine sekcijama
setSectionHeight();
$(window).on('resize', setSectionHeight);

function setSectionHeight() {
  winHeight = $(window).height();
  footerHeight = mainFooter.outerHeight();
  sections.css('min-height', winHeight);
  contactSection.css('min-height', winHeight - footerHeight);
}

//Navigation
$('.menu-btn').on('click',function (e) {
  e.stopPropagation();
  nav.toggleClass('open');
});

$(window).on('click',function () {
  nav.removeClass('open');
});

//Smooth scroll
$('nav a, .logo-holder a').on('click',function (e) {
  e.preventDefault();
  sectionId = $(this).attr('href');
  sectionPosition = $(sectionId).offset().top;
  $('html, body').animate({
    scrollTop : sectionPosition
  },1000);
});

//Skupljanje header-a na scroll
$(window).on('scroll',function () {
  fromTop = $(window).scrollTop();
  if (fromTop > 150) {
    mainHeader.addClass('tiny-header');
  }else {
    mainHeader.removeClass('tiny-header');
  }

  // Parallax
  $('#home').css({
    backgroundPosition : 'center -' + fromTop/3 + 'px'
  })
  $('#home h2').css({
    opacity : 15/fromTop
  });
});

//Gallery
$(document).ready(function() {
  $('.gallery-item').magnificPopup({
    delegate: 'a',
    type:'image',
    gallery:{
    enabled:true
  }
});
});