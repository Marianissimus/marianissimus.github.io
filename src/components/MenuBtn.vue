<template>
  <nav>
    <div id="menubuttoncontainer">
      <span id="menubutton" @click="toggleMenu">
        <!-- <?xml version="1.0" encoding="utf-8"?>
        Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)
        <!doctype html>-->
        <svg
          id="buttonwaves"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="60px"
          height="60px"
          viewBox="0 0 60 60"
          enable-background="new 0 0 60 60"
          xml:space="preserve"
        >
          <g id="background">
            <rect fill="none" width="60" height="60" />
          </g>
          <g id="Layer_2">
            <g>
              <g id="line3">
                <path
                  fill="none"
                  stroke="#006BBD"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  d="M16.04,18.83c4.7,0,4.7,6,9.4,6c4.7,0,4.7-6,9.4-6s4.7,6,9.4,6"
                />
              </g>
              <g id="line2">
                <path
                  fill="none"
                  stroke="#83CEEC"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  d="M15.83,26.5c4.7,0,4.7,6,9.4,6c4.7,0,4.7-6,9.4-6s4.7,6,9.4,6"
                />
              </g>
              <g id="line1">
                <path
                  fill="none"
                  stroke="#006BBD"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  d="M15.83,35.17c4.7,0,4.7,6,9.4,6c4.7,0,4.7-6,9.4-6s4.7,6,9.4,6"
                />
              </g>
            </g>
          </g>
        </svg>
      </span>

      <div id="circle"></div>
    </div>
    <ul>
      <li>
        <router-link to="/About">About</router-link>
      </li>
      <li>
        <router-link to="/Portfolio">Portfolio</router-link>
      </li>
      <li>
        <router-link to="/Story">Story</router-link>
      </li>
      <li>
        <router-link to="/Contact">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import anime from "animejs";
import vueanime from 'vue-animejs'

export default {
  data() {
    return {
      isMenuExtended: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuExtended = !this.isMenuExtended

      const targets = this.$el;
      const tl1 = this.$anime
      .timeline({
        loop: false,
        autoplay: false
      }).add({
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
        direction: 'alternate',
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
        direction: 'alternate',
        autoplay: false,
        easing: 'easeOutExpo',
        offset: 100
        })
      .add({
        targets: document.getElementById('circle'),
        easing: 'easeOutBack',
        duration: 400,
        width: 290,
        right: 10,
        top: 60,
        rotate: '1turn',
        height: 270,
        loop: false,
        borderRadius: '0%',
        backgroundColor: 'rgb(255, 255, 255)',
        autoplay: false,
        offset: 0
      })
      .add({
        targets: document.querySelectorAll('nav ul li'),
        translateX: -300,
        easing: 'easeInOutQuad',
        direction: 'forwards',
        autoplay: false,
        offset: 200,
        duration: function(el, i, l) {
              return 100 + (i * 200);
          }
      })
      
      const tl2 = this.$anime
      .timeline({
        loop: false,
        autoplay: false
      }).add({
        targets: document.querySelector('#line2 path'),
        opacity: [0, 1],
        duration: 100,
        autoplay: false,
        loop: false,
        easing: 'easeInOutExpo',
        offset: 100
        })
      .add({
        targets: document.querySelector('#line1 path'),
        d: [
          {value: 'M15.8,44.2l28.4-28.4'},
          {value: 'M15.83,35.17c4.7,0,4.7,6,9.4,6c4.7,0,4.7-6,9.4-6s4.7,6,9.4,6' }
        ],
        duration: 150,
        direction: 'alternate',
        autoplay: false,
        easing: 'easeOutExpo',
        offset: 150
        })
      .add({
        targets: document.querySelector('#line3 path'),
        d: [
          {value: 'M15.83,15.79l28.42,28.42'},
          {value: 'M16.04,18.83c4.7,0,4.7,6,9.4,6c4.7,0,4.7-6,9.4-6s4.7,6,9.4,6' }
        ],
        duration: 200,
        autoplay: false,
        direction: 'alternate',
        easing: 'easeOutExpo',
        offset: 100
        })
      .add({
        targets: document.getElementById('circle'),
        easing: 'easeOutBack',
        duration: 200,
        width: 60,
        right: 5,
        top: 5,
        rotate: '1turn',
        height: 60,
        loop: false,
        borderRadius: '50%',
        backgroundColor: 'rgb(0, 77, 87)',
        autoplay: false,
        offset: 300
      })
      .add({
        targets: document.querySelectorAll('nav ul li'),
        translateX: 30,
        easing: 'easeInOutQuad',
        direction: 'forwards',
        autoplay: false,
        offset: 0,
        duration: function(el, i, l) {
              return 100 + (i * 200);
          }
      })

      // unfortunately, reverse function will not work with latest anime.js updates
      // so i had to duplicate code
      // previously, tl1.reverse() would have suffice
      // sorry, i hate spaghetti

      this.isMenuExtended ? tl1.play() : tl2.play()
    }
  }
};
</script>

<style lang="scss">
@import "styles/style.scss";
//the back to top button
.back2top:hover {
  background-color: #004d57;
  transition: all 0.3s ease;
}

// //------- the NAVBAR Styles ----- //
nav{
	position: fixed;
	top: 0;
	right: -310px;
	z-index: 10;
	margin: 0px;
}

#buttonwaves{
	position: fixed;
	top: 5px;
	right: 5px;
	cursor: pointer;
	z-index: 100;
}

#circle{
	position: fixed;
	top: 5px;
	right: 5px;
	width: 60px;
	height: 60px;
	border-radius: 50%;
	transform-origin: center;
  background-color: white;
}

//think about it - drop shadow on X ?
.lineshadows{
	 -webkit-filter: drop-shadow( -5px -5px 5px #000 ); 
            filter: drop-shadow( -5px -5px 5px #000 );
}

nav ul{
	position: relative;
	top: 70px;
 right: 0px;
	margin-right: 10px;
}

nav ul li{
	text-align: right;
	width: 290px;
	padding-right: 30px;
	margin: 15px 0;
}

nav ul li a{
	color: #004d57;
	font-size: 2em;
	font-family:  $listdecofont;
}

</style>