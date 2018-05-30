$(window).ready(function() {

    if ($(window).width() <= 992) {
        $('.social-links').appendTo('.navbar-collapse');
    }

    $(window).resize(function () {
        if ($(window).width() <= 992) {
            $('.social-links').appendTo('.navbar-collapse');
        } else {
            $('.social-links').appendTo('.navbar-nav');
        }
    });


    $('.slider').slick({
        arrows: true,
        slidesToShow:3,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        prevArrow: '<div class="arrow-prev"></div>',
        nextArrow: '<div class="arrow-next"></div>',
        responsive: [
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1
                }
            }
            ]
    });

});