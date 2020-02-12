$(document).ready(function() {

    $('.tel-input').inputmask({
        "mask": "+7 (999) 999-99-99"
        , "placeholder": "_"
        , showMaskOnHover: false
        , showMaskOnFocus: true
    });

    $('.header__mobile-menu').click(function(e) {
        e.preventDefault();
        $('.header__menu').toggleClass('header__menu--opened');
    });

    $('.open-modal').click(function(e) {
        e.preventDefault();
        $('body').addClass('modal-opened');
        $('.modal').addClass('modal--opened');
    });

    $('.modal').click(function() {
        $('.modal').removeClass('modal--opened');
        $('body').removeClass('modal-opened');
    });

    $('.modal__block').click(function(e) {
        e.stopPropagation();
    });

    $('.price__tab').click(function(e) {
        $('.price__tab--active').removeClass('price__tab--active');
        $('.price__content--active').removeClass('price__content--active');
        $(this).addClass('price__tab--active');
        var block = $(this).attr('data-block');
        $(block).addClass('price__content--active');
    });

    $('.price__slider').slick({
        arrows: true,
        autoplay: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.why__tab').click(function(e) {
        $('.why__tab--active').removeClass('why__tab--active');
        $('.why__content--active').removeClass('why__content--active');
        $(this).addClass('why__tab--active');
        var block = $(this).attr('data-block');
        $(block).addClass('why__content--active');
    });

    $('.license__text li').click(function() {
        $('.license__text li.license__active').removeClass('license__active');
        $('.license__img-item--active').removeClass('license__img-item--active');
        $(this).addClass('license__active');
        var block = $(this).attr('data-block');
        $(block).addClass('license__img-item--active');
    });

    $('.reviews__slider').slick({
        arrows: true,
        autoplay: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.faq__question').click(function(e) {
        $(this).next().slideToggle();
        $(this).toggleClass('faq__question--opened');
    });

    ymaps.ready(init);
});

function init() {


    var myMap = new ymaps.Map("map", {
        center: [55.662253, 37.890427]
        , zoom: 16
        , controls: ['zoomControl']
    });


    myMap.behaviors.disable('multiTouch');
    myMap.behaviors.disable('scrollZoom');
    var myGeoObjects = [];



    $(".contacts__address address").each(function (e) {
        var latt = $(this).attr("data-lat");
        var longg = $(this).attr("data-lon");
        myGeoObjects[e] = new ymaps.Placemark([latt, longg], {
            clusterCaption: 'Заголовок'
        }, {
            iconLayout: 'default#image'
            , iconImageHref: '/img/mark-map.png'
            , iconImageSize: [113, 122]
            , iconImageOffset: [-53.5, -85]
        });
    });


    var clusterer = new ymaps.Clusterer({
        clusterDisableClickZoom: false
        , clusterOpenBalloonOnClick: false
        , clusterBalloonPanelMaxMapArea: 0
        , clusterBalloonContentLayoutWidth: 300
        , clusterBalloonContentLayoutHeight: 200
        , clusterBalloonPagerSize: 2
        , clusterBalloonPagerVisible: false
    });


    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);



}