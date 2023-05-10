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
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

const dotsContainer = document.querySelector(".dot-group");
const dots = document.querySelectorAll(".dot")

let slideIndex = 0;

function setActiveDot(index) {
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  dots[index].classList.add("active")
}

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;

  if (slideIndex < 2) {
    slideIndex++;
    setActiveDot(slideIndex);
  }
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;

  if (slideIndex > 0) {
    slideIndex--;
    setActiveDot(slideIndex);
  }
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft = slideWidth * index;
    slideIndex = index;
    setActiveDot(slideIndex);
  });
});
