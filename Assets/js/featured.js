{
  /* <script> */
}

$(document).ready(function () {
  $(".SlickCarousel").slick({
    rtl: false, // If RTL Make it true & .slick-slide{float:right;}
    autoplay: true,
    autoplaySpeed: 900, //  Slide Delay
    speed: 700, // Transition Speed
    slidesToShow: 3, // Number Of Carousel
    slidesToScroll: 1, // Slide To Move
    pauseOnHover: false,
    appendArrows: $(".Container .Head .Arrows"), // Class For Arrows Buttons
    prevArrow: '<span class="Slick-Prev"></span>',
    nextArrow: '<span class="Slick-Next"></span>',
    easing: "linear",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// </script>
