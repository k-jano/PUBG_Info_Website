$(function() {
    $(window).scroll(function(){
        var navH= $('#firstContainer').outerHeight(true);
        console.log(navH);

        var scrollVal = $(this).scrollTop();
        if ( scrollVal > navH ) {
            $('#nav').addClass('sticky');
        } else {
            $('#nav').removeClass('sticky');
        }
    })
});