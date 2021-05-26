
$(document).ready(function () {
    $('.page').fullpage({
        css3: true,
        scrollingSpeed: 1300,
        dragAndMove: true,
        animateAnchor: true,
        autoScrolling: true,
    });
});
$(function () {
    $('.header__burger').click(function () {
        $('.header__burger').toggleClass('active'),
            $('.menu__row').toggleClass('active')
    })
});

$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        centerMode: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: 100,

                }
            },
            {
                breakpoint: 450,
                settings: {
                    centerMode: true,
                    centerPadding: 50,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    centerMode: false,

                }
            }

        ]
    });
});
