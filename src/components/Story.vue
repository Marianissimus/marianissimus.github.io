<template>
  <section class="container-section story" id="story">
    <div class="title-container">
      <h1>Story</h1>
    </div>

    <div id="timeline">
      <button class="arrowleft" :class="[slideNo < 2 ? 'disabled' : '']" @click="moveLeft">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50">
          <path
            fill="#FFF"
            d="M12.5,22.79c3.2-1.17,5.7-3.07,7.5-5.69h1.37c-0.62,1.84-1.65,3.57-3.11,5.21h8.64V17.1h1.91v5.21h3.39 c1.45,0,2.7,0.52,3.73,1.55c1.04,1.04,1.55,2.29,1.55,3.75c0,1.45-0.52,2.7-1.55,3.73c-1.04,1.04-2.28,1.55-3.73,1.55 c-1.45,0-2.7-0.52-3.74-1.55c-1.04-1.04-1.56-2.28-1.56-3.73V24.2h-8.64c1.45,1.63,2.49,3.38,3.11,5.23H20 c-1.8-2.62-4.3-4.52-7.5-5.69V22.79z M28.82,24.2v3.41c0,0.91,0.33,1.71,1,2.38c0.67,0.67,1.47,1.01,2.39,1.01 c0.91,0,1.71-0.34,2.38-1.01s1.01-1.47,1.01-2.38c0-0.94-0.33-1.74-1-2.41c-0.67-0.67-1.47-1-2.39-1H28.82z"
            id="Layer_4"
          ></path>
        </svg>
      </button>
      <button class="arrowright" :class="[slideNo > 2 ? 'disabled' : '']" @click="moveRight">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50">
          <path
            fill="#FFF"
            d="M37.5,27.21c-3.2,1.17-5.7,3.07-7.5,5.69h-1.37c0.62-1.84,1.65-3.57,3.11-5.21h-8.64v5.21h-1.91v-5.21 h-3.39c-1.45,0-2.7-0.52-3.73-1.55c-1.04-1.04-1.55-2.29-1.55-3.75c0-1.45,0.52-2.7,1.55-3.73c1.04-1.04,2.28-1.55,3.73-1.55 c1.45,0,2.7,0.52,3.74,1.55c1.04,1.04,1.56,2.28,1.56,3.73v3.41h8.64c-1.45-1.63-2.49-3.38-3.11-5.23H30 c1.8,2.62,4.3,4.52,7.5,5.69V27.21z M21.18,25.8v-3.41c0-0.91-0.33-1.71-1-2.38c-0.67-0.67-1.47-1.01-2.39-1.01 c-0.91,0-1.71,0.34-2.38,1.01c-0.68,0.67-1.01,1.47-1.01,2.38c0,0.94,0.33,1.74,1,2.41c0.67,0.67,1.47,1,2.39,1H21.18z"
            id="Layer_4"
          ></path>
        </svg>
      </button>

      <div id="timeline_textContainer">
        <div class="storytext">
          <div class="supratitle">Chapter 1</div>
          <span>tHe Beginning</span>
          <br>
          <br>
          <span>My</span> journey started a long time ago, but I never knew I would venture this far. Yet here I am: storms in my past, wind in my sails, sunshine in my future.
        </div>

        <div class="storytext">
          <div class="supratitle">Chapter 2</div>
          <span>Setting Sails</span>
          <br>
          <br>I made my first sites as I had a message to send. So I became mates with Dreamweaver, FrontPage and Flash, but coding remained an illusion, just like a real mermaid... until the day I decided to explore deeper, richer waters…
        </div>

        <div class="storytext">
          <div class="supratitle">Chapter 3</div>
          <span>Raging Storms</span>
          <br>
          <br>And then I fully confronted the Gods of the Seas of the Front End Developing World. Having mostly cruised through HTML and CSS, I glimpsed at the mysteries of JavaScript: and it was then that I knew I had a battle to fight, a monster to tame, an ocean to conquer.
        </div>

        <div class="storytext">
          <div class="supratitle">Final Chapter?</div>
          <span>Uncharted Seas</span>
          <br>
          <br>I love exploring new waters, I love charting new seas: JavaScript libraries, jQuery, SVG animations. ‘The harder the battle, the sweeter the victory’, this is what I feel. Along with a wind in my sails that may lead me to full employment as a front end developer. One with the love of sea.
        </div>
      </div>

      <div id="timeline_imageContainer">
        <div class="storyimage">
          <img src="images/story_intro.jpg" alt>
        </div>
        <div class="storyimage">
          <img src="images/story_beginning.jpg" alt>
        </div>
        <div class="storyimage">
          <img src="images/story_storm.jpg" alt>
        </div>
        <div class="storyimage">
          <img src="images/story_end.jpg" alt>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import anime from '../../sites/ahoy/scripts/anime.min.js'
import 'waypoints/lib/noframework.waypoints.min.js'

export default{
  data() {
    return {
      slideNo: 1,
      isStoryAnimating: false
    }
  },
  methods: {
    moveRight(){
      if (this.slideNo < 4 && !this.isStoryAnimating){
        this.isStoryAnimating = true
        this.slideNo += 1
        var myRightMove = anime.timeline({
          duration: 200,
          easing: "easeOutExpo",
          delay: 0,
          complete: () => { this.isStoryAnimating = false }
        })
        
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
        
      } else if (this.isStoryAnimating ) {
        return false
      }
    },
    moveLeft() {
      if (this.slideNo > 1 && !this.isStoryAnimating){
        this.isStoryAnimating = true
        this.slideNo -= 1;
        var myLeftMove = anime.timeline({
          duration: 200,
          easing: "easeOutExpo",
          delay: 0,
          complete: () => { this.isStoryAnimating = false }
        })

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
        return false
      }
    }
  }
}


</script>


<style lang="scss">
@import "styles/style.scss";


#story .title-container h1, .contact .title-container h1{
	color: white;
}

#story .title-container h1{
	position: relative;
	width: 120px;
}

.contact .title-container h1{
	width: 150px;
}

#story .title-container h1:after, .contact .title-container h1:after,
#story .title-container h1:before, .contact .title-container h1:before{
 background-image: url("data:image/svg+xml;charset=utf8,%3C?xml version='1.0' encoding='utf-8'?%3E%3Csvg xmlns='http://www.w3.org/2000/svg' width='157.06' height='12.29'%3E%3Cg id='Layer_1'%3E%3Cpath fill='none' stroke='%23FFF' stroke-width='4' stroke-miterlimit='10' d='M0.23,2.62c5.61,0,5.61,6,11.21,6 c5.61,0,5.61-6,11.21-6s5.61,6,11.21,6c5.61,0,5.61-6,11.21-6c5.61,0,5.61,6,11.21,6c5.61,0,5.61-6,11.21-6s5.61,6,11.21,6 c5.6,0,5.6-6,11.21-6s5.61,6,11.21,6c5.61,0,5.61-6,11.21-6c5.61,0,5.61,6,11.22,6c5.61,0,5.61-6,11.21-6c5.61,0,5.61,6,11.22,6 s5.61-6,11.22-6'/%3E%3C/g%3E%3C/svg%3E");
	color: white;
}
//----- end of CONTAINER, SECTIONS and TITLES---- //




//the story section

#story{
	background: no-repeat url("/images/sea2_1400.jpg");
	background-size: cover;
	background-position: center bottom 0px;
	overflow: hidden;
	min-height: 100vh;

 @media screen and (max-width: 900px){
  	background-image: url("/images/sea2_900.jpg");
 } 

  @media screen and (min-width: 901px) and (max-width: 1200px){
  	background-image: url("/images/sea2_1200.jpg");
 }

  @media screen and (min-width: 1201px){
  	background-image: url("/images/sea2_1400.jpg");
 } 
}

#story span{
  font-family: 'Cinzel Decorative', cursive;
  font-size: 1.6em;
}


#timeline{
	display: flex;
	flex-direction: column;
	flex-wrap: no-wrap;
	position: relative;
	width: 410px;
	margin: 5px auto;
 overflow: hidden;
	position: relative;
	@media screen and (max-width: 450px){
			margin-top: 10px;
			margin-bottom: 70px;
	  width: 90%;
	}
}

.arrowleft, .arrowright {
	 color: white;
  text-align: center;
		position: absolute;
		display: block;
		width: 50px;
		height: 50px;
		bottom: 275px;
  border-radius: 50%;
  z-index: 1000; 
  border: none;
  cursor: pointer;
  transition: all .3s ease;
  background-color: rgba(0, 0, 0, 0.3);
}

.arrowleft:focus, .arrowright:focus{
	outline: none;
}

.arrowleft{
	 left: 30px;
}

.arrowright{
	right: 30px;
}

.arrowleft:hover, .arrowright:hover {
	background-color: rgb(0, 77, 87); 
  transition: all .3s ease;
}

.disabled {
  pointer-events: none;
  transition: all .3s ease;
  fill-opacity: 0;
  background-color: transparent !important;
}

#timeline_textContainer, #timeline_imageContainer{
	display: flex;
	flex-direction: row-reverse;
	flex-wrap: nowrap;
}

#timeline_textContainer{
	flex-direction: row;
}

#timeline_imageContainer{
	flex: 1 0 300px;
}

.storytext {
	height: auto;
	flex: 1 0 410px;
	width: 100%;
	margin:0;
 padding: 30px;
 font-size: 14px;
 line-height: 20px;
 letter-spacing: 2px;
 font-family: "Source Sans Pro", sans-serif;
 background-color: white;
 @media screen and (max-width: 450px){
  padding: 15px;
	 flex: 1 0 100%;
	}
}

#story span{
  font-family: 'Cinzel Decorative', cursive;
  font-size: 1.6em;
}
</style>