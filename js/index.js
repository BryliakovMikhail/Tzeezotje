const swiper = document.querySelector(".swiper");
const swiper1 = document.querySelector(".fotos__swiper");

let mySwiper = new Swiper(swiper, {
  slidesPerView: 1,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let mySwiper1 = new Swiper(swiper1, {
  slidesPerView: 1.9,
  centeredSlides: true,
  loop: true,
  spaceBetween: 30,
  variableWidth: true,

  // навигация
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },

    600: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },

    768: {
      slidesPerView: 1.9,
      spaceBetween: 30,
    },
  },
  autoplay: {
    delay: 6000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },

  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,
});

let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLinks = menu.querySelectorAll(".header__link");

burger.addEventListener(
  "click",

  function () {
    burger.classList.toggle("burger--active");

    menu.classList.toggle("header__nav--active");

    document.body.classList.toggle("stop-scroll");
  }
);

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");

    menu.classList.remove("header__nav--active");

    document.body.classList.remove("stop-scroll");
  });
});
