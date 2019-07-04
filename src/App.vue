<template>
  <div id="app">
    <navigation class="navigation"></navigation>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import navigation from './components/Navigation'

export default {
  components: {
    navigation
  },
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
@import "styles/style.scss";
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity .5s ease;
}

.fade-leave {}

.fade-leave-active {
  transition: opacity .5s ease;
  opacity: 0;
}
</style>