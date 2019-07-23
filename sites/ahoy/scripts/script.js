//DEBOUNCE FROM https://ourcodeworld.com/articles/read/16/what-is-the-debounce-method-and-how-to-use-it-in-javascript
var debounce = function (func, wait, immediate) {
     var timeout;
     return function() {
         var context = this, args = arguments;
         var later = function() {
                 timeout = null;
                 if (!immediate) func.apply(context, args);
         };
         var callNow = immediate && !timeout;
         clearTimeout(timeout);
         timeout = setTimeout(later, wait);
         if (callNow) func.apply(context, args);
     };
};

//GENERAL HELPERS
//check if element enters viewport
var isEnteringViewport = function(elem){
    return $(elem).offset().top < $(window).scrollTop() + window.innerHeight
};

//calculate window middle point for the cards to float in
function calculateMiddlePoint(){
   window.middlepoint = $(window).width() / 2 ;
}

function animateLogoWhenImgLoaded(){
  $('#container').imagesLoaded( { background: true }, function() {
   if (  $(window).scrollTop() < 300 ){
    logoAnimation.play();
    letterlogoAnimation.play();
    } 
  });  
}

//ANIMATIONS
//about page animation
 var logoAnimation = anime({
  targets: document.querySelectorAll('.logoPaths'),
  strokeDashoffset: [anime.setDashoffset, 100],
  easing: 'easeInQuint',
  duration: 1200,
  direction: 'forwards',
  loop: false,
  autoplay: false,
   complete: function(){
    var el = document.querySelectorAll(".logoPaths");
    el.forEach(x => x.classList.add('completedLogo')); 
    }
 });

//about page animation 2
  var letterlogoAnimation = anime({
  targets: document.querySelectorAll('.logoLetterPath'),
  strokeDashoffset: [anime.setDashoffset, 100],
  easing: 'easeInQuint',
  duration: 1200,
  delay: 200,
  direction: 'forwards',
  loop: false,
   autoplay: false,
   complete: function(){
    var el = document.querySelectorAll(".logoLetterPath");
    el.forEach(x => x.classList.add('completedLogo')); 
    //now animate the heading titles
    var headerAni = anime({
      targets: document.querySelectorAll('.about h2, .about h3'),
       opacity: 1,
       translateY: 100,
       easing: 'easeInOutQuad',
       offset: 300,
       duration: function(el, i, l) {
          return 1000 + (i * 1000);
       }
    });
    }
 });




// //animate the parallax if in viewport

// function parallaxTitles(){
//   var titles = document.querySelectorAll('.about h2');
//   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//    if ( isEnteringViewport(titles) ){
//         anime({
//         targets: document.querySelectorAll('.about h2'),
//         translateY : '+' + scrollTop/3 + 'px',
//         easing: 'easeOutQuart',
//         duration: 1000,
//         loop: false
//       });
//   } else {
//     document.querySelectorAll('.about h2').style.translateY = 0;
//   }
// }



function toggleBackToTop(){
  if ($(window).scrollTop() >  50) {
    $('.back2top').fadeIn(200);
  } else {
    $('.back2top').fadeOut(200);
  }
}

//fade cards on load
function preparePanel(){
  $(".panel, .storytext, .storyimage").each(function(){
//remove classes previously assigned and based on position
 $(this).removeClass("slidefromleft slidefromright");
//assign classes 
     if( $(this).position().left  + $(this).width() < middlepoint + 150  ){ 
         $(this).addClass("slidefromleft");
      } else {
         $(this).addClass("slidefromright");
      }
  })
}

//animate cards when in view
function animatePanel(){
  $(".panel, .storytext, .storyimage").each(function(){
      if ( $(this).offset().top <  $(window).scrollTop() + window.innerHeight ){
        $(this).addClass("sliding");
      } else {
         $(this).removeClass("sliding");
      }
   })
}



//animate the icons in the footer
let contactIconsPlaying = false;

 var contactIcons = document.getElementsByClassName('.contactIcons');
 const contactIconsDrawing = anime({
  targets: '.contactIcons',
  strokeDashoffset: [anime.setDashoffset, 100],
  easing: 'easeInOutQuad',
  duration: 500,
  delay: function(el, i) { return i * 100 },
  direction: 'forwards',
  loop: false, 
  autoplay: false,
  complete: function(){
    var el = document.querySelectorAll(".contactIcons");
  el.forEach(x => x.classList.add('completed')); 
  }
 });

function animateBottomIcons(){
   if ( isEnteringViewport( document.getElementById('mycontacts'))  && !contactIconsPlaying){
  contactIconsDrawing.restart();
  contactIconsPlaying = true;
 }  else if ( !isEnteringViewport( document.getElementById('mycontacts') ) ){
  $('.contactIcons').removeClass('completed');
  $('.contactIcons svg stroke').css('fill', 'none');
  contactIconsPlaying = false;
 } 
}


const myEasing = "easeOutBack"

//menu animation timeline
var menuAnimation = anime.timeline({
  loop: false,
  autoplay: false,
  direction: 'reverse'
});

menuAnimation
  .add({
    targets: document.getElementById('container'),
    translateX: -310,
    offset: 0,
    easing: "easeOutExpo"
  })
  .add({
    targets: document.querySelector('#line2 path'),
    opacity: [1, 0],
    duration: 100,
    autoplay: false,
    loop: false,
    easing: 'easeInOutExpo',
    offset: 100
    })
  .add({
    targets: document.querySelector('#line1 path'),
    d: [
    {value: 'M15.83,35.17c4.7,0,4.7,6,9.4,6c4.7,0,4.7-6,9.4-6s4.7,6,9.4,6' },
    {value: 'M15.8,44.2l28.4-28.4'},
    ],
    duration: 150,
    autoplay: false,
    easing: 'easeOutExpo',
    offset: 150
    })
  .add({
    targets: document.querySelector('#line3 path'),
    d: [
    {value: 'M15.83,35.17c4.7,0,4.7,6,9.4,6c4.7,0,4.7-6,9.4-6s4.7,6,9.4,6' },
    {value: 'M15.83,15.79l28.42,28.42'},
    ],
    duration: 200,
    autoplay: false,
    easing: 'easeOutExpo',
    offset: 100
    })
  .add({
    targets: document.getElementById('circle'),
    easing: myEasing,
    duration: [200, 400],
    width: [60, 290],
    right: [5, 10],
    top: [5, 60],
    rotate: '1turn',
    height: [60, 270],
    loop: false,
    borderRadius: ['50%', '0%'],
    backgroundColor: ["rgb(0, 77, 87)", "rgb(255, 255, 255)"],
    autoplay: false,
    offset: 0
  })
  .add({
    targets: document.querySelectorAll('nav ul li'),
    translateX: [30, -300],
    easing: 'easeInOutQuad',
    direction: 'forwards',
    autoplay: false,
    offset: 200,
     duration: function(el, i, l) {
          return 100 + (i * 200);
       }
  });

//toggle menu on button click 
document.querySelector('#menubuttoncontainer').onclick = function(){
  menuAnimation.play();
  menuAnimation.reverse(); 
}


//rotate cards on click
$('.rotatecard').click(function(){
  $(this).parents(".front").toggleClass("flipped");
  $(this).parentsUntil(".panel").next(".back").toggleClass("backflip");
});

$('.rotatecardback').click(function(){
  $(this).parentsUntil(".panel").prev(".front").toggleClass("flipped");
  $(this).parents(".back").toggleClass("backflip");
});


//scroll to top
$(".back2top").click(function(event){
  event.preventDefault();
  $('html, body').animate({scrollTop: 0}, 300);
});

//smooth scroll to sections 
$(function() {
    $('a[href^="#"]').click(function() {
    var scrollTime = 500;
    // Need both `html` and `body` for full browser support
        $("html, body").animate({
            scrollTop: $( $(this).attr("href") ).offset().top
        }, scrollTime);
        // Prevent the jump/flash
        return false;
    });
});

var timelineTextContainer = $("#timeline_textContainer");

window.slideNo = 1;
window.isStoryAnimating = false;
hideArrows();


//fix the slideshow
function hideArrows(){
  if (slideNo < 2){
    $('.arrowleft').hide();
  } else if (slideNo > 3) {
    $('.arrowright').hide();
  } else {
    $('.arrowleft').show();
    $('.arrowright').show();
   }
}


$('.arrowright').on('click', function(){
if (slideNo < 4 && !isStoryAnimating){

  isStoryAnimating = true;
   var myRightMove = anime.timeline({
    duration: 200,
    easing: "easeOutExpo",
    delay: 0,
    begin: function(){
      slideNo += 1;
      hideArrows();
    },
    complete: function(){
      isStoryAnimating = false;
    }
   });

   myRightMove
   .add({
      targets: document.querySelector('#timeline_textContainer'),
      translateX: '-=100%',
   })
   .add({
     targets: document.querySelector('#timeline_imageContainer'),
     translateX: '+=410',
     offset: 0    
   })

 } else if (isStoryAnimating ) {
  return false;
 }
});

$('.arrowleft').on('click', function(){
if (slideNo > 1 && !isStoryAnimating){
  isStoryAnimating = true;
   var myLeftMove = anime.timeline({
    duration: 200,
    easing: "easeOutExpo",
    delay: 0,
    begin: function(){
      slideNo -= 1;
      hideArrows();
    },
    complete: function(){
      isStoryAnimating = false;
    }
   });

   myLeftMove
   .add({
    targets: document.querySelector('#timeline_textContainer'),
    translateX: '+=100%',
   })
   .add({
    targets: document.querySelector('#timeline_imageContainer'),
     translateX: '-=410',
     offset: 0
   })

 } else {
  return false;
 }
});



$(document).ready(function() {
  animateLogoWhenImgLoaded();
  calculateMiddlePoint();
  preparePanel(animatePanel() );
  toggleBackToTop();
  animateBottomIcons();
});

//add animations to the scroll event
$(window).scroll(debounce(function(){
  animateLogoWhenImgLoaded();
  toggleBackToTop();
  preparePanel( animatePanel() );
  animateBottomIcons();
}, 100)); // Milliseconds 

