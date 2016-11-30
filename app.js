$(document).ready(function () {

    $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ['home', 'about', 'products', 'checklist', 'clients', 'contact'],
        sectionsColor: ['#333399', '#f8f8f8', '#FDFEFE', '#E5E7E9', '#F8F9F9', '#333399'],
        navigation: false,
        scrollingSpeed: 1500,
        scrollOverflow: true,
    });




    $('.sli').slick({
        dots: true,
        infinate: true,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "Linear",
        arrows: true
    });
});
