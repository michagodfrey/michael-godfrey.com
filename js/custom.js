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

// CAROUSEL
let slideIndex = 1;

showLocation(slideIndex);

function plusLoc(n) {
  let dir = "";
  n < 1 ? dir = "left" : dir = "right";
  showLocation(slideIndex += n, dir);
}

// function currentLoc(n) {
//   showLocation(slideIndex = n);
// }

function showLocation(n, dir) {
  const slide = document.getElementsByClassName("locationSlide");
  // const dots = document.getElementsByClassName("dot");
  if (n > slide.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slide.length}
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace("active", "");
  // }
  if (dir === 'left') {
    slide[slideIndex-1].classList.remove("slide-in-right")
    slide[slideIndex-1].classList.add("slide-in-left")
  } else {
    slide[slideIndex-1].classList.remove("slide-in-left")
    slide[slideIndex-1].classList.add("slide-in-right")
  }
  slide[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}
