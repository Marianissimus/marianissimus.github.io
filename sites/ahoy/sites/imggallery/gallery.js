$( document ).ready(function() {
 const preview = $(".preview");
 const allThumbs = $("#gallery div img");
 let currentIndex = 0;
 let newIndex = 0;
 let imageWidth = $(".thumbs div img").width();
 console.log( allThumbs.length );

$('.thumbs div img').not(':eq(' + currentIndex + ')').addClass('overlay');

 allThumbs.each(function(){
 	$(this).click(function(){
 		//get the index of the clicked image in the gallery 
 		var newIndex = $(this).index("#gallery div img");
 		if (currentIndex !== newIndex){
 			anime({
 				targets: '.thumbs',
 				delay: 0,
				duration: 200,
				easing: "easeInOutExpo",
 				translateX: function(){
 					//I could replace the if/else with a return + Math.sign + Math.abs
 					//but then I wouldn't easily understand myself it in the future
 					//ANYWAY, this moves the thumb container to the clicked thumb
 					if( (newIndex - currentIndex) * imageWidth > 0) {
 						return ("-=" + Math.abs((currentIndex - newIndex) * imageWidth) + "px");
 					} else {
 						return ("+=" + Math.abs((currentIndex - newIndex) * imageWidth) + "px")
 					}
 				},
 				complete: function(){
 					currentIndex = newIndex;
 				}
 			})
 		}
 		//remove class on all and reattach on all, but this one
 		allThumbs.removeClass("overlay");
 		allThumbs.not($(this)).addClass("overlay");	
 		//update background in preview;
 	 	let currentBackground = $(this).attr('src');
		preview.css('background-image', 'url(' + currentBackground + ')');
 	})
 })

function updateDisplay(){
	allThumbs.eq(currentIndex).removeClass('overlay');
	allThumbs.not(':eq(' + currentIndex + ')').addClass('overlay');
	currentBackground =  $(".thumbs > div").eq(currentIndex).children("img").attr('src');
	preview.css('background-image', 'url(' + currentBackground + ')');	
}

//Could probably use a constructor function for both arrow click events
$('.arrowright').on("click", function(){
	if (currentIndex < (allThumbs.length - 1) ){
		anime({
			targets: '.thumbs',
			delay: 0,
			duration: 200,
			translateX: function(){
				return '-=' + imageWidth + 'px';
			},
			easing: "easeInOutExpo",
			begin: function(){
				currentIndex += 1;
				updateDisplay();
			}
		})
	} else {
		return false;
	}
});

$('.arrowleft').on("click", function(){
	if (currentIndex > 0){
		anime({
			targets: '.thumbs',
			delay: 0,
			duration: 200,
			easing: "easeInOutExpo",
			translateX: function(){
				return '+=' + imageWidth + 'px';
			},
			begin: function(){
				currentIndex -= 1;
				updateDisplay();
			}
		})
	} else {
		return false;
	}
});


//end of document.ready();
});

