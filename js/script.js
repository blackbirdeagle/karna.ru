/*
* Copyright by Alexander Afanasyev
* E-mail: blackbirdeagle@mail.ru
* Skype: al_sidorenko1
* */

$(document).ready(function() {
    $("#newprodSlider").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            570: {
                items: 2
            },
            600: {
                items: 3
            },
            991: {
                items: 5
            }
        },
        margin: 72,
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        touchDrag: true,
        dots: true,
        autoWidth: false,
        nav: true,
        navText: ['<img src = "/bitrix/templates/.default/images/prev.png" alt = ""/>', '<img src = "/bitrix/templates/.default/images/next.png" alt = ""/>'],
    });

    $("#articles__slider").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            570: {
                items: 2
            },
            600: {
                items: 3
            },
            991: {
                items: 4
            }
        },
        margin: 18,
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        touchDrag: true,
        dots: false,
        autoWidth: false,
        nav: true,
        navText: ['<img src = "/bitrix/templates/.default/images/prev.png" alt = ""/>', '<img src = "/bitrix/templates/.default/images/next.png" alt = ""/>'],
    });
});

function move() {
    var s_w = $('#newprodSlider .owl-dots').width() / 2;
    $('#newprodSlider .owl-dots').css({"margin-left": -s_w + "px"});
}

move();

$(window).resize(function() {
    move();
});

window.onload = function(){
    $( '#slider1' ).lemmonSlider({
        infinite: true
    });
}

$('.menu__description li a').click(function(){
    var block = $(this).attr('block');

    $('.menu__description li a').removeClass('active');
    $(this).addClass('active');
    $('.card__description').fadeOut(200);
    $('#' + block).fadeIn(200);
});

jQuery(function(){
    jQuery(".phone").mask("+7(999) 999-9999");
});

$('.hide__search').click(function(){
    $('.search').fadeOut(200);
});

$('.show__search').click(function(){
    $('.search').fadeIn(200);
});

$('.show__menu').click(function(){
    $('.float__menu').animate({left: 0}, 300);
});

$('.hide__menu').click(function(){
    $('.float__menu').animate({left: -268}, 300);
});

$('.top__menu__wrapper ul li').hover(
    function () {
        $(this).children('ul').show();
    },
    function () {
        $(this).children('ul').hide();
    }
);