$('.scrollto').on('click', function(){
    let _this = $(this).attr('href');
    if ( $(_this).length != 0 ) {
        $('html, body').animate({
          scrollTop: $(_this).offset().top
        }, 765);
    }
    return false;
});