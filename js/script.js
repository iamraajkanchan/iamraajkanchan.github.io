$(function(){
	// initializing the first div to class 'top'
	//$('.home-logo-container').css({left: "18%", opacity: 1.0});
	$('.home-logo-container').css({opacity: 1.0});
	$('.home-menu-slide-navbar').css({opacity: 1.0});
	$('.home-content').css({opacity: 1.0});
	$('.home-fade-slide-container div:first').addClass('top');
	//function to alter the image index by changing the class
    var change = function (){
     		var curr = $('.home-fade-slide.top');
			var next = curr.next(); 
			// if the next image is not available then 
			// set the class-top to the first image
			// then vanish the current image to
			// show the previous next image
               if(!next.length){
                next = $('.home-fade-slide-container div:first');
				next.css({zIndex: -1});
				next.addClass('top');
		        curr.animate({opacity: 0.0},1000, function() {
		        	curr.css({zIndex: -2});
					curr.removeClass('top');
		          	curr.css({opacity: 1.0});
  		        });
     }else{
				// pick the next div
				// set the opacity to 0
			    // then use animate to make it appear
				// above the top image
                next.css({opacity: 0.0})
		        .css({zIndex: -1})
				.addClass('top')
                .animate({opacity: 1.0}, 1000, function() {
		            curr.css({zIndex: -2});
					curr.removeClass('top');
                 });
		    }
     }
// repeat the function execution for every 5 secs
    setInterval(change, 5000);
	var myMedNavbar = $('.med-navbar');
	var myNavToggleButton = $('.med-navbar-button');
	var i = 0;
	myNavToggleButton.click(function(){
			if(i == 0){
			myMedNavbar.css({"transform": "translateY(50px)"});
			i = 1;
		}
		else{
			myMedNavbar.css({"transform": "translateY(-500px)"});
			i = 0;
		}
	});
});

