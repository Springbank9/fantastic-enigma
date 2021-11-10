var lastScrollTop = 0;
$(window).scroll(function(){
  var st = $(this).scrollTop();
  var banner = $('.banner');
  setTimeout(function(){
    if (st > lastScrollTop){
      banner.addClass('hide');
    } else {
      banner.removeClass('hide');
    }
    lastScrollTop = st;
  }, 100);
});

$("carousel-item > div:gt(0)").hide();

setInterval(function() { 
  $('carousel-item > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('carousel-item');
}, 3000);