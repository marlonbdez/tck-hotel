<template>
  <div class="home">
    <HomeHeader />
    <div class="home__cards">
      <CardInfo v-for="card in cards" :key="card.id" :option="card.id" :title="card.title" :services="card.services" v-model="selectedCard" />
    </div>
  </div>
</template>

<script>
import json from '@/assets/json/data.json'
import { mapGetters, mapActions } from 'vuex'
import HomeHeader from '@/components/HomeHeader.vue'
import CardInfo from '@/components/CardInfo.vue'

export default {
  name: 'HomeView',
  components: {
    HomeHeader,
    CardInfo
  },
  data: () => ({
    cards: json,
    selectedCard: null
  }),
  computed: {
    ...mapGetters(['getSelectedCard'])
  },
  watch: {
    selectedCard (value) {
      this.setSelectedCard(value)
    }
  },
  methods: {
    ...mapActions(['setSelectedCard']),
    setInitialData () {
      this.selectedCard = this.getSelectedCard
    }
  },
  mounted () {
    this.setInitialData()
  }
}
</script>

<style lang="scss" scoped>
.home__cards {
  display: grid;
  justify-content: center;
  align-items: start;
  gap: 1rem;
  margin-top: 2.5rem;

  @include tablet-portrait {
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(auto-fit, minmax(12.5em, 1fr));
  }
}
</style>
