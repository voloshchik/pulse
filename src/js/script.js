console.log('test');
$(document).ready(function () {
  // $('.carousel__inner').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
  //   nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
  //   responsive: [
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         arrows: false,
  //         dots: true,
  //       },
  //     },
  //   ],
  // });

  const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab__active)', function () {
    $(this)
      .addClass('catalog__tab__active')
      .siblings()
      .removeClass('catalog__tab__active')
      .closest('div.container')
      .find('div.catalog__content')
      .removeClass('catalog__content_active')
      .eq($(this).index())
      .addClass('catalog__content_active');
  });

  // $('.catalog-item__link').each(function (i) {
  //   $(this).on('click', function (e) {
  //     e.preventDefault();
  //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
  //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
  //   });
  // });
  // $('.catalog-item__back').each(function (i) {
  //   $(this).on('click', function (e) {
  //     e.preventDefault();
  //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
  //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
  //   });
  // });

  function toggleClass(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
    });
  }

  toggleClass('.catalog-item__link');
  toggleClass('.catalog-item__back');
});

//modal
$('[data-modal=consultation]').on('click', () => {
  console.log('click');
  $('.overlay, #consultation').fadeIn();
});

$('.modal__close').on('click', function () {
  $('.overlay,#consultation,#thanks,#order').fadeOut();
});

// $('.button_mini').on('click', function () {
//   $('.overlay, #order').fadeIn();
// });

$('.button_mini').each(function (i) {
  $(this).on('click', function () {
    console.log('click');
    $('#order .modal__description').text($('.catalog-item__subtitle').eq(i).text());
    $('.overlay, #order').fadeIn();
  });
});
