$(document).ready(function() {
  var screensize = document.documentElement.clientWidth;
  if (screensize  < 769) {
    $('.header-content .social').css('display', 'none');
    $("#mobile-menu-main").mmenu({
       "extensions": [
          "fx-menu-slide",
          "theme-dark"
       ]
    });
  }
  $('.selectpicker').selectpicker({
    style: 'btn-info',
    size: 4
  });
  window.fbAsyncInit = function() {
    FB.init({
      appId            : '308087493018290',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v3.0'
    });
  };

  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  $('.birthday').bootstrapBirthday({
    widget: {
      wrapper: {
        tag: 'div',
        class: 'row'
      },
      wrapperYear: {
        use: true,
        tag: 'div',
        class: 'col-sm-4 form-group'
      },
      wrapperMonth: {
        use: true,
        tag: 'div',
        class: 'col-sm-4 form-group'
      },
      wrapperDay: {
        use: true,
        tag: 'div',
        class: 'col-sm-4 form-group'
      },
      selectYear: {
        name: 'birthday[year]',
        class: 'form-control'
      },
      selectMonth: {
        name: 'birthday[month]',
        class: 'form-control'
      },
      selectDay: {
        name: 'birthday[day]',
        class: 'form-control'
      }
    }
  })
});
