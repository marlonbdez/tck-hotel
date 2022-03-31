<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="cards-container">
      <AppCard v-for="card in cards" :key="card.id" :option="card.id" :title="card.title" :services="card.services"  v-model="selectedCard" />
    </div>
  </div>
</template>

<script>
import json from '@/assets/json/data.json'
import AppCard from '@/components/AppCard.vue'

export default {
  name: 'HomeView',
  components: {
    AppCard
  },
  data: () => ({
    cards: json,
    selectedCard: null
  })
}
</script>

<style lang="scss" scoped>
  .cards-container {
    display: flex;
    gap: 1rem;
  }
</style>
