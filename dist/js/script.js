
$(document).ready(function(){
   $('.slider').slick({
  centerMode: true,
  arrows: false,
  dots: true,
  centerPadding: '100px',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

});



jQuery('.header__burger').on('click',function(){
  jQuery('.header__burger').toggleClass('active');
  jQuery('.header__menu').toggleClass('active');
})
