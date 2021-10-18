$(function(){

  $('.menu__btn').on ('click', function (){
    $('.menu__list').toggleClass('menu__list--active');
  });

  // $(window).scroll(function(){
  //   if ($(this).scrollTop() > 100) {
  //   $('.scrollup').fadeIn();
  //   } else {
  //   $('.scrollup').fadeOut();
  //   }
  // });
  
  // $('.scrollup').click(function(){
  //   $("html, body").animate({ scrollTop: 0 }, 600);
  //   return false;
  // });

});