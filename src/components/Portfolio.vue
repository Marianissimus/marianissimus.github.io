<template>
  <div>
    <!-- this is from the portfolio
    {{ portfolio }} -->
    <app-card v-for="card in portfolio" :card="card" :key="card.title">{{ card }}</app-card>
  </div>
</template>

<script>
import Card from './PortfolioCard'

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
  created () {
    this.fetchPortfolio()
  },
  methods: {
    fetchPortfolio() {
      this.isLoading = true
      fetch('./src/components/Portfolio.json')
      .then(res => res.json())
      .then(json =>{
          this.portfolio = json
      })
      this.isLoading = false
    }
  }
};
</script>

