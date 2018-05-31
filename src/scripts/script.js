jQuery(document).ready(function( $ ) {
  var screensize = document.documentElement.clientWidth;
  if (screensize  < 768) {
    $('.header-content .social').css('display', 'none');
    $("#mobile-menu-main").mmenu({
       "extensions": [
          "fx-menu-slide",
          "theme-dark"
       ]
    });
  }
});

$('.selectpicker').selectpicker({
  style: 'btn-info',
  size: 4
});