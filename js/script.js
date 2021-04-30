/*$(document).ready(function(){*/
    $('.slider-block').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        dotsClass: 'slick-dots slider-dots',
        speed: 300,
        prevArrow: $('.btn-left'),
        nextArrow: $('.btn-right'),
        
    });
/*});*/



// кнопка

// $(function() {
//     $('.idTop').click(function(){
//        $('html, body').animate({scrollTop:0}, 'slow');
//    });
// });

function idTop() {

    let button = $('.idTop');

    $(window).on('scroll', () => {
      if ($(this).scrollTop() >= 50) {
        button.fadeIn();
      } else {
        button.fadeOut();
      }
    });

    button.on('click', (e) => {
      e.preventDefault();
      $('html').animate({scrollTop: 0}, 1000);
    })
  }

  idTop();

//   стрелка вниз

$(function(){
	$('#scroll_bottom').click(function(){
		$('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 600);
		return false;
	});
});

// выпадающее меню

$('.menu-mobile').on('click', function(){
  if($('.menu-mobile').hasClass('menu-mobile-visible')){
      $('.main-navigation').removeClass('main-navigation-visible');
      $('.menu-mobile').removeClass('menu-mobile-visible'); 
  } else {
      $('.main-navigation').addClass('main-navigation-visible');
      $('.menu-mobile').addClass('menu-mobile-visible'); 
  }
  
});