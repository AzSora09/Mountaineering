$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if ($(window).scrollTop() > 400) {
        $("#navEl").addClass("scrolldown fixed-top mt-2 mx-auto")
    }
    else if ($(window).scrollTop() < 400) {
        $("#navEl").removeClass("scrolldown fixed-top mt-2 mx-auto")
    }
    else { 
    }
})