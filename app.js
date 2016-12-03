

// sectionsColor: ['#333399', '#f8f8f8', '#FDFEFE', '#E5E7E9', '#F8F9F9', '#333399']

$(document).ready(function () {
  var owl = $("#owl-demo");

  owl.owlCarousel({
    navigation: false,
    singleItem: true,
    transitionStyle: "fade",
    autoPlay: 3000
  });

  $(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 500);
          return false;
        }
      }
    });
  });
      $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

});	
