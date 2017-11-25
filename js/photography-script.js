$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	if(wScroll > $('.product-photography-child').offset().top - ($(window).height()/ 5)){
		$('.product-photography-child').each(function(i){
			setTimeout(function(){
			   $('.product-photography-child').eq(i).addClass('is-showing');
			   }, 500 * (i+1));
			});
	}
});
/*
if(wScroll > $('.product-photography-child').offset().top - ($(window).height()/ 5))
*/