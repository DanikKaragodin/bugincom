
$(document).ready(function () {
    var $menu = $("#header");
    var $menu2 = $(".header");

    $(window).resize(function () {
        if($(window).width() <= 849) return; //ДОБАВИЛ ДЛЯ МЕНЮ *изменил 600 на 849
        if ($(this).scrollTop() > 80) {
            var page_w = ($(window).width() - 1266) / 2;
            $('.header_height').show();
            $menu2.removeClass("default").addClass("active").animate({
                marginLeft: $(window).width() >= 1256 ? page_w : 0,
                marginRight: $(window).width() >= 1256 ? page_w : 0,
                position: 'fixed',
                width: $(window).width() >= 1256 ? '1256px' : "100%"
            }, 100, function () {

            });

        } else if ($(this).scrollTop() <= 80) {
            var page_w = ($(window).width() - 1266) / 2;
            $('.header_height').hide();
            $menu2.removeClass("active").addClass("default").animate({
                marginLeft: '0',
                marginRight: '0',
                marginTop: '0',
                position: 'static',
                width: '100%'
            }, 100, function () {

            });
        }
    });

    $(window).scroll(function () {
        if($(window).width() <= 849) return; //ДОБАВИЛ ДЛЯ МЕНЮ *изменил 600 на 849
        if ($(this).scrollTop() > 80 && $menu2.hasClass("default")) {
            var page_w = ($(window).width() - 1266) / 2;
            $('.header_height').show();
            $menu2.removeClass("default").addClass("active").animate({
                marginLeft: $(window).width() >= 1256 ? page_w : 0,
                marginRight: $(window).width() >= 1256 ? page_w : 0,
                position: 'fixed',
                width: $(window).width() >= 1256 ? '1256px' : "100%"
            }, 500, function () {

            });

        } else if ($(this).scrollTop() <= 80 && $menu2.hasClass("active")) {
            var page_w = ($(window).width() - 1266) / 2;
            $('.header_height').hide();
            $menu2.removeClass("active").addClass("default").animate({
                marginLeft: '0',
                marginRight: '0',
                marginTop: '0',
                position: 'static',
                width: '100%'
            }, 300, function () {

            });
        }

    });

    if($(window).width() <= 849) return; //ДОБАВИЛ ДЛЯ МЕНЮ *изменил 600 на 849
    if ($(this).scrollTop() > 80 && $menu2.hasClass("default")) {
        var page_w = ($(window).width() - 1266) / 2;
        $('.header_height').show();
        $menu2.removeClass("default").addClass("active").animate({
            marginLeft: $(window).width() >= 1256 ? page_w : 0,
            marginRight: $(window).width() >= 1256 ? page_w : 0,
            position: 'fixed',
            width: $(window).width() >= 1256 ? '1256px' : "100%"
        }, 500, function () {
        });
    } else if ($(this).scrollTop() <= 80 && $menu2.hasClass("active")) {
        var page_w = ($(window).width() - 1266) / 2;
        $('.header_height').hide();
        $menu2.removeClass("active").addClass("default").animate({
            marginLeft: '0',
            marginRight: '0',
            marginTop: '0',
            position: 'static',
            width: '100%'
        }, 300, function () {
        });
    }
});
