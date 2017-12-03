$(function(){
	$('.product-photography-child').each(function(i){
			setTimeout(function(){
			   //$('.product-photography-child').eq(i).addClass('is-showing');
                    $('.product-photography-child').eq(i).css({opacity: 1, transform:"scale(1)"});
                }, 300 * (i+1));
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
$.get("data/pwti_work_images.json", function(data){
    $('#category-all').click(function(){
				$('.product-photography-child').each(function(i){
						setTimeout(function(){
								$('.product-photography-child').eq(i).css({opacity: 0, transform: "scale(0)"});
						}, 300);
				});
						//setting url and data-text of every product-photography-child
						setTimeout(function(){
								$('#product-photography-child-1').attr('data-text', data.allImages[0].infotext);
								$('#product-photography-child-1').css({'background-image': 'url('+ data.allImages[0].url + ')', opacity:1, transform: "scale(1)"});
						}, 500);
						setTimeout(function(){
								$('#product-photography-child-2').attr('data-text', data.allImages[1].infotext);
								$('#product-photography-child-2').css({'background-image': 'url('+ data.allImages[1].url + ')', opacity:1, transform: "scale(1)"});
						}, 800);
						setTimeout(function(){
								$('#product-photography-child-3').attr('data-text', data.allImages[2].infotext);
								$('#product-photography-child-3').css({'background-image': 'url('+ data.allImages[2].url + ')', opacity:1, transform: "scale(1)"});
						}, 1100);
						setTimeout(function(){
								$('#product-photography-child-4').attr('data-text', data.allImages[3].infotext);
								$('#product-photography-child-4').css({'background-image': 'url('+ data.allImages[3].url + ')', opacity:1, transform: "scale(1)"});
						}, 1400);
						setTimeout(function(){
								$('#product-photography-child-5').attr('data-text', data.allImages[4].infotext);
								$('#product-photography-child-5').css({'background-image': 'url('+ data.allImages[4].url + ')', opacity:1, transform: "scale(1)"});
						}, 1700);
						setTimeout(function(){
								$('#product-photography-child-6').attr('data-text', data.allImages[5].infotext);
								$('#product-photography-child-6').css({'background-image': 'url('+ data.allImages[5].url + ')', opacity:1, transform: "scale(1)"});
						}, 2100);
						setTimeout(function(){
								$('#product-photography-child-7').attr('data-text', data.allImages[6].infotext);
								$('#product-photography-child-7').css({'background-image': 'url('+ data.allImages[6].url + ')', opacity:1, transform: "scale(1)"});
						}, 2400);
						setTimeout(function(){
								$('#product-photography-child-8').attr('data-text', data.allImages[7].infotext);
								$('#product-photography-child-8').css({'background-image': 'url('+ data.allImages[7].url + ')', opacity:1, transform: "scale(1)"});
						}, 2700);
						setTimeout(function(){
								$('#product-photography-child-9').attr('data-text', data.allImages[8].infotext);
								$('#product-photography-child-9').css({'background-image': 'url('+ data.allImages[8].url + ')', opacity:1, transform: "scale(1)"});
						}, 3000);
						setTimeout(function(){
								$('#product-photography-child-10').attr('data-text', data.allImages[9].infotext);
								$('#product-photography-child-10').css({'background-image': 'url('+ data.allImages[9].url + ')', opacity:1, transform: "scale(1)"});
						}, 3300);
						setTimeout(function(){
								$('#product-photography-child-11').attr('data-text', data.allImages[10].infotext);
								$('#product-photography-child-11').css({'background-image': 'url('+ data.allImages[10].url + ')', opacity:1, transform: "scale(1)"});
						}, 3600);
						setTimeout(function(){
								$('#product-photography-child-12').attr('data-text', data.allImages[11].infotext);
								$('#product-photography-child-12').css({'background-image': 'url('+ data.allImages[11].url + ')', opacity:1, transform: "scale(1)"});
						}, 3900);
						setTimeout(function(){
								$('#product-photography-child-13').attr('data-text', data.allImages[12].infotext);
								$('#product-photography-child-13').css({'background-image': 'url('+ data.allImages[12].url + ')', opacity:1, transform: "scale(1)"});
						}, 4200);
						setTimeout(function(){
								$('#product-photography-child-14').attr('data-text', data.allImages[13].infotext);
								$('#product-photography-child-14').css({'background-image': 'url('+ data.allImages[13].url + ')', opacity:1, transform: "scale(1)"});
						}, 4500);
						setTimeout(function(){
								$('#product-photography-child-15').attr('data-text', data.allImages[14].infotext);
								$('#product-photography-child-15').css({'background-image': 'url('+ data.allImages[14].url + ')', opacity:1, transform: "scale(1)"});
						}, 4800);
						setTimeout(function(){
								$('#product-photography-child-16').attr('data-text', data.allImages[15].infotext);
								$('#product-photography-child-16').css({'background-image': 'url('+ data.allImages[15].url + ')', opacity:1, transform: "scale(1)"});
						}, 5100);
				});
				$('#category-clipping-path').click(function(){
						$('.product-photography-child').each(function(i){
								setTimeout(function(){
									$('.product-photography-child').eq(i).css({opacity: 0, transform: "scale(0)"});
								}, 300);
						});
						setTimeout(function(){
								$('#product-photography-child-1').attr('data-text', data.clippingPath[0].infotext);
								$('#product-photography-child-1').css({'background-image': 'url('+ data.clippingPath[0].url + ')', opacity:1, transform: "scale(1)"});
						}, 500);
						setTimeout(function(){
								$('#product-photography-child-2').attr('data-text', data.clippingPath[1].infotext);
								$('#product-photography-child-2').css({'background-image': 'url('+ data.clippingPath[1].url + ')', opacity:1, transform: "scale(1)"});
						}, 800);
						setTimeout(function(){
								$('#product-photography-child-3').attr('data-text', data.clippingPath[2].infotext);
								$('#product-photography-child-3').css({'background-image': 'url('+ data.clippingPath[2].url + ')', opacity:1, transform: "scale(1)"});
						}, 1100);
						setTimeout(function(){
								$('#product-photography-child-4').attr('data-text', data.clippingPath[3].infotext);
								$('#product-photography-child-4').css({'background-image': 'url('+ data.clippingPath[3].url + ')', opacity:1, transform: "scale(1)"});
						}, 1400);
						setTimeout(function(){
								$('#product-photography-child-5').attr('data-text', data.clippingPath[4].infotext);
								$('#product-photography-child-5').css({'background-image': 'url('+ data.clippingPath[4].url + ')', opacity:1, transform: "scale(1)"});
						}, 1700);
						setTimeout(function(){
								$('#product-photography-child-6').attr('data-text', data.clippingPath[5].infotext);
								$('#product-photography-child-6').css({'background-image': 'url('+ data.clippingPath[5].url + ')', opacity:1, transform: "scale(1)"});
						}, 2100);
				});
				$('#category-fashion-retouching').click(function(){
						$('.product-photography-child').each(function(i){
								setTimeout(function(){
										$('.product-photography-child').eq(i).css({opacity: 0, transform: "scale(0)"});
								}, 300);
						});
						setTimeout(function(){
								$('#product-photography-child-1').attr('data-text', data.fashionRetouching[0].infotext);
								$('#product-photography-child-1').css({'background-image': 'url('+ data.fashionRetouching[0].url + ')', opacity:1, transform: "scale(1)"});
						}, 500);
						setTimeout(function(){
								$('#product-photography-child-2').attr('data-text', data.fashionRetouching[1].infotext);
								$('#product-photography-child-2').css({'background-image': 'url('+ data.fashionRetouching[1].url + ')', opacity:1, transform: "scale(1)"});
						}, 800);
						setTimeout(function(){
								$('#product-photography-child-3').attr('data-text', data.fashionRetouching[2].infotext);
								$('#product-photography-child-3').css({'background-image': 'url('+ data.fashionRetouching[2].url + ')', opacity:1, transform: "scale(1)"});
						}, 1100);
				});
				$('#category-product-retouching').click(function(){
						$('.product-photography-child').each(function(i){
								setTimeout(function(){
										$('.product-photography-child').eq(i).css({opacity: 0, transform: "scale(0)"});
								}, 300);
						});
						setTimeout(function(){
								$('#product-photography-child-1').attr('data-text', data.productRetouching[0].infotext);
								$('#product-photography-child-1').css({'background-image': 'url('+ data.productRetouching[0].url + ')', opacity:1, transform: "scale(1)"});
						}, 500);
						setTimeout(function(){
								$('#product-photography-child-2').attr('data-text', data.productRetouching[1].infotext);
								$('#product-photography-child-2').css({'background-image': 'url('+ data.productRetouching[1].url + ')', opacity:1, transform: "scale(1)"});
						}, 800);
						setTimeout(function(){
								$('#product-photography-child-3').attr('data-text', data.productRetouching[2].infotext);
								$('#product-photography-child-3').css({'background-image': 'url('+ data.productRetouching[2].url + ')', opacity:1, transform: "scale(1)"});
						}, 1100);
				});
				$('#category-ghost-mannequin').click(function(){
						$('.product-photography-child').each(function(i){
								setTimeout(function(){
										$('.product-photography-child').eq(i).css({opacity: 0, transform: "scale(0)"});
								}, 300);
						});
						setTimeout(function(){
								$('#product-photography-child-1').attr('data-text', data.ghostMannequin[0].infotext);
								$('#product-photography-child-1').css({'background-image': 'url('+ data.ghostMannequin[0].url + ')', opacity:1, transform: "scale(1)"});
						}, 500);
						setTimeout(function(){
								$('#product-photography-child-2').attr('data-text', data.ghostMannequin[1].infotext);
								$('#product-photography-child-2').css({'background-image': 'url('+ data.ghostMannequin[1].url + ')', opacity:1, transform: "scale(1)"});
						}, 800);
						setTimeout(function(){
								$('#product-photography-child-3').attr('data-text', data.ghostMannequin[2].infotext);
								$('#product-photography-child-3').css({'background-image': 'url('+ data.ghostMannequin[2].url + ')', opacity:1, transform: "scale(1)"});
						}, 1100);
						setTimeout(function(){
								$('#product-photography-child-4').attr('data-text', data.ghostMannequin[3].infotext);
								$('#product-photography-child-4').css({'background-image': 'url('+ data.ghostMannequin[3].url + ')', opacity:1, transform: "scale(1)"});
						}, 1400);
						setTimeout(function(){
								$('#product-photography-child-5').attr('data-text', data.ghostMannequin[4].infotext);
								$('#product-photography-child-5').css({'background-image': 'url('+ data.ghostMannequin[4].url + ')', opacity:1, transform: "scale(1)"});
						}, 1700);
				});
				$('#category-colorisation').click(function(){
						$('.product-photography-child').each(function(i){
								setTimeout(function(){
										$('.product-photography-child').eq(i).css({opacity: 0, transform: "scale(0)"});
								}, 300);
						});
						setTimeout(function(){
								$('#product-photography-child-1').attr('data-text', data.colorisation[0].infotext);
								$('#product-photography-child-1').css({'background-image': 'url('+ data.colorisation[0].url + ')', opacity:1, transform: "scale(1)"});
						}, 500);
				});

});
