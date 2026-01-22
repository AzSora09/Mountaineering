// Add or Remove class "scrolldown" and other bootstrap classes in navbar according to scroll length
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if ($(window).scrollTop() > 200) {
        $("#navEl").addClass("scrolldown fixed-top mt-2 mx-auto")
    }
    else if ($(window).scrollTop() < 200) {
        $("#navEl").removeClass("scrolldown fixed-top mt-2 mx-auto")
    }
    else { 
    }
})