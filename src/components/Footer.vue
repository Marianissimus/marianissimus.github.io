<template>
    <footer-links></footer-links>
    <!--<app-form/>-->
</template>

<script>
import Form from './Form'
import FooterLinks from './FooterLinks'
export default {
  components: {
    'app-form': Form,
    'footer-links': FooterLinks
  }
};
</script>

<style lang="scss">
@import "styles/style.scss";

#contact{
  background: #004d57;
  position: relative;
  background-attachment: fixed;
  background-size: auto;
  min-height: 100vh;

	@media screen and (max-width: 375px){
  	background-image: url("/images/bottom375.jpg");
  }

 @media screen and (min-width: 376px) and (max-width: 480px){
  	background-image: url("/images/bottom480.jpg");
  }

  @media screen and (min-width: 481px) and (max-width: 768px){
  	background-image: url("/images/bottom768.jpg");
 }

 @media screen and (min-width: 769px) and (max-width: 1280px){
  	background-image: url("/images/bottom1280.jpg");
 } 

  @media screen and (min-width: 1281px) and (max-width: 1366px){
  	background-image: url("/images/bottom1366.jpg");
 }

  @media screen and (min-width: 1367px){
  	background-image: url("/images/bottom.jpg");
 } 
}

#contactscontainer{
	display: flex;
	flex-direction: column;
	flex-wrap: no-wrap;
	justify-content: space-between;
	align-items: center;
	padding: 70px;
}

#contact h2{
	font-size: 1.3em;
	color: #fff;
	font-family: $decofont;
	letter-spacing: 3px;
	margin-bottom: 70px;
	@media screen and (max-width: 600px){
		position: relative;
		top: -50px;
		font-size: 1em;
	}
}

</style>