import "slick-carousel";
export class App {
  init() {
    $(".latest-product-slider").slick({
      dots: false,
      arrows: false,
      slidesToShow: 1,
      dots: true,
    });
    $(".proslider").slick({
      dots: false,
      arrows: true,
      slidesToShow: 3,
      dots: false,
      infinite: true,
      prevArrow: $(".latest-products .slick--prev"),
      nextArrow: $(".latest-products .slick--next"),
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            infinite: false,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            infinite: false,
            arrows: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            infinite: false,
          },
        },
      ],
    });
    $(".helpfull-slider").slick({
      dots: false,
      arrows: true,
      slidesToShow: 2,
      dots: false,
      prevArrow: $(".helpfull-section .slick--prev"),
      nextArrow: $(".helpfull-section .slick--next"),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            infinite: false,
          },
        },
      ],
    });
    $(".interested-slider").slick({
      dots: false,
      arrows: true,
      slidesToShow: 2,
      dots: false,
      prevArrow: $(".interested-section .slick--prev"),
      nextArrow: $(".interested-section .slick--next"),
    });
    $(".slider-mobile-wild").slick({
      dots: false,
      arrows: true,
      slidesToShow: 2,
      dots: false,
      infinite:false,
      prevArrow: $(".wild-life-slider .slick--prev"),
      nextArrow: $(".wild-life-slider .slick--next"),
    });
    $(".review-slider").slick({
      dots: false,
      arrows: false,
      slidesToShow: 3,
      dots: false,
      infinite:false,
      responsive: [
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
    $(".award-slider").slick({
      dots: false,
      arrows: false,
      slidesToShow: 4,
      dots: false,
      centerMode: false,
      centerPadding: '20px',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            centerMode: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            centerMode: true,
          },
        },
      ],
    });
    $(".instagram-section").slick({
      dots: false,
      arrows: false,
      slidesToShow: 5,
      dots: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    });
    $('.main-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      dots:false,
      asNavFor: '.slider-mini',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            dots:true,
          },
        },
      ],
    });
    $('.slider-mini').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.main-slider',
      dots: true,
      arrows: true,
      infinite: false,
      vertical: true,
      focusOnSelect: true,
      prevArrow: $(".pre-order-btn .slick--prev"),
      nextArrow: $(".pre-order-btn .slick--next"),
    });
    $('.other-range-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      infinite:false,
      prevArrow: $(".product-range-section .slick--prev"),
      nextArrow: $(".product-range-section .slick--next"),
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
    $('.related-products-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      infinite: false,
      prevArrow: $(".related-products .slick--prev"),
      nextArrow: $(".related-products .slick--next"),
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
    if (windowWidth < 992) {
      $(".category-slider").slick({
        dots: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      });
      $(".benefits-slider").slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        dots: false,
        centerMode: true,
        centerPadding: '20px',
      });
      $(".slider-blog").slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        dots: false,
        infinite: false,
      });
    }
  }
  slickSLider() { }
}