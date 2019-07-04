<template>
  <div class="panel">
    
    <div class="front card" ref="front">
      <h2>{{ card.title }}</h2>
      <img :src="card.imageUrl">
      <button class="rotatecard" @click="rotateCard"></button>
    </div>

    <div class="back card" ref="back">
      <div class="card-description">
        {{ card.description }}
      </div>
       <div class="linkbuttons">
        <a v-if="card.externalUrls.browser" :href="card.externalUrls.browser" class="browsericon myicon">browser</a>
        <a v-else :href="card.externalUrls.codepen" class="codepenicon myicon">codepen</a>
       </div>
       <button class="rotatecardback" @click="rotateCard"></button>
    </div>

  </div>
</template>

 <script>
export default {
  props: ["card"],
  data () {
    return {
    }
  },
  methods: {
    rotateCard () {
      this.$refs.front.classList.toggle('flipped')
      this.$refs.back.classList.toggle('backflip')
    }
  }
};
</script>

<style lang="scss">
@import "styles/style.scss";
</style>

