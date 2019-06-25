<template>
  <div class="card">
    <h2>{{ card.title }}</h2>
    <p>{{ card.description }}</p>
    <a v-if="card.externalUrls.browser" :href="card.externalUrls.browser">browser</a>
    <a v-else :href="card.externalUrls.codepen">codepen</a>
    <img :src="card.imageUrl">
  </div>
</template>
 
 <script>
export default {
  props: ["card"]
};
</script>

<style scoped>
.card {
    display: inline-block;
    margin: 10px;
    width: 300px;
    border: 1px solid orange;
    background-color: aqua;
}
</style>


 
 