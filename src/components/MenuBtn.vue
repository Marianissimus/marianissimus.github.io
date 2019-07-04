<template>
  <span style="cursor: pointer;"  @click.prevent="toggleAnimation">
    <!-- <a href="#container" class="back2top">
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60">
        <path
          fill="#FFF"
          d="M32.65,15c1.4,3.84,3.68,6.84,6.83,9.01v1.64c-2.21-0.74-4.29-1.98-6.25-3.73v10.37h6.25v2.29h-6.25v4.07 c0,1.75-0.62,3.24-1.86,4.48c-1.24,1.24-2.74,1.86-4.5,1.86c-1.74,0-3.24-0.62-4.48-1.86c-1.24-1.24-1.86-2.73-1.86-4.48 c0-1.74,0.62-3.24,1.86-4.49s2.74-1.88,4.48-1.88h4.1V21.92c-1.96,1.74-4.05,2.99-6.27,3.73v-1.64c3.15-2.16,5.42-5.16,6.83-9.01 H32.65z M30.96,34.58h-4.1c-1.1,0-2.05,0.4-2.86,1.2c-0.81,0.8-1.21,1.76-1.21,2.87c0,1.1,0.4,2.05,1.21,2.86 c0.81,0.81,1.76,1.21,2.86,1.21c1.13,0,2.09-0.4,2.89-1.2c0.8-0.8,1.2-1.76,1.2-2.87V34.58z"
          id="Layer_4"
        ></path>
      </svg>
    </a> -->

      <div id="menubuttoncontainer">
        <div id="circle"></div>
        <span id="menubutton">
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
            xml:space="preserve"
          >
            <g id="Layer_2">
              <g>
                <g id="line3">
                  <path
                    fill="none"
                    stroke="#004d57"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    d="M16.04,18.83c4.7,0,4.7,6,9.4,6
				c4.7,0,4.7-6,9.4-6s4.7,6,9.4,6"
                  ></path>
                </g>
                <g id="line2">
                  <path
                    fill="none"
                    stroke="#004d57"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    d="M15.83,26.5c4.7,0,4.7,6,9.4,6c4.7,0,4.7-6,9.4-6
				s4.7,6,9.4,6"
                  ></path>
                </g>
                <g id="line1">
                  <path
                    fill="none"
                    stroke="red"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    d="M15.83,35.17c4.7,0,4.7,6,9.4,6
				c4.7,0,4.7-6,9.4-6s4.7,6,9.4,6"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </span>
      </div>
      
      <nav>
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
  </span>
</template>

<script>
import anime from '../../sites/ahoy/scripts/anime.min.js'
export default {
  data () {
    return {
      isMenuExtended: false
    }
  },
  methods: {
    toggleAnimation () {
      this.menuAnimation()
    },
    menuAnimation() {
     this.isMenuExtended = !this.isMenuExtended
     const tl = anime.timeline({
        direction: 'reverse'
      })
      .add({
        targets: document.getElementById('circle'),
        duration: 200,
        scale: [1, 50]
      })
      // .add({
      //   targets: document.querySelector('#line2 path'),
      //   opacity: [1, 0],
      //   duration: 100,
      //   autoplay: false,
      //   loop: false,
      //   easing: 'easeInOutExpo',
      //   offset: 100
      //   })
      // .add({
      //   targets: document.querySelector('#line1 path'),
      //   rotate: [0, '30deg'],
      //   translateX: [0, -10],
      //   duration: 150,
      //   autoplay: false,
      //   easing: 'easeOutExpo',
      //   })
      // .add({
      //   targets: document.querySelector('#line3 path'),
      //   rotate: [0, '30deg'],
      //   duration: 200,
      //   autoplay: false,
      //   easing: 'easeOutExpo'
      //   })
      // .add({
      //   targets: document.getElementById('circle'),
      //   easing: 'easeOutBack',
      //   duration: [200, 400],
      //   width: [60, 290],
      //   right: [5, 10],
      //   top: [5, 60],
      //   rotate: '1turn',
      //   height: [60, 270],
      //   loop: false,
      //   borderRadius: ['50%', '0%'],
      //   backgroundColor: ["rgb(0, 77, 87)", "rgb(255, 255, 255)"],
      //   autoplay: false,
      //   offset: 0
      //   })
      .add({
        targets: document.querySelectorAll('nav ul li'),
        translateX: [0, -300],
        easing: 'easeInOutQuad',
        direction: 'forwards',
        autoplay: false,
        offset: 200,
        duration: function(el, i, l) {
            return 100 + (i * 200);
          }
      })
      !this.isMenuExtended ? tl.restart() : tl.reverse()
    }
  }
}
</script>

<style lang="scss">
@import "styles/style.scss";
//the back to top button
.back2top {
  color: white;
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 10px;
  right: 5px;
  z-index: 1000; 
 
 	border-radius: 50%;
  transition: all .3s ease;
  font-size: 2em;
  text-align: center;
 }


.back2top:hover {
  background-color:#004d57; 
  transition: all .3s ease;
 }

// //------- the NAVBAR Styles ----- //
nav {
	position: fixed;
	top: 50%;
  margin-top: -50px;
	right: 0px;
	z-index: 10;
	margin: 0px;
}

nav ul li{
  position: relative;
  right: -230px;
}

nav ul li a{
  color: #004d57;
  font-size: 2em;
  font-family:  $listdecofont;
  padding-right: 30px;
  margin: 15px 0;
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
	top: 0;
	right: 0;
	width: 60px;
	height: 60px;
	border-radius: 50%;
  transform-origin: center;
  background-color: yellow;
  z-index: 10;
}

#line2 path {
  transform-origin: left bottom 0;
}

#line1 path {
  transform-origin: left bottom 0;
}

// //think about it - drop shadow on X ?
// .lineshadows{
// 	 -webkit-filter: drop-shadow( -5px -5px 5px #000 ); 
//             filter: drop-shadow( -5px -5px 5px #000 );
// }

</style>