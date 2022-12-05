  $(function () {

    // MENU
    $('.nav-link').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    // AOS ANIMATION
    AOS.init({
      disable: 'mobile',
      duration: 800,
      anchorPlacement: 'center-bottom'
    });


    // SMOOTH SCROLL
    $(function() {
      $('.nav-link').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
          }, 1000);
            event.preventDefault();
      });
    });

  });

  // STORE SERVICE USER CLICKS ON AND OPEN CONTACT PAGE WITH SERVICE AS TOPIC ON FORM
  let selectedService = "";

  // reset service when home or about page loads
  function resetService() {
    selectedService = localStorage.setItem("service", "default");
  }

  // set selectedService to local storage and open contact page
  function getService(service) {
    selectedService = localStorage.setItem("service", service);
    window.location.href = "contact.html";
  }
