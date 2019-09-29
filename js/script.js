$('.scrollto').on('click', function(){
    let _this = $(this).attr('href');
    if ( $(_this).length != 0 ) {
        $('html, body').animate({
          scrollTop: $(_this).offset().top
        }, 765);
    }
    return false;
});



$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});