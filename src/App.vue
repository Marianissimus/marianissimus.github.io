<template>
  <div id="app">
    This is it
    Link to old <a href="../sites/CurrentRun/index.html">portfolio</a>
    now for the fun part
    <app-header></app-header>
    <app-portfolio></app-portfolio>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Portfolio from './components/Portfolio.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    'app-header': Header,
    'app-portfolio': Portfolio,
    'app-footer': Footer
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
</style>
