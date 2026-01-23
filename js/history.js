const onScroll = (elem) => {
    var scroll = $(window).scrollTop()
    var offsetTop = $(elem).offset().top;
    var scrOffset = offsetTop - scroll;

    if(scrOffset <= 550){
        $(elem).addClass("scroll")
    }
    else{}
}

$(window).scroll(function () {
    onScroll("#Card1");
    onScroll("#Card2");
    onScroll("#Card3");
    onScroll("#Card4");
    onScroll("#Card5");
    onScroll("#Card6");
})