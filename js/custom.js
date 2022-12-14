  $(function () {
    
    // TOGGLE MOBILE MENU
    $("#toggle-menu").click(function () {
      $("#menu").slideToggle("slow");
    });

    // AOS ANIMATION
    AOS.init({
      disable: 'mobile',
      duration: 800,
      anchorPlacement: 'center-bottom'
    });

  });

  // TOGGLE MENU BTN ANIMATION TRIGGER
  const button = document.getElementById("toggle-menu");

  button.addEventListener("click", () => {
    button.ariaExpanded = !JSON.parse(button.ariaExpanded);
  })

  // STORE SERVICE USER CLICKS ON AND OPEN CONTACT PAGE WITH SERVICE AS TOPIC ON FORM
  let selectedService = "";

  function resetService() {
    selectedService = localStorage.setItem("service", "default");
  }

  function getService(service) {
    selectedService = localStorage.setItem("service", service);
    window.location.href = "contact.html";
  }

  // SCROLL TO TOP BUTTON
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    const mybutton = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
