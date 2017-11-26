$(function(){
	$('.product-photography-child').each(function(i){
			setTimeout(function(){
			   $('.product-photography-child').eq(i).addClass('is-showing');
			   }, 500 * (i+1));
			});
	var myMedNavbar = $('.med-navbar');
	var myNavToggleButton = $('.med-navbar-button');
	var i = 0;
	myNavToggleButton.click(function(){
			if(i == 0){
			myMedNavbar.css({"transform": "translateY(10px)"});
			i = 1;
		}
		else{
			myMedNavbar.css({"transform": "translateY(-500px)"});
			i = 0;
		}
	});
});


/*$(window).scroll(function(){
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