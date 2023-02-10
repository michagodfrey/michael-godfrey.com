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

  // STORE SERVICE THE USER CLICKS ON AND OPEN CONTACT PAGE WITH
  // THAT SERVICE AS TOPIC ON FORM
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

// CAROUSEL
let slideIndex = 1;

showLocation(slideIndex);

function plusLoc(n) {
  showLocation(slideIndex += n);
}

function currentLoc(n) {
  showLocation(slideIndex = n);
}

function showLocation(n) {
  const slide = document.getElementsByClassName("carousel-item");
  const dots = document.getElementsByClassName("dot");
  if (n > slide.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slide.length}
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slide[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
