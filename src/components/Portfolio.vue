<template>
  <section class="container-section portfolio" id="portfolio">
    <div class="title-container">
      <h1>Portfolio</h1>
    </div>

    <div id="cards-container">
      <app-card v-for="card in portfolio" :card="card" :key="card.title">{{ card }}</app-card>
    </div>

  </section>
</template>

<script>
import Card from "./PortfolioCard";

export default {
  data() {
    return {
      isLoading: false,
      portfolio: null
    };
  },
  components: {
    "app-card": Card
  },
  created() {
    this.fetchPortfolio();
  },
  methods: {
    fetchPortfolio() {
      this.isLoading = true;
      fetch("./src/components/Portfolio.json")
        .then(res => res.json())
        .then(json => {
          this.portfolio = json;
        });
      this.isLoading = false;
    }
  }
};
</script>

<style lang="scss">
@import "styles/style.scss";


//the portfolio section
#portfolio{
background: #e6e6e6;
background: radial-gradient(circle at center, #CFDEF3, 100%);
position: relative;
}


#cards-container{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;
		padding: 0;
		overflow: hidden;
}

.panel {
	flex: 0 0 auto;
	align-self: flex-start;
	width: 410px;
	height: 330px;
	will-change: transform;
	margin: 50px;
	-webkit-perspective: 500px; 
	-moz-perspective: 500px; 
	-o-perspective: 500px;
	perspective: 500px; 
	backface-visibility:hidden;
	-webkit-backface-visibility:hidden; /* Chrome and Safari */
	-moz-backface-visibility:hidden; /* Firefox */
	@media screen and (max-width: 450px){
		width: 95%;
		margin: 30px;
	}
}

.card {
	width: 100%;
	height: 100%;
	-o-transition: all .5s;
	-ms-transition: all .5s;
	-moz-transition: all .5s;
	-webkit-transition: all .5s;
	transition: all .5s;
	-webkit-backface-visibility: hidden;
	-moz-backface-visibility: hidden;
	backface-visibility: hidden;
	position: absolute;
	top: 0px;
	left: 0px;
	font-family: $defaultfont;
	padding: 5px;
	will-change: transform;
	box-shadow: $shadow;
	background: white;
	overflow: hidden;
}

.card h2{
  font-family: 'Cinzel Decorative', cursive;
  font-size: 18px;
  line-height: 54px;
  height: 54px;
  letter-spacing: 2px;
  font-weight: normal;
		color: white;
		text-align: center;
		//text-shadow: $shadow;
}

.panel img{
 transition: all 2s linear;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.front {
	z-index: 2;
	width: 100%;
	background: #06beb6;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #48b1bf, #06beb6);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #48b1bf, #06beb6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.back {
	z-index: 1;
		width: 100%;
	-webkit-transform: rotateY(-180deg);
	-ms-transform: rotateY(-180deg);
	-moz-transform: rotateY(-180deg);  
	transform: rotateY(-180deg);  
	background-color: #004d57;
	color: white;
	text-align: center;
}

.back a{
	color: white;
}

.rotatecard, .rotatecardback{
  width: 50px;
  height: 50px;
  z-index: 3;
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  border: none;
  border-radius: 50%;
  outline: none;
  margin-top: 5px;
	 background-color: transparent;
  color: white;
}

.rotatecard:hover, .rotatecardback:hover{
	 background-color: rgba(0, 0, 0, 0.7);
}

.rotatecard, .rotatecardback {
  background-image: url("data:image/svg+xml;charset=utf8,%3C?xml version='1.0' encoding='utf-8'?%3E%3C!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='25px' height='18.56px' viewBox='0 0 25 18.56' enable-background='new 0 0 25 18.56' xml:space='preserve'%3E%3Cg%3E%3Cpath opacity='1' fill='%23FFFFFF' d='M9,11.83c-3-0.15-4.86-1.99-4.86-3.87C4.14,6.21,6,4.7,9,4.04V2.86 C5,3.72,1.42,6.11,1.42,8.93c0,2.9,3.58,5.35,7.58,6.14v2.22l5.83-3.89L9,9.51V11.83z'/%3E%3Cpath opacity='1' fill='%23FFFFFF' d='M15,2.67v-1.7l-3.79,2.53L15,6.02V3.96c3,0.61,4.94,2.17,4.94,4c0,1.38-1.25,2.6-3.09,3.38 l3.28,2.14c1.99-1.16,3.33-2.77,3.33-4.55C23.45,5.86,20,3.3,15,2.67z'/%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E");
  background-size: 30px;
  background-repeat: no-repeat;
  background-position: center center;
}


.flipped{
	z-index: 1;
	-webkit-transform: rotateY(180deg);
	-ms-transform: rotateY(180deg);
	-moz-transform: rotateY(180deg);
	transform: rotateY(180deg);
	backface-visibility: hidden;
	 will-change: transform;
}

.backflip {
	z-index: 2;   
	-webkit-transform: rotateY(0deg);
	-ms-transform: rotateY(0deg);
	-moz-transform: rotateY(0deg);
	transform: rotateY(0deg);       
	transition: all .5s;
}

.card-description {
	line-height: 1.45em;
	margin: 15px;
	font-family: $decofont;
	font-weight: 300;
	font-size: 18px;
	@media screen and (min-width: 600px){
		margin: 30px;
	}
}

.linkbuttons{
	margin-top: 25px;
	text-align: center;
}

.linkbuttons a{
	display: inline-block;
	text-align: left;
	width: 130px;
background-color: #06beb6; 
  padding: 25px 25px 25px 15px;
  -webkit-transition: all .4s;
  -o-transition: all .4s;
  transition: all .4s;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: .5s ease;
		box-shadow:
		 1px 1px #DC4233,
		 2px 2px #DC4233,
		  3px 3px #DC4233;
  	@media screen and (max-width: 350px){
  		box-shadow: none;
  		webkit-box-shadow: none;
  	}
}

.linkbuttons a:hover{
  background-color: $accentred;
  transition: all .5s ease;
box-shadow:
1px 1px #00d6d6,
2px 2px #00d6d6,
3px 3px #00d6d6,
4px 4px #00d6d6,
5px 5px #00d6d6,
6px 6px #00d6d6;
-webkit-transform: translateY(-3px);
transform: translateY(-3px);
}

.myicon{
  background-size: 25px;
  background-repeat: no-repeat;
  background-position: right 10px center;
  padding: 0px;
}

.browsericon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3E%3Crect id='backgroundrect' width='100%25' height='100%25' x='0' y='0' fill='none' stroke='none'/%3E%3Cg class='currentLayer' style=''%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cpath d='M 4.8457031 6 C 3.2767031 6 2 7.2985312 2 8.8945312 L 2 43 C 2 43.552 2.448 44 3 44 L 20.955078 44 C 21.709078 43.502 22.341078 42.827 22.830078 42 L 4 42 L 4 20 L 46 20 L 46 42 L 29.292969 42 C 29.079969 42.696 28.830344 43.368 28.527344 44 L 47 44 C 47.552 44 48 43.552 48 43 L 48 8.8945312 C 48 7.2985312 46.723297 6 45.154297 6 L 4.8457031 6 z M 4.8457031 8 L 45.154297 8 C 45.621297 8 46 8.4015312 46 8.8945312 L 46 18 L 4 18 L 4 8.8945312 C 4 8.4015312 4.3787031 8 4.8457031 8 z M 19 10 L 19 11 L 19 16 L 43 16 L 43 10 L 19 10 z M 8 11 A 2 2 0 0 0 6 13 A 2 2 0 0 0 8 15 A 2 2 0 0 0 10 13 A 2 2 0 0 0 8 11 z M 14 11 A 2 2 0 0 0 12 13 A 2 2 0 0 0 14 15 A 2 2 0 0 0 16 13 A 2 2 0 0 0 14 11 z M 21 12 L 41 12 L 41 14 L 21 14 L 21 12 z M 26.984375 24 A 1.0001 1.0001 0 0 0 26.292969 24.292969 L 19.292969 31.292969 A 1.0001 1.0001 0 1 0 20.707031 32.707031 L 26 27.414062 L 26 37.205078 C 26 43.562227 22.223028 47 17.466797 47 L 14 47 A 1.0001 1.0001 0 1 0 14 49 L 17.466797 49 C 23.240565 49 28 44.40193 28 37.205078 L 28 27.414062 L 33.292969 32.707031 A 1.0001 1.0001 0 1 0 34.707031 31.292969 L 27.707031 24.292969 A 1.0001 1.0001 0 0 0 26.984375 24 z' id='svg_1' class='' fill='%23ffffff' fill-opacity='1'/%3E%3C/g%3E%3C/svg%3E");
}

.githubicon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26' style=''%3E%3Crect id='backgroundrect' width='100%25' height='100%25' x='0' y='0' fill='none' stroke='none'/%3E%3Cg class='currentLayer' style=''%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cpath d='M 13 0.1875 C 5.924 0.1875 0.1875 5.924 0.1875 13 C 0.1875 20.076 5.924 25.8125 13 25.8125 C 20.076 25.8125 25.8125 20.076 25.8125 13 C 25.8125 5.924 20.076 0.1875 13 0.1875 z M 13 2.1875 C 18.962 2.1875 23.8125 7.038 23.8125 13 C 23.8125 13.468017 23.776727 13.922485 23.71875 14.375 C 23.520368 14.323791 22.89514 14.165057 22.21875 14.15625 C 21.614897 14.147603 20.886022 14.24925 20.5 14.3125 C 20.603247 13.899091 20.6875 13.45771 20.6875 13 C 20.6875 11.86101 20.258316 10.750701 19.5 9.8125 C 19.781747 8.9303352 20.171546 6.9206274 19.40625 6.15625 C 17.529938 6.15625 16.478239 7.3465406 16.28125 7.59375 C 15.421188 7.281625 14.4925 7.125 13.5 7.125 C 12.532469 7.125 11.592596 7.2648502 10.75 7.5625 C 10.487877 7.2464711 9.4531088 6.15625 7.65625 6.15625 C 6.906967 6.9064336 7.2822334 8.8409068 7.5625 9.75 C 6.7697168 10.702865 6.3125 11.833418 6.3125 13 C 6.3125 13.431427 6.3458137 13.85772 6.4375 14.25 C 6.1076944 14.222144 4.7769378 14.125 4.25 14.125 C 3.7242405 14.125 2.8566645 14.239976 2.28125 14.375 C 2.2232844 13.922485 2.1875 13.468017 2.1875 13 C 2.1875 7.038 7.038 2.1875 13 2.1875 z M 4.25 14.375 C 4.767601 14.375 6.3709094 14.517671 6.53125 14.53125 C 6.5598553 14.626084 6.5906451 14.720466 6.625 14.8125 C 6.0995632 14.771478 4.9705005 14.694193 4.25 14.78125 C 3.3726828 14.885309 2.7230144 15.235508 2.46875 15.375 C 2.413807 15.130271 2.3504873 14.875634 2.3125 14.625 C 2.8624878 14.494238 3.7631846 14.375 4.25 14.375 z M 22.21875 14.40625 C 22.874177 14.414794 23.521117 14.554982 23.6875 14.59375 C 23.670669 14.706933 23.645323 14.825479 23.625 14.9375 C 23.538729 14.912784 22.757441 14.6767 21.9375 14.65625 C 21.534865 14.646365 20.898805 14.709935 20.40625 14.75 C 20.428245 14.688242 20.449307 14.625497 20.46875 14.5625 C 20.808745 14.5138 21.615612 14.397611 22.21875 14.40625 z M 21.90625 14.90625 C 22.702815 14.92612 23.548008 15.174398 23.59375 15.1875 C 22.856805 18.779176 20.337077 21.699548 17 23.03125 L 17 21.3125 C 17 20.230368 16.353923 18.824179 15.4375 18.125 C 18.02293 17.754177 19.631012 16.608797 20.3125 15 C 20.777839 14.960131 21.487574 14.895971 21.90625 14.90625 z M 5.0625 15 C 5.7777543 15.002785 6.4171329 15.039147 6.71875 15.0625 C 7.4150651 16.638237 9.0108177 17.759018 11.5625 18.125 C 11.272811 18.34609 11.003342 18.637974 10.78125 18.96875 C 10.773232 18.980691 10.757915 18.98796 10.75 19 C 10.251933 19.601258 9.3134279 19.5625 8.4375 19.5625 C 7.5445 19.5625 7.00925 18.84575 6.53125 18.21875 C 6.05125 17.59275 5.42475 17.538 5.09375 17.5 C 4.76075 17.465 4.67375 17.631 4.84375 17.75 C 5.81775 18.432 6.20075 19.271 6.59375 20 C 6.94775 20.656 7.679 21 8.5 21 L 10.03125 21 C 10.021042 21.103006 10 21.214199 10 21.3125 L 10 23.375 C 6.3180985 22.312068 3.4647679 19.359509 2.53125 15.625 C 2.7276581 15.515547 3.4121561 15.134335 4.28125 15.03125 C 4.4888823 15.006162 4.7657564 14.998845 5.0625 15 z M 13.5 21 C 13.776 21 14 21.224 14 21.5 L 14 23.75 C 13.667169 23.781001 13.34079 23.8125 13 23.8125 L 13 21.5 C 13 21.224 13.224 21 13.5 21 z M 11.5 21.59375 C 11.776 21.59375 12 21.81775 12 22.09375 L 12 23.75 C 11.667586 23.719037 11.323077 23.685494 11 23.625 L 11 22.09375 C 11 21.81775 11.224 21.59375 11.5 21.59375 z M 15.5 21.59375 C 15.776 21.59375 16 21.81775 16 22.09375 L 16 23.375 C 15.672594 23.469514 15.339269 23.561476 15 23.625 L 15 22.09375 C 15 21.81775 15.224 21.59375 15.5 21.59375 z' id='svg_1' class='selected' fill='%23ffffff' fill-opacity='1'/%3E%3C/g%3E%3C/svg%3E");
}

.codepenicon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' enable-background='new 0 0 48 48' xml:space='preserve' width='48' height='48' style=''%3E%3Crect id='backgroundrect' width='100%25' height='100%25' x='0' y='0' fill='none' stroke='none'/%3E%3Cg class='currentLayer' style=''%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cg id='svg_1' class='' stroke='%23ffffff' stroke-opacity='1'%3E%3Cpolygon fill='none' stroke='%23ffffff' stroke-width='4' stroke-miterlimit='10' points='41,18 24,7 7,18 7,30 24,41 41,30 ' id='svg_2' stroke-opacity='1'/%3E%3Cpolyline fill='none' stroke='%23ffffff' stroke-width='4' stroke-miterlimit='10' points='7,18 24,30 41,18 ' id='svg_3' stroke-opacity='1'/%3E%3Cpolyline fill='none' stroke='%23ffffff' stroke-width='4' stroke-miterlimit='10' points='41,30 24,18.2 7,30 ' id='svg_4' stroke-opacity='1'/%3E%3Cline fill='none' stroke='%23ffffff' stroke-width='4' stroke-miterlimit='10' x1='24' y1='18.100000381469727' x2='24' y2='8' id='svg_5'/%3E%3Cline fill='none' stroke='%23ffffff' stroke-width='4' stroke-miterlimit='10' x1='24' y1='40' x2='24' y2='29.899999618530273' id='svg_6'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}


</style>
